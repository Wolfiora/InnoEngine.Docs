---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.22834a88a0c6a78c5eb093e86393ba7ec5669b9daad19260bb9d7d0ab9f3dcb0
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{InnoEngine.Scene.GameLayer})
title: GameLayerMask.FromLayers
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: eb87c2e2d162aafd05d86f11c87e6f8f8f40d51772291c3983578a3f0314e4cb
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layers`:** The layers whose bits should be enabled.

## Returns

A mask containing every supplied layer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
