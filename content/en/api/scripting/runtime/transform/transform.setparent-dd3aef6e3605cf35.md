---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dd3aef6e3605cf35423340adf04e431cfdff9965028b99a06e3b02ad17c5ec17
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform)
title: Transform.SetParent
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: 3b2ca5e839a297ac5055db99080071a448ffbacd9b57ee6a34e73f2310f9dfc7
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
