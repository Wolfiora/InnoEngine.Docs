---
uid: api.0cd73211af36797ca217a7f7d82b3f7bd534049e5cdd9116c0e80b2734257f29
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Image(InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.RenderTextureDimension,System.Boolean)"
source: xml
reviewed: ae634c71d9eda9207839224e342451ab3c7d14ccc682367c606060d07c1303da
title: "ShaderStorageType.Image"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a formatted storage image; target capabilities must separately support its access and format.

**Parameter `format`:** Linear, non-depth image format supported by the rendering contract.

**Parameter `access`:** Permitted memory operations.

**Parameter `dimension`:** Two-dimensional or three-dimensional image shape.

**Parameter `array`:** Whether a two-dimensional image is an array.

**Returns:** An immutable image description with float4 load/store values.

**Exception `T:System.ArgumentException`:** The format or shape cannot represent storage image operations.
