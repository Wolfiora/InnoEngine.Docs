---
title: "AudioCapabilities"
description: "Reference for AudioCapabilities in Inno.Audio."
uid: api.inno.audio.cd4ea04a8fa9a65f
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioCapabilities`

This reference describes `AudioCapabilities` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioCapabilities>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-027e52720f29e16a) | Method |
| [`Equals`](#api-119ab8fb9e6df3d8) | Method |
| [`Equals`](#api-6c865316b6d8d084) | Method |
| [`GetHashCode`](#api-484673beed8f8f93) | Method |
| [`op_Equality`](#api-f16ea01765cd7b66) | Method |
| [`op_Inequality`](#api-20104eb1a92f3c80) | Method |
| [`ToString`](#api-1c53d9b3b6215469) | Method |
| [`maxListeners`](#api-7d5f6f224bb9d604) | Property |
| [`sampleRate`](#api-c20783589f6bb507) | Property |
| [`supportsScheduledPlayback`](#api-452cd1ec9f2bfdbe) | Property |
| [`supportsSpatialAudio`](#api-8ef30c38f0e29737) | Property |
| [`supportsStreaming`](#api-7865a114f7a326c2) | Property |

## Type declaration

<a id="api-cd4ea04a8fa9a65f"></a>
<!-- api: T:Inno.Audio.AudioCapabilities c1bc0476669fe5f1969d7279355d6302e43071accd746e8950d92fed27f4d5be -->

```csharp
public sealed record Inno.Audio.AudioCapabilities : System.IEquatable<Inno.Audio.AudioCapabilities>
```

Describes backend-neutral features and limits for one device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `#ctor`

<a id="api-027e52720f29e16a"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Int32,System.Int32) 7d699ae5a5fbb419204b86a0958e3983392fa3299cbe94bb8b4af3f3c3344541 -->

```csharp
public Inno.Audio.AudioCapabilities.AudioCapabilities(bool supportsStreaming, bool supportsScheduledPlayback, bool supportsSpatialAudio, int maxListeners, int sampleRate)
```

Creates an immutable audio capability snapshot.

**Parameter `supportsStreaming`:** Whether clips can be decoded incrementally.

**Parameter `supportsScheduledPlayback`:** Whether voices can start against the audio clock.

**Parameter `supportsSpatialAudio`:** Whether listener-relative spatial playback is available.

**Parameter `maxListeners`:** Maximum simultaneously active listeners.

**Parameter `sampleRate`:** Device output sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L174).

## `Equals`

<a id="api-119ab8fb9e6df3d8"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.Equals(Inno.Audio.AudioCapabilities) 2360a26bc663294cca5ceed600a6fc6d4ba34761cf722b7bd98beb831c325a63 -->

```csharp
public bool Inno.Audio.AudioCapabilities.Equals(Inno.Audio.AudioCapabilities? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `Equals`

<a id="api-6c865316b6d8d084"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.Equals(System.Object) eee8fadca9a0256a23f6d3ec259903329a455b3ea8352bdbe5166b9cf50841e0 -->

```csharp
public override bool Inno.Audio.AudioCapabilities.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `GetHashCode`

<a id="api-484673beed8f8f93"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.GetHashCode e53fb88e55233ff009f99e930ce4397b41da6124975c6e85cf062f217e21ead8 -->

```csharp
public override int Inno.Audio.AudioCapabilities.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `op_Equality`

<a id="api-f16ea01765cd7b66"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.op_Equality(Inno.Audio.AudioCapabilities,Inno.Audio.AudioCapabilities) 3f4ae874fa24f8f1e616f2e12d7c3f4bd0b4605fba680fa2530bf79779a93d5f -->

```csharp
public static bool Inno.Audio.AudioCapabilities.operator ==(Inno.Audio.AudioCapabilities? left, Inno.Audio.AudioCapabilities? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `op_Inequality`

<a id="api-20104eb1a92f3c80"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.op_Inequality(Inno.Audio.AudioCapabilities,Inno.Audio.AudioCapabilities) a7cca98afe1fb9284320a5c6254db4d97dcfc0fca6ad903b8eaae032d2635144 -->

```csharp
public static bool Inno.Audio.AudioCapabilities.operator !=(Inno.Audio.AudioCapabilities? left, Inno.Audio.AudioCapabilities? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `ToString`

<a id="api-1c53d9b3b6215469"></a>
<!-- api: M:Inno.Audio.AudioCapabilities.ToString 8f072c9c839f9a640a23d8044266e0d7eac09cdb1d6610448ca684ca93bdbcc3 -->

```csharp
public override string Inno.Audio.AudioCapabilities.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `maxListeners`

<a id="api-7d5f6f224bb9d604"></a>
<!-- api: P:Inno.Audio.AudioCapabilities.maxListeners a276547ee7e2509b04336b5c5fbd580a31d90d6efe32c22d0add3138efa9fd85 -->

```csharp
public int Inno.Audio.AudioCapabilities.maxListeners { get; }
```

Gets the maximum simultaneously active listener count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L208).

## `sampleRate`

<a id="api-c20783589f6bb507"></a>
<!-- api: P:Inno.Audio.AudioCapabilities.sampleRate 78855b506ed11baef51cde56e000a77b24eeea74d86403a069fd573eb1e72f56 -->

```csharp
public int Inno.Audio.AudioCapabilities.sampleRate { get; }
```

Gets the output sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L213).

## `supportsScheduledPlayback`

<a id="api-452cd1ec9f2bfdbe"></a>
<!-- api: P:Inno.Audio.AudioCapabilities.supportsScheduledPlayback 903068cc2504758564ced0d85d2cbd53a3ad175dd7028f9dda842595bcbe863f -->

```csharp
public bool Inno.Audio.AudioCapabilities.supportsScheduledPlayback { get; }
```

Gets whether voices can start against the audio clock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L198).

## `supportsSpatialAudio`

<a id="api-8ef30c38f0e29737"></a>
<!-- api: P:Inno.Audio.AudioCapabilities.supportsSpatialAudio 71068a8d2b90d38513eac4db6e29bb1b33912c89d80e397989f6c48fedb5a2f7 -->

```csharp
public bool Inno.Audio.AudioCapabilities.supportsSpatialAudio { get; }
```

Gets whether listener-relative spatial playback is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L203).

## `supportsStreaming`

<a id="api-7865a114f7a326c2"></a>
<!-- api: P:Inno.Audio.AudioCapabilities.supportsStreaming b460dbd8e429cabdd227b968097be0c1e2a9c1b3b6eba33bdcb5da6e19b9dd50 -->

```csharp
public bool Inno.Audio.AudioCapabilities.supportsStreaming { get; }
```

Gets whether clips can be decoded incrementally.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioTypes.cs#L193).
