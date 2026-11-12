---
title: "AssetInfo"
description: "Reference for AssetInfo in Inno.Assets."
uid: api.inno.assets.runtime-script.963aa2cebc3411b2
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetInfo`

This reference describes `AssetInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f997bdd74703dc84) | Method |
| [`artifactKey`](#api-e5103834656f9058) | Property |
| [`assetPath`](#api-cbefc58e9ae6c803) | Property |
| [`diagnostics`](#api-28d506ba3b6bb877) | Property |
| [`importerId`](#api-13280d312ea9f72b) | Property |
| [`lastSuccessfulArtifactKey`](#api-08048a05fe6954e3) | Property |
| [`persistentId`](#api-1888dbd37f4d8266) | Property |
| [`sourceKind`](#api-0c507667f924f7f7) | Property |
| [`stableAssetTypeId`](#api-6f4e36b20ef26a06) | Property |
| [`status`](#api-29dade00ef027882) | Property |

## Type declaration

<a id="api-963aa2cebc3411b2"></a>
<!-- api: T:InnoEngine.Assets.AssetInfo 5b0ca3b6243e66e56be407f5acd6abe04c60d9be3918cb93a6a99b8f226bc68f -->

```csharp
public sealed class InnoEngine.Assets.AssetInfo
```

Provides an immutable public snapshot of one cataloged asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L9).

## `#ctor`

<a id="api-f997bdd74703dc84"></a>
<!-- api: M:InnoEngine.Assets.AssetInfo.#ctor(System.Guid,InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetSourceKind,InnoEngine.Assets.AssetImportStatus,System.String,System.Guid,InnoEngine.Assets.AssetArtifactKey,InnoEngine.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String}) a2c17cf80472ffd32ac850e0b4e932c40cd6c8e90656e7fd138181ea4c991f61 -->

```csharp
public InnoEngine.Assets.AssetInfo.AssetInfo(System.Guid persistentId, InnoEngine.Assets.AssetPath assetPath, InnoEngine.Assets.AssetSourceKind sourceKind, InnoEngine.Assets.AssetImportStatus status, string importerId, System.Guid stableAssetTypeId, InnoEngine.Assets.AssetArtifactKey artifactKey, InnoEngine.Assets.AssetArtifactKey lastSuccessfulArtifactKey, System.Collections.Generic.IReadOnlyList<string>? diagnostics = null)
```

Creates an asset information snapshot.

**Parameter `persistentId`:** Persistent identity assigned to the source asset.

**Parameter `assetPath`:** Current isolated source path.

**Parameter `sourceKind`:** Whether the catalog entry represents a file or directory.

**Parameter `status`:** Current import status.

**Parameter `importerId`:** Stable importer identifier, or an empty value when none applies.

**Parameter `stableAssetTypeId`:** Stable imported asset type identity.

**Parameter `artifactKey`:** Current committed artifact key.

**Parameter `lastSuccessfulArtifactKey`:** Most recent successfully imported artifact key.

**Parameter `diagnostics`:** Latest import diagnostics, or `null` for none.

**Throws `System.ArgumentException`:** Thrown when `assetPath` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L44).

## `artifactKey`

<a id="api-e5103834656f9058"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.artifactKey 9b4a48682dc609bbc317c0b9770501d5fe1c9e89f100f0c58061f9a9d3d1baa8 -->

```csharp
public InnoEngine.Assets.AssetArtifactKey InnoEngine.Assets.AssetInfo.artifactKey { get; }
```

Gets the current committed artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L101).

## `assetPath`

<a id="api-cbefc58e9ae6c803"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.assetPath 434b03111cd55e00212e35756575efda6618dddc2141b8d2a6919b7de2fe7ecc -->

```csharp
public InnoEngine.Assets.AssetPath InnoEngine.Assets.AssetInfo.assetPath { get; }
```

Gets the current isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L76).

## `diagnostics`

<a id="api-28d506ba3b6bb877"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.diagnostics 886cc2a279e3c27be95b638de539c8579e2cc2653d5ccac6575adbd6bb90cb32 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Assets.AssetInfo.diagnostics { get; }
```

Gets diagnostics produced by the latest reconciliation or import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L111).

## `importerId`

<a id="api-13280d312ea9f72b"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.importerId a47861d8a77761f8061e3221060bed1283c83f0808358e4943c8bd502657e0b0 -->

```csharp
public string InnoEngine.Assets.AssetInfo.importerId { get; }
```

Gets the selected importer identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L91).

## `lastSuccessfulArtifactKey`

<a id="api-08048a05fe6954e3"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.lastSuccessfulArtifactKey 12f758428c8b30ab51c86992a70f82485292a41f1c96b03b36270d58ddbcc212 -->

```csharp
public InnoEngine.Assets.AssetArtifactKey InnoEngine.Assets.AssetInfo.lastSuccessfulArtifactKey { get; }
```

Gets the most recent successfully imported artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L106).

## `persistentId`

<a id="api-1888dbd37f4d8266"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.persistentId e54ae7d155f97327366857a275be54b6a6c62d3182319de0f18645211dba2d2e -->

```csharp
public System.Guid InnoEngine.Assets.AssetInfo.persistentId { get; }
```

Gets the persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L71).

## `sourceKind`

<a id="api-0c507667f924f7f7"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.sourceKind c27a97c074bb949203fdb3f6f5a8e19e45a5322b24cce71ab0fa54fe4d1ee968 -->

```csharp
public InnoEngine.Assets.AssetSourceKind InnoEngine.Assets.AssetInfo.sourceKind { get; }
```

Gets whether the catalog entry represents a file or directory source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L81).

## `stableAssetTypeId`

<a id="api-6f4e36b20ef26a06"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.stableAssetTypeId f15ec153a354488a7a199b6cc0fcc4f5381898f25fe444001852ea353104f57b -->

```csharp
public System.Guid InnoEngine.Assets.AssetInfo.stableAssetTypeId { get; }
```

Gets the stable imported asset type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L96).

## `status`

<a id="api-29dade00ef027882"></a>
<!-- api: P:InnoEngine.Assets.AssetInfo.status 17e62a7ee8338351f876c22d14d9468af3c466485750910190630a5397c13007 -->

```csharp
public InnoEngine.Assets.AssetImportStatus InnoEngine.Assets.AssetInfo.status { get; }
```

Gets the current import status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetInfo.cs#L86).
