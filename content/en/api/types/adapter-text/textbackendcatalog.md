---
title: "TextBackendCatalog"
description: "Reference for TextBackendCatalog in Inno.Adapter.Text."
uid: api.inno.adapter.text.9eb482e8087f6882
kind: api
owners:
  - Inno.Adapter.Text
apiSurface: source-clr
contracts:
  - project.inno-adapter-text#provider-and-ownership-contract
---
# `TextBackendCatalog`

This reference describes `TextBackendCatalog` in `Inno.Adapter.Text`. Read the [shared contract](../../projects/inno-adapter-text.md#provider-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Text.ITextBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-04623a0626133d72) | Method |
| [`CreateBackend`](#api-57961aac1c9992dd) | Method |
| [`supportedBackends`](#api-26a9b4a523c29b3d) | Property |

## Type declaration

<a id="api-9eb482e8087f6882"></a>
<!-- api: T:Inno.Adapter.Text.TextBackendCatalog 75a43e2825b11606af8bd49d92c72fccfa4aeb5213a1010efe45475592864248 -->

```csharp
public sealed class Inno.Adapter.Text.TextBackendCatalog : Inno.Adapter.Text.ITextBackendFactory
```

Resolves text providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendCatalog.cs#L11).

## `#ctor`

<a id="api-04623a0626133d72"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider}) 104d55c4b8cc9247555aa03045583d413db2a789d72b895f8a1b66b887302a3c -->

```csharp
public Inno.Adapter.Text.TextBackendCatalog.TextBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Text.TextBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendCatalog.cs#L27).

## `CreateBackend`

<a id="api-57961aac1c9992dd"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendCatalog.CreateBackend(Inno.Adapter.Text.TextBackendId) 40e43f5ca80b68dfc68ab984454b54abff6d2a40c6f0e2465821ac1361db379d -->

```csharp
public Inno.Text.ITextBackend Inno.Adapter.Text.TextBackendCatalog.CreateBackend(Inno.Adapter.Text.TextBackendId backend)
```

Creates one caller-owned text backend.

**Parameter `backend`:** The selected backend implementation.

**Returns:** A newly allocated text backend.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-26a9b4a523c29b3d"></a>
<!-- api: P:Inno.Adapter.Text.TextBackendCatalog.supportedBackends 04d6c6e5be34a2df94f2aabec4999f6d9094bb504c84ea229df74c3c4db180b3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Text.TextBackendId> Inno.Adapter.Text.TextBackendCatalog.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendCatalog.cs#L39).
