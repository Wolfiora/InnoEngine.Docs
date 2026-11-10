---
title: "AudioClipDescriptor"
description: "Reference for AudioClipDescriptor in Inno.Audio."
uid: api.inno.audio.5715b5a625483ca3
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipDescriptor`

This reference describes `AudioClipDescriptor` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioClipDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a23158ba2b0fd167) | Method |
| [`Equals`](#api-8a080d16ee428196) | Method |
| [`Equals`](#api-bad73566d044fa9a) | Method |
| [`GetHashCode`](#api-114b09c8c72203d7) | Method |
| [`op_Equality`](#api-e9ddf677e76d7ebf) | Method |
| [`op_Inequality`](#api-5316c864a0a28b6c) | Method |
| [`ToString`](#api-903b0d64588fea75) | Method |
| [`channels`](#api-bd0872e4768718c4) | Property |
| [`codec`](#api-01a4e28a556af036) | Property |
| [`encodedByteLength`](#api-2afb09da321e1bc5) | Property |
| [`frameCount`](#api-f27c4448362103e9) | Property |
| [`loadMode`](#api-c4b2b179a8bb5d96) | Property |
| [`sampleRate`](#api-f41347a9cbddec5d) | Property |

## Type declaration

<a id="api-5715b5a625483ca3"></a>
<!-- api: T:Inno.Audio.AudioClipDescriptor 8438aa638e71862a738f26fe04f85a653f0a8c39e2466ca069ce5b2752d29bdd -->

```csharp
public readonly record struct Inno.Audio.AudioClipDescriptor : System.IEquatable<Inno.Audio.AudioClipDescriptor>
```

Describes one immutable encoded audio artifact presented to a backend device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `#ctor`

<a id="api-a23158ba2b0fd167"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.#ctor(Inno.Audio.AudioCodecId,Inno.Audio.AudioClipLoadMode,System.Int32,System.Int32,System.Int64,System.Int64) 746614f68c3fa338c331ddb4cf556c08faae7b6470253fc388099d3e9661cf1b -->

```csharp
public Inno.Audio.AudioClipDescriptor.AudioClipDescriptor(Inno.Audio.AudioCodecId codec, Inno.Audio.AudioClipLoadMode loadMode, int channels, int sampleRate, long frameCount, long encodedByteLength)
```

Creates a backend clip description.

**Parameter `codec`:** Codec protocol used by the artifact.

**Parameter `loadMode`:** Required decoded or streamed storage strategy.

**Parameter `channels`:** Encoded channel count.

**Parameter `sampleRate`:** Encoded sample rate in frames per second.

**Parameter `frameCount`:** Total decoded frame count when known.

**Parameter `encodedByteLength`:** Encoded artifact length in bytes.

**Throws `System.ArgumentOutOfRangeException`:** The load mode is undefined or a channel, rate, frame, or byte count is outside its valid range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L34).

## `Equals`

<a id="api-8a080d16ee428196"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.Equals(Inno.Audio.AudioClipDescriptor) f7b4e1e2d4dce86545a8b2501da7390198a7e85686310d5f76e21cfae053de56 -->

```csharp
public bool Inno.Audio.AudioClipDescriptor.Equals(Inno.Audio.AudioClipDescriptor other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `Equals`

<a id="api-bad73566d044fa9a"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.Equals(System.Object) 75f2ec9b29268ac83bfc95961da126504baa97ef449257abae5ef0328f3044c5 -->

```csharp
public override bool Inno.Audio.AudioClipDescriptor.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `GetHashCode`

<a id="api-114b09c8c72203d7"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.GetHashCode 93d7a548f1c467e8bb019ea9c402804876fc05e40d6175bae6ffdd32dacef531 -->

```csharp
public override int Inno.Audio.AudioClipDescriptor.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `op_Equality`

<a id="api-e9ddf677e76d7ebf"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.op_Equality(Inno.Audio.AudioClipDescriptor,Inno.Audio.AudioClipDescriptor) 86f8e6874593d4c5551da4c2a55c0c1e2af2ff9f1cc627fce1e83e292298cd94 -->

```csharp
public static bool Inno.Audio.AudioClipDescriptor.operator ==(Inno.Audio.AudioClipDescriptor left, Inno.Audio.AudioClipDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `op_Inequality`

<a id="api-5316c864a0a28b6c"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.op_Inequality(Inno.Audio.AudioClipDescriptor,Inno.Audio.AudioClipDescriptor) a77dc513dc28ddd2f2e8280ff766f535e82bed38f923bb01e9adedcc96e16487 -->

```csharp
public static bool Inno.Audio.AudioClipDescriptor.operator !=(Inno.Audio.AudioClipDescriptor left, Inno.Audio.AudioClipDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `ToString`

<a id="api-903b0d64588fea75"></a>
<!-- api: M:Inno.Audio.AudioClipDescriptor.ToString b48f2323571c4cab280da091907d4cad66eeeaf2635adbc9ad1c2226ba00e2f3 -->

```csharp
public override string Inno.Audio.AudioClipDescriptor.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L8).

## `channels`

<a id="api-bd0872e4768718c4"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.channels 0ef3934de41ce71afc4fe3361f68a1731924bcab8e0d247890bffdd62542669f -->

```csharp
public int Inno.Audio.AudioClipDescriptor.channels { get; }
```

Gets the encoded channel count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L71).

## `codec`

<a id="api-01a4e28a556af036"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.codec d1aa3d55e717f8eab45a142dedd9d320e903588672286ec2dd6cdbf6bdf76521 -->

```csharp
public Inno.Audio.AudioCodecId Inno.Audio.AudioClipDescriptor.codec { get; }
```

Gets the encoded codec protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L61).

## `encodedByteLength`

<a id="api-2afb09da321e1bc5"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.encodedByteLength 72a284cb80e4149812a8a18f3eb43fd30f48bde865e2eb31fa1b12690be7be22 -->

```csharp
public long Inno.Audio.AudioClipDescriptor.encodedByteLength { get; }
```

Gets the encoded artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L86).

## `frameCount`

<a id="api-f27c4448362103e9"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.frameCount c08e849f51092e0d118e4bda8996caa6b4c330c0224ac704227ef6c02ef15211 -->

```csharp
public long Inno.Audio.AudioClipDescriptor.frameCount { get; }
```

Gets the total decoded frame count, or zero when unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L81).

## `loadMode`

<a id="api-c4b2b179a8bb5d96"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.loadMode 55679a5d7dcd7d1f3f5952bf0410b54835979d5d6519012ad8e5a468b78caaee -->

```csharp
public Inno.Audio.AudioClipLoadMode Inno.Audio.AudioClipDescriptor.loadMode { get; }
```

Gets the required storage strategy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L66).

## `sampleRate`

<a id="api-f41347a9cbddec5d"></a>
<!-- api: P:Inno.Audio.AudioClipDescriptor.sampleRate 3a7597cb901a42355c77eaa09ad9174164da6877cc7d493f0c36eda585d2f315 -->

```csharp
public int Inno.Audio.AudioClipDescriptor.sampleRate { get; }
```

Gets the encoded sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipDescriptor.cs#L76).
