---
title: "AudioListenerHandle"
description: "Reference for AudioListenerHandle in Inno.Audio."
uid: api.inno.audio.bd08ac5ffce05542
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioListenerHandle`

This reference describes `AudioListenerHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioListenerHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-26b0914356ad007b) | Method |
| [`Equals`](#api-2602b9652badb41d) | Method |
| [`GetHashCode`](#api-92a7ee34df7b8754) | Method |
| [`op_Equality`](#api-2278eb34ed539aa2) | Method |
| [`op_Inequality`](#api-003bfc2676df3b2f) | Method |
| [`ToString`](#api-f43b4329a408dd32) | Method |
| [`deviceGeneration`](#api-18066be58ae4018b) | Property |
| [`isValid`](#api-a895651dfb910acc) | Property |

## Type declaration

<a id="api-bd08ac5ffce05542"></a>
<!-- api: T:Inno.Audio.AudioListenerHandle d1f9b6bdbe62e15ab3fe6fd04506cf5007622e6d4359ad738bbfa5e90cb4225f -->

```csharp
public readonly record struct Inno.Audio.AudioListenerHandle : System.IEquatable<Inno.Audio.AudioListenerHandle>
```

Identifies one spatial listener within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `Equals`

<a id="api-26b0914356ad007b"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.Equals(Inno.Audio.AudioListenerHandle) fd938bee81da91fd97c67850ca370d73aa09146474b8f6ddb095ca59240ba303 -->

```csharp
public bool Inno.Audio.AudioListenerHandle.Equals(Inno.Audio.AudioListenerHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `Equals`

<a id="api-2602b9652badb41d"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.Equals(System.Object) 5600a950dcf4b760f190492f97f61d17f1d290e432dc0e4fa70dd0cb993f8622 -->

```csharp
public override bool Inno.Audio.AudioListenerHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `GetHashCode`

<a id="api-92a7ee34df7b8754"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.GetHashCode 2ebc91d42f3a10368afe43563e58994661c9d4d90c1dec8b92cfb57740f04ca8 -->

```csharp
public override int Inno.Audio.AudioListenerHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `op_Equality`

<a id="api-2278eb34ed539aa2"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.op_Equality(Inno.Audio.AudioListenerHandle,Inno.Audio.AudioListenerHandle) 14246ba1ed926f60934c4240394f8618ae3adea0fc1ad3def5e8417f30092539 -->

```csharp
public static bool Inno.Audio.AudioListenerHandle.operator ==(Inno.Audio.AudioListenerHandle left, Inno.Audio.AudioListenerHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `op_Inequality`

<a id="api-003bfc2676df3b2f"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.op_Inequality(Inno.Audio.AudioListenerHandle,Inno.Audio.AudioListenerHandle) d57cd5d217fac070e81574e064be28efceacd79c356071f5e32a315c8b77870a -->

```csharp
public static bool Inno.Audio.AudioListenerHandle.operator !=(Inno.Audio.AudioListenerHandle left, Inno.Audio.AudioListenerHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `ToString`

<a id="api-f43b4329a408dd32"></a>
<!-- api: M:Inno.Audio.AudioListenerHandle.ToString 5744fd9488bc47394cc097f13543f26aeaf2619d18cef17356c929d9ca64c1ad -->

```csharp
public override string Inno.Audio.AudioListenerHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `deviceGeneration`

<a id="api-18066be58ae4018b"></a>
<!-- api: P:Inno.Audio.AudioListenerHandle.deviceGeneration 612b986cab75e691b65ff6b756ea84fcb447b9476f0b5924e09c557edae6fc78 -->

```csharp
public uint Inno.Audio.AudioListenerHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L99).

## `isValid`

<a id="api-a895651dfb910acc"></a>
<!-- api: P:Inno.Audio.AudioListenerHandle.isValid 98c06f62c8f1cb2d9ecdbb71a78d899871bbed2b06b953e1481f6af0e6174825 -->

```csharp
public bool Inno.Audio.AudioListenerHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L104).
