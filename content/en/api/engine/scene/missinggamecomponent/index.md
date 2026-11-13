---
uid: api.inno.scene.83abc338c761e599
symbol: "engine:Inno.Scene:T:Inno.Scene.MissingGameComponent"
source: xml
reviewed: 23faca86fbea4258a4ef4526bc01f824aa122b390f5fae6b8399d63c7276902d
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
