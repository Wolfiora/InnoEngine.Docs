---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scene.a387628292985037
symbol: engine:Inno.Scene:T:Inno.Scene.ScenePropertySerialization
title: ScenePropertySerialization
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 8d4434fc73e6a1de4703d8f98a42ffaca221c8a7dc399edff927603404865da7
contracts:
- project.inno-scene#scene-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Each operation borrows its owning Core identity domain and resolves current references within that scene. Property access does not enumerate unrelated scene objects. Complete graph and prefab operations keep their explicit frozen local-identity boundaries. Asset references retain the supplied resolver context.
