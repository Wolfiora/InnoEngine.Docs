---
uid: api.c7e71e03b6364c19ced291cb0e80ccba170f49b1fc28f690fc428bf2d9a33245
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderDefinition)"
source: xml
reviewed: 672a91cc1be20fc917b4cb6c1bc45e81ffc91f7295ef6535fb3cdf790bacc43d
title: "FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Resolves material keyword selections against an exact published shader contract.

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

**Returns:** The canonical keyword selection for this publication.

**Exception `T:System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.
