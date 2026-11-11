---
title: "ExecutionSlot`1"
description: "Reference for ExecutionSlot`1 in Inno.Core.Execution."
uid: api.inno.core.execution.15e1daf6ef15ff68
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# ``ExecutionSlot`1``

This reference describes ``ExecutionSlot`1`` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cf0d13ed845c3ce9) | Method |
| [`Enter`](#api-1f74885f7c3ad6f1) | Method |
| [`Suspend`](#api-474923f5273e06b1) | Method |
| [`TryGet`](#api-4454e5b751fd2305) | Method |
| [`current`](#api-45176de172a01fc0) | Property |

## Type declaration

<a id="api-15e1daf6ef15ff68"></a>
<!-- api: T:Inno.Core.Execution.ExecutionSlot`1 a27c1b941d710605d737071d4e59a22b9350fd4bdb7e8114b89f10a6d0e38163 -->

```csharp
public sealed class Inno.Core.Execution.ExecutionSlot<TValue>
```

Provides an isolated, revocable execution binding whose values never survive scope retirement.

**Type parameter `TValue`:** The explicitly selected service or immutable execution value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L13).

## `#ctor`

<a id="api-cf0d13ed845c3ce9"></a>
<!-- api: M:Inno.Core.Execution.ExecutionSlot`1.#ctor(System.String) dbedf2f80848ff6946528429b79958b5ca7e8df195c92c628a14442fe9504add -->

```csharp
public Inno.Core.Execution.ExecutionSlot<TValue>.ExecutionSlot(string name)
```

Creates a slot without binding a process-global service.

**Parameter `name`:** The diagnostic name used when access is invalid.

**Throws `System.ArgumentException`:** The name is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L27).

## `Enter`

<a id="api-1f74885f7c3ad6f1"></a>
<!-- api: M:Inno.Core.Execution.ExecutionSlot`1.Enter(`0,System.Boolean) b916c0638db43d7303327be57393c6c9c00650d2fe695bc1f742dad6bcbfc447 -->

```csharp
public System.IDisposable Inno.Core.Execution.ExecutionSlot<TValue>.Enter(TValue value, bool threadAffine = false)
```

Binds a value until the returned scope is retired in strict last-in-first-out order.

**Parameter `value`:** The service or value owned by the enclosing lifetime.

**Parameter `threadAffine`:** Whether access and retirement require the entering thread.

**Returns:** A scope that revokes inherited bindings and clears their strong references on retirement.

**Throws `System.ArgumentNullException`:** The value is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L58).

## `Suspend`

<a id="api-474923f5273e06b1"></a>
<!-- api: M:Inno.Core.Execution.ExecutionSlot`1.Suspend 6f1978c91133b66c04ed52f60cce0492a66c6dbce21c93a6e7c61a0bc5c9a17a -->

```csharp
public System.IDisposable Inno.Core.Execution.ExecutionSlot<TValue>.Suspend()
```

Temporarily masks this slot without exposing an enclosing binding.

**Returns:** A strict scope that restores the enclosing binding when retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L74).

## `TryGet`

<a id="api-4454e5b751fd2305"></a>
<!-- api: M:Inno.Core.Execution.ExecutionSlot`1.TryGet(`0@) ed4ee14b821b36485a63296f3912a5c6cc661947ea2058326caf866e2ca18fd9 -->

```csharp
public bool Inno.Core.Execution.ExecutionSlot<TValue>.TryGet(out TValue value)
```

Tries to read the current binding without falling through an expired child scope.

**Parameter `value`:** Receives the live value, or the default value when access is unavailable.

**Returns:** Whether a live binding is available on this thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L90).

## `current`

<a id="api-45176de172a01fc0"></a>
<!-- api: P:Inno.Core.Execution.ExecutionSlot`1.current 23bfedd3617e32b28d6112259bad427979af606c6514f2e3f7482822bd4dfbc8 -->

```csharp
public TValue Inno.Core.Execution.ExecutionSlot<TValue>.current { get; }
```

Gets the current live value, rejecting expired or wrong-thread bindings.

**Throws `System.InvalidOperationException`:** No live binding exists on the permitted thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/ExecutionSlot.cs#L39).
