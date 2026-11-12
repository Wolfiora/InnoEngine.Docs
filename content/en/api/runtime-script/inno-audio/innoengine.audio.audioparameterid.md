---
title: "AudioParameterId"
description: "Reference for AudioParameterId in Inno.Audio."
uid: api.inno.audio.runtime-script.b5c6dccacf95fcff
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioParameterId`

This reference describes `AudioParameterId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioParameterId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2520dedd40c1d1d0) | Method |
| [`Equals`](#api-48ff6fb5dc86027e) | Method |
| [`Equals`](#api-b378f6e820a0b2eb) | Method |
| [`GetHashCode`](#api-0d768258aaff5e58) | Method |
| [`op_Equality`](#api-a11862e1740bbb3b) | Method |
| [`op_Inequality`](#api-33bd6861b6d6137b) | Method |
| [`ToString`](#api-cb4c70fc2273599b) | Method |
| [`decay`](#api-873d725c71e5be8e) | Property |
| [`delayMilliseconds`](#api-33610aeeeb097f35) | Property |
| [`frequency`](#api-b3063b0b83517008) | Property |
| [`gainDecibels`](#api-9638e85902362aa4) | Property |
| [`isValid`](#api-7b989da66d5cfb84) | Property |
| [`quality`](#api-eea7af2797e6f5d2) | Property |
| [`shelfSlope`](#api-ec0a005cca7dd582) | Property |
| [`value`](#api-a8fac95b154b3bdd) | Property |

## Type declaration

<a id="api-b5c6dccacf95fcff"></a>
<!-- api: T:InnoEngine.Audio.AudioParameterId d27cde2256e2e760f2846db32c4d05fe4029f4a30324aad2d2b02028c770d615 -->

```csharp
public readonly struct InnoEngine.Audio.AudioParameterId : System.IEquatable<InnoEngine.Audio.AudioParameterId>
```

Identifies one processor parameter without imposing a processor-specific enum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `#ctor`

<a id="api-2520dedd40c1d1d0"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.#ctor(System.String) d55b498192b770514920e9702226e56abafbc1426cfa1f978a5cabe6f5713043 -->

```csharp
public InnoEngine.Audio.AudioParameterId.AudioParameterId(string value)
```

Creates an open processor parameter identifier.

**Parameter `value`:** Stable parameter name within its processor protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L133).

## `Equals`

<a id="api-48ff6fb5dc86027e"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.Equals(InnoEngine.Audio.AudioParameterId) c04524a56b2d66ce83802e2d442f82d8da54519fb7d8b900b3779d4e07a1c4dd -->

```csharp
public bool InnoEngine.Audio.AudioParameterId.Equals(InnoEngine.Audio.AudioParameterId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `Equals`

<a id="api-b378f6e820a0b2eb"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.Equals(System.Object) ad32b0ab2e1880d305b472e3447bf0152e17aedd7ed5702e37d013c4a6bf78e4 -->

```csharp
public override bool InnoEngine.Audio.AudioParameterId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `GetHashCode`

<a id="api-0d768258aaff5e58"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.GetHashCode 1820e8cde447056489fcd81247301b1e835d0a3db71b662b530f463e9cc4e554 -->

```csharp
public override int InnoEngine.Audio.AudioParameterId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `op_Equality`

<a id="api-a11862e1740bbb3b"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.op_Equality(InnoEngine.Audio.AudioParameterId,InnoEngine.Audio.AudioParameterId) 9e4ea84720485f3ded6f1f42901365b3594114992e64e8d11bd73c20b101fe47 -->

```csharp
public static bool InnoEngine.Audio.AudioParameterId.operator ==(InnoEngine.Audio.AudioParameterId left, InnoEngine.Audio.AudioParameterId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `op_Inequality`

<a id="api-33bd6861b6d6137b"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.op_Inequality(InnoEngine.Audio.AudioParameterId,InnoEngine.Audio.AudioParameterId) 68680316c0d12575e07de52d1ae9dbbcef41fbc33a15deb943308628a9bcbf15 -->

```csharp
public static bool InnoEngine.Audio.AudioParameterId.operator !=(InnoEngine.Audio.AudioParameterId left, InnoEngine.Audio.AudioParameterId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `ToString`

<a id="api-cb4c70fc2273599b"></a>
<!-- api: M:InnoEngine.Audio.AudioParameterId.ToString 428b586d75a2a98a3225d9fb7ad7eafacaef21ccf27e4a40eb40d76b23202c94 -->

```csharp
public override string InnoEngine.Audio.AudioParameterId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L185).

## `decay`

<a id="api-873d725c71e5be8e"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.decay 8661dd0e685a987431616f48837b064d0495e4e29781b081fcf3816b563e95e3 -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.decay { get; }
```

Gets the standard delay feedback decay factor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L167).

## `delayMilliseconds`

<a id="api-33610aeeeb097f35"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.delayMilliseconds db64c9f48bde6a745467cfa6eaa865b1e287a3bb04e49312011852802d8da901 -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.delayMilliseconds { get; }
```

Gets the standard delay duration parameter in milliseconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L162).

## `frequency`

<a id="api-b3063b0b83517008"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.frequency 5165965c19da2914f44606524694c9d9891a537715520f964998181a77c9b387 -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.frequency { get; }
```

Gets the standard cutoff or center-frequency parameter in hertz.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L142).

## `gainDecibels`

<a id="api-9638e85902362aa4"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.gainDecibels 1ee286fd4cb8ea921c730700c06cf7e5ba3ba0a263aeac4526e628e916a84150 -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.gainDecibels { get; }
```

Gets the standard equalizer gain parameter in decibels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L152).

## `isValid`

<a id="api-7b989da66d5cfb84"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.isValid a528fc48f92d0798a5a89a83c0c18d89c763023bb5986a8edf03219dcdf870a3 -->

```csharp
public bool InnoEngine.Audio.AudioParameterId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L177).

## `quality`

<a id="api-eea7af2797e6f5d2"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.quality 50fdd4e35449d67cd2f8e04f728e00180c2459bfa981fc159ce5f198b2d5ed4e -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.quality { get; }
```

Gets the standard filter quality-factor parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L147).

## `shelfSlope`

<a id="api-ec0a005cca7dd582"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.shelfSlope 46642b648b9ca2610c54bea7104f30e35ba0d6c4144406a7e7b577c8b9f108e7 -->

```csharp
public static InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioParameterId.shelfSlope { get; }
```

Gets the standard equalizer shelf-slope parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L157).

## `value`

<a id="api-a8fac95b154b3bdd"></a>
<!-- api: P:InnoEngine.Audio.AudioParameterId.value 201a5c960cb902f0d597df31d66adf793247143cd5110ee6c15c2d3ca4d7bb1e -->

```csharp
public string InnoEngine.Audio.AudioParameterId.value { get; }
```

Gets the stable parameter protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L172).
