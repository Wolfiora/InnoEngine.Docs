---
title: "PackContentStore"
description: "Reference for PackContentStore in Inno.Content."
uid: api.inno.content.bcb5e05313840dd6
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `PackContentStore`

This reference describes `PackContentStore` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Content.IRuntimeContentStore`.

## Members

| Member | Kind |
| --- | --- |
| [`Acquire`](#api-b4a41c6ef7bcff4a) | Method |
| [`Dispose`](#api-8506599be2c32717) | Method |
| [`descriptor`](#api-9ecaecbd2b816783) | Property |
| [`index`](#api-7a46dbbaf8c261d7) | Property |

## Type declaration

<a id="api-bcb5e05313840dd6"></a>
<!-- api: T:Inno.Content.PackContentStore cc5cb85700808a0dda4a0671194a809086ba22de03a0b7d84c71578340f7ff40 -->

```csharp
public sealed class Inno.Content.PackContentStore : Inno.Content.IRuntimeContentStore
```

Owns one validated archive with independent entry cursors and synchronized shared-stream positioning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/PackContentStore.cs#L11).

## `Acquire`

<a id="api-b4a41c6ef7bcff4a"></a>
<!-- api: M:Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey) 002290c71aa02755c5c01b86c4644a6d680cf91f0f3d8b1a81030c00bc5d407a -->

```csharp
public Inno.Content.ContentReadLease Inno.Content.PackContentStore.Acquire(Inno.Content.ContentKey key)
```

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Throws `System.IO.FileNotFoundException`:** The exact content key is not present.

**Throws `System.ObjectDisposedException`:** The store has closed and cannot issue new leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/PackContentStore.cs#L38).

## `Dispose`

<a id="api-8506599be2c32717"></a>
<!-- api: M:Inno.Content.PackContentStore.Dispose 27663953b7b44c5bdb47a7b327db749c1bfc35b3d99548d99630ab7dca43dfb3 -->

```csharp
public void Inno.Content.PackContentStore.Dispose()
```

Stops issuing leases and closes the archive after every existing lease and stream releases its pin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/PackContentStore.cs#L53).

## `descriptor`

<a id="api-9ecaecbd2b816783"></a>
<!-- api: P:Inno.Content.PackContentStore.descriptor db474a8d5db1537816a36df6be570bccb17ae02e9a7dadb438d509d917b68366 -->

```csharp
public Inno.Content.ContentPackDescriptor Inno.Content.PackContentStore.descriptor { get; }
```

Gets the immutable complete-pack identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/PackContentStore.cs#L32).

## `index`

<a id="api-7a46dbbaf8c261d7"></a>
<!-- api: P:Inno.Content.PackContentStore.index 3e21ea281b80f014517d8c3aa5a82902fa8655343ada94977a1f34222e34126c -->

```csharp
public Inno.Content.ContentPackIndex Inno.Content.PackContentStore.index { get; }
```

Gets the immutable complete payload inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/PackContentStore.cs#L35).
