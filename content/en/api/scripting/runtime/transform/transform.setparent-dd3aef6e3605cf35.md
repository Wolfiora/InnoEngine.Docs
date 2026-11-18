---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dd3aef6e3605cf35423340adf04e431cfdff9965028b99a06e3b02ad17c5ec17
symbol: scripting:Inno.Scene:M:InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform)
title: Transform.SetParent
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: f3159bee2dd155afca5a46c1784544fed0880a5d2bc47895d7e6cd23584768fc
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
