---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.382b9119b55fc93ece7ad9601c34fc6433a4587a5fc824382b094cc707301868
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveMaterialArtifact(InnoEngine.Rendering.RenderPersistentResourceID,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractID,InnoEngine.Rendering.ShaderPassRoleID,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Diagnostics.IDiagnosticReporter,InnoEngine.Rendering.RenderMaterialPass@)
title: IRenderResourceService.TryResolveMaterialArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 575de70e98387fcbbcd8e0a94a090b389005f234722eb55bded0004556501929
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scope`:** Non-empty resource identity for this isolated consumer; release it when the consumer closes.

**Parameter `artifact`:** Complete immutable candidate built for the active device and exact Material variant.

**Parameter `material`:** Invocation-local values and a persistent Shader reference; neither asset is changed or retained.

**Parameter `contractID`:** Required provider-owned Shader contract.

**Parameter `passRoleID`:** Required role within the selected Technique.

**Parameter `programKind`:** Required graphics or compute program kind.

**Parameter `vertexLayout`:** Graphics layout, or null for procedural or compute work.

**Parameter `overrides`:** Optional invocation-local Material values.

**Parameter `diagnostics`:** Consumer-owned diagnostic reporter, not retained or forwarded to canonical asset diagnostics.

**Parameter `materialPass`:** Receives the current or complete last-good scoped pass.

## Returns

True when the isolated publication can satisfy this request; failure never changes canonical programs.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No artifact decoder is configured, or resource retirement cannot complete.
