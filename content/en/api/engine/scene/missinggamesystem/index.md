---
uid: api.inno.scene.fa7f9f58aebcae97
symbol: "engine:Inno.Scene:T:Inno.Scene.MissingGameSystem"
source: xml
reviewed: 6290f9816c906ba86620f852bb8ec567ae0f93f070fb350c88c3ca4398433dee
title: "MissingGameSystem"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
contracts:
- project.inno-scene#scene-ownership-contract
aliases: []
---

Preserves the identity, order, and serialized state of a scene system whose managed type is unavailable.

## Remarks

The scene serializer and script reload pipeline create this placeholder automatically. It remains disabled and does not retain the unavailable managed `T:System.Type` or its collectible assembly load context.
