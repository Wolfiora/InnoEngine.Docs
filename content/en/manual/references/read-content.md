---
title: Read current content for one operation
description: Resolve a bounded identity snapshot without keeping live roots across frames or reloads.
uid: manual.references.read-content
kind: how-to
owners:
  - Inno.References
contracts:
  - project.inno-references#content-read-contract
exampleMode: host
exampleProjects:
  - Inno.References
---
# Read current content for one operation

Use `ContentReadScope` when a consumer needs ordered content roots without depending directly on the Scene or Asset owner. The producer supplies registered identities; the scope retains weak identity snapshots, not live root objects.

## Capture, read and release

The following host helper counts compatible roots during one synchronous control-thread operation. Its caller supplies the current registered root identities; it does not create an identity domain or change object ownership.

```csharp
using System.Collections.Generic;
using Inno.Core.Identity;
using Inno.References;

public static class ContentInspection
{
    public static int Count<T>(IEnumerable<Identity> roots) where T : IdentityObject
    {
        using var scope = new ContentReadScope(roots);
        return scope.GetValues<T>().Count;
    }
}
```

For a real renderer or audio consumer, copy the needed values into its neutral domain snapshot during this operation. Do not pass the returned live objects to a background callback or retain them for a later frame.

## Understand the snapshot boundary

- Roots must be registered and have distinct persistent IDs. An optional active content ID must belong to the captured set.
- `GetValues<T>` omits stale or incompatible roots. An empty result can mean no compatible live content, not a broken scope.
- `TryGetValue<T>` selects a root by persistent ID but resolves its originally captured runtime slot. It does not rebind to a replacement generation with the same persistent ID.
- Lookup requires the capture thread and fails after disposal. Immutable identity metadata remains inspectable after disposal.
- The caller owns the scope; disposing it revokes lookups without disposing any roots.

Host code uses `Inno.References`. The actual runtime script projection selects this type under `InnoEngine.References`; it does not expose host recovery composition just because both live in the same CLR project.

Continue with [ownership](../../architecture/ownership.md) or the [precise content-read contract](../../api/projects/inno-references.md#content-read-contract).
