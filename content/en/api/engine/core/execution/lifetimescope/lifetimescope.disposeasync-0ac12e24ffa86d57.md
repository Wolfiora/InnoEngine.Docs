---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0ac12e24ffa86d572ac2b94a85728408264e8ae92c4cd8a22b6f29138a72f319
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.DisposeAsync
title: LifetimeScope.DisposeAsync
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: a787afcf532453584e5ac5ea1e7cb3d3856828e6a0811fa94f5ddffdff9fe807
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
