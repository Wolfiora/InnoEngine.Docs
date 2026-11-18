---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d202a60f913b8762b5fe2dc6c2abf13b7d5dc8cba6b3ccfad13ac54878fd0744
symbol: engine:Inno.Assets:M:Inno.Assets.AssetInfo.#ctor(System.Guid,Inno.Assets.AssetPath,Inno.Assets.AssetSourceKind,Inno.Assets.AssetImportStatus,System.String,System.Guid,Inno.Assets.AssetArtifactKey,Inno.Assets.AssetArtifactKey,System.Collections.Generic.IReadOnlyList{System.String})
title: AssetInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: c390d7054e392d7580b72ec6459c42e35e075006cfb6d074156a44526acc212f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** Persistent identity assigned to the source asset.

**Parameter `assetPath`:** Current isolated source path.

**Parameter `sourceKind`:** Whether the catalog entry represents a file or directory.

**Parameter `status`:** Current import status.

**Parameter `importerId`:** Stable importer identifier, or an empty value when none applies.

**Parameter `stableAssetTypeId`:** Stable imported asset type identity.

**Parameter `artifactKey`:** Current committed artifact key.

**Parameter `lastSuccessfulArtifactKey`:** Most recent successfully imported artifact key.

**Parameter `diagnostics`:** Latest import diagnostics, or `null` for none.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `assetPath` is invalid.
