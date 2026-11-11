---
title: "RenderDeviceAllocationCounters"
description: "Reference for RenderDeviceAllocationCounters in Inno.Rendering."
uid: api.inno.rendering.3aaaed440a9febd0
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDeviceAllocationCounters`

This reference describes `RenderDeviceAllocationCounters` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderDeviceAllocationCounters>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9a01825475435fde) | Method |
| [`Equals`](#api-6431eae5df214843) | Method |
| [`Equals`](#api-ee08c5552b7ed050) | Method |
| [`GetHashCode`](#api-efc3acd3fa090c0e) | Method |
| [`op_Equality`](#api-b57b44abfde7f0cd) | Method |
| [`op_Inequality`](#api-de28b8823cfe2b02) | Method |
| [`ToString`](#api-b7364d469aab0380) | Method |
| [`bufferAllocations`](#api-25916eb426f87a51) | Property |
| [`deviceGeneration`](#api-33ea28f67726fc3e) | Property |
| [`frameBufferAllocations`](#api-b43312f408ae0c72) | Property |
| [`textureAllocations`](#api-3f034d23412097da) | Property |

## Type declaration

<a id="api-3aaaed440a9febd0"></a>
<!-- api: T:Inno.Rendering.RenderDeviceAllocationCounters d1e5e0843fcfd08a9030e1cf2998453855939af83caee243dd8f5c0b5c084c06 -->

```csharp
public readonly record struct Inno.Rendering.RenderDeviceAllocationCounters : System.IEquatable<Inno.Rendering.RenderDeviceAllocationCounters>
```

Reports cumulative successful native allocations made by a device's transient graph resource pools.
Pool reuse does not increment these counters; retirement does not decrement them. They are not live
resource counts, managed allocation counts, byte measurements or per-frame command counts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `#ctor`

<a id="api-9a01825475435fde"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64) 830f6e44eaf96d682640a5d16e22fefa6eb4af639d3de5310aa8fc42b942578f -->

```csharp
public Inno.Rendering.RenderDeviceAllocationCounters.RenderDeviceAllocationCounters(uint deviceGeneration, ulong textureAllocations, ulong bufferAllocations, ulong frameBufferAllocations)
```

Creates an immutable allocation snapshot scoped to one device generation.

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

**Throws `System.ArgumentOutOfRangeException`:** The device generation is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L30).

## `Equals`

<a id="api-6431eae5df214843"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.Equals(Inno.Rendering.RenderDeviceAllocationCounters) e1c5463d6c5c611ddac2fa88ec6d59c7386fdeb9d02651a8f0a034d31ddc9400 -->

```csharp
public bool Inno.Rendering.RenderDeviceAllocationCounters.Equals(Inno.Rendering.RenderDeviceAllocationCounters other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `Equals`

<a id="api-ee08c5552b7ed050"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.Equals(System.Object) 3e2cd198054d99316e9b9a14b91e23af1cbc4f8320f519532f1f5abb62523e4e -->

```csharp
public override bool Inno.Rendering.RenderDeviceAllocationCounters.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `GetHashCode`

<a id="api-efc3acd3fa090c0e"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.GetHashCode 37bf0acd3b36b2472159fcfb72bc3303a76b18ceb5a088744ab1386d8f7de342 -->

```csharp
public override int Inno.Rendering.RenderDeviceAllocationCounters.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `op_Equality`

<a id="api-b57b44abfde7f0cd"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.op_Equality(Inno.Rendering.RenderDeviceAllocationCounters,Inno.Rendering.RenderDeviceAllocationCounters) 87cfaf8fc1af74c2b544fc308ac1bcd665fc43312daa99f273720fad609d2ecd -->

```csharp
public static bool Inno.Rendering.RenderDeviceAllocationCounters.operator ==(Inno.Rendering.RenderDeviceAllocationCounters left, Inno.Rendering.RenderDeviceAllocationCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `op_Inequality`

<a id="api-de28b8823cfe2b02"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.op_Inequality(Inno.Rendering.RenderDeviceAllocationCounters,Inno.Rendering.RenderDeviceAllocationCounters) 56bfe3df3be3454c982d0d400e900c4dd7a3f61ecb8444c04faf2698c189dd79 -->

```csharp
public static bool Inno.Rendering.RenderDeviceAllocationCounters.operator !=(Inno.Rendering.RenderDeviceAllocationCounters left, Inno.Rendering.RenderDeviceAllocationCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `ToString`

<a id="api-b7364d469aab0380"></a>
<!-- api: M:Inno.Rendering.RenderDeviceAllocationCounters.ToString 90d0d2702a8c74d7a3732994a7d5356dc3c9d505dbebefa42ec6e5721fe3d2e7 -->

```csharp
public override string Inno.Rendering.RenderDeviceAllocationCounters.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `bufferAllocations`

<a id="api-25916eb426f87a51"></a>
<!-- api: P:Inno.Rendering.RenderDeviceAllocationCounters.bufferAllocations 5f36b420b7e94efa85299f3807bc4785932b7b67deb90f26d2694af8bae07d64 -->

```csharp
public ulong Inno.Rendering.RenderDeviceAllocationCounters.bufferAllocations { get; }
```

Gets successful native transient buffer allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L56).

## `deviceGeneration`

<a id="api-33ea28f67726fc3e"></a>
<!-- api: P:Inno.Rendering.RenderDeviceAllocationCounters.deviceGeneration 52cd1a9b5f6f891681051f5af21e94bd7aae7c64cfcdf93fc508dca466de85c6 -->

```csharp
public uint Inno.Rendering.RenderDeviceAllocationCounters.deviceGeneration { get; }
```

Gets the device generation whose cumulative counters are represented by this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L46).

## `frameBufferAllocations`

<a id="api-b43312f408ae0c72"></a>
<!-- api: P:Inno.Rendering.RenderDeviceAllocationCounters.frameBufferAllocations 6465425f94415dd2df5f30456ca2f14407d52b01eb306b62d3fa2d4581881376 -->

```csharp
public ulong Inno.Rendering.RenderDeviceAllocationCounters.frameBufferAllocations { get; }
```

Gets successful native transient attachment framebuffer allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L61).

## `textureAllocations`

<a id="api-3f034d23412097da"></a>
<!-- api: P:Inno.Rendering.RenderDeviceAllocationCounters.textureAllocations 7e74348937b928494927df95af8ca2fd889b2230f0a1c7292f92e7370f0ab61c -->

```csharp
public ulong Inno.Rendering.RenderDeviceAllocationCounters.textureAllocations { get; }
```

Gets successful native transient texture allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L51).
