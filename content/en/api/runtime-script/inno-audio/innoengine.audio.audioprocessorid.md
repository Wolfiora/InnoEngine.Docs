---
title: "AudioProcessorId"
description: "Reference for AudioProcessorId in Inno.Audio."
uid: api.inno.audio.runtime-script.390a1823b35d6767
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioProcessorId`

This reference describes `AudioProcessorId` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioProcessorId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bf8a1e5dc8a0f187) | Method |
| [`Equals`](#api-3256830d876e45d1) | Method |
| [`Equals`](#api-841a3a392d21d21f) | Method |
| [`GetHashCode`](#api-2643b2e7bd785c00) | Method |
| [`op_Equality`](#api-5ea0f07c980bfc95) | Method |
| [`op_Inequality`](#api-935547876dfa90e3) | Method |
| [`ToString`](#api-5f04dd37db928b28) | Method |
| [`bandPass`](#api-41aba0f3c2c71a2c) | Property |
| [`delay`](#api-26a728d46bff2d9d) | Property |
| [`highPass`](#api-c56808ced352b9a3) | Property |
| [`highShelf`](#api-7d4d384bd8f8acb2) | Property |
| [`isValid`](#api-a2723c3c80c43d27) | Property |
| [`lowPass`](#api-08fa2883e8356c2e) | Property |
| [`lowShelf`](#api-989d6d5f96d57c0f) | Property |
| [`notch`](#api-7b07e690de299de2) | Property |
| [`peak`](#api-82ecb6d09630304c) | Property |
| [`value`](#api-27d9749d79023e81) | Property |

## Type declaration

<a id="api-390a1823b35d6767"></a>
<!-- api: T:InnoEngine.Audio.AudioProcessorId a08de4ab9f54cb456b14efd0825f6cd6700a91137d4c18fbac65215e7e54de15 -->

```csharp
public readonly struct InnoEngine.Audio.AudioProcessorId : System.IEquatable<InnoEngine.Audio.AudioProcessorId>
```

Identifies an audio processor implementation without imposing a closed effect catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `#ctor`

<a id="api-bf8a1e5dc8a0f187"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.#ctor(System.String) 596a45bb6da7679616d14dd7a49691b613894d979743e429d8bfceb21b7edaf7 -->

```csharp
public InnoEngine.Audio.AudioProcessorId.AudioProcessorId(string value)
```

Creates an open processor identifier.

**Parameter `value`:** Globally stable processor protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L57).

## `Equals`

<a id="api-3256830d876e45d1"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.Equals(InnoEngine.Audio.AudioProcessorId) 6df420441fc9afe4e2e12e265e045a98154d0f3535bf931d12be08d946fe920d -->

```csharp
public bool InnoEngine.Audio.AudioProcessorId.Equals(InnoEngine.Audio.AudioProcessorId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `Equals`

<a id="api-841a3a392d21d21f"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.Equals(System.Object) ab56df1c4ba40304f4b1b4770fedc69882c6e4ab8b1216a2805534b00326b428 -->

```csharp
public override bool InnoEngine.Audio.AudioProcessorId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `GetHashCode`

<a id="api-2643b2e7bd785c00"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.GetHashCode 0c52e16f7880a886c53777ad87cde74aff7b8f708aec6e585dd25459939add49 -->

```csharp
public override int InnoEngine.Audio.AudioProcessorId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `op_Equality`

<a id="api-5ea0f07c980bfc95"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.op_Equality(InnoEngine.Audio.AudioProcessorId,InnoEngine.Audio.AudioProcessorId) c6e4cf4d229f18f36de16535f0ac28a4b8386a518baebac330d258140960449b -->

```csharp
public static bool InnoEngine.Audio.AudioProcessorId.operator ==(InnoEngine.Audio.AudioProcessorId left, InnoEngine.Audio.AudioProcessorId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `op_Inequality`

<a id="api-935547876dfa90e3"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.op_Inequality(InnoEngine.Audio.AudioProcessorId,InnoEngine.Audio.AudioProcessorId) 584647c4120509c576dbff27a627a8ea1bc1a8f9dc6aad1e8ad758d00ac69e58 -->

```csharp
public static bool InnoEngine.Audio.AudioProcessorId.operator !=(InnoEngine.Audio.AudioProcessorId left, InnoEngine.Audio.AudioProcessorId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L49).

## `ToString`

<a id="api-5f04dd37db928b28"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorId.ToString 73ffe7bd01f0455ae2ea555b2887274a83e7f10470a11ac612825abe720637c8 -->

```csharp
public override string InnoEngine.Audio.AudioProcessorId.ToString()
```

Formats the identifier for diagnostics and persistence.

**Returns:** The stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L119).

## `bandPass`

<a id="api-41aba0f3c2c71a2c"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.bandPass 70e2ca17c35a93390b0282f53f6236de785b09a1535dfd573ed3ccba286f2798 -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.bandPass { get; }
```

Gets the standard band-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L76).

## `delay`

<a id="api-26a728d46bff2d9d"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.delay baed2c602ae0dcb7395812a87517128dfb857836aad983d34eb34fd157abe7b0 -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.delay { get; }
```

Gets the standard delay processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L101).

## `highPass`

<a id="api-c56808ced352b9a3"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.highPass dab8fed3838d997a11e32770606312a590cd78767454b55281f11c2539fa778e -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.highPass { get; }
```

Gets the standard high-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L71).

## `highShelf`

<a id="api-7d4d384bd8f8acb2"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.highShelf 41f54a415e0cfaee0adee6ff819440ecdfc3484cbc33697928a67332e33695ca -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.highShelf { get; }
```

Gets the standard high-shelf equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L96).

## `isValid`

<a id="api-a2723c3c80c43d27"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.isValid 53e846a7ad259f34b2b4d5110bbc5a2cff7179c6d9da99fb97fc59fc2d6933c3 -->

```csharp
public bool InnoEngine.Audio.AudioProcessorId.isValid { get; }
```

Gets whether this identifier contains a usable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L111).

## `lowPass`

<a id="api-08fa2883e8356c2e"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.lowPass 0d1e11ebffb7950e721ea6e3d403f8926e3add294f0d79d68c414bae5ecca302 -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.lowPass { get; }
```

Gets the standard low-pass filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L66).

## `lowShelf`

<a id="api-989d6d5f96d57c0f"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.lowShelf 9c0344aa0a82999a4da61525253ce1b9f0c506eb26edf5f82691201b9163a84e -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.lowShelf { get; }
```

Gets the standard low-shelf equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L91).

## `notch`

<a id="api-7b07e690de299de2"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.notch 7a7d3e34e029b8b2752e305ea2c1d297b101af69f4de10f6339e524eca1d6f8e -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.notch { get; }
```

Gets the standard notch filter processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L81).

## `peak`

<a id="api-82ecb6d09630304c"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.peak 1a6fd81647e806f0a3948d34406bd9195c4322bbe0eb411f59f6b2bfbe0cffe4 -->

```csharp
public static InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorId.peak { get; }
```

Gets the standard peak equalizer processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L86).

## `value`

<a id="api-27d9749d79023e81"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorId.value f37618dbac22e79e06d0c4b7339df06108210a3d552dd0feec7ad135efb0cf32 -->

```csharp
public string InnoEngine.Audio.AudioProcessorId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioProtocolIds.cs#L106).
