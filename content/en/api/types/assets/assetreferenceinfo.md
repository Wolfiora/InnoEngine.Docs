---
title: "AssetReferenceInfo"
description: "Reference for AssetReferenceInfo in Inno.Assets."
uid: api.inno.assets.e599d05b5d964cf8
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetReferenceInfo`

This reference describes `AssetReferenceInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c4c5ab5778d05fb0) | Method |
| [`assetPath`](#api-61271a253fb2e58e) | Property |
| [`contentVersion`](#api-15751c69021d2ef4) | Property |
| [`isLoaded`](#api-6085edfb27d2694c) | Property |
| [`knownReferenceCount`](#api-4f34858e8f582900) | Property |
| [`lastSweepReachability`](#api-54f57bec1fc8da42) | Property |
| [`persistentId`](#api-277b1634fd3fcf8d) | Property |
| [`references`](#api-e895085475fdfcba) | Property |

## Type declaration

<a id="api-e599d05b5d964cf8"></a>
<!-- api: T:Inno.Assets.AssetReferenceInfo 8a8ba11653b431f5e7a4f1d235df13a1b4ca8e843ac24af9d96c46502a245989 -->

```csharp
public sealed class Inno.Assets.AssetReferenceInfo
```

Provides a stable diagnostic snapshot of references known to the asset pipeline.

**Constraints:** The known reference count is not the number of CLR strong references and is never used
to decide whether an asset can be collected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L14).

## `#ctor`

<a id="api-c4c5ab5778d05fb0"></a>
<!-- api: M:Inno.Assets.AssetReferenceInfo.#ctor(System.Guid,Inno.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetReferenceLocation}) cc6e4d07f6912fcdb4750ce49de83a855868045b58bb468ec3a0ea6a50ba7071 -->

```csharp
public Inno.Assets.AssetReferenceInfo.AssetReferenceInfo(System.Guid persistentId, Inno.Assets.AssetPath assetPath, long contentVersion, bool isLoaded, bool? lastSweepReachability, System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetReferenceLocation> references)
```

Freezes one diagnostic view of the engine-known references to an asset.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L37).

## `assetPath`

<a id="api-61271a253fb2e58e"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.assetPath ab92bd00193bda459553375611c887f6924e35816ee4dc35e9d4aeee54f7579d -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.AssetReferenceInfo.assetPath { get; }
```

Gets the current mount-qualified asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L62).

## `contentVersion`

<a id="api-15751c69021d2ef4"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.contentVersion a0e9f8ea17d105a7cd27fbab4c32ce8d1d92aa056b2d29400f4f04e4e8da88b8 -->

```csharp
public long Inno.Assets.AssetReferenceInfo.contentVersion { get; }
```

Gets the current runtime content version.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L67).

## `isLoaded`

<a id="api-6085edfb27d2694c"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.isLoaded 60da52c2cca88fdd12a4b85e0219d3d33b340bbaedbdd47fa9b27d90622d9d03 -->

```csharp
public bool Inno.Assets.AssetReferenceInfo.isLoaded { get; }
```

Gets whether the asset is currently held by the loader cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L72).

## `knownReferenceCount`

<a id="api-4f34858e8f582900"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.knownReferenceCount b1b5e890be2e1dec749dcfcf5507fb4cad75b62b4605264da187d0aea00925ec -->

```csharp
public int Inno.Assets.AssetReferenceInfo.knownReferenceCount { get; }
```

Gets the number of engine-known reference locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L83).

## `lastSweepReachability`

<a id="api-54f57bec1fc8da42"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.lastSweepReachability 2f73395b04b64a3d1811352cb7293a9dde6c21acb397beedd2edff22c689a5af -->

```csharp
public bool? Inno.Assets.AssetReferenceInfo.lastSweepReachability { get; }
```

Gets whether an external managed reference was found by the previous unused-asset sweep,
or `null` when no sweep has inspected this asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L78).

## `persistentId`

<a id="api-277b1634fd3fcf8d"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.persistentId 5837b2df7aa587da19505b8385586061020d0e7044c93358cd2b2f696b313122 -->

```csharp
public System.Guid Inno.Assets.AssetReferenceInfo.persistentId { get; }
```

Gets the persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L57).

## `references`

<a id="api-e895085475fdfcba"></a>
<!-- api: P:Inno.Assets.AssetReferenceInfo.references f3d27694c2b68d7686a57d71252fe0844a606bfbf0d9f879904b997c87bd6b14 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetReferenceLocation> Inno.Assets.AssetReferenceInfo.references { get; }
```

Gets the engine-known reference locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L88).
