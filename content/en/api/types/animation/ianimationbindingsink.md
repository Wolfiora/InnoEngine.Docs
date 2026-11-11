---
title: "IAnimationBindingSink"
description: "Reference for IAnimationBindingSink in Inno.Animation."
uid: api.inno.animation.b71d0e72b3a92424
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `IAnimationBindingSink`

This reference describes `IAnimationBindingSink` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-c4423dca96dfa637) | Method |

## Type declaration

<a id="api-b71d0e72b3a92424"></a>
<!-- api: T:Inno.Animation.IAnimationBindingSink 891b0e4243d5c10c6bfe5e7e7eb8cc167dd1f12e4d78dc33f09344b6ad001ba5 -->

```csharp
public interface Inno.Animation.IAnimationBindingSink
```

Receives final backend-neutral samples after runtime blending has completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L369).

## `Apply`

<a id="api-c4423dca96dfa637"></a>
<!-- api: M:Inno.Animation.IAnimationBindingSink.Apply(System.ReadOnlySpan{Inno.Animation.AnimationSample}) 015de898f215c319cfc9bc41da5c7c2287a2ccb546605c3582a529890a78537e -->

```csharp
void Inno.Animation.IAnimationBindingSink.Apply(System.ReadOnlySpan<Inno.Animation.AnimationSample> samples)
```

Applies one immutable frame of final animation samples.

**Parameter `samples`:** Samples sorted by stable binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L377).
