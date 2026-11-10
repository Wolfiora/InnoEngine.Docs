---
title: "AudioVoiceParameters"
description: "Reference for AudioVoiceParameters in Inno.Audio."
uid: api.inno.audio.3a5bdcea295d1b52
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioVoiceParameters`

This reference describes `AudioVoiceParameters` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioVoiceParameters>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e040aae9c94e7712) | Method |
| [`Equals`](#api-132017806a5194a6) | Method |
| [`Equals`](#api-af1c07c745aa8099) | Method |
| [`GetHashCode`](#api-58f839d1e74d7ece) | Method |
| [`op_Equality`](#api-8b4da3d9e954bfbb) | Method |
| [`op_Inequality`](#api-191f87e17dcc473a) | Method |
| [`ToString`](#api-6a03ac086200348e) | Method |
| [`pan`](#api-06788e3c82408ec6) | Property |
| [`pitch`](#api-914d6de8df50f618) | Property |
| [`spatial`](#api-70252c1c48079934) | Property |
| [`volume`](#api-dc81a3ccf8734d5c) | Property |

## Type declaration

<a id="api-3a5bdcea295d1b52"></a>
<!-- api: T:Inno.Audio.AudioVoiceParameters 6442089860f6b0202ef5c5708292000bea54b46ef5b038866cf421e706f50137 -->

```csharp
public readonly record struct Inno.Audio.AudioVoiceParameters : System.IEquatable<Inno.Audio.AudioVoiceParameters>
```

Contains mutable voice parameters that can be changed after playback begins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `#ctor`

<a id="api-e040aae9c94e7712"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{Inno.Audio.AudioSpatialOptions}) a76ac677bb94aa4412fdfd167fdd232b69021681ebd5fb2a129f11424d2a4278 -->

```csharp
public Inno.Audio.AudioVoiceParameters.AudioVoiceParameters(float volume, float pitch, float pan, Inno.Audio.AudioSpatialOptions? spatial = null)
```

Creates a voice parameter snapshot.

**Parameter `volume`:** Linear voice gain.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `spatial`:** Optional spatial playback parameters.

**Throws `System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L561).

## `Equals`

<a id="api-132017806a5194a6"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.Equals(Inno.Audio.AudioVoiceParameters) 8f0c85a143829c136d950a3a7421b70fde93fc01a50250cb2073d63c49bdc1cb -->

```csharp
public bool Inno.Audio.AudioVoiceParameters.Equals(Inno.Audio.AudioVoiceParameters other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `Equals`

<a id="api-af1c07c745aa8099"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.Equals(System.Object) ec30eb6fafecb57217d0a3edd27115ad9feb3fa62f821a2a8ee26bc9878fa729 -->

```csharp
public override bool Inno.Audio.AudioVoiceParameters.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `GetHashCode`

<a id="api-58f839d1e74d7ece"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.GetHashCode 15a711b72da0f169f34b855a90e689d4c0ace39d9c362e50a334465af2fd1bba -->

```csharp
public override int Inno.Audio.AudioVoiceParameters.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `op_Equality`

<a id="api-8b4da3d9e954bfbb"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.op_Equality(Inno.Audio.AudioVoiceParameters,Inno.Audio.AudioVoiceParameters) 94e060368819fa0ab82110a034bf60c6a855332a7c4847884e2bb702b7c8bbf4 -->

```csharp
public static bool Inno.Audio.AudioVoiceParameters.operator ==(Inno.Audio.AudioVoiceParameters left, Inno.Audio.AudioVoiceParameters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `op_Inequality`

<a id="api-191f87e17dcc473a"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.op_Inequality(Inno.Audio.AudioVoiceParameters,Inno.Audio.AudioVoiceParameters) 57fcafe7972fd6214c4d6e05eaca9bb38343f010eeca0d3ee00f6bd81cccc502 -->

```csharp
public static bool Inno.Audio.AudioVoiceParameters.operator !=(Inno.Audio.AudioVoiceParameters left, Inno.Audio.AudioVoiceParameters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `ToString`

<a id="api-6a03ac086200348e"></a>
<!-- api: M:Inno.Audio.AudioVoiceParameters.ToString eab054e285247fee18d3606ef86e5c55f0601ae6a5d121382af2601000b0b2d8 -->

```csharp
public override string Inno.Audio.AudioVoiceParameters.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `pan`

<a id="api-06788e3c82408ec6"></a>
<!-- api: P:Inno.Audio.AudioVoiceParameters.pan 00390603330d907ad360408835c8e0b30caab6b5a3dd7f4b01ed602a593795d0 -->

```csharp
public float Inno.Audio.AudioVoiceParameters.pan { get; }
```

Gets the stereo pan value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L592).

## `pitch`

<a id="api-914d6de8df50f618"></a>
<!-- api: P:Inno.Audio.AudioVoiceParameters.pitch dd8beaf7c1cdac46fc169720fb80bca4ca162c4ee6a2ef69c699a071136b44dd -->

```csharp
public float Inno.Audio.AudioVoiceParameters.pitch { get; }
```

Gets the playback-rate multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L587).

## `spatial`

<a id="api-70252c1c48079934"></a>
<!-- api: P:Inno.Audio.AudioVoiceParameters.spatial d6f09e0fde0a327a03739f25aec5a06477087d54376c3193c1d2637e426e9a7f -->

```csharp
public Inno.Audio.AudioSpatialOptions? Inno.Audio.AudioVoiceParameters.spatial { get; }
```

Gets optional spatial playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L597).

## `volume`

<a id="api-dc81a3ccf8734d5c"></a>
<!-- api: P:Inno.Audio.AudioVoiceParameters.volume fe49521119d29c4217b2d914ddff97d353d5e03e7dd7b03ff00c13c6f167a433 -->

```csharp
public float Inno.Audio.AudioVoiceParameters.volume { get; }
```

Gets the linear voice gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L582).
