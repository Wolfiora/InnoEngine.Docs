---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d202a60f913b8762b5fe2dc6c2abf13b7d5dc8cba6b3ccfad13ac54878fd0744
symbol: engine:Inno.Assets:M:Inno.Assets.AssetInfo.#ctor(System.Guid,Inno.Assets.AssetPath,Inno.Assets.AssetSourceKind,Inno.Assets.AssetImportStatus,System.String,System.Guid,Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String})
title: AssetInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: a23417f5135a9a32d0015a456a307aa13292db821da5d7062d6206106f394dc9
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
