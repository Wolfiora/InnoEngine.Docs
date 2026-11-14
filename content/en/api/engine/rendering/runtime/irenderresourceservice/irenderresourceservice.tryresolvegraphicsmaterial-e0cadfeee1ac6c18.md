---
uid: api.e0cadfeee1ac6c183c3a5b1aaf1d6ced57bbf30785d14379ea83550d2f71e1dd
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveGraphicsMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@)"
source: xml
reviewed: a6221f823c7f8880cf32ea1c479fac51592dbbb783de3a9cea293ef6d14b2194
title: "IRenderResourceService.TryResolveGraphicsMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves one graphics material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.
