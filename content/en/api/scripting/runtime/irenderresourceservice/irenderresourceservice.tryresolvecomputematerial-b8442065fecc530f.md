---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b8442065fecc530f203375aa60c551027c7753e2ef4c3f9ce2b4333b981f1d0d
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveComputeMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@)
title: IRenderResourceService.TryResolveComputeMaterial
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: aa9afd15d744b13b73e1a819cb964eb1fcea0c5b4a54c0df3904a607e4baa928
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

## Returns

True when a current or last-good pass is usable.
