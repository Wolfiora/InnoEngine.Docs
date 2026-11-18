---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1733c8d79a5a676c1f2674e3ba1a8600efb51fc8615284075fcfb2d05dad3362
symbol: scripting:Inno.Scene:P:InnoEngine.Scene.GameObject.tag
title: GameObject.tag
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: 6993609fa18c6070ce6d6ef2bde6d776b3c8ab83820d6b9d7674ee89107858a3
apiScope: Runtime
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
