---
title: "CoroutineScheduler"
description: "Reference for CoroutineScheduler in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.44f36c50a6bd55b2
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `CoroutineScheduler`

This reference describes `CoroutineScheduler` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9153c4e9ba02858d) | Method |
| [`Dispose`](#api-d6149e4c9e5598b9) | Method |
| [`StartCoroutine`](#api-40d0b77365ef11bd) | Method |
| [`StartCoroutine`](#api-6be63970b2fcdd84) | Method |
| [`StopAllCoroutines`](#api-5a1ef857eb528486) | Method |
| [`StopAllCoroutines`](#api-e3ae0402198b5654) | Method |
| [`StopCoroutine`](#api-c0115c95f7a3d703) | Method |
| [`Tick`](#api-6949bb654af677e7) | Method |

## Type declaration

<a id="api-44f36c50a6bd55b2"></a>
<!-- api: T:Inno.Core.Coroutines.CoroutineScheduler 22dbfed8add0586b2823c9267edb2f152a276850caa0db6e197d3449e7c4d1a3 -->

```csharp
public sealed class Inno.Core.Coroutines.CoroutineScheduler : System.IDisposable
```

Serializes coroutine execution and owns reverse-order retirement of admitted enumerators.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L14).

## `#ctor`

<a id="api-9153c4e9ba02858d"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.#ctor 1a553522eefa6ce95f6e4ff77ed4abed3a4ceed9637163d2354baab4a657cafe -->

```csharp
public Inno.Core.Coroutines.CoroutineScheduler.CoroutineScheduler()
```

Creates an empty scheduler whose lifetime is owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L35).

## `Dispose`

<a id="api-d6149e4c9e5598b9"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.Dispose b863d71ff70b118c5ea13e58db9b01750c1ad267cc263f5d0536489215d8fc9b -->

```csharp
public void Inno.Core.Coroutines.CoroutineScheduler.Dispose()
```

Closes admission and disposes all active and pending enumerators.
Reentrant disposal retires the executing enumerator after its callback returns.

**Throws `System.AggregateException`:** Cleanup failed after all eligible enumerators were attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L156).

## `StartCoroutine`

<a id="api-40d0b77365ef11bd"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Collections.IEnumerator) 9ba3ba04c19dc2b45deaf2af0f86e2a9d685bc61f692adbff88dff187f749c8e -->

```csharp
public Inno.Core.Coroutines.CoroutineHandle Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Collections.IEnumerator routine)
```

Starts a coroutine.

**Parameter `routine`:** Enumerator exclusively transferred to the scheduler after successful admission.

**Returns:** Coroutine handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L49).

## `StartCoroutine`

<a id="api-6be63970b2fcdd84"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Object,System.Collections.IEnumerator) 042eecf8f8ed52a907f795e61f64c0c1bf3bf6487c0f90067bb42fd53a82dcc6 -->

```csharp
public Inno.Core.Coroutines.CoroutineHandle Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(object? owner, System.Collections.IEnumerator routine)
```

Starts a coroutine with an owner token.

**Parameter `owner`:** Owner key used by `Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(System.Object)`.

**Parameter `routine`:** Enumerator exclusively transferred to the scheduler after successful admission.

**Returns:** Coroutine handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L66).

## `StopAllCoroutines`

<a id="api-5a1ef857eb528486"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines 1cffd6c7a89ecb50c3528b8f51af80994c4d2bf91ae8254423acd07e79b1f594 -->

```csharp
public void Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines()
```

Requests stopping all active coroutines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L139).

## `StopAllCoroutines`

<a id="api-e3ae0402198b5654"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(System.Object) edee117a0651204bbefbe5337276f85e537c1542df08985e898610a85fe65e5e -->

```csharp
public void Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(object owner)
```

Stops owned coroutines and disposes their nested enumerators in reverse order.
Reentrant calls defer cleanup of an executing callback until that callback returns.

**Parameter `owner`:** Owner key used when starting coroutines.

**Throws `System.AggregateException`:** One or more eligible enumerators failed during cleanup.

**Throws `System.ObjectDisposedException`:** The scheduler has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L116).

## `StopCoroutine`

<a id="api-c0115c95f7a3d703"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.StopCoroutine(Inno.Core.Coroutines.CoroutineHandle) c4e6757749a096db87c80d719d2769b9f561bd8dce975d58b4b4dd24228eb4b3 -->

```csharp
public bool Inno.Core.Coroutines.CoroutineScheduler.StopCoroutine(Inno.Core.Coroutines.CoroutineHandle handle)
```

Requests stopping a coroutine by handle.

**Parameter `handle`:** Target coroutine handle.

**Returns:** `true` if the handle is valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L92).

## `Tick`

<a id="api-6949bb654af677e7"></a>
<!-- api: M:Inno.Core.Coroutines.CoroutineScheduler.Tick(System.Single) a6bcd3a0cbc095ec9f059cfc5508caad23d2963f985ddd243849ba1ee457dc21 -->

```csharp
public void Inno.Core.Coroutines.CoroutineScheduler.Tick(float deltaTime)
```

Advances coroutine execution by one frame.

**Parameter `deltaTime`:** Frame delta time in seconds.

**Throws `System.AggregateException`:** Execution, a wait predicate, or enumerator cleanup failed.

**Throws `System.InvalidOperationException`:** A callback recursively advances this scheduler.

**Throws `System.ObjectDisposedException`:** The scheduler has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineScheduler.cs#L195).
