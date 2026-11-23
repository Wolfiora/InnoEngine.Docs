---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.10574e15ee7e0ce0b4246372d2039a9504535cd126af68f869f49e25dd922d02
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetInfo.#ctor(System.Guid,InnoEngine.Assets.AssetPath,InnoEngine.Assets.AssetSourceKind,InnoEngine.Assets.AssetImportStatus,System.String,System.Guid,InnoEngine.Assets.AssetArtifactKey,InnoEngine.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String})
title: AssetInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: f5949705ed5b2b6c08d089c8883c7a0b94bf7d157650e94ed39a14d7d06bf908
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** Persistent identity assigned to the source asset.

**Parameter `assetPath`:** Current isolated source path.

**Parameter `sourceKind`:** Whether the catalog entry represents a file or directory.

**Parameter `status`:** Current import status.

**Parameter `importerID`:** Stable importer identifier, or an empty value when none applies.

**Parameter `stableAssetTypeID`:** Stable imported asset type identity.

**Parameter `artifactKey`:** Current committed artifact key.

**Parameter `lastSuccessfulArtifactKey`:** Most recent successfully imported artifact key.

**Parameter `diagnostics`:** Latest import diagnostics, or `null` for none.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `assetPath` is invalid.
