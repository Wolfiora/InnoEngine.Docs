---
title: "RenderUniformType"
description: "Reference for RenderUniformType in Inno.Rendering."
uid: api.inno.rendering.519c2f2f740bffa2
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderUniformType`

This reference describes `RenderUniformType` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Matrix3x3`](#api-4d82394b956ea825) | Field |
| [`Matrix4x4`](#api-6bbc61646e298b23) | Field |
| [`Vector4`](#api-b205e6a7e6a90906) | Field |

## Type declaration

<a id="api-519c2f2f740bffa2"></a>
<!-- api: T:Inno.Rendering.RenderUniformType 631557d5c2e81444058315630706e6fce9d05dffe31a5165428c920e89f78745 -->

```csharp
public enum Inno.Rendering.RenderUniformType : int
```

Identifies the native-independent shape of one uniform binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L33).

## `Matrix3x3`

<a id="api-4d82394b956ea825"></a>
<!-- api: F:Inno.Rendering.RenderUniformType.Matrix3x3 ce0fc51070055745ed0c646cdfe3ae327cae58bda5bb8a506928a16bf6bf7a26 -->

```csharp
Inno.Rendering.RenderUniformType.Matrix3x3 = 1
```

Three-by-three 32-bit floating-point matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L42).

## `Matrix4x4`

<a id="api-6bbc61646e298b23"></a>
<!-- api: F:Inno.Rendering.RenderUniformType.Matrix4x4 3079b968204f9d72bc337639bd8019228e8f7d9a31b1a95abb982bc1912a22bd -->

```csharp
Inno.Rendering.RenderUniformType.Matrix4x4 = 2
```

Four-by-four 32-bit floating-point matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L46).

## `Vector4`

<a id="api-b205e6a7e6a90906"></a>
<!-- api: F:Inno.Rendering.RenderUniformType.Vector4 a1bf9c24797ff721843e866c0ada3f2b9399a7d70a57670531ad150a347c9786 -->

```csharp
Inno.Rendering.RenderUniformType.Vector4 = 0
```

Four-component 32-bit floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L38).
