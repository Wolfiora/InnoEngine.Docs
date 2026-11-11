---
title: "MiniAudioBackendProvider"
description: "Reference for MiniAudioBackendProvider in Inno.Adapter.Audio.MiniAudio."
uid: api.inno.adapter.audio.miniaudio.3e1aef0c5da1dbbc
kind: api
owners:
  - Inno.Adapter.Audio.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio-miniaudio#preparation-and-ownership-contract
---
# `MiniAudioBackendProvider`

This reference describes `MiniAudioBackendProvider` in `Inno.Adapter.Audio.MiniAudio`. Read the [shared contract](../../projects/inno-adapter-audio-miniaudio.md#preparation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Audio.AudioBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-80b9a277e5ebbaf4) | Method |
| [`CreateDevice`](#api-6d961682925d4432) | Method |

## Type declaration

<a id="api-3e1aef0c5da1dbbc"></a>
<!-- api: T:Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider 630061d4d826d1fd83169959c0ce317bc6aa6aa945f97590412cb2e5eb2c2afe -->

```csharp
public sealed class Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider : Inno.Adapter.Audio.AudioBackendProvider
```

Supplies the MiniAudio implementation through the neutral audio creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioBackendProvider.cs#L9).

## `#ctor`

<a id="api-80b9a277e5ebbaf4"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider.#ctor e630c173c1be4a078c3191d9a740aa9bcff7726ff82ce533cc40e40238444f42 -->

```csharp
public Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider.MiniAudioBackendProvider()
```

Creates an explicitly composed registration for the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioBackendProvider.cs#L14).

## `CreateDevice`

<a id="api-6d961682925d4432"></a>
<!-- api: M:Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider.CreateDevice(Inno.Adapter.Audio.AudioBackendOptions) 327469ff642b5c5de8ceec03a42d4bc4797beab2fd7cb366e161355deea7fcc2 -->

```csharp
public override Inno.Audio.IAudioDevice Inno.Adapter.Audio.MiniAudio.MiniAudioBackendProvider.CreateDevice(Inno.Adapter.Audio.AudioBackendOptions options)
```

Creates a caller-owned audio service using this implementation.

**Parameter `options`:** Backend-neutral device creation options.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/runtime/Inno.Adapter.Audio.MiniAudio/MiniAudioBackendProvider.cs#L17).
