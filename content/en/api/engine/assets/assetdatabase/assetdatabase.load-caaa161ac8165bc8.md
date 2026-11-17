---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.caaa161ac8165bc8208df61e098723c034cb830d4c923ae14f39134ca0070994
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load``1(Inno.Assets.AssetPath)
title: AssetDatabase.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 10e2f54758ce0767197e5f0f7e076fb9ce1008a9c4efbbb1c9eb15220cc7352c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required runtime asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

## Returns

The canonical asset instance owned by this database.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset exists at the path or its concrete type is incompatible with `TAsset`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
