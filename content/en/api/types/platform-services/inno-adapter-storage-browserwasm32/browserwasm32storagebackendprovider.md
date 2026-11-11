---
title: "BrowserWasm32StorageBackendProvider"
description: "Reference for BrowserWasm32StorageBackendProvider in Inno.Adapter.Storage.BrowserWasm32."
uid: api.inno.adapter.storage.browserwasm32.a80e3b2a0cd06f3d
kind: api
owners:
  - Inno.Adapter.Storage.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage-browserwasm32
---
# `BrowserWasm32StorageBackendProvider`

This reference describes `BrowserWasm32StorageBackendProvider` in `Inno.Adapter.Storage.BrowserWasm32`. Read the [shared contract](../../../projects/inno-adapter-storage-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Storage.StorageBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4ad0b2c58cf0f817) | Method |
| [`CreateStorage`](#api-4416a3a52820ff78) | Method |

## Type declaration

<a id="api-a80e3b2a0cd06f3d"></a>
<!-- api: T:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider 43915d0ccbad2560a84e55fc3352c097f10c12f50b1f43aec18902bb1150431b -->

```csharp
public sealed class Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider : Inno.Adapter.Storage.StorageBackendProvider
```

Supplies the Browser implementation through the neutral storage creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32StorageBackendProvider.cs#L9).

## `#ctor`

<a id="api-4ad0b2c58cf0f817"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider.#ctor ed9e5877406f1007612056a9da8c4f380ce2e2f5b9ab0bcba5517fe4b4077167 -->

```csharp
public Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider.BrowserWasm32StorageBackendProvider()
```

Creates an explicitly composed registration for the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32StorageBackendProvider.cs#L14).

## `CreateStorage`

<a id="api-4416a3a52820ff78"></a>
<!-- api: M:Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope) 8ec71dada6bf6bae1a144ba76e493ffb96cff9cfbc418d9a79e3112bb355e50e -->

```csharp
public override Inno.Storage.IApplicationStorage Inno.Adapter.Storage.BrowserWasm32.BrowserWasm32StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope scope)
```

Creates a caller-owned storage service using this implementation.

**Parameter `scope`:** The application namespace to isolate within this provider's host configuration.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/runtime/Inno.Adapter.Storage.BrowserWasm32/BrowserWasm32StorageBackendProvider.cs#L17).
