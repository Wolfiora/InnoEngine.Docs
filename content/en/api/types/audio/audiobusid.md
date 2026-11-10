---
title: "AudioBusId"
description: "Reference for AudioBusId in Inno.Audio."
uid: api.inno.audio.def161644a357183
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioBusId`

This reference describes `AudioBusId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioBusId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-53a1f5457fd51ed5) | Method |
| [`Equals`](#api-c6e9f21fe28fd816) | Method |
| [`Equals`](#api-88459ddc9e842617) | Method |
| [`GetHashCode`](#api-bc750493ce94c0e8) | Method |
| [`op_Equality`](#api-756257ffffa0bd68) | Method |
| [`op_Inequality`](#api-e5a1308b2643e5b7) | Method |
| [`ToString`](#api-210101edac30b7f9) | Method |
| [`isValid`](#api-6dea5bd9bccb0140) | Property |
| [`master`](#api-bc65ba8699778a6d) | Property |
| [`value`](#api-a075da3f6d918526) | Property |

## Type declaration

<a id="api-def161644a357183"></a>
<!-- api: T:Inno.Audio.AudioBusId c2fb41547326f510ed79d715397e1aa0ca02b2d8505887401b6d0afda04793f3 -->

```csharp
public readonly record struct Inno.Audio.AudioBusId : System.IEquatable<Inno.Audio.AudioBusId>
```

Identifies a mixer bus without imposing a closed bus catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `#ctor`

<a id="api-53a1f5457fd51ed5"></a>
<!-- api: M:Inno.Audio.AudioBusId.#ctor(System.String) 604b66af02f7314fd52f109212663d29165dc289dae40cc96098c8a3750ec0ce -->

```csharp
public Inno.Audio.AudioBusId.AudioBusId(string value)
```

Creates an open mixer bus identifier.

**Parameter `value`:** Globally stable bus protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L16).

## `Equals`

<a id="api-c6e9f21fe28fd816"></a>
<!-- api: M:Inno.Audio.AudioBusId.Equals(Inno.Audio.AudioBusId) 328f65ae11caa3b35ac8a0add47ef8c307db2aa08ded1384422fce7c42c23159 -->

```csharp
public bool Inno.Audio.AudioBusId.Equals(Inno.Audio.AudioBusId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `Equals`

<a id="api-88459ddc9e842617"></a>
<!-- api: M:Inno.Audio.AudioBusId.Equals(System.Object) 1ff98a81ea9f44d6c7220817aabcb8a78a3490feded8d583bf11dbcaa8c91091 -->

```csharp
public override bool Inno.Audio.AudioBusId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `GetHashCode`

<a id="api-bc750493ce94c0e8"></a>
<!-- api: M:Inno.Audio.AudioBusId.GetHashCode ef6cba69212975b367c3e61dd9a6f700fe6966dae65fa7af16f9509d9cb9926b -->

```csharp
public override int Inno.Audio.AudioBusId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `op_Equality`

<a id="api-756257ffffa0bd68"></a>
<!-- api: M:Inno.Audio.AudioBusId.op_Equality(Inno.Audio.AudioBusId,Inno.Audio.AudioBusId) 7f5717b0ed76e99d90ca55385d365d5432923f7c162f3e0afb56ac9b5422b8be -->

```csharp
public static bool Inno.Audio.AudioBusId.operator ==(Inno.Audio.AudioBusId left, Inno.Audio.AudioBusId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `op_Inequality`

<a id="api-e5a1308b2643e5b7"></a>
<!-- api: M:Inno.Audio.AudioBusId.op_Inequality(Inno.Audio.AudioBusId,Inno.Audio.AudioBusId) a578e58b9370a9c2d3889c620fa48e696b696cab486685fe40348ed17bb2dfdf -->

```csharp
public static bool Inno.Audio.AudioBusId.operator !=(Inno.Audio.AudioBusId left, Inno.Audio.AudioBusId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `ToString`

<a id="api-210101edac30b7f9"></a>
<!-- api: M:Inno.Audio.AudioBusId.ToString 7f585809f580f64393dfeb6c16b213dfacab2eb6f460ccd9960c69ba809c97f4 -->

```csharp
public override string Inno.Audio.AudioBusId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L43).

## `isValid`

<a id="api-6dea5bd9bccb0140"></a>
<!-- api: P:Inno.Audio.AudioBusId.isValid 82911fc72926e57b38b5ad34e99d516644bcc320db09b83cf415b9689329f8bc -->

```csharp
public bool Inno.Audio.AudioBusId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L35).

## `master`

<a id="api-bc65ba8699778a6d"></a>
<!-- api: P:Inno.Audio.AudioBusId.master 4c0eebcf656e7aa27602e61f68162a427d82c8b5ba458a2072c23cf8f43a6e52 -->

```csharp
public static Inno.Audio.AudioBusId Inno.Audio.AudioBusId.master { get; }
```

Gets the mandatory root bus identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L25).

## `value`

<a id="api-a075da3f6d918526"></a>
<!-- api: P:Inno.Audio.AudioBusId.value 01a10b9c899491670ca8bd0fce6fd1b23c1e4185e3e7669051286c4b8c842d36 -->

```csharp
public string Inno.Audio.AudioBusId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L30).
