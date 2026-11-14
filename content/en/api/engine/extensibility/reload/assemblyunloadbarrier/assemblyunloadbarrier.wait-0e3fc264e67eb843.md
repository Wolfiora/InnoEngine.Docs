---
uid: api.0e3fc264e67eb843f65d98458ff49869e1e99956864a7f94b1e679826d8f516e
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Wait(System.Threading.CancellationToken)"
source: xml
reviewed: 9f9254be0c8dc432904468a9147c221222fb52479cefe9117c11905ff5486127
title: "AssemblyUnloadBarrier.Wait"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Blocks the caller until all retired generations are reclaimed, cancellation is requested, or the barrier faults.

## Parameters

**Parameter `cancellationToken`:** A token that can cancel the wait without changing the barrier state.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled before completion.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown when the retention threshold is reached.
