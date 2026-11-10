---
title: "IAudioBackendFactory"
description: "Reference for IAudioBackendFactory in Inno.Adapter.Audio."
uid: api.inno.adapter.audio.f43e796a715bd678
kind: api
owners:
  - Inno.Adapter.Audio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio#provider-ownership-contract
---
# `IAudioBackendFactory`

This reference describes `IAudioBackendFactory` in `Inno.Adapter.Audio`. Read the [shared contract](../../projects/inno-adapter-audio.md#provider-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateDevice`](#api-058b0612a6ec8216) | Method |
| [`supportedBackends`](#api-cb64f4a8ed996326) | Property |

## Type declaration

<a id="api-f43e796a715bd678"></a>
<!-- api: T:Inno.Adapter.Audio.IAudioBackendFactory 1e697396c1f00afa2a5caaf7a7b5bb73d0fb823831ddb414d5576a1f12a8cac4 -->

```csharp
public interface Inno.Adapter.Audio.IAudioBackendFactory
```

Creates backend-neutral audio devices from explicit backend selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/IAudioBackendFactory.cs#L9).

## `CreateDevice`

<a id="api-058b0612a6ec8216"></a>
<!-- api: M:Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions) 9e60ebf5c626291c5a67ce4baab801139bfda6eacc643874123a067594003f55 -->

```csharp
Inno.Audio.IAudioDevice Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendId backend, Inno.Adapter.Audio.AudioBackendOptions options = default(Inno.Adapter.Audio.AudioBackendOptions))
```

Creates a new audio device for one runtime audio generation.

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

**Returns:** A caller-owned backend-neutral audio device.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/IAudioBackendFactory.cs#L31).

## `supportedBackends`

<a id="api-cb64f4a8ed996326"></a>
<!-- api: P:Inno.Adapter.Audio.IAudioBackendFactory.supportedBackends f90e99b5f952de80c413ae2c75ca54577d11e27f55e9cdc891b7b137c7103182 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Audio.AudioBackendId> Inno.Adapter.Audio.IAudioBackendFactory.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/IAudioBackendFactory.cs#L14).
