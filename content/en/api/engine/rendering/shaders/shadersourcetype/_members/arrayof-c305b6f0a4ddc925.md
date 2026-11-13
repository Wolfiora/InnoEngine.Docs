---
uid: api.c305b6f0a4ddc9259f29023398ad77abdd13d545c9002e1f52b31730c68a01b8
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceType.ArrayOf(Inno.Rendering.Shaders.ShaderSourceType,System.Int32)"
source: xml
reviewed: 0affb2cc73c3f63d7da78682a853f39446f596e4b8d9ce003f99a53e6e3d1b26
title: "ArrayOf"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a fixed-length array without collapsing its element type.

**Parameter `element`:** Element type.

**Parameter `count`:** Positive fixed element count.

**Returns:** An immutable array type.

**Exception `T:System.ArgumentException`:** The element is void or an opaque storage binding.
