---
title: "AudioCapabilities"
description: "Reference for AudioCapabilities in Inno.Audio."
uid: api.inno.audio.runtime-script.6e1d0b27f2377fc4
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioCapabilities`

This reference describes `AudioCapabilities` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Audio.AudioCapabilities>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1b1a93463542425a) | Method |
| [`Equals`](#api-463d9809090d50b6) | Method |
| [`Equals`](#api-6c92f91892d4906a) | Method |
| [`GetHashCode`](#api-9661d07712707d74) | Method |
| [`op_Equality`](#api-ac5a688f694861b1) | Method |
| [`op_Inequality`](#api-e615eaf216c31b89) | Method |
| [`ToString`](#api-177bb2b25c2b99a4) | Method |
| [`maxListeners`](#api-1062173f83b3f655) | Property |
| [`sampleRate`](#api-bc8fb05c66f5e659) | Property |
| [`supportsScheduledPlayback`](#api-e02b095631198bfc) | Property |
| [`supportsSpatialAudio`](#api-f88a0ba753826ae2) | Property |
| [`supportsStreaming`](#api-b5490095c2997b81) | Property |

## Type declaration

<a id="api-6e1d0b27f2377fc4"></a>
<!-- api: T:InnoEngine.Audio.AudioCapabilities dc22244f993b56461fac496617ae47f63fe8bd85d89ca63de876122acd8f2269 -->

```csharp
public sealed class InnoEngine.Audio.AudioCapabilities : System.IEquatable<InnoEngine.Audio.AudioCapabilities>
```

Describes backend-neutral features and limits for one device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `#ctor`

<a id="api-1b1a93463542425a"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Int32,System.Int32) 4dd9b070ea3e2cb7b74d11a5bfe184e4585b4d205add42a11278ef95c746f341 -->

```csharp
public InnoEngine.Audio.AudioCapabilities.AudioCapabilities(bool supportsStreaming, bool supportsScheduledPlayback, bool supportsSpatialAudio, int maxListeners, int sampleRate)
```

Creates an immutable audio capability snapshot.

**Parameter `supportsStreaming`:** Whether clips can be decoded incrementally.

**Parameter `supportsScheduledPlayback`:** Whether voices can start against the audio clock.

**Parameter `supportsSpatialAudio`:** Whether listener-relative spatial playback is available.

**Parameter `maxListeners`:** Maximum simultaneously active listeners.

**Parameter `sampleRate`:** Device output sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L174).

## `Equals`

<a id="api-463d9809090d50b6"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.Equals(InnoEngine.Audio.AudioCapabilities) a11039191afb0f6648ca47fcd45243438a64f3c6c502ba00f2cc6e32a0b99892 -->

```csharp
public bool InnoEngine.Audio.AudioCapabilities.Equals(InnoEngine.Audio.AudioCapabilities? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `Equals`

<a id="api-6c92f91892d4906a"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.Equals(System.Object) a4eba98b568d92a185e8ca77f468bd3d2fbe61ee38000efe604865a4a1c5cb28 -->

```csharp
public override bool InnoEngine.Audio.AudioCapabilities.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `GetHashCode`

<a id="api-9661d07712707d74"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.GetHashCode 35a35d36929eed99a61fe0f21e784a3721a87668bdf460b7fa649417b3cce086 -->

```csharp
public override int InnoEngine.Audio.AudioCapabilities.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `op_Equality`

<a id="api-ac5a688f694861b1"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.op_Equality(InnoEngine.Audio.AudioCapabilities,InnoEngine.Audio.AudioCapabilities) 93b2d04cf71f36f6540b1dc43f4728bfd29c9fd865022af50ea6ef987679f878 -->

```csharp
public static bool InnoEngine.Audio.AudioCapabilities.operator ==(InnoEngine.Audio.AudioCapabilities? left, InnoEngine.Audio.AudioCapabilities? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `op_Inequality`

<a id="api-e615eaf216c31b89"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.op_Inequality(InnoEngine.Audio.AudioCapabilities,InnoEngine.Audio.AudioCapabilities) c4126686fc834355e6e33b5b2c6a15b639ae05d55306f5412aaa334d063487ca -->

```csharp
public static bool InnoEngine.Audio.AudioCapabilities.operator !=(InnoEngine.Audio.AudioCapabilities? left, InnoEngine.Audio.AudioCapabilities? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `ToString`

<a id="api-177bb2b25c2b99a4"></a>
<!-- api: M:InnoEngine.Audio.AudioCapabilities.ToString 8ade56e76671b64ff1aac8f8a49e6c1292ee9f74e1ee42cc3d8b6cda112cb5ff -->

```csharp
public override string InnoEngine.Audio.AudioCapabilities.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L154).

## `maxListeners`

<a id="api-1062173f83b3f655"></a>
<!-- api: P:InnoEngine.Audio.AudioCapabilities.maxListeners cca7450daa4bdbc21bcc080734eb9ef3de15896d4d7aba21de91526c2a683184 -->

```csharp
public int InnoEngine.Audio.AudioCapabilities.maxListeners { get; }
```

Gets the maximum simultaneously active listener count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L208).

## `sampleRate`

<a id="api-bc8fb05c66f5e659"></a>
<!-- api: P:InnoEngine.Audio.AudioCapabilities.sampleRate 39cd91dd1de339c3d8817d7698929c2476001a1e3419b3ca390451f59b2149c3 -->

```csharp
public int InnoEngine.Audio.AudioCapabilities.sampleRate { get; }
```

Gets the output sample rate in frames per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L213).

## `supportsScheduledPlayback`

<a id="api-e02b095631198bfc"></a>
<!-- api: P:InnoEngine.Audio.AudioCapabilities.supportsScheduledPlayback e1e0d69f02709cf2e1c1c6b7cba713c3f025f83421e81f6bc67b092777fe0453 -->

```csharp
public bool InnoEngine.Audio.AudioCapabilities.supportsScheduledPlayback { get; }
```

Gets whether voices can start against the audio clock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L198).

## `supportsSpatialAudio`

<a id="api-f88a0ba753826ae2"></a>
<!-- api: P:InnoEngine.Audio.AudioCapabilities.supportsSpatialAudio 11044669ad66649596f5538d19bb5b8a81f36f61f3c2a867e61ba11b7e5080cb -->

```csharp
public bool InnoEngine.Audio.AudioCapabilities.supportsSpatialAudio { get; }
```

Gets whether listener-relative spatial playback is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L203).

## `supportsStreaming`

<a id="api-b5490095c2997b81"></a>
<!-- api: P:InnoEngine.Audio.AudioCapabilities.supportsStreaming f99e409c7ec8e6c022d6c5bcb39c3fb85a5e25c6d8b9f1a1a4553e2b1f9f2892 -->

```csharp
public bool InnoEngine.Audio.AudioCapabilities.supportsStreaming { get; }
```

Gets whether clips can be decoded incrementally.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L193).
