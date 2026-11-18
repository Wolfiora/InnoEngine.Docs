---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.82c347659b305a886e98b6976d2904c8db7e626dd49843adc37b0bdd1512ace4
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.Wait(System.Action)
title: RetirementBarrier.Wait
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 2a78ad172aaacf2944e1115640d6e2849a7e2c824411de55cddd9f09b35acb48
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `retire`:** The retryable operation, including any necessary owner-thread queue draining.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Work exceeded its deadline; callers must fault admission and retain pending owners.
