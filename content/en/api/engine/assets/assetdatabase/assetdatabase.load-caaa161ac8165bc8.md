---
uid: api.caaa161ac8165bc8208df61e098723c034cb830d4c923ae14f39134ca0070994
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: cfab592a6c693af9c5f4446c94c5e4316198e5fb92f1e01a8f8053060ca98cd1
title: "AssetDatabase.Load"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Loads the canonical asset at one catalog path.

## Type parameters

**Type parameter `TAsset`:** The required runtime asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

## Returns

The canonical asset instance owned by this database.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset exists at the path or its concrete type is incompatible with `TAsset`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
