---
uid: api.f5f7597f5eb7efe02c59997f79821ca59b8a0480b16c861165aebe03315399d1
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SetActiveScene(InnoEngine.Scene.GameScene)"
source: xml
reviewed: 2979347b2f52c4a8af99009fd1c0bf36be5ba021503d5b0d71d6da9ebac75f36
title: "SetActiveScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Makes one presented scene active without changing scene order.

**Parameter `scene`:** The loaded scene to activate.

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.
