---
title: "AudioClipMetadata"
description: "Reference for AudioClipMetadata in Inno.Audio."
uid: api.inno.audio.0c722fd1ce9fb99a
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipMetadata`

This reference describes `AudioClipMetadata` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioClipMetadata>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-27b5172129463fa0) | Method |
| [`Equals`](#api-26a412ac4cf2a84a) | Method |
| [`Equals`](#api-44760ca53ca2a4fc) | Method |
| [`GetHashCode`](#api-1e2625876ee5cd1f) | Method |
| [`op_Equality`](#api-3fcd129ff27585de) | Method |
| [`op_Inequality`](#api-d5197bf2c82bed46) | Method |
| [`ToString`](#api-2312ee2437f9a85a) | Method |
| [`channels`](#api-761cbb34e3215b66) | Property |
| [`codec`](#api-66f445103de195f5) | Property |
| [`duration`](#api-30a06dcd81f4c9cd) | Property |
| [`encodedByteLength`](#api-622a266ee5c0614b) | Property |
| [`frameCount`](#api-f7a6959faf2abed2) | Property |
| [`sampleRate`](#api-ce68de3ec9d7b50b) | Property |

## Type declaration

<a id="api-0c722fd1ce9fb99a"></a>
<!-- api: T:Inno.Audio.AudioClipMetadata 0a224b04d0038738d95e24727eba9ae22bd80f4c693c9c2bf8b9c090886a73a5 -->

```csharp
public readonly record struct Inno.Audio.AudioClipMetadata : System.IEquatable<Inno.Audio.AudioClipMetadata>
```

Describes imported encoded audio independently from its runtime storage path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `#ctor`

<a id="api-27b5172129463fa0"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.#ctor(Inno.Audio.AudioCodecId,System.Int32,System.Int32,System.Int64,System.Int64) b8508b0bef3fc319a04aff8b89feceb1045f1c5b0083cfefba6d24b487c7156d -->

```csharp
public Inno.Audio.AudioClipMetadata.AudioClipMetadata(Inno.Audio.AudioCodecId codec, int channels, int sampleRate, long frameCount, long encodedByteLength)
```

Creates imported audio metadata.

**Parameter `codec`:** Codec protocol of the encoded artifact.

**Parameter `channels`:** Encoded channel count.

**Parameter `sampleRate`:** Sample rate in frames per second.

**Parameter `frameCount`:** Total decoded frame count.

**Parameter `encodedByteLength`:** Encoded artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L32).

## `Equals`

<a id="api-26a412ac4cf2a84a"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.Equals(Inno.Audio.AudioClipMetadata) b6dd02773fe65a2de66089355e15c705eb52ddb7b36233b5aee5e4be0fe4b77e -->

```csharp
public bool Inno.Audio.AudioClipMetadata.Equals(Inno.Audio.AudioClipMetadata other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `Equals`

<a id="api-44760ca53ca2a4fc"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.Equals(System.Object) 49629849bd16ba79aebfd1c17ccbde6083b6fe3affb4002d00b565bf06a301ba -->

```csharp
public override bool Inno.Audio.AudioClipMetadata.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `GetHashCode`

<a id="api-1e2625876ee5cd1f"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.GetHashCode f75dc68dc3d74d795f051ece001073a56364d92260c669b3a01c3421f84e2e84 -->

```csharp
public override int Inno.Audio.AudioClipMetadata.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `op_Equality`

<a id="api-3fcd129ff27585de"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.op_Equality(Inno.Audio.AudioClipMetadata,Inno.Audio.AudioClipMetadata) 4093b02982bd156ea45b6eaa4dbfe58baf5955a6495ce8e212682e61a07cd47e -->

```csharp
public static bool Inno.Audio.AudioClipMetadata.operator ==(Inno.Audio.AudioClipMetadata left, Inno.Audio.AudioClipMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `op_Inequality`

<a id="api-d5197bf2c82bed46"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.op_Inequality(Inno.Audio.AudioClipMetadata,Inno.Audio.AudioClipMetadata) c23e078ee0f8fc90e4c3d6322b242ba35c0375c8d0285aa793495abb3e459210 -->

```csharp
public static bool Inno.Audio.AudioClipMetadata.operator !=(Inno.Audio.AudioClipMetadata left, Inno.Audio.AudioClipMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `ToString`

<a id="api-2312ee2437f9a85a"></a>
<!-- api: M:Inno.Audio.AudioClipMetadata.ToString 0961102d469641200a0b95b49c9f122bc7e5ec7b32fa47846282749a8dafc61e -->

```csharp
public override string Inno.Audio.AudioClipMetadata.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L12).

## `channels`

<a id="api-761cbb34e3215b66"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.channels e4c48c3c611c41a9baf61b8baac24e10debacba25f13a64289d2d986381a1b35 -->

```csharp
public int Inno.Audio.AudioClipMetadata.channels { get; }
```

Gets the encoded channel count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L60).

## `codec`

<a id="api-66f445103de195f5"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.codec 131046cdfb4bf638e34e26a9e56bc302d620e6ecd4b79836aa03be0f5959229f -->

```csharp
public Inno.Audio.AudioCodecId Inno.Audio.AudioClipMetadata.codec { get; }
```

Gets the codec protocol of the encoded artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L55).

## `duration`

<a id="api-30a06dcd81f4c9cd"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.duration 8415c260104d3c1ca4a40f2dfdf0c54352b1cbb0aaad3f2ad0ea997549bea7b0 -->

```csharp
public System.TimeSpan Inno.Audio.AudioClipMetadata.duration { get; }
```

Gets the clip duration derived from frame count and sample rate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L80).

## `encodedByteLength`

<a id="api-622a266ee5c0614b"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.encodedByteLength 28b00fec4b97c13caca64bd3204a1f201a0027641613f79f7d7b7eca91fa2dc3 -->

```csharp
public long Inno.Audio.AudioClipMetadata.encodedByteLength { get; }
```

Gets the encoded artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L75).

## `frameCount`

<a id="api-f7a6959faf2abed2"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.frameCount 7ebb6c5d4d91faf36c3dddd6c0048a8379041b2e3c972e8d70a1b3aa00aea7fc -->

```csharp
public long Inno.Audio.AudioClipMetadata.frameCount { get; }
```

Gets the total decoded frame count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L70).

## `sampleRate`

<a id="api-ce68de3ec9d7b50b"></a>
<!-- api: P:Inno.Audio.AudioClipMetadata.sampleRate 394143b057f0feba8ef89fad6ca9cbc02037ddf05f84ee2b1776add063a9477d -->

```csharp
public int Inno.Audio.AudioClipMetadata.sampleRate { get; }
```

Gets the sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L65).
