---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.c70db86a68771ffe
symbol: engine:Inno.Scene:T:Inno.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 04efb24b84a808e70706ce9ca138321e49c40b8c137cf0766501d950a77ddf63

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:Inno.Scene.SceneWorld` and only script-facing code should use this type.
