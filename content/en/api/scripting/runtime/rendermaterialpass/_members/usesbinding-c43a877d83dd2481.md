---
uid: api.c43a877d83dd2481ee51f62a66bd449dff56462c6794310cfb83a15f5bc66571
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderMaterialPass.UsesBinding(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderShaderBindingKind)"
source: xml
reviewed: 93f4b4d4a9c2b340d726940abad40c7f6c951fbefdaddc547b1d301bc38a0c4d
title: "UsesBinding"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Gets whether the compiled program actively consumes one declared binding.

**Parameter `binding`:** Stable binding declared by the shader contract.

**Parameter `kind`:** Expected command-binding domain.

**Returns:** `true` when the final compiled pass reflects the binding; otherwise, `false` when the compiler proved the declared binding unused and removed it.

**Exception `T:System.ArgumentException`:** The binding is not declared by the shader, or its declared kind differs from `kind`.
