---
uid: api.3893a1b1148aeed1d6dca29914c319e63146d535aa428531380c7c24b3f1110e
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.#ctor(Inno.Core.Jobs.JobExecutionMode,Inno.Core.Jobs.JobSchedulerOptions)"
source: xml
reviewed: bb26478d644e838eeb3a10860ef7f22f803c634d560f70577328ed359a878178
title: "Constructor"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Creates a scheduler using the requested execution strategy.

**Parameter `mode`:** The execution strategy owned by the scheduler.

**Parameter `options`:** Frame admission and main-thread queue limits for either strategy; worker count applies only to `F:Inno.Core.Jobs.JobExecutionMode.WorkerPool`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `mode` is not a defined execution strategy.
