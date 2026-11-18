---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scene.runtime-script.2abca13a8a73a1c8
symbol: scripting:Inno.Scene:T:InnoEngine.Scene.SceneManager
title: SceneManager
kind: api
owners:
- Inno.Scene
apiSurface: editor-script
sourceFingerprint: d40c595b7e07d75c5a6623ac37e04ee587a9470f108eff45182168d0b3058a4f
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
