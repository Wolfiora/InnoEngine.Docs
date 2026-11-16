---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.84d01c4dc49af81ad6fa1cecefeef3d82fe750f47835714301484be53a9c0e8d
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceId},System.Int32,System.Int32,System.Int64)
title: AssetRuntimeContentInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 529e91c331b6bca407f6955c7814acd9cb3e8fc2db9fd371bcf0a55592d998b3
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
