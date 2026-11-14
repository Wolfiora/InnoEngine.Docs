---
uid: api.92e9253555c638dc9a0d61a70c31d9ece848a3efb35956015062e5af3a2efe2a
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetLookup.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 423862e1eb11b0302f6a7c47443d2d5a64936554e625f97e5840c6f54f9bae6e
title: "IAssetLookup.Load"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Loads the canonical asset at a logical catalog path.

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

## Returns

The canonical compatible asset owned by this lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the asset does not exist or has an incompatible concrete type.
