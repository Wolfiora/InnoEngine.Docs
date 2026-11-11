---
title: "PlatformBackendCatalog"
description: "Reference for PlatformBackendCatalog in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.53938d921e23c66d
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `PlatformBackendCatalog`

This reference describes `PlatformBackendCatalog` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Platform.IPlatformBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55a0c4d18ca3fd41) | Method |
| [`CreateApplication`](#api-d68580ee647b3d08) | Method |
| [`supportedBackends`](#api-77993bc0299f285e) | Property |

## Type declaration

<a id="api-53938d921e23c66d"></a>
<!-- api: T:Inno.Adapter.Platform.PlatformBackendCatalog 8fb2ea7aaa1356e7c9eaaf13040097110273e3082b9c8a7273b547c66435c1b5 -->

```csharp
public sealed class Inno.Adapter.Platform.PlatformBackendCatalog : Inno.Adapter.Platform.IPlatformBackendFactory
```

Resolves platform providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendCatalog.cs#L11).

## `#ctor`

<a id="api-55a0c4d18ca3fd41"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Platform.PlatformBackendProvider}) a34137081bfb39622c94aa2734ac31b8362d77ee64b0f9a1d39846a74912032b -->

```csharp
public Inno.Adapter.Platform.PlatformBackendCatalog.PlatformBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Platform.PlatformBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendCatalog.cs#L27).

## `CreateApplication`

<a id="api-d68580ee647b3d08"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendId) 6473a514085e88a03865517b2ad26fc8d2e944539517d5e491d82f974bf17a51 -->

```csharp
public Inno.Platform.IPlatformApplication Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendId backend)
```

Creates a new platform application for the selected backend.

**Parameter `backend`:** platform implementation selected by the composition root.

**Returns:** A caller-owned backend-neutral platform application.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-77993bc0299f285e"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformBackendCatalog.supportedBackends f062eb45f91c949af8ad040e54939efac518c3cc6f865a88faa7843975aab955 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Platform.PlatformBackendId> Inno.Adapter.Platform.PlatformBackendCatalog.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendCatalog.cs#L39).
