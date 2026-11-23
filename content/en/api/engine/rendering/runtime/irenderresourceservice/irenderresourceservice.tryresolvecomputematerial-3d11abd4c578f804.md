---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3d11abd4c578f804276bd30cf13971d4a9bc28a501e5ce2644f23a30dc619f09
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveComputeMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractID,Inno.Rendering.Assets.ShaderPassRoleID,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@)
title: IRenderResourceService.TryResolveComputeMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 555a15640654745d8aef70fbd57e186012b42e1606c6414e648b5bf02181719b
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

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

## Returns

True when a current or last-good pass is usable.
