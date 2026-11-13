---
uid: api.430acd7d7d3d2aa0516303090224792d3176c177559269c87402c54b6ef97f60
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset)"
source: xml
reviewed: 1cd6ecb90527d697161e737273f459d9f24ec3755d82e215bb85a6283e13fa76
title: "FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Resolves the deterministic variant selected by a material.

**Parameter `material`:** The material whose declared keyword options are evaluated.

**Returns:** The canonical variant shared by authoring compilation and runtime lookup.

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
