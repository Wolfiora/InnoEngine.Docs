---
uid: api.1c4d6e4a26285bf6d1346564447da393e14de0477ab318c1425896efec83cdb0
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphLiteral.Emit(Inno.Rendering.Shaders.ShaderIrBuilder,Inno.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: e6d8d6b85041ba4010950804f57492eadd4b1491eb2ce0859d842786cc8cf9cf
title: "ShaderGraphLiteral.Emit"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Emits ordinary typed constants and aggregate construction into the common IR.

**Parameter `builder`:** Current region's instruction owner.

**Parameter `expectedType`:** Current port type; stale defaults never undergo implicit conversion.

**Returns:** A value owned by the supplied builder.

**Exception `T:System.InvalidOperationException`:** The stored type, component count or boolean bits are invalid.
