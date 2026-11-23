---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f3ecf09c83e6f4d05f5ef4b4956d8a050738fa3233a0ad0fbdbb5a324a109644
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveComputeMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractID,InnoEngine.Rendering.ShaderPassRoleID,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@)
title: IRenderResourceService.TryResolveComputeMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 76b7a23a67b7bd8f7fea56b88db6570be11c4dfcd8c7ba498d616fd9aaa1c354
apiScope: Runtime
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
