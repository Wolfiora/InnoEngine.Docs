---
title: "AudioParameterId"
description: "Reference for AudioParameterId in Inno.Audio."
uid: api.inno.audio.21b5a5f1deff98d6
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioParameterId`

This reference describes `AudioParameterId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioParameterId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a2478b7eefa17e06) | Method |
| [`Equals`](#api-32afb6008606fc5c) | Method |
| [`Equals`](#api-0a76bfcd7f998679) | Method |
| [`GetHashCode`](#api-9168abe7c362095e) | Method |
| [`op_Equality`](#api-e0f1bff3c49b68e7) | Method |
| [`op_Inequality`](#api-2d6ce6dd3884a04d) | Method |
| [`ToString`](#api-77d36da41a70f706) | Method |
| [`decay`](#api-6ddecb8d7f1684b3) | Property |
| [`delayMilliseconds`](#api-c2260b95a74a3671) | Property |
| [`frequency`](#api-9988c10129de6cab) | Property |
| [`gainDecibels`](#api-d6398f3275f3c1c5) | Property |
| [`isValid`](#api-8badecf58f440ef1) | Property |
| [`quality`](#api-b4370bb4eb660c77) | Property |
| [`shelfSlope`](#api-233e0c69b868be5f) | Property |
| [`value`](#api-dd76aa8694669af7) | Property |

## Type declaration

<a id="api-21b5a5f1deff98d6"></a>
<!-- api: T:Inno.Audio.AudioParameterId 63dd5fdb84bfc3708372647acf0ff380da9714dcd2c7c7ded714ea4df103f388 -->

```csharp
public readonly record struct Inno.Audio.AudioParameterId : System.IEquatable<Inno.Audio.AudioParameterId>
```

Identifies one processor parameter without imposing a processor-specific enum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `#ctor`

<a id="api-a2478b7eefa17e06"></a>
<!-- api: M:Inno.Audio.AudioParameterId.#ctor(System.String) 01bc9182eb096cbfcb7b5e613717c1247aa0ea70e580b79e049801a49492ed84 -->

```csharp
public Inno.Audio.AudioParameterId.AudioParameterId(string value)
```

Creates an open processor parameter identifier.

**Parameter `value`:** Stable parameter name within its processor protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L133).

## `Equals`

<a id="api-32afb6008606fc5c"></a>
<!-- api: M:Inno.Audio.AudioParameterId.Equals(Inno.Audio.AudioParameterId) 863590205f7b3e50a8f35d3bb0099302a17e58cb789d87b3ed4c5d323bc6f90e -->

```csharp
public bool Inno.Audio.AudioParameterId.Equals(Inno.Audio.AudioParameterId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `Equals`

<a id="api-0a76bfcd7f998679"></a>
<!-- api: M:Inno.Audio.AudioParameterId.Equals(System.Object) f5e7caf13cd16f661052715ed973614e5a8833163225a8b7d3f4be2c9cb398d5 -->

```csharp
public override bool Inno.Audio.AudioParameterId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `GetHashCode`

<a id="api-9168abe7c362095e"></a>
<!-- api: M:Inno.Audio.AudioParameterId.GetHashCode 68b847adf3dfc3c7147a912e2bc14f10ecc9055c3d4df7983d27198bf30267f4 -->

```csharp
public override int Inno.Audio.AudioParameterId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `op_Equality`

<a id="api-e0f1bff3c49b68e7"></a>
<!-- api: M:Inno.Audio.AudioParameterId.op_Equality(Inno.Audio.AudioParameterId,Inno.Audio.AudioParameterId) e39fd09f2489e9f6ba5b9c6280dff83f1ded2241f12030fcbf79f69fe7dfe96c -->

```csharp
public static bool Inno.Audio.AudioParameterId.operator ==(Inno.Audio.AudioParameterId left, Inno.Audio.AudioParameterId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `op_Inequality`

<a id="api-2d6ce6dd3884a04d"></a>
<!-- api: M:Inno.Audio.AudioParameterId.op_Inequality(Inno.Audio.AudioParameterId,Inno.Audio.AudioParameterId) aec293749e326bdbc5cf98f3b7d3adc8e4a0bae65625a6e2744e4873f135b304 -->

```csharp
public static bool Inno.Audio.AudioParameterId.operator !=(Inno.Audio.AudioParameterId left, Inno.Audio.AudioParameterId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L125).

## `ToString`

<a id="api-77d36da41a70f706"></a>
<!-- api: M:Inno.Audio.AudioParameterId.ToString e2439645abe7dc8a6923486fbc1d5856cd8681783d65176a49455eb505710d61 -->

```csharp
public override string Inno.Audio.AudioParameterId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L185).

## `decay`

<a id="api-6ddecb8d7f1684b3"></a>
<!-- api: P:Inno.Audio.AudioParameterId.decay 04fe22e5999d50feadc08fbb2f6914263c1f5e1020d8fd6fefbb1db056c699d5 -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.decay { get; }
```

Gets the standard delay feedback decay factor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L167).

## `delayMilliseconds`

<a id="api-c2260b95a74a3671"></a>
<!-- api: P:Inno.Audio.AudioParameterId.delayMilliseconds cdd830b2660f185ffd2ebafc4ae838169f4a163c62673076a92f9d11ebd0a8a9 -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.delayMilliseconds { get; }
```

Gets the standard delay duration parameter in milliseconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L162).

## `frequency`

<a id="api-9988c10129de6cab"></a>
<!-- api: P:Inno.Audio.AudioParameterId.frequency a43358c5d8127b265d3b82072982739a9dc6543fab698a95cf05a7afc1150fcd -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.frequency { get; }
```

Gets the standard cutoff or center-frequency parameter in hertz.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L142).

## `gainDecibels`

<a id="api-d6398f3275f3c1c5"></a>
<!-- api: P:Inno.Audio.AudioParameterId.gainDecibels cb29035c9b7e8b205e38b2d7c0d51875fc44e10a3ff34858e3a325ddc4471dbd -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.gainDecibels { get; }
```

Gets the standard equalizer gain parameter in decibels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L152).

## `isValid`

<a id="api-8badecf58f440ef1"></a>
<!-- api: P:Inno.Audio.AudioParameterId.isValid 551caca74844e7c5e6da604ae7ba63a9ed440ec6cf72ae86c4c0a184279d1c7c -->

```csharp
public bool Inno.Audio.AudioParameterId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L177).

## `quality`

<a id="api-b4370bb4eb660c77"></a>
<!-- api: P:Inno.Audio.AudioParameterId.quality bba2690d3cd30e04ed1b66af41d9f0ab3b1b5a2368cea0f24420f4878a07fb5d -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.quality { get; }
```

Gets the standard filter quality-factor parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L147).

## `shelfSlope`

<a id="api-233e0c69b868be5f"></a>
<!-- api: P:Inno.Audio.AudioParameterId.shelfSlope cd6d8d645b2380e9829d5ea5bd8b81c92b788ec8409cdae17cdccef69d962d5d -->

```csharp
public static Inno.Audio.AudioParameterId Inno.Audio.AudioParameterId.shelfSlope { get; }
```

Gets the standard equalizer shelf-slope parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L157).

## `value`

<a id="api-dd76aa8694669af7"></a>
<!-- api: P:Inno.Audio.AudioParameterId.value 3636611e03a57f97594455bc20ec472a3bdbbf00d75cf84ff31f6d8ce69d54b7 -->

```csharp
public string Inno.Audio.AudioParameterId.value { get; }
```

Gets the stable parameter protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L172).
