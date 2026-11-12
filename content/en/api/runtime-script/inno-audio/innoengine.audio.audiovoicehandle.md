---
title: "AudioVoiceHandle"
description: "Reference for AudioVoiceHandle in Inno.Audio."
uid: api.inno.audio.runtime-script.6cf81de2ecdb974e
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioVoiceHandle`

This reference describes `AudioVoiceHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioVoiceHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-2f2cc26cfac495c5) | Method |
| [`Equals`](#api-8e849be36be37aa6) | Method |
| [`GetHashCode`](#api-3aefaa6d924ac68e) | Method |
| [`op_Equality`](#api-f9a379677401ab72) | Method |
| [`op_Inequality`](#api-ced8d5e162718469) | Method |
| [`ToString`](#api-1d445152ea90bdb2) | Method |
| [`isValid`](#api-580c085950325347) | Property |
| [`ownerGeneration`](#api-d632a338d2889edd) | Property |

## Type declaration

<a id="api-6cf81de2ecdb974e"></a>
<!-- api: T:InnoEngine.Audio.AudioVoiceHandle c71b7503404391da2a3a98056c9318ecb9c5288efb0d5db355607d0a7282f317 -->

```csharp
public readonly struct InnoEngine.Audio.AudioVoiceHandle : System.IEquatable<InnoEngine.Audio.AudioVoiceHandle>
```

Identifies one playback voice within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `Equals`

<a id="api-2f2cc26cfac495c5"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.Equals(InnoEngine.Audio.AudioVoiceHandle) b657d0fe113dc4be62ce5853a39e6d36e3b8b4d3456c9a744d33771d6483c3f8 -->

```csharp
public bool InnoEngine.Audio.AudioVoiceHandle.Equals(InnoEngine.Audio.AudioVoiceHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `Equals`

<a id="api-8e849be36be37aa6"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.Equals(System.Object) c15fa306981de31d42a84efa597b3a83ad716a701b0d8442ef193899b3dccb00 -->

```csharp
public override bool InnoEngine.Audio.AudioVoiceHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `GetHashCode`

<a id="api-3aefaa6d924ac68e"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.GetHashCode 1f66de2eca68b97004435f0fb828cfe76086bbf4229c5e80f2d322d1d3a594ba -->

```csharp
public override int InnoEngine.Audio.AudioVoiceHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `op_Equality`

<a id="api-f9a379677401ab72"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.op_Equality(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioVoiceHandle) 9d1f2a61b24ee1c7127cd4dc3d8ef72e2d42d987444b2fc2837613474e5b9def -->

```csharp
public static bool InnoEngine.Audio.AudioVoiceHandle.operator ==(InnoEngine.Audio.AudioVoiceHandle left, InnoEngine.Audio.AudioVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `op_Inequality`

<a id="api-ced8d5e162718469"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.op_Inequality(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioVoiceHandle) 04e626a3acf4bce116132292c060b8c7b6c1728b1da82242e6933552edcbed2c -->

```csharp
public static bool InnoEngine.Audio.AudioVoiceHandle.operator !=(InnoEngine.Audio.AudioVoiceHandle left, InnoEngine.Audio.AudioVoiceHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `ToString`

<a id="api-1d445152ea90bdb2"></a>
<!-- api: M:InnoEngine.Audio.AudioVoiceHandle.ToString 34bd0eb8d007590043c7e28853b614a3a185d7bf6bc01191b0fd05a98e915eec -->

```csharp
public override string InnoEngine.Audio.AudioVoiceHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L32).

## `isValid`

<a id="api-580c085950325347"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceHandle.isValid 83332670bd8f924ed14cced3f9b9b3ecd0368a3d34f3f6bd897bfef1c71ea6aa -->

```csharp
public bool InnoEngine.Audio.AudioVoiceHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L52).

## `ownerGeneration`

<a id="api-d632a338d2889edd"></a>
<!-- api: P:InnoEngine.Audio.AudioVoiceHandle.ownerGeneration 3a8db5b195465935d1e3f8f79c8f0d8075bfc76f82e6d0efa283619d90c0b94a -->

```csharp
public uint InnoEngine.Audio.AudioVoiceHandle.ownerGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L47).
