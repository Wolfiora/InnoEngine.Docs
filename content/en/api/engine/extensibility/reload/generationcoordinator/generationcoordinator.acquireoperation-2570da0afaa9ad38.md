---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2570da0afaa9ad382924cdb32863ea52bb9778a790a534ed0293607f0800d84e
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireOperation(System.String)
title: GenerationCoordinator.AcquireOperation
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: e0753df4b19552612de2540b137e0681cdbec9f43b2e73d51c9142c5fa19e1cb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operation`:** The operation name included in admission failures.

## Returns

A scope for the entire operation, or a borrowed scope inside publication on its own control thread.

## Remarks

Published data remains readable while old contexts await collection. This scope does not authorize Play, Build, Export or a new generation transaction; those owners must still use their strict admission boundary.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Another thread is publishing or the owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement has failed without releasing its dependent owners.
