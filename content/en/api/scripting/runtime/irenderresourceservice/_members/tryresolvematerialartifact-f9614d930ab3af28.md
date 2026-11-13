---
uid: api.f9614d930ab3af28648156577130c6deb650a51592ea2f3b8d9c9dfb2f43acab
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveMaterialArtifact(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Diagnostics.IDiagnosticReporter,InnoEngine.Rendering.RenderMaterialPass@)"
source: xml
reviewed: 93ccd1211bca30c080883ffdf82dbaaa3e071e7c33244e4de9900b2984b1cda7
title: "TryResolveMaterialArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
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
