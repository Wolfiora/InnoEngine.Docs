---
title: "AudioVoiceHandle"
description: "Reference for AudioVoiceHandle in Inno.Audio."
uid: api.inno.audio.e40d48d2f53e3fd5
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioVoiceHandle`

This reference describes `AudioVoiceHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioVoiceHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-0e7d86f7b00f80bd) | Method |
| [`Equals`](#api-f3e248dcfc0bb2ef) | Method |
| [`GetHashCode`](#api-81e2905ef468cd43) | Method |
| [`op_Equality`](#api-ed26e6c9cdfa2020) | Method |
| [`op_Inequality`](#api-c506ad7162eebc4f) | Method |
| [`ToString`](#api-c3f12a28dbdc9685) | Method |
| [`isValid`](#api-c7c40422228cd32d) | Property |
| [`ownerGeneration`](#api-2e9045e6e3f309da) | Property |

## Type declaration

<a id="api-e40d48d2f53e3fd5"></a>
<!-- api: T:Inno.Audio.AudioVoiceHandle b1fcb9774f3f822b4f9eb0fee9c22f00a6710d93da5e606ce2cf87b909aec71c -->

```csharp
public readonly record struct Inno.Audio.AudioVoiceHandle : System.IEquatable<Inno.Audio.AudioVoiceHandle>
```

Identifies one playback voice within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `Equals`

<a id="api-0e7d86f7b00f80bd"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.Equals(Inno.Audio.AudioVoiceHandle) e3f2dc29ffc23ad976d5bba73221a0fdd1f4e889b184bd6d1f93235852e65145 -->

```csharp
public bool Inno.Audio.AudioVoiceHandle.Equals(Inno.Audio.AudioVoiceHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `Equals`

<a id="api-f3e248dcfc0bb2ef"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.Equals(System.Object) 1fcb03dbd46fca407d645569b7b6feebecb3d040662b0512c20bbeabfc482bac -->

```csharp
public override bool Inno.Audio.AudioVoiceHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `GetHashCode`

<a id="api-81e2905ef468cd43"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.GetHashCode 3b26eda75a7fce73f37079d4c6c2338e78d94991e6735d243a38cd87446f73ef -->

```csharp
public override int Inno.Audio.AudioVoiceHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `op_Equality`

<a id="api-ed26e6c9cdfa2020"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.op_Equality(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceHandle) f6a091b7da26bf58ebfb263e841ba1d32ccaa7bc60444025cf10adaac8498105 -->

```csharp
public static bool Inno.Audio.AudioVoiceHandle.operator ==(Inno.Audio.AudioVoiceHandle left, Inno.Audio.AudioVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `op_Inequality`

<a id="api-c506ad7162eebc4f"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.op_Inequality(Inno.Audio.AudioVoiceHandle,Inno.Audio.AudioVoiceHandle) aa865304ddc2f16c5f77b45bfd3c0e27b33666287f9dc46a9715ccc8c3c3b234 -->

```csharp
public static bool Inno.Audio.AudioVoiceHandle.operator !=(Inno.Audio.AudioVoiceHandle left, Inno.Audio.AudioVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `ToString`

<a id="api-c3f12a28dbdc9685"></a>
<!-- api: M:Inno.Audio.AudioVoiceHandle.ToString 099130e8882158691339109584c205a2524d64ce29e415c08c3565e5de656774 -->

```csharp
public override string Inno.Audio.AudioVoiceHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `isValid`

<a id="api-c7c40422228cd32d"></a>
<!-- api: P:Inno.Audio.AudioVoiceHandle.isValid eda2dde4fc60a6e5216e961240f87eb581eb0f7916b7f3312aab270f40faf618 -->

```csharp
public bool Inno.Audio.AudioVoiceHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L52).

## `ownerGeneration`

<a id="api-2e9045e6e3f309da"></a>
<!-- api: P:Inno.Audio.AudioVoiceHandle.ownerGeneration 91f2514d3d6a18f8a2265ae5ac9fa0c4f1c3adbb9f6822ed692e6be90077ed04 -->

```csharp
public uint Inno.Audio.AudioVoiceHandle.ownerGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L47).
