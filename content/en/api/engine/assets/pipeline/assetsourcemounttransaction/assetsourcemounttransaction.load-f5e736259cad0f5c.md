---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f5e736259cad0f5c938c0e0690fb092515e0ebfbfea07860159c95be21428bf9
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Load``1(Inno.Assets.AssetPath)
title: AssetSourceMountTransaction.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 787c70a0ace7dee08a92e12d9fd4dddc6a922a65597fe52bc95e1e9599d6c9a3

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Loads one candidate asset by isolated source path.

## Type parameters

**Type parameter `TAsset`:** Required asset type.

## Parameters

**Parameter `path`:** Candidate source path.

## Returns

The candidate asset instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible candidate asset exists.
