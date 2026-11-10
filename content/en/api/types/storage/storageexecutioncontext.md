---
title: "StorageExecutionContext"
description: "Reference for StorageExecutionContext in Inno.Storage."
uid: api.inno.storage.9103bb0746c8cd96
kind: api
owners:
  - Inno.Storage
apiSurface: source-clr
contracts:
  - project.inno-storage#operation-and-ownership-contract
---
# `StorageExecutionContext`

This reference describes `StorageExecutionContext` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-5b50cb65bd16704b) | Method |
| [`current`](#api-85d0aef315a2062f) | Property |

## Type declaration

<a id="api-9103bb0746c8cd96"></a>
<!-- api: T:Inno.Storage.StorageExecutionContext 92117b110b8a1ce30e02c2e1d9048d50d98e98572f299a3c46f229c7a1685ef5 -->

```csharp
public static class Inno.Storage.StorageExecutionContext
```

Binds application storage to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L12).

## `EnterScope`

<a id="api-5b50cb65bd16704b"></a>
<!-- api: M:Inno.Storage.StorageExecutionContext.EnterScope(Inno.Storage.IApplicationStorage) 752ca46f4dbfa16283a12bb349ac1f9ff44bd7e37f4b97153fc54680061e3a74 -->

```csharp
public static System.IDisposable Inno.Storage.StorageExecutionContext.EnterScope(Inno.Storage.IApplicationStorage storage)
```

Binds a storage service until the returned strict last-in-first-out scope is disposed.

**Parameter `storage`:** The host-owned application storage service.

**Returns:** A strict last-in-first-out execution scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L33).

## `current`

<a id="api-85d0aef315a2062f"></a>
<!-- api: P:Inno.Storage.StorageExecutionContext.current a8372efe95a48d133bea90a9c0c47b2f940986757fe7e41e9bf4f3b769b77f70 -->

```csharp
public static Inno.Storage.IApplicationStorage Inno.Storage.StorageExecutionContext.current { get; }
```

Gets the storage service bound to the current execution context.

**Throws `System.InvalidOperationException`:** Thrown when no storage scope is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/Storage.cs#L22).
