---
title: "AudioBackendCatalog"
description: "Reference for AudioBackendCatalog in Inno.Adapter.Audio."
uid: api.inno.adapter.audio.42de89e2649e3339
kind: api
owners:
  - Inno.Adapter.Audio
apiSurface: source-clr
contracts:
  - project.inno-adapter-audio#provider-ownership-contract
---
# `AudioBackendCatalog`

This reference describes `AudioBackendCatalog` in `Inno.Adapter.Audio`. Read the [shared contract](../../projects/inno-adapter-audio.md#provider-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Audio.IAudioBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9878eee32e3e048) | Method |
| [`CreateDevice`](#api-1252df96a1df144a) | Method |
| [`supportedBackends`](#api-a7b93dab60af3159) | Property |

## Type declaration

<a id="api-42de89e2649e3339"></a>
<!-- api: T:Inno.Adapter.Audio.AudioBackendCatalog d90d6e3a3e313affb81d33aa98965ab019b52da0e45e15a61fcabc206e36740e -->

```csharp
public sealed class Inno.Adapter.Audio.AudioBackendCatalog : Inno.Adapter.Audio.IAudioBackendFactory
```

Resolves audio providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendCatalog.cs#L11).

## `#ctor`

<a id="api-d9878eee32e3e048"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider}) 459055d2f1565b98055d2269914ebb26c1adf7bb9bdb345a6dc6306acece5e26 -->

```csharp
public Inno.Adapter.Audio.AudioBackendCatalog.AudioBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Audio.AudioBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendCatalog.cs#L27).

## `CreateDevice`

<a id="api-1252df96a1df144a"></a>
<!-- api: M:Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions) 39e5fe760dbbed05f555a46029e0d65364c546ac5a3fcfce90bda9c088bc774b -->

```csharp
public Inno.Audio.IAudioDevice Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendId backend, Inno.Adapter.Audio.AudioBackendOptions options)
```

Creates a new audio device for one runtime audio generation.

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

**Returns:** A caller-owned backend-neutral audio device.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-a7b93dab60af3159"></a>
<!-- api: P:Inno.Adapter.Audio.AudioBackendCatalog.supportedBackends d09cdb7cd59dc862499b886664923abff6944efa509e8ca0911618c177c92cce -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Audio.AudioBackendId> Inno.Adapter.Audio.AudioBackendCatalog.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/audio/Inno.Adapter.Audio/AudioBackendCatalog.cs#L39).
