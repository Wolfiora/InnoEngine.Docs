---
uid: api.a36597455186d99dc102011ad45192759ef3ca37ed3cdca4bd7f8f7f334b30bd
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportDependencies(Inno.Assets.AssetObject,System.Boolean)"
source: xml
reviewed: b640aa245f76fbd01a35acce7d7ba3ee7885a499a6c57be437fbf882b2411300
title: "AssetLoader.GetImportDependencies"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Gets source import dependencies that invalidate an asset artifact.

## Parameters

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive source dependencies should be included.

## Returns

Canonical isolated source paths in stable order.
