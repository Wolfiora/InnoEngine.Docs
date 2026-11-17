---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f5f7597f5eb7efe02c59997f79821ca59b8a0480b16c861165aebe03315399d1
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.SetActiveScene(InnoEngine.Scene.GameScene)
title: IEditorSceneWorkspace.SetActiveScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: ea172766c03596b6dfe7d7b5d77aecab54865a7f2b48b4444390237241984cd8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The loaded scene to activate.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.
