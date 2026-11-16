---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82c347659b305a886e98b6976d2904c8db7e626dd49843adc37b0bdd1512ace4
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.Wait(System.Action)
title: RetirementBarrier.Wait
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: c05e76d471b6b93aad1b244c0ff92bfe039863a4a7c171f46975ef203c49672e
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
