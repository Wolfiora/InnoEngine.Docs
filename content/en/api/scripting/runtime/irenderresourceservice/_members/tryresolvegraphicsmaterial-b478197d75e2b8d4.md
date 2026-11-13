---
uid: api.b478197d75e2b8d4b7a166b38c0181dbb6f9338b9919c871652ce18db3e6f52b
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveGraphicsMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@)"
source: xml
reviewed: eac0dff0dc2a2df9a3e5823ed2ce3b361654f031ea979c8f781a82cabd0a1989
title: "TryResolveGraphicsMaterial"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves one graphics material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.
