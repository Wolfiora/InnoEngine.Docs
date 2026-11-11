---
title: "AnimationRuntimeFactory"
description: "Reference for AnimationRuntimeFactory in Inno.Animation.Runtime."
uid: api.inno.animation.runtime.c6d847260d87d80e
kind: api
owners:
  - Inno.Animation.Runtime
apiSurface: source-clr
contracts:
  - project.inno-animation-runtime#playback-and-update-contract
---
# `AnimationRuntimeFactory`

This reference describes `AnimationRuntimeFactory` in `Inno.Animation.Runtime`. Read the [shared contract](../../projects/inno-animation-runtime.md#playback-and-update-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-26b60a3509541eef) | Method |
| [`Create`](#api-7f07d0229554e965) | Method |
| [`descriptor`](#api-d52df9d0e737e17c) | Property |

## Type declaration

<a id="api-c6d847260d87d80e"></a>
<!-- api: T:Inno.Animation.Runtime.AnimationRuntimeFactory 0bf1606185ddc84f9e15fb2dbc65cef6b4fae9b3afc91891c96aae970e085113 -->

```csharp
public sealed class Inno.Animation.Runtime.AnimationRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one animation runtime feature for each isolated session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-26b60a3509541eef"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Animation.Runtime.AnimationRuntime}) c2a222d830252ce8657b0ead451409961575c6588fd4bfee5eeb19b5ad85f5f1 -->

```csharp
public Inno.Animation.Runtime.AnimationRuntimeFactory.AnimationRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Animation.Runtime.AnimationRuntime> runtimeFactory)
```

Creates a reusable feature factory around a composition-owned runtime callback.

**Parameter `runtimeFactory`:** Callback that creates a distinct animation runtime for each session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntimeFactory.cs#L21).

## `Create`

<a id="api-7f07d0229554e965"></a>
<!-- api: M:Inno.Animation.Runtime.AnimationRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 882f09518bb5a26806238fff7c8b2f162ef6faa857a7ab6d1fc7c8ec71a552cf -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Animation.Runtime.AnimationRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates a feature over a newly allocated animation runtime.

**Parameter `context`:** Isolated session context supplied to the runtime factory.

**Returns:** A new session-owned animation feature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntimeFactory.cs#L43).

## `descriptor`

<a id="api-d52df9d0e737e17c"></a>
<!-- api: P:Inno.Animation.Runtime.AnimationRuntimeFactory.descriptor 348a3c23ad6b9fafa33ecd8a37deb3fdb915c80d5e6725d13f3f7a70e6aaaa60 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Animation.Runtime.AnimationRuntimeFactory.descriptor { get; }
```

Gets ordering metadata that evaluates animation after scene simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation.Runtime/AnimationRuntimeFactory.cs#L29).
