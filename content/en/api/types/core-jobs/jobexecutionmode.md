---
title: "JobExecutionMode"
description: "Reference for JobExecutionMode in Inno.Core.Jobs."
uid: api.inno.core.jobs.a45e92a8c3592802
kind: api
owners:
  - Inno.Core.Jobs
apiSurface: source-clr
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
---
# `JobExecutionMode`

This reference describes `JobExecutionMode` in `Inno.Core.Jobs`. Read the [shared contract](../../projects/inno-core-jobs.md#frame-and-queue-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SingleThread`](#api-da0968767d302a51) | Field |
| [`WorkerPool`](#api-404d45fee772384b) | Field |

## Type declaration

<a id="api-a45e92a8c3592802"></a>
<!-- api: T:Inno.Core.Jobs.JobExecutionMode 0b5125a013f2945ed8cb765b42535f50ff2c56639f296c1be5ce26ba57ca51e7 -->

```csharp
public enum Inno.Core.Jobs.JobExecutionMode : int
```

Selects the execution strategy owned by a job scheduler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobExecutionMode.cs#L6).

## `SingleThread`

<a id="api-da0968767d302a51"></a>
<!-- api: F:Inno.Core.Jobs.JobExecutionMode.SingleThread f7ee5f62a71c779d2b0868454e948b2376f8f116876f5c857618b3930846c3cb -->

```csharp
Inno.Core.Jobs.JobExecutionMode.SingleThread = 0
```

Executes jobs deterministically on the scheduler owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobExecutionMode.cs#L11).

## `WorkerPool`

<a id="api-404d45fee772384b"></a>
<!-- api: F:Inno.Core.Jobs.JobExecutionMode.WorkerPool f31a3e5c2822a90aef6d9a7aa1991e552816863616cc54e5b25db26ba9fc9e06 -->

```csharp
Inno.Core.Jobs.JobExecutionMode.WorkerPool = 1
```

Executes ready jobs on a bounded work-stealing worker pool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobExecutionMode.cs#L16).
