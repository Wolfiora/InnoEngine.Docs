---
uid: api.8dc934a2d6a6bed9ed93510608e6ec58af2e07f9fa73bc59eab1e1b7b7fe91ff
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderDefinition)"
source: xml
reviewed: f14d77e2431179494f8b13f666ed99c563fbd389e5bf7b608eb418b610162502
title: "FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Resolves material keyword selections against an exact published shader contract.

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

**Returns:** The canonical keyword selection for this publication.

**Exception `T:System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.
