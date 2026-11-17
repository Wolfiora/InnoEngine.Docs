---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dc08ed6bda67917f016377b79de847a6bbc29bcf362e03d4536d42cb4a175463
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad``1(Inno.Assets.AssetPath,``0@)
title: IAssetLookup.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: dc61b73b862ca199f6c98460cc40d1938ba8139e52b5227cd52cb3b3e841ac5d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the lookup contains a compatible asset; otherwise, `false`.
