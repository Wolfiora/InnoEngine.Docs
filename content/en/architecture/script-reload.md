---
title: Script reload and recovery
description: Treat project scripts as one authoring generation while preserving
  last-good state and explicit plugin retirement.
uid: architecture.script-reload
kind: explanation
owners:
  - Inno.Scripting.Reload
contracts:
  - project.inno-scripting-reload
---
# Script reload and recovery

A successful script compile produces immutable candidate code. Reload must also reconcile module dependencies, type catalogs, Scene and Settings state, plugin content and the old generation's lifetime. These actions share the existing generation coordinator.

## Why GameScripts and EditorScripts move together

An Editor generic extension can close over a project runtime type and create bidirectional CLR loader-allocator retention. One-way assembly references do not prove that two collectible contexts can unload independently. GameScripts and EditorScripts therefore participate in one authoring candidate and retirement boundary, even for an Editor-only source edit.

This does not require recompiling unchanged source. The compiler can reuse the matching GameScripts artifact while reload still prepares and verifies the complete authoring generation. Plugins follow the declared module dependency graph.

## Failed compile versus removed plugin

An ordinary Project compile failure leaves the active generation unchanged because no replacement candidate exists.

A deleted, structurally invalid or unsuccessfully updated active plugin changes the installed source facts. Keeping its old code alive merely because dependent scripts fail to compile would misrepresent those facts. The host compares plugin identities/content hashes, computes retired modules and their reverse closure through `upstreamModuleNames`, and atomically removes the affected plugin and Runtime/Editor script modules.

Scene participation preserves stable IDs and serialized state as Missing in that same transaction; returning types can restore it. The first automatic reload after filesystem deletion must perform the change without requiring a second manual request. Replacement requests use their compilation snapshot's explicit dependencies; an empty list cannot reconnect a previous-generation plugin.

## Order the transaction

`IScriptReloadCoordinator.Execute` participates in the shared five-phase owner with an optional external generation change. Prepare runs inside the gate. If capture fails, roll back the preparation already attempted; do not restore a participant that never prepared.

External content applies before Editor domain restoration. Rollback restores old assembly/catalog and external content before restoring Editor properties, so recovery resolves against the original complete snapshot. Plugin changes use the same owned reload change, not a separate nontransactional commit at the end.

Precommit participant, activation, recovery or external synchronization failure can roll back while the previous snapshot remains complete. Postcommit cleanup failure cannot undo publication; it faults shared admission and remains an error.

## Verify retirement before success

After commit, verification cooperatively advances by frame until CLR collection confirms the retired collectible contexts are unreachable. Dropping references or calling unload is not enough. The operation remains incomplete until the shared GC/finalizer/weak-reference barrier passes.

On a genuine unload timeout, publish the single `INNO-ALC-UNLOAD` diagnostic rather than an additional duplicate ordinary error log. The gate becomes Faulted and rejects new reload, Play, Build and Export. Restart the host; another reload is not a way to clear retained code or reset the failure.

Commit retirement, candidate rollback, plugin uninstall, explicit unload and shutdown all obey this barrier. Shutdown first removes observations, cancels and drains compilation, and finishes the preceding barrier before beginning active-module unload. It cannot bypass AwaitingCollection or a faulted gate.

## Avoid automatic-reload echoes

Publishing a script generation also republishes an isolated asset catalog. The reload host suppresses only the source-mount notification echo produced synchronously by its own candidate publication. That event is not a new source edit and must not queue another identical reload.

Real file changes, explicit compile requests and external source-mount publications still queue work. This behavior does not disable watchers, mute global notifications or skip retirement. Observe operation IDs and actual stages through [reload progress](projects/inno-scripting-reload.md#observe-the-current-operation), not inferred completion percentages.

For the underlying admission states and lifetime rules, read [generation publication](generation-publication.md). For a user's first symptom, start with [reload troubleshooting](../manual/extensions/diagnose-reload.md).
