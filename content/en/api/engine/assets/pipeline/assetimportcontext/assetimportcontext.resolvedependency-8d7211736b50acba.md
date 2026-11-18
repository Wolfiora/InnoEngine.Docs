---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8d7211736b50acba73c76796e211a9fe422452470e554c7f07dc8b2e2b7f1a06
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ResolveDependency``1(Inno.Assets.AssetPath)
title: AssetImportContext.ResolveDependency
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: b7ead941b3aa855326b4eadd8d6c50ed9fff0f04cd59a5b468bf7a9cc23b8223
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
