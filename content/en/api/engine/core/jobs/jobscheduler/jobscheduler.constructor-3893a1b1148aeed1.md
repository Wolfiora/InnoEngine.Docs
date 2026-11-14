---
uid: api.3893a1b1148aeed1d6dca29914c319e63146d535aa428531380c7c24b3f1110e
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.#ctor(Inno.Core.Jobs.JobExecutionMode,Inno.Core.Jobs.JobSchedulerOptions)"
source: xml
reviewed: 259c9702e627abdbb29827e288d539d770e0e26e1f7ff01971bdb3ae2b9e042c
title: "JobScheduler.Constructor"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Creates a scheduler using the requested execution strategy.

## Parameters

**Parameter `mode`:** The execution strategy owned by the scheduler.

**Parameter `options`:** Frame admission and main-thread queue limits for either strategy; worker count applies only to `F:Inno.Core.Jobs.JobExecutionMode.WorkerPool`.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is not a defined execution strategy.
