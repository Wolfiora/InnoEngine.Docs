---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2608fc345cf6b65a4b5fae414c52ef0a03e3b5e208abd0ac2a543a6ccf6fc8d5
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject},InnoEngine.Scene.GameScene,InnoEngine.Scene.GameObject,System.Int32)
title: SceneEdits.MoveGameObjects
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 937a9cb036c8e8a89003b8cf080e0619df842fa172ab36c3a664a96657834d05
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

## Exceptions

**Exception `T:System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Exception `T:System.ArgumentException`:** The parent belongs to a different scene.
