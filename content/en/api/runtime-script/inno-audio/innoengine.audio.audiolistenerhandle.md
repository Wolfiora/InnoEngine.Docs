---
title: "AudioListenerHandle"
description: "Reference for AudioListenerHandle in Inno.Audio."
uid: api.inno.audio.runtime-script.7cce49a1ed156e1d
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioListenerHandle`

This reference describes `AudioListenerHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioListenerHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-08d833dd4f89dc64) | Method |
| [`Equals`](#api-92d43bbf6fb165f2) | Method |
| [`GetHashCode`](#api-c838ffeef52565af) | Method |
| [`op_Equality`](#api-a8fe7750b6d6d71c) | Method |
| [`op_Inequality`](#api-837d6e1c8e1cd28e) | Method |
| [`ToString`](#api-676bdd3885041e83) | Method |
| [`deviceGeneration`](#api-a04feccd45828ca5) | Property |
| [`isValid`](#api-0baef857e7074b65) | Property |

## Type declaration

<a id="api-7cce49a1ed156e1d"></a>
<!-- api: T:InnoEngine.Audio.AudioListenerHandle d6ef780be999cf789de55faf5a32785ca15a46a2ea29f975983905c527b4d05e -->

```csharp
public readonly struct InnoEngine.Audio.AudioListenerHandle : System.IEquatable<InnoEngine.Audio.AudioListenerHandle>
```

Identifies one spatial listener within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `Equals`

<a id="api-08d833dd4f89dc64"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.Equals(InnoEngine.Audio.AudioListenerHandle) 0ac0e5865d2f3b8902ea8700518cafd8d357c3569fecf25d7a8081cb3dea473d -->

```csharp
public bool InnoEngine.Audio.AudioListenerHandle.Equals(InnoEngine.Audio.AudioListenerHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `Equals`

<a id="api-92d43bbf6fb165f2"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.Equals(System.Object) 27a4fa770faa9d5c15db10a258ebca3cea14bd2d38b772b59e950a5bb78e7dc1 -->

```csharp
public override bool InnoEngine.Audio.AudioListenerHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `GetHashCode`

<a id="api-c838ffeef52565af"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.GetHashCode 2313832407aaa21b723fcccb00e7f144cdae5c9400d2e5c0cc2e82d15eb20344 -->

```csharp
public override int InnoEngine.Audio.AudioListenerHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `op_Equality`

<a id="api-a8fe7750b6d6d71c"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.op_Equality(InnoEngine.Audio.AudioListenerHandle,InnoEngine.Audio.AudioListenerHandle) 670b9e7e9c21401bc3a1e0a6a80ace10a72b9434396e5eb51af11275f5c820b1 -->

```csharp
public static bool InnoEngine.Audio.AudioListenerHandle.operator ==(InnoEngine.Audio.AudioListenerHandle left, InnoEngine.Audio.AudioListenerHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `op_Inequality`

<a id="api-837d6e1c8e1cd28e"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.op_Inequality(InnoEngine.Audio.AudioListenerHandle,InnoEngine.Audio.AudioListenerHandle) 507f7c6e938a1c709fb0d3940afee40f288770d31c94cd1b39affa07c4863671 -->

```csharp
public static bool InnoEngine.Audio.AudioListenerHandle.operator !=(InnoEngine.Audio.AudioListenerHandle left, InnoEngine.Audio.AudioListenerHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `ToString`

<a id="api-676bdd3885041e83"></a>
<!-- api: M:InnoEngine.Audio.AudioListenerHandle.ToString 156bb4e705fc0255a64822d5954e2dfce3c4d7892cdb540319bba22148f8f4ab -->

```csharp
public override string InnoEngine.Audio.AudioListenerHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L84).

## `deviceGeneration`

<a id="api-a04feccd45828ca5"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerHandle.deviceGeneration 668270d757ede58bc5a495c33d6adf869cc2fd69b1121678332a5af1378154cc -->

```csharp
public uint InnoEngine.Audio.AudioListenerHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L99).

## `isValid`

<a id="api-0baef857e7074b65"></a>
<!-- api: P:InnoEngine.Audio.AudioListenerHandle.isValid f1542715801ee054a2d8531c3895a4533cd7f6bfca11fdcd2d82aef0a0c7bba1 -->

```csharp
public bool InnoEngine.Audio.AudioListenerHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L104).
