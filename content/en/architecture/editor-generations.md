---
title: Editor generations and retirement
description: How Editor extensions activate, roll back, quarantine failures and
  retain ownership during retirement.
uid: architecture.editor-generations
kind: explanation
owners:
  - Inno.Editor.Core
  - Inno.Editor.Interactions
contracts:
  - architecture.ownership
  - manual.identity-and-missing
---
# Editor generations and retirement

An Editor generation combines discovered extension types with the instances, routing and handlers that use them. Replacing it is a coordinated ownership transaction. A drawing failure can quarantine an instance; a failure to release an instance's resources cannot be treated as successful retirement.

## One coordinator, separate feature owners

`EditorReloadCoordinator` coordinates neutral generation changes. It does not implement Scene restoration, Missing resolution or script compilation. Scripting prepares the assembly session; Scene and other features register their own participants through Core.

The coordinator's index holds participants weakly. `Register` returns a registration lease that holds the participant strongly; keep that lease for the feature's active lifetime. Disposing it unregisters before releasing the strong reference. If the whole feature and lease become unowned, the weak index does not pin them.

Participants capture transactions without changing live state. Their `IGenerationChange` protocol is the shared Foundation protocol, not a separate Editor transaction interface.

## Activation order

The coordinated publication sequence is:

1. Prepare every participant for activation.
2. Activate the candidate assembly session.
3. Apply optional external state synchronization.
4. Apply every participant's change.
5. Complete assembly publication.
6. Complete participant cleanup.

Assembly state and external Asset/Settings state share this publication boundary. Before commit, failure restores feature structure in reverse order, then assembly and external resolvers, then previous feature properties in reverse order. Restoring an external resolver last would let a feature restore old properties against the candidate resolver.

After commit, cleanup errors are reported and fault the gate. They cannot honestly be represented as rollback of an already published generation. Pending retirement remains distinct from an ordinary aggregate exception: retain the transaction, stop further unload/restore work and block Play, Build, Export and another reload until its owner resolves the pending state.

## Extension activation

Interactions builds modules, actions, menu sources, drops, panels and modals from one TypeCache snapshot. Construction or identity conflicts reject the candidate while the previous generation remains usable.

Activation cancels drags and pending action, presentation and menu state. It detaches old panels and stops old modules in reverse order, then starts new modules in declared order, attaches new panels and restores their state. Candidate ownership is registered before callbacks run, including partial failures.

A module-start failure compensates the candidate and restores the previous snapshot, History handler map and stopped extensions. A panel-attach failure can isolate only that panel after detach compensation succeeds. Retained host instances are not started twice or disposed through the old snapshot. Collectible plugin instances retire instead of pinning their old assembly load context.

Lifecycle callbacks see the staging catalog. A reentrant rebuild waits until global completion and becomes a separate transaction.

## Quarantine is a presentation boundary

An unsuccessful panel attach or draw closes and quarantines that panel for the current generation. Quarantined panels do not restore, capture or draw. Module update failures, modal state/draw failures and presentation-policy getter failures are also isolated at their applicable instance boundary.

Stop, detach and dispose are ownership boundaries. Ordinary failures aggregate and fault the gate. Pending retirement drains through the shared bounded retirement protocol on the control thread; timeout retains owners and blocks the generation. Dependencies, History and native backends must remain alive while their readers still require them. A failed attempt to restart the previous generation also faults the gate.

## Admission and execution scope

`RegisterGuard` returns a caller-owned guard lease; the coordinator holds the guard weakly. Play Mode uses a guard without creating a Scripting-to-Play dependency. UI availability and actual execution both check current admission.

Manual reload is blocked while Preparing, Playing or Stopping. Automatic changes stay queued until the Editor fully returns to Editing. Compilation before entering Play may progress, but an active Play session keeps its generation reading protection until retirement completes. A guard does not automatically stop the game or override Pending/Faulted state.

Module updates and reload transactions use the Edit session. Play ticks and runtime-object operations enter their owning Play session. Each Scene transaction phase enters its own owner scope; identity replacement does not depend on whichever ambient domain the UI last used.

## Shutdown

Normal shutdown captures final extension state and writes it atomically before stopping extensions. It then detaches panels, stops modules, clears action/drag state, disposes History and retires the extension snapshot. The runtime remembers completed shutdown stages. Pending retirement neither marks it disposed nor discards the snapshot, and further start/update calls are rejected.

Ordinary terminal errors still permit remaining cleanup attempts and are reported together. The ImGui runtime, Editor layer and host resource stack preserve this same distinction. They use the shared lifetime owner rather than an independent cleanup mechanism.

## Related tasks

- [Preserve extension state](../extending/editor-state.md).
- [Add a panel](../extending/editor-panels.md).
- [Create a module](../extending/editor-modules.md).
- [Editor Core](projects/inno-editor-core.md).
