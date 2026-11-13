---
uid: api.inno.rendering.shaders.editor-script.6b5fa6b3415167f3
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderIrBuilder"
source: xml
reviewed: 09fbd520b19c4bda8e44ebd5fec3edc5970c9b2c24d10836125d300b442224ee
title: "ShaderIrBuilder"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-shaders
aliases: []
---

Builds typed shader IR instructions for graph compilation.

Builds typed instructions and structured regions. No API accepts an arbitrary backend expression or complete stage source. This builder is transient and belongs to one lowering operation, never to a persisted document or runtime frame.

Builds typed shader IR instructions for graph compilation.
