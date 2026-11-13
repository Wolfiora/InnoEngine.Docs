---
uid: api.631d26e5bf0ee2c6dc6a8d3193859ec6edd3ddafeec394ba5419abf84e9275ee
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.GetImportDependencies(Inno.Assets.AssetObject,System.Boolean)"
source: xml
reviewed: 54f016d8a2ef99c4d9130779879f3cf725c1e21454c1bbe8aa8db7476f6da0b0
title: "GetImportDependencies"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Gets source import dependencies that invalidate an asset artifact.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive source dependencies should be included.

**Returns:** Canonical isolated source paths in stable order.
