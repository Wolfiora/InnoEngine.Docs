---
title: "StorageRuntimeFactory"
description: "Reference for StorageRuntimeFactory in Inno.Storage.Runtime."
uid: api.inno.storage.runtime.c62857eae2db764a
kind: api
owners:
  - Inno.Storage.Runtime
apiSurface: source-clr
contracts:
  - project.inno-storage-runtime#admission-and-lifetime-contract
---
# `StorageRuntimeFactory`

This reference describes `StorageRuntimeFactory` in `Inno.Storage.Runtime`. Read the [shared contract](../../projects/inno-storage-runtime.md#admission-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-51339ba0ca7e7b1c) | Method |
| [`Create`](#api-39a04905f1d35c09) | Method |
| [`descriptor`](#api-d4ffbbada6985f6c) | Property |

## Type declaration

<a id="api-c62857eae2db764a"></a>
<!-- api: T:Inno.Storage.Runtime.StorageRuntimeFactory 79c25abce7079ccc3a943b99c4bca5043e832bb06daba87c92aa808557264ce0 -->

```csharp
public sealed class Inno.Storage.Runtime.StorageRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one frame-scoped storage service for a runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-51339ba0ca7e7b1c"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Storage.IApplicationStorage}) 0e3b118e72a3bd1a3359db96df51f64fae619489eb64d506c9e5913afe488af0 -->

```csharp
public Inno.Storage.Runtime.StorageRuntimeFactory.StorageRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Storage.IApplicationStorage> storageFactory)
```

Creates a reusable factory that obtains an exclusively owned storage sandbox for each session.

**Parameter `storageFactory`:** The composition callback that creates a distinct storage service for the supplied session context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntimeFactory.cs#L21).

## `Create`

<a id="api-39a04905f1d35c09"></a>
<!-- api: M:Inno.Storage.Runtime.StorageRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) d11b1e7587c90dc7e2aba7c2f4b8c8ed6e831925852782a899a809d33418c5f2 -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Storage.Runtime.StorageRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates a storage feature over a newly allocated application sandbox.

**Parameter `context`:** The isolated session context passed to the storage factory.

**Returns:** A new storage feature that exclusively owns any disposable storage adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntimeFactory.cs#L42).

## `descriptor`

<a id="api-d4ffbbada6985f6c"></a>
<!-- api: P:Inno.Storage.Runtime.StorageRuntimeFactory.descriptor 401533f45b2b3150bfdb555c04ced6a6be1de937d4a4feea41052d84c05d6a57 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Storage.Runtime.StorageRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata for the frame-scoped storage service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage.Runtime/StorageRuntimeFactory.cs#L29).
