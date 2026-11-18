---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8a54c2431aa2a1d670cbec988cd45055f36de417a07ba62b33cef41c5197e168
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.GameScene)
title: SceneEdits.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: e0f15ab9d47d9f2823c338ab9c9d8b6ea7fc399ff26fcd4b48f09b103065b6bd
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
