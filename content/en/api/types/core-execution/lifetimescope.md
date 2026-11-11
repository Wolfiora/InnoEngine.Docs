---
title: "LifetimeScope"
description: "Reference for LifetimeScope in Inno.Core.Execution."
uid: api.inno.core.execution.96ec7efa1e86c67f
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# `LifetimeScope`

This reference describes `LifetimeScope` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `System.IAsyncDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eaca8524f48eedb4) | Method |
| [`Cancel`](#api-d775bc923fc4df9a) | Method |
| [`Dispose`](#api-3b81ef2d6cbca02b) | Method |
| [`DisposeAsync`](#api-31c436fa7828060f) | Method |
| [```Own``1```](#api-8d3db4fc7c320527) | Method |
| [```RunAsync``1```](#api-10c04802468bfb60) | Method |
| [`Track`](#api-e19a98aab2f3f0be) | Method |
| [`cancellationToken`](#api-e5ce378276960228) | Property |
| [`isQuiescent`](#api-8db5ba4a2211bc85) | Property |
| [`peakTrackedWorkCount`](#api-94ed7eb0caf5b427) | Property |
| [`rejectedWorkCount`](#api-173cea11f9bdc644) | Property |
| [`trackedWorkCount`](#api-5849620ced2a4d62) | Property |

## Type declaration

<a id="api-96ec7efa1e86c67f"></a>
<!-- api: T:Inno.Core.Execution.LifetimeScope 4b8ade4123b82823d0d6f70a9d3ababde337f5e8461846b951fb6135d7e07161 -->

```csharp
public sealed class Inno.Core.Execution.LifetimeScope : System.IDisposable, System.IAsyncDisposable
```

Owns cancellation, tracked work and reverse-order resource retirement for one lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L12).

## `#ctor`

<a id="api-eaca8524f48eedb4"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.#ctor(System.Int32) 2b1d9a4a43a2131b477b72d00100b292389a9901a596147337e992083cf4be38 -->

```csharp
public Inno.Core.Execution.LifetimeScope.LifetimeScope(int maxTrackedWork = 4096)
```

Creates a lifetime with finite asynchronous admission capacity.

**Parameter `maxTrackedWork`:** Maximum retained work records; completed successful work releases capacity immediately.

**Throws `System.ArgumentOutOfRangeException`:** The capacity is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L37).

## `Cancel`

<a id="api-d775bc923fc4df9a"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.Cancel 1fb5329ef93ddb572728c8f209ecac572283eb0232bc619b0f1a38d2586fdcd3 -->

```csharp
public void Inno.Core.Execution.LifetimeScope.Cancel()
```

Stops new registrations and invokes cancellation callbacks on the calling thread.

**Constraints:** Callbacks must return promptly. Dependent resources remain owned while cancellation callbacks execute,
including when another thread attempts disposal. A callback reporting pending work permanently blocks release.

**Throws `System.AggregateException`:** One or more cancellation callbacks fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L177).

## `Dispose`

<a id="api-3b81ef2d6cbca02b"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.Dispose ef523f7dbce77cf1823de2bd53215b53378cfcc00a74118ad2546c58150ef3a1 -->

```csharp
public void Inno.Core.Execution.LifetimeScope.Dispose()
```

Releases a quiescent lifetime in reverse registration order, continuing after ordinary cleanup failures.

**Constraints:** Pending retirement retains the current resource and all remaining dependencies for a later attempt.
Concurrent or reentrant retirement reports pending work without invoking a resource twice.

**Throws `System.InvalidOperationException`:** Tracked work remains active; drain it before retrying.

**Throws `System.AggregateException`:** Cancellation, work or resource retirement fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L224).

## `DisposeAsync`

<a id="api-31c436fa7828060f"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.DisposeAsync 93b7110e0809d52750561e00bcee8b74a5eee91f84a66fede3954d84f493dabb -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Core.Execution.LifetimeScope.DisposeAsync()
```

Cancels and asynchronously drains tracked work before reverse-order release.

**Constraints:** Only use asynchronous disposal for thread-neutral resources. Control-thread owners must await their work
and call synchronous disposal at their own safe point; this method does not marshal to an owner thread.

**Returns:** A task that completes only after work and resource retirement finish.

**Throws `System.AggregateException`:** Cancellation, work or resource retirement fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L269).

## ```Own``1```

<a id="api-8d3db4fc7c320527"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.Own``1(``0) 46bdfcdb263136fef59dd8f4f894ec5158c1ca3bb51379fb39d9fa7d6a83a223 -->

```csharp
public TResource Inno.Core.Execution.LifetimeScope.Own<TResource>(TResource resource) where TResource : System.IDisposable
```

Transfers disposal ownership of a resource to this lifetime.

**Type parameter `TResource`:** The disposable resource type.

**Parameter `resource`:** The resource to release in reverse registration order.

**Returns:** The same resource for explicit dependency wiring.

**Throws `System.ArgumentNullException`:** The resource is null.

**Throws `System.InvalidOperationException`:** Retirement has already started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L113).

## ```RunAsync``1```

<a id="api-10c04802468bfb60"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.RunAsync``1(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask{``0}},System.Threading.CancellationToken) 99da0b9104c149ac4ec52a6a89f4fd1e35285eae0303a2e89a7caed18fe17329 -->

```csharp
public System.Threading.Tasks.Task<TResult> Inno.Core.Execution.LifetimeScope.RunAsync<TResult>(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.ValueTask<TResult>> operation, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Atomically admits and tracks asynchronous work under this owner's cancellation boundary.

**Type parameter `TResult`:** The operation result type.

**Parameter `operation`:** The operation, which must observe the supplied token and must not require owner-thread completion.

**Parameter `cancellationToken`:** Additional cancellation requested by the caller.

**Returns:** The tracked result, cancellation or operation failure.

**Throws `System.InvalidOperationException`:** Retirement has begun or work capacity is exhausted; the operation is not invoked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L156).

## `Track`

<a id="api-e19a98aab2f3f0be"></a>
<!-- api: M:Inno.Core.Execution.LifetimeScope.Track(System.Threading.Tasks.Task) e562ab0badf95355313965c23500dc63bbc29f01535ff74668036422a10e9627 -->

```csharp
public void Inno.Core.Execution.LifetimeScope.Track(System.Threading.Tasks.Task task)
```

Tracks work that must complete before this lifetime's resources can be released.

**Parameter `task`:** Work that observes this lifetime's cancellation token.

**Throws `System.ArgumentNullException`:** The task is null.

**Throws `System.InvalidOperationException`:** Retirement has started or work capacity is exhausted; ownership remains with the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L136).

## `cancellationToken`

<a id="api-e5ce378276960228"></a>
<!-- api: P:Inno.Core.Execution.LifetimeScope.cancellationToken d00738fb32a1e9c8a44043d08ca5410ae13e1d8161d024ab639b22857d54c416 -->

```csharp
public System.Threading.CancellationToken Inno.Core.Execution.LifetimeScope.cancellationToken { get; }
```

Gets cancellation shared by work owned by this lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L80).

## `isQuiescent`

<a id="api-8db5ba4a2211bc85"></a>
<!-- api: P:Inno.Core.Execution.LifetimeScope.isQuiescent d9a1ebcccc21dd9de79d720bcaf1d9f953a7c8895d76567ea89c3a81930ca830 -->

```csharp
public bool Inno.Core.Execution.LifetimeScope.isQuiescent { get; }
```

Gets whether all tracked work has completed and resources can retire synchronously.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L85).

## `peakTrackedWorkCount`

<a id="api-94ed7eb0caf5b427"></a>
<!-- api: P:Inno.Core.Execution.LifetimeScope.peakTrackedWorkCount 0c3c59a789adf09f8d4c638d4a9b4d62f7ae2f9d5857316090267774e8bcc0ab -->

```csharp
public int Inno.Core.Execution.LifetimeScope.peakTrackedWorkCount { get; }
```

Gets the largest simultaneous retained work count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L57).

## `rejectedWorkCount`

<a id="api-173cea11f9bdc644"></a>
<!-- api: P:Inno.Core.Execution.LifetimeScope.rejectedWorkCount ded7aa82d5dd3a6636728ecd2c361b293135d4fc78964625e586af79cc03ad3c -->

```csharp
public long Inno.Core.Execution.LifetimeScope.rejectedWorkCount { get; }
```

Gets work registrations rejected before ownership transfer by finite capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L68).

## `trackedWorkCount`

<a id="api-5849620ced2a4d62"></a>
<!-- api: P:Inno.Core.Execution.LifetimeScope.trackedWorkCount 2e2058240440acb4e5118623da298ba67716a9377f2b2d6120d24a7d384486d0 -->

```csharp
public int Inno.Core.Execution.LifetimeScope.trackedWorkCount { get; }
```

Gets retained work records, including faults awaiting final retirement reporting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/LifetimeScope.cs#L46).
