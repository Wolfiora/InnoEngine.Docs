---
uid: api.f5f7597f5eb7efe02c59997f79821ca59b8a0480b16c861165aebe03315399d1
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SetActiveScene(InnoEngine.Scene.GameScene)"
source: xml
reviewed: abf1ca5ee628f1e01ae3cd2914722b7713a9fbd0aceab22c69473b51c53c8f28
title: "IEditorSceneWorkspace.SetActiveScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Makes one presented scene active without changing scene order.

## Parameters

**Parameter `scene`:** The loaded scene to activate.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.
