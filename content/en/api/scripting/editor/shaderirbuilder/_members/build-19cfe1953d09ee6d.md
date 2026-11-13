---
uid: api.19cfe1953d09ee6d383b447db1abe3d59e8c4c0de72c4315b8ecc621967402fa
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: d24a668be072cf9c6f58a6a1401dfa501ac01c05bd492565b8238dd742b3bc74
title: "Build"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Freezes the current region without pruning unused calls or retaining this mutable builder.

**Parameter `outputs`:** Named values returned by the enclosing region.

**Returns:** An immutable block unaffected by later builder changes.

**Exception `T:System.ArgumentException`:** An output name is empty or a value belongs to another builder.
