---
uid: api.591446c0b44b9e4689eefb45b81cad4e5d99801158b8577ccfa8e90d08466f39
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject})"
source: xml
reviewed: 8e5e451dee7d0b4fdb566cada894248ac9ac28f342f9e294fdf5db0c20ed1fb5
title: "SceneEdits.DeleteGameObjects"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Deletes selected subtrees atomically, omitting descendants already covered by a selected ancestor.

**Parameter `targets`:** Live objects to delete; every owner is validated before the first mutation.

**Exception `T:System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.
