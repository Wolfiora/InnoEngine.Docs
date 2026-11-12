---
title: "AssetChange"
description: "Reference for AssetChange in Inno.Assets."
uid: api.inno.assets.runtime-script.7c12b186b4c724ae
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetChange`

This reference describes `AssetChange` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-83b9c0852bb1f92c) | Method |
| [`assetPath`](#api-df8c02d5c4bdaba2) | Property |
| [`kind`](#api-f79a4ab5f1b4ac7d) | Property |
| [`persistentId`](#api-49dba943493590aa) | Property |
| [`previousAssetPath`](#api-501ee9ccb96a4f81) | Property |

## Type declaration

<a id="api-7c12b186b4c724ae"></a>
<!-- api: T:InnoEngine.Assets.AssetChange 0e3588837dc7089e2bd256e9a8e66129e9b11ebef2c6c0c7219a5516ae717882 -->

```csharp
public readonly struct InnoEngine.Assets.AssetChange
```

Describes one committed asset database change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L8).

## `#ctor`

<a id="api-83b9c0852bb1f92c"></a>
<!-- api: M:InnoEngine.Assets.AssetChange.#ctor(InnoEngine.Assets.AssetChangeKind,System.Guid,InnoEngine.Assets.AssetPath,System.Nullable{InnoEngine.Assets.AssetPath}) 975cd6206992e74b5bb0b7e22b8349ab888fee9a4079ef87dc703807f1332c9e -->

```csharp
public InnoEngine.Assets.AssetChange.AssetChange(InnoEngine.Assets.AssetChangeKind kind, System.Guid persistentId, InnoEngine.Assets.AssetPath assetPath, InnoEngine.Assets.AssetPath? previousAssetPath = null)
```

Creates an asset change descriptor.

**Parameter `kind`:** Committed change kind.

**Parameter `persistentId`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L25).

## `assetPath`

<a id="api-df8c02d5c4bdaba2"></a>
<!-- api: P:InnoEngine.Assets.AssetChange.assetPath 1ce45964edd5437b74b268d3dbbe0094c3cdbc48c496e7d87d9d642583686774 -->

```csharp
public InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetChange.assetPath { get; }
```

Gets the current isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L50).

## `kind`

<a id="api-f79a4ab5f1b4ac7d"></a>
<!-- api: P:InnoEngine.Assets.AssetChange.kind 0affd22546fa088ed4c9dae60190cf265871e488452eda1b493730d442b221a6 -->

```csharp
public InnoEngine.Assets.AssetChangeKind InnoEngine.Assets.AssetChange.kind { get; }
```

Gets the change kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L40).

## `persistentId`

<a id="api-49dba943493590aa"></a>
<!-- api: P:InnoEngine.Assets.AssetChange.persistentId 87d59aa285651cb63af85dd3afde54f626cac49aeeacdfce430b1e710503ac09 -->

```csharp
public System.Guid InnoEngine.Assets.AssetChange.persistentId { get; }
```

Gets the persistent identity affected by the change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L45).

## `previousAssetPath`

<a id="api-501ee9ccb96a4f81"></a>
<!-- api: P:InnoEngine.Assets.AssetChange.previousAssetPath 9ff8a196f43cc3cee6491a722294a9d6b0f6f5ce36e272f341daac70f4548e92 -->

```csharp
public InnoEngine.Assets.AssetPath? InnoEngine.Assets.AssetChange.previousAssetPath { get; }
```

Gets the previous isolated path for move operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L55).
