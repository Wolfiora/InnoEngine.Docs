---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82c347659b305a886e98b6976d2904c8db7e626dd49843adc37b0bdd1512ace4
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.Wait(System.Action)
title: RetirementBarrier.Wait
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 27725018e478d4b967b7b0dd86fc124169ca04225b549bd8fc62bd6737a4540a

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Drains a failed startup or final shutdown on the owner thread until completion or explicit failure.

## Parameters

**Parameter `retire`:** The retryable operation, including any necessary owner-thread queue draining.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Work exceeded its deadline; callers must fault admission and retain pending owners.
