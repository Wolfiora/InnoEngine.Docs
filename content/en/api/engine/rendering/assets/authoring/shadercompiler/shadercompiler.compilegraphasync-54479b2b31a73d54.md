---
uid: api.54479b2b31a73d540cd241cc5d3067c8845acee0f8a7416d8f0bec0860033f45
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Assets.IAssetArtifactLookup,System.Threading.CancellationToken)"
source: xml
reviewed: 36f8aa3d77cb834c07b8e1b5b547fdd65b0ff69fba43181b2678199898400ab1
title: "ShaderCompiler.CompileGraphAsync"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Captures an imported graph in the current owner generation, then starts native compilation without retaining its asset.

**Parameter `shader`:** Committed graph-backed shader asset.

**Parameter `target`:** Target policy and device capabilities.

**Parameter `variant`:** Exact material keyword selection.

**Parameter `types`:** Shared authoring type generation owner.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner asset/reference context.

**Parameter `artifacts`:** Authoring artifact owner supplying the graph output, which is absent from runtime packages.

**Parameter `cancellationToken`:** Cancellation before candidate publication.

**Returns:** A native compilation task for the captured graph, or graph diagnostics without any native work.
