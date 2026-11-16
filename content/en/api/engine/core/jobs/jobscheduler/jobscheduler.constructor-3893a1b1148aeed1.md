---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3893a1b1148aeed1d6dca29914c319e63146d535aa428531380c7c24b3f1110e
symbol: engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.#ctor(Inno.Core.Jobs.JobExecutionMode,Inno.Core.Jobs.JobSchedulerOptions)
title: JobScheduler.Constructor
kind: api
owners:
- Inno.Core.Jobs
apiSurface: source-clr
reviewed: 880d90b0a76903d6b63d271cdc91c83abcb3706f0479937dbf151c55f35bb2a8
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
