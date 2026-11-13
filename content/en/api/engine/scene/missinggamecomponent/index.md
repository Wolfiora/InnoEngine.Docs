---
uid: api.inno.scene.83abc338c761e599
symbol: "engine:Inno.Scene:T:Inno.Scene.MissingGameComponent"
source: xml
reviewed: a1ef825645b2c5b783d00d37da0f62f0ebaf8bfe5595e5ec345700c23489e327
title: "MissingGameComponent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

Preserves the identity, order, and serialized state of a component whose managed type is unavailable.

## Remarks

The scene serializer and script reload pipeline create this placeholder automatically. It does not retain the unavailable managed `T:System.Type` or any object from its collectible assembly load context.
