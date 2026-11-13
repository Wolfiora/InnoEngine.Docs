---
uid: api.directory.engine.core.jobs
title: "Jobs"
kind: landing
owners: []
---

# Jobs

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [JobExecutionMode](jobexecutionmode/index.md) | Selects the execution strategy owned by a job scheduler. |
| [JobHandle](jobhandle/index.md) | Opaque handle representing a scheduled job. |
| [JobScheduler](jobscheduler/index.md) | Owns one isolated frame-scoped job scheduler and hides its concrete execution strategy. |
| [JobSchedulerOptions](jobscheduleroptions/index.md) | Defines frame admission, main-thread queue limits and worker count for one isolated T:Inno.Core.Jobs.JobScheduler. |
| [JobSchedulerStatistics](jobschedulerstatistics/index.md) | Reports lifetime admission and bounded owner-thread queue measurements without retaining job delegates. |

