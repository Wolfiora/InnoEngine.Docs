---
title: "IAssetResidency"
description: "Reference for IAssetResidency in Inno.Assets."
uid: api.inno.assets.6c902a02635d98f6
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `IAssetResidency`

This reference describes `IAssetResidency` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-de997f98057c0f37) | Method |
| [```AcquireAsync``1```](#api-da1022d7c26ca2b2) | Method |
| [```AcquireAsync``1```](#api-9448870a4f155298) | Method |

## Type declaration

<a id="api-6c902a02635d98f6"></a>
<!-- api: T:Inno.Assets.IAssetResidency 1efec412aff5cb0e98bdb8ac672336cd51c4d94e2bf6ef3cb8d93c88b83c950b -->

```csharp
public interface Inno.Assets.IAssetResidency
```

Exposes explicit asynchronous asset and artifact residency ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L12).

## `AcquireArtifact`

<a id="api-de997f98057c0f37"></a>
<!-- api: M:Inno.Assets.IAssetResidency.AcquireArtifact(System.Guid,System.String) 4418cd2e0d5f60db04e853faf1766b84823a24fda041ac14be7afa5210df3e1d -->

```csharp
Inno.Assets.ArtifactLease Inno.Assets.IAssetResidency.AcquireArtifact(System.Guid persistentId, string outputName)
```

Acquires one verified immutable artifact output.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease that keeps the artifact generation available to the caller.

**Throws `System.InvalidOperationException`:** Thrown when the requested artifact does not exist or fails verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L71).

## ```AcquireAsync``1```

<a id="api-da1022d7c26ca2b2"></a>
<!-- api: M:Inno.Assets.IAssetResidency.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken) 8dff615e8f26cd05db285fa77825254a5e709bde85c808fae4ef15ee442b8f70 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.IAssetResidency.AcquireAsync<TAsset>(Inno.Assets.AssetPath path, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical asset by logical path and keeps it resident until the lease is released.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L29).

## ```AcquireAsync``1```

<a id="api-9448870a4f155298"></a>
<!-- api: M:Inno.Assets.IAssetResidency.AcquireAsync``1(System.Guid,System.Threading.CancellationToken) ee7299313179d3ac25a6092ecd0d2c22951a722b7c0de43866680f536f3986f5 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Assets.AssetLease<TAsset>> Inno.Assets.IAssetResidency.AcquireAsync<TAsset>(System.Guid persistentId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken)) where TAsset : Inno.Assets.AssetObject
```

Acquires a canonical asset by persistent identity and keeps it resident until release.

**Type parameter `TAsset`:** Required asset contract.

**Parameter `persistentId`:** Non-empty persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

**Returns:** A lease that owns residency for the canonical asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L50).
