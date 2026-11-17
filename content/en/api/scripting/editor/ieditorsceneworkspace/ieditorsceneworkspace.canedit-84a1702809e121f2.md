---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.84a1702809e121f28418a84f178a34f7fda84ab239040e8a3e305a2d0abc1e3f
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.CanEdit(InnoEngine.Scene.GameScene)
title: IEditorSceneWorkspace.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 96c3f973157fc3d4e209caaa37e12a4d73d58e89d272b7324ca5cbd49185467a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to inspect.

## Returns

`true` for a writable Project scene or transient scene in the presented world. Changes made during Play remain in the runtime copy and are discarded on stop.
