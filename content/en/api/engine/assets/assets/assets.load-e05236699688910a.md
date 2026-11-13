---
uid: api.e05236699688910a2cbe25277420ecdfed87f823ebef48b89a765bb4e0c8387c
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 6302f036bb4bd4deebc1e98f371c43484a7d9c01c48f44e62917a182fee5640e
title: "Assets.Load"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Loads the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical compatible asset owned by the current lookup.

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
