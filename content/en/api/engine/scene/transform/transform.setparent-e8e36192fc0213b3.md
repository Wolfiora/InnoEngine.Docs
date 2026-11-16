---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e8e36192fc0213b31ece99736f34119250025d63ef4a024af070d0f13fc08aff
symbol: engine:Inno.Scene:M:Inno.Scene.Components.Transform.SetParent(Inno.Scene.Components.Transform)
title: Transform.SetParent
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: ac6dc108a9d8631b8d0fc1d2148d8b5c9a47b1d29a88e07059a677fe60c9ef3d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `parent`:** New parent, or `null` to move to scene level.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown for hierarchy cycles, cross-scene parents, or a non-invertible parent hierarchy.
