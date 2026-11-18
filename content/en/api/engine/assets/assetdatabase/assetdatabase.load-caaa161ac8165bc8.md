---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.caaa161ac8165bc8208df61e098723c034cb830d4c923ae14f39134ca0070994
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Load``1(Inno.Assets.AssetPath)
title: AssetDatabase.Load
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 5d16a89f0b0f2e85f0b6a0cba3cab792705a81562bb52125729d4eaf78921f1b
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
