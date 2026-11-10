---
title: "AudioBackendOptions"
description: "Reference for AudioBackendOptions in Inno.Adapter.Audio."
uid: api.inno.adapter.audio.965e243c5ba236e0
kind: api
owners:
  - Inno.Adapter.Audio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio#provider-ownership-contract
---
# `AudioBackendOptions`

This reference describes `AudioBackendOptions` in `Inno.Adapter.Audio`. Read the [shared contract](../../projects/inno-adapter-audio.md#provider-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-303c03f16d6c5308) | Method |
| [`noDevice`](#api-e08905d1e099a10a) | Property |

## Type declaration

<a id="api-965e243c5ba236e0"></a>
<!-- api: T:Inno.Adapter.Audio.AudioBackendOptions ce7985f85c5b5ee7286c39010f1065f145857079b965197822a3ef7ffc31767e -->

```csharp
public readonly struct Inno.Adapter.Audio.AudioBackendOptions
```

Configures backend-neutral audio device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendOptions.cs#L6).

## `#ctor`

<a id="api-303c03f16d6c5308"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendOptions.#ctor 786e76f00b8d585af47212829fb7f2fc36f8ec8aad91efd05c22add96c6639ac -->

```csharp
public Inno.Adapter.Audio.AudioBackendOptions.AudioBackendOptions()
```

Configures backend-neutral audio device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendOptions.cs#L6).

## `noDevice`

<a id="api-e08905d1e099a10a"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendOptions.noDevice 862d1a9af6c8ecb8167b6d4343178daa7a3e61c46f0a1ad76e47516d40944b5e -->

```csharp
public bool Inno.Adapter.Audio.AudioBackendOptions.noDevice { get; init; }
```

Gets whether the device must run without opening an operating-system playback endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendOptions.cs#L11).
