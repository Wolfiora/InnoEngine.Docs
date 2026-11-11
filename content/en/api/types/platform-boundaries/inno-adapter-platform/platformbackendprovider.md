---
title: "PlatformBackendProvider"
description: "Reference for PlatformBackendProvider in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.0c0d04f9c6bd14a7
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `PlatformBackendProvider`

This reference describes `PlatformBackendProvider` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d6267c4f2054d9c7) | Method |
| [`CreateApplication`](#api-910f3f52937b8b94) | Method |
| [`id`](#api-feaeb3bea20d9883) | Property |

## Type declaration

<a id="api-0c0d04f9c6bd14a7"></a>
<!-- api: T:Inno.Adapter.Platform.PlatformBackendProvider dbf655deb4c038dc8104e6a2355fbee7334a378c91d6520bcc729e8b370b31bf -->

```csharp
public abstract class Inno.Adapter.Platform.PlatformBackendProvider
```

Describes one explicitly composed platform implementation and its creation boundary.

**Constraints:** The composition owns this provider and its immutable registration identity.
Products are owned by their callers. This registration does not perform type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendProvider.cs#L13).

## `#ctor`

<a id="api-d6267c4f2054d9c7"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendProvider.#ctor(Inno.Adapter.Platform.PlatformBackendId) e18aa6a825576b68f7cdc20f9fb6e4ec70f3f67416abb065c7be4b7d5a5ebb17 -->

```csharp
protected Inno.Adapter.Platform.PlatformBackendProvider.PlatformBackendProvider(Inno.Adapter.Platform.PlatformBackendId id)
```

Captures the identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendProvider.cs#L24).

## `CreateApplication`

<a id="api-910f3f52937b8b94"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendProvider.CreateApplication fc588b8c1dec6f3794abf5cb090c476c1b37ae984aa3e0f426b35fd7f4824764 -->

```csharp
public abstract Inno.Platform.IPlatformApplication Inno.Adapter.Platform.PlatformBackendProvider.CreateApplication()
```

Creates a caller-owned platform service using this implementation.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendProvider.cs#L42).

## `id`

<a id="api-feaeb3bea20d9883"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformBackendProvider.id 41158748da3588c699b920fd6a18ccbf8950beacc3d3b99002cd047fbebbc873 -->

```csharp
public Inno.Adapter.Platform.PlatformBackendId Inno.Adapter.Platform.PlatformBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendProvider.cs#L34).
