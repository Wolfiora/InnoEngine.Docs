---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dd3aef6e3605cf35423340adf04e431cfdff9965028b99a06e3b02ad17c5ec17
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform)
title: Transform.SetParent
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: 6e3c9d6c9b92f9b31f251ca7b4f038ddad20e888ac0986a60e405a926045f390
apiScope: Runtime
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
