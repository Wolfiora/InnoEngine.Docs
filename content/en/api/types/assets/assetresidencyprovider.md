---
title: "AssetResidencyProvider"
description: "Reference for AssetResidencyProvider in Inno.Assets."
uid: api.inno.assets.2ec72f0add4abbd7
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetResidencyProvider`

This reference describes `AssetResidencyProvider` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e43a10da740d1195) | Method |
| [`CreateArtifactLease`](#api-d81d0dc5cb5edf34) | Method |
| [```CreateAssetLease``1```](#api-32c55277020a8808) | Method |

## Type declaration

<a id="api-2ec72f0add4abbd7"></a>
<!-- api: T:Inno.Assets.AssetResidencyProvider d94a0a02dc62c21ca83be4266a59a7ef49a7b3825845d6de8c86d17b658f9e7b -->

```csharp
public abstract class Inno.Assets.AssetResidencyProvider
```

Provides controlled lease construction to concrete asset residency implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L80).

## `#ctor`

<a id="api-e43a10da740d1195"></a>
<!-- api: M:Inno.Assets.AssetResidencyProvider.#ctor 3b0cbfa27d40f133cf511ad5c5f730846c4776d646891bddacfa3b996614a1a7 -->

```csharp
protected Inno.Assets.AssetResidencyProvider.AssetResidencyProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L80).

## `CreateArtifactLease`

<a id="api-d81d0dc5cb5edf34"></a>
<!-- api: M:Inno.Assets.AssetResidencyProvider.CreateArtifactLease(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream},System.Action) 34bb67732b017e13523afc32f66cecfc5fb8b5b70574c918230cc33f40f54d14 -->

```csharp
protected static Inno.Assets.ArtifactLease Inno.Assets.AssetResidencyProvider.CreateArtifactLease(Inno.Assets.AssetArtifactInfo artifact, System.Func<System.IO.Stream> openRead, System.Action release)
```

Creates one immutable artifact residency lease.

**Parameter `artifact`:** Verified artifact metadata retained by the lease.

**Parameter `openRead`:** Opens immutable bytes with an independent provider pin owned by the returned stream.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

**Returns:** A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L119).

## ```CreateAssetLease``1```

<a id="api-32c55277020a8808"></a>
<!-- api: M:Inno.Assets.AssetResidencyProvider.CreateAssetLease``1(``0,System.Action) baa7862b17892c76d42261f03e9ea76c5fbde75391d8e2a3adf41119f6e0cc4c -->

```csharp
protected static Inno.Assets.AssetLease<TAsset> Inno.Assets.AssetResidencyProvider.CreateAssetLease<TAsset>(TAsset asset, System.Action release) where TAsset : Inno.Assets.AssetObject
```

Creates one strongly typed asset residency lease.

**Type parameter `TAsset`:** Concrete canonical asset type.

**Parameter `asset`:** Canonical asset retained by the lease.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

**Returns:** A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L97).
