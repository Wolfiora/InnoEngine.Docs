---
title: "IRenderGraphBackend"
description: "Reference for IRenderGraphBackend in Inno.Rendering."
uid: api.inno.rendering.a6579cd4583f153f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `IRenderGraphBackend`

This reference describes `IRenderGraphBackend` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BeginGraph`](#api-8be4475fc9912554) | Method |
| [`BeginPass`](#api-4467008dfe3e1f9e) | Method |
| [`EndGraph`](#api-0177fd3ce799f0f6) | Method |
| [`EndPass`](#api-21a4f8770c98be9d) | Method |

## Type declaration

<a id="api-a6579cd4583f153f"></a>
<!-- api: T:Inno.Rendering.IRenderGraphBackend fe5a52a88aafd151a96987870145f00bc617e27c5716b4d533eac23f3da9447e -->

```csharp
public interface Inno.Rendering.IRenderGraphBackend
```

Bridges compiled graph execution to a concrete graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L321).

## `BeginGraph`

<a id="api-8be4475fc9912554"></a>
<!-- api: M:Inno.Rendering.IRenderGraphBackend.BeginGraph(Inno.Rendering.CompiledRenderGraph) 2fd6b57c578529195a47e50df21fb02ad89f5a0a6f5ee3eae7e63138552bcee5 -->

```csharp
void Inno.Rendering.IRenderGraphBackend.BeginGraph(Inno.Rendering.CompiledRenderGraph graph)
```

Begins execution and prepares transient allocations.

**Parameter `graph`:** Compiled graph to execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L329).

## `BeginPass`

<a id="api-4467008dfe3e1f9e"></a>
<!-- api: M:Inno.Rendering.IRenderGraphBackend.BeginPass(Inno.Rendering.CompiledRenderPass) e5089bd2193a39e15da5e4bb65cae2b15c3c94e792272e49fdc305bce23b7e7b -->

```csharp
Inno.Rendering.RenderCommandEncoder Inno.Rendering.IRenderGraphBackend.BeginPass(Inno.Rendering.CompiledRenderPass pass)
```

Begins one scheduled pass and acquires its command encoder.

**Parameter `pass`:** Scheduled pass metadata.

**Returns:** A command encoder scoped to this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L340).

## `EndGraph`

<a id="api-0177fd3ce799f0f6"></a>
<!-- api: M:Inno.Rendering.IRenderGraphBackend.EndGraph(Inno.Rendering.CompiledRenderGraph) c442f1fd72ab6941d2622ea34ebba75b0c1e0366cb8542d981cb830e3b0982b2 -->

```csharp
void Inno.Rendering.IRenderGraphBackend.EndGraph(Inno.Rendering.CompiledRenderGraph graph)
```

Ends graph execution without presenting an additional frame.

**Parameter `graph`:** Compiled graph that finished or failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L356).

## `EndPass`

<a id="api-21a4f8770c98be9d"></a>
<!-- api: M:Inno.Rendering.IRenderGraphBackend.EndPass(Inno.Rendering.CompiledRenderPass) c226a6c903bbcf6a550620e8eefc40af083f941289592d79bce0d8da029ad72d -->

```csharp
void Inno.Rendering.IRenderGraphBackend.EndPass(Inno.Rendering.CompiledRenderPass pass)
```

Ends one scheduled pass and releases its encoder.

**Parameter `pass`:** Scheduled pass metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L348).
