---
uid: api.2608fc345cf6b65a4b5fae414c52ef0a03e3b5e208abd0ac2a543a6ccf6fc8d5
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject},InnoEngine.Scene.GameScene,InnoEngine.Scene.GameObject,System.Int32)"
source: xml
reviewed: f36761b598964136b94b3ebbe0d429dd185e307ab73c5a680e7eb3e53e20cc2e
title: "MoveGameObjects"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Moves minimal selected roots together, preserving descendants and recording only affected placements.

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

**Exception `T:System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Exception `T:System.ArgumentException`:** The parent belongs to a different scene.
