---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2e0b03a5948cd3125f3e72a714a1a0de62a2de9e49e7275d24d1cc32636621b6
symbol: engine:Inno.Scene:P:Inno.Scene.GameObject.tag
title: GameObject.tag
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 3fecf0f5b5b02d4806c253d678eaffac992be36c715a9d38a6e351357bd97b72
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Tag definitions are project configuration stored separately from scene data. Scene and prefab serialization persist the assigned ordinal value even when its current project definition is absent.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the assigned tag is empty or contains only white-space characters.
