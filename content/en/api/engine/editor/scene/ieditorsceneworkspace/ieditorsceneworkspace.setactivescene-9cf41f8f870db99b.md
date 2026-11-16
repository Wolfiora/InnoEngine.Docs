---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9cf41f8f870db99b59a93b83be2d78a5d98a728ce401d78ebcff33e8366b62c2
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SetActiveScene(Inno.Scene.GameScene)
title: IEditorSceneWorkspace.SetActiveScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: aa65bdc61e193d14b52ed8ddfed659f90b2d0c2ac55882911b31f5f5e887ba26
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
