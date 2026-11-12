---
title: "AudioListenerSnapshot"
description: "Reference for AudioListenerSnapshot in Inno.Audio."
uid: api.inno.audio.runtime-script.088a9b472145e820
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioListenerSnapshot`

This reference describes `AudioListenerSnapshot` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioListenerSnapshot>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f18edd1c768add1c) | Method |
| [`Equals`](#api-5027c9de886cea01) | Method |
| [`Equals`](#api-a39e5dbcd1390286) | Method |
| [`GetHashCode`](#api-e96f05e2b68c7457) | Method |
| [`op_Equality`](#api-0386a4eea34556ef) | Method |
| [`op_Inequality`](#api-82aa9d8cca32503c) | Method |
| [`ToString`](#api-8daa6685281a95d5) | Method |
| [`active`](#api-7e469107e319bdaa) | Property |
| [`id`](#api-bb78f67371b0746f) | Property |
| [`priority`](#api-1040c19c6f39984c) | Property |
| [`state`](#api-353a479220382340) | Property |

## Type declaration

<a id="api-088a9b472145e820"></a>
<!-- api: T:InnoEngine.Audio.AudioListenerSnapshot abbda818d7e56c81b8dd117d333790f9f34f84f87582542a919a3db77258abf8 -->

```csharp
public readonly struct InnoEngine.Audio.AudioListenerSnapshot : System.IEquatable<InnoEngine.Audio.AudioListenerSnapshot>
```

Describes one immutable listener candidate produced by a content provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `#ctor`

<a id="api-f18edd1c768add1c"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.#ctor(System.Guid,System.Int32,InnoEngine.Audio.AudioListenerState,System.Boolean) d4c35d4ad60d7b3ff91ef8869946cf0686a969988a4987986719c861b7fd0b16 -->

```csharp
public InnoEngine.Audio.AudioListenerSnapshot.AudioListenerSnapshot(System.Guid id, int priority, InnoEngine.Audio.AudioListenerState state, bool active)
```

Creates an immutable listener snapshot.

**Parameter `id`:** Stable listener identity across updates.

**Parameter `priority`:** Selection priority; larger values win.

**Parameter `state`:** Current listener transform.

**Parameter `active`:** Whether the listener is eligible for selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L90).

## `Equals`

<a id="api-5027c9de886cea01"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.Equals(InnoEngine.Audio.AudioListenerSnapshot) e009f48d4f4809addf7b632b7c90c2bf3ff5e8a40fe61dc48a16d3f7ede7b2e2 -->

```csharp
public bool InnoEngine.Audio.AudioListenerSnapshot.Equals(InnoEngine.Audio.AudioListenerSnapshot other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `Equals`

<a id="api-a39e5dbcd1390286"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.Equals(System.Object) f7405746ec7f984e050127efdff04c0d8e23dfce688409a1be7808abb30be34e -->

```csharp
public override bool InnoEngine.Audio.AudioListenerSnapshot.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `GetHashCode`

<a id="api-e96f05e2b68c7457"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.GetHashCode 743f92a362014a86d65846dfded4b64a582e76b7ec85762e7284e053b912d94b -->

```csharp
public override int InnoEngine.Audio.AudioListenerSnapshot.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `op_Equality`

<a id="api-0386a4eea34556ef"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.op_Equality(InnoEngine.Audio.AudioListenerSnapshot,InnoEngine.Audio.AudioListenerSnapshot) 9a924424eca15b6d3a1173cf00bb461e38bf39cc8ecf303dcf61e48b40cca4ec -->

```csharp
public static bool InnoEngine.Audio.AudioListenerSnapshot.operator ==(InnoEngine.Audio.AudioListenerSnapshot left, InnoEngine.Audio.AudioListenerSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `op_Inequality`

<a id="api-82aa9d8cca32503c"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.op_Inequality(InnoEngine.Audio.AudioListenerSnapshot,InnoEngine.Audio.AudioListenerSnapshot) 1475bda3d21a3de7ac4661f9bc4876dd4d3eb7e6ed4ea166fd2b34ae0137576b -->

```csharp
public static bool InnoEngine.Audio.AudioListenerSnapshot.operator !=(InnoEngine.Audio.AudioListenerSnapshot left, InnoEngine.Audio.AudioListenerSnapshot right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `ToString`

<a id="api-8daa6685281a95d5"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerSnapshot.ToString 947f99c7cc168eb71b6ad75fefc20aeef41a6ce3f70702ee5c1e8eaaae6c1c4e -->

```csharp
public override string InnoEngine.Audio.AudioListenerSnapshot.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L73).

## `active`

<a id="api-7e469107e319bdaa"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerSnapshot.active b784afc275ce80e957fd73d597f295aa5ffa22608bdfee2fc8bc3e7f7b01ac96 -->

```csharp
public bool InnoEngine.Audio.AudioListenerSnapshot.active { get; }
```

Gets whether the listener is eligible for selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L122).

## `id`

<a id="api-bb78f67371b0746f"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerSnapshot.id 3b3acf9fce3e49261747f8bac5a4e3e1d6554d1d9c5a083a324412197c2102bc -->

```csharp
public System.Guid InnoEngine.Audio.AudioListenerSnapshot.id { get; }
```

Gets the stable listener identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L107).

## `priority`

<a id="api-1040c19c6f39984c"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerSnapshot.priority 08c348b8e5c0d85eb76de8dcedfe94906eec98004cec1d4e34902096dd6e347e -->

```csharp
public int InnoEngine.Audio.AudioListenerSnapshot.priority { get; }
```

Gets the selection priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L112).

## `state`

<a id="api-353a479220382340"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerSnapshot.state 06f8d88d4ae871e515ce617c2cdb18ae6d14c2923fb2cabe0caba78389e5ae75 -->

```csharp
public InnoEngine.Audio.AudioListenerState InnoEngine.Audio.AudioListenerSnapshot.state { get; }
```

Gets the current listener transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContent.cs#L117).
