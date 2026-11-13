---
uid: api.c31bf60e534b59db44dc564ad6eeca8b903dbd0ec7b0bb49cb00e891f4413bb2
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load(Inno.Assets.AssetPath,System.Type)"
source: xml
reviewed: 0b4dece8ac69e041fa09bfd5c75e941c3bd9cdd888d4af6d9ce39f7b13af5a21
title: "Load"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Loads a canonical asset using a runtime asset type selected by an authoring workflow.

**Parameter `path`:** The isolated source path.

**Parameter `assetType`:** The required concrete or base asset type.

**Returns:** The canonical asset instance assignable to `assetType`.

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `assetType` does not derive from `T:Inno.Assets.AssetObject`.

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible canonical asset can be loaded.
