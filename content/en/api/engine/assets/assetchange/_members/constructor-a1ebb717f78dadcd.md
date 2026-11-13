---
uid: api.a1ebb717f78dadcd563fe8a835c07d553c58d5630ff6202e611fa4f05ade98bc
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetChange.#ctor(Inno.Assets.AssetChangeKind,System.Guid,Inno.Assets.AssetPath,System.Nullable{Inno.Assets.AssetPath})"
source: xml
reviewed: b9e9f45b65830531721399a594c88737324eb2be9d3308cbc7cd8a51656fcf2c
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates an asset change descriptor.

**Parameter `kind`:** Committed change kind.

**Parameter `persistentId`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.
