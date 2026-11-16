---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.25af244e86f365397229b7b980fbbf41ff41f0fcb05e0fd9fc42bd0164154851
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(InnoEngine.Assets.AssetPath)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 9536faa2c9d4b5b60b8b5b7bbd114dd4bf027334fc45f9a7e7c3d91b5f12b135
apiScope: Runtime
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

## Returns

The canonical compatible asset owned by the current lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active, the asset does not exist, or its type is incompatible.
