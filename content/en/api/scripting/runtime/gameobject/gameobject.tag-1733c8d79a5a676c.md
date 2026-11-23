---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1733c8d79a5a676c1f2674e3ba1a8600efb51fc8615284075fcfb2d05dad3362
symbol: scripting:Inno.Scene:P:InnoEngine.Scene.GameObject.tag
title: GameObject.tag
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: dee169f1c264f975ea5ef3c1d805247b4d2f86ba55bdf027947cf4a3c2851219
apiScope: Runtime
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
