---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58db67e5fdc882e656ae7d6ec8504cd67b63443f152381f82eb035c5b53ab602
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.GameScene)
title: SceneEdits.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 43f411458d5d901a88adbc321ad47f9694199258e41e6a35dc093f947183ecce
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The loaded scene to inspect.

## Returns

`true` when scene commands may change this scene. Play changes use a temporary history branch and are discarded when the Play session ends.
