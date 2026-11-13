---
uid: api.inno.rendering.runtime.runtime-script.c48785094a836fd2
symbol: "scripting:Inno.Rendering.Runtime:T:InnoEngine.Rendering.RenderMaterialPass"
source: xml
reviewed: 96776cc4d7172eaf952b6e3667aa544733958278f7d376d5bd89f4e03d0ff040
title: "RenderMaterialPass"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-rendering-runtime
aliases: []
---

Represents one frame-resolved material pass and its material-owned bindings.

## Remarks

The instance is scoped to the active render device generation. Pipeline-owned graph textures and buffers remain explicit and are bound by the caller after this material state is applied.
