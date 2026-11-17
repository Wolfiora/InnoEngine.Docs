---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f321735955ea3e56d72410242f33fbf4620f6ba602f2b13f78eec7a6dc1026f6
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationRolledBack(`0,`0)
title: TypeRegistry<TSnapshot>.OnActivationRolledBack
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: d589f8763979c45471133dcd365f3eefca47b8bcb1b48c7c3ca263b6d340417d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `previous`:** The restored active snapshot, or `null` when none existed.

**Parameter `candidate`:** The rejected candidate snapshot.

## Remarks

Ordinary failures are reported through ``M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and aggregated across registries. Unfinished retirement retains dependencies and stops further rollback until the host is restarted.
