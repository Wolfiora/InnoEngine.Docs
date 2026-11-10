---
title: "AudioProcessorId"
description: "Reference for AudioProcessorId in Inno.Audio."
uid: api.inno.audio.dd09820649e2d75d
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioProcessorId`

This reference describes `AudioProcessorId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioProcessorId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a1e4b069bbc8124a) | Method |
| [`Equals`](#api-1956fefa9214f082) | Method |
| [`Equals`](#api-d0fdf479ad938c9c) | Method |
| [`GetHashCode`](#api-c3ab2d92241a00a0) | Method |
| [`op_Equality`](#api-be3015b3fdfdafc2) | Method |
| [`op_Inequality`](#api-2e2b1caaab86a6cc) | Method |
| [`ToString`](#api-63f4ba4afa4b7c09) | Method |
| [`bandPass`](#api-57c9144d658e2d0b) | Property |
| [`delay`](#api-4b01e874933c01d7) | Property |
| [`highPass`](#api-f8e38a8dbc222d3b) | Property |
| [`highShelf`](#api-42f7e9a5e4a048d8) | Property |
| [`isValid`](#api-e535593f1bbfac96) | Property |
| [`lowPass`](#api-81467be1fb0c46b3) | Property |
| [`lowShelf`](#api-f361099b7eb23006) | Property |
| [`notch`](#api-79c46a20881b435f) | Property |
| [`peak`](#api-75f3cac926e0a968) | Property |
| [`value`](#api-52309914c84b3189) | Property |

## Type declaration

<a id="api-dd09820649e2d75d"></a>
<!-- api: T:Inno.Audio.AudioProcessorId 267b998113b659ed65ff2228067d844b348f5e3f23239842797b979d06addf6d -->

```csharp
public readonly record struct Inno.Audio.AudioProcessorId : System.IEquatable<Inno.Audio.AudioProcessorId>
```

Identifies an audio processor implementation without imposing a closed effect catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `#ctor`

<a id="api-a1e4b069bbc8124a"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.#ctor(System.String) e6db3ab062456c52f3ace56b2593d038123d9668a6599323ef6d9d960a122f97 -->

```csharp
public Inno.Audio.AudioProcessorId.AudioProcessorId(string value)
```

Creates an open processor identifier.

**Parameter `value`:** Globally stable processor protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L57).

## `Equals`

<a id="api-1956fefa9214f082"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.Equals(Inno.Audio.AudioProcessorId) a7d8d61fd00e28b46564d5a705b0c655677162350e148025306e86b60ef9c254 -->

```csharp
public bool Inno.Audio.AudioProcessorId.Equals(Inno.Audio.AudioProcessorId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `Equals`

<a id="api-d0fdf479ad938c9c"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.Equals(System.Object) c4fd8b9ca243a7a6059abbd049a1c0693539de91e9fa24a49812d0a4ce5393f6 -->

```csharp
public override bool Inno.Audio.AudioProcessorId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `GetHashCode`

<a id="api-c3ab2d92241a00a0"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.GetHashCode f0ce343f2e29bb9440008192ea33e49d25365899cc229c3bf119a8f57ae6e329 -->

```csharp
public override int Inno.Audio.AudioProcessorId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `op_Equality`

<a id="api-be3015b3fdfdafc2"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.op_Equality(Inno.Audio.AudioProcessorId,Inno.Audio.AudioProcessorId) c2e6616887326221ea3bea9517ad2549f79b224bd54bc199e981f67a6f827f43 -->

```csharp
public static bool Inno.Audio.AudioProcessorId.operator ==(Inno.Audio.AudioProcessorId left, Inno.Audio.AudioProcessorId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `op_Inequality`

<a id="api-2e2b1caaab86a6cc"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.op_Inequality(Inno.Audio.AudioProcessorId,Inno.Audio.AudioProcessorId) 16914b2f48c7aebdc33b8abc9264d3a8d10188c4cae80cf9f0cf1e73ee4bd4af -->

```csharp
public static bool Inno.Audio.AudioProcessorId.operator !=(Inno.Audio.AudioProcessorId left, Inno.Audio.AudioProcessorId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `ToString`

<a id="api-63f4ba4afa4b7c09"></a>
<!-- api: M:Inno.Audio.AudioProcessorId.ToString ac221510d57642143c74b2179c829f25c3a8c15a46bff6013e5c5d06c9f5ba4a -->

```csharp
public override string Inno.Audio.AudioProcessorId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L119).

## `bandPass`

<a id="api-57c9144d658e2d0b"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.bandPass ea9ddf184c5c5581ca3b4984424fae3f4415d636bce4dd7d5490ac98cb79585d -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.bandPass { get; }
```

Gets the standard band-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L76).

## `delay`

<a id="api-4b01e874933c01d7"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.delay 9aaad6c727a74e18bcadc6df96c14abdc1806e32a0ae4b2ac2ded076280663b0 -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.delay { get; }
```

Gets the standard delay processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L101).

## `highPass`

<a id="api-f8e38a8dbc222d3b"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.highPass a8ddfead58033393fa42c06f83cf2a53491ccad3fef651d38ab09ef46c1f93b4 -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.highPass { get; }
```

Gets the standard high-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L71).

## `highShelf`

<a id="api-42f7e9a5e4a048d8"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.highShelf c18b9eac07f4cd42ee9fbe837928242bd6534f860a21def19c73d55c28bbd2c8 -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.highShelf { get; }
```

Gets the standard high-shelf equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L96).

## `isValid`

<a id="api-e535593f1bbfac96"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.isValid 8f0c3a4c7058ef079382620444c25099f6092a15c086260c78ef059858aed488 -->

```csharp
public bool Inno.Audio.AudioProcessorId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L111).

## `lowPass`

<a id="api-81467be1fb0c46b3"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.lowPass 61e19f94826667d33f39d29ce49dfb67dd3ee1a6fa48c33e669d7ffc1d986fe0 -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.lowPass { get; }
```

Gets the standard low-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L66).

## `lowShelf`

<a id="api-f361099b7eb23006"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.lowShelf 91cbb5b96ee96d11de4b5b70d9bc2ba7b0158ce45a890d4a55b79824036e6662 -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.lowShelf { get; }
```

Gets the standard low-shelf equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L91).

## `notch`

<a id="api-79c46a20881b435f"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.notch 6885ce7c19fa1f355f494edcfd35c3ebf12e3b667a78c62f8807be152d6803bb -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.notch { get; }
```

Gets the standard notch filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L81).

## `peak`

<a id="api-75f3cac926e0a968"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.peak 7c6d6c826799a59562374025fe5083716180fdbe3d9e24783a22f11c564a67dd -->

```csharp
public static Inno.Audio.AudioProcessorId Inno.Audio.AudioProcessorId.peak { get; }
```

Gets the standard peak equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L86).

## `value`

<a id="api-52309914c84b3189"></a>
<!-- api: P:Inno.Audio.AudioProcessorId.value 7c5ebdb3b11624825d8ac36b9d2b188f2978b38b2ea49c6cba4ce7a0d765d0e9 -->

```csharp
public string Inno.Audio.AudioProcessorId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L106).
