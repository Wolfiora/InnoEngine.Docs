---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.252864070baffb46c66ad02ebff9eab56d28b165f97802b1c3933679d71550d6
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load``1(System.Guid)
title: AssetDatabase.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 52897ae23ff99ddf0142944cb494e7edb85e5a8946d0d980d8e7d7ca0201d376
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required runtime asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

## Returns

The canonical asset instance owned by this database.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset has the identity or its concrete type is incompatible with `TAsset`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
