---
title: "FileContentCacheOptions"
description: "Reference for FileContentCacheOptions in Inno.Adapter.Content.FileSystem."
uid: api.inno.adapter.content.filesystem.d2d0e800d7f67d7d
kind: api
owners:
  - Inno.Adapter.Content.FileSystem
apiSurface: source-clr
contracts:
  - project.inno-adapter-content-filesystem
---
# `FileContentCacheOptions`

This reference describes `FileContentCacheOptions` in `Inno.Adapter.Content.FileSystem`. Read the [shared contract](../../../projects/inno-adapter-content-filesystem.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-45dbeec9e885603c) | Method |
| [`applicationCacheRoot`](#api-9b8ec072b0f27d3e) | Property |
| [`lockTimeout`](#api-9876c372c6a573ac) | Property |

## Type declaration

<a id="api-d2d0e800d7f67d7d"></a>
<!-- api: T:Inno.Adapter.Content.FileSystem.FileContentCacheOptions 67d618effac1241d6fc93fc3ae55c9ad720941f1c07e681a41658993587bcbdf -->

```csharp
public sealed class Inno.Adapter.Content.FileSystem.FileContentCacheOptions
```

Freezes the host-selected cache location and bounded publication wait for immutable content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentCacheOptions.cs#L9).

## `#ctor`

<a id="api-45dbeec9e885603c"></a>
<!-- api: M:Inno.Adapter.Content.FileSystem.FileContentCacheOptions.#ctor(System.String,System.Nullable{System.TimeSpan}) c4e664ada21ad8497b352eab7272674d8ddb3337dcb59affd27d0a8935ce3dc0 -->

```csharp
public Inno.Adapter.Content.FileSystem.FileContentCacheOptions.FileContentCacheOptions(string applicationCacheRoot, System.TimeSpan? lockTimeout = null)
```

Selects an application-owned absolute cache root without imposing a product prefix.

**Parameter `applicationCacheRoot`:** The host-selected root under which this adapter owns only its Content subtree.

**Parameter `lockTimeout`:** The maximum wait for another preparing process; null selects thirty seconds.

**Throws `System.ArgumentException`:** The root is empty or relative, or the timeout is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentCacheOptions.cs#L23).

## `applicationCacheRoot`

<a id="api-9b8ec072b0f27d3e"></a>
<!-- api: P:Inno.Adapter.Content.FileSystem.FileContentCacheOptions.applicationCacheRoot 77500d1b5d372360e2de8635a3ccfdabe7ed49ce2d25629e370c2644cca321c9 -->

```csharp
public string Inno.Adapter.Content.FileSystem.FileContentCacheOptions.applicationCacheRoot { get; }
```

Gets the host-selected application cache location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentCacheOptions.cs#L39).

## `lockTimeout`

<a id="api-9876c372c6a573ac"></a>
<!-- api: P:Inno.Adapter.Content.FileSystem.FileContentCacheOptions.lockTimeout 37edfbb90d250059085e117e6e93f548a1d4cd8a6f48f564582956a2727d14e7 -->

```csharp
public System.TimeSpan Inno.Adapter.Content.FileSystem.FileContentCacheOptions.lockTimeout { get; }
```

Gets the bounded exclusive preparation wait.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/FileSystem/runtime/Inno.Adapter.Content.FileSystem/FileContentCacheOptions.cs#L44).
