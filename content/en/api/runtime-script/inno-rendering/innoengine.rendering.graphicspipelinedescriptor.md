---
title: "GraphicsPipelineDescriptor"
description: "Reference for GraphicsPipelineDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e0aa0239b6da0452
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsPipelineDescriptor`

This reference describes `GraphicsPipelineDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4fcccb08f19768ab) | Method |
| [`bindings`](#api-35985c288529b85b) | Property |
| [`fragmentShader`](#api-856c1ed8fa2a2686) | Property |
| [`rasterState`](#api-539664d52c7d07c1) | Property |
| [`vertexLayout`](#api-d619e8c9476ccbb1) | Property |
| [`vertexShader`](#api-2fd50c4133bce567) | Property |

## Type declaration

<a id="api-e0aa0239b6da0452"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsPipelineDescriptor be76e36a8538551f7f2149ec07585bebc79e0550366f82b92a62d6d62a197133 -->

```csharp
public sealed class InnoEngine.Rendering.GraphicsPipelineDescriptor
```

Describes a graphics program candidate and reflected interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L10).

## `#ctor`

<a id="api-4fcccb08f19768ab"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsPipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderBindingDescriptor},InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.RenderRasterState) 42df69b4e289ac20f3e009d4cf9db34bacd27f1ee31d4e4e3fd1b4709b9666d7 -->

```csharp
public InnoEngine.Rendering.GraphicsPipelineDescriptor.GraphicsPipelineDescriptor(System.ReadOnlySpan<byte> vertexShader, System.ReadOnlySpan<byte> fragmentShader, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderBindingDescriptor> bindings, InnoEngine.Rendering.RenderVertexLayout? vertexLayout, InnoEngine.Rendering.RenderRasterState? rasterState = null)
```

Creates a graphics pipeline descriptor.

**Parameter `vertexShader`:** Target backend vertex shader binary.

**Parameter `fragmentShader`:** Target backend fragment shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.

**Parameter `vertexLayout`:** Required mesh vertex layout, or `null` for procedural vertices.

**Parameter `rasterState`:** Fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L34).

## `bindings`

<a id="api-35985c288529b85b"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineDescriptor.bindings 89cc2f1887a1807b7c7919a11a7b9b68167928936d0cd2aafc6c8a6183f7a8b6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderBindingDescriptor> InnoEngine.Rendering.GraphicsPipelineDescriptor.bindings { get; }
```

Gets the manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L73).

## `fragmentShader`

<a id="api-856c1ed8fa2a2686"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineDescriptor.fragmentShader e5661c06f57cd4f80f9aa4d8ae3131e1b64ae4ad940ae076e495ab279bc9dc0f -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.GraphicsPipelineDescriptor.fragmentShader { get; }
```

Gets the target backend fragment shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L68).

## `rasterState`

<a id="api-539664d52c7d07c1"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineDescriptor.rasterState 517c95a1c175bd67fe354a5fd3432c90d2c4bf77fc800746b3aad01a31678fb6 -->

```csharp
public InnoEngine.Rendering.RenderRasterState InnoEngine.Rendering.GraphicsPipelineDescriptor.rasterState { get; }
```

Gets fixed-function raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L83).

## `vertexLayout`

<a id="api-d619e8c9476ccbb1"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineDescriptor.vertexLayout 23d6160b11cf0c373df1115242abe6290999848e211b1c34186b9f2ee96cb880 -->

```csharp
public InnoEngine.Rendering.RenderVertexLayout? InnoEngine.Rendering.GraphicsPipelineDescriptor.vertexLayout { get; }
```

Gets the required mesh vertex layout, or `null` for procedural vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L78).

## `vertexShader`

<a id="api-2fd50c4133bce567"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsPipelineDescriptor.vertexShader ed13a0c297f20a3127ae4a7737a1e56704a5441edd5450fa3594ee8d6edebfa8 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.GraphicsPipelineDescriptor.vertexShader { get; }
```

Gets the target backend vertex shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsPipelineDescriptor.cs#L63).
