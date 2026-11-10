---
title: "AudioBusHandle"
description: "Reference for AudioBusHandle in Inno.Audio."
uid: api.inno.audio.54cad4dcf6d2c4d2
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioBusHandle`

This reference describes `AudioBusHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioBusHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-cf08bda70909f4e3) | Method |
| [`Equals`](#api-3f425a717b8e41e1) | Method |
| [`GetHashCode`](#api-5e62b56516b4e568) | Method |
| [`op_Equality`](#api-1adb916fd22d3289) | Method |
| [`op_Inequality`](#api-ca1663ddea613518) | Method |
| [`ToString`](#api-10153868147ff744) | Method |
| [`deviceGeneration`](#api-f53ed6623f954a4b) | Property |
| [`isValid`](#api-887b7652e1e17249) | Property |

## Type declaration

<a id="api-54cad4dcf6d2c4d2"></a>
<!-- api: T:Inno.Audio.AudioBusHandle 9cd1e82ebe6b3f482a24a6a1521ac258f619188521320a2da4c5524a43cefb2c -->

```csharp
public readonly record struct Inno.Audio.AudioBusHandle : System.IEquatable<Inno.Audio.AudioBusHandle>
```

Identifies one backend mixer bus within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `Equals`

<a id="api-cf08bda70909f4e3"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.Equals(Inno.Audio.AudioBusHandle) c367a695519ebc95cf4245fbefe1830192ae348e3599c4d1d22c9774ec8fd962 -->

```csharp
public bool Inno.Audio.AudioBusHandle.Equals(Inno.Audio.AudioBusHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `Equals`

<a id="api-3f425a717b8e41e1"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.Equals(System.Object) 7cd8e973123b4faa7434443e4d128f68931a04fc951adc4df8202840dcd4d46b -->

```csharp
public override bool Inno.Audio.AudioBusHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `GetHashCode`

<a id="api-5e62b56516b4e568"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.GetHashCode 210090536822fb2b6d8579ac858c20ad0ff044d570562a8579dd2c95e82346ff -->

```csharp
public override int Inno.Audio.AudioBusHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `op_Equality`

<a id="api-1adb916fd22d3289"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.op_Equality(Inno.Audio.AudioBusHandle,Inno.Audio.AudioBusHandle) 75cf7bbef243b980befd77c9f438f2f4c9317012933cb2a4aa553e68e67fad46 -->

```csharp
public static bool Inno.Audio.AudioBusHandle.operator ==(Inno.Audio.AudioBusHandle left, Inno.Audio.AudioBusHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `op_Inequality`

<a id="api-ca1663ddea613518"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.op_Inequality(Inno.Audio.AudioBusHandle,Inno.Audio.AudioBusHandle) c5a99ce3548791b2dbbae311d6dbc2f17cb50255877be933451528009446c492 -->

```csharp
public static bool Inno.Audio.AudioBusHandle.operator !=(Inno.Audio.AudioBusHandle left, Inno.Audio.AudioBusHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `ToString`

<a id="api-10153868147ff744"></a>
<!-- api: M:Inno.Audio.AudioBusHandle.ToString 6994b16f92bd817a4ebe88bd936c62f158062bad73ff6d6eb11bf43c867c98e5 -->

```csharp
public override string Inno.Audio.AudioBusHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `deviceGeneration`

<a id="api-f53ed6623f954a4b"></a>
<!-- api: P:Inno.Audio.AudioBusHandle.deviceGeneration f19edef89a765d343e87f05d65672073f85b60e36ef7224772550b737540e5ec -->

```csharp
public uint Inno.Audio.AudioBusHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L73).

## `isValid`

<a id="api-887b7652e1e17249"></a>
<!-- api: P:Inno.Audio.AudioBusHandle.isValid beb3f376e7674c1860f6d71446d911b54a4e004637cc24665b951eaf9c2e3db6 -->

```csharp
public bool Inno.Audio.AudioBusHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L78).
