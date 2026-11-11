---
title: "RetirementBarrier"
description: "Reference for RetirementBarrier in Inno.Core.Execution."
uid: api.inno.core.execution.20bb54901ece4074
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# `RetirementBarrier`

This reference describes `RetirementBarrier` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30ce5bfcdaceebc6) | Method |
| [`TryComplete`](#api-3b1b5872ae87a5d1) | Method |
| [`Wait`](#api-abecacea82410063) | Method |

## Type declaration

<a id="api-20bb54901ece4074"></a>
<!-- api: T:Inno.Core.Execution.RetirementBarrier 0ef1d318563bfcd1a925f0c2d067b3387b274eed29c66ec826f03ad639e5bb49 -->

```csharp
public sealed class Inno.Core.Execution.RetirementBarrier
```

Bounds owner-thread retirement attempts without taking resource ownership or releasing pending dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementBarrier.cs#L11).

## `#ctor`

<a id="api-30ce5bfcdaceebc6"></a>
<!-- api: M:Inno.Core.Execution.RetirementBarrier.#ctor(System.String,System.Nullable{System.TimeSpan}) b88c89e4c9ac80c052f8863385c1faa5749374072980f5065e64a95c01c70628 -->

```csharp
public Inno.Core.Execution.RetirementBarrier.RetirementBarrier(string owner, System.TimeSpan? timeout = null)
```

Creates a deadline that starts with the first retirement attempt.

**Parameter `owner`:** A diagnostic name identifying the retained resource owner.

**Parameter `timeout`:** The positive maximum drain duration; omitted values use thirty seconds.

**Throws `System.ArgumentException`:** The owner name is empty or the timeout is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementBarrier.cs#L33).

## `TryComplete`

<a id="api-3b1b5872ae87a5d1"></a>
<!-- api: M:Inno.Core.Execution.RetirementBarrier.TryComplete(System.Action) 371f1c7a7b62ca3d01c30d61f8340d85e62a7149af832a418e4f8997d34632cf -->

```csharp
public bool Inno.Core.Execution.RetirementBarrier.TryComplete(System.Action retire)
```

Attempts retirement once at an owner-thread safe point.

**Parameter `retire`:** The owner's retryable retirement operation; the barrier never retains this delegate.

**Returns:** True after retirement completes, or false while work remains within its deadline.

**Constraints:** Wrapped pending failures retain their ownership semantics. A nested timeout is rethrown in its original
exception tree. Ordinary sibling failures survive retries and are reported once retirement completes.

**Throws `System.AggregateException`:** Retirement completed after earlier ordinary failures, or the owner reported a wrapped terminal timeout.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** Work exceeded its deadline. The barrier remains terminally faulted and dependencies must be retained.

**Throws `System.InvalidOperationException`:** The caller is not the thread that created this barrier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementBarrier.cs#L66).

## `Wait`

<a id="api-abecacea82410063"></a>
<!-- api: M:Inno.Core.Execution.RetirementBarrier.Wait(System.Action) 23709e74055c913ab483e64ae4dfe9bdf67cee2f098526883b6f6eec7bae039d -->

```csharp
public void Inno.Core.Execution.RetirementBarrier.Wait(System.Action retire)
```

Drains a failed startup or final shutdown on the owner thread until completion or explicit failure.

**Parameter `retire`:** The retryable operation, including any necessary owner-thread queue draining.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** Work exceeded its deadline; callers must fault admission and retain pending owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementBarrier.cs#L120).
