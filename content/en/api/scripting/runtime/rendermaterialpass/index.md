---
uid: api.inno.rendering.runtime.runtime-script.c48785094a836fd2
symbol: "scripting:Inno.Rendering.Runtime:T:InnoEngine.Rendering.RenderMaterialPass"
source: xml
reviewed: 077e6de9b4630c6de7a3c8d5628818463f48c3ce55744f8de5b442b0b5fe546a
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
