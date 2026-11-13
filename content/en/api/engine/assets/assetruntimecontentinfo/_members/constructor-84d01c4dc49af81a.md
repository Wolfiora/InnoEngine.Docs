---
uid: api.84d01c4dc49af81ad6fa1cecefeef3d82fe750f47835714301484be53a9c0e8d
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceId},System.Int32,System.Int32,System.Int64)"
source: xml
reviewed: a7b46e46cd1c78bae23e14bd77eb7b625fff6dc4a00d1517189180ffce67e423
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
