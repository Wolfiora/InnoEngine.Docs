---
title: "AudioStatistics"
description: "Reference for AudioStatistics in Inno.Audio."
uid: api.inno.audio.dc47ff150a9db349
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioStatistics`

This reference describes `AudioStatistics` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5cb38fa0f77321e) | Method |
| [`Equals`](#api-e725edc1bb8edf8d) | Method |
| [`Equals`](#api-311d526b6d531b7e) | Method |
| [`GetHashCode`](#api-a9ef5a766d2a6524) | Method |
| [`op_Equality`](#api-29c57c82dacff90b) | Method |
| [`op_Inequality`](#api-d8904cbcfba5ecf8) | Method |
| [`ToString`](#api-d23bd0f07d039730) | Method |
| [`activeVoices`](#api-cf7bba4acb830dfd) | Property |
| [`decodedBytes`](#api-81243924528dc72e) | Property |
| [`loadedClips`](#api-b8403ac0e2c8fb37) | Property |
| [`stolenVoiceCount`](#api-b8bbe6cf1cda5896) | Property |

## Type declaration

<a id="api-dc47ff150a9db349"></a>
<!-- api: T:Inno.Audio.AudioStatistics 92c6dcdff4972a0ee3082d564c597830c69bc75a48018a65745d7afd627a4016 -->

```csharp
public readonly record struct Inno.Audio.AudioStatistics : System.IEquatable<Inno.Audio.AudioStatistics>
```

Reports an immutable snapshot of runtime and backend resource usage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `#ctor`

<a id="api-a5cb38fa0f77321e"></a>
<!-- api: M:Inno.Audio.AudioStatistics.#ctor(System.Int32,System.Int32,System.Int64,System.Int64) 728187be66c18dc772f251d8d924c0bf17187f92d0bfe179a4eaf9697926def0 -->

```csharp
public Inno.Audio.AudioStatistics.AudioStatistics(int activeVoices, int loadedClips, long decodedBytes, long stolenVoiceCount)
```

Creates an audio statistics snapshot.

**Parameter `activeVoices`:** Voices that currently consume runtime budget.

**Parameter `loadedClips`:** Clip allocations held by the backend.

**Parameter `decodedBytes`:** Approximate decoded clip bytes held in memory.

**Parameter `stolenVoiceCount`:** Voices reclaimed since runtime creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L236).

## `Equals`

<a id="api-e725edc1bb8edf8d"></a>
<!-- api: M:Inno.Audio.AudioStatistics.Equals(Inno.Audio.AudioStatistics) e0fa462f9501b5143edea9431f9f761251812f6ab1ef7de4f2f3abe14267721d -->

```csharp
public bool Inno.Audio.AudioStatistics.Equals(Inno.Audio.AudioStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `Equals`

<a id="api-311d526b6d531b7e"></a>
<!-- api: M:Inno.Audio.AudioStatistics.Equals(System.Object) b8c2942af324c144582d1dc4a618b2e2f69bfdc2cf7e01d71afa09f9e3de77c6 -->

```csharp
public override bool Inno.Audio.AudioStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `GetHashCode`

<a id="api-a9ef5a766d2a6524"></a>
<!-- api: M:Inno.Audio.AudioStatistics.GetHashCode 58589dd8c4ae7b049e63c672a953c3244a06a6ba00bc59f74c5801d925a6353e -->

```csharp
public override int Inno.Audio.AudioStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `op_Equality`

<a id="api-29c57c82dacff90b"></a>
<!-- api: M:Inno.Audio.AudioStatistics.op_Equality(Inno.Audio.AudioStatistics,Inno.Audio.AudioStatistics) 84779ced1d35f46fbc1803dcb91a95fc8427d28540427db6f65df1f6bcc16ccc -->

```csharp
public static bool Inno.Audio.AudioStatistics.operator ==(Inno.Audio.AudioStatistics left, Inno.Audio.AudioStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `op_Inequality`

<a id="api-d8904cbcfba5ecf8"></a>
<!-- api: M:Inno.Audio.AudioStatistics.op_Inequality(Inno.Audio.AudioStatistics,Inno.Audio.AudioStatistics) e1a78787be019e0ee037b5387b0fba3c2d919a949d12c11a8a049788f47ffd8c -->

```csharp
public static bool Inno.Audio.AudioStatistics.operator !=(Inno.Audio.AudioStatistics left, Inno.Audio.AudioStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `ToString`

<a id="api-d23bd0f07d039730"></a>
<!-- api: M:Inno.Audio.AudioStatistics.ToString cb1bebe82d0722efe4806249a4c4021d857fa4a9671f6fb9ed880ee7e26ba5b5 -->

```csharp
public override string Inno.Audio.AudioStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L219).

## `activeVoices`

<a id="api-cf7bba4acb830dfd"></a>
<!-- api: P:Inno.Audio.AudioStatistics.activeVoices 50c99dcc255c4701ddddf382e1d82b64b79ddbf1ee534569f75f1ea41f783427 -->

```csharp
public int Inno.Audio.AudioStatistics.activeVoices { get; }
```

Gets voices that currently consume runtime budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L255).

## `decodedBytes`

<a id="api-81243924528dc72e"></a>
<!-- api: P:Inno.Audio.AudioStatistics.decodedBytes 83de8d23e647320aff0aa173039b1076418268919481a6c9d78b5f22f52a2afe -->

```csharp
public long Inno.Audio.AudioStatistics.decodedBytes { get; }
```

Gets approximate decoded clip bytes held in memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L265).

## `loadedClips`

<a id="api-b8403ac0e2c8fb37"></a>
<!-- api: P:Inno.Audio.AudioStatistics.loadedClips 785b7521792d766fd8dd4b3e32f86e9781d3fe89b8d8e0a39dd3ddc6b6d1ee87 -->

```csharp
public int Inno.Audio.AudioStatistics.loadedClips { get; }
```

Gets clip allocations held by the backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L260).

## `stolenVoiceCount`

<a id="api-b8bbe6cf1cda5896"></a>
<!-- api: P:Inno.Audio.AudioStatistics.stolenVoiceCount bdd6694a78f11311f76d045528f417b188100b477b8a0a82a66673c325bff61e -->

```csharp
public long Inno.Audio.AudioStatistics.stolenVoiceCount { get; }
```

Gets voices reclaimed since runtime creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L270).
