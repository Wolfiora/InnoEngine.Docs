---
title: Edit, save and recover scene documents
description: Keep scene mutations reversible and distinguish source availability, runtime copies and real authored changes.
uid: manual.editor.scene-documents
kind: how-to
owners: [Inno.Editor.Scene]
contracts: [project.inno-editor-scene]
---
# Edit, save and recover scene documents

The scene workspace owns Edit documents and their source identities. Hierarchy, Inspector and actions send changes through `SceneEdits`; they do not each serialize and restore entire scenes. During Play, the same workspace presents independent runtime copies with persistence disabled.

## Open and save through the workspace

Open adds a Scene asset to the workspace. Save uses an assigned source or a caller-provided fallback directory for an unsaved scene. SaveToDirectory explicitly selects a destination; SavePrefab captures the chosen subtree. Reversible create/close/order and object/component/system/property operations go through SceneEdits.

The Editor state file stores only saved scene order and the active scene. It does not store selection, unsaved scene contents or dirty memory; save those as actual `.iscene` assets. If setup restoration is temporarily impossible, the workspace retains the pending setup and reports a diagnostic, retrying after relevant asset/type-generation changes.

## Interpret the dirty marker

In Edit, dirty detection compares serialized semantic content and assigned source state. It performs a throttled full hash so direct script/Inspector mutations are still observed; an incomplete notification system is not treated as authoritative. Comparison failures conservatively report dirty and publish a current diagnostic that clears after successful comparison.

A committed source move/rename is consumed before dirty checking in the same UI frame. Clean documents receive an updated baseline after relocation; existing unsaved changes remain dirty. A referenced asset's last-known path is a recovery hint, not scene content identity. Replacing the persistent asset reference is a real edit; merely moving that asset is not.

Missing/restored script types and successful generation migration are not user edits. The workspace remembers pre-migration dirty state and rebases only previously clean documents after complete success. It never hides existing edits. A failed transaction restores the old generation and baseline; incompatible restoration still produces precise diagnostics independently of the dirty marker.

## Recover an assigned but missing source

If an assigned source/candidate becomes unavailable, retain its persistent asset identity, known path, live data and saved baseline. `SCENE-SOURCE-MISSING` is a current diagnostic. Dirty is conservatively true and the known source path remains available; the document does not silently become an unassigned new scene.

Ordinary Save refuses to overwrite an unavailable assigned source. Explicit SaveToDirectory remains the existing alternative workflow. When the same identity returns, the diagnostic clears and real content comparison resumes without losing unsaved edits. Scene diagnostics belong to the scene feature, not the scripting compiler; reopening a scene with Missing types can report them without a new compilation.

## Keep history proportional to the edit

Property changes store target persistent ID, property key and before/after bytes. Scalar changes store only their values. Component/System changes add type ID, index, state and incoming references. A subtree delete stores that subtree and its placement/references; scene close stores that document and its setup. Editing one integer does not serialize the whole world.

Handlers resolve current objects and types by persistent/stable identity rather than retaining old instances. They capture actual rollback state before applying changes. If after-capture, payload storage or History recording fails, the edit compensates strictly; failed compensation reports both causes. Selection/focus notification is best effort after a successful domain transaction, not the criterion for History success.

Missing element types can restore a Missing placeholder with the same logical type, ID, index and state. Unavailable owners, absent handlers or non-atomic recovery create a barrier while leaving the stack intact. Cleanup is judged by real postconditions, including both restored references and candidate removal, rather than simply whether a callback threw.

## Borrow scene presentation for one operation

The host presentation interface captures an owned `ContentReadScope` of ordered identities and active content. Dispose it after the operation and do not cache resolved live scenes. Resolution validates domain/generation; an old identity never jumps to a newly created session with the same persistent ID.

Play publication occurs only after the complete candidate world, scene order and active scene are ready. It switches presentation and selection together. Play edits target that runtime world and its temporary History; Open/Save and source synchronization remain deferred or rejected as specified by [Play Mode](play-mode.md). The Edit world never transfers ownership.

Editor scripts receive the workspace and SceneEdits contracts, not host Play-materialization or presentation infrastructure. See [Scene API](../../api/projects/inno-editor-scene.md) for an action example and exact operations.
