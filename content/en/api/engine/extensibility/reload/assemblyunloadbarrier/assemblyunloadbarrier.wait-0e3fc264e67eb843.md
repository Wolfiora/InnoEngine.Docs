---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0e3fc264e67eb843f65d98458ff49869e1e99956864a7f94b1e679826d8f516e
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Wait(System.Threading.CancellationToken)
title: AssemblyUnloadBarrier.Wait
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 9f9254be0c8dc432904468a9147c221222fb52479cefe9117c11905ff5486127
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** A token that can cancel the wait without changing the barrier state.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled before completion.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown when the retention threshold is reached.
