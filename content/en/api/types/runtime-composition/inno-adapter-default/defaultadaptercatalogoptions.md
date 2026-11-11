---
title: "DefaultAdapterCatalogOptions"
description: "Reference for DefaultAdapterCatalogOptions in Inno.Adapter.Default."
uid: api.inno.adapter.default.05e7cb58d9bc5807
kind: api
owners:
  - Inno.Adapter.Default
apiSurface: source-clr
contracts:
  - project.inno-adapter-default
---
# `DefaultAdapterCatalogOptions`

This reference describes `DefaultAdapterCatalogOptions` in `Inno.Adapter.Default`. Read the [shared contract](../../../projects/inno-adapter-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e66bd6de6cc4a8dc) | Method |
| [`platform`](#api-9cc148de841de29e) | Property |
| [`rendering`](#api-402e919d359a6e29) | Property |
| [`storage`](#api-44922d6de25b1cdd) | Property |

## Type declaration

<a id="api-05e7cb58d9bc5807"></a>
<!-- api: T:Inno.Adapter.Default.DefaultAdapterCatalogOptions e94de83350f7357fa32718f145dce40d225e59c82f38f65d4d91b8283db66dd9 -->

```csharp
public sealed class Inno.Adapter.Default.DefaultAdapterCatalogOptions
```

Supplies host-owned services whose locations cannot be inferred by the engine distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalogOptions.cs#L10).

## `#ctor`

<a id="api-e66bd6de6cc4a8dc"></a>
<!-- api: M:Inno.Adapter.Default.DefaultAdapterCatalogOptions.#ctor 015be8ab004e9a9455c696ee7de7d38ea898161480ee509ab995716bdc1fef40 -->

```csharp
public Inno.Adapter.Default.DefaultAdapterCatalogOptions.DefaultAdapterCatalogOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalogOptions.cs#L10).

## `platform`

<a id="api-9cc148de841de29e"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalogOptions.platform 3964aeeab94ed17d4bef4629ed82ba278a12f38e8f1dcf41d8f25b22f82afe81 -->

```csharp
public required Inno.Adapter.Platform.IPlatformBackendFactory Inno.Adapter.Default.DefaultAdapterCatalogOptions.platform { get; init; }
```

Gets or initializes the explicitly selected platform factory and host integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalogOptions.cs#L15).

## `rendering`

<a id="api-402e919d359a6e29"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalogOptions.rendering 6f844e6b73cda218caeccb1fdfb6c043f24eebf15ea3536b515ec160a5301156 -->

```csharp
public required Inno.Adapter.Rendering.IRenderingBackendFactory Inno.Adapter.Default.DefaultAdapterCatalogOptions.rendering { get; init; }
```

Gets or initializes the explicitly selected rendering factory and its host surface integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalogOptions.cs#L25).

## `storage`

<a id="api-44922d6de25b1cdd"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalogOptions.storage a6f9ec62afd8462ce8bd85cde84480129c6a82829100a6a35ac0535b65e0b6c0 -->

```csharp
public required Inno.Adapter.Storage.IStorageBackendFactory Inno.Adapter.Default.DefaultAdapterCatalogOptions.storage { get; init; }
```

Gets or initializes the immutable storage factory configured for this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalogOptions.cs#L20).
