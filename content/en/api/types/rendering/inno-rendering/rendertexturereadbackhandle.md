---
title: "RenderTextureReadbackHandle"
description: "Reference for RenderTextureReadbackHandle in Inno.Rendering."
uid: api.inno.rendering.f8746eda8c8a24fd
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureReadbackHandle`

This reference describes `RenderTextureReadbackHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderTextureReadbackHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-26ae34409cfa7223) | Method |
| [`Equals`](#api-eef7160075cd6071) | Method |
| [`GetHashCode`](#api-910a01dd30d56665) | Method |
| [`op_Equality`](#api-1e42e6941a7590be) | Method |
| [`op_Inequality`](#api-cd86b8c18048e806) | Method |
| [`ToString`](#api-eadbdcf21892b0db) | Method |
| [`isValid`](#api-30bbf53d29ac4a68) | Property |

## Type declaration

<a id="api-f8746eda8c8a24fd"></a>
<!-- api: T:Inno.Rendering.RenderTextureReadbackHandle f23a3017d460933ec67010c4c5001335b41ea839cf5f93ff2cb01e2c743e9082 -->

```csharp
public readonly record struct Inno.Rendering.RenderTextureReadbackHandle : System.IEquatable<Inno.Rendering.RenderTextureReadbackHandle>
```

Identifies one backend-neutral asynchronous texture readback operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `Equals`

<a id="api-26ae34409cfa7223"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.Equals(Inno.Rendering.RenderTextureReadbackHandle) d11f7b7d8edac23935c077ce083e312c253dc5af0435c9eb77ee79c026555cd4 -->

```csharp
public bool Inno.Rendering.RenderTextureReadbackHandle.Equals(Inno.Rendering.RenderTextureReadbackHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `Equals`

<a id="api-eef7160075cd6071"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.Equals(System.Object) 8000c624e1ed5f4ed7d617694a67b5c47addc82245a2c916e1a3a2a2d022befc -->

```csharp
public override bool Inno.Rendering.RenderTextureReadbackHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `GetHashCode`

<a id="api-910a01dd30d56665"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.GetHashCode dda78bdbea257cb1582e50bf2ede4beeab5cc1b6b7c30d21b616228c78f04aad -->

```csharp
public override int Inno.Rendering.RenderTextureReadbackHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `op_Equality`

<a id="api-1e42e6941a7590be"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.op_Equality(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackHandle) fb20f3c618f73e3f7bc214cbc0423fe87313758ac13f5fde85832b241ea86cc1 -->

```csharp
public static bool Inno.Rendering.RenderTextureReadbackHandle.operator ==(Inno.Rendering.RenderTextureReadbackHandle left, Inno.Rendering.RenderTextureReadbackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `op_Inequality`

<a id="api-cd86b8c18048e806"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.op_Inequality(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackHandle) 43d89b4537c6fe9971f0dddf620e64d73aeaa719fa478283faecad37feb07342 -->

```csharp
public static bool Inno.Rendering.RenderTextureReadbackHandle.operator !=(Inno.Rendering.RenderTextureReadbackHandle left, Inno.Rendering.RenderTextureReadbackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `ToString`

<a id="api-eadbdcf21892b0db"></a>
<!-- api: M:Inno.Rendering.RenderTextureReadbackHandle.ToString 64069218faaf9adb045cb2d02f6acf00587fa08e1a7676333a16ffc7a101e341 -->

```csharp
public override string Inno.Rendering.RenderTextureReadbackHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L8).

## `isValid`

<a id="api-30bbf53d29ac4a68"></a>
<!-- api: P:Inno.Rendering.RenderTextureReadbackHandle.isValid 743767ace250e554b1d0a34a7ef5f7a84b6a2d9f9eb95f71f1fc490d332f7fe1 -->

```csharp
public bool Inno.Rendering.RenderTextureReadbackHandle.isValid { get; }
```

Gets whether the handle identifies a device readback operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderTextureReadback.cs#L24).
