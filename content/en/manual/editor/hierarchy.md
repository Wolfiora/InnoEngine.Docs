---
title: Organize scenes and objects in Hierarchy
description: Navigate scene documents, reorder objects and keep display order separate from execution order.
uid: manual.editor.hierarchy
kind: how-to
owners: [Inno.Editor.Panel.Hierarchy]
contracts: [project.inno-editor-panel-hierarchy, project.inno-editor-scene]
---
# Organize scenes and objects in Hierarchy

Hierarchy presents the current scene workspace. SceneEdits owns reversible data mutations; the panel owns navigation, rows, menus and drop geometry. It does not capture whole-world undo snapshots.

## Open, select and rename

Opening a Scene asset loads additively; opening it again selects the existing active scene. Scene selection does not force expansion. Selecting an object expands its ancestors once, after which you can collapse them normally.

Double-click, F2 or the context menu renames a Scene/GameObject. Creation selects the new target and begins the same inline edit. Empty names normalize to Scene or GameObject. Inspector and Hierarchy use the same SceneEdits rename operations, so both observe the new name on the next frame.

## Reorder and reparent

Drag scene rows to reorder them or close any scene, including the final one. Objects can move among siblings, parents and scene roots, including another scene's child. The hierarchy operation handles ancestor/descendant movement without introducing a cycle; it records affected placements and preserves object identity.

Drop targets describe before/after/into geometry for the current synchronous request. They are borrowed values, not data to retain across frames, History or generations. On success, selection follows the moved object and requests target expansion.

Scene row order is not GameSystem execution order, which uses explicit `order`. Component card order likewise controls serialization/display rather than script execution priority.

## Know which actions are reversible content changes

Creation, deletion, hierarchy/order changes, names, activity and serialized properties use shared History. Deleting an object stores its subtree/references; moving it stores placement tuples; reordering a scene stores indices. Open, active-scene selection, Selection itself and Save are navigation/persistence operations rather than new reversible content edits.

During Play, Hierarchy switches to the complete runtime copy and its temporary History branch. Runtime edits are permitted, but Save/Open are disabled and no dirty marker is shown. Stop discards that branch/world and returns to the unchanged Edit documents.

## Save and restore document setup

Command/Ctrl+S uses the shared save action. Assigned documents save to their source; a new document uses the last writable File Browser location. Dragging a Scene or object onto an asset directory saves a Scene or Prefab through the same workspace. Dirty scenes use the visible unsaved indicator.

The workspace records only saved scene order and the active scene in `editor.ini`, not object selection or unsaved content. Startup waits for source indexing and required script types before committing the restored setup. Missing/unloadable sources report their outcome; an empty or unrecoverable setup does not silently create an Untitled Scene. Normal shutdown captures setup before unloading scenes.

Shared appearance settings supply scene/object icons. Rows use runtime identities, hierarchy revisions and bounded visible rendering rather than retaining stale objects. See [scene documents](scene-documents.md) for Missing and dirty semantics and [Play Mode](play-mode.md) for lifecycle constraints.
