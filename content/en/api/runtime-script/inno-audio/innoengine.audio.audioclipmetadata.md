---
title: "AudioClipMetadata"
description: "Reference for AudioClipMetadata in Inno.Audio."
uid: api.inno.audio.runtime-script.fe4bf13c41cf6f75
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioClipMetadata`

This reference describes `AudioClipMetadata` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioClipMetadata>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08132fa0a00b1900) | Method |
| [`Equals`](#api-26bac6d17ed18fa4) | Method |
| [`Equals`](#api-08494fed21ef6221) | Method |
| [`GetHashCode`](#api-63f4de44c4609f05) | Method |
| [`op_Equality`](#api-94b24bf5cb41003a) | Method |
| [`op_Inequality`](#api-7e2c0a8b67f833ec) | Method |
| [`ToString`](#api-ba58b948bd7a21b6) | Method |
| [`channels`](#api-4574aef607201cfc) | Property |
| [`codec`](#api-fdb9d4b9813da72d) | Property |
| [`duration`](#api-930f66e48feae371) | Property |
| [`encodedByteLength`](#api-d6f149d4dcd057fe) | Property |
| [`frameCount`](#api-39a9cab2d30700b8) | Property |
| [`sampleRate`](#api-057e7acf6ef33735) | Property |

## Type declaration

<a id="api-fe4bf13c41cf6f75"></a>
<!-- api: T:InnoEngine.Audio.AudioClipMetadata de73568254276d77395b42dd77160f36f69bc2e5e8398fec370212d4e1893e5d -->

```csharp
public readonly struct InnoEngine.Audio.AudioClipMetadata : System.IEquatable<InnoEngine.Audio.AudioClipMetadata>
```

Describes imported encoded audio independently from its runtime storage path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `#ctor`

<a id="api-08132fa0a00b1900"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.#ctor(InnoEngine.Audio.AudioCodecId,System.Int32,System.Int32,System.Int64,System.Int64) 5a18527e849744e3e80fb6347efa56329835d3f6250c844861f33ee03c4f5e08 -->

```csharp
public InnoEngine.Audio.AudioClipMetadata.AudioClipMetadata(InnoEngine.Audio.AudioCodecId codec, int channels, int sampleRate, long frameCount, long encodedByteLength)
```

Creates imported audio metadata.

**Parameter `codec`:** Codec protocol of the encoded artifact.

**Parameter `channels`:** Encoded channel count.

**Parameter `sampleRate`:** Sample rate in frames per second.

**Parameter `frameCount`:** Total decoded frame count.

**Parameter `encodedByteLength`:** Encoded artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L32).

## `Equals`

<a id="api-26bac6d17ed18fa4"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.Equals(InnoEngine.Audio.AudioClipMetadata) c8e1acd10d09a63f59678171c6f214b32ae3801583bac2e408a8283bd29cf5c5 -->

```csharp
public bool InnoEngine.Audio.AudioClipMetadata.Equals(InnoEngine.Audio.AudioClipMetadata other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `Equals`

<a id="api-08494fed21ef6221"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.Equals(System.Object) 1e46791f1c07ee700c2a200be13e95ac68c99dd3b114cc16eba11775b889c4d0 -->

```csharp
public override bool InnoEngine.Audio.AudioClipMetadata.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `GetHashCode`

<a id="api-63f4de44c4609f05"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.GetHashCode fecf7e3cbeb2a086f4166cb9c7c0ca5c51d56deda6b1a9fc78eeb2dd3c6ee562 -->

```csharp
public override int InnoEngine.Audio.AudioClipMetadata.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `op_Equality`

<a id="api-94b24bf5cb41003a"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.op_Equality(InnoEngine.Audio.AudioClipMetadata,InnoEngine.Audio.AudioClipMetadata) 82af8edde0d6633d56fec554ce811f5d429d8e4b2a5c4ff62701dc3f3920f99c -->

```csharp
public static bool InnoEngine.Audio.AudioClipMetadata.operator ==(InnoEngine.Audio.AudioClipMetadata left, InnoEngine.Audio.AudioClipMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `op_Inequality`

<a id="api-7e2c0a8b67f833ec"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.op_Inequality(InnoEngine.Audio.AudioClipMetadata,InnoEngine.Audio.AudioClipMetadata) 20e4327d812bcaa30fff40007379b2b139637a17600d0c27b5728e9758bd9c23 -->

```csharp
public static bool InnoEngine.Audio.AudioClipMetadata.operator !=(InnoEngine.Audio.AudioClipMetadata left, InnoEngine.Audio.AudioClipMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `ToString`

<a id="api-ba58b948bd7a21b6"></a>
<!-- api: M:InnoEngine.Audio.AudioClipMetadata.ToString aba9985b0676be04b6f36c0877458a7c554eb104938e7b95ce664d17d541c1de -->

```csharp
public override string InnoEngine.Audio.AudioClipMetadata.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `channels`

<a id="api-4574aef607201cfc"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.channels 8f97ebf6bb22881da665674f87440fa6e4d8a0d90ec2c7ebcafce2598b7008f2 -->

```csharp
public int InnoEngine.Audio.AudioClipMetadata.channels { get; }
```

Gets the encoded channel count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L60).

## `codec`

<a id="api-fdb9d4b9813da72d"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.codec cc3313b37e09064883f360786b36c5af4c625e39cd136b3ffb9bf24c052ec7d1 -->

```csharp
public InnoEngine.Audio.AudioCodecId InnoEngine.Audio.AudioClipMetadata.codec { get; }
```

Gets the codec protocol of the encoded artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L55).

## `duration`

<a id="api-930f66e48feae371"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.duration 8811f08c521fcd6de1752b6c8f4ac77286bed62636d2c1d81786af0b89ef85a2 -->

```csharp
public System.TimeSpan InnoEngine.Audio.AudioClipMetadata.duration { get; }
```

Gets the clip duration derived from frame count and sample rate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L80).

## `encodedByteLength`

<a id="api-d6f149d4dcd057fe"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.encodedByteLength 529af8f8b3098a4e3713072c6202c5d2d239c2659f576b1a8a16bcb0d998f4ef -->

```csharp
public long InnoEngine.Audio.AudioClipMetadata.encodedByteLength { get; }
```

Gets the encoded artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L75).

## `frameCount`

<a id="api-39a9cab2d30700b8"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.frameCount 3d6192a8f825bc4c24846a4065980e7be74217ec3c6184ee5f0287b9588c42a2 -->

```csharp
public long InnoEngine.Audio.AudioClipMetadata.frameCount { get; }
```

Gets the total decoded frame count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L70).

## `sampleRate`

<a id="api-057e7acf6ef33735"></a>
<!-- api: P:InnoEngine.Audio.AudioClipMetadata.sampleRate 0d44c86480ff33825ccebd51b14e06944096b9fff50a4c3743d65417aa498017 -->

```csharp
public int InnoEngine.Audio.AudioClipMetadata.sampleRate { get; }
```

Gets the sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L65).
