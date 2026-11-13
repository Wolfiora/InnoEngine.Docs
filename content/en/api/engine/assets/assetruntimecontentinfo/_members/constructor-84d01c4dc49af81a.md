---
uid: api.84d01c4dc49af81ad6fa1cecefeef3d82fe750f47835714301484be53a9c0e8d
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceId},System.Int32,System.Int32,System.Int64)"
source: xml
reviewed: f0390ea96f20e438a6ef984303a0da633e50181e49383f5e0c853d2727b993f6
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates an immutable runtime content summary with its own frozen source inventory.

**Parameter `sources`:** Source identities represented by the deployed catalog; their values are copied during construction.

**Parameter `assetCount`:** Number of runtime-scoped assets in the deployed catalog.

**Parameter `artifactBundleCount`:** Number of unique content-addressed bundles.

**Parameter `totalBytes`:** Total bytes copied into the runtime content root.

**Exception `T:System.ArgumentNullException`:** The source inventory is absent.
