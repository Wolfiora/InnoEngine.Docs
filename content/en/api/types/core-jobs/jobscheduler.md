---
title: "JobScheduler"
description: "Reference for JobScheduler in Inno.Core.Jobs."
uid: api.inno.core.jobs.b6c95e46fd6c6bbe
kind: api
owners:
  - Inno.Core.Jobs
apiSurface: source-clr
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
---
# `JobScheduler`

This reference describes `JobScheduler` in `Inno.Core.Jobs`. Read the [shared contract](../../projects/inno-core-jobs.md#frame-and-queue-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d2af170293d5c007) | Method |
| [`BeginFrame`](#api-a768bc928077c5fc) | Method |
| [`CombineDependencies`](#api-c6651ebef849a497) | Method |
| [`Complete`](#api-e3f1d38c683a7e04) | Method |
| [`CompleteAll`](#api-0c674e7e78f59f3f) | Method |
| [`Dispose`](#api-54b89a02d7f222b2) | Method |
| [`DrainMainThreadQueue`](#api-879fa28224576fba) | Method |
| [`EndFrame`](#api-659cac4054b95feb) | Method |
| [`EnqueueMainThread`](#api-6ee25fa94f2a6e43) | Method |
| [`ParallelFor`](#api-b89348f47f74d661) | Method |
| [`Schedule`](#api-41a7be3f0941282a) | Method |
| [`Schedule`](#api-4282136504070f2d) | Method |
| [`statistics`](#api-01dbe9402f6d21ac) | Property |
| [`workerCount`](#api-db839d608e66cdb9) | Property |

## Type declaration

<a id="api-b6c95e46fd6c6bbe"></a>
<!-- api: T:Inno.Core.Jobs.JobScheduler c23a346ba0e26d073f1f0007a61b94203e46ad4e3e5817f6171d1b7418ce6933 -->

```csharp
public sealed class Inno.Core.Jobs.JobScheduler : System.IDisposable
```

Owns one isolated frame-scoped job scheduler and hides its concrete execution strategy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L8).

## `#ctor`

<a id="api-d2af170293d5c007"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.#ctor(Inno.Core.Jobs.JobExecutionMode,Inno.Core.Jobs.JobSchedulerOptions) f57c07dcc588313d9dee110b38475a8decf91d93a25559ac98337d6681519be9 -->

```csharp
public Inno.Core.Jobs.JobScheduler.JobScheduler(Inno.Core.Jobs.JobExecutionMode mode, Inno.Core.Jobs.JobSchedulerOptions options = default(Inno.Core.Jobs.JobSchedulerOptions))
```

Creates a scheduler using the requested execution strategy.

**Parameter `mode`:** The execution strategy owned by the scheduler.

**Parameter `options`:** Frame admission and main-thread queue limits for either strategy; worker count applies only to
`Inno.Core.Jobs.JobExecutionMode.WorkerPool`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `mode` is not a defined execution strategy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L25).

## `BeginFrame`

<a id="api-a768bc928077c5fc"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.BeginFrame 53a73da098e3a5d25aedc3d0d2d59ef184139c2dd4b3bda91fc40ed3e5055bdf -->

```csharp
public void Inno.Core.Jobs.JobScheduler.BeginFrame()
```

Opens a frame scheduling scope on the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L50).

## `CombineDependencies`

<a id="api-c6651ebef849a497"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.CombineDependencies(System.ReadOnlySpan{Inno.Core.Jobs.JobHandle}) 353b782df2ac7ce4661c2cbe8a120786656e5bfac6ba757c49d9521aecd16b6f -->

```csharp
public Inno.Core.Jobs.JobHandle Inno.Core.Jobs.JobScheduler.CombineDependencies(System.ReadOnlySpan<Inno.Core.Jobs.JobHandle> dependencies)
```

Creates one handle that completes after every supplied dependency.

**Parameter `dependencies`:** Handles combined by the returned synchronization point.

**Returns:** A generation-safe combined handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L99).

## `Complete`

<a id="api-e3f1d38c683a7e04"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.Complete(Inno.Core.Jobs.JobHandle) e71c87536d369da4a566a578b2e58345789134d6028bfd11de3880beb6c446dc -->

```csharp
public void Inno.Core.Jobs.JobScheduler.Complete(Inno.Core.Jobs.JobHandle handle)
```

Blocks the calling thread until one scheduled operation completes.

**Parameter `handle`:** The generation-safe operation handle to complete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L128).

## `CompleteAll`

<a id="api-0c674e7e78f59f3f"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.CompleteAll(System.ReadOnlySpan{Inno.Core.Jobs.JobHandle}) 30bfa95558a55b88e21354cb38b7e9bac817f17dc5d8ca7700c3bcce26f631a2 -->

```csharp
public void Inno.Core.Jobs.JobScheduler.CompleteAll(System.ReadOnlySpan<Inno.Core.Jobs.JobHandle> handles)
```

Blocks the calling thread until every supplied operation completes.

**Parameter `handles`:** The generation-safe operation handles to complete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L136).

## `Dispose`

<a id="api-54b89a02d7f222b2"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.Dispose 2d50e688dc220b1741bc14be20fe313be6c5f3e3110c5baeb105d6e12648be87 -->

```csharp
public void Inno.Core.Jobs.JobScheduler.Dispose()
```

Stops worker threads and releases every pending scheduling resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L154).

## `DrainMainThreadQueue`

<a id="api-879fa28224576fba"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.DrainMainThreadQueue ca1c73ea7a8b406ed255c71e7273f4971ddfaea814ba300f4912a15555bec460 -->

```csharp
public void Inno.Core.Jobs.JobScheduler.DrainMainThreadQueue()
```

Attempts at most the configured drain budget from the current queue snapshot; reentrant posts wait for a later drain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L149).

## `EndFrame`

<a id="api-659cac4054b95feb"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.EndFrame d85ee21a312013da82984249e708ee6aabffc00c30fd9ece140acc5ad61997c9 -->

```csharp
public void Inno.Core.Jobs.JobScheduler.EndFrame()
```

Completes every frame job and closes the current frame scheduling scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L55).

## `EnqueueMainThread`

<a id="api-6ee25fa94f2a6e43"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.EnqueueMainThread(System.Action) 8c8082cefd0e3ad53d4f51083e4fddca83eaddc7c838207011eb0130ff5d5062 -->

```csharp
public void Inno.Core.Jobs.JobScheduler.EnqueueMainThread(System.Action action)
```

Enqueues an operation that must run on the scheduler owner thread.

**Parameter `action`:** The owner-thread operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L144).

## `ParallelFor`

<a id="api-b89348f47f74d661"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.ParallelFor(System.Int32,System.Int32,System.Action{System.Int32,System.Int32}) 3356526411276c9f5739881fdac7dd5e0c19aeec7d2d4905bd48ec1757d3c432 -->

```csharp
public Inno.Core.Jobs.JobHandle Inno.Core.Jobs.JobScheduler.ParallelFor(int length, int batchSize, System.Action<int, int> body)
```

Schedules a range as independent contiguous batches.

**Parameter `length`:** The exclusive upper bound of the complete range.

**Parameter `batchSize`:** The maximum number of indices in one batch.

**Parameter `body`:** The callback receiving each batch's inclusive start and exclusive end.

**Returns:** A handle that completes after every batch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L116).

## `Schedule`

<a id="api-41a7be3f0941282a"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action) 7902eb35ae33a1e6472cc849a754263d236f1a658e6c9851efe48273c6870cee -->

```csharp
public Inno.Core.Jobs.JobHandle Inno.Core.Jobs.JobScheduler.Schedule(System.Action job)
```

Schedules one parameterless job in the current frame.

**Parameter `job`:** The operation to execute once its implicit empty dependency set is ready.

**Returns:** A generation-safe handle representing the scheduled operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L66).

## `Schedule`

<a id="api-4282136504070f2d"></a>
<!-- api: M:Inno.Core.Jobs.JobScheduler.Schedule(System.Action{System.Object},System.Object,System.ReadOnlySpan{Inno.Core.Jobs.JobHandle}) 568d191b496d3ec6ac46ee340a674e2b46f86fe5d7b19c3613877072faf0cc72 -->

```csharp
public Inno.Core.Jobs.JobHandle Inno.Core.Jobs.JobScheduler.Schedule(System.Action<object?> job, object? state, System.ReadOnlySpan<Inno.Core.Jobs.JobHandle> dependencies)
```

Schedules one stateful job after all supplied dependencies complete.

**Parameter `job`:** The operation receiving `state`.

**Parameter `state`:** Optional caller-owned state passed to the operation.

**Parameter `dependencies`:** Handles that must complete before the operation becomes runnable.

**Returns:** A generation-safe handle representing the scheduled operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L83).

## `statistics`

<a id="api-01dbe9402f6d21ac"></a>
<!-- api: P:Inno.Core.Jobs.JobScheduler.statistics 0eadb3ef9c63e7c988b667d742e2f5d98210df3d75726f3a8a39bfddaa03fac4 -->

```csharp
public Inno.Core.Jobs.JobSchedulerStatistics Inno.Core.Jobs.JobScheduler.statistics { get; }
```

Gets detached admission and owner-thread queue measurements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L45).

## `workerCount`

<a id="api-db839d608e66cdb9"></a>
<!-- api: P:Inno.Core.Jobs.JobScheduler.workerCount 53a3cb61f738904611ba370fa53c54f3016eb491053e1b81df7645a942c92e2c -->

```csharp
public int Inno.Core.Jobs.JobScheduler.workerCount { get; }
```

Gets the number of background workers owned by this scheduler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobScheduler.cs#L40).
