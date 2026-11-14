---
uid: api.2d4c7b054324cabe84dd499b05c94372d6496468f5f6c4649fe2121753785d3c
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Emit(InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: c9dc405086797f3f0aacc0c0443f5192ab1cc016abf5fc19c8064c37139c2b9c
title: "ShaderGraphLiteral.Emit"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Emits ordinary typed constants and aggregate construction into the common IR.

**Parameter `builder`:** Current region's instruction owner.

**Parameter `expectedType`:** Current port type; stale defaults never undergo implicit conversion.

**Returns:** A value owned by the supplied builder.

**Exception `T:System.InvalidOperationException`:** The stored type, component count or boolean bits are invalid.
