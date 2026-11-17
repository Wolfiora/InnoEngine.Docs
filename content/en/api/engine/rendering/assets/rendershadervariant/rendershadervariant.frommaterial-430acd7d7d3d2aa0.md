---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.430acd7d7d3d2aa0516303090224792d3176c177559269c87402c54b6ef97f60
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset)
title: RenderShaderVariant.FromMaterial
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: afa9e94bf370a6a0a4b5db927733288da46f9d10a83c8f94a781efe21b959f06
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** The material whose declared keyword options are evaluated.

## Returns

The canonical variant shared by authoring compilation and runtime lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
