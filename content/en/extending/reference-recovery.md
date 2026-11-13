---
title: Join a reference recovery transaction
description: Restore domain structure and values with the shared generation
  publication order.
uid: extending.reference-recovery
kind: how-to
owners:
  - Inno.References
contracts:
  - project.inno-references#reference-and-recovery-contract
exampleMode: host
exampleProjects:
  - Inno.References
---
# Join a reference recovery transaction

Implement `IReferenceRecoveryParticipant` when a domain must preserve neutral state while objects, resolvers or their code generation change. Compose it with the host's existing `GenerationCoordinator`; do not introduce a second recovery owner or derive from an unrelated domain base class.

## Capture neutral state and stable slots

Capture each slot using a nonempty owner persistent ID and stable path. Duplicate keys fail before activation. `SerializedMissingState` copies its byte payload, so old plugin objects, `Type` instances and delegates need not survive through a snapshot.

The candidate `ReferenceCatalog` contains each protocol resolver once and has a positive generation number. Resolver instances still belong to the selected generation. They must resolve against the correct canonical identity domain and return the exact input descriptor, not a replacement with similar fields.

## Use the five-phase protocol

| Phase | Domain responsibility |
| --- | --- |
| Prepare | Capture and quiesce while the old publication is still valid. |
| Apply | After candidate publication, build provisional structure and apply values. |
| Validate | Check the complete batch after every participant has applied and all slots have resolved. |
| Complete | After commit, release old state and finish retirement. |
| Rollback | Reverse structure, restore the old publication, then restore old values. |

`RollbackStructure` and `RestorePreviousState` are distinct calls. The coordinator restores publication between them. Restoring old values inside an Apply catch can invoke the wrong serializer or resolver generation.

This host helper composes existing participants and publication. It does not manufacture a publication or claim that recovery has succeeded merely because the transaction was constructed.

```csharp
using System.Collections.Generic;
using Inno.Extensibility.Reload;
using Inno.References;

public static class ReferenceRecovery
{
    public static TProbe Recover<TProbe>(
        GenerationCoordinator generations,
        IGenerationPublication<TProbe> publication,
        ReferenceCatalog candidate,
        IEnumerable<SerializedMissingState> states,
        IEnumerable<IReferenceRecoveryParticipant> participants)
        where TProbe : IAssemblyUnloadProbe
    {
        var recovery = new ReferenceRecoveryTransaction(candidate, states, participants);
        return generations.Execute("reference recovery", publication, [recovery]);
    }
}
```

Use this on the capture thread at the owner's safe point. Only the transaction may observe provisional objects. The returned unload probe is not proof of collection; the outer owner must continue the shared retirement barrier without retaining the very generation it is checking.

## Preserve failures and ownership

Prepare registers a participant before calling it, so partial Prepare receives compensation. An unattempted participant does not receive domain rollback. Validate may accept a genuine Missing state but must not turn it into a fabricated Resolved result.

Ordinary cleanup failures aggregate while other safe cleanup proceeds. A direct or nested pending-retirement signal stops lower dependency teardown and retains the original failure and ownership. A faulted host is replaced, not reset by retrying Clear or Dispose.

Successful completion releases participants and catalog references. Diagnostic changes may remain, but runtime identities in them are transient. A full rollback clears changes.

## Compose real domains without inventing object identities

Scene recovery uses actual element and asset-reference slots. Plugin availability uses a structural participant that restores asset mounts, catalog and effective settings; that participant can have zero object slots. Foundation Settings and Graphs do not acquire a reverse dependency on References merely to participate: the higher-level owner composes their neutral state.

Read [generation publication](../architecture/generation-publication.md) and [plugin host composition](plugin-host.md) for the surrounding admission and ownership requirements.
