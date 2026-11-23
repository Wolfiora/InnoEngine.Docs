---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.86cd50d6654f6aa6272c48cb22194b1c2bda1d9829f5994352efff2bade8c7d5
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryLoad``1(System.Guid,``0@)
title: AssetDatabase.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: b86b8eba06033e5c0700e443b580b5a54a160d4fd01763e0b39019e53d8ddedf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required runtime asset contract.

## Parameters

**Parameter `persistentID`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the deployed catalog contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
