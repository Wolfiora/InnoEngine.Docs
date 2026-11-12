---
title: "AudioBusId"
description: "Reference for AudioBusId in Inno.Audio."
uid: api.inno.audio.runtime-script.1800e2f112606ed6
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioBusId`

This reference describes `AudioBusId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioBusId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-483e34faf4c4f036) | Method |
| [`Equals`](#api-195c6c5b7bae3bc9) | Method |
| [`Equals`](#api-c2294f554001cf42) | Method |
| [`GetHashCode`](#api-291ef12cad93567f) | Method |
| [`op_Equality`](#api-2f919c600530e701) | Method |
| [`op_Inequality`](#api-e1c19ffc1adda7b9) | Method |
| [`ToString`](#api-bd408950cbd70bb6) | Method |
| [`isValid`](#api-4dd3f691433fa31b) | Property |
| [`master`](#api-66ea7137c6cb70a2) | Property |
| [`value`](#api-5464a60fa1e870b5) | Property |

## Type declaration

<a id="api-1800e2f112606ed6"></a>
<!-- api: T:InnoEngine.Audio.AudioBusId be6d86dbcde852223894659dfc85d81d8005f02430715fc8397cb69f9dfc0665 -->

```csharp
public readonly struct InnoEngine.Audio.AudioBusId : System.IEquatable<InnoEngine.Audio.AudioBusId>
```

Identifies a mixer bus without imposing a closed bus catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `#ctor`

<a id="api-483e34faf4c4f036"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.#ctor(System.String) adfb9e7ae86f71d9e2d0248155f0ce4869177151654bc78fdf6b6ac3a76bcdbd -->

```csharp
public InnoEngine.Audio.AudioBusId.AudioBusId(string value)
```

Creates an open mixer bus identifier.

**Parameter `value`:** Globally stable bus protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L16).

## `Equals`

<a id="api-195c6c5b7bae3bc9"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.Equals(InnoEngine.Audio.AudioBusId) eeb8e2d1bf744a72714cb3b0f5410e23983876b146484cfe695cd2090414a3d3 -->

```csharp
public bool InnoEngine.Audio.AudioBusId.Equals(InnoEngine.Audio.AudioBusId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `Equals`

<a id="api-c2294f554001cf42"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.Equals(System.Object) cd2f12281444f87d76ab323526ce97946ac56ced38028328212b3659cf35d0a7 -->

```csharp
public override bool InnoEngine.Audio.AudioBusId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `GetHashCode`

<a id="api-291ef12cad93567f"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.GetHashCode 28bbf364345bfee93a61439f43a34acdf8cf768856a53a2513ade2e4764b4c42 -->

```csharp
public override int InnoEngine.Audio.AudioBusId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `op_Equality`

<a id="api-2f919c600530e701"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.op_Equality(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioBusId) 8f7d15392541e08d915aa52ea39ca43f2e5aa0c9e767d7e13279fdf4947754e5 -->

```csharp
public static bool InnoEngine.Audio.AudioBusId.operator ==(InnoEngine.Audio.AudioBusId left, InnoEngine.Audio.AudioBusId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `op_Inequality`

<a id="api-e1c19ffc1adda7b9"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.op_Inequality(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioBusId) 9b359d8db97a8526d32d00cbc4c588a8049b8354afafc97861d42aba2bf52072 -->

```csharp
public static bool InnoEngine.Audio.AudioBusId.operator !=(InnoEngine.Audio.AudioBusId left, InnoEngine.Audio.AudioBusId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L8).

## `ToString`

<a id="api-bd408950cbd70bb6"></a>
<!-- api: M:InnoEngine.Audio.AudioBusId.ToString f31451058ce01d828965d9245905a98f60e8fb61a65ef6ab0defcbd74d829325 -->

```csharp
public override string InnoEngine.Audio.AudioBusId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L43).

## `isValid`

<a id="api-4dd3f691433fa31b"></a>
<!-- api: P:InnoEngine.Audio.AudioBusId.isValid 3a80842ba7b35fce305c9dbd28303af169bd7b44984473f280bed3143e2a9c7c -->

```csharp
public bool InnoEngine.Audio.AudioBusId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L35).

## `master`

<a id="api-66ea7137c6cb70a2"></a>
<!-- api: P:InnoEngine.Audio.AudioBusId.master 3162c56056c0b7c13a9c34e85022f6e869fe6aba35bf27a1f598daa4a2da3ef7 -->

```csharp
public static InnoEngine.Audio.AudioBusId InnoEngine.Audio.AudioBusId.master { get; }
```

Gets the mandatory root bus identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L25).

## `value`

<a id="api-5464a60fa1e870b5"></a>
<!-- api: P:InnoEngine.Audio.AudioBusId.value e5ad0db24c3abf38321d6717bd84f6fa605a8742e1fa67f3650bfb888e09d9cc -->

```csharp
public string InnoEngine.Audio.AudioBusId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L30).
