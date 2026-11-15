---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scene.runtime-script.2abca13a8a73a1c8
symbol: scripting:Inno.Scene:T:InnoEngine.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
reviewed: a1bb760376e5c61e6c55b6d8e257bdcdee82035df9028bb2ef53261d80f2898d
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- manual.scripting.use-script-api
- project.inno-scene#scene-ownership-contract
aliases: []
---

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:InnoEngine.Scene.SceneWorld` and only script-facing code should use this type.
