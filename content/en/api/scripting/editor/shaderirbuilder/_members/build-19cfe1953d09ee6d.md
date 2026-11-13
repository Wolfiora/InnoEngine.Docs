---
uid: api.19cfe1953d09ee6d383b447db1abe3d59e8c4c0de72c4315b8ecc621967402fa
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEditor.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: 87bb26f6411509e8a8e88592f5ecd7933ec9eea5c1d949e6fc106dc7d3e61177
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
