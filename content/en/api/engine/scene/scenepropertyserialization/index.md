---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.a387628292985037
symbol: engine:Inno.Scene:T:Inno.Scene.ScenePropertySerialization
title: ScenePropertySerialization
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: a73f63680fa48538f05e8fb2036cdb441154e5a4bc3068413b6e9a4990d95f40
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
