---
uid: api.78bf986fe1b58537e33989b1db0e45b27ac271bc032579d5d250070d60925443
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Image(Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderStorageAccess,Inno.Rendering.RenderTextureDimension,System.Boolean)"
source: xml
reviewed: ef1ddc1083f46813f23fc6ce6e5fc8dc0039dec4ef8c324c38a654bf3d766fa4
title: "ShaderStorageType.Image"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a formatted storage image; target capabilities must separately support its access and format.

**Parameter `format`:** Linear, non-depth image format supported by the rendering contract.

**Parameter `access`:** Permitted memory operations.

**Parameter `dimension`:** Two-dimensional or three-dimensional image shape.

**Parameter `array`:** Whether a two-dimensional image is an array.

**Returns:** An immutable image description with float4 load/store values.

**Exception `T:System.ArgumentException`:** The format or shape cannot represent storage image operations.
