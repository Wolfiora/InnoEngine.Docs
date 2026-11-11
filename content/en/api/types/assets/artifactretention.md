---
title: "ArtifactRetention"
description: "Reference for ArtifactRetention in Inno.Assets."
uid: api.inno.assets.9f6e7162e0b7c353
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `ArtifactRetention`

This reference describes `ArtifactRetention` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetResidencyProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f92ce462c8b557ce) | Method |
| [`GetRetainedKeys`](#api-223892c5bb244960) | Method |
| [`Retain`](#api-600087bc7ab023ec) | Method |

## Type declaration

<a id="api-9f6e7162e0b7c353"></a>
<!-- api: T:Inno.Assets.ArtifactRetention df9fd74ca19ca1b016ed70b45437c2e8b8ece5d399cade4f384049117696ba98 -->

```csharp
public sealed class Inno.Assets.ArtifactRetention : Inno.Assets.AssetResidencyProvider
```

Counts explicit leases over immutable artifact keys independently of asset object residency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/ArtifactRetention.cs#L12).

## `#ctor`

<a id="api-f92ce462c8b557ce"></a>
<!-- api: M:Inno.Assets.ArtifactRetention.#ctor b2cff036b53114c5d8f2f4b52591a4c1971dc928fde648580660f81743ad2074 -->

```csharp
public Inno.Assets.ArtifactRetention.ArtifactRetention()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/ArtifactRetention.cs#L12).

## `GetRetainedKeys`

<a id="api-223892c5bb244960"></a>
<!-- api: M:Inno.Assets.ArtifactRetention.GetRetainedKeys bfede757ee9c168be015e6d8531f18a532c1aeed3eb4aa14dc3e623c28a86c32 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetArtifactKey> Inno.Assets.ArtifactRetention.GetRetainedKeys()
```

Captures the keys a collector must preserve regardless of catalog reachability.

**Returns:** An immutable snapshot; the provider serializes collection with new acquisitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/ArtifactRetention.cs#L55).

## `Retain`

<a id="api-600087bc7ab023ec"></a>
<!-- api: M:Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream}) 9f175c1b7375ac9ed8a7dda0faf877f09fdc7f93b0d8f8a20642d3cbad6026d4 -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo artifact, System.Func<System.IO.Stream> openRead)
```

Retains a verified output before its owner permits cache collection.

**Parameter `artifact`:** Verified immutable metadata; the provider must serialize acquisition with collection.

**Returns:** A lease that releases exactly one reference, including when disposed from another thread.

**Parameter `openRead`:** Opens immutable bytes; this retention owner adds an independent stream pin before invoking it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/ArtifactRetention.cs#L29).
