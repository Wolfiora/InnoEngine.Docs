---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d599a672429504face52f9a799b069ed968a65f051dc34f5d0c7a0a5706adb25
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.AssetChange.#ctor(InnoEngine.Assets.AssetChangeKind,System.Guid,InnoEngine.Assets.AssetPath,System.Nullable{InnoEngine.Assets.AssetPath})
title: AssetChange.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 1ad8e28e5683c2481a468e02569b2b0b8b44ffdf3c065f1d318bcae092424475
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `kind`:** Committed change kind.

**Parameter `persistentId`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.
