---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.a387628292985037
symbol: engine:Inno.Scene:T:Inno.Scene.ScenePropertySerialization
title: ScenePropertySerialization
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: ed50e9912653d175a8c9cedb74518497d794f4e6c1b7b1fbd46004b7ff649080
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
