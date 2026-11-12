---
title: "AssetReferenceInfo"
description: "Reference for AssetReferenceInfo in Inno.Assets."
uid: api.inno.assets.runtime-script.78b1ab2b507bb59d
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetReferenceInfo`

This reference describes `AssetReferenceInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ec5e42b648e0179f) | Method |
| [`assetPath`](#api-c390896e9d5b8c54) | Property |
| [`contentVersion`](#api-096b675fca65473c) | Property |
| [`isLoaded`](#api-ec177ae18085441f) | Property |
| [`knownReferenceCount`](#api-e256ecf0a6331318) | Property |
| [`lastSweepReachability`](#api-96ba0874c9dfe7cd) | Property |
| [`persistentId`](#api-0746bd013fdb8972) | Property |
| [`references`](#api-f0e9cfbde9c66bed) | Property |

## Type declaration

<a id="api-78b1ab2b507bb59d"></a>
<!-- api: T:InnoEngine.Assets.AssetReferenceInfo 341fa3e225487697fe6aba5c5b44fde781ff372b0bd086570568331769145d29 -->

```csharp
public sealed class InnoEngine.Assets.AssetReferenceInfo
```

Provides a stable diagnostic snapshot of references known to the asset pipeline.

**Constraints:** The known reference count is not the number of CLR strong references and is never used
to decide whether an asset can be collected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L14).

## `#ctor`

<a id="api-ec5e42b648e0179f"></a>
<!-- api: M:InnoEngine.Assets.AssetReferenceInfo.#ctor(System.Guid,InnoEngine.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetReferenceLocation}) eb1108d2d12c3c8139a1d4782dbb462f0a673ee046895599ec7a974d6529a637 -->

```csharp
public InnoEngine.Assets.AssetReferenceInfo.AssetReferenceInfo(System.Guid persistentId, InnoEngine.Assets.AssetPath assetPath, long contentVersion, bool isLoaded, bool? lastSweepReachability, System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetReferenceLocation> references)
```

Freezes one diagnostic view of the engine-known references to an asset.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L37).

## `assetPath`

<a id="api-c390896e9d5b8c54"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.assetPath 2c971a43904d5edd9c0c8534033e278a9d5fca4834e3a49c6489b8dbeeb6bac1 -->

```csharp
public InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetReferenceInfo.assetPath { get; }
```

Gets the current mount-qualified asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L62).

## `contentVersion`

<a id="api-096b675fca65473c"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.contentVersion da7c164b3e7d058bffc29c0c214f71b947fe1b9d97b4c2c55e461cf85434ca30 -->

```csharp
public long InnoEngine.Assets.AssetReferenceInfo.contentVersion { get; }
```

Gets the current runtime content version.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L67).

## `isLoaded`

<a id="api-ec177ae18085441f"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.isLoaded 595bf6b2106683329c2dffa8f7786d32561f1ec5f3509b3917fd292a3cf09e8d -->

```csharp
public bool InnoEngine.Assets.AssetReferenceInfo.isLoaded { get; }
```

Gets whether the asset is currently held by the loader cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L72).

## `knownReferenceCount`

<a id="api-e256ecf0a6331318"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.knownReferenceCount 426a752be96148b73fee101cf0a5709cd4a3376dc098beec7c3e35ad216e7a5f -->

```csharp
public int InnoEngine.Assets.AssetReferenceInfo.knownReferenceCount { get; }
```

Gets the number of engine-known reference locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L83).

## `lastSweepReachability`

<a id="api-96ba0874c9dfe7cd"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.lastSweepReachability a68e0a678f71b80c631904b4cb0942431ddb610c71dc6ce5944b27d379354649 -->

```csharp
public bool? InnoEngine.Assets.AssetReferenceInfo.lastSweepReachability { get; }
```

Gets whether an external managed reference was found by the previous unused-asset sweep,
or `null` when no sweep has inspected this asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L78).

## `persistentId`

<a id="api-0746bd013fdb8972"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.persistentId 9e648615dbb49a7fde5a98fcc24b7a664e5ae2ef05007823f8135f7dad1d9607 -->

```csharp
public System.Guid InnoEngine.Assets.AssetReferenceInfo.persistentId { get; }
```

Gets the persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L57).

## `references`

<a id="api-f0e9cfbde9c66bed"></a>
<!-- api: P:InnoEngine.Assets.AssetReferenceInfo.references 658b14b3e4f092afaf5a2c5ef84e0909df8c435c126784ff4565eeb2e293a78b -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Assets.AssetReferenceLocation> InnoEngine.Assets.AssetReferenceInfo.references { get; }
```

Gets the engine-known reference locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetReferenceInfo.cs#L88).
