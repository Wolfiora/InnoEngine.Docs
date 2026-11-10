---
title: "AudioPlayOptions"
description: "Reference for AudioPlayOptions in Inno.Audio."
uid: api.inno.audio.5a14c327d4aca249
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioPlayOptions`

This reference describes `AudioPlayOptions` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioPlayOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-990b419e16a1779e) | Method |
| [`#ctor`](#api-9e5fbbaebac1c0df) | Method |
| [`Equals`](#api-7f52c930492ba29b) | Method |
| [`Equals`](#api-2d4885ec4e004d3b) | Method |
| [`GetHashCode`](#api-db604d7fcf716518) | Method |
| [`op_Equality`](#api-ad42a2659be05075) | Method |
| [`op_Inequality`](#api-7bbc531c71b67b42) | Method |
| [`ToString`](#api-cd3a1e40c09f8cf8) | Method |
| [`bus`](#api-fc913b8db293e9d2) | Property |
| [`defaultValue`](#api-a4942011fccfa101) | Property |
| [`loadMode`](#api-0a140f401dca230d) | Property |
| [`loop`](#api-5539b182a8619ffc) | Property |
| [`pan`](#api-977b0c3357d83d3c) | Property |
| [`pitch`](#api-a2aed0ba9adffda6) | Property |
| [`priority`](#api-18352ed7de952598) | Property |
| [`spatial`](#api-236295edc7b2043a) | Property |
| [`volume`](#api-b17f197046c7ca6d) | Property |

## Type declaration

<a id="api-5a14c327d4aca249"></a>
<!-- api: T:Inno.Audio.AudioPlayOptions 21273873d8afbaac1545203df24b2812ffb2b4564098255b4b8f6ae2849286a0 -->

```csharp
public readonly record struct Inno.Audio.AudioPlayOptions : System.IEquatable<Inno.Audio.AudioPlayOptions>
```

Contains immutable parameters used to create one playback voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `#ctor`

<a id="api-990b419e16a1779e"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.#ctor e003f76e36c18458e313f4b4f2081513d90bcf034bcfc33cd59c70ea38027be5 -->

```csharp
public Inno.Audio.AudioPlayOptions.AudioPlayOptions()
```

Creates default playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L423).

## `#ctor`

<a id="api-9e5fbbaebac1c0df"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.#ctor(System.Single,System.Single,System.Single,System.Boolean,System.Int32,System.Nullable{Inno.Audio.AudioBusId},Inno.Audio.AudioClipLoadMode,System.Nullable{Inno.Audio.AudioSpatialOptions}) 8f40856015e13455848e005e4636500537228f61cb506d3cb77a65cf19c4bf54 -->

```csharp
public Inno.Audio.AudioPlayOptions.AudioPlayOptions(float volume = 1, float pitch = 1, float pan = 0, bool loop = false, int priority = 0, Inno.Audio.AudioBusId? bus = null, Inno.Audio.AudioClipLoadMode loadMode = Inno.Audio.AudioClipLoadMode.Automatic, Inno.Audio.AudioSpatialOptions? spatial = null)
```

Creates playback parameters.

**Parameter `volume`:** Linear gain applied to the voice.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `loop`:** Whether playback restarts after reaching the clip end.

**Parameter `priority`:** Voice retention priority; larger values are retained first.

**Parameter `bus`:** Destination mixer bus.

**Parameter `loadMode`:** Clip preparation override.

**Parameter `spatial`:** Optional spatial playback parameters.

**Throws `System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range, or the load mode is undefined.

**Throws `System.ArgumentException`:** The supplied destination bus is uninitialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L461).

## `Equals`

<a id="api-7f52c930492ba29b"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.Equals(Inno.Audio.AudioPlayOptions) 59882bcee4def73a95d1837a279dde5eddc556e9648f5a80bc2a4eb94ce5a216 -->

```csharp
public bool Inno.Audio.AudioPlayOptions.Equals(Inno.Audio.AudioPlayOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `Equals`

<a id="api-2d4885ec4e004d3b"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.Equals(System.Object) 239fb827599ebaafb23311b7ef6c0b1b8e86c3961c1891390506e1dc150c5da9 -->

```csharp
public override bool Inno.Audio.AudioPlayOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `GetHashCode`

<a id="api-db604d7fcf716518"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.GetHashCode 803d68d511d0416a4d3b8183937fa70917bacfac71700a25b4ef122c6af9051d -->

```csharp
public override int Inno.Audio.AudioPlayOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `op_Equality`

<a id="api-ad42a2659be05075"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.op_Equality(Inno.Audio.AudioPlayOptions,Inno.Audio.AudioPlayOptions) 7bd23fe07bd687882b45f102c64bc17281d8e8a49b1a9cd0382020c2b80d4d76 -->

```csharp
public static bool Inno.Audio.AudioPlayOptions.operator ==(Inno.Audio.AudioPlayOptions left, Inno.Audio.AudioPlayOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `op_Inequality`

<a id="api-7bbc531c71b67b42"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.op_Inequality(Inno.Audio.AudioPlayOptions,Inno.Audio.AudioPlayOptions) 8ee0ee7d88a40efbdd88ee806ac17383813d68804ea4685cb1533b2787b4e786 -->

```csharp
public static bool Inno.Audio.AudioPlayOptions.operator !=(Inno.Audio.AudioPlayOptions left, Inno.Audio.AudioPlayOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `ToString`

<a id="api-cd3a1e40c09f8cf8"></a>
<!-- api: M:Inno.Audio.AudioPlayOptions.ToString 955d959b2ee16b9d0802b36cb7c4a7080f306362403c8500720fe1bb214352e7 -->

```csharp
public override string Inno.Audio.AudioPlayOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L418).

## `bus`

<a id="api-fc913b8db293e9d2"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.bus 0fea0900f88ec9a73fa9d867a958c5b9157e1dfaf92bfc5f1ae84caf3dacd7b8 -->

```csharp
public Inno.Audio.AudioBusId Inno.Audio.AudioPlayOptions.bus { get; }
```

Gets the destination mixer bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L525).

## `defaultValue`

<a id="api-a4942011fccfa101"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.defaultValue fcd8af45518c44e84e6f65ce297c9ce1d329dcd5a757708f4f48e1b642020ff1 -->

```csharp
public static Inno.Audio.AudioPlayOptions Inno.Audio.AudioPlayOptions.defaultValue { get; }
```

Gets the default playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L495).

## `loadMode`

<a id="api-0a140f401dca230d"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.loadMode fb2746a0ae273a61e3dc82fff43fb67073b6be4fa2bf0a3a4c93093a82ca7c96 -->

```csharp
public Inno.Audio.AudioClipLoadMode Inno.Audio.AudioPlayOptions.loadMode { get; }
```

Gets the clip preparation override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L530).

## `loop`

<a id="api-5539b182a8619ffc"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.loop be64476c963f5cec8d10d74ddb3d6d36b237a7c962b3a77bb19f43326cdef368 -->

```csharp
public bool Inno.Audio.AudioPlayOptions.loop { get; }
```

Gets whether playback loops at the clip end.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L515).

## `pan`

<a id="api-977b0c3357d83d3c"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.pan e09f0f4e3c24bbe7527bbcdb13badeb1f98464f408a88079f4f9e4234a66578e -->

```csharp
public float Inno.Audio.AudioPlayOptions.pan { get; }
```

Gets the stereo pan value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L510).

## `pitch`

<a id="api-a2aed0ba9adffda6"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.pitch 0981a8c6b2c0a24a1bb6fe1ba3dd1623dee0204aaf6b0d4f60605eca196afb58 -->

```csharp
public float Inno.Audio.AudioPlayOptions.pitch { get; }
```

Gets the playback-rate multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L505).

## `priority`

<a id="api-18352ed7de952598"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.priority 656cdc98b9f049933ebe571ea328d7735777a63c060a5112549c62124954abfb -->

```csharp
public int Inno.Audio.AudioPlayOptions.priority { get; }
```

Gets the voice retention priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L520).

## `spatial`

<a id="api-236295edc7b2043a"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.spatial 6089d66994127e2dc06b267809bac05ebfa76747774f100dfd02df53bc48a292 -->

```csharp
public Inno.Audio.AudioSpatialOptions? Inno.Audio.AudioPlayOptions.spatial { get; }
```

Gets optional spatial playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L535).

## `volume`

<a id="api-b17f197046c7ca6d"></a>
<!-- api: P:Inno.Audio.AudioPlayOptions.volume 2ed132cc305b9461190140ce988aa68e3fb2c147ee5587a75577b0b4e1282aeb -->

```csharp
public float Inno.Audio.AudioPlayOptions.volume { get; }
```

Gets the linear voice gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L500).
