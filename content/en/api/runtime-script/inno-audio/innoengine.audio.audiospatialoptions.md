---
title: "AudioSpatialOptions"
description: "Reference for AudioSpatialOptions in Inno.Audio."
uid: api.inno.audio.runtime-script.e57055f9261641ea
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioSpatialOptions`

This reference describes `AudioSpatialOptions` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioSpatialOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9a46c040284f91cf) | Method |
| [`Equals`](#api-dedf120cb23b97e5) | Method |
| [`Equals`](#api-11186df18656ea63) | Method |
| [`GetHashCode`](#api-26a96576734a93dc) | Method |
| [`op_Equality`](#api-fc1bd265b03f7795) | Method |
| [`op_Inequality`](#api-c451acde023e1ba3) | Method |
| [`ToString`](#api-31864ede70e8450b) | Method |
| [`coneInnerAngle`](#api-9989cc86989fedfe) | Property |
| [`coneOuterAngle`](#api-9b87a1c6a7c65d38) | Property |
| [`coneOuterGain`](#api-8163d81481965817) | Property |
| [`direction`](#api-cda48b527936383f) | Property |
| [`distanceModel`](#api-44bf9d58dc75e81d) | Property |
| [`dopplerFactor`](#api-57702221c216e053) | Property |
| [`maxDistance`](#api-a0718663c6d5ca45) | Property |
| [`minDistance`](#api-40c1266db11c0aff) | Property |
| [`position`](#api-cf42c06212a2e5cf) | Property |
| [`rolloff`](#api-1a91ab1f4ad597fd) | Property |
| [`velocity`](#api-13e5f1b5b6eb3884) | Property |

## Type declaration

<a id="api-e57055f9261641ea"></a>
<!-- api: T:InnoEngine.Audio.AudioSpatialOptions 5b75c410ee898adc465593c917ead8cc7b38c08c259e35d58c084b7c066d1bf8 -->

```csharp
public readonly struct InnoEngine.Audio.AudioSpatialOptions : System.IEquatable<InnoEngine.Audio.AudioSpatialOptions>
```

Contains listener-relative positioning and attenuation parameters for one voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `#ctor`

<a id="api-9a46c040284f91cf"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.#ctor(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Audio.AudioDistanceModel,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single) 23c874c5b9c3fed2b49320d5125108b1239ff12a773ad903defbec96549f7474 -->

```csharp
public InnoEngine.Audio.AudioSpatialOptions.AudioSpatialOptions(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Vector3 direction, InnoEngine.Mathematics.Vector3 velocity, InnoEngine.Audio.AudioDistanceModel distanceModel = InnoEngine.Audio.AudioDistanceModel.Inverse, float minDistance = 1, float maxDistance = 100, float rolloff = 1, float coneInnerAngle = 360, float coneOuterAngle = 360, float coneOuterGain = 1, float dopplerFactor = 1)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L317).

## `Equals`

<a id="api-dedf120cb23b97e5"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.Equals(InnoEngine.Audio.AudioSpatialOptions) d9487d3f1cbfc00f359ba9be7744bd841a094e6d77b8b413245950a15cfd640e -->

```csharp
public bool InnoEngine.Audio.AudioSpatialOptions.Equals(InnoEngine.Audio.AudioSpatialOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `Equals`

<a id="api-11186df18656ea63"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.Equals(System.Object) d1e283b9c01d78a6a59fb9e8e4ab4109efd64c5aea3facc09a264c20731286c2 -->

```csharp
public override bool InnoEngine.Audio.AudioSpatialOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `GetHashCode`

<a id="api-26a96576734a93dc"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.GetHashCode f75fb500ffd050eebbcc02dc5eda479204fb8f112b159bf9d196a2e9b57b39d1 -->

```csharp
public override int InnoEngine.Audio.AudioSpatialOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `op_Equality`

<a id="api-fc1bd265b03f7795"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.op_Equality(InnoEngine.Audio.AudioSpatialOptions,InnoEngine.Audio.AudioSpatialOptions) 72180f19cbe19f06501b2b76bb833ffebb4c32ca135812c5222ff714126f6074 -->

```csharp
public static bool InnoEngine.Audio.AudioSpatialOptions.operator ==(InnoEngine.Audio.AudioSpatialOptions left, InnoEngine.Audio.AudioSpatialOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `op_Inequality`

<a id="api-c451acde023e1ba3"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.op_Inequality(InnoEngine.Audio.AudioSpatialOptions,InnoEngine.Audio.AudioSpatialOptions) 4674061ef039baa24cceb47ef3abd86f8c16d0000a23be06b80c2bfeae60f5dc -->

```csharp
public static bool InnoEngine.Audio.AudioSpatialOptions.operator !=(InnoEngine.Audio.AudioSpatialOptions left, InnoEngine.Audio.AudioSpatialOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `ToString`

<a id="api-31864ede70e8450b"></a>
<!-- api: M:InnoEngine.Audio.AudioSpatialOptions.ToString 05d1a3f6370df5c2183f3c9ac49e96a5bf3f81cf41e12730135d04b88c64c938 -->

```csharp
public override string InnoEngine.Audio.AudioSpatialOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L276).

## `coneInnerAngle`

<a id="api-9989cc86989fedfe"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.coneInnerAngle 4cd105d6e872c004d48307949172f953e167f3658745331f3c95378589dfab94 -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.coneInnerAngle { get; }
```

Gets the full-volume cone angle in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L397).

## `coneOuterAngle`

<a id="api-9b87a1c6a7c65d38"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.coneOuterAngle 19fca43a793e71f91905af97e37d1722c8883bd19e9644aa7d7a378a166fb052 -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.coneOuterAngle { get; }
```

Gets the outer cone angle in degrees.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L402).

## `coneOuterGain`

<a id="api-8163d81481965817"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.coneOuterGain e66ca5738ea1b3e18cce183b19002e4eb6f261717524f8bc8db3f0c79510af5a -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.coneOuterGain { get; }
```

Gets the gain outside the outer cone.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L407).

## `direction`

<a id="api-cda48b527936383f"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.direction a0f4ac41d9e55910ba85507d5ba6ee26a5f2fe5174d50f216f9f0cd56c4ff247 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioSpatialOptions.direction { get; }
```

Gets the world-space source forward direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L367).

## `distanceModel`

<a id="api-44bf9d58dc75e81d"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.distanceModel f70cd7476023a5a68502b5e1f3b7a5b59f1802abd509fd4ea416c9fabacb74a3 -->

```csharp
public InnoEngine.Audio.AudioDistanceModel InnoEngine.Audio.AudioSpatialOptions.distanceModel { get; }
```

Gets the distance attenuation model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L377).

## `dopplerFactor`

<a id="api-57702221c216e053"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.dopplerFactor 585b8a4253b157fba3c60ea386e1e42fe5b918e73d55091eeb2982e9b3c62c21 -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.dopplerFactor { get; }
```

Gets the Doppler effect multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L412).

## `maxDistance`

<a id="api-a0718663c6d5ca45"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.maxDistance 14a9bc70f57db599ee7626c1e859d1dbb006e348237de232e350a55ddebb47d2 -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.maxDistance { get; }
```

Gets the distance beyond which attenuation is clamped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L387).

## `minDistance`

<a id="api-40c1266db11c0aff"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.minDistance b676e4fb123e2e21c571740201e17f7e5572e3d6f3d2e6ba7782d74fcd1c988c -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.minDistance { get; }
```

Gets the distance at which attenuation begins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L382).

## `position`

<a id="api-cf42c06212a2e5cf"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.position 4576da7c8a7270ba0b47f25329ec8ee9e7505a618209380f0c957699183ffb15 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioSpatialOptions.position { get; }
```

Gets the world-space source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L362).

## `rolloff`

<a id="api-1a91ab1f4ad597fd"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.rolloff 0604fa7436746835c406d7bf47a39ca014c68be79a83ee0fb033909f25363443 -->

```csharp
public float InnoEngine.Audio.AudioSpatialOptions.rolloff { get; }
```

Gets the distance attenuation strength.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L392).

## `velocity`

<a id="api-13e5f1b5b6eb3884"></a>
<!-- api: P:InnoEngine.Audio.AudioSpatialOptions.velocity f80ebace2c94f57ef016525d212190508937fc7f5ce5eddef08c6166d4484002 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Audio.AudioSpatialOptions.velocity { get; }
```

Gets the world-space source velocity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L372).
