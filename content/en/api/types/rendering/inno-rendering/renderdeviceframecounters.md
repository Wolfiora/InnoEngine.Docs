---
title: "RenderDeviceFrameCounters"
description: "Reference for RenderDeviceFrameCounters in Inno.Rendering."
uid: api.inno.rendering.d2b057ab266e1ff8
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDeviceFrameCounters`

This reference describes `RenderDeviceFrameCounters` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderDeviceFrameCounters>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-77328a58677adc60) | Method |
| [`Equals`](#api-b75352ac65cb7d22) | Method |
| [`Equals`](#api-c3141857a3e20f37) | Method |
| [`GetHashCode`](#api-0c41a57a944d4fa0) | Method |
| [`op_Equality`](#api-18f24b7515684096) | Method |
| [`op_Inequality`](#api-886e7135ca4a4ae4) | Method |
| [`ToString`](#api-02dd27675a8f3ac3) | Method |
| [`dispatchCount`](#api-f99e9cf78ae25708) | Property |
| [`drawCount`](#api-f697095a8c300b06) | Property |

## Type declaration

<a id="api-d2b057ab266e1ff8"></a>
<!-- api: T:Inno.Rendering.RenderDeviceFrameCounters 6b5383af1058e9a9aabc10efacfe6045393723cdcbd3f3fc9214e631ea0068c4 -->

```csharp
public readonly record struct Inno.Rendering.RenderDeviceFrameCounters : System.IEquatable<Inno.Rendering.RenderDeviceFrameCounters>
```

Contains backend-recorded GPU command submissions for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `#ctor`

<a id="api-77328a58677adc60"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.#ctor(System.Int32,System.Int32) f1cb55cae912079f3e23b632e21ec9bfe222e297d3a8dff280aad62f8521ebe4 -->

```csharp
public Inno.Rendering.RenderDeviceFrameCounters.RenderDeviceFrameCounters(int drawCount, int dispatchCount)
```

Creates immutable device frame counters.

**Parameter `drawCount`:** Direct and indirect draw commands submitted so far.

**Parameter `dispatchCount`:** Direct and indirect compute dispatches submitted so far.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L30).

## `Equals`

<a id="api-b75352ac65cb7d22"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.Equals(Inno.Rendering.RenderDeviceFrameCounters) 4ec2468760f8667da1e2b2ce5ef875841adae7ae45defa2aa388766295fd5a93 -->

```csharp
public bool Inno.Rendering.RenderDeviceFrameCounters.Equals(Inno.Rendering.RenderDeviceFrameCounters other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `Equals`

<a id="api-c3141857a3e20f37"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.Equals(System.Object) 16f391368bf9804a4eb5e93cd35a9f66b2af982beef002b3cf11bfa3b6496df3 -->

```csharp
public override bool Inno.Rendering.RenderDeviceFrameCounters.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `GetHashCode`

<a id="api-0c41a57a944d4fa0"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.GetHashCode e95f8919370dac8fe5f3273a7b781094c8f8d08fc25f4a7b99b48c52eb68c831 -->

```csharp
public override int Inno.Rendering.RenderDeviceFrameCounters.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `op_Equality`

<a id="api-18f24b7515684096"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.op_Equality(Inno.Rendering.RenderDeviceFrameCounters,Inno.Rendering.RenderDeviceFrameCounters) 0249902ac76df9c9f7e16204ee87ab336bd834a92cca04fc679319f0bf3e5484 -->

```csharp
public static bool Inno.Rendering.RenderDeviceFrameCounters.operator ==(Inno.Rendering.RenderDeviceFrameCounters left, Inno.Rendering.RenderDeviceFrameCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `op_Inequality`

<a id="api-886e7135ca4a4ae4"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.op_Inequality(Inno.Rendering.RenderDeviceFrameCounters,Inno.Rendering.RenderDeviceFrameCounters) 9f55745ab9cd270483395fff51275ca8e18b7855b439d517483664cbec4d29c8 -->

```csharp
public static bool Inno.Rendering.RenderDeviceFrameCounters.operator !=(Inno.Rendering.RenderDeviceFrameCounters left, Inno.Rendering.RenderDeviceFrameCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `ToString`

<a id="api-02dd27675a8f3ac3"></a>
<!-- api: M:Inno.Rendering.RenderDeviceFrameCounters.ToString 155438c6cc9c8b89695a962432040354a37d298c8300bd6ea19c0445ff57b322 -->

```csharp
public override string Inno.Rendering.RenderDeviceFrameCounters.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L19).

## `dispatchCount`

<a id="api-f99e9cf78ae25708"></a>
<!-- api: P:Inno.Rendering.RenderDeviceFrameCounters.dispatchCount 1bf21c640a9ad3e4a522ac4972d063f2a657ef33375864105147373db254b28e -->

```csharp
public int Inno.Rendering.RenderDeviceFrameCounters.dispatchCount { get; }
```

Gets direct and indirect compute dispatches submitted during the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L48).

## `drawCount`

<a id="api-f697095a8c300b06"></a>
<!-- api: P:Inno.Rendering.RenderDeviceFrameCounters.drawCount 6d71703293660ae5c366194dfd951a7929898a298317b0d7bb2916518dd562c3 -->

```csharp
public int Inno.Rendering.RenderDeviceFrameCounters.drawCount { get; }
```

Gets direct and indirect draw commands submitted during the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L43).
