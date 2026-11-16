---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8a54c2431aa2a1d670cbec988cd45055f36de417a07ba62b33cef41c5197e168
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.GameScene)
title: SceneEdits.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 06548d46e51ca594409ebe104dff85a009a19410225ab543627e813434e1ae6a
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
