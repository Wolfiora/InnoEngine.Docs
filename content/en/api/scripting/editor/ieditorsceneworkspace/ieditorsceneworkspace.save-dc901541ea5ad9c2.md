---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dc901541ea5ad9c279c84ed458d867dbf48288937b62928f6c806a70f31d0cf3
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Save(InnoEngine.Scene.GameScene,System.String)
title: IEditorSceneWorkspace.Save
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: c0aca8516ca8c2165d75b6851c449149d894ba849e5ac39e10809b7ad3d16ee5
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The fallback asset directory for an unsaved scene.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.
