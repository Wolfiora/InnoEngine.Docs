---
title: "AnimationBindingRuntime"
description: "Reference for AnimationBindingRuntime in Inno.Animation.Runtime."
uid: api.inno.animation.runtime.a104264a6ecd53f3
kind: api
owners:
  - Inno.Animation.Runtime
apiSurface: source-clr
contracts:
  - project.inno-animation-runtime#playback-and-update-contract
---
# `AnimationBindingRuntime`

This reference describes `AnimationBindingRuntime` in `Inno.Animation.Runtime`. Read the [shared contract](../../projects/inno-animation-runtime.md#playback-and-update-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Animation.IAnimationBindingSink`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6732bb87ae850dea) | Method |
| [`Apply`](#api-534777b1797eaf00) | Method |
| [`Dispose`](#api-5a0eaabfa99c6b24) | Method |

## Type declaration

<a id="api-a104264a6ecd53f3"></a>
<!-- api: T:Inno.Animation.Runtime.AnimationBindingRuntime 9174a291805cced090e4ea688f02f99394a49c31dad8b801d2302f84f6ef0a56 -->

```csharp
public sealed class Inno.Animation.Runtime.AnimationBindingRuntime : Inno.Animation.IAnimationBindingSink, System.IDisposable
```

Resolves declared binding protocols through transactional, generation-owned extension snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationBindingRuntime.cs#L12).

## `#ctor`

<a id="api-6732bb87ae850dea"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationBindingRuntime.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Diagnostics.IDiagnosticReporter) 14921d5f2088504d851a4eca218f4be7a17d27678898bbc7674d4990fe311e01 -->

```csharp
public Inno.Animation.Runtime.AnimationBindingRuntime.AnimationBindingRuntime(Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics)
```

Creates a binding owner connected to the host's transactional type catalog.

**Parameter `types`:** The shared type catalog; candidate failure preserves its last good snapshot.

**Parameter `diagnostics`:** A borrowed reporter scoped to this session's binding diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationBindingRuntime.cs#L28).

## `Apply`

<a id="api-534777b1797eaf00"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationBindingRuntime.Apply(System.ReadOnlySpan{Inno.Animation.AnimationSample}) 828e6fe0855c0a9db38721b23ededf85d5db78971e26353169a80453be300ffb -->

```csharp
public void Inno.Animation.Runtime.AnimationBindingRuntime.Apply(System.ReadOnlySpan<Inno.Animation.AnimationSample> samples)
```

Applies a frame batch using the currently committed binding generation.

**Parameter `samples`:** Final samples, independently blended by destination and binding.

**Throws `System.ObjectDisposedException`:** This binding owner has retired.

**Throws `System.InvalidOperationException`:** Called outside the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationBindingRuntime.cs#L58).

## `Dispose`

<a id="api-5a0eaabfa99c6b24"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationBindingRuntime.Dispose 2208b4a68f318e8e852714b1610ad5ee8ddd12564809e3f219bd2c86b3bc1690 -->

```csharp
public void Inno.Animation.Runtime.AnimationBindingRuntime.Dispose()
```

Releases all provider instances and unregisters their generation participant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationBindingRuntime.cs#L95).
