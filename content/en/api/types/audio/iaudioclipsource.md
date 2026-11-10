---
title: "IAudioClipSource"
description: "Reference for IAudioClipSource in Inno.Audio."
uid: api.inno.audio.c1eadbcadbb6827f
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `IAudioClipSource`

This reference describes `IAudioClipSource` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`OpenRead`](#api-f914b8781d11136f) | Method |
| [`contentHash`](#api-3c15972d84a08200) | Property |
| [`length`](#api-8f7cf0a2981e93ef) | Property |

## Type declaration

<a id="api-c1eadbcadbb6827f"></a>
<!-- api: T:Inno.Audio.IAudioClipSource 84a348faa02d6784142d57cca809da0ebf26cd040eb72a4b23a858fce219cd8c -->

```csharp
public interface Inno.Audio.IAudioClipSource
```

Supplies immutable encoded audio independently of any backend's input layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioClipSource.cs#L8).

## `OpenRead`

<a id="api-f914b8781d11136f"></a>
<!-- api: M:Inno.Audio.IAudioClipSource.OpenRead 6082b1e8620bc3f97ae89c826b07493429d8ddfc5ff10547d34bd7712b5469c6 -->

```csharp
System.IO.Stream Inno.Audio.IAudioClipSource.OpenRead()
```

Opens a reader with an independent content pin and cursor.

**Returns:** A caller-owned readable stream; missing or retired content fails the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioClipSource.cs#L26).

## `contentHash`

<a id="api-3c15972d84a08200"></a>
<!-- api: P:Inno.Audio.IAudioClipSource.contentHash 32a3f51cf0e47a512d4e95d640af08201293d7153e803a11f06ec8c1cc7b7cee -->

```csharp
string Inno.Audio.IAudioClipSource.contentHash { get; }
```

Gets the SHA-256 identity of the complete encoded bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioClipSource.cs#L13).

## `length`

<a id="api-8f7cf0a2981e93ef"></a>
<!-- api: P:Inno.Audio.IAudioClipSource.length 11b8be7140a909141a0d44ab326f6ba952cbd9e443ec13dacc1ded6319e38806 -->

```csharp
long Inno.Audio.IAudioClipSource.length { get; }
```

Gets the exact encoded byte length used to bound preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/IAudioClipSource.cs#L18).
