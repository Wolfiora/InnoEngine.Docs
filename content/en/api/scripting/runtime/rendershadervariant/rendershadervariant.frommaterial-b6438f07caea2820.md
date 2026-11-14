---
uid: api.b6438f07caea2820e79e7d11875c9e749fc96d55836f485308082e8c563f4844
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset)"
source: xml
reviewed: 88ded498d1c5d9529725ae18e508ab5058124583e573b57f575b6aa4f2964b57
title: "RenderShaderVariant.FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Resolves the deterministic variant selected by a material.

## Parameters

**Parameter `material`:** The material whose declared keyword options are evaluated.

## Returns

The canonical variant shared by authoring compilation and runtime lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
