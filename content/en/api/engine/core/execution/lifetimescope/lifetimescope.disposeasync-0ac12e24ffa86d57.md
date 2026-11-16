---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0ac12e24ffa86d572ac2b94a85728408264e8ae92c4cd8a22b6f29138a72f319
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.DisposeAsync
title: LifetimeScope.DisposeAsync
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: ab7e7c2b8d97d20ad950945d99710ab15f93feee046cde22417d007db47f16b0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Only use asynchronous disposal for thread-neutral resources. Control-thread owners must await their work and call synchronous disposal at their own safe point; this method does not marshal to an owner thread.

## Returns

A task that completes only after work and resource retirement finish.

## Exceptions

**Exception `T:System.AggregateException`:** Cancellation, work or resource retirement fails.
