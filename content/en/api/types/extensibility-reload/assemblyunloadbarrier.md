---
title: "AssemblyUnloadBarrier"
description: "Reference for AssemblyUnloadBarrier in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.f2a4cad4a58221e5
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `AssemblyUnloadBarrier`

This reference describes `AssemblyUnloadBarrier` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-de3b67c2dc466fed) | Method |
| [`Advance`](#api-04630c847f89f91e) | Method |
| [`Wait`](#api-f92221354de70ac0) | Method |
| [`collectionAttempts`](#api-3d851dc0fc921be8) | Property |
| [`failure`](#api-8ff6fec1fcd867aa) | Property |
| [`state`](#api-90dc8c5d17d1727f) | Property |

## Type declaration

<a id="api-f2a4cad4a58221e5"></a>
<!-- api: T:Inno.Extensibility.Reload.AssemblyUnloadBarrier 2c547be59e981a5bb26a03090f9fda201f0d2978dbd0943632af8cfce493617a -->

```csharp
public sealed class Inno.Extensibility.Reload.AssemblyUnloadBarrier
```

Prevents a generation transition from completing until every retired collectible assembly is reclaimed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L12).

## `#ctor`

<a id="api-de3b67c2dc466fed"></a>
<!-- api: M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.#ctor(System.Collections.Generic.IEnumerable{Inno.Extensibility.Reload.IAssemblyUnloadProbe},Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions) f33007f29e1e91bf5a79d8b336d886ac992022d4b02b4108945189b3b36a6791 -->

```csharp
public Inno.Extensibility.Reload.AssemblyUnloadBarrier.AssemblyUnloadBarrier(System.Collections.Generic.IEnumerable<Inno.Extensibility.Reload.IAssemblyUnloadProbe> probes, Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions? options = null)
```

Creates a barrier over a complete retirement set.

**Parameter `probes`:** Weak unload probes for every retired collectible generation in the transaction.

**Parameter `options`:** Optional collection cadence and retention threshold.

**Throws `System.ArgumentNullException`:** Thrown when `probes` or one of its values is null.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an option duration is negative or the retention threshold is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L39).

## `Advance`

<a id="api-04630c847f89f91e"></a>
<!-- api: M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance 9096c6af39310e437cc08858ab34ebcd2c603ac0fecaae731582affbf5479d9f -->

```csharp
public bool Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance()
```

Performs a due full collection cycle and reevaluates every retired generation.

**Returns:** `true` only when every probe has completed; otherwise, `false`.

**Throws `Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown on every call after the retention threshold is reached while a generation remains reachable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L108).

## `Wait`

<a id="api-f92221354de70ac0"></a>
<!-- api: M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Wait(System.Threading.CancellationToken) c5358ef83909fbd95c4d3a9a40029a84f9397c661a6d1c156fc95f47f2d4e744 -->

```csharp
public void Inno.Extensibility.Reload.AssemblyUnloadBarrier.Wait(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Blocks the caller until all retired generations are reclaimed, cancellation is requested, or the barrier faults.

**Parameter `cancellationToken`:** A token that can cancel the wait without changing the barrier state.

**Throws `System.OperationCanceledException`:** Thrown when `cancellationToken` is canceled before completion.

**Throws `Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown when the retention threshold is reached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L164).

## `collectionAttempts`

<a id="api-3d851dc0fc921be8"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadBarrier.collectionAttempts fc702c5b2894695c86a3396f644d857c04eee0ac68760cc9aa8647b874b5ae3d -->

```csharp
public int Inno.Extensibility.Reload.AssemblyUnloadBarrier.collectionAttempts { get; }
```

Gets the number of full collection cycles performed by this barrier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L78).

## `failure`

<a id="api-8ff6fec1fcd867aa"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadBarrier.failure 5378288366bd598a45d2bdf5172a875eb8d9602bf576f4f437c7c6370b4e65e0 -->

```csharp
public Inno.Extensibility.Reload.AssemblyUnloadException? Inno.Extensibility.Reload.AssemblyUnloadBarrier.failure { get; }
```

Gets the terminal failure after the barrier enters `Inno.Extensibility.Reload.AssemblyUnloadBarrierState.Faulted`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L90).

## `state`

<a id="api-90dc8c5d17d1727f"></a>
<!-- api: P:Inno.Extensibility.Reload.AssemblyUnloadBarrier.state 1c65ddf9236136d06680769895d2e3b876927baa9a71e7066ff93dc42c155958 -->

```csharp
public Inno.Extensibility.Reload.AssemblyUnloadBarrierState Inno.Extensibility.Reload.AssemblyUnloadBarrier.state { get; }
```

Gets the current barrier state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/AssemblyUnloadBarrier.cs#L66).
