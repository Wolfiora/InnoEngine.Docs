---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5a8e16702598cf224125760424e6b54d38e060a978bc618ad84918c6efff4149
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveMaterialArtifact(Inno.Rendering.Runtime.RenderPersistentResourceID,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractID,Inno.Rendering.Assets.ShaderPassRoleID,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.RenderMaterialPass@)
title: IRenderResourceService.TryResolveMaterialArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: bc06b691c3edaacdbcf737e7cf843cc337918c2a3725cd9207ded13eda0dc47e
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
