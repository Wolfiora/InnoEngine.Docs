---
title: "AssetCatalogCandidate"
description: "Reference for AssetCatalogCandidate in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.f7d90396534a4e24
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetCatalogCandidate`

This reference describes `AssetCatalogCandidate` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Commit`](#api-f7559ab70854450b) | Method |
| [`Dispose`](#api-9d6aad182f72c7e2) | Method |
| [`loader`](#api-9ec48b6bed85ab9a) | Property |

## Type declaration

<a id="api-f7d90396534a4e24"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetCatalogCandidate 8bbc4c581fabc1143bce2ffb90846c20317da563f4ff4c490339c7433c825b41 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetCatalogCandidate : System.IDisposable
```

Owns the isolated catalog storage used to validate one candidate Asset Pipeline generation.

**Constraints:** The caller owns `Inno.Assets.Pipeline.AssetCatalogCandidate.loader` and must dispose it after the candidate has either been
committed or discarded. Disposing this object removes only its rebuildable staging storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetCatalogCandidate.cs#L14).

## `Commit`

<a id="api-f7559ab70854450b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetCatalogCandidate.Commit 5e7f79c4c9a40e5d98cf05b8926416175a097731df40533c82ac43d6f4526a4e -->

```csharp
public void Inno.Assets.Pipeline.AssetCatalogCandidate.Commit()
```

Publishes staged source metadata and atomically promotes the validated catalog, compensating metadata on failure.

**Throws `System.InvalidOperationException`:** Thrown when the candidate has already been committed or disposed.

**Throws `System.IO.IOException`:** Source metadata changed externally, a sidecar cannot be written, or the catalog cannot be promoted.

**Throws `System.UnauthorizedAccessException`:** The operating system rejects a source sidecar or catalog write, including a directory at a file destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetCatalogCandidate.cs#L48).

## `Dispose`

<a id="api-9d6aad182f72c7e2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetCatalogCandidate.Dispose 3901da93cafe6566b8f9be2a79a8d74957c3b1c86d720d34d52a37391030dce7 -->

```csharp
public void Inno.Assets.Pipeline.AssetCatalogCandidate.Dispose()
```

Removes the candidate catalog staging storage without disposing the candidate loader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetCatalogCandidate.cs#L60).

## `loader`

<a id="api-9ec48b6bed85ab9a"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetCatalogCandidate.loader 67cc62cb0080aac04495b948fcb37106056b605852c84f1c85f1bfaf027d4afb -->

```csharp
public Inno.Assets.Pipeline.AssetLoader Inno.Assets.Pipeline.AssetCatalogCandidate.loader { get; }
```

Gets the isolated loader whose catalog and in-memory records represent the candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetCatalogCandidate.cs#L34).
