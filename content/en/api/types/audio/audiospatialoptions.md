---
title: "AudioSpatialOptions"
description: "Reference for AudioSpatialOptions in Inno.Audio."
uid: api.inno.audio.e9452eb9207bb012
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioSpatialOptions`

This reference describes `AudioSpatialOptions` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioSpatialOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-760e7f65fb4e8fd8) | Method |
| [`Equals`](#api-40f5f3470465ddd5) | Method |
| [`Equals`](#api-4ea635385e1fd57d) | Method |
| [`GetHashCode`](#api-26d1b52ca608b3e5) | Method |
| [`op_Equality`](#api-e9bc53c4160bc64d) | Method |
| [`op_Inequality`](#api-34bf0d7c7db4fd6f) | Method |
| [`ToString`](#api-c9deb5d6f8886615) | Method |
| [`coneInnerAngle`](#api-9b5a6cd9fcf706c4) | Property |
| [`coneOuterAngle`](#api-3d7e5a6abd58386d) | Property |
| [`coneOuterGain`](#api-3d4c785001c0ae65) | Property |
| [`direction`](#api-49197f370aa31e26) | Property |
| [`distanceModel`](#api-8b279b0cb288e079) | Property |
| [`dopplerFactor`](#api-72b49cf5c3e1473d) | Property |
| [`maxDistance`](#api-7654e855422fbe9a) | Property |
| [`minDistance`](#api-de265104dbebb9b6) | Property |
| [`position`](#api-513e2f03578c8de9) | Property |
| [`rolloff`](#api-c003503d7212d636) | Property |
| [`velocity`](#api-9957d43f947e9168) | Property |

## Type declaration

<a id="api-e9452eb9207bb012"></a>
<!-- api: T:Inno.Audio.AudioSpatialOptions 6229e93d6da3b3881e9290653825c248a36ba9c5452dda0c30310f3d62205732 -->

```csharp
public readonly record struct Inno.Audio.AudioSpatialOptions : System.IEquatable<Inno.Audio.AudioSpatialOptions>
```

Contains listener-relative positioning and attenuation parameters for one voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `#ctor`

<a id="api-760e7f65fb4e8fd8"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Audio.AudioDistanceModel,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) 78a66e21d4ee5ad5d0aa0aa3740f88cfb8c2366b0459d826e364a6c20eec417a -->

```csharp
public Inno.Audio.AudioSpatialOptions.AudioSpatialOptions(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Vector3 direction, Inno.Core.Mathematics.Vector3 velocity, Inno.Audio.AudioDistanceModel distanceModel = Inno.Audio.AudioDistanceModel.Inverse, float minDistance = 1, float maxDistance = 100, float rolloff = 1, float coneInnerAngle = 360, float coneOuterAngle = 360, float coneOuterGain = 1, float dopplerFactor = 1)
```

Creates spatial playback parameters.

**Parameter `position`:** World-space source position.

**Parameter `direction`:** World-space source forward direction.

**Parameter `velocity`:** World-space source velocity used for Doppler calculation.

**Parameter `distanceModel`:** Distance attenuation model.

**Parameter `minDistance`:** Distance at which attenuation begins.

**Parameter `maxDistance`:** Distance beyond which attenuation is clamped.

**Parameter `rolloff`:** Attenuation strength for the selected distance model.

**Parameter `coneInnerAngle`:** Full-volume source cone angle in degrees.

**Parameter `coneOuterAngle`:** Outer source cone angle in degrees.

**Parameter `coneOuterGain`:** Gain outside the outer cone.

**Parameter `dopplerFactor`:** Doppler effect multiplier.

**Throws `System.ArgumentOutOfRangeException`:** A vector or scalar is non-finite, a spatial bound is invalid, or the distance model is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L317).

## `Equals`

<a id="api-40f5f3470465ddd5"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.Equals(Inno.Audio.AudioSpatialOptions) 9b84f1973a247d6ca9afc622a06a1b60104b549fa89850e5d8d6cc645d6eecf8 -->

```csharp
public bool Inno.Audio.AudioSpatialOptions.Equals(Inno.Audio.AudioSpatialOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `Equals`

<a id="api-4ea635385e1fd57d"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.Equals(System.Object) 8a24449c6f5cfb888200743c1e8695f657280e4076a613cce52f552f1703a09c -->

```csharp
public override bool Inno.Audio.AudioSpatialOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `GetHashCode`

<a id="api-26d1b52ca608b3e5"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.GetHashCode c072414867306875829201f7fd34790dec99625488ccace237eb09536ac2db26 -->

```csharp
public override int Inno.Audio.AudioSpatialOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `op_Equality`

<a id="api-e9bc53c4160bc64d"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.op_Equality(Inno.Audio.AudioSpatialOptions,Inno.Audio.AudioSpatialOptions) 71dff44f8e0da255a38e468a9576bf2c4591a790b7daa7dde76e8ed47a400568 -->

```csharp
public static bool Inno.Audio.AudioSpatialOptions.operator ==(Inno.Audio.AudioSpatialOptions left, Inno.Audio.AudioSpatialOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `op_Inequality`

<a id="api-34bf0d7c7db4fd6f"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.op_Inequality(Inno.Audio.AudioSpatialOptions,Inno.Audio.AudioSpatialOptions) 9b2ca0764eddef9b110fdf2f8c5eb22124615b5eb7d0429ae9be63742c93e7a9 -->

```csharp
public static bool Inno.Audio.AudioSpatialOptions.operator !=(Inno.Audio.AudioSpatialOptions left, Inno.Audio.AudioSpatialOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `ToString`

<a id="api-c9deb5d6f8886615"></a>
<!-- api: M:Inno.Audio.AudioSpatialOptions.ToString df808bf5d8aa7f0d8b2090a44a4936abccf3afa95b38333ca3792132d85c4963 -->

```csharp
public override string Inno.Audio.AudioSpatialOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `coneInnerAngle`

<a id="api-9b5a6cd9fcf706c4"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.coneInnerAngle f4af71a57ffe9a1c41140aecfa8a67273411a59e8e3e88b7fdcd292c91618734 -->

```csharp
public float Inno.Audio.AudioSpatialOptions.coneInnerAngle { get; }
```

Gets the full-volume cone angle in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L397).

## `coneOuterAngle`

<a id="api-3d7e5a6abd58386d"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.coneOuterAngle 1277d051abf2aa24d340013d0370990e615187269c3a7a5d77e6ce979dad599e -->

```csharp
public float Inno.Audio.AudioSpatialOptions.coneOuterAngle { get; }
```

Gets the outer cone angle in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L402).

## `coneOuterGain`

<a id="api-3d4c785001c0ae65"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.coneOuterGain 7888e9291d099f1901c2aacd0c2eb3e31e525f13e9edabc62f5a1e4dfbf64fe7 -->

```csharp
public float Inno.Audio.AudioSpatialOptions.coneOuterGain { get; }
```

Gets the gain outside the outer cone.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L407).

## `direction`

<a id="api-49197f370aa31e26"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.direction 510c1d5c5de2424147fe6cf3da27905ca2d405f5f259e1af5123de728f755829 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioSpatialOptions.direction { get; }
```

Gets the world-space source forward direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L367).

## `distanceModel`

<a id="api-8b279b0cb288e079"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.distanceModel daaa56a74321ee903139519f535d5c4af8772dc262db1a899ebb3fe84c1332b5 -->

```csharp
public Inno.Audio.AudioDistanceModel Inno.Audio.AudioSpatialOptions.distanceModel { get; }
```

Gets the distance attenuation model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L377).

## `dopplerFactor`

<a id="api-72b49cf5c3e1473d"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.dopplerFactor e832d09fab71ea42d77379a318c83410015ebc44d4c6437ec1cebf9f198da33b -->

```csharp
public float Inno.Audio.AudioSpatialOptions.dopplerFactor { get; }
```

Gets the Doppler effect multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L412).

## `maxDistance`

<a id="api-7654e855422fbe9a"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.maxDistance 2ad11cce9a2be3204408c365eda479a8f740bc5bce834f0bcfe95b54fb070819 -->

```csharp
public float Inno.Audio.AudioSpatialOptions.maxDistance { get; }
```

Gets the distance beyond which attenuation is clamped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L387).

## `minDistance`

<a id="api-de265104dbebb9b6"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.minDistance 7d210b69551f21f95ed7c9e1c5e4404ee90b05ac19a2f094f2d34334d7599ffb -->

```csharp
public float Inno.Audio.AudioSpatialOptions.minDistance { get; }
```

Gets the distance at which attenuation begins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L382).

## `position`

<a id="api-513e2f03578c8de9"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.position 41946215ce190c3f6a855797a43dd6924711dd06226865d5ca979c5e8fee2e01 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioSpatialOptions.position { get; }
```

Gets the world-space source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L362).

## `rolloff`

<a id="api-c003503d7212d636"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.rolloff 1b70ae835ef4b6f80eb0c62f568b5afc8516c4715cc83db29d231a7c2c434a85 -->

```csharp
public float Inno.Audio.AudioSpatialOptions.rolloff { get; }
```

Gets the distance attenuation strength.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L392).

## `velocity`

<a id="api-9957d43f947e9168"></a>
<!-- api: P:Inno.Audio.AudioSpatialOptions.velocity 2b8ba196a29f2e8d9fe095b14c64b5dd213490e26e48c22f2055f5a2e499016c -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Audio.AudioSpatialOptions.velocity { get; }
```

Gets the world-space source velocity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L372).
