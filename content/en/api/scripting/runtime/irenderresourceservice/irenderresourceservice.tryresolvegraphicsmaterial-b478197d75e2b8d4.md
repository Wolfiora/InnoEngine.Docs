---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b478197d75e2b8d4b7a166b38c0181dbb6f9338b9919c871652ce18db3e6f52b
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveGraphicsMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@)
title: IRenderResourceService.TryResolveGraphicsMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 873a6dc56c8d80b7eeb1df35b5d9a7f630f82a50ab5fb5216484f8f72931b0d5
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

## Returns

True when a current or last-good pass is usable.
