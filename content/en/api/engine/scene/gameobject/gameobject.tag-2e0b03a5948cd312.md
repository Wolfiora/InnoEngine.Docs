---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2e0b03a5948cd3125f3e72a714a1a0de62a2de9e49e7275d24d1cc32636621b6
symbol: engine:Inno.Scene:P:Inno.Scene.GameObject.tag
title: GameObject.tag
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 995716384fd6476ff7bfa67c986f512dc3ed77ce0098d23d4bdf107168f7ae9a
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
