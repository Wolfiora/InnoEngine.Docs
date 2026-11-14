---
uid: api.19ccb1771e06322be58835ad9f043f037ca5dd6f537ceb984e6284fb1eba37ae
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.Find\u0060\u00601(System.Guid)"
source: xml
reviewed: 08e4b8b18cbc4be318558fca18f6636ef1bb599a578babe3d9ad3103d7231b6a
title: "SceneWorld.Find"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Resolves a live scene object by its persistent identity within this world.

## Type parameters

**Type parameter `TObject`:** The required scene object contract.

## Parameters

**Parameter `persistentId`:** The persistent identity to resolve.

## Returns

The live compatible object, or `null` when this world does not own one.
