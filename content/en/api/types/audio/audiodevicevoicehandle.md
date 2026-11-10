---
title: "AudioDeviceVoiceHandle"
description: "Reference for AudioDeviceVoiceHandle in Inno.Audio."
uid: api.inno.audio.eda1cdfae86c4f34
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioDeviceVoiceHandle`

This reference describes `AudioDeviceVoiceHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioDeviceVoiceHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-875cc88285cdc26f) | Method |
| [`Equals`](#api-fdc89bc4d2b0f060) | Method |
| [`GetHashCode`](#api-f4df1214f5f2de8a) | Method |
| [`op_Equality`](#api-565767e3ea3cd6aa) | Method |
| [`op_Inequality`](#api-68898855f411f7ba) | Method |
| [`ToString`](#api-646e5e2f6e85cd2d) | Method |
| [`deviceGeneration`](#api-d9e14bdb1d1fddd4) | Property |
| [`isValid`](#api-120bdb5f5668e63c) | Property |

## Type declaration

<a id="api-eda1cdfae86c4f34"></a>
<!-- api: T:Inno.Audio.AudioDeviceVoiceHandle 9542ac5c1264ee343ecba5e77e441a24e327076659a5db30373a99c10419ddec -->

```csharp
public readonly record struct Inno.Audio.AudioDeviceVoiceHandle : System.IEquatable<Inno.Audio.AudioDeviceVoiceHandle>
```

Identifies a backend voice allocation, distinct from a service's preparing playback handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `Equals`

<a id="api-875cc88285cdc26f"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.Equals(Inno.Audio.AudioDeviceVoiceHandle) f1417fe94bca8556952920a547995fc51258395520bfa8b3f1b2abc7cbc096a4 -->

```csharp
public bool Inno.Audio.AudioDeviceVoiceHandle.Equals(Inno.Audio.AudioDeviceVoiceHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `Equals`

<a id="api-fdc89bc4d2b0f060"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.Equals(System.Object) 1104e8bb1b29c353f3a70043e3e606a83d4fc8fed40a0e567fb2e37c9f8d7291 -->

```csharp
public override bool Inno.Audio.AudioDeviceVoiceHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `GetHashCode`

<a id="api-f4df1214f5f2de8a"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.GetHashCode 05b0babac6397cd7220285548ccad8d9e0c06a9f97973ad7c28fd5d4a981aac9 -->

```csharp
public override int Inno.Audio.AudioDeviceVoiceHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `op_Equality`

<a id="api-565767e3ea3cd6aa"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.op_Equality(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioDeviceVoiceHandle) bce251483caa68722e03ca1e27b33bcf8c13a9a02b86224acb59542aa7bf21a4 -->

```csharp
public static bool Inno.Audio.AudioDeviceVoiceHandle.operator ==(Inno.Audio.AudioDeviceVoiceHandle left, Inno.Audio.AudioDeviceVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `op_Inequality`

<a id="api-68898855f411f7ba"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.op_Inequality(Inno.Audio.AudioDeviceVoiceHandle,Inno.Audio.AudioDeviceVoiceHandle) 717bafe5a4e4725b37f85e967aacf50993a7e97521b77fef3dde21806a8e7226 -->

```csharp
public static bool Inno.Audio.AudioDeviceVoiceHandle.operator !=(Inno.Audio.AudioDeviceVoiceHandle left, Inno.Audio.AudioDeviceVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `ToString`

<a id="api-646e5e2f6e85cd2d"></a>
<!-- api: M:Inno.Audio.AudioDeviceVoiceHandle.ToString e55092f3d8cb7daaad291485d5a5e10bcf31d0d9070891a7298e2de1e4fff477 -->

```csharp
public override string Inno.Audio.AudioDeviceVoiceHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L6).

## `deviceGeneration`

<a id="api-d9e14bdb1d1fddd4"></a>
<!-- api: P:Inno.Audio.AudioDeviceVoiceHandle.deviceGeneration bb99abbec886780b4d82422ec80ce11a2bd90b05c5755de2eceb50005272f2f0 -->

```csharp
public uint Inno.Audio.AudioDeviceVoiceHandle.deviceGeneration { get; }
```

Gets the backend device generation that owns this voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L20).

## `isValid`

<a id="api-120bdb5f5668e63c"></a>
<!-- api: P:Inno.Audio.AudioDeviceVoiceHandle.isValid 5a6666b318d76223139872565de8dea73c3198fd354e3d1893061c1d3ae88829 -->

```csharp
public bool Inno.Audio.AudioDeviceVoiceHandle.isValid { get; }
```

Gets whether this value identifies a backend allocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioDeviceVoiceHandle.cs#L24).
