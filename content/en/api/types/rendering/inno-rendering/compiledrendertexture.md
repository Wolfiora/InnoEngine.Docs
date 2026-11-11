---
title: "CompiledRenderTexture"
description: "Reference for CompiledRenderTexture in Inno.Rendering."
uid: api.inno.rendering.c952a2387f029b1f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CompiledRenderTexture`

This reference describes `CompiledRenderTexture` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`descriptor`](#api-eca64ec71914c15f) | Property |
| [`handle`](#api-6786983e07887712) | Property |
| [`imported`](#api-b4c1a439c4d6c8fb) | Property |
| [`name`](#api-dded72f642080cfa) | Property |
| [`persistentHandle`](#api-64a978267c72e215) | Property |
| [`physicalSlot`](#api-131fe2729ecdd365) | Property |

## Type declaration

<a id="api-c952a2387f029b1f"></a>
<!-- api: T:Inno.Rendering.CompiledRenderTexture 02b39d9eaa6c19727140e23aa8989df4e7abe2d0e2db88e8f630e109b0978af3 -->

```csharp
public sealed class Inno.Rendering.CompiledRenderTexture
```

Describes one texture allocation selected by render-graph compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L60).

## `descriptor`

<a id="api-eca64ec71914c15f"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.descriptor 55b376dda4a64d00cb27f45a76398c8b9dc6bd268633c8b2a16387467f4086e8 -->

```csharp
public Inno.Rendering.RenderTextureDescriptor Inno.Rendering.CompiledRenderTexture.descriptor { get; }
```

Gets texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L91).

## `handle`

<a id="api-6786983e07887712"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.handle febe37e441754d0784e1545616b16c21289e068500ede68ca4fe9ca92d40a677 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.CompiledRenderTexture.handle { get; }
```

Gets the frame-scoped logical handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L81).

## `imported`

<a id="api-b4c1a439c4d6c8fb"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.imported 411a803e12a7e00f70d895e08d0391649abbbdd19f114e8a9144cf92abe76628 -->

```csharp
public bool Inno.Rendering.CompiledRenderTexture.imported { get; }
```

Gets whether the resource was imported from persistent device state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L96).

## `name`

<a id="api-dded72f642080cfa"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.name d00c1ca401174bfe2df798329284eb9cbae8315f7f4078289a52a85c76bc83b6 -->

```csharp
public string Inno.Rendering.CompiledRenderTexture.name { get; }
```

Gets the debug and diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L86).

## `persistentHandle`

<a id="api-64a978267c72e215"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.persistentHandle 5771afeb26885d4c89ed0fef1904a9eed8ba2a05c51a835582d77eca23811d26 -->

```csharp
public Inno.Rendering.PersistentTextureHandle Inno.Rendering.CompiledRenderTexture.persistentHandle { get; }
```

Gets the persistent device texture for imported resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L101).

## `physicalSlot`

<a id="api-131fe2729ecdd365"></a>
<!-- api: P:Inno.Rendering.CompiledRenderTexture.physicalSlot 8bf8ac5bf1b4ed60e856b25fd73cc307523ebebc6545388bb5f7bd0477a8b162 -->

```csharp
public int Inno.Rendering.CompiledRenderTexture.physicalSlot { get; }
```

Gets the aliasing allocation slot, or negative one for imported resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L106).
