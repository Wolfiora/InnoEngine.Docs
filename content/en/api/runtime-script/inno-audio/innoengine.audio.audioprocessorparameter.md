---
title: "AudioProcessorParameter"
description: "Reference for AudioProcessorParameter in Inno.Audio."
uid: api.inno.audio.runtime-script.ee444c7ab83f6a31
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioProcessorParameter`

This reference describes `AudioProcessorParameter` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioProcessorParameter>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5835482012240ee5) | Method |
| [`Equals`](#api-b42881cf3571d4e7) | Method |
| [`Equals`](#api-08a4b6d0de3e0220) | Method |
| [`GetHashCode`](#api-86c9e1bf661dbe71) | Method |
| [`op_Equality`](#api-b0d225f54ef9672c) | Method |
| [`op_Inequality`](#api-e75de46adefc4501) | Method |
| [`ToString`](#api-bb05407204ef7d13) | Method |
| [`id`](#api-0dfe9d0c8cbb23d3) | Property |
| [`value`](#api-72c13f64eb2b7332) | Property |

## Type declaration

<a id="api-ee444c7ab83f6a31"></a>
<!-- api: T:InnoEngine.Audio.AudioProcessorParameter 1bcea542b5324b0e5a059048d8e5c7d5e38e7edcff3892d1af748f1212511dab -->

```csharp
public readonly struct InnoEngine.Audio.AudioProcessorParameter : System.IEquatable<InnoEngine.Audio.AudioProcessorParameter>
```

Stores one neutral numeric parameter assigned to an audio processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `#ctor`

<a id="api-5835482012240ee5"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.#ctor(InnoEngine.Audio.AudioParameterId,System.Single) f7f4dda9612fa4b945d16d2a357c42fdd3c7392d279bc249dcd47437c61b3f46 -->

```csharp
public InnoEngine.Audio.AudioProcessorParameter.AudioProcessorParameter(InnoEngine.Audio.AudioParameterId id, float value)
```

Creates a processor parameter value.

**Parameter `id`:** Open parameter identifier understood by the processor protocol.

**Parameter `value`:** Neutral numeric value interpreted by the processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L24).

## `Equals`

<a id="api-b42881cf3571d4e7"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.Equals(InnoEngine.Audio.AudioProcessorParameter) 9aaae7329fe4eefd34789399e38af62089e491fc012245021d9d753f19377245 -->

```csharp
public bool InnoEngine.Audio.AudioProcessorParameter.Equals(InnoEngine.Audio.AudioProcessorParameter other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `Equals`

<a id="api-08a4b6d0de3e0220"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.Equals(System.Object) 6656a828baa8af7d9cd232a9a0150474ddaf4107505dfed983c23ae2b870100e -->

```csharp
public override bool InnoEngine.Audio.AudioProcessorParameter.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `GetHashCode`

<a id="api-86c9e1bf661dbe71"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.GetHashCode aef6d0ab20da49986708afe1b91895bb9ba7e53e389fb2d63df4935e872a35c8 -->

```csharp
public override int InnoEngine.Audio.AudioProcessorParameter.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `op_Equality`

<a id="api-b0d225f54ef9672c"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.op_Equality(InnoEngine.Audio.AudioProcessorParameter,InnoEngine.Audio.AudioProcessorParameter) 083590e446632c395b3ea62a8259a2f30b8cff3241c6aeb2f2cbb86cf4ded21e -->

```csharp
public static bool InnoEngine.Audio.AudioProcessorParameter.operator ==(InnoEngine.Audio.AudioProcessorParameter left, InnoEngine.Audio.AudioProcessorParameter right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `op_Inequality`

<a id="api-e75de46adefc4501"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.op_Inequality(InnoEngine.Audio.AudioProcessorParameter,InnoEngine.Audio.AudioProcessorParameter) 41fbbb3cbc8daee55cd391402e0d4394a331d211e4bbf88d31620884b05fede6 -->

```csharp
public static bool InnoEngine.Audio.AudioProcessorParameter.operator !=(InnoEngine.Audio.AudioProcessorParameter left, InnoEngine.Audio.AudioProcessorParameter right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `ToString`

<a id="api-bb05407204ef7d13"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorParameter.ToString 322b75ed03291cd13ae126b038ea4e883f4882caa2c3725d649a054f8b81a086 -->

```csharp
public override string InnoEngine.Audio.AudioProcessorParameter.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L13).

## `id`

<a id="api-0dfe9d0c8cbb23d3"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorParameter.id 204f49e2be9702c56913fc18bfa768ab8801491552b049953892550b393c34d9 -->

```csharp
public InnoEngine.Audio.AudioParameterId InnoEngine.Audio.AudioProcessorParameter.id { get; }
```

Gets the open parameter identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L37).

## `value`

<a id="api-72c13f64eb2b7332"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorParameter.value 4d500afabd7b485b906d6bd145fd04748ac245797b547127fd476eab0b5d7b7b -->

```csharp
public float InnoEngine.Audio.AudioProcessorParameter.value { get; }
```

Gets the neutral numeric value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L42).
