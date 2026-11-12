---
title: "AudioEmitterSnapshot"
description: "Reference for AudioEmitterSnapshot in Inno.Audio."
uid: api.inno.audio.runtime-script.b9f12ff7da0d8fd1
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioEmitterSnapshot`

This reference describes `AudioEmitterSnapshot` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioEmitterSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-81cc470046b9a5c0) | Method |
| [`Equals`](#api-5c8e9a7a750c160f) | Method |
| [`Equals`](#api-f403c91745cd1bac) | Method |
| [`GetHashCode`](#api-c9a0a8b14152f728) | Method |
| [`op_Equality`](#api-5cb4dced046cf308) | Method |
| [`op_Inequality`](#api-971c3b9c85873d28) | Method |
| [`ToString`](#api-5f4b1faf7049c82d) | Method |
| [`clip`](#api-22e11b6822bac76b) | Property |
| [`id`](#api-a35e59df20f4ae67) | Property |
| [`options`](#api-ddde5d3974507de6) | Property |
| [`playbackRevision`](#api-81ef4a448a22d4fb) | Property |
| [`shouldPlay`](#api-e6b6daa255570a15) | Property |

## Type declaration

<a id="api-b9f12ff7da0d8fd1"></a>
<!-- api: T:InnoEngine.Audio.AudioEmitterSnapshot f0c956c4e1da75185e93ea29e96c8eff23a2177a0212cbeb1fdcf1d0e48dae56 -->

```csharp
public readonly struct InnoEngine.Audio.AudioEmitterSnapshot : System.IEquatable<InnoEngine.Audio.AudioEmitterSnapshot>
```

Describes one immutable source playback request produced by a content provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `#ctor`

<a id="api-81cc470046b9a5c0"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.#ctor(System.Guid,InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioPlayOptions,System.Boolean,System.UInt64) 1663fbc483c4967dbff02342c525aafcacfb67af26f7d44483f649393f81a852 -->

```csharp
public InnoEngine.Audio.AudioEmitterSnapshot.AudioEmitterSnapshot(System.Guid id, InnoEngine.Audio.AudioClipAsset clip, InnoEngine.Audio.AudioPlayOptions options, bool shouldPlay, ulong playbackRevision = 0)
```

Creates an immutable emitter snapshot.

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L28).

## `Equals`

<a id="api-5c8e9a7a750c160f"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.Equals(InnoEngine.Audio.AudioEmitterSnapshot) 6279073cbee6d48c72b806e16cab0dffaead8b97628863783de5ceccc8e807c2 -->

```csharp
public bool InnoEngine.Audio.AudioEmitterSnapshot.Equals(InnoEngine.Audio.AudioEmitterSnapshot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `Equals`

<a id="api-f403c91745cd1bac"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.Equals(System.Object) 3e36ed3afe7ba7848e59086a4f45b881d84ecfeb5c217e9e2828ba256f13809e -->

```csharp
public override bool InnoEngine.Audio.AudioEmitterSnapshot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `GetHashCode`

<a id="api-c9a0a8b14152f728"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.GetHashCode 3a2ae175cb5273df4414e16b5e83975f0f016245bc8c14ccf624e0e6b872bb50 -->

```csharp
public override int InnoEngine.Audio.AudioEmitterSnapshot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `op_Equality`

<a id="api-5cb4dced046cf308"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.op_Equality(InnoEngine.Audio.AudioEmitterSnapshot,InnoEngine.Audio.AudioEmitterSnapshot) d9bb75745c6adeb509eafdb9d7da6058de7407f7bf1801058acd092bdbda57d6 -->

```csharp
public static bool InnoEngine.Audio.AudioEmitterSnapshot.operator ==(InnoEngine.Audio.AudioEmitterSnapshot left, InnoEngine.Audio.AudioEmitterSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `op_Inequality`

<a id="api-971c3b9c85873d28"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.op_Inequality(InnoEngine.Audio.AudioEmitterSnapshot,InnoEngine.Audio.AudioEmitterSnapshot) 27d9f419d4f86295b930878433d159a3df1cb167b1e2c3df199a6b49f5f7ee6d -->

```csharp
public static bool InnoEngine.Audio.AudioEmitterSnapshot.operator !=(InnoEngine.Audio.AudioEmitterSnapshot left, InnoEngine.Audio.AudioEmitterSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `ToString`

<a id="api-5f4b1faf7049c82d"></a>
<!-- api: M:InnoEngine.Audio.AudioEmitterSnapshot.ToString 1d221b54644a649b27f49befd3306e48eb8ae09995dec8aed27127e0e754ede3 -->

```csharp
public override string InnoEngine.Audio.AudioEmitterSnapshot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L8).

## `clip`

<a id="api-22e11b6822bac76b"></a>
<!-- api: P:InnoEngine.Audio.AudioEmitterSnapshot.clip 3ab8d55600911ecb3f8f04fcd6eb847bcf44afd2140c93d9270e448e138e8cb0 -->

```csharp
public InnoEngine.Audio.AudioClipAsset InnoEngine.Audio.AudioEmitterSnapshot.clip { get; }
```

Gets the imported clip requested by the emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L52).

## `id`

<a id="api-a35e59df20f4ae67"></a>
<!-- api: P:InnoEngine.Audio.AudioEmitterSnapshot.id 8633d54c8ed1e66832594424df2ae54ee4f4b26299c6eb60b182bda1873f2db2 -->

```csharp
public System.Guid InnoEngine.Audio.AudioEmitterSnapshot.id { get; }
```

Gets the stable emitter identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L47).

## `options`

<a id="api-ddde5d3974507de6"></a>
<!-- api: P:InnoEngine.Audio.AudioEmitterSnapshot.options b897a150fbe884d50be6fcd4af256b6a12a31edcf4d3af6325dcff0a65cf0b05 -->

```csharp
public InnoEngine.Audio.AudioPlayOptions InnoEngine.Audio.AudioEmitterSnapshot.options { get; }
```

Gets current playback and spatial parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L57).

## `playbackRevision`

<a id="api-81ef4a448a22d4fb"></a>
<!-- api: P:InnoEngine.Audio.AudioEmitterSnapshot.playbackRevision e1cc639071999f318b1451edb7a327ade7f99dc417874db42bca5060f00fd26c -->

```csharp
public ulong InnoEngine.Audio.AudioEmitterSnapshot.playbackRevision { get; }
```

Gets the source-owned revision that distinguishes explicit replay requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L67).

## `shouldPlay`

<a id="api-e6b6daa255570a15"></a>
<!-- api: P:InnoEngine.Audio.AudioEmitterSnapshot.shouldPlay 6be7915a32c4178b01341e15cb88cf7dc5f648007cc32365a9175cbfa7c2cbc7 -->

```csharp
public bool InnoEngine.Audio.AudioEmitterSnapshot.shouldPlay { get; }
```

Gets whether the runtime should retain active playback for this emitter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L62).
