---
uid: api.inno.scene.runtime-script.2abca13a8a73a1c8
symbol: "scripting:Inno.Scene:T:InnoEngine.Scene.SceneManager"
source: xml
reviewed: 62bf4149223bb41304d2a01f612c6afe008e0e58b1f78d069e54af46da9fddd9
title: "SceneManager"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-scene#scene-ownership-contract
aliases: []
---

Provides Unity-style scene operations by resolving the world in the current runtime execution context.

## Remarks

This façade owns no mutable scene state. Engine internals should depend on a concrete `T:InnoEngine.Scene.SceneWorld` and only script-facing code should use this type.
