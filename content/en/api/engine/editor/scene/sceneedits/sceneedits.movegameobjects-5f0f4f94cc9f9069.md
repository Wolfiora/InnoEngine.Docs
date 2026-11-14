---
uid: api.5f0f4f94cc9f906964a6cefdfa40674b5689cc1f840d13b978f88898f317d799
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject},Inno.Scene.GameScene,Inno.Scene.GameObject,System.Int32)"
source: xml
reviewed: 0c17491cb05eacba8700d5a9fdcca0157ced7b87f291dcefcae937516fca2faf
title: "SceneEdits.MoveGameObjects"
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
