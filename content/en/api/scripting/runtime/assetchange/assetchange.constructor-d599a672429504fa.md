---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d599a672429504face52f9a799b069ed968a65f051dc34f5d0c7a0a5706adb25
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetChange.#ctor(InnoEngine.Assets.AssetChangeKind,System.Guid,InnoEngine.Assets.AssetPath,System.Nullable{InnoEngine.Assets.AssetPath})
title: AssetChange.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 40bad35da20c2ee28e4dda5a6f2b51c73b8259c7e26bb867033758951e92ba5a
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** Committed change kind.

**Parameter `persistentId`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.
