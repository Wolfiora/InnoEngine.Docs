---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c0403bd77d9c42dffcee889c28fa4ddb2d85e4da66a7056c5bace290a8eeb4cf
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)
title: TypeRegistry<TSnapshot>.OnCleanupFailed
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: c18558ae7547e21e96a18821b367cd3282297a72013503e5918d36fae3ce822c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `phase`:** The non-transactional phase that raised the exception.

**Parameter `exception`:** The cleanup exception.

## Remarks

This callback is diagnostic only. Exceptions raised by an override are ignored so cleanup can continue.
