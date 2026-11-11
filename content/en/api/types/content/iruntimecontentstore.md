---
title: "IRuntimeContentStore"
description: "Reference for IRuntimeContentStore in Inno.Content."
uid: api.inno.content.cc18454e1f82346a
kind: api
owners:
  - Inno.Content
apiSurface: source-clr
contracts:
  - project.inno-content
---
# `IRuntimeContentStore`

This reference describes `IRuntimeContentStore` in `Inno.Content`. Read the [shared contract](../../projects/inno-content.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Acquire`](#api-f0088b3a3100231f) | Method |
| [`descriptor`](#api-cbd5b32e92f438e2) | Property |
| [`index`](#api-52a476edb19d4b4a) | Property |

## Type declaration

<a id="api-cc18454e1f82346a"></a>
<!-- api: T:Inno.Content.IRuntimeContentStore cb4c1d8d56d5cfa7b6bdf9c874bf1d7e0feb6e29b620b44418b655b06a61345a -->

```csharp
public interface Inno.Content.IRuntimeContentStore : System.IDisposable
```

Provides immutable content leases without exposing deployment paths or writable authoring sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/IRuntimeContentStore.cs#L8).

## `Acquire`

<a id="api-f0088b3a3100231f"></a>
<!-- api: M:Inno.Content.IRuntimeContentStore.Acquire(Inno.Content.ContentKey) f6c9e24161da3be621d2a2161f1d2832a91a7126981b380f1c4fea54b7025254 -->

```csharp
Inno.Content.ContentReadLease Inno.Content.IRuntimeContentStore.Acquire(Inno.Content.ContentKey key)
```

Pins an entry against source retirement and supplies independent read streams.

**Parameter `key`:** The exact assigned logical key.

**Returns:** A caller-owned lease whose streams remain usable after this store closes.

**Throws `System.IO.FileNotFoundException`:** The exact content key is not present.

**Throws `System.ObjectDisposedException`:** The store has closed and cannot issue new leases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/IRuntimeContentStore.cs#L35).

## `descriptor`

<a id="api-cbd5b32e92f438e2"></a>
<!-- api: P:Inno.Content.IRuntimeContentStore.descriptor 21315c3f15d05b49c3fcfd303ff5c570a53e547e5cfdcbbc2556b092c68581bc -->

```csharp
Inno.Content.ContentPackDescriptor Inno.Content.IRuntimeContentStore.descriptor { get; }
```

Gets the immutable complete-pack identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/IRuntimeContentStore.cs#L13).

## `index`

<a id="api-52a476edb19d4b4a"></a>
<!-- api: P:Inno.Content.IRuntimeContentStore.index 84c3dc21a712481e8f7e415622dd4eb30dd00c9f439ce79b4106a3a822606956 -->

```csharp
Inno.Content.ContentPackIndex Inno.Content.IRuntimeContentStore.index { get; }
```

Gets the immutable complete payload inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/deployment/Inno.Content/IRuntimeContentStore.cs#L18).
