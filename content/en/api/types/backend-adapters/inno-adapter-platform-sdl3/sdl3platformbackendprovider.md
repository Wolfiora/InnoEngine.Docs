---
title: "Sdl3PlatformBackendProvider"
description: "Reference for Sdl3PlatformBackendProvider in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.e921f33c6cd13dda
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3PlatformBackendProvider`

This reference describes `Sdl3PlatformBackendProvider` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Platform.PlatformBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-93cd5184cecbf32d) | Method |
| [`CreateApplication`](#api-15727256d32bdb42) | Method |

## Type declaration

<a id="api-e921f33c6cd13dda"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider 760f9b5c8a816fb8500a02297c93f781da41beb7d0affdbf2a99d028c7373215 -->

```csharp
public sealed class Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider : Inno.Adapter.Platform.PlatformBackendProvider
```

Supplies the Sdl3 implementation through the neutral platform creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Sdl3PlatformBackendProvider.cs#L9).

## `#ctor`

<a id="api-93cd5184cecbf32d"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider.#ctor(Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration) 1a1a7df743c8d4456adc5908413388f4d251c3b3b55743d5459a35ae0cdcc2b6 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider.Sdl3PlatformBackendProvider(Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration hostIntegration)
```

Creates an explicitly composed registration for the bundled implementation.

**Parameter `hostIntegration`:** The borrowed immutable system integration required by every created application.

**Throws `System.ArgumentNullException`:** Host integration is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Sdl3PlatformBackendProvider.cs#L22).

## `CreateApplication`

<a id="api-15727256d32bdb42"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider.CreateApplication 2fd1beb27269bf4a372f750fad65a6286113b33a6a996f4c89d7cec5482cbef6 -->

```csharp
public override Inno.Platform.IPlatformApplication Inno.Adapter.Platform.Sdl3.Sdl3PlatformBackendProvider.CreateApplication()
```

Creates a caller-owned platform service using this implementation.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Sdl3PlatformBackendProvider.cs#L29).
