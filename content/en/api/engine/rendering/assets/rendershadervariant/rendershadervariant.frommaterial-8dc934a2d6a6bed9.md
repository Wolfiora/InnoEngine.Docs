---
uid: api.8dc934a2d6a6bed9ed93510608e6ec58af2e07f9fa73bc59eab1e1b7b7fe91ff
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderDefinition)"
source: xml
reviewed: 923337068f6037035355b408043e11d3c687b2f55ebe38a06a6b19c2c0c029bd
title: "RenderShaderVariant.FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Resolves material keyword selections against an exact published shader contract.

## Parameters

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

## Returns

The canonical keyword selection for this publication.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.
