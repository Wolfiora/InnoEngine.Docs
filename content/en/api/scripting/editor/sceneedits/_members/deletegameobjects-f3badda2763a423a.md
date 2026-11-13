---
uid: api.f3badda2763a423abda80ade6eb417dbfe58e7cd19734f77da93b88f6289d605
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject})"
source: xml
reviewed: 90d0ac04ac937ac6e65c3b42a1a7be5abab3f5e3eb077ff58e9c152e41df4a5c
title: "DeleteGameObjects"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Deletes selected subtrees atomically, omitting descendants already covered by a selected ancestor.

**Parameter `targets`:** Live objects to delete; every owner is validated before the first mutation.

**Exception `T:System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.
