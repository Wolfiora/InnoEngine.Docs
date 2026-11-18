---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.84a1702809e121f28418a84f178a34f7fda84ab239040e8a3e305a2d0abc1e3f
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.CanEdit(InnoEngine.Scene.GameScene)
title: IEditorSceneWorkspace.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: db5bc64e3d57bbd56cb3ee59ea584e1de65b56486bd09f02393782bd08e7f548
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
