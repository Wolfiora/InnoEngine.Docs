---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.86cd50d6654f6aa6272c48cb22194b1c2bda1d9829f5994352efff2bade8c7d5
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryLoad``1(System.Guid,``0@)
title: AssetDatabase.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 636018cb1b42a9bc1ebc91e9dc933726277988d8521907852f99fa5e153814cc

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tries to load the canonical asset with one persistent identity.

## Type parameters

**Type parameter `TAsset`:** The required runtime asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the deployed catalog contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
