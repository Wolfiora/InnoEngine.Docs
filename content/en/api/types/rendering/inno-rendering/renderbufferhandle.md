---
title: "RenderBufferHandle"
description: "Reference for RenderBufferHandle in Inno.Rendering."
uid: api.inno.rendering.7599618a17fdca3e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBufferHandle`

This reference describes `RenderBufferHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderBufferHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-c08185700b4d9c60) | Method |
| [`Equals`](#api-e44b1f6f123afa33) | Method |
| [`GetHashCode`](#api-79749abf62c7e830) | Method |
| [`op_Equality`](#api-7f91d3499c963d63) | Method |
| [`op_Inequality`](#api-9529416e7c2c053d) | Method |
| [`ToString`](#api-f83f02533796ec33) | Method |
| [`isValid`](#api-0b9e365e1347d590) | Property |

## Type declaration

<a id="api-7599618a17fdca3e"></a>
<!-- api: T:Inno.Rendering.RenderBufferHandle ce164fd6561d4d4bbeae8235f0adf3ee2ba41f2dc7da385713df06220f6dbcd5 -->

```csharp
public readonly record struct Inno.Rendering.RenderBufferHandle : System.IEquatable<Inno.Rendering.RenderBufferHandle>
```

Identifies a frame-scoped render-graph buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `Equals`

<a id="api-c08185700b4d9c60"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.Equals(Inno.Rendering.RenderBufferHandle) d3b5b68235f36e9f1a45318ce0437b7f549753325b6dbe8dc61410f53150da2b -->

```csharp
public bool Inno.Rendering.RenderBufferHandle.Equals(Inno.Rendering.RenderBufferHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `Equals`

<a id="api-e44b1f6f123afa33"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.Equals(System.Object) 2527a7cf62fe5c7fe555980aa5493480946679c65ba069c0916fb4ae01e832b6 -->

```csharp
public override bool Inno.Rendering.RenderBufferHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `GetHashCode`

<a id="api-79749abf62c7e830"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.GetHashCode c98f511756d3b09dff4dcae2d601f795bd10088dc5b807384be96649d91714c2 -->

```csharp
public override int Inno.Rendering.RenderBufferHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `op_Equality`

<a id="api-7f91d3499c963d63"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.op_Equality(Inno.Rendering.RenderBufferHandle,Inno.Rendering.RenderBufferHandle) acff45e5580c38ee27ba5dd78b881794d551a9476047cc3c8f7c07f7fd548690 -->

```csharp
public static bool Inno.Rendering.RenderBufferHandle.operator ==(Inno.Rendering.RenderBufferHandle left, Inno.Rendering.RenderBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `op_Inequality`

<a id="api-9529416e7c2c053d"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.op_Inequality(Inno.Rendering.RenderBufferHandle,Inno.Rendering.RenderBufferHandle) 2c2a7dd118ce1d0fc02232a17f272e59a918b8beb0370c7fcac86c4c8d3a97a0 -->

```csharp
public static bool Inno.Rendering.RenderBufferHandle.operator !=(Inno.Rendering.RenderBufferHandle left, Inno.Rendering.RenderBufferHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `ToString`

<a id="api-f83f02533796ec33"></a>
<!-- api: M:Inno.Rendering.RenderBufferHandle.ToString 35bad0cbef7f8c1049ef112dfd09a2296df0fbcb8349c27a6f7fe10e6742c960 -->

```csharp
public override string Inno.Rendering.RenderBufferHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L468).

## `isValid`

<a id="api-0b9e365e1347d590"></a>
<!-- api: P:Inno.Rendering.RenderBufferHandle.isValid f98ca98127f6b1c250d528ed11fc24aeb8c6ffa9ae7e80fc909e2747c7948463 -->

```csharp
public bool Inno.Rendering.RenderBufferHandle.isValid { get; }
```

Gets whether the handle was created by a render graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L487).
