---
uid: api.252864070baffb46c66ad02ebff9eab56d28b165f97802b1c3933679d71550d6
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load\u0060\u00601(System.Guid)"
source: xml
reviewed: 3fd02bffcf311e0ebc8e83d8cee8e699c6e292ce3fd027d585a3d0ec04499e1f
title: "AssetDatabase.Load"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Loads the canonical asset with one persistent identity.

**Type parameter `TAsset`:** The required runtime asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Returns:** The canonical asset instance owned by this database.

**Exception `T:System.InvalidOperationException`:** Thrown when no asset has the identity or its concrete type is incompatible with `TAsset`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
