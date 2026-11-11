---
title: "StandardAdapterSelection"
description: "Reference for StandardAdapterSelection in Inno.Adapter.Default."
uid: api.inno.adapter.default.7295e25468fef3d1
kind: api
owners:
  - Inno.Adapter.Default
apiSurface: source-clr
contracts:
  - project.inno-adapter-default
---
# `StandardAdapterSelection`

This reference describes `StandardAdapterSelection` in `Inno.Adapter.Default`. Read the [shared contract](../../../projects/inno-adapter-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-1a2a29232adef868) | Method |

## Type declaration

<a id="api-7295e25468fef3d1"></a>
<!-- api: T:Inno.Adapter.Default.StandardAdapterSelection 3750ba4667244be97c62a6b39e21851cec965960738838c595613337c7964825 -->

```csharp
public static class Inno.Adapter.Default.StandardAdapterSelection
```

Explicitly selects the shared backends shipped by the standard runtime composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/StandardAdapterSelection.cs#L14).

## `Create`

<a id="api-1a2a29232adef868"></a>
<!-- api: M:Inno.Adapter.Default.StandardAdapterSelection.Create(Inno.Adapter.Storage.StorageBackendId) e3afcde071676a1265810fc95f3c34a0831fccb5649c935e7cc2a4097f516348 -->

```csharp
public static Inno.Adapter.AdapterSelection Inno.Adapter.Default.StandardAdapterSelection.Create(Inno.Adapter.Storage.StorageBackendId storage)
```

Creates a complete selection while leaving the location-dependent storage choice to the product.

**Parameter `storage`:** The storage implementation explicitly registered by the product.

**Returns:** A fully assigned standard selection; its catalog must still be validated before creating resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/StandardAdapterSelection.cs#L25).
