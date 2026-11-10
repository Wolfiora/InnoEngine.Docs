---
title: "AudioClipHandle"
description: "Reference for AudioClipHandle in Inno.Audio."
uid: api.inno.audio.61b7c4f552127ce4
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipHandle`

This reference describes `AudioClipHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioClipHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-9aa0ae8dc3045a24) | Method |
| [`Equals`](#api-93a434058ab9b2be) | Method |
| [`GetHashCode`](#api-5d688e497ac507b6) | Method |
| [`op_Equality`](#api-8fbad5090f7cbfe1) | Method |
| [`op_Inequality`](#api-352894f52b380a88) | Method |
| [`ToString`](#api-14fdf1eff032360c) | Method |
| [`deviceGeneration`](#api-6f6fb7cce1e9e7a5) | Property |
| [`isValid`](#api-db15ad90c58fd613) | Property |

## Type declaration

<a id="api-61b7c4f552127ce4"></a>
<!-- api: T:Inno.Audio.AudioClipHandle 1ae7cd1bcac5f5200de214d595acc221f49d5b9961a6823ec98ad10fca74955c -->

```csharp
public readonly record struct Inno.Audio.AudioClipHandle : System.IEquatable<Inno.Audio.AudioClipHandle>
```

Identifies one backend clip allocation within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `Equals`

<a id="api-9aa0ae8dc3045a24"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.Equals(Inno.Audio.AudioClipHandle) b23cae5c78a5b1dc2a0b89793ff38675e3700b13aa4209c2773a874e4f07d5a9 -->

```csharp
public bool Inno.Audio.AudioClipHandle.Equals(Inno.Audio.AudioClipHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `Equals`

<a id="api-93a434058ab9b2be"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.Equals(System.Object) e27a7668c62d6fa78a66066de8f18034164131194765bd28a0e795c21187adae -->

```csharp
public override bool Inno.Audio.AudioClipHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `GetHashCode`

<a id="api-5d688e497ac507b6"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.GetHashCode 78b536b0e64902551a462a227e66de7a2210318d6a60aaceb32dc61a75b5dee2 -->

```csharp
public override int Inno.Audio.AudioClipHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `op_Equality`

<a id="api-8fbad5090f7cbfe1"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.op_Equality(Inno.Audio.AudioClipHandle,Inno.Audio.AudioClipHandle) cfb92dc373711c0992331f8644131fb52885e8086a5fd660a14b244ff63e9b17 -->

```csharp
public static bool Inno.Audio.AudioClipHandle.operator ==(Inno.Audio.AudioClipHandle left, Inno.Audio.AudioClipHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `op_Inequality`

<a id="api-352894f52b380a88"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.op_Inequality(Inno.Audio.AudioClipHandle,Inno.Audio.AudioClipHandle) 53029d576b3b3078154578e3665eb124b7369ae29c6cfceab43e04bde94f6161 -->

```csharp
public static bool Inno.Audio.AudioClipHandle.operator !=(Inno.Audio.AudioClipHandle left, Inno.Audio.AudioClipHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `ToString`

<a id="api-14fdf1eff032360c"></a>
<!-- api: M:Inno.Audio.AudioClipHandle.ToString 64b07121ab8275000227e400cfee099724caa891929874f2cee5a7c182a046af -->

```csharp
public override string Inno.Audio.AudioClipHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `deviceGeneration`

<a id="api-6f6fb7cce1e9e7a5"></a>
<!-- api: P:Inno.Audio.AudioClipHandle.deviceGeneration b64dac163b4a60c129f1701625ed154f726af6694709399f9a63394510351490 -->

```csharp
public uint Inno.Audio.AudioClipHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L21).

## `isValid`

<a id="api-db15ad90c58fd613"></a>
<!-- api: P:Inno.Audio.AudioClipHandle.isValid a3d8e87ea140c2fd99d98b94a690a8816a03f084be58fc20e9c78519eb393915 -->

```csharp
public bool Inno.Audio.AudioClipHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioHandles.cs#L26).
