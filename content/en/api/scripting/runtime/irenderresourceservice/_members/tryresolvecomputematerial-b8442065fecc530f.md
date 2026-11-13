---
uid: api.b8442065fecc530f203375aa60c551027c7753e2ef4c3f9ce2b4333b981f1d0d
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveComputeMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@)"
source: xml
reviewed: e9673288479499d7debcc9dd5d2c94c3e6c596c534a794dc75c78ffd845b714c
title: "TryResolveComputeMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves one compute material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.
