---
uid: api.cec5419e100718feab80126f3410483c42fae8ca129aacd15329c92b1882c360
symbol: "engine:Inno.Editor.Shaders:M:Inno.Editor.Shaders.MaterialDocuments.Presentation(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.ShaderPropertyId,System.String@)"
source: xml
reviewed: 0601429bade010395cd7ea71eb241071275bd9857fab714b62461152cb771d72
title: "Presentation"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: source-clr
---

Reads parameter presentation from the current authoring Shader graph.

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

**Returns:** Detached presentation values; an unavailable graph uses the ordinary presentation defaults.
