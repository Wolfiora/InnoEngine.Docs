---
title: "AudioClipHandle"
description: "Reference for AudioClipHandle in Inno.Audio."
uid: api.inno.audio.runtime-script.277e1540ea80086b
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioClipHandle`

This reference describes `AudioClipHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioClipHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-59f755c8bec7e7d7) | Method |
| [`Equals`](#api-84df9308a43bca6d) | Method |
| [`GetHashCode`](#api-84643ea1a3279d7f) | Method |
| [`op_Equality`](#api-b4abbd8effcce3c3) | Method |
| [`op_Inequality`](#api-bd798ec0fc6c815e) | Method |
| [`ToString`](#api-12e2cc2bb6f7bb2b) | Method |
| [`deviceGeneration`](#api-0abf88bf08b8e004) | Property |
| [`isValid`](#api-aa457f009f2b2784) | Property |

## Type declaration

<a id="api-277e1540ea80086b"></a>
<!-- api: T:InnoEngine.Audio.AudioClipHandle 242a5addfb0edd7602b7ef01d35be28a8ddf87e2e8c1259f92c9f6de7539513a -->

```csharp
public readonly struct InnoEngine.Audio.AudioClipHandle : System.IEquatable<InnoEngine.Audio.AudioClipHandle>
```

Identifies one backend clip allocation within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `Equals`

<a id="api-59f755c8bec7e7d7"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.Equals(InnoEngine.Audio.AudioClipHandle) ba8d169f5adfc0ab5e78d74478b0d5beadaea0c6cff1eb2c677077fe9d684a1a -->

```csharp
public bool InnoEngine.Audio.AudioClipHandle.Equals(InnoEngine.Audio.AudioClipHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `Equals`

<a id="api-84df9308a43bca6d"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.Equals(System.Object) a70c66da3384bd5ce29e92378b50d4826cb37569b26ad260c6837df1a9c933a7 -->

```csharp
public override bool InnoEngine.Audio.AudioClipHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `GetHashCode`

<a id="api-84643ea1a3279d7f"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.GetHashCode edc30d1fce32d42c8d15f978019773f680bfb2f2903d977d8a0b57b4d9bf00ce -->

```csharp
public override int InnoEngine.Audio.AudioClipHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `op_Equality`

<a id="api-b4abbd8effcce3c3"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.op_Equality(InnoEngine.Audio.AudioClipHandle,InnoEngine.Audio.AudioClipHandle) 85a7fa96de4794331baeb06b9b6db6e24af346e88b245f4f429751afcd576bad -->

```csharp
public static bool InnoEngine.Audio.AudioClipHandle.operator ==(InnoEngine.Audio.AudioClipHandle left, InnoEngine.Audio.AudioClipHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `op_Inequality`

<a id="api-bd798ec0fc6c815e"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.op_Inequality(InnoEngine.Audio.AudioClipHandle,InnoEngine.Audio.AudioClipHandle) 759bad505e99c6986bc1df4a7466a4610bbf1843b8ec6da17aafbbf1158584da -->

```csharp
public static bool InnoEngine.Audio.AudioClipHandle.operator !=(InnoEngine.Audio.AudioClipHandle left, InnoEngine.Audio.AudioClipHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `ToString`

<a id="api-12e2cc2bb6f7bb2b"></a>
<!-- api: M:InnoEngine.Audio.AudioClipHandle.ToString 87f74ff4396d53e940778d8199fb2f21439cd11bfafb6a4bfc46585cf2ea7df7 -->

```csharp
public override string InnoEngine.Audio.AudioClipHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L6).

## `deviceGeneration`

<a id="api-0abf88bf08b8e004"></a>
<!-- api: P:InnoEngine.Audio.AudioClipHandle.deviceGeneration 4bc89bd61c229ae01b24ebf5c80d23fcf213b2c43aca09d5df43ade1d2733e18 -->

```csharp
public uint InnoEngine.Audio.AudioClipHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L21).

## `isValid`

<a id="api-aa457f009f2b2784"></a>
<!-- api: P:InnoEngine.Audio.AudioClipHandle.isValid ac936a524f0815cc434741c2a4312854906b3af3791370508b0017d27b059797 -->

```csharp
public bool InnoEngine.Audio.AudioClipHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L26).
