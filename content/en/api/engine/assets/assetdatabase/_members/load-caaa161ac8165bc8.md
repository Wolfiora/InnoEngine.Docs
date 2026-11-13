---
uid: api.caaa161ac8165bc8208df61e098723c034cb830d4c923ae14f39134ca0070994
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 4b7c9274f23c805a23b4cb5ce0ee58fffc36d972d0ade75b19044d6a5d827637
title: "Load"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Loads the canonical asset at one catalog path.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical asset instance owned by this database.

**Exception `T:System.InvalidOperationException`:** Thrown when no asset exists at the path or its concrete type is incompatible with `TAsset`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
