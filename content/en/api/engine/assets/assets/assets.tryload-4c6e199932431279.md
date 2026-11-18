---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4c6e1999324312792863b75470b6ce283022a6f2a33017046f580267cd6cf9da
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad``1(Inno.Assets.AssetPath,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: f361c87423bd1bc530d24d6e6cfca83fdbb60917362c11e2f4dd978783c7fa04
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
