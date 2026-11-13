---
uid: api.inno.scene.a387628292985037
symbol: "engine:Inno.Scene:T:Inno.Scene.ScenePropertySerialization"
source: xml
reviewed: 56a84f3a48427d6e65e128d38e7271ec9321d6e654ca8b3d8a3241e3aabf240f
title: "ScenePropertySerialization"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

Captures and restores individual scene-object properties while preserving scene reference identities.

## Remarks

Each operation borrows its owning Core identity domain and resolves current references within that scene. Property access does not enumerate unrelated scene objects. Complete graph and prefab operations keep their explicit frozen local-identity boundaries. Asset references retain the supplied resolver context.
