---
uid: api.fd506cd3908d9f82e822ad9e6261f3bd8cb9dc6fb5004b6001016c7894c8a304
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(System.ReadOnlyMemory{System.Byte},Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)"
source: xml
reviewed: 3cf2b11dfd7e7a790ea9f25efca5b4e45bdacd705d722a9ea1d807ab9666ac1d
title: "CompileGraphAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Compiles an immutable import or preview candidate without reading or mutating a canonical Shader asset.

**Parameter `artifact`:** Frozen target-expanded graph and source bundles.

**Parameter `target`:** Target policy and capabilities.

**Parameter `variant`:** Exact keyword selection.

**Parameter `types`:** Current authoring generation.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner references captured before asynchronous native work.

**Parameter `cancellationToken`:** Cancellation of this candidate.

**Returns:** A complete immutable compilation result, never published by this method.
