---
title: "ComputePipelineDescriptor"
description: "Reference for ComputePipelineDescriptor in Inno.Rendering."
uid: api.inno.rendering.12473054302c1642
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ComputePipelineDescriptor`

This reference describes `ComputePipelineDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c7f265e46e79ebaf) | Method |
| [`bindings`](#api-950e679affa0b0ca) | Property |
| [`computeShader`](#api-5917f24a981a2a02) | Property |

## Type declaration

<a id="api-12473054302c1642"></a>
<!-- api: T:Inno.Rendering.ComputePipelineDescriptor 8ecdac46002abd071a9d2be0e09fd79bd8fbf93fbfcf84e99ddb4134be743ab5 -->

```csharp
public sealed class Inno.Rendering.ComputePipelineDescriptor
```

Describes a compute program candidate and reflected interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L10).

## `#ctor`

<a id="api-c7f265e46e79ebaf"></a>
<!-- api: M:Inno.Rendering.ComputePipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderShaderBindingDescriptor}) 5db6dc9076faf0d43e51305f0a3afdf383df7d70bbdeb42793c21be33a0fc5aa -->

```csharp
public Inno.Rendering.ComputePipelineDescriptor.ComputePipelineDescriptor(System.ReadOnlySpan<byte> computeShader, System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderShaderBindingDescriptor> bindings)
```

Creates a compute pipeline descriptor.

**Parameter `computeShader`:** Target backend compute shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L24).

## `bindings`

<a id="api-950e679affa0b0ca"></a>
<!-- api: P:Inno.Rendering.ComputePipelineDescriptor.bindings 2b06fe36b54b31a5dff22e48436539c8633f785ffd3ec2ef7411461fd7ec6b65 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderShaderBindingDescriptor> Inno.Rendering.ComputePipelineDescriptor.bindings { get; }
```

Gets the manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L51).

## `computeShader`

<a id="api-5917f24a981a2a02"></a>
<!-- api: P:Inno.Rendering.ComputePipelineDescriptor.computeShader 8b7ae2c31f95784f8a04329dc0ffb3a359d3c09554b16621177d9d48436e0628 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.ComputePipelineDescriptor.computeShader { get; }
```

Gets the target backend compute shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L46).
