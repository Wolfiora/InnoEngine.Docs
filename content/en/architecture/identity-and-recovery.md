---
title: Identity, recovery and generation boundaries
description: Connect persistent intent, live registration, neutral state and verified retirement across engine domains.
uid: architecture.identity-and-recovery
kind: explanation
owners: [Inno.Core.Identity, Inno.References, Inno.Extensibility.Reload]
contracts: [architecture.ownership, architecture.generation-publication]
---
# Identity, recovery and generation boundaries

Identity, Missing recovery and reload are one chain: saved intent identifies a logical object; the current generation resolves that intent; unavailable targets retain neutral recovery state; a transaction reconstructs them; retirement proves that replaced code no longer remains reachable.

Core Identity supplies registration mechanics. References supplies persistent slots and recovery contracts. Domain owners supply their state and behavior. The shared generation coordinator orders publication and retirement. None of these responsibilities is a second global object manager.

## Match identity to lifetime

| Identity | What it identifies | Persistence boundary |
| --- | --- | --- |
| Object persistent ID | The same logical Asset, Scene element or authored object | Saved with its domain protocol. |
| Object runtime identity | One current registration in its domain/generation | Never saved as a durable reference. |
| Stable type ID | The logical type across assembly generations | Suitable for reconstruction. |
| Runtime type identity | One selected TypeCache generation | Transient. |
| Plugin, feature or importer ID | An open protocol or extension slot | Stable according to that protocol; not a live-object address. |
| Device/generation handle | A resource belonging to one live owner | Must pass that owner's generation checks. |
| Artifact hash or content identity | One immutable content/build result | Does not replace Asset identity. |
| Collection position | An order or slot in a particular structure | Cannot identify a logical object by itself. |

Edit, Play, Player and authoring domains have distinct lifetimes. Runtime lookup is meaningful only in the domain that issued the identity. Reconstructed objects retain persistent identity and acquire new runtime registrations. Duplicate live persistent identities fail rather than silently replacing each other.

Domain indexes may map paths or semantic IDs to persistent identities. Live resolution remains with the allocator. A view model or immutable metric does not need a new random object token merely to display an existing object.

## Route interactions through current registration

Selection, focus, deferred actions and drag/drop re-resolve current objects. The Editor's drag payload carries a runtime ID with an explicit domain protocol; preview and delivery both validate current ownership, type, scope and target policy. Successful persistence records stable intent, not the runtime payload.

Quiescing a generation cancels pending drag/presentation work. Cross-domain import or instantiation is an explicit operation, not a reinterpretation of another allocator's integer. See [Editor execution](editor-ui.md) and [identity registration](../manual/register-identity.md).

## Capture intent without retaining old code

A reference slot identifies its owner and stable property/path. Its descriptor retains target identity, reference kind, expected stable type and diagnostic names. Names and paths help the reader; they do not authorize a different same-named object to take over the reference.

Missing state retains applicable owner/target identities, stable type or extension identity, neutral property bytes, dependencies, structural position/order/connections, lifecycle values and History before/after data. It must not retain old types, delegates, instances, callbacks, native pointers or runtime identities as persistent payload.

Scene Missing components/systems, unavailable graph definitions, inactive settings contributions and History barriers are domain presentations of retained state. A required unresolved runtime dependency can reject a Player build even while the Editor preserves it for repair. Read [reference states](../manual/references/resolve-missing.md) and [Scene recovery](../manual/scenes/missing.md).

## Use the owner's complete serialization context

Session, authoring, History and Play reconstruction obtain their full resolver/asset/serialization context from composition. Starting with an empty context is valid only for a proven context-free value graph. It is not a general shortcut for serializing Scene or Asset references.

Prefab reference remapping may include valid newly created objects awaiting structural commit. Whole-Scene capture still observes the committed structure. Failed instantiation must remove its new registrations. See [serialization](serialization.md) and the [Scene lifecycle](scene-lifecycle.md).

## Recover atomically and preserve user work

Capture Missing slots without changing live state. Resolve the complete candidate, validate identity/type/structure/dependencies, create provisional objects and restore values with the selected context. Publish only at the owner's safe point. Failure restores structure, prior publication/resolvers and then prior values in the shared transaction order.

Automatic Missing-to-Resolved changes do not invent a user edit or dirty a clean saved Scene. Explicit user deletion, movement, clearing or reassignment still produces normal reversible edits. Nested unresolved references can remain Missing inside a restored object. Failed construction or property restoration retains the original placeholder rather than publishing half a recovery.

History barriers preserve stack position and payload. Reinstalling the same type/handler can make the original action available again; Undo that reconstructs an unavailable type creates its Missing representation with the original identity. See [recovery participants](../extending/reference-recovery.md) and [History](../extending/editor-history.md).

## Distinguish restoration from deletion guarantees

Restore an Asset with its original source and `.imeta` when identity must survive. A different persistent ID is a different Asset, even at the same path. Editor Undo archives retain source, sidecar and required companions.

The current `AssetPipeline.Delete` removes source and `.imeta` while retaining a Library tombstone. Discarding Library as well is not guaranteed to preserve that identity. Durable tombstone improvement remains an engine open item; documentation does not turn that requirement into implemented behavior.

## Retirement must establish the actual boundary

Pure-data candidates still validate, publish and roll back, but need not force GC when no collectible code is involved. If their concrete type, converter, importer or provider belongs to replaced code, they participate in the same assembly generation transaction.

Stop admission and release every retaining root: catalog/metadata snapshots, services, static/generic caches, event registrations, pending tasks/continuations, thread-local values, native callbacks/handles, presentation state and diagnostic objects that retain collectible types. Long-lived state holds stable IDs, neutral bytes, immutable host descriptors or appropriate weak references.

Unload requests and completed tasks are not proof of retirement. The shared barrier performs full GC, finalizers and full GC, then confirms all weak probes. Nested Pending preserves dependencies; terminal retention faults the host. A post-commit failure cannot claim the already published candidate was rolled back. [Generation publication](generation-publication.md) and [script reload](script-reload.md) define those states and the joint Runtime/Editor script generation.

Content-reader generations and code generations remain distinct. Releasing a Pack reader does not prove an ALC was collected. Snapshot capture keys are transient proofs for immutable observation; they do not create a new persistent format or bypass authoritative capture for unproved mutable state. See [snapshot capture](../manual/serialization/capture-snapshots.md).
