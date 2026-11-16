---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c31bf60e534b59db44dc564ad6eeca8b903dbd0ec7b0bb49cb00e891f4413bb2
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load(Inno.Assets.AssetPath,System.Type)
title: AssetPipeline.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: f43e3335d5c7dc61f17cba7790fa757075ac35cf320115e849c55aace0e4fbed
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path.

**Parameter `assetType`:** The required concrete or base asset type.

## Returns

The canonical asset instance assignable to `assetType`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `assetType` does not derive from `T:Inno.Assets.AssetObject`.

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible canonical asset can be loaded.
