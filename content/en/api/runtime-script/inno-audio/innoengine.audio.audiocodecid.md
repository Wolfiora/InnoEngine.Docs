---
title: "AudioCodecId"
description: "Reference for AudioCodecId in Inno.Audio."
uid: api.inno.audio.runtime-script.c09667f0fced64f0
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioCodecId`

This reference describes `AudioCodecId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioCodecId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-659b1169db777567) | Method |
| [`Equals`](#api-f5e5b36cb9a10076) | Method |
| [`Equals`](#api-58b4231745682876) | Method |
| [`GetHashCode`](#api-8a17cd914fb48c9e) | Method |
| [`op_Equality`](#api-7198fdf38e0f5cb5) | Method |
| [`op_Inequality`](#api-5acc871f6d38fb33) | Method |
| [`ToString`](#api-4e09871e199b436a) | Method |
| [`flac`](#api-9374dd12fcee722a) | Property |
| [`isValid`](#api-336e5987d402b3e3) | Property |
| [`mp3`](#api-97e4ae45a4893401) | Property |
| [`value`](#api-275bca4343c07a47) | Property |
| [`wav`](#api-2dfd8cde0c8ffadc) | Property |

## Type declaration

<a id="api-c09667f0fced64f0"></a>
<!-- api: T:InnoEngine.Audio.AudioCodecId 9462080b9b8b2d8ea0a54f358f90288dfcf8090042439227b32269bec8e3e9b6 -->

```csharp
public readonly struct InnoEngine.Audio.AudioCodecId : System.IEquatable<InnoEngine.Audio.AudioCodecId>
```

Identifies encoded audio data without constraining codec providers to a closed enum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `#ctor`

<a id="api-659b1169db777567"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.#ctor(System.String) d4095bcb072f32f7629919bfdff4059894d90ef804a76f96178bb3c808b07411 -->

```csharp
public InnoEngine.Audio.AudioCodecId.AudioCodecId(string value)
```

Creates an open codec identifier.

**Parameter `value`:** Globally stable codec protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L199).

## `Equals`

<a id="api-f5e5b36cb9a10076"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.Equals(InnoEngine.Audio.AudioCodecId) 41c6106225eb520e067c56e215278a32693d0ec0c2c49c571fe0b2caccf8b1c3 -->

```csharp
public bool InnoEngine.Audio.AudioCodecId.Equals(InnoEngine.Audio.AudioCodecId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `Equals`

<a id="api-58b4231745682876"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.Equals(System.Object) 3384cad63f4dcac9b5a3539742bb2c461261e31031701c4ed0e8eb50b5487505 -->

```csharp
public override bool InnoEngine.Audio.AudioCodecId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `GetHashCode`

<a id="api-8a17cd914fb48c9e"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.GetHashCode 04aae717a73ed7354d5e0d1349966270a4d23985eb19b19aabfdbcd28b915970 -->

```csharp
public override int InnoEngine.Audio.AudioCodecId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `op_Equality`

<a id="api-7198fdf38e0f5cb5"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.op_Equality(InnoEngine.Audio.AudioCodecId,InnoEngine.Audio.AudioCodecId) 96d078539fb4876a01d643158b0f80761e89591167703e4fd9315d69f940a610 -->

```csharp
public static bool InnoEngine.Audio.AudioCodecId.operator ==(InnoEngine.Audio.AudioCodecId left, InnoEngine.Audio.AudioCodecId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `op_Inequality`

<a id="api-5acc871f6d38fb33"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.op_Inequality(InnoEngine.Audio.AudioCodecId,InnoEngine.Audio.AudioCodecId) 0897538dbeb0b2ebe353166c99ae7aad5e5ce3ef547d12cc4c1cb9ce7c752779 -->

```csharp
public static bool InnoEngine.Audio.AudioCodecId.operator !=(InnoEngine.Audio.AudioCodecId left, InnoEngine.Audio.AudioCodecId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L191).

## `ToString`

<a id="api-4e09871e199b436a"></a>
<!-- api: M:InnoEngine.Audio.AudioCodecId.ToString f21a5224f7eafd45cb800d73a05f5ff918266c4ff7af8c7213eaedad4818eaa7 -->

```csharp
public override string InnoEngine.Audio.AudioCodecId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L236).

## `flac`

<a id="api-9374dd12fcee722a"></a>
<!-- api: P:InnoEngine.Audio.AudioCodecId.flac 220d1a251615979c0736afc7abd2a337dc4f53146d8d04e436b6368ff78d6312 -->

```csharp
public static InnoEngine.Audio.AudioCodecId InnoEngine.Audio.AudioCodecId.flac { get; }
```

Gets the standard Free Lossless Audio Codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L213).

## `isValid`

<a id="api-336e5987d402b3e3"></a>
<!-- api: P:InnoEngine.Audio.AudioCodecId.isValid 6b6d2e934005f6114a74447774cf7e4708256709b30d3627ad1862978e73406f -->

```csharp
public bool InnoEngine.Audio.AudioCodecId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L228).

## `mp3`

<a id="api-97e4ae45a4893401"></a>
<!-- api: P:InnoEngine.Audio.AudioCodecId.mp3 d5c06c2ebe6fc47098893acbb85dae1481c37f8faf93b48c3f565d9e40815c09 -->

```csharp
public static InnoEngine.Audio.AudioCodecId InnoEngine.Audio.AudioCodecId.mp3 { get; }
```

Gets the standard MPEG Layer III codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L218).

## `value`

<a id="api-275bca4343c07a47"></a>
<!-- api: P:InnoEngine.Audio.AudioCodecId.value f48099b59a849175538ee2eb8763d441166101d342a31291e330346cf831fa2d -->

```csharp
public string InnoEngine.Audio.AudioCodecId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L223).

## `wav`

<a id="api-2dfd8cde0c8ffadc"></a>
<!-- api: P:InnoEngine.Audio.AudioCodecId.wav 7972022ea99b5ffdc8ea2d6b7b537a88d3988de8f76bd2c779efc8c42b4bcff6 -->

```csharp
public static InnoEngine.Audio.AudioCodecId InnoEngine.Audio.AudioCodecId.wav { get; }
```

Gets the standard Waveform Audio codec identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L208).
