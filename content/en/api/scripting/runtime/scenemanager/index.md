---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.runtime-script.2abca13a8a73a1c8
symbol: scripting:Inno.Scene:T:InnoEngine.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: 39b813272a3c11fb5fdd2e24f166abcd69dd32d54f8b93eb5aa3367dcf1ea0d9
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-scene#scene-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:InnoEngine.Scene.SceneWorld` and only script-facing code should use this type.
