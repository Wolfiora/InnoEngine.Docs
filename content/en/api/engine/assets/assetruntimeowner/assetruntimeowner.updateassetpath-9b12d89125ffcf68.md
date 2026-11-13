---
uid: api.9b12d89125ffcf6823a20f92b316dfd9e2cc52cc29b1e52cdc7fe0a1a6957cf9
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.UpdateAssetPath(Inno.Assets.AssetObject,Inno.Assets.AssetPath)"
source: xml
reviewed: f970188b8969b0b3cab97b74b0bd78f5157265ce556556717c6cdd0082b0ee82
title: "AssetRuntimeOwner.UpdateAssetPath"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Updates source location without replacing committed runtime content.

**Parameter `asset`:** The owned canonical instance.

**Parameter `assetPath`:** The new mount-qualified location.

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
