---
uid: api.inno.scene.c70db86a68771ffe
symbol: "engine:Inno.Scene:T:Inno.Scene.SceneManager"
source: xml
reviewed: fd52735d4ee7003173ee81584550f0be77045ee43ec879f86c9c0119e23a5ee0
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
