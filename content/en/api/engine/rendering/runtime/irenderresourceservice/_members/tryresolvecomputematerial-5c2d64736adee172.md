---
uid: api.5c2d64736adee172ddb5a755e2f82736d2b4c75aed4d079c97d5f99556b931ea
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveComputeMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@)"
source: xml
reviewed: 7b5e76a0018216856974a84622c617fefc2037430b06b6f66f7b1d9e0c3f5375
title: "TryResolveComputeMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves one compute material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.
