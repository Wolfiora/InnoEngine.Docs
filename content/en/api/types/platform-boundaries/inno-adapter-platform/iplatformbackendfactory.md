---
title: "IPlatformBackendFactory"
description: "Reference for IPlatformBackendFactory in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.457717396dd7b603
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `IPlatformBackendFactory`

This reference describes `IPlatformBackendFactory` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateApplication`](#api-2d8f99f9d80e9957) | Method |
| [`supportedBackends`](#api-b24c962e1b2054c3) | Property |

## Type declaration

<a id="api-457717396dd7b603"></a>
<!-- api: T:Inno.Adapter.Platform.IPlatformBackendFactory eb81e904ae372277a0f0806e7bfd0a32e3a2a7ba8c8635f8bcd2338ddafe86df -->

```csharp
public interface Inno.Adapter.Platform.IPlatformBackendFactory
```

Creates backend-neutral platform applications from explicit backend selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/IPlatformBackendFactory.cs#L9).

## `CreateApplication`

<a id="api-2d8f99f9d80e9957"></a>
<!-- api: M:Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendId) 036adda1d672d74107b04e2fa2e2c0524f5a678ff1be70865eae9971752a3f7e -->

```csharp
Inno.Platform.IPlatformApplication Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendId backend)
```

Creates a new platform application for the selected backend.

**Parameter `backend`:** platform implementation selected by the composition root.

**Returns:** A caller-owned backend-neutral platform application.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/IPlatformBackendFactory.cs#L28).

## `supportedBackends`

<a id="api-b24c962e1b2054c3"></a>
<!-- api: P:Inno.Adapter.Platform.IPlatformBackendFactory.supportedBackends 662bdca89ddf9cdbda4cf9c4827b9b0aaf3603b8465c2fc09e46741216ce2f5b -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Platform.PlatformBackendId> Inno.Adapter.Platform.IPlatformBackendFactory.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/IPlatformBackendFactory.cs#L14).
