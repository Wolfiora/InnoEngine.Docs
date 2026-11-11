---
title: "RenderGraphCompileResult"
description: "Reference for RenderGraphCompileResult in Inno.Rendering."
uid: api.inno.rendering.a1d1e2a1eb7097f4
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphCompileResult`

This reference describes `RenderGraphCompileResult` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`culledPassCount`](#api-1d178572bf7a2b9f) | Property |
| [`diagnostics`](#api-b6dff6617ff114b4) | Property |
| [`graph`](#api-0ddc380e7a2a19d7) | Property |
| [`succeeded`](#api-bc3d48d4047a9578) | Property |

## Type declaration

<a id="api-a1d1e2a1eb7097f4"></a>
<!-- api: T:Inno.Rendering.RenderGraphCompileResult b279c12d9c39c8614dc84ea9eb69fedf5fc0f0036faf8e54ffba4368789e5b46 -->

```csharp
public sealed class Inno.Rendering.RenderGraphCompileResult
```

Contains render-graph compilation diagnostics and an optional executable graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L549).

## `culledPassCount`

<a id="api-1d178572bf7a2b9f"></a>
<!-- api: P:Inno.Rendering.RenderGraphCompileResult.culledPassCount 748bdee3e3f8246bc7b3938a6e82f3a183cfd38ce93e1d2e7b8c27ca62bcdd51 -->

```csharp
public int Inno.Rendering.RenderGraphCompileResult.culledPassCount { get; }
```

Gets passes removed because they did not contribute to an output or side effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L577).

## `diagnostics`

<a id="api-b6dff6617ff114b4"></a>
<!-- api: P:Inno.Rendering.RenderGraphCompileResult.diagnostics 4643f6753fd07d23786cdaffb97902e1f6b21efa9d5a8db3593b06280d535b1c -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderGraphDiagnostic> Inno.Rendering.RenderGraphCompileResult.diagnostics { get; }
```

Gets deterministic compilation diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L572).

## `graph`

<a id="api-0ddc380e7a2a19d7"></a>
<!-- api: P:Inno.Rendering.RenderGraphCompileResult.graph ab3b38fba2ad30a18f0d678b918455ee4c4bceda66c19fdac7b303617111b7ee -->

```csharp
public Inno.Rendering.CompiledRenderGraph? Inno.Rendering.RenderGraphCompileResult.graph { get; }
```

Gets the executable graph, or `null` when compilation failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L567).

## `succeeded`

<a id="api-bc3d48d4047a9578"></a>
<!-- api: P:Inno.Rendering.RenderGraphCompileResult.succeeded c6b497e31db06d04c62b4758a6d50e6515408fc4c6642f73fb99a7dae5b1c261 -->

```csharp
public bool Inno.Rendering.RenderGraphCompileResult.succeeded { get; }
```

Gets whether an executable graph was produced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L582).
