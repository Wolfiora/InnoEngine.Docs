---
title: "AudioProcessorParameter"
description: "Reference for AudioProcessorParameter in Inno.Audio."
uid: api.inno.audio.006a1f1df60de021
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioProcessorParameter`

This reference describes `AudioProcessorParameter` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioProcessorParameter>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fe8624356951213d) | Method |
| [`Equals`](#api-31b587d77fdf77c4) | Method |
| [`Equals`](#api-a9f8da4cee7ef730) | Method |
| [`GetHashCode`](#api-a3a73c87c6312f48) | Method |
| [`op_Equality`](#api-774b56c1fa47ffaf) | Method |
| [`op_Inequality`](#api-a7cf1b9b5368bd6c) | Method |
| [`ToString`](#api-61a38b9e7e4b0836) | Method |
| [`id`](#api-31b206bc9d9c0c46) | Property |
| [`value`](#api-7110fc26c98eee63) | Property |

## Type declaration

<a id="api-006a1f1df60de021"></a>
<!-- api: T:Inno.Audio.AudioProcessorParameter 9f1081c9b9c9339a8ea21230c204466b996586b0a345cafd0c4026912436f774 -->

```csharp
public readonly record struct Inno.Audio.AudioProcessorParameter : System.IEquatable<Inno.Audio.AudioProcessorParameter>
```

Stores one neutral numeric parameter assigned to an audio processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `#ctor`

<a id="api-fe8624356951213d"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.#ctor(Inno.Audio.AudioParameterId,System.Single) c8a30dfcd76425776b276ad7d6d9770b2017e5a2fd14c30007889f514c970954 -->

```csharp
public Inno.Audio.AudioProcessorParameter.AudioProcessorParameter(Inno.Audio.AudioParameterId id, float value)
```

Creates a processor parameter value.

**Parameter `id`:** Open parameter identifier understood by the processor protocol.

**Parameter `value`:** Neutral numeric value interpreted by the processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L24).

## `Equals`

<a id="api-31b587d77fdf77c4"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.Equals(Inno.Audio.AudioProcessorParameter) c4b0894ebb005d47746a98896b5ae5d75ccf084acfd081b95c961f2da166d066 -->

```csharp
public bool Inno.Audio.AudioProcessorParameter.Equals(Inno.Audio.AudioProcessorParameter other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `Equals`

<a id="api-a9f8da4cee7ef730"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.Equals(System.Object) a690e44d09dbd61c6556256c8ae4d27c33d0f32d28f4af6bd14e824bdc87aa8e -->

```csharp
public override bool Inno.Audio.AudioProcessorParameter.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `GetHashCode`

<a id="api-a3a73c87c6312f48"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.GetHashCode aff0b203dc7b705c61cac6f87459f9bf5251d01b45e3552af22ca47136e2af11 -->

```csharp
public override int Inno.Audio.AudioProcessorParameter.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `op_Equality`

<a id="api-774b56c1fa47ffaf"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.op_Equality(Inno.Audio.AudioProcessorParameter,Inno.Audio.AudioProcessorParameter) 904c38ca6ebedec96a2d3deaebcf056d57a93971d14df04391571f6058c21d02 -->

```csharp
public static bool Inno.Audio.AudioProcessorParameter.operator ==(Inno.Audio.AudioProcessorParameter left, Inno.Audio.AudioProcessorParameter right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `op_Inequality`

<a id="api-a7cf1b9b5368bd6c"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.op_Inequality(Inno.Audio.AudioProcessorParameter,Inno.Audio.AudioProcessorParameter) 46c4b838ff2da02591fbf8c7663bc386ce3d75f5ef11a6912a3a2e72dad5010d -->

```csharp
public static bool Inno.Audio.AudioProcessorParameter.operator !=(Inno.Audio.AudioProcessorParameter left, Inno.Audio.AudioProcessorParameter right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `ToString`

<a id="api-61a38b9e7e4b0836"></a>
<!-- api: M:Inno.Audio.AudioProcessorParameter.ToString 94fc91e9bae9e75c6ff50d460629bab4aebfe1bf8ce83bb48c34e8dcca89fe20 -->

```csharp
public override string Inno.Audio.AudioProcessorParameter.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `id`

<a id="api-31b206bc9d9c0c46"></a>
<!-- api: P:Inno.Audio.AudioProcessorParameter.id c8a66ddc8b6dce1797686df23ee90724f782991ced8280fabb76bff3bc53c7ac -->

```csharp
public Inno.Audio.AudioParameterId Inno.Audio.AudioProcessorParameter.id { get; }
```

Gets the open parameter identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L37).

## `value`

<a id="api-7110fc26c98eee63"></a>
<!-- api: P:Inno.Audio.AudioProcessorParameter.value 81adbeea7ebc7458686df755eb981f305bef1165cff353a638ef9e296b73a3fd -->

```csharp
public float Inno.Audio.AudioProcessorParameter.value { get; }
```

Gets the neutral numeric value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L42).
