---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.84d01c4dc49af81ad6fa1cecefeef3d82fe750f47835714301484be53a9c0e8d
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceId},System.Int32,System.Int32,System.Int64)
title: AssetRuntimeContentInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: fccadb3ff2cb15eaf795b4425aadc6a6300dd8964dd0e02c5ec98b03d7c41b96
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
