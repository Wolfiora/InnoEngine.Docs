---
title: "AssetInfo"
description: "Reference for AssetInfo in Inno.Assets."
uid: api.inno.assets.a29f49e0b140d272
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetInfo`

This reference describes `AssetInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ac868349a43897c2) | Method |
| [`artifactKey`](#api-251b9bc778f56a64) | Property |
| [`assetPath`](#api-6b9b9132bed937da) | Property |
| [`diagnostics`](#api-4f0b02a63e759f09) | Property |
| [`importerId`](#api-084d9fbcb0d961e4) | Property |
| [`lastSuccessfulArtifactKey`](#api-0b2115d2cd36fa32) | Property |
| [`persistentId`](#api-cb212f2c86bf767e) | Property |
| [`sourceKind`](#api-57c04d91ea2e179c) | Property |
| [`stableAssetTypeId`](#api-c6e0898aa832fdfc) | Property |
| [`status`](#api-4d06d61b6cc1cf86) | Property |

## Type declaration

<a id="api-a29f49e0b140d272"></a>
<!-- api: T:Inno.Assets.AssetInfo ae9008bebf7349db042d83b2c703aa6779b9dbd012397a023ede6348fa7e67ee -->

```csharp
public sealed class Inno.Assets.AssetInfo
```

Provides an immutable public snapshot of one cataloged asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L9).

## `#ctor`

<a id="api-ac868349a43897c2"></a>
<!-- api: M:Inno.Assets.AssetInfo.#ctor(System.Guid,Inno.Assets.AssetPath,Inno.Assets.AssetSourceKind,Inno.Assets.AssetImportStatus,System.String,System.Guid,Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String}) d03a1a0b69ba499d5f04b6b508f1d0ff456be3fae49c5dca8053d1c6ed2c9243 -->

```csharp
public Inno.Assets.AssetInfo.AssetInfo(System.Guid persistentId, Inno.Assets.AssetPath assetPath, Inno.Assets.AssetSourceKind sourceKind, Inno.Assets.AssetImportStatus status, string importerId, System.Guid stableAssetTypeId, Inno.Assets.AssetArtifactKey artifactKey, Inno.Assets.AssetArtifactKey lastSuccessfulArtifactKey, System.Collections.Generic.IReadOnlyList<string>? diagnostics = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L44).

## `artifactKey`

<a id="api-251b9bc778f56a64"></a>
<!-- api: P:Inno.Assets.AssetInfo.artifactKey 5afa60113952697c84737eeac6566d8a5a1faf181906b9168fe9188d65c145f1 -->

```csharp
public Inno.Assets.AssetArtifactKey Inno.Assets.AssetInfo.artifactKey { get; }
```

Gets the current committed artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L101).

## `assetPath`

<a id="api-6b9b9132bed937da"></a>
<!-- api: P:Inno.Assets.AssetInfo.assetPath 7a466adf3580c29a207b03bfcbff9877a5c62f71f86a6dd3152c66b5d6a3ab98 -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.AssetInfo.assetPath { get; }
```

Gets the current isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L76).

## `diagnostics`

<a id="api-4f0b02a63e759f09"></a>
<!-- api: P:Inno.Assets.AssetInfo.diagnostics 7d35ff987d997272daec798e290549682877160cd6c76f4adeac944b9f3c61a7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Assets.AssetInfo.diagnostics { get; }
```

Gets diagnostics produced by the latest reconciliation or import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L111).

## `importerId`

<a id="api-084d9fbcb0d961e4"></a>
<!-- api: P:Inno.Assets.AssetInfo.importerId bdd34004c9d78a80754fdf6796f6f2ee23c98912d78edb0b97324843d3b52c05 -->

```csharp
public string Inno.Assets.AssetInfo.importerId { get; }
```

Gets the selected importer identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L91).

## `lastSuccessfulArtifactKey`

<a id="api-0b2115d2cd36fa32"></a>
<!-- api: P:Inno.Assets.AssetInfo.lastSuccessfulArtifactKey 1949fb038c7807e0fc9fb1bb5d6fabcd2b696312c28f8c1bb826fafdff65e407 -->

```csharp
public Inno.Assets.AssetArtifactKey Inno.Assets.AssetInfo.lastSuccessfulArtifactKey { get; }
```

Gets the most recent successfully imported artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L106).

## `persistentId`

<a id="api-cb212f2c86bf767e"></a>
<!-- api: P:Inno.Assets.AssetInfo.persistentId a943384791e0249abef4aadf285d0be605168c9b77c794a10e4300acfff01b4e -->

```csharp
public System.Guid Inno.Assets.AssetInfo.persistentId { get; }
```

Gets the persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L71).

## `sourceKind`

<a id="api-57c04d91ea2e179c"></a>
<!-- api: P:Inno.Assets.AssetInfo.sourceKind aebb1376b66ee31f96bd9f4a1071cf47840405e65fe9aa49fbb128519b096de2 -->

```csharp
public Inno.Assets.AssetSourceKind Inno.Assets.AssetInfo.sourceKind { get; }
```

Gets whether the catalog entry represents a file or directory source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L81).

## `stableAssetTypeId`

<a id="api-c6e0898aa832fdfc"></a>
<!-- api: P:Inno.Assets.AssetInfo.stableAssetTypeId 4c3f52772aa15ff3d2763a42692c7d878411aaba1b5a5e3ff6a27f6d281b963f -->

```csharp
public System.Guid Inno.Assets.AssetInfo.stableAssetTypeId { get; }
```

Gets the stable imported asset type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L96).

## `status`

<a id="api-4d06d61b6cc1cf86"></a>
<!-- api: P:Inno.Assets.AssetInfo.status a0995a6dd64311d460150c0ea7b97dcbd7bb10a52e3a917012f364ff6ebea97b -->

```csharp
public Inno.Assets.AssetImportStatus Inno.Assets.AssetInfo.status { get; }
```

Gets the current import status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetInfo.cs#L86).
