---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e05236699688910a2cbe25277420ecdfed87f823ebef48b89a765bb4e0c8387c
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.Load``1(Inno.Assets.AssetPath)
title: Assets.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 716241d4a88524513c5031dc917f995fe3091fb9356c31666f26c66caf1fcd82
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
