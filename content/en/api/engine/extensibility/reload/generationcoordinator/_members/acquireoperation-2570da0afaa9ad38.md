---
uid: api.2570da0afaa9ad382924cdb32863ea52bb9778a790a534ed0293607f0800d84e
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireOperation(System.String)"
source: xml
reviewed: 3e556d9de13d8eac29c2574842dc47a34a777f1f1c2b0ee561649aaba8ebe5d7
title: "AcquireOperation"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Keeps one synchronous operation on the published generation and defers automatic catalog replacement.

**Parameter `operation`:** The operation name included in admission failures.

**Returns:** A scope for the entire operation, or a borrowed scope inside publication on its own control thread.

## Remarks

Published data remains readable while old contexts await collection. This scope does not authorize Play, Build, Export or a new generation transaction; those owners must still use their strict admission boundary.

**Exception `T:System.InvalidOperationException`:** Another thread is publishing or the owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement has failed without releasing its dependent owners.
