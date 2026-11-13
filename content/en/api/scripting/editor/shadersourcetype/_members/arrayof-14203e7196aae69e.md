---
uid: api.14203e7196aae69e804de09bc06d568fa541295ee3523e331aeeb0e544823d12
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceType.ArrayOf(InnoEditor.Rendering.Shaders.ShaderSourceType,System.Int32)"
source: xml
reviewed: 6f7c657ba593e66959a0a42ffee0576653886d16cf068bb426e1f5f4c5b1cd23
title: "ArrayOf"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a fixed-length array without collapsing its element type.

**Parameter `element`:** Element type.

**Parameter `count`:** Positive fixed element count.

**Returns:** An immutable array type.

**Exception `T:System.ArgumentException`:** The element is void or an opaque storage binding.
