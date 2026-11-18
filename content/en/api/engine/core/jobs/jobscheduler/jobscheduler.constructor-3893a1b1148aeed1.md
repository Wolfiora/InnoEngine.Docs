---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3893a1b1148aeed1d6dca29914c319e63146d535aa428531380c7c24b3f1110e
symbol: engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.#ctor(Inno.Core.Jobs.JobExecutionMode,Inno.Core.Jobs.JobSchedulerOptions)
title: JobScheduler.Constructor
kind: api
owners:
- Inno.Core.Jobs
apiSurface: source-clr
sourceFingerprint: 61724629a746155b3dcdd55d0fab5ab656d901fb8d36d6f041488d56661eeb86
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `mode`:** The execution strategy owned by the scheduler.

**Parameter `options`:** Frame admission and main-thread queue limits for either strategy; worker count applies only to `F:Inno.Core.Jobs.JobExecutionMode.WorkerPool`.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is not a defined execution strategy.
