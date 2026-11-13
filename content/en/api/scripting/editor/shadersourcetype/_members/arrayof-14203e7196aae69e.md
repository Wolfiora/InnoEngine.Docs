---
uid: api.14203e7196aae69e804de09bc06d568fa541295ee3523e331aeeb0e544823d12
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceType.ArrayOf(InnoEditor.Rendering.Shaders.ShaderSourceType,System.Int32)"
source: xml
reviewed: 75a502f35c6f49540a48cb9406871cdad02599631e873ee0f4da117b57e02e92
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
