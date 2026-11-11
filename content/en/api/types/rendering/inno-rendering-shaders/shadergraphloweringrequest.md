---
title: "ShaderGraphLoweringRequest"
description: "Reference for ShaderGraphLoweringRequest in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.8fb67e72c3a83faa
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphLoweringRequest`

This reference describes `ShaderGraphLoweringRequest` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fbd14f9724195a37) | Method |
| [`implementationId`](#api-3a3a939418ad678d) | Property |
| [`outputs`](#api-abadf32a20e79b90) | Property |
| [`sourceModules`](#api-2da22bc65b6e8901) | Property |
| [`stageInputs`](#api-3cfa077c87ccb9ea) | Property |

## Type declaration

<a id="api-8fb67e72c3a83faa"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphLoweringRequest e38369327d7ba4a58240cd7cc7d4057a7ce2f97f4635266b3f3fea76f9cd31ba -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphLoweringRequest
```

Freezes one target-selected graph region and its externally resolved, neutral compilation inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L13).

## `#ctor`

<a id="api-fbd14f9724195a37"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.#ctor(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Core.Graphs.GraphEndpoint},System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderIrStageInput}) 9f48945fd1daf5cfe0856b475ca9c5087a39c32950a625ec4c7eb8f400261ab3 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphLoweringRequest.ShaderGraphLoweringRequest(Inno.Core.Graphs.GraphDocument graph, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Core.Graphs.GraphEndpoint> outputs, string implementationId, System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis>? sourceModules = null, System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Rendering.Shaders.ShaderIrStageInput>? stageInputs = null)
```

Captures a region without retaining an asset object, source resolver, node provider or UI selection.

**Parameter `graph`:** Nodes and edges in this stage region; canvas positions are not compilation inputs.

**Parameter `outputs`:** Named region results mapped to stable output endpoints.

**Parameter `implementationId`:** Exact source implementation key selected by the target.

**Parameter `sourceModules`:** Already analyzed source modules keyed by their source node identity.

**Parameter `stageInputs`:** Target-assigned stage inputs keyed by their input node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L35).

## `implementationId`

<a id="api-3a3a939418ad678d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.implementationId 69ad3a9d43d7200db131d50d04433e4fb9266c2a03649c553a9c6a44cc3f0974 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphLoweringRequest.implementationId { get; }
```

Gets the exact implementation key selected by the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L61).

## `outputs`

<a id="api-abadf32a20e79b90"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.outputs 21f854ebcc29db3278a0d1b275eafb38f762b0942ca8f13aaec7a314d31c15b1 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Core.Graphs.GraphEndpoint> Inno.Rendering.Shaders.ShaderGraphLoweringRequest.outputs { get; }
```

Gets named region outputs by stable graph endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L57).

## `sourceModules`

<a id="api-2da22bc65b6e8901"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.sourceModules 422b170d38edcf4713525d8abe458e4687ec452aba7292846d9fb496158e7126 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis> Inno.Rendering.Shaders.ShaderGraphLoweringRequest.sourceModules { get; }
```

Gets frozen source modules, including unavailable/failed modules for accurate diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L65).

## `stageInputs`

<a id="api-3cfa077c87ccb9ea"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringRequest.stageInputs c44e283c0a80cb35a4e181381f1ca7d4bda6114ad3dc3e2bfba92a7ff1282b55 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Rendering.Shaders.ShaderIrStageInput> Inno.Rendering.Shaders.ShaderGraphLoweringRequest.stageInputs { get; }
```

Gets target-assigned input descriptors; they contain no native expressions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L69).
