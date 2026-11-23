---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2e0b03a5948cd3125f3e72a714a1a0de62a2de9e49e7275d24d1cc32636621b6
symbol: engine:Inno.Scene:P:Inno.Scene.GameObject.tag
title: GameObject.tag
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 084662db45e307c4819aeec9ee534ca2330ba4f6c2ead041f0d3beca45f895c2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the assigned tag is empty or contains only white-space characters.

## Remarks

Tag definitions are project configuration stored separately from scene data. Scene and prefab serialization persist the assigned ordinal value even when its current project definition is absent.
