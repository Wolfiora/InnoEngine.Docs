---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.beb18884ba674f5d45f7abda8767ae53823bc180c1ac144a9f97bdf8f4ced05e
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject)
title: AssetRuntimeOwner.GetSourceHash
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 00115810a169611c523655ea597154a6888b72e552693f689bf91ae77cc950ad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `asset`:** The owned asset.

## Returns

The fingerprint currently committed to the asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
