---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4c6e1999324312792863b75470b6ce283022a6f2a33017046f580267cd6cf9da
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad``1(Inno.Assets.AssetPath,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 6001273a103d2d4d6b0017eb75943205126ccd9981000d33f0f02d6e5e6a915f
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

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
