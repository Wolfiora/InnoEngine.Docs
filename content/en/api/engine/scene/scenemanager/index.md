---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scene.c70db86a68771ffe
symbol: engine:Inno.Scene:T:Inno.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 53c1692daaf129a9d7cb4d59f5d0ab55eb496d948bccc6f5bed49028a020eedc
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
