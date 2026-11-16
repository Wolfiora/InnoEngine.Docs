---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d0df754f16702560daabaa975122ad817c20c7b44777fffe161f3a8a0942014
symbol: engine:Inno.Adapter:M:Inno.Adapter.AdapterSelection.Validate(Inno.Adapter.IAdapterCatalog)
title: AdapterSelection.Validate
kind: api
owners:
- Inno.Adapter
apiSurface: source-clr
reviewed: a42516d79b0fe22524a9d70eae9578d02acd7c8b37b72ec594ea9a0992d8b1da
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `catalog`:** The complete, composition-owned factory snapshot.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The catalog is null.

**Exception `T:System.NotSupportedException`:** A selected implementation is unassigned or absent from its domain catalog.
