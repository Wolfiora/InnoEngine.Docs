---
title: "JobSchedulerOptions"
description: "Reference for JobSchedulerOptions in Inno.Core.Jobs."
uid: api.inno.core.jobs.bd4a1985aeaeb405
kind: api
owners:
  - Inno.Core.Jobs
apiSurface: source-clr
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
---
# `JobSchedulerOptions`

This reference describes `JobSchedulerOptions` in `Inno.Core.Jobs`. Read the [shared contract](../../projects/inno-core-jobs.md#frame-and-queue-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`mainThreadCapacity`](#api-8c9e8fcdd0478d17) | Property |
| [`mainThreadDrainBudget`](#api-d58eaabda83e4804) | Property |
| [`maxFrameJobs`](#api-05a79a3c11978049) | Property |
| [`workerCount`](#api-6438f9d4033164af) | Property |

## Type declaration

<a id="api-bd4a1985aeaeb405"></a>
<!-- api: T:Inno.Core.Jobs.JobSchedulerOptions e0e12ad9e42889797a7b04bc9daba8cba1cccd3e5040206e2fdafcdad08076b6 -->

```csharp
public readonly struct Inno.Core.Jobs.JobSchedulerOptions
```

Defines frame admission, main-thread queue limits and worker count for one isolated `Inno.Core.Jobs.JobScheduler`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerOptions.cs#L8).

## `mainThreadCapacity`

<a id="api-8c9e8fcdd0478d17"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerOptions.mainThreadCapacity ebb84a6b5c9c316227e34673f812178c186cbcbe022dc897a4751f24678cd7c6 -->

```csharp
public int Inno.Core.Jobs.JobSchedulerOptions.mainThreadCapacity { get; init; }
```

Gets main-thread callback capacity; zero selects 65536.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerOptions.cs#L27).

## `mainThreadDrainBudget`

<a id="api-d58eaabda83e4804"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerOptions.mainThreadDrainBudget a6b7928e93c13b9b8cc775010218f25e5b84b1f5f2a46a74a0360788cf22d772 -->

```csharp
public int Inno.Core.Jobs.JobSchedulerOptions.mainThreadDrainBudget { get; init; }
```

Gets the maximum callbacks attempted per drain; zero selects 4096.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerOptions.cs#L32).

## `maxFrameJobs`

<a id="api-05a79a3c11978049"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerOptions.maxFrameJobs 690c3e6087a24b53eef83bd4452f0459a72efc99957354684ea80f5e8cc4553a -->

```csharp
public int Inno.Core.Jobs.JobSchedulerOptions.maxFrameJobs { get; init; }
```

Gets the maximum accepted jobs per frame; zero selects 65536.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerOptions.cs#L22).

## `workerCount`

<a id="api-6438f9d4033164af"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerOptions.workerCount e630e55ad3ebe79ab828987d92d738cbcde0a740a0253558df97a8f4f3dd339c -->

```csharp
public int Inno.Core.Jobs.JobSchedulerOptions.workerCount { get; init; }
```

Gets the worker-pool thread count, clamped to 1 through 64 for positive values.
Zero selects `max(1, Environment.ProcessorCount - 1)`, also capped at 64.
Single-thread execution does not create workers or consume this setting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerOptions.cs#L17).
