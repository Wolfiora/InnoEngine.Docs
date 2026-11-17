---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd27f67788ddc8e6fe3f68a22828ec38bc5e79eb747ef49ef81973a1f1bea86c
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.GetDependencies(Inno.Assets.AssetObject)
title: AssetDatabase.GetDependencies
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: cbd5a9759f84be1b63ad435715d545632548af6c80cd2943ca77bb7b4810ff8f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `asset`:** The canonical asset whose deployed dependency descriptors are requested.

## Returns

A deterministic immutable snapshot of direct dependencies.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when `asset` is not owned by this database.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
