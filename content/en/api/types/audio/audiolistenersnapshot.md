---
title: "AudioListenerSnapshot"
description: "Reference for AudioListenerSnapshot in Inno.Audio."
uid: api.inno.audio.c43c3cbcdabcce89
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioListenerSnapshot`

This reference describes `AudioListenerSnapshot` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioListenerSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b868136c753b37c) | Method |
| [`Equals`](#api-3410f54bbaf715a1) | Method |
| [`Equals`](#api-509f2a959082bc4e) | Method |
| [`GetHashCode`](#api-54fba429d53c1401) | Method |
| [`op_Equality`](#api-9aec063f3f5de4bc) | Method |
| [`op_Inequality`](#api-f453bfb5102661aa) | Method |
| [`ToString`](#api-26c159e0545bba2c) | Method |
| [`active`](#api-6fcaff1e267e0683) | Property |
| [`id`](#api-ab3774704a986e06) | Property |
| [`priority`](#api-04df0824fc1b3c1b) | Property |
| [`state`](#api-dcb580f7ef5c3655) | Property |

## Type declaration

<a id="api-c43c3cbcdabcce89"></a>
<!-- api: T:Inno.Audio.AudioListenerSnapshot 04fbf71d0c38f9b5d164e163fd80c88139e57b4bc15cef611a1424ebd28edfa8 -->

```csharp
public readonly record struct Inno.Audio.AudioListenerSnapshot : System.IEquatable<Inno.Audio.AudioListenerSnapshot>
```

Describes one immutable listener candidate produced by a content provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `#ctor`

<a id="api-2b868136c753b37c"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.#ctor(System.Guid,System.Int32,Inno.Audio.AudioListenerState,System.Boolean) e40389e05e72da7915f6be030700b869cf02f98e443f0962502bb4fb7342c45b -->

```csharp
public Inno.Audio.AudioListenerSnapshot.AudioListenerSnapshot(System.Guid id, int priority, Inno.Audio.AudioListenerState state, bool active)
```

Creates an immutable listener snapshot.

**Parameter `id`:** Stable listener identity across updates.

**Parameter `priority`:** Selection priority; larger values win.

**Parameter `state`:** Current listener transform.

**Parameter `active`:** Whether the listener is eligible for selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L90).

## `Equals`

<a id="api-3410f54bbaf715a1"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.Equals(Inno.Audio.AudioListenerSnapshot) 586bf8e9728a646ae32f106eb99c828e7630e86263ba09aa568adf1c4b6393af -->

```csharp
public bool Inno.Audio.AudioListenerSnapshot.Equals(Inno.Audio.AudioListenerSnapshot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `Equals`

<a id="api-509f2a959082bc4e"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.Equals(System.Object) fd8cc8b82d25d8f10b8cbe55b00ba37eef3678718bc3cfa3e406ffc9c64eddf1 -->

```csharp
public override bool Inno.Audio.AudioListenerSnapshot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `GetHashCode`

<a id="api-54fba429d53c1401"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.GetHashCode 282dd868c5b617164e40f7e19afc6e94ab987127815e97e53b3be7feeb39761f -->

```csharp
public override int Inno.Audio.AudioListenerSnapshot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `op_Equality`

<a id="api-9aec063f3f5de4bc"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.op_Equality(Inno.Audio.AudioListenerSnapshot,Inno.Audio.AudioListenerSnapshot) e8856a9e54cc3983e4349409b214069fec647934511aea9812fc9d68972e8c69 -->

```csharp
public static bool Inno.Audio.AudioListenerSnapshot.operator ==(Inno.Audio.AudioListenerSnapshot left, Inno.Audio.AudioListenerSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `op_Inequality`

<a id="api-f453bfb5102661aa"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.op_Inequality(Inno.Audio.AudioListenerSnapshot,Inno.Audio.AudioListenerSnapshot) c8adb9b3b03f2dc799ce274d82ceb19d0c9285dd51863eb4401420469e6fc77c -->

```csharp
public static bool Inno.Audio.AudioListenerSnapshot.operator !=(Inno.Audio.AudioListenerSnapshot left, Inno.Audio.AudioListenerSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `ToString`

<a id="api-26c159e0545bba2c"></a>
<!-- api: M:Inno.Audio.AudioListenerSnapshot.ToString 4c193e55fb8ae47b4f1c2a49afe76a77dfaf2a112dd9f6eaab87b549cf2c7c42 -->

```csharp
public override string Inno.Audio.AudioListenerSnapshot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `active`

<a id="api-6fcaff1e267e0683"></a>
<!-- api: P:Inno.Audio.AudioListenerSnapshot.active 79e39b51f4b8c99686fb2e4f42edffcd3521871a22486d67291d0bcad34451a3 -->

```csharp
public bool Inno.Audio.AudioListenerSnapshot.active { get; }
```

Gets whether the listener is eligible for selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L122).

## `id`

<a id="api-ab3774704a986e06"></a>
<!-- api: P:Inno.Audio.AudioListenerSnapshot.id 3f3490d0a2a6cde371aafed8a7b3e86a895cd92591d18ba8b11096d08f87a49f -->

```csharp
public System.Guid Inno.Audio.AudioListenerSnapshot.id { get; }
```

Gets the stable listener identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L107).

## `priority`

<a id="api-04df0824fc1b3c1b"></a>
<!-- api: P:Inno.Audio.AudioListenerSnapshot.priority 24e75a5dc881ec1a486d505dcbc3e4211a5afd4c036c29fd68d59366a2c86e2c -->

```csharp
public int Inno.Audio.AudioListenerSnapshot.priority { get; }
```

Gets the selection priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L112).

## `state`

<a id="api-dcb580f7ef5c3655"></a>
<!-- api: P:Inno.Audio.AudioListenerSnapshot.state a931dcd075d6322dc01948c2130f4412615cf642a21362d10f71fc7bd6c0ef2e -->

```csharp
public Inno.Audio.AudioListenerState Inno.Audio.AudioListenerSnapshot.state { get; }
```

Gets the current listener transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L117).
