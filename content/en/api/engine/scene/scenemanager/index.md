---
uid: api.inno.scene.c70db86a68771ffe
symbol: "engine:Inno.Scene:T:Inno.Scene.SceneManager"
source: xml
reviewed: 04efb24b84a808e70706ce9ca138321e49c40b8c137cf0766501d950a77ddf63
title: "SceneManager"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

Provides Unity-style scene operations by resolving the world in the current runtime execution context.

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:Inno.Scene.SceneWorld` and only script-facing code should use this type.
