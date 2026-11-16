---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8d7211736b50acba73c76796e211a9fe422452470e554c7f07dc8b2e2b7f1a06
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ResolveDependency``1(Inno.Assets.AssetPath)
title: AssetImportContext.ResolveDependency
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 4b2212af320ab43961fee4b8d522723d359f4e3fa766279041ec414c53d4013e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Expected asset type.

## Parameters

**Parameter `path`:** Isolated dependency path.

## Returns

The currently committed dependency asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.
