---
title: "CompiledRenderBuffer"
description: "Reference for CompiledRenderBuffer in Inno.Rendering."
uid: api.inno.rendering.06fa9dbfd645ae78
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CompiledRenderBuffer`

This reference describes `CompiledRenderBuffer` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`descriptor`](#api-6e115085f8684d5e) | Property |
| [`handle`](#api-b9cb9deda23333db) | Property |
| [`imported`](#api-7c49d841654dbe65) | Property |
| [`name`](#api-ec3dd20267a70982) | Property |
| [`persistentHandle`](#api-ce062a93944702c8) | Property |
| [`physicalSlot`](#api-d41da155509a893d) | Property |

## Type declaration

<a id="api-06fa9dbfd645ae78"></a>
<!-- api: T:Inno.Rendering.CompiledRenderBuffer 226fd3d3d18ebdf0b26e09b580c91675556bc03dd06b5129892eab48d4731b52 -->

```csharp
public sealed class Inno.Rendering.CompiledRenderBuffer
```

Describes one buffer allocation selected by render-graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L112).

## `descriptor`

<a id="api-6e115085f8684d5e"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.descriptor 77e95131684a59382ec4d4dd8094c7dc9c3dc359591ce695367f71155c78f628 -->

```csharp
public Inno.Rendering.RenderBufferDescriptor Inno.Rendering.CompiledRenderBuffer.descriptor { get; }
```

Gets buffer requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L143).

## `handle`

<a id="api-b9cb9deda23333db"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.handle ff8be89d62863392af0d4c102a9de3d3869f42f908d60f05f6dadde876c0025b -->

```csharp
public Inno.Rendering.RenderBufferHandle Inno.Rendering.CompiledRenderBuffer.handle { get; }
```

Gets the frame-scoped logical handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L133).

## `imported`

<a id="api-7c49d841654dbe65"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.imported 8ae54d205c6a15f9f5e5ff6f978d649ea1c300c7d1a835e23bafa65f8d6af262 -->

```csharp
public bool Inno.Rendering.CompiledRenderBuffer.imported { get; }
```

Gets whether the resource was imported from persistent device state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L148).

## `name`

<a id="api-ec3dd20267a70982"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.name b5119e15fbaddd97353be23343b5d5133f092253458539b4aa7dd363bdb2f4c9 -->

```csharp
public string Inno.Rendering.CompiledRenderBuffer.name { get; }
```

Gets the debug and diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L138).

## `persistentHandle`

<a id="api-ce062a93944702c8"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.persistentHandle f43e9fb5d4d06cada2c6fdcf01520bbcca21918068972a8190400cb8bae54bf8 -->

```csharp
public Inno.Rendering.PersistentBufferHandle Inno.Rendering.CompiledRenderBuffer.persistentHandle { get; }
```

Gets the persistent device buffer for imported resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L153).

## `physicalSlot`

<a id="api-d41da155509a893d"></a>
<!-- api: P:Inno.Rendering.CompiledRenderBuffer.physicalSlot ec38161ff22c9fb88b363e11b862cba591c8a9d4c1c9b23fdb4fd0ec4f308f62 -->

```csharp
public int Inno.Rendering.CompiledRenderBuffer.physicalSlot { get; }
```

Gets the aliasing allocation slot, or negative one for imported resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L158).
