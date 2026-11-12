---
title: "IAnimationBindingSink"
description: "Reference for IAnimationBindingSink in Inno.Animation."
uid: api.inno.animation.runtime-script.ab54e615d58d86bd
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `IAnimationBindingSink`

This reference describes `IAnimationBindingSink` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-22f21de504bf5e8b) | Method |

## Type declaration

<a id="api-ab54e615d58d86bd"></a>
<!-- api: T:InnoEngine.Animation.IAnimationBindingSink b44cc9b9c5e35edcf0eac6a08edf35d3ad1228cefeb86eaba6c42db88cde2512 -->

```csharp
public interface InnoEngine.Animation.IAnimationBindingSink
```

Receives final backend-neutral samples after runtime blending has completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L369).

## `Apply`

<a id="api-22f21de504bf5e8b"></a>
<!-- api: M:InnoEngine.Animation.IAnimationBindingSink.Apply(System.ReadOnlySpan{InnoEngine.Animation.AnimationSample}) 0c4d9c4f749a57e31b56cfd44116268fd86f4a14a27a543f717c4dcaa619030d -->

```csharp
void InnoEngine.Animation.IAnimationBindingSink.Apply(System.ReadOnlySpan<InnoEngine.Animation.AnimationSample> samples)
```

Applies one immutable frame of final animation samples.

**Parameter `samples`:** Samples sorted by stable binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L377).
