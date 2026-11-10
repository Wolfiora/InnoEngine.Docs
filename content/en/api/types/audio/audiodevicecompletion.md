---
title: "AudioDeviceCompletion"
description: "Reference for AudioDeviceCompletion in Inno.Audio."
uid: api.inno.audio.56f47e5f61cc32d1
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDeviceCompletion`

This reference describes `AudioDeviceCompletion` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioDeviceCompletion>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a2818301dfcb6a21) | Method |
| [`Equals`](#api-99cfb321e4ee3448) | Method |
| [`Equals`](#api-a8d07afc9885fe9c) | Method |
| [`GetHashCode`](#api-77823feb6bf228fd) | Method |
| [`op_Equality`](#api-9defcf1ea0427c83) | Method |
| [`op_Inequality`](#api-a0dd63a7383d0d7b) | Method |
| [`ToString`](#api-721c937832019f03) | Method |
| [`reason`](#api-456cc284614d5f24) | Property |
| [`voice`](#api-c3aaaba4f93f7a17) | Property |

## Type declaration

<a id="api-56f47e5f61cc32d1"></a>
<!-- api: T:Inno.Audio.AudioDeviceCompletion fbe4b7cee7e6461a0b6029d566d25e6e9de11a1a0dc9e133fa9da10888a5222b -->

```csharp
public readonly record struct Inno.Audio.AudioDeviceCompletion : System.IEquatable<Inno.Audio.AudioDeviceCompletion>
```

Reports one backend-detected terminal voice transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `#ctor`

<a id="api-a2818301dfcb6a21"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.#ctor(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioCompletionReason) 8cf94891448b06e3e113b94ab030ed2fa3d1ea18fe5feb75a42eec452b73ed28 -->

```csharp
public Inno.Audio.AudioDeviceCompletion.AudioDeviceCompletion(Inno.Audio.AudioDeviceVoiceHandle voice, Inno.Audio.AudioCompletionReason reason)
```

Creates a backend voice completion record.

**Parameter `voice`:** Voice that reached a terminal state.

**Parameter `reason`:** Reason playback ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L19).

## `Equals`

<a id="api-99cfb321e4ee3448"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.Equals(Inno.Audio.AudioDeviceCompletion) 45cf45a09143163db9fa2701f2532702dbfcb1dc6d5dffc226868bcbdb940862 -->

```csharp
public bool Inno.Audio.AudioDeviceCompletion.Equals(Inno.Audio.AudioDeviceCompletion other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `Equals`

<a id="api-a8d07afc9885fe9c"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.Equals(System.Object) 735041d9c293f7732ec8e827d516a0c14dbe916d2efccb8e5d49fcd3cea8ab85 -->

```csharp
public override bool Inno.Audio.AudioDeviceCompletion.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `GetHashCode`

<a id="api-77823feb6bf228fd"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.GetHashCode 4279811e1927baba62d30ad92c8fbedbf83ffa598e5117cd6d036983aa9a86c2 -->

```csharp
public override int Inno.Audio.AudioDeviceCompletion.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `op_Equality`

<a id="api-9defcf1ea0427c83"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.op_Equality(Inno.Audio.AudioDeviceCompletion,Inno.Audio.AudioDeviceCompletion) ea97fef1e4a78420a3e6de515e0706d8423871c2450c8db4668b169fc90827f7 -->

```csharp
public static bool Inno.Audio.AudioDeviceCompletion.operator ==(Inno.Audio.AudioDeviceCompletion left, Inno.Audio.AudioDeviceCompletion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `op_Inequality`

<a id="api-a0dd63a7383d0d7b"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.op_Inequality(Inno.Audio.AudioDeviceCompletion,Inno.Audio.AudioDeviceCompletion) 8f892b2fabb18db6d7bec4056822911b8bffa71f369bbce99f83919ffb0cf8c4 -->

```csharp
public static bool Inno.Audio.AudioDeviceCompletion.operator !=(Inno.Audio.AudioDeviceCompletion left, Inno.Audio.AudioDeviceCompletion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `ToString`

<a id="api-721c937832019f03"></a>
<!-- api: M:Inno.Audio.AudioDeviceCompletion.ToString 4ef3a2597f0eebecee4a986e6688ec55f11fe274ecc2e592e295e75598150d32 -->

```csharp
public override string Inno.Audio.AudioDeviceCompletion.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L8).

## `reason`

<a id="api-456cc284614d5f24"></a>
<!-- api: P:Inno.Audio.AudioDeviceCompletion.reason 6574091a17632dfb9ec1488ebc3fc038e3e2dbe8a0dcc3c4c5325c1b6f573bc1 -->

```csharp
public Inno.Audio.AudioCompletionReason Inno.Audio.AudioDeviceCompletion.reason { get; }
```

Gets the terminal playback reason.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L37).

## `voice`

<a id="api-c3aaaba4f93f7a17"></a>
<!-- api: P:Inno.Audio.AudioDeviceCompletion.voice 8bef00f90309f7294e66ff51bcfeeb39e4924719bbc412608b779a321faa7678 -->

```csharp
public Inno.Audio.AudioDeviceVoiceHandle Inno.Audio.AudioDeviceCompletion.voice { get; }
```

Gets the completed voice handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioDevice.cs#L32).
