---
uid: api.directory.engine.editor.scene
title: "Scene"
kind: landing
owners: []
---

# Scene

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [EditorSceneWorkspaceFactory](editorsceneworkspacefactory/index.md) | Creates explicitly owned editor scene workspaces for embedded editor hosts and command-line tooling. |
| [EditorSceneWorkspaceHost](editorsceneworkspacehost/index.md) | Owns an editor scene workspace created outside the attribute-discovered editor application. |
| [IEditorGameScenePresentation](ieditorgamescenepresentation/index.md) | Supplies the scene set that represents the game to Editor viewport consumers without exposing runtime-session ownership. |
| [IEditorScenePlayMode](ieditorsceneplaymode/index.md) | Creates isolated runtime scene sessions from the current editable scene set. |
| [IEditorSceneWorkspace](ieditorsceneworkspace/index.md) | Exposes the active Edit or Play scene presentation and the persistence operations available to it. |
| [SceneEdits](sceneedits/index.md) | Applies scene-document mutations and records compact, reload-safe inverse data in editor history. |
| [SceneHierarchyEdit](scenehierarchyedit/index.md) | Exposes world-owned hierarchy operations inside one atomic scene history mutation. |

