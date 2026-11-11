---
title: Run and stop Play Mode
description: Simulate isolated scene copies while preserving Edit objects, history and generation safety.
uid: manual.editor.play-mode
kind: how-to
owners: [Inno.Editor.PlayMode]
contracts: [project.inno-editor-playmode]
---
# Run and stop Play Mode

Play Mode runs independent copies of the loaded Edit scenes. It does not simulate by modifying Edit objects and restoring their bytes afterward. Use the centered Play toolbar action or Command/Ctrl+P; both use the same action/state query, including when a scene/game panel has focus. Text input and exclusive modals retain their normal shortcut rules.

## Wait for the requested scripts

Entering Play requests a fresh compilation ticket. Only that ticket's successful compilation, activation and retirement verification authorizes preparation. A stale, canceled, superseded or failed ticket leaves the Edit world in place. Do not use the last successful result from another request.

| State | Meaning |
| --- | --- |
| Editing | Edit documents are active; simulation is stopped. |
| Compiling | Waiting for this entry request's ticket. |
| Preparing | Building the isolated runtime world and its owners. |
| Playing | The Play session receives simulation lifecycle callbacks. |
| Stopping | Simulation has stopped; resource retirement is still in progress. |
| Failed | A transition or simulation failed; its diagnostic remains available. |

The toolbar shows Stop during compilation/preparation/play, and disables it while stopping. A new entry or explicit exit can clear a recoverable failure, but a faulted generation gate requires a host restart.

## Keep the Edit world intact

Preparation preserves the Edit undo/redo branches, creates a temporary History branch and deserializes all loaded scenes into an independent RuntimeSession. Scene/object/component/system persistent IDs, order and active scene are retained, while runtime identities and instances belong to the new session.

Only a complete candidate publishes the presentation switch. Game View, Scene View, Hierarchy, Inspector, Selection and gizmos then refer to the same runtime world. Selection is mapped by persistent ID. Failed preparation compensates candidate owners before reporting failure; it does not publish a partially prepared session.

The Play audio generation is separate and the Edit master bus is paused. Simulation runs in the Play session scope. Editor services and script activation remain in the Edit scope; scene-facing presentation and edits explicitly enter the workspace's current session. Not every Editor callback becomes a Play callback.

## Make temporary runtime edits

Hierarchy, Inspector, gizmos and Scene actions may edit the current runtime copies. They do not thereby gain permission to edit same-ID objects in the Edit world. Play workspace `canPersist` is false and its `IsDirty` result is false. Scene/Prefab Open/Save is rejected, no unsaved marker is created for the runtime copy, and runtime state does not enter project assets or `editor.ini`.

Play History is temporary. Source relocation/change synchronization is queued until Edit resumes. The saved Editor setup still describes the pre-Play documents, not runtime-only scenes.

## Stop before reloading

Manual Scripts/Plugins Reload is disabled until Play fully retires. Automatic source/plugin changes keep the latest pending request; they do not automatically stop the game. The stop action remains usable while those changes wait.

Playing retains a generation read lease. Preparing, Stopping and Failed also block activation. The entry's required compilation may activate while Compiling only before any runtime session, scene lease or generation reader exists; that exception does not admit another manual Reload.

## Retire before reporting Editing

Stopping immediately prevents later simulation callbacks. Release Play audio, switch scene presentation/selection back to the existing Edit world, retire the Play RuntimeSession and its runtime-only resources, then discard temporary History and restore both original Edit branches. If no matching Edit object exists for the last runtime selection, restore the pre-Play selection.

Pending cleanup retains Session/History ownership and remains Stopping for later safe-point advancement. A generation-change reservation prevents new Play, Reload, Build and Export during retirement. Timeouts become explicit faults rather than another attempt to start. Simulation exceptions stop further callbacks and request Edit recovery; retained diagnostics use text, not an exception object that roots a collectible script generation.

Host shutdown calls the Play loop's `Quiesce` before dismantling modules/layers/presentation. This is a shutdown boundary, not a hidden manual-Reload shortcut. Only the host advances the Play loop once per frame; features must not tick it again. Editor restart always begins in Edit mode.

## Observe without owning the controller

`ListenStateChanges` returns a subscription lease that the observer disposes. All observers are notified before exceptions are aggregated. Pending retirement retains the event owner; no second UI event bus is needed.

Console's default Clear on Play clears ordinary previous-run logs when a new request enters Compiling, while current compiler/import/render diagnostics remain. Logs from the current request remain inspectable after stopping. Change this policy in Settings, not a duplicate toolbar state. See the [host and script contracts](../../api/projects/inno-editor-playmode.md).
