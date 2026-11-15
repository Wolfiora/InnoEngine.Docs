---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.430acd7d7d3d2aa0516303090224792d3176c177559269c87402c54b6ef97f60
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset)
title: RenderShaderVariant.FromMaterial
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 1cd6ecb90527d697161e737273f459d9f24ec3755d82e215bb85a6283e13fa76

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `material`:** The material whose declared keyword options are evaluated.

## Returns

The canonical variant shared by authoring compilation and runtime lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
