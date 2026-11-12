---
title: "ComputePipelineDescriptor"
description: "Reference for ComputePipelineDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.bf752e675c83e5e2
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ComputePipelineDescriptor`

This reference describes `ComputePipelineDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-06efff415e02e942) | Method |
| [`bindings`](#api-28a1f52f3d18f78f) | Property |
| [`computeShader`](#api-44554b7499d7c7f7) | Property |

## Type declaration

<a id="api-bf752e675c83e5e2"></a>
<!-- api: T:InnoEngine.Rendering.ComputePipelineDescriptor a05bd1df563b67ddab9a659ecd461a22d4f5b70b791c65b86d8f010e995db8a8 -->

```csharp
public sealed class InnoEngine.Rendering.ComputePipelineDescriptor
```

Describes a compute program candidate and reflected interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L10).

## `#ctor`

<a id="api-06efff415e02e942"></a>
<!-- api: M:InnoEngine.Rendering.ComputePipelineDescriptor.#ctor(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderBindingDescriptor}) 5d7668a7241f7a7f7f2a5530111207f509da2671ce287b02d71e15f90db51c8b -->

```csharp
public InnoEngine.Rendering.ComputePipelineDescriptor.ComputePipelineDescriptor(System.ReadOnlySpan<byte> computeShader, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderBindingDescriptor> bindings)
```

Creates a compute pipeline descriptor.

**Parameter `computeShader`:** Target backend compute shader binary.

**Parameter `bindings`:** Manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L24).

## `bindings`

<a id="api-28a1f52f3d18f78f"></a>
<!-- api: P:InnoEngine.Rendering.ComputePipelineDescriptor.bindings 229975e63b4d4fbb7a5e8e939e9d25ce373685dbbde769289c94545c1f7498af -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderBindingDescriptor> InnoEngine.Rendering.ComputePipelineDescriptor.bindings { get; }
```

Gets the manifest-derived interface contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L51).

## `computeShader`

<a id="api-44554b7499d7c7f7"></a>
<!-- api: P:InnoEngine.Rendering.ComputePipelineDescriptor.computeShader b32dfeca03ca80b7d976de69157c35832d0ef7287b37b34642f83460f74bb7f0 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.ComputePipelineDescriptor.computeShader { get; }
```

Gets the target backend compute shader binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/ComputePipelineDescriptor.cs#L46).
