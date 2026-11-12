---
title: "AudioBusHandle"
description: "Reference for AudioBusHandle in Inno.Audio."
uid: api.inno.audio.runtime-script.d4c80c6346877af8
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioBusHandle`

This reference describes `AudioBusHandle` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioBusHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-1c472154e97fe4de) | Method |
| [`Equals`](#api-d443a11bfc01d40a) | Method |
| [`GetHashCode`](#api-160ba798b264c39c) | Method |
| [`op_Equality`](#api-ac8dd5a268b1c858) | Method |
| [`op_Inequality`](#api-08f0dfe41f7c1294) | Method |
| [`ToString`](#api-d0c9c225d914654f) | Method |
| [`deviceGeneration`](#api-21585441b38467cc) | Property |
| [`isValid`](#api-189f790a5ea85b3f) | Property |

## Type declaration

<a id="api-d4c80c6346877af8"></a>
<!-- api: T:InnoEngine.Audio.AudioBusHandle 97662e45555867565f3b025791e8246419b3229f44e412e441359a1c54c6fa0a -->

```csharp
public readonly struct InnoEngine.Audio.AudioBusHandle : System.IEquatable<InnoEngine.Audio.AudioBusHandle>
```

Identifies one backend mixer bus within a device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `Equals`

<a id="api-1c472154e97fe4de"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.Equals(InnoEngine.Audio.AudioBusHandle) 8dae71be34b8f1f0c69e075a67872ed453f34f8aec79146121e2133001c46626 -->

```csharp
public bool InnoEngine.Audio.AudioBusHandle.Equals(InnoEngine.Audio.AudioBusHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `Equals`

<a id="api-d443a11bfc01d40a"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.Equals(System.Object) 9f3473ca4dd116d5222027ef48fa8db3a9ec4dd62d22ef4cccea840ed87dd40a -->

```csharp
public override bool InnoEngine.Audio.AudioBusHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `GetHashCode`

<a id="api-160ba798b264c39c"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.GetHashCode c22ad27ad3a4f8ab0cb8d11c661cefc482c70ac8efd673851a0461df4fa04925 -->

```csharp
public override int InnoEngine.Audio.AudioBusHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `op_Equality`

<a id="api-ac8dd5a268b1c858"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.op_Equality(InnoEngine.Audio.AudioBusHandle,InnoEngine.Audio.AudioBusHandle) 7fa90598ebb3a9cdec6934450e09575804f1ab7c0834bc8462c6e87e3e36823c -->

```csharp
public static bool InnoEngine.Audio.AudioBusHandle.operator ==(InnoEngine.Audio.AudioBusHandle left, InnoEngine.Audio.AudioBusHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `op_Inequality`

<a id="api-08f0dfe41f7c1294"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.op_Inequality(InnoEngine.Audio.AudioBusHandle,InnoEngine.Audio.AudioBusHandle) a1f37923637c7e00d16355a46b1b9f39f7a1fa4d2e57d718663e93b19e9122ae -->

```csharp
public static bool InnoEngine.Audio.AudioBusHandle.operator !=(InnoEngine.Audio.AudioBusHandle left, InnoEngine.Audio.AudioBusHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `ToString`

<a id="api-d0c9c225d914654f"></a>
<!-- api: M:InnoEngine.Audio.AudioBusHandle.ToString 1dcfa29c995d1af097d46f782fd72a037a19965f35244471dd0f994b2ab73740 -->

```csharp
public override string InnoEngine.Audio.AudioBusHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L58).

## `deviceGeneration`

<a id="api-21585441b38467cc"></a>
<!-- api: P:InnoEngine.Audio.AudioBusHandle.deviceGeneration af21737d9cf91d4d87b1fd864a37cebc25a716afe0ed15af05b0d75ee068dde2 -->

```csharp
public uint InnoEngine.Audio.AudioBusHandle.deviceGeneration { get; }
```

Gets the generation of the device that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L73).

## `isValid`

<a id="api-189f790a5ea85b3f"></a>
<!-- api: P:InnoEngine.Audio.AudioBusHandle.isValid 184a7e5d460ab8e5cd107df138ef0e51569f95c03d66ca6790be439af6e2d0ae -->

```csharp
public bool InnoEngine.Audio.AudioBusHandle.isValid { get; }
```

Gets whether the handle contains a non-zero backend identity and generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioHandles.cs#L78).
