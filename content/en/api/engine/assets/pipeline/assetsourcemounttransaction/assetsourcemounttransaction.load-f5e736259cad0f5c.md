---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f5e736259cad0f5c938c0e0690fb092515e0ebfbfea07860159c95be21428bf9
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Load``1(Inno.Assets.AssetPath)
title: AssetSourceMountTransaction.Load
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: d4e68411e0a9aefb2a3a5bc9709fb254d94effb7d54fe5e081ab48e31b627b1f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset type.

## Parameters

**Parameter `path`:** Candidate source path.

## Returns

The candidate asset instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible candidate asset exists.
