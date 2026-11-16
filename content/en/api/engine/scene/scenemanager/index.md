---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.c70db86a68771ffe
symbol: engine:Inno.Scene:T:Inno.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 0d28e30d104f7deaccf36bc9385a4a53a57a2bde142decbe56e493529224a3ff
contracts:
- project.inno-scene#scene-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:Inno.Scene.SceneWorld` and only script-facing code should use this type.
