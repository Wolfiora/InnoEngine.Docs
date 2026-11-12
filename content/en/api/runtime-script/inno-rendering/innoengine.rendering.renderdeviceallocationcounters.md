---
title: "RenderDeviceAllocationCounters"
description: "Reference for RenderDeviceAllocationCounters in Inno.Rendering."
uid: api.inno.rendering.runtime-script.1b2782dc07767cb8
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderDeviceAllocationCounters`

This reference describes `RenderDeviceAllocationCounters` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderDeviceAllocationCounters>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f15d8b4027277e04) | Method |
| [`Equals`](#api-8d000e147d8760c5) | Method |
| [`Equals`](#api-6684d7d1e0576e94) | Method |
| [`GetHashCode`](#api-88c7d3afe81715c4) | Method |
| [`op_Equality`](#api-1145048474eaf66a) | Method |
| [`op_Inequality`](#api-0fc0032225b3eed5) | Method |
| [`ToString`](#api-551bf8e179da2f02) | Method |
| [`bufferAllocations`](#api-5a8e7e58d5001710) | Property |
| [`deviceGeneration`](#api-fe4993187a6287e7) | Property |
| [`frameBufferAllocations`](#api-7121db8bc5199527) | Property |
| [`textureAllocations`](#api-030117cb1a53dc6b) | Property |

## Type declaration

<a id="api-1b2782dc07767cb8"></a>
<!-- api: T:InnoEngine.Rendering.RenderDeviceAllocationCounters 7a7b486affaca82d3d917d87f405e7f755b06936b431374920896a923495bc79 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderDeviceAllocationCounters : System.IEquatable<InnoEngine.Rendering.RenderDeviceAllocationCounters>
```

Reports cumulative successful native allocations made by a device's transient graph resource pools.
Pool reuse does not increment these counters; retirement does not decrement them. They are not live
resource counts, managed allocation counts, byte measurements or per-frame command counts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `#ctor`

<a id="api-f15d8b4027277e04"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.#ctor(System.UInt32,System.UInt64,System.UInt64,System.UInt64) 2849aefd5369d30f9ef72d7d1df4649fb1ac8ff81f7e68548c5f70e8636163f2 -->

```csharp
public InnoEngine.Rendering.RenderDeviceAllocationCounters.RenderDeviceAllocationCounters(uint deviceGeneration, ulong textureAllocations, ulong bufferAllocations, ulong frameBufferAllocations)
```

Creates an immutable allocation snapshot scoped to one device generation.

**Parameter `deviceGeneration`:** Non-zero generation that owns the measured pools; counters restart for a new generation.

**Parameter `textureAllocations`:** Successful native transient texture allocations since device creation.

**Parameter `bufferAllocations`:** Successful native transient buffer allocations since device creation.

**Parameter `frameBufferAllocations`:** Successful native transient attachment framebuffer allocations since device creation.

**Throws `System.ArgumentOutOfRangeException`:** The device generation is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L30).

## `Equals`

<a id="api-8d000e147d8760c5"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.Equals(InnoEngine.Rendering.RenderDeviceAllocationCounters) a3d375af44f1ece512f7345e9b8f95ff2c254f06bcb400afe1e70be7c3b16c86 -->

```csharp
public bool InnoEngine.Rendering.RenderDeviceAllocationCounters.Equals(InnoEngine.Rendering.RenderDeviceAllocationCounters other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `Equals`

<a id="api-6684d7d1e0576e94"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.Equals(System.Object) c57517344c518dce8cca863ec04360454958998f8238bff516b2ec9df06ff930 -->

```csharp
public override bool InnoEngine.Rendering.RenderDeviceAllocationCounters.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `GetHashCode`

<a id="api-88c7d3afe81715c4"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.GetHashCode 7c9d7b0443ea9a0fd4adf266f764d258044efbe9d65a3c33a73f2daf583abd8f -->

```csharp
public override int InnoEngine.Rendering.RenderDeviceAllocationCounters.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `op_Equality`

<a id="api-1145048474eaf66a"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.op_Equality(InnoEngine.Rendering.RenderDeviceAllocationCounters,InnoEngine.Rendering.RenderDeviceAllocationCounters) e8c54c29f6c2a7037189db0c2b3432a29c1434b8571fd403d86d42c5f2f2a05f -->

```csharp
public static bool InnoEngine.Rendering.RenderDeviceAllocationCounters.operator ==(InnoEngine.Rendering.RenderDeviceAllocationCounters left, InnoEngine.Rendering.RenderDeviceAllocationCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `op_Inequality`

<a id="api-0fc0032225b3eed5"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.op_Inequality(InnoEngine.Rendering.RenderDeviceAllocationCounters,InnoEngine.Rendering.RenderDeviceAllocationCounters) d122fabce253290dccdd6d2ab658e947cf72b41cad78fbd26bceb3e78a359a72 -->

```csharp
public static bool InnoEngine.Rendering.RenderDeviceAllocationCounters.operator !=(InnoEngine.Rendering.RenderDeviceAllocationCounters left, InnoEngine.Rendering.RenderDeviceAllocationCounters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `ToString`

<a id="api-551bf8e179da2f02"></a>
<!-- api: M:InnoEngine.Rendering.RenderDeviceAllocationCounters.ToString 8b09ded4b05443a9f4c2b80fd83b9f3ab7a99832cb24033f8c4f7fbd96d9a200 -->

```csharp
public override string InnoEngine.Rendering.RenderDeviceAllocationCounters.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L10).

## `bufferAllocations`

<a id="api-5a8e7e58d5001710"></a>
<!-- api: P:InnoEngine.Rendering.RenderDeviceAllocationCounters.bufferAllocations 4444e5007d8a28f121aa1549d6475d627a2d0a46f89a25692347f2a4a5948381 -->

```csharp
public ulong InnoEngine.Rendering.RenderDeviceAllocationCounters.bufferAllocations { get; }
```

Gets successful native transient buffer allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L56).

## `deviceGeneration`

<a id="api-fe4993187a6287e7"></a>
<!-- api: P:InnoEngine.Rendering.RenderDeviceAllocationCounters.deviceGeneration b46316f7819303cd6f26c85a49a9224574ccbbade7d7394aecd810b1582a8b31 -->

```csharp
public uint InnoEngine.Rendering.RenderDeviceAllocationCounters.deviceGeneration { get; }
```

Gets the device generation whose cumulative counters are represented by this snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L46).

## `frameBufferAllocations`

<a id="api-7121db8bc5199527"></a>
<!-- api: P:InnoEngine.Rendering.RenderDeviceAllocationCounters.frameBufferAllocations 08859e6eed991a76c7378ab7972162c64994a5e858d09d49e0f2d12e4ac9e177 -->

```csharp
public ulong InnoEngine.Rendering.RenderDeviceAllocationCounters.frameBufferAllocations { get; }
```

Gets successful native transient attachment framebuffer allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L61).

## `textureAllocations`

<a id="api-030117cb1a53dc6b"></a>
<!-- api: P:InnoEngine.Rendering.RenderDeviceAllocationCounters.textureAllocations 59e8a496549e9ad5d99dcd1b86f577d3558a4bdde67eadee23e852029cc7f88c -->

```csharp
public ulong InnoEngine.Rendering.RenderDeviceAllocationCounters.textureAllocations { get; }
```

Gets successful native transient texture allocations since device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderDeviceAllocationCounters.cs#L51).
