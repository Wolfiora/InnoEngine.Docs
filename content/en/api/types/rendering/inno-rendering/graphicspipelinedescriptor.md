---
title: "GraphicsPipelineDescriptor"
description: "Reference for GraphicsPipelineDescriptor in Inno.Rendering."
uid: api.inno.rendering.22a28559e2c03052
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsPipelineDescriptor`

This reference describes `GraphicsPipelineDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-51901aa24027938f) | Method |
| [`bindings`](#api-8a21dbbee5e903c3) | Property |
| [`fragmentShader`](#api-e0d89f88b98d542f) | Property |
| [`rasterState`](#api-bef058d7506a8b90) | Property |
| [`vertexLayout`](#api-ae3872b40c79b7d2) | Property |
| [`vertexShader`](#api-aab91236bd358d11) | Property |

## Type declaration

<a id="api-22a28559e2c03052"></a>
<!-- api: T:Inno.Rendering.GraphicsPipelineDescriptor 105c0289c0ca30135be52268fdf8998f0dcc182162f1f5a207fd68f14eefcc02 -->

```csharp
public sealed class Inno.Rendering.GraphicsPipelineDescriptor
```

Describes a graphics program candidate and reflected interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L10).

## `#ctor`

<a id="api-51901aa24027938f"></a>
<!-- api: M:Inno.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderShaderBindingDescriptor},Inno.Rendering.RenderVertexLayout,Inno.Rendering.RenderRasterState) acdc8bfadad7b8d9c92385399471829792b5cf08b8b5d107bbce1d3204f02625 -->

```csharp
public Inno.Rendering.GraphicsPipelineDescriptor.GraphicsPipelineDescriptor(System.ReadOnlySpan<byte> vertexShader, System.ReadOnlySpan<byte> fragmentShader, System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderShaderBindingDescriptor> bindings, Inno.Rendering.RenderVertexLayout? vertexLayout, Inno.Rendering.RenderRasterState? rasterState = null)
```

Creates a graphics pipeline descriptor.

**Parameter `vertexShader`:** Target backend vertex shader binary.

**Parameter `fragmentShader`:** Target backend fragment shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.

**Parameter `vertexLayout`:** Required mesh vertex layout, or `null` for procedural vertices.

**Parameter `rasterState`:** Fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L34).

## `bindings`

<a id="api-8a21dbbee5e903c3"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineDescriptor.bindings 385b0debe8c1387a95611a51f9e8d7065c730d9740fed6b32919998be55fefc6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderShaderBindingDescriptor> Inno.Rendering.GraphicsPipelineDescriptor.bindings { get; }
```

Gets the manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L73).

## `fragmentShader`

<a id="api-e0d89f88b98d542f"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineDescriptor.fragmentShader 3ed59486305974838c6f29cd7c70ee80e13d23fc2afde31473c01f9b98dde9f9 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.GraphicsPipelineDescriptor.fragmentShader { get; }
```

Gets the target backend fragment shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L68).

## `rasterState`

<a id="api-bef058d7506a8b90"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineDescriptor.rasterState 70aff2324b2640007e9975297f09bede74a2b9296ba78186e7558dd3bd086a23 -->

```csharp
public Inno.Rendering.RenderRasterState Inno.Rendering.GraphicsPipelineDescriptor.rasterState { get; }
```

Gets fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L83).

## `vertexLayout`

<a id="api-ae3872b40c79b7d2"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineDescriptor.vertexLayout 65156e7208b9db7fd0e0d5f78a8ae146392e1f3e52a2fbb2779274d066feeb1b -->

```csharp
public Inno.Rendering.RenderVertexLayout? Inno.Rendering.GraphicsPipelineDescriptor.vertexLayout { get; }
```

Gets the required mesh vertex layout, or `null` for procedural vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L78).

## `vertexShader`

<a id="api-aab91236bd358d11"></a>
<!-- api: P:Inno.Rendering.GraphicsPipelineDescriptor.vertexShader cc4db61e536eb7cf1b2bd8400870491affe42147a384bc2aa3a29fcc3b35458b -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.GraphicsPipelineDescriptor.vertexShader { get; }
```

Gets the target backend vertex shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L63).
