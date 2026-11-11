---
title: "CompiledRenderGraph"
description: "Reference for CompiledRenderGraph in Inno.Rendering."
uid: api.inno.rendering.0db3e1c9849632fd
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CompiledRenderGraph`

This reference describes `CompiledRenderGraph` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Execute`](#api-7a102ed1a1f6745d) | Method |
| [`buffers`](#api-55fb57a71482222e) | Property |
| [`generation`](#api-0f84e07b20345c74) | Property |
| [`passes`](#api-945446a47e8bb866) | Property |
| [`textures`](#api-16989b50bbcfbdc3) | Property |

## Type declaration

<a id="api-0db3e1c9849632fd"></a>
<!-- api: T:Inno.Rendering.CompiledRenderGraph 73542b14adc34b97802c3afc790efa14dfa39db4b80239c37dfd1db60f2dbcde -->

```csharp
public sealed class Inno.Rendering.CompiledRenderGraph
```

Contains validated, culled and topologically scheduled frame work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L362).

## `Execute`

<a id="api-7a102ed1a1f6745d"></a>
<!-- api: M:Inno.Rendering.CompiledRenderGraph.Execute(Inno.Rendering.IRenderGraphBackend,System.UInt64) 8fc4e6abe0e7a737ffb915cf1b9f5a2ee2ff60b873342b98ca788968037fe695 -->

```csharp
public void Inno.Rendering.CompiledRenderGraph.Execute(Inno.Rendering.IRenderGraphBackend backend, ulong frameIndex)
```

Executes pass callbacks through a concrete backend with complete unwind.

**Parameter `backend`:** Backend bridge for the current device generation.

**Parameter `frameIndex`:** Monotonic frame index exposed to pass callbacks.

**Throws `System.AggregateException`:** Thrown when execution and cleanup both fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L414).

## `buffers`

<a id="api-55fb57a71482222e"></a>
<!-- api: P:Inno.Rendering.CompiledRenderGraph.buffers f702e54528edd7956d064c8c5ad7b88344adeca77ae183bfc59cbc914aa0e3b0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.CompiledRenderBuffer> Inno.Rendering.CompiledRenderGraph.buffers { get; }
```

Gets compiled logical buffer allocations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L400).

## `generation`

<a id="api-0f84e07b20345c74"></a>
<!-- api: P:Inno.Rendering.CompiledRenderGraph.generation 5a182ad609173984df6c4f1aa04065896604a30428cd7a0efb3c4cecb771e144 -->

```csharp
public uint Inno.Rendering.CompiledRenderGraph.generation { get; }
```

Gets the source frame generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L385).

## `passes`

<a id="api-945446a47e8bb866"></a>
<!-- api: P:Inno.Rendering.CompiledRenderGraph.passes 32f449a14c37833b19d9df6162671af27fecb2972133af5b19162257c73e4493 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.CompiledRenderPass> Inno.Rendering.CompiledRenderGraph.passes { get; }
```

Gets scheduled passes in backend view order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L390).

## `textures`

<a id="api-16989b50bbcfbdc3"></a>
<!-- api: P:Inno.Rendering.CompiledRenderGraph.textures cb1be51dc4004724f7bdefbacbac1c2f9fa662bd80bbc0ddf8ec5c483a5756f1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.CompiledRenderTexture> Inno.Rendering.CompiledRenderGraph.textures { get; }
```

Gets compiled logical texture allocations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L395).
