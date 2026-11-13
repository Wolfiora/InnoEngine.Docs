---
uid: api.bd27f67788ddc8e6fe3f68a22828ec38bc5e79eb747ef49ef81973a1f1bea86c
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.GetDependencies(Inno.Assets.AssetObject)"
source: xml
reviewed: 44b704d9c8a6c30cbda98765a7f0dd6241a85745da612413eeb19e3dc955534b
title: "GetDependencies"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Gets the direct persistent dependencies declared by one loaded or cataloged asset.

**Parameter `asset`:** The canonical asset whose deployed dependency descriptors are requested.

**Returns:** A deterministic immutable snapshot of direct dependencies.

**Exception `T:System.InvalidOperationException`:** Thrown when `asset` is not owned by this database.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
