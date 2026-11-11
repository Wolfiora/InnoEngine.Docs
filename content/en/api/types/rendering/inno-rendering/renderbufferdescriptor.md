---
title: "RenderBufferDescriptor"
description: "Reference for RenderBufferDescriptor in Inno.Rendering."
uid: api.inno.rendering.01559dee21a33a44
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBufferDescriptor`

This reference describes `RenderBufferDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderBufferDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-36a54532bc353c08) | Method |
| [`Equals`](#api-80b785f3fb078179) | Method |
| [`Equals`](#api-88b17caee245e87e) | Method |
| [`GetHashCode`](#api-4c646bf8e50fc9d7) | Method |
| [`elementCount`](#api-f4a65ab50de58e4a) | Property |
| [`elementStride`](#api-7e0827d95c97ac69) | Property |
| [`usage`](#api-311173c0dd0e2252) | Property |

## Type declaration

<a id="api-01559dee21a33a44"></a>
<!-- api: T:Inno.Rendering.RenderBufferDescriptor 87b3aa0ecdc9c93e0a9f6c911fa8080fc0da71c2605d3d04feacdef7b58850a3 -->

```csharp
public sealed class Inno.Rendering.RenderBufferDescriptor : System.IEquatable<Inno.Rendering.RenderBufferDescriptor>
```

Describes a render-graph buffer independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L364).

## `#ctor`

<a id="api-36a54532bc353c08"></a>
<!-- api: M:Inno.Rendering.RenderBufferDescriptor.#ctor(System.Int32,System.Int32,Inno.Rendering.RenderBufferUsage) e784ad2eedda0422f2af6ae0730b9b97aa6d16e1999e1ae2fd8134b4aba4b22a -->

```csharp
public Inno.Rendering.RenderBufferDescriptor.RenderBufferDescriptor(int elementCount, int elementStride, Inno.Rendering.RenderBufferUsage usage)
```

Creates a buffer descriptor.

**Parameter `elementCount`:** Number of addressable elements.

**Parameter `elementStride`:** Element size in bytes.

**Parameter `usage`:** Permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L378).

## `Equals`

<a id="api-80b785f3fb078179"></a>
<!-- api: M:Inno.Rendering.RenderBufferDescriptor.Equals(Inno.Rendering.RenderBufferDescriptor) e91f912ab4a7902dc8e9902ea6f22cd8270e5b932d6e48cf7a9133c1132dc662 -->

```csharp
public bool Inno.Rendering.RenderBufferDescriptor.Equals(Inno.Rendering.RenderBufferDescriptor? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L414).

## `Equals`

<a id="api-88b17caee245e87e"></a>
<!-- api: M:Inno.Rendering.RenderBufferDescriptor.Equals(System.Object) 8bc77301e785610d844f9b58d0409536558f3e8f72a1968f93bb44b0180d6c11 -->

```csharp
public override bool Inno.Rendering.RenderBufferDescriptor.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L429).

## `GetHashCode`

<a id="api-4c646bf8e50fc9d7"></a>
<!-- api: M:Inno.Rendering.RenderBufferDescriptor.GetHashCode 7e9091fb9bd8499e55655510c5e8ca96c2d4ee698c6c574302d2059b7a72a6e2 -->

```csharp
public override int Inno.Rendering.RenderBufferDescriptor.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L437).

## `elementCount`

<a id="api-f4a65ab50de58e4a"></a>
<!-- api: P:Inno.Rendering.RenderBufferDescriptor.elementCount b80714d689cea3ca27c475beb77c51267e66344fbaa8d51e5e299db91242c70a -->

```csharp
public int Inno.Rendering.RenderBufferDescriptor.elementCount { get; }
```

Gets the number of addressable elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L393).

## `elementStride`

<a id="api-7e0827d95c97ac69"></a>
<!-- api: P:Inno.Rendering.RenderBufferDescriptor.elementStride 046d22698554c3c46eae55293d2bbfbe9d25a69eab7bb090a15093234ca651b4 -->

```csharp
public int Inno.Rendering.RenderBufferDescriptor.elementStride { get; }
```

Gets the element size in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L398).

## `usage`

<a id="api-311173c0dd0e2252"></a>
<!-- api: P:Inno.Rendering.RenderBufferDescriptor.usage b8845b1f3a018c0b4939f610c23a701a3f50d2947e332381cb5b1f625d0cf9df -->

```csharp
public Inno.Rendering.RenderBufferUsage Inno.Rendering.RenderBufferDescriptor.usage { get; }
```

Gets permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L403).
