---
title: "AudioBackendProvider"
description: "Reference for AudioBackendProvider in Inno.Adapter.Audio."
uid: api.inno.adapter.audio.ab7b1a41e14a0c0b
kind: api
owners:
  - Inno.Adapter.Audio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio#provider-ownership-contract
---
# `AudioBackendProvider`

This reference describes `AudioBackendProvider` in `Inno.Adapter.Audio`. Read the [shared contract](../../projects/inno-adapter-audio.md#provider-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-401fa4323e94e8f6) | Method |
| [`CreateDevice`](#api-b836a7a3162a232b) | Method |
| [`id`](#api-08a4488ef639fe95) | Property |

## Type declaration

<a id="api-ab7b1a41e14a0c0b"></a>
<!-- api: T:Inno.Adapter.Audio.AudioBackendProvider 66e5a8442bc7c4b735efd9384fe266778331ff98e6a9a3fa064240c303f86c4d -->

```csharp
public abstract class Inno.Adapter.Audio.AudioBackendProvider
```

Describes one explicitly composed audio implementation and its creation boundary.

**Constraints:** The composition owns this provider and its immutable registration identity.
Products are owned by their callers. This registration does not perform type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendProvider.cs#L13).

## `#ctor`

<a id="api-401fa4323e94e8f6"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendProvider.#ctor(Inno.Adapter.Audio.AudioBackendId) 1bbd342743be381ca72365fe631c69489bd665c4f22451e1f6ea1d6a1986380d -->

```csharp
protected Inno.Adapter.Audio.AudioBackendProvider.AudioBackendProvider(Inno.Adapter.Audio.AudioBackendId id)
```

Captures the identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendProvider.cs#L24).

## `CreateDevice`

<a id="api-b836a7a3162a232b"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendProvider.CreateDevice(Inno.Adapter.Audio.AudioBackendOptions) f0c3dd0823025b8c28ed8e4675b95174a68916cf9013d3041100047278abaa57 -->

```csharp
public abstract Inno.Audio.IAudioDevice Inno.Adapter.Audio.AudioBackendProvider.CreateDevice(Inno.Adapter.Audio.AudioBackendOptions options)
```

Creates a caller-owned audio service using this implementation.

**Parameter `options`:** Backend-neutral device creation options.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendProvider.cs#L45).

## `id`

<a id="api-08a4488ef639fe95"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendProvider.id 414da21633cd63748d1ed9784b7073e1ced5c31f1ee4845c594019911a8546aa -->

```csharp
public Inno.Adapter.Audio.AudioBackendId Inno.Adapter.Audio.AudioBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendProvider.cs#L34).
