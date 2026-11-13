---
uid: api.ba64ead9a83bab1a9afe3ffc9b33f0e7254476d54082848f6673090a4c40b055
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeHierarchy(InnoEngine.Scene.GameObject,System.Action{InnoEditor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Scene.GameObject})"
source: xml
reviewed: 6760a698e234c0ce0cdad5971e2ca0ea0407ab14007f275a646f1c103f43ada8
title: "ChangeHierarchy"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Applies a hierarchy mutation and records only the affected parent and sibling-index tuples.

**Parameter `gameObject`:** The primary GameObject being moved.

**Parameter `mutation`:** The hierarchy mutation to execute through the world-owned operation context.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `relatedObjects`:** Additional objects whose placements the mutation may change, such as promoted children.

**Returns:** `true` when at least one placement changed.
