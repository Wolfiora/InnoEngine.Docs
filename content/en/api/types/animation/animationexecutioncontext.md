---
title: "AnimationExecutionContext"
description: "Reference for AnimationExecutionContext in Inno.Animation."
uid: api.inno.animation.ef9667a69906674f
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationExecutionContext`

This reference describes `AnimationExecutionContext` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-8fc9c040c9135be2) | Method |
| [`current`](#api-4542bd2f4a79f871) | Property |

## Type declaration

<a id="api-ef9667a69906674f"></a>
<!-- api: T:Inno.Animation.AnimationExecutionContext 4a8c6fc414b4f081ddfb8ba246c0a22fab1e4ca03a6f91448356fa378a46ac2d -->

```csharp
public static class Inno.Animation.AnimationExecutionContext
```

Binds one animation service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L10).

## `EnterScope`

<a id="api-8fc9c040c9135be2"></a>
<!-- api: M:Inno.Animation.AnimationExecutionContext.EnterScope(Inno.Animation.IAnimationService) 468872396ee43412132c03587f7d1b6352372baf1ad87ba9583cc4bf808d7b33 -->

```csharp
public static System.IDisposable Inno.Animation.AnimationExecutionContext.EnterScope(Inno.Animation.IAnimationService animation)
```

Binds one animation service until the returned strict scope is disposed.

**Parameter `animation`:** Session-owned animation service.

**Returns:** A strict last-in-first-out execution scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L28).

## `current`

<a id="api-4542bd2f4a79f871"></a>
<!-- api: P:Inno.Animation.AnimationExecutionContext.current f9dace5436eec4a5955963066389510655b5b7bb0020c7d188bb1f4c284e05aa -->

```csharp
public static Inno.Animation.IAnimationService Inno.Animation.AnimationExecutionContext.current { get; }
```

Gets the animation service bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/Animation.cs#L17).
