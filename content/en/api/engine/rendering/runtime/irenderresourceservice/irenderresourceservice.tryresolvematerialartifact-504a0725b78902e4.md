---
uid: api.504a0725b78902e4293067219f1794d13207cf24b9de95361dcff10e7448369f
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveMaterialArtifact(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.RenderMaterialPass@)"
source: xml
reviewed: 038596eeccdca558dcda3bea372f5417f611b0388a231e0afc12f78b24fd371d
title: "IRenderResourceService.TryResolveMaterialArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves an explicitly compiled candidate in a caller-owned publication scope, without publishing it as an asset.

**Parameter `scope`:** Non-empty resource identity for this isolated consumer; release it when the consumer closes.

**Parameter `artifact`:** Complete immutable candidate built for the active device and exact Material variant.

**Parameter `material`:** Invocation-local values and a persistent Shader reference; neither asset is changed or retained.

**Parameter `contractId`:** Required provider-owned Shader contract.

**Parameter `passRoleId`:** Required role within the selected Technique.

**Parameter `programKind`:** Required graphics or compute program kind.

**Parameter `vertexLayout`:** Graphics layout, or null for procedural or compute work.

**Parameter `overrides`:** Optional invocation-local Material values.

**Parameter `diagnostics`:** Consumer-owned diagnostic reporter, not retained or forwarded to canonical asset diagnostics.

**Parameter `materialPass`:** Receives the current or complete last-good scoped pass.

**Returns:** True when the isolated publication can satisfy this request; failure never changes canonical programs.

**Exception `T:System.InvalidOperationException`:** No artifact decoder is configured, or resource retirement cannot complete.
