---
uid: api.8e68602a4c9b2a17289a10b4e1f2d8a5caa0056d89aae92dec70da9418bf6453
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)"
source: xml
reviewed: 6be17485690fe1ba730cda29f74b48fd5249faccd26f0dc46bc94adf34b5dc6c
title: "ShaderNodeCompilerRegistry.Lower"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Lowers a whole region under one shared generation operation.

**Parameter `request`:** Frozen graph region and resolved immutable inputs.

**Parameter `serialization`:** The current owner converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context.

**Parameter `cancellationToken`:** Cancellation between node invocations.

**Returns:** A detached region or neutral diagnostics, never compiler instances.
