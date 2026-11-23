---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.18ff50bc5ffc608257455e98376be1959b210e23cd7c2daba15c38eb8395c4ca
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveGraphicsMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractID,Inno.Rendering.Assets.ShaderPassRoleID,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@)
title: IRenderResourceService.TryResolveGraphicsMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 3e061626b92c0d655e7a050d7976318d027532a522c35fa0a5477cb658c8a804
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material asset to resolve.

**Parameter `contractID`:** Provider-owned shader contract.

**Parameter `passRoleID`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

## Returns

True when a current or last-good pass is usable.
