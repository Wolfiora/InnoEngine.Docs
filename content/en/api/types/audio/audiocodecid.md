---
title: "AudioCodecId"
description: "Reference for AudioCodecId in Inno.Audio."
uid: api.inno.audio.2ad16f6c5b70077f
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioCodecId`

This reference describes `AudioCodecId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioCodecId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1af5bde7e66b25f1) | Method |
| [`Equals`](#api-8a87c9752741b2ef) | Method |
| [`Equals`](#api-09d02a61b685e1ff) | Method |
| [`GetHashCode`](#api-6e48b2df68aa571c) | Method |
| [`op_Equality`](#api-9f3e015887fca32f) | Method |
| [`op_Inequality`](#api-54cb4b8d0d13ffe4) | Method |
| [`ToString`](#api-ac867add019aa5ff) | Method |
| [`flac`](#api-e0b34c3b7404edba) | Property |
| [`isValid`](#api-625d6c559070c87a) | Property |
| [`mp3`](#api-fceed0cdd26557e8) | Property |
| [`value`](#api-2ddaf59606fcb070) | Property |
| [`wav`](#api-bcc4e39fa39b822e) | Property |

## Type declaration

<a id="api-2ad16f6c5b70077f"></a>
<!-- api: T:Inno.Audio.AudioCodecId 2860462f0a8162c9e4c92fa72c59291b63a974f147f04f334daf61cf01583676 -->

```csharp
public readonly record struct Inno.Audio.AudioCodecId : System.IEquatable<Inno.Audio.AudioCodecId>
```

Identifies encoded audio data without constraining codec providers to a closed enum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `#ctor`

<a id="api-1af5bde7e66b25f1"></a>
<!-- api: M:Inno.Audio.AudioCodecId.#ctor(System.String) 34a874ae35447de0b8c26c9d769146fbd1ae75d228bbf4373d641700975d61cd -->

```csharp
public Inno.Audio.AudioCodecId.AudioCodecId(string value)
```

Creates an open codec identifier.

**Parameter `value`:** Globally stable codec protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L199).

## `Equals`

<a id="api-8a87c9752741b2ef"></a>
<!-- api: M:Inno.Audio.AudioCodecId.Equals(Inno.Audio.AudioCodecId) 12c37c66d5087cd1fba215d7b00924b72a71078177afd9070200b5237c8dda29 -->

```csharp
public bool Inno.Audio.AudioCodecId.Equals(Inno.Audio.AudioCodecId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `Equals`

<a id="api-09d02a61b685e1ff"></a>
<!-- api: M:Inno.Audio.AudioCodecId.Equals(System.Object) a7b7b79205cdbf0a261d1d8fb47d07dc3436b0bd46460b240d81f965ea274105 -->

```csharp
public override bool Inno.Audio.AudioCodecId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `GetHashCode`

<a id="api-6e48b2df68aa571c"></a>
<!-- api: M:Inno.Audio.AudioCodecId.GetHashCode 8b3d318fddc3cde43e2b6a1a2f626f4a042bc3895239070a1eb3314064eec1fc -->

```csharp
public override int Inno.Audio.AudioCodecId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `op_Equality`

<a id="api-9f3e015887fca32f"></a>
<!-- api: M:Inno.Audio.AudioCodecId.op_Equality(Inno.Audio.AudioCodecId,Inno.Audio.AudioCodecId) 6a300829a9db31c62b64e23d5ee301d6baef88bfa3267572b1e8104e3b1a4e80 -->

```csharp
public static bool Inno.Audio.AudioCodecId.operator ==(Inno.Audio.AudioCodecId left, Inno.Audio.AudioCodecId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `op_Inequality`

<a id="api-54cb4b8d0d13ffe4"></a>
<!-- api: M:Inno.Audio.AudioCodecId.op_Inequality(Inno.Audio.AudioCodecId,Inno.Audio.AudioCodecId) 60986e21e5e2eab4db42246323f0491fa3ddeb3ea14ae3f81db434da141a6344 -->

```csharp
public static bool Inno.Audio.AudioCodecId.operator !=(Inno.Audio.AudioCodecId left, Inno.Audio.AudioCodecId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `ToString`

<a id="api-ac867add019aa5ff"></a>
<!-- api: M:Inno.Audio.AudioCodecId.ToString 01bb63ba9c0b212356d55e3d6a2cb48e49b1cc9116859800eed724b6143751ce -->

```csharp
public override string Inno.Audio.AudioCodecId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L236).

## `flac`

<a id="api-e0b34c3b7404edba"></a>
<!-- api: P:Inno.Audio.AudioCodecId.flac de83c110416f285634cef5423cdb2b3c5fa7e78e452928adb7a60c72a642e87e -->

```csharp
public static Inno.Audio.AudioCodecId Inno.Audio.AudioCodecId.flac { get; }
```

Gets the standard Free Lossless Audio Codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L213).

## `isValid`

<a id="api-625d6c559070c87a"></a>
<!-- api: P:Inno.Audio.AudioCodecId.isValid af00c83ae7e3ee5ac7e25d7fbe2dc2705b228209d7a6c14fb510ae6d3ee18461 -->

```csharp
public bool Inno.Audio.AudioCodecId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L228).

## `mp3`

<a id="api-fceed0cdd26557e8"></a>
<!-- api: P:Inno.Audio.AudioCodecId.mp3 0b3c5b3257356b980c42c3971502ab187967a688655368a49022d3f4cf1aa723 -->

```csharp
public static Inno.Audio.AudioCodecId Inno.Audio.AudioCodecId.mp3 { get; }
```

Gets the standard MPEG Layer III codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L218).

## `value`

<a id="api-2ddaf59606fcb070"></a>
<!-- api: P:Inno.Audio.AudioCodecId.value b00304ed9c8c04fa2c3b410a28e65932f344967ae3bd535cc7ef8f7f6a89c1ba -->

```csharp
public string Inno.Audio.AudioCodecId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L223).

## `wav`

<a id="api-bcc4e39fa39b822e"></a>
<!-- api: P:Inno.Audio.AudioCodecId.wav f4994b26ecac0871e4a3423d7f1773b3dbf6de7604dde8663e13f52af6dd52f9 -->

```csharp
public static Inno.Audio.AudioCodecId Inno.Audio.AudioCodecId.wav { get; }
```

Gets the standard Waveform Audio codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L208).
