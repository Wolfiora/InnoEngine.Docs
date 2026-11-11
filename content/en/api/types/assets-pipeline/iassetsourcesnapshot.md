---
title: "IAssetSourceSnapshot"
description: "Reference for IAssetSourceSnapshot in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.3e83463bec927cbb
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `IAssetSourceSnapshot`

This reference describes `IAssetSourceSnapshot` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Assets.IAssetArtifactLookup`.

## Members

| Member | Kind |
| --- | --- |
| [`GetFileSystemEntries`](#api-31c71aa36a838937) | Method |
| [```Load``1```](#api-c5135c031069d875) | Method |
| [`TryGetInfo`](#api-2351d96d66266759) | Method |
| [`sourceMounts`](#api-ca94c9831185e8ec) | Property |

## Type declaration

<a id="api-3e83463bec927cbb"></a>
<!-- api: T:Inno.Assets.Pipeline.IAssetSourceSnapshot 66740fc19f3445a88f74914dead2f6b80f79463b83a4198ac1def9e144e2ec5b -->

```csharp
public interface Inno.Assets.Pipeline.IAssetSourceSnapshot : Inno.Assets.IAssetArtifactLookup
```

Provides read-only authoring source access for active or isolated candidate compilation.

**Constraints:** Capture inputs on the owner thread and retain the owning generation transaction until all
asynchronous consumers drain. This view neither activates nor commits its underlying catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/IAssetSourceSnapshot.cs#L15).

## `GetFileSystemEntries`

<a id="api-31c71aa36a838937"></a>
<!-- api: M:Inno.Assets.Pipeline.IAssetSourceSnapshot.GetFileSystemEntries(System.Boolean) 5083adfa6e5a255ce536a067de143fa296748eb3e589422da1c596d8c4f23a47 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.IAssetSourceSnapshot.GetFileSystemEntries(bool includeDirectories = true)
```

Captures the indexed entries represented by this view.

**Parameter `includeDirectories`:** Whether directory entries are included.

**Returns:** A stable entry collection for owner-thread input discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/IAssetSourceSnapshot.cs#L31).

## ```Load``1```

<a id="api-c5135c031069d875"></a>
<!-- api: M:Inno.Assets.Pipeline.IAssetSourceSnapshot.Load``1(Inno.Assets.AssetPath) cd9b8f87dc41b573f296d547d4c6fa1962cdf31122ed25db725ee902914376f1 -->

```csharp
TAsset Inno.Assets.Pipeline.IAssetSourceSnapshot.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads an authoring asset without publishing a candidate catalog.

**Type parameter `TAsset`:** The required authoring asset type.

**Parameter `path`:** The isolated source path.

**Returns:** The resolved authoring asset.

**Throws `System.InvalidOperationException`:** No compatible asset can be loaded from this view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/IAssetSourceSnapshot.cs#L48).

## `TryGetInfo`

<a id="api-2351d96d66266759"></a>
<!-- api: M:Inno.Assets.Pipeline.IAssetSourceSnapshot.TryGetInfo(Inno.Assets.AssetPath,Inno.Assets.AssetInfo@) c8297396c199d66ccbace469157424314f2753ab12e75816e3bbaa8bfae6531b -->

```csharp
bool Inno.Assets.Pipeline.IAssetSourceSnapshot.TryGetInfo(Inno.Assets.AssetPath path, out Inno.Assets.AssetInfo? info)
```

Resolves immutable catalog information by source path.

**Parameter `path`:** The isolated source path.

**Parameter `info`:** The catalog information, or null when the source is absent.

**Returns:** True when catalog information exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/IAssetSourceSnapshot.cs#L62).

## `sourceMounts`

<a id="api-ca94c9831185e8ec"></a>
<!-- api: P:Inno.Assets.Pipeline.IAssetSourceSnapshot.sourceMounts 8d0ee8819c466cec7105ad4602203103c6a2f9586c109599820665a344760839 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> Inno.Assets.Pipeline.IAssetSourceSnapshot.sourceMounts { get; }
```

Gets the source mounts represented by this view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/IAssetSourceSnapshot.cs#L20).
