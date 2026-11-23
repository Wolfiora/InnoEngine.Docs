---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b8ac606bb472edb847048363adc4bd947904b86a5a81d5a68c22a15e5926f583
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceID},System.Int32,System.Int32,System.Int64)
title: AssetRuntimeContentInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: dfb67018c4591bd1e7a530b7f8c1a83f198ec0daf5a21d79d306298ed0c22325
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sources`:** Source identities represented by the deployed catalog; their values are copied during construction.

**Parameter `assetCount`:** Number of runtime-scoped assets in the deployed catalog.

**Parameter `artifactBundleCount`:** Number of unique content-addressed bundles.

**Parameter `totalBytes`:** Total bytes copied into the runtime content root.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source inventory is absent.
