---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.43455337088b69435dbe4ef00aa865d02da343930e77c1a9f96babb9f829cfa4
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Track(System.Threading.Tasks.Task)
title: LifetimeScope.Track
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 8c3a5d14967530ac352d662f60887a02cac5181279f155881d3d538fb2376a7d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `task`:** Work that observes this lifetime's cancellation token.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The task is null.

**Exception `T:System.InvalidOperationException`:** Retirement has started or work capacity is exhausted; ownership remains with the caller.
