---
title: "AudioEmitterSnapshot"
description: "Reference for AudioEmitterSnapshot in Inno.Audio."
uid: api.inno.audio.16062f4b2f6f3410
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioEmitterSnapshot`

This reference describes `AudioEmitterSnapshot` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.AudioEmitterSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0526ee28b075436d) | Method |
| [`Equals`](#api-a6e3f5e9e63c910c) | Method |
| [`Equals`](#api-be88efb2ff52cc04) | Method |
| [`GetHashCode`](#api-c8cbe1c1ba3983d7) | Method |
| [`op_Equality`](#api-736067c5c30a11a1) | Method |
| [`op_Inequality`](#api-2b44d8b2c79e0ea8) | Method |
| [`ToString`](#api-3c8e3557fbc82882) | Method |
| [`clip`](#api-204af293cc91cebb) | Property |
| [`id`](#api-2ffed87d8e37344c) | Property |
| [`options`](#api-2d8bdef20b33aa19) | Property |
| [`playbackRevision`](#api-459c183fcd840134) | Property |
| [`shouldPlay`](#api-c74fd04eebbc331a) | Property |

## Type declaration

<a id="api-16062f4b2f6f3410"></a>
<!-- api: T:Inno.Audio.AudioEmitterSnapshot ba7c75c14dc19920c0cced8a4bace95a6846d6eaf3eb235e8b62fdb16794d57f -->

```csharp
public readonly record struct Inno.Audio.AudioEmitterSnapshot : System.IEquatable<Inno.Audio.AudioEmitterSnapshot>
```

Describes one immutable source playback request produced by a content provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `#ctor`

<a id="api-0526ee28b075436d"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.#ctor(System.Guid,Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions,System.Boolean,System.UInt64) 7e276c04ca0a631330991fb74b7c924039a17c9453b1558f46284482af86a515 -->

```csharp
public Inno.Audio.AudioEmitterSnapshot.AudioEmitterSnapshot(System.Guid id, Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions options, bool shouldPlay, ulong playbackRevision = 0)
```

Creates an immutable emitter snapshot.

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L28).

## `Equals`

<a id="api-a6e3f5e9e63c910c"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.Equals(Inno.Audio.AudioEmitterSnapshot) d8492fabc1777f2e241e3b729f8cae0769a09cc029b125a4f9b54b849226e3bd -->

```csharp
public bool Inno.Audio.AudioEmitterSnapshot.Equals(Inno.Audio.AudioEmitterSnapshot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `Equals`

<a id="api-be88efb2ff52cc04"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.Equals(System.Object) 12fd0434607dad94765de20759801dcde110c1e1a98797d1a400004c2c0d7fff -->

```csharp
public override bool Inno.Audio.AudioEmitterSnapshot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `GetHashCode`

<a id="api-c8cbe1c1ba3983d7"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.GetHashCode bc24aeb517aae5bb13cb70337d1094f00f718b3864d9fdeee57e9281eda0dae7 -->

```csharp
public override int Inno.Audio.AudioEmitterSnapshot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `op_Equality`

<a id="api-736067c5c30a11a1"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.op_Equality(Inno.Audio.AudioEmitterSnapshot,Inno.Audio.AudioEmitterSnapshot) d7c8cd37aaf9a2fd5dcf42d42f097fcbd026fd27303aa61003ae244d9eb0118a -->

```csharp
public static bool Inno.Audio.AudioEmitterSnapshot.operator ==(Inno.Audio.AudioEmitterSnapshot left, Inno.Audio.AudioEmitterSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `op_Inequality`

<a id="api-2b44d8b2c79e0ea8"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.op_Inequality(Inno.Audio.AudioEmitterSnapshot,Inno.Audio.AudioEmitterSnapshot) bb6822f08100e2d3866ec756ffd1168b563b097f766dde13186cd41982a26b42 -->

```csharp
public static bool Inno.Audio.AudioEmitterSnapshot.operator !=(Inno.Audio.AudioEmitterSnapshot left, Inno.Audio.AudioEmitterSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `ToString`

<a id="api-3c8e3557fbc82882"></a>
<!-- api: M:Inno.Audio.AudioEmitterSnapshot.ToString 48c20f4a0360f13f01884d431752a8c331e372ebef9fb91f3f2cbf7d4c4ede93 -->

```csharp
public override string Inno.Audio.AudioEmitterSnapshot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `clip`

<a id="api-204af293cc91cebb"></a>
<!-- api: P:Inno.Audio.AudioEmitterSnapshot.clip 98d13904bc66a4bd1c7871d8e5669ce564255272650a23e5074c9216182a3a14 -->

```csharp
public Inno.Audio.AudioClipAsset Inno.Audio.AudioEmitterSnapshot.clip { get; }
```

Gets the imported clip requested by the emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L52).

## `id`

<a id="api-2ffed87d8e37344c"></a>
<!-- api: P:Inno.Audio.AudioEmitterSnapshot.id c4c6565e610c7a7bac99f9320c2f6ec177d260cd3f653820e61bf50a74731574 -->

```csharp
public System.Guid Inno.Audio.AudioEmitterSnapshot.id { get; }
```

Gets the stable emitter identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L47).

## `options`

<a id="api-2d8bdef20b33aa19"></a>
<!-- api: P:Inno.Audio.AudioEmitterSnapshot.options 918f1dafcde5981a6b57efffc1912633f26a3f467ea216c84b9faf2aff4a5a27 -->

```csharp
public Inno.Audio.AudioPlayOptions Inno.Audio.AudioEmitterSnapshot.options { get; }
```

Gets current playback and spatial parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L57).

## `playbackRevision`

<a id="api-459c183fcd840134"></a>
<!-- api: P:Inno.Audio.AudioEmitterSnapshot.playbackRevision 8714dda52b8580804acde7c0449c02809e0567c6331e7fa50284af0b5252e66b -->

```csharp
public ulong Inno.Audio.AudioEmitterSnapshot.playbackRevision { get; }
```

Gets the source-owned revision that distinguishes explicit replay requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L67).

## `shouldPlay`

<a id="api-c74fd04eebbc331a"></a>
<!-- api: P:Inno.Audio.AudioEmitterSnapshot.shouldPlay 531a4323be1e4a8485e2bb16bdb094bb5b31f09376b3d832624d6a486bde3ed6 -->

```csharp
public bool Inno.Audio.AudioEmitterSnapshot.shouldPlay { get; }
```

Gets whether the runtime should retain active playback for this emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContent.cs#L62).
