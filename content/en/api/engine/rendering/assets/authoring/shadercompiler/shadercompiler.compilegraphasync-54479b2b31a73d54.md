---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54479b2b31a73d540cd241cc5d3067c8845acee0f8a7416d8f0bec0860033f45
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Assets.IAssetArtifactLookup,System.Threading.CancellationToken)
title: ShaderCompiler.CompileGraphAsync
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: c6f1b72a2adad2fc815211d0fbf2bc0cf60b3f3488dcf4f63e4a9a58c63500a7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shader`:** Committed graph-backed shader asset.

**Parameter `target`:** Target policy and device capabilities.

**Parameter `variant`:** Exact material keyword selection.

**Parameter `types`:** Shared authoring type generation owner.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner asset/reference context.

**Parameter `artifacts`:** Authoring artifact owner supplying the graph output, which is absent from runtime packages.

**Parameter `cancellationToken`:** Cancellation before candidate publication.

## Returns

A native compilation task for the captured graph, or graph diagnostics without any native work.
