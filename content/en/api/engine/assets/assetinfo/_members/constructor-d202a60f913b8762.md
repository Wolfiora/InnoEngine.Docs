---
uid: api.d202a60f913b8762b5fe2dc6c2abf13b7d5dc8cba6b3ccfad13ac54878fd0744
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetInfo.#ctor(System.Guid,Inno.Assets.AssetPath,Inno.Assets.AssetSourceKind,Inno.Assets.AssetImportStatus,System.String,System.Guid,Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 7022b43876c11c9f1cb358de745e8d9a2d20a5a2a9275232e04316fb9de922de
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

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

**Exception `T:System.ArgumentException`:** Thrown when `assetPath` is invalid.
