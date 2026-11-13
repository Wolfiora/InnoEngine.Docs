---
uid: api.inno.rendering.shaders.editor-script.6b5fa6b3415167f3
symbol: "scripting:Inno.Rendering.Shaders:T:InnoEditor.Rendering.Shaders.ShaderIrBuilder"
source: xml
reviewed: a5abb6be09ebc9a6c59279a9a3b347261ada66b7d2516a729fe383c95d404efb
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
