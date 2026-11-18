---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c31bf60e534b59db44dc564ad6eeca8b903dbd0ec7b0bb49cb00e891f4413bb2
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Load(Inno.Assets.AssetPath,System.Type)
title: AssetPipeline.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: da664e3bcf539943e13ceb62188b5f459dd06d9a0c65f696cebdb745feefd8d0
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
