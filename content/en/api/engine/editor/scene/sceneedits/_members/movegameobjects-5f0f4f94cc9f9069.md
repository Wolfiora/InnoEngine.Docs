---
uid: api.5f0f4f94cc9f906964a6cefdfa40674b5689cc1f840d13b978f88898f317d799
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject},Inno.Scene.GameScene,Inno.Scene.GameObject,System.Int32)"
source: xml
reviewed: 0b51f52cadeffe2021420ac0a961768d5bad3fa4db25e526d630525782af9883
title: "MoveGameObjects"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Moves minimal selected roots together, preserving descendants and recording only affected placements.

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

**Exception `T:System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Exception `T:System.ArgumentException`:** The parent belongs to a different scene.
