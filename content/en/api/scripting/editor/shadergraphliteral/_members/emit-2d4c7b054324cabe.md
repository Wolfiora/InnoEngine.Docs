---
uid: api.2d4c7b054324cabe84dd499b05c94372d6496468f5f6c4649fe2121753785d3c
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Emit(InnoEditor.Rendering.Shaders.ShaderIrBuilder,InnoEditor.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: b619e052c002cc2f01994ea3a72a74781f2afb6022c7200b055ffecf67672b25
title: "Emit"
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
