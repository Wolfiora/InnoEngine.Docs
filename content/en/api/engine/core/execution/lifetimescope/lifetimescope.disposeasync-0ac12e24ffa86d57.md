---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0ac12e24ffa86d572ac2b94a85728408264e8ae92c4cd8a22b6f29138a72f319
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.DisposeAsync
title: LifetimeScope.DisposeAsync
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 925bf4ad806f1307d441a8450c1fe8fedf0c2c454e2480d45f37984811a2d7e1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A task that completes only after work and resource retirement finish.

## Exceptions

**Exception `T:System.AggregateException`:** Cancellation, work or resource retirement fails.

## Remarks

Only use asynchronous disposal for thread-neutral resources. Control-thread owners must await their work and call synchronous disposal at their own safe point; this method does not marshal to an owner thread.
