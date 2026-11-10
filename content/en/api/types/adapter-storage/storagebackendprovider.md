---
title: "StorageBackendProvider"
description: "Reference for StorageBackendProvider in Inno.Adapter.Storage."
uid: api.inno.adapter.storage.3e873e1411576f97
kind: api
owners:
  - Inno.Adapter.Storage
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage#ownership-and-scope-contract
---
# `StorageBackendProvider`

This reference describes `StorageBackendProvider` in `Inno.Adapter.Storage`. Read the [shared contract](../../projects/inno-adapter-storage.md#ownership-and-scope-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f7540284ac15e126) | Method |
| [`CreateStorage`](#api-cfcb7c8c2950e821) | Method |
| [`id`](#api-a02749644d9029d0) | Property |

## Type declaration

<a id="api-3e873e1411576f97"></a>
<!-- api: T:Inno.Adapter.Storage.StorageBackendProvider e07ca4f204bbc1ddeb2a742dcacf2c60da9595a27b7fd46d8e987967acc5b99f -->

```csharp
public abstract class Inno.Adapter.Storage.StorageBackendProvider
```

Describes one explicitly composed storage implementation and its creation boundary.

**Constraints:** The composition owns this provider and its immutable registration identity.
Products are owned by their callers. This registration does not perform type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendProvider.cs#L13).

## `#ctor`

<a id="api-f7540284ac15e126"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendProvider.#ctor(Inno.Adapter.Storage.StorageBackendId) 3f26baac666a501a184403384ddac47a3d673e97f79fd5d5ed68f27f5f070251 -->

```csharp
protected Inno.Adapter.Storage.StorageBackendProvider.StorageBackendProvider(Inno.Adapter.Storage.StorageBackendId id)
```

Captures the identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendProvider.cs#L24).

## `CreateStorage`

<a id="api-cfcb7c8c2950e821"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope) 3bbce42782fac60982757252546fe69de57d5318619a65600d538df5ef6e888e -->

```csharp
public abstract Inno.Storage.IApplicationStorage Inno.Adapter.Storage.StorageBackendProvider.CreateStorage(Inno.Storage.StorageScope scope)
```

Creates a caller-owned storage service using this implementation.

**Parameter `scope`:** The application namespace to isolate within this provider's host configuration.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendProvider.cs#L45).

## `id`

<a id="api-a02749644d9029d0"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendProvider.id c6b7e330cc9b61a8c4ef4782c986fadcf5de6f5621fd2309496c1d8d68c1e677 -->

```csharp
public Inno.Adapter.Storage.StorageBackendId Inno.Adapter.Storage.StorageBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendProvider.cs#L34).
