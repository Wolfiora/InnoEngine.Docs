---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.fa7f9f58aebcae97
symbol: engine:Inno.Scene:T:Inno.Scene.MissingGameSystem
title: MissingGameSystem
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 1a3032272cd382deb2de14f82e1c69370938afbe6ee793e07b6cc58de7002eee

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

Preserves the identity, order, and serialized state of a scene system whose managed type is unavailable.

## Remarks

The scene serializer and script reload pipeline create this placeholder automatically. It remains disabled and does not retain the unavailable managed `T:System.Type` or its collectible assembly load context.
