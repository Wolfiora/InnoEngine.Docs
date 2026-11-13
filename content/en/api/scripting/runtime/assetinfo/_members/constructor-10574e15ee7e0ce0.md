---
uid: api.10574e15ee7e0ce0b4246372d2039a9504535cd126af68f869f49e25dd922d02
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetInfo.#ctor(System.Guid,InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetSourceKind,InnoEngine.Assets.AssetImportStatus,System.String,System.Guid,InnoEngine.Assets.AssetArtifactKey,InnoEngine.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 81f26858c74adf3a1b220e3ff9dbbdbabf40ae47688f3b2c90c10d3254cc594d
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
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
