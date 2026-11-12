---
title: "AudioStatistics"
description: "Reference for AudioStatistics in Inno.Audio."
uid: api.inno.audio.runtime-script.9d02afc00dc71c77
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioStatistics`

This reference describes `AudioStatistics` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ae751278f0fa5d27) | Method |
| [`Equals`](#api-17156ee72edeb901) | Method |
| [`Equals`](#api-3c01f8acd62dfb07) | Method |
| [`GetHashCode`](#api-3048c131e1374623) | Method |
| [`op_Equality`](#api-db15a14d72401ea4) | Method |
| [`op_Inequality`](#api-cb6ea781d7724a10) | Method |
| [`ToString`](#api-bf8aaac4d377b857) | Method |
| [`activeVoices`](#api-cb2825e260e09e1c) | Property |
| [`decodedBytes`](#api-07a571b26617d399) | Property |
| [`loadedClips`](#api-9bb9dd110b43dccd) | Property |
| [`stolenVoiceCount`](#api-73b76e00f23763c7) | Property |

## Type declaration

<a id="api-9d02afc00dc71c77"></a>
<!-- api: T:InnoEngine.Audio.AudioStatistics ea206f7aec7f7a6ef9a510d45a5613cb0f4e5ee33545ac31b82048214349b7d0 -->

```csharp
public readonly struct InnoEngine.Audio.AudioStatistics : System.IEquatable<InnoEngine.Audio.AudioStatistics>
```

Reports an immutable snapshot of runtime and backend resource usage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `#ctor`

<a id="api-ae751278f0fa5d27"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64) 3b3038189c63d03b8aaadd983acf6042f2566cf621c8f699844afabbf9694c68 -->

```csharp
public InnoEngine.Audio.AudioStatistics.AudioStatistics(int activeVoices, int loadedClips, long decodedBytes, long stolenVoiceCount)
```

Creates an audio statistics snapshot.

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L236).

## `Equals`

<a id="api-17156ee72edeb901"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.Equals(InnoEngine.Audio.AudioStatistics) 17a3d2c92faec8dcc1e5f61c97055f20d8ec1d6b6938c26c5b9259245411d51a -->

```csharp
public bool InnoEngine.Audio.AudioStatistics.Equals(InnoEngine.Audio.AudioStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `Equals`

<a id="api-3c01f8acd62dfb07"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.Equals(System.Object) af6c5d0dac8d145774aa5110801b8177c19683773a7a981848d8e692f56f3149 -->

```csharp
public override bool InnoEngine.Audio.AudioStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `GetHashCode`

<a id="api-3048c131e1374623"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.GetHashCode 42d4d2b5f2f911d63a34e2001fc74384599c0ea946d311473312d8bf8241fb92 -->

```csharp
public override int InnoEngine.Audio.AudioStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `op_Equality`

<a id="api-db15a14d72401ea4"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.op_Equality(InnoEngine.Audio.AudioStatistics,InnoEngine.Audio.AudioStatistics) 40dbc982bdabb14df00218edd3ca60b23bf44fa9aafccef1d172ab78ae7b5161 -->

```csharp
public static bool InnoEngine.Audio.AudioStatistics.operator ==(InnoEngine.Audio.AudioStatistics left, InnoEngine.Audio.AudioStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `op_Inequality`

<a id="api-cb6ea781d7724a10"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.op_Inequality(InnoEngine.Audio.AudioStatistics,InnoEngine.Audio.AudioStatistics) f178bd70d77a5f295cb4fcf3ef72d3df6a3fc7947ef090aeda8a24196ff48e5f -->

```csharp
public static bool InnoEngine.Audio.AudioStatistics.operator !=(InnoEngine.Audio.AudioStatistics left, InnoEngine.Audio.AudioStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `ToString`

<a id="api-bf8aaac4d377b857"></a>
<!-- api: M:InnoEngine.Audio.AudioStatistics.ToString f4f1f01d51fccc9df33feeeba524e43c275b1b294c9e8990558720070b47ad68 -->

```csharp
public override string InnoEngine.Audio.AudioStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `activeVoices`

<a id="api-cb2825e260e09e1c"></a>
<!-- api: P:InnoEngine.Audio.AudioStatistics.activeVoices c510754f1237e0909e188a0ddaee52e5461fbd87c126b263a665bfbd79e60b9b -->

```csharp
public int InnoEngine.Audio.AudioStatistics.activeVoices { get; }
```

Gets voices that currently consume runtime budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L255).

## `decodedBytes`

<a id="api-07a571b26617d399"></a>
<!-- api: P:InnoEngine.Audio.AudioStatistics.decodedBytes a00c1754a11c200aa8957cb33927ab84b2053657fb554e45c6fc637d25a4187b -->

```csharp
public long InnoEngine.Audio.AudioStatistics.decodedBytes { get; }
```

Gets approximate decoded clip bytes held in memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L265).

## `loadedClips`

<a id="api-9bb9dd110b43dccd"></a>
<!-- api: P:InnoEngine.Audio.AudioStatistics.loadedClips 538df7457c92682c6f20fea5051e30090778cad1cf0a5021cc805c55a29de10b -->

```csharp
public int InnoEngine.Audio.AudioStatistics.loadedClips { get; }
```

Gets clip allocations held by the backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L260).

## `stolenVoiceCount`

<a id="api-73b76e00f23763c7"></a>
<!-- api: P:InnoEngine.Audio.AudioStatistics.stolenVoiceCount bc61a8c2f5a02a9b0c3b675c25e3f66f4feef8e4098080d87b16b939820a04b4 -->

```csharp
public long InnoEngine.Audio.AudioStatistics.stolenVoiceCount { get; }
```

Gets voices reclaimed since runtime creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L270).
