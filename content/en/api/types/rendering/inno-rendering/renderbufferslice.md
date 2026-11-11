---
title: "RenderBufferSlice"
description: "Reference for RenderBufferSlice in Inno.Rendering."
uid: api.inno.rendering.d6418fb526109d94
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBufferSlice`

This reference describes `RenderBufferSlice` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderBufferSlice>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-83b7bdcf749718f8) | Method |
| [`Equals`](#api-f91a76635b3dd4c9) | Method |
| [`GetHashCode`](#api-52e007bde37bef03) | Method |
| [`op_Equality`](#api-145ff974cc556866) | Method |
| [`op_Inequality`](#api-d2a1d2ef5347f762) | Method |
| [`ToString`](#api-f988b8c738f18c4f) | Method |
| [`elementCount`](#api-296887fce9aa543e) | Property |
| [`firstElement`](#api-180a9ff1837339d9) | Property |
| [`isValid`](#api-44ace741d66bedc9) | Property |
| [`usage`](#api-900eb74e0b6b68ea) | Property |

## Type declaration

<a id="api-d6418fb526109d94"></a>
<!-- api: T:Inno.Rendering.RenderBufferSlice b302b1e723f8e6924ff6c298a8bf3c9e1f161fd2a370b9c27eedfbd788525e8a -->

```csharp
public readonly record struct Inno.Rendering.RenderBufferSlice : System.IEquatable<Inno.Rendering.RenderBufferSlice>
```

Identifies one range in a frame upload page without exposing its persistent backing buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `Equals`

<a id="api-83b7bdcf749718f8"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.Equals(Inno.Rendering.RenderBufferSlice) ab70598b5a95736165c2a8574f8534481f12e7f34795e7a6b684a5545b5d2a57 -->

```csharp
public bool Inno.Rendering.RenderBufferSlice.Equals(Inno.Rendering.RenderBufferSlice other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `Equals`

<a id="api-f91a76635b3dd4c9"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.Equals(System.Object) 0a7505990d3a805f3a0d46717695151a346930cb56dea41dd7fa6fb097ba7a59 -->

```csharp
public override bool Inno.Rendering.RenderBufferSlice.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `GetHashCode`

<a id="api-52e007bde37bef03"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.GetHashCode 286a34e6ec39dac918f4a394035f632bd012eebf18b59bdb30bc944699e44b61 -->

```csharp
public override int Inno.Rendering.RenderBufferSlice.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `op_Equality`

<a id="api-145ff974cc556866"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.op_Equality(Inno.Rendering.RenderBufferSlice,Inno.Rendering.RenderBufferSlice) 32a5e88cc3e4c89baec80bac71ee7eb7bf3740a32e45b2d9ef2b849b6b19a997 -->

```csharp
public static bool Inno.Rendering.RenderBufferSlice.operator ==(Inno.Rendering.RenderBufferSlice left, Inno.Rendering.RenderBufferSlice right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `op_Inequality`

<a id="api-d2a1d2ef5347f762"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.op_Inequality(Inno.Rendering.RenderBufferSlice,Inno.Rendering.RenderBufferSlice) c7d5563b5a528174c147c047342aeba3925135552d9ef77e32d524f902c7cbc5 -->

```csharp
public static bool Inno.Rendering.RenderBufferSlice.operator !=(Inno.Rendering.RenderBufferSlice left, Inno.Rendering.RenderBufferSlice right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `ToString`

<a id="api-f988b8c738f18c4f"></a>
<!-- api: M:Inno.Rendering.RenderBufferSlice.ToString eff95ddadef7eb25296508e302aae72d8cedc527ebc27f912fcb62aea9bea719 -->

```csharp
public override string Inno.Rendering.RenderBufferSlice.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `elementCount`

<a id="api-296887fce9aa543e"></a>
<!-- api: P:Inno.Rendering.RenderBufferSlice.elementCount debab4a61b4762edba20d45011135b15c6843c44febdd0fffc2d5f230a012c37 -->

```csharp
public int Inno.Rendering.RenderBufferSlice.elementCount { get; }
```

Gets the number of uploaded elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L111).

## `firstElement`

<a id="api-180a9ff1837339d9"></a>
<!-- api: P:Inno.Rendering.RenderBufferSlice.firstElement e5178ff1354eceddb2c46d0da9947c627342ad00ec5b70f64a6ed8374c877f81 -->

```csharp
public int Inno.Rendering.RenderBufferSlice.firstElement { get; }
```

Gets the first uploaded element in the backing frame page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L106).

## `isValid`

<a id="api-44ace741d66bedc9"></a>
<!-- api: P:Inno.Rendering.RenderBufferSlice.isValid e27a4763b96f57e2dd4c8229293642aff7c1ed3ad2d8bab357ec10d2db6d228d -->

```csharp
public bool Inno.Rendering.RenderBufferSlice.isValid { get; }
```

Gets whether this slice was produced by a frame upload service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L121).

## `usage`

<a id="api-900eb74e0b6b68ea"></a>
<!-- api: P:Inno.Rendering.RenderBufferSlice.usage 39d77b255171cf7d8916e0cb22b24a6a8e01c3e739a6810fa48631b8cc7dc2f0 -->

```csharp
public Inno.Rendering.RenderBufferUsage Inno.Rendering.RenderBufferSlice.usage { get; }
```

Gets permitted GPU uses for this slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L116).
