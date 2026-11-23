---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a1ebb717f78dadcd563fe8a835c07d553c58d5630ff6202e611fa4f05ade98bc
symbol: engine:Inno.Assets:M:Inno.Assets.AssetChange.#ctor(Inno.Assets.AssetChangeKind,System.Guid,Inno.Assets.AssetPath,System.Nullable{Inno.Assets.AssetPath})
title: AssetChange.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 66d0775ed87b702afbdf62b882e88b7b262b934be03025296105403a6c763106
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** Committed change kind.

**Parameter `persistentID`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.
