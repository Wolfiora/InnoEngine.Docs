---
title: "AudioVoiceParameters"
description: "Reference for AudioVoiceParameters in Inno.Audio."
uid: api.inno.audio.runtime-script.e69fd32415bb3452
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioVoiceParameters`

This reference describes `AudioVoiceParameters` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioVoiceParameters>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-26758a4eeb591d8e) | Method |
| [`Equals`](#api-96db4956c388116c) | Method |
| [`Equals`](#api-08c44682d20cafd9) | Method |
| [`GetHashCode`](#api-c6a1618da453afc1) | Method |
| [`op_Equality`](#api-5b99ab81d9cfa9ed) | Method |
| [`op_Inequality`](#api-9b0184aa244f4d0f) | Method |
| [`ToString`](#api-8bfd2f3fe42620eb) | Method |
| [`pan`](#api-144ca6451f76c273) | Property |
| [`pitch`](#api-07592007e02dbcfb) | Property |
| [`spatial`](#api-677afd4e9dbd1422) | Property |
| [`volume`](#api-6d01ae2370bd63c9) | Property |

## Type declaration

<a id="api-e69fd32415bb3452"></a>
<!-- api: T:InnoEngine.Audio.AudioVoiceParameters a0f8852390caace609bf6e5e386aeb2c9870bb39bd69325fb098ded2a78df7c5 -->

```csharp
public readonly struct InnoEngine.Audio.AudioVoiceParameters : System.IEquatable<InnoEngine.Audio.AudioVoiceParameters>
```

Contains mutable voice parameters that can be changed after playback begins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `#ctor`

<a id="api-26758a4eeb591d8e"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.#ctor(System.Single,System.Single,System.Single,System.Nullable{InnoEngine.Audio.AudioSpatialOptions}) e31d9fefc16dcfc56d65b5f5e10d4027591e3fd8e52c2e40c0b639acb745885e -->

```csharp
public InnoEngine.Audio.AudioVoiceParameters.AudioVoiceParameters(float volume, float pitch, float pan, InnoEngine.Audio.AudioSpatialOptions? spatial = null)
```

Creates a voice parameter snapshot.

**Parameter `volume`:** Linear voice gain.

**Parameter `pitch`:** Playback-rate multiplier.

**Parameter `pan`:** Stereo pan from negative one to positive one.

**Parameter `spatial`:** Optional spatial playback parameters.

**Throws `System.ArgumentOutOfRangeException`:** Gain, pitch, or pan is non-finite or outside its valid range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L561).

## `Equals`

<a id="api-96db4956c388116c"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.Equals(InnoEngine.Audio.AudioVoiceParameters) 4cf2f50c77ab11c44256885e362f4ede47f1c1e81ecd96130d81a7b4fe234f21 -->

```csharp
public bool InnoEngine.Audio.AudioVoiceParameters.Equals(InnoEngine.Audio.AudioVoiceParameters other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `Equals`

<a id="api-08c44682d20cafd9"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.Equals(System.Object) 8454500d2bdcec0373ef6392ee3bd655accf970b92f26c43d9bd7f560742c6ae -->

```csharp
public override bool InnoEngine.Audio.AudioVoiceParameters.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `GetHashCode`

<a id="api-c6a1618da453afc1"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.GetHashCode dc5a5b626e86568f6289fd6e6a56794e4c85743011edbc53775ee8bae0010d60 -->

```csharp
public override int InnoEngine.Audio.AudioVoiceParameters.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `op_Equality`

<a id="api-5b99ab81d9cfa9ed"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.op_Equality(InnoEngine.Audio.AudioVoiceParameters,InnoEngine.Audio.AudioVoiceParameters) a5d60fb1c286b3b8c6ffc97a472f8c5ca04edbd747d2ac12531ac1df82e2b2a1 -->

```csharp
public static bool InnoEngine.Audio.AudioVoiceParameters.operator ==(InnoEngine.Audio.AudioVoiceParameters left, InnoEngine.Audio.AudioVoiceParameters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `op_Inequality`

<a id="api-9b0184aa244f4d0f"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.op_Inequality(InnoEngine.Audio.AudioVoiceParameters,InnoEngine.Audio.AudioVoiceParameters) 3367ea8e930d02319a4f8eec3c5258d6dd5897429815895a61bbce7f1487ce22 -->

```csharp
public static bool InnoEngine.Audio.AudioVoiceParameters.operator !=(InnoEngine.Audio.AudioVoiceParameters left, InnoEngine.Audio.AudioVoiceParameters right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `ToString`

<a id="api-8bfd2f3fe42620eb"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceParameters.ToString e4cdba3c7f858ab35c042417f22db39ddf4ada99e138c8d452162ca7e38fbf53 -->

```csharp
public override string InnoEngine.Audio.AudioVoiceParameters.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L541).

## `pan`

<a id="api-144ca6451f76c273"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceParameters.pan 6424a1f221becb970a13a4f4123c89dfb70659f017bc8aeb20ac5cb0f82e3314 -->

```csharp
public float InnoEngine.Audio.AudioVoiceParameters.pan { get; }
```

Gets the stereo pan value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L592).

## `pitch`

<a id="api-07592007e02dbcfb"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceParameters.pitch e26784bcbe6e6b37fd88ac91c9c023ae01a20c36b0fa526d29e679e582d96b60 -->

```csharp
public float InnoEngine.Audio.AudioVoiceParameters.pitch { get; }
```

Gets the playback-rate multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L587).

## `spatial`

<a id="api-677afd4e9dbd1422"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceParameters.spatial 57c0a0d9b515cd66b159a0b92ee36fc9e52b85c0bcf30d280fa4e8936c9fa67a -->

```csharp
public InnoEngine.Audio.AudioSpatialOptions? InnoEngine.Audio.AudioVoiceParameters.spatial { get; }
```

Gets optional spatial playback parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L597).

## `volume`

<a id="api-6d01ae2370bd63c9"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceParameters.volume f2cbe5f6cd24a77548acbadca931b5d552445264f2be03108be5905040b923f3 -->

```csharp
public float InnoEngine.Audio.AudioVoiceParameters.volume { get; }
```

Gets the linear voice gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L582).
