---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e8e36192fc0213b31ece99736f34119250025d63ef4a024af070d0f13fc08aff
symbol: engine:Inno.Scene:M:Inno.Scene.Components.Transform.SetParent(Inno.Scene.Components.Transform)
title: Transform.SetParent
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: af6460645a2a872b179653c18b33558c9de04b58ae18fd67e4e29fd21c7e3fb1
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
