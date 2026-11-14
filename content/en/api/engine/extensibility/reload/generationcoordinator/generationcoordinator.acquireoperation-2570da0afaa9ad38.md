---
uid: api.2570da0afaa9ad382924cdb32863ea52bb9778a790a534ed0293607f0800d84e
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireOperation(System.String)"
source: xml
reviewed: 63eb3f299757756be2a76a977ae0d3f4eaab2b181b694037bf18cb461f4fc394
title: "GenerationCoordinator.AcquireOperation"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Keeps one synchronous operation on the published generation and defers automatic catalog replacement.

## Parameters

**Parameter `operation`:** The operation name included in admission failures.

## Returns

A scope for the entire operation, or a borrowed scope inside publication on its own control thread.

## Remarks

Published data remains readable while old contexts await collection. This scope does not authorize Play, Build, Export or a new generation transaction; those owners must still use their strict admission boundary.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Another thread is publishing or the owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement has failed without releasing its dependent owners.
