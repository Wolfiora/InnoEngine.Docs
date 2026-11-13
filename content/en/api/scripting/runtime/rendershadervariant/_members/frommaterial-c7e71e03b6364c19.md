---
uid: api.c7e71e03b6364c19ced291cb0e80ccba170f49b1fc28f690fc428bf2d9a33245
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderDefinition)"
source: xml
reviewed: d615dd9fbc5fdac68a2f56afc27adf1faca24e98eec497ce2e28c7a844715ffe
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
