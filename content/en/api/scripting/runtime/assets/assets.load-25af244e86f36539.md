---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.25af244e86f365397229b7b980fbbf41ff41f0fcb05e0fd9fc42bd0164154851
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.Load``1(InnoEngine.Assets.AssetPath)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 9d0e623eeafbbd50e3ba89ddb127f132e6e2da211f6c03daafbdd195be9fd508
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
