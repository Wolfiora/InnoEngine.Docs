---
uid: api.f5e736259cad0f5c938c0e0690fb092515e0ebfbfea07860159c95be21428bf9
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 8344719306e7753b0073db130e4ec6bf60db3ce2079b6f5d84e2d30cf4d15754
title: "Load"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Loads one candidate asset by isolated source path.

**Type parameter `TAsset`:** Required asset type.

**Parameter `path`:** Candidate source path.

**Returns:** The candidate asset instance.

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible candidate asset exists.
