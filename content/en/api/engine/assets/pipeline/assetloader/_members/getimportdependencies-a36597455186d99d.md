---
uid: api.a36597455186d99dc102011ad45192759ef3ca37ed3cdca4bd7f8f7f334b30bd
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportDependencies(Inno.Assets.AssetObject,System.Boolean)"
source: xml
reviewed: 8b31a1fb5ac2664a5c39c03d66e3dc20947213424b7615d0c3b34bca1788094d
title: "GetImportDependencies"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Gets source import dependencies that invalidate an asset artifact.

**Parameter `asset`:** The asset to query.

**Parameter `recursive`:** Whether transitive source dependencies should be included.

**Returns:** Canonical isolated source paths in stable order.
