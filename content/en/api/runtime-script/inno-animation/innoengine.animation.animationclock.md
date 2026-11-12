---
title: "AnimationClock"
description: "Reference for AnimationClock in Inno.Animation."
uid: api.inno.animation.runtime-script.96bdf99f73e7fd62
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationClock`

This reference describes `AnimationClock` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Scaled`](#api-437b3d4dbaa039fa) | Field |
| [`Unscaled`](#api-9dabc6795c0604f6) | Field |

## Type declaration

<a id="api-96bdf99f73e7fd62"></a>
<!-- api: T:InnoEngine.Animation.AnimationClock d85c47208faccfe9546bba74ffa1a42c3d63bf5cbaae769cd94a27d5b0d116f0 -->

```csharp
public enum InnoEngine.Animation.AnimationClock : int
```

Selects the session clock used to advance an animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L222).

## `Scaled`

<a id="api-437b3d4dbaa039fa"></a>
<!-- api: F:InnoEngine.Animation.AnimationClock.Scaled 8df689042e37833b75d3bd9f28b01018e3a7d7938cb3022a4fde24531a6d4fb7 -->

```csharp
InnoEngine.Animation.AnimationClock.Scaled = 0
```

Uses scaled simulation time and stops while the session is paused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L227).

## `Unscaled`

<a id="api-9dabc6795c0604f6"></a>
<!-- api: F:InnoEngine.Animation.AnimationClock.Unscaled b316920fd51f0007d5427721e440f5b5af21f3755e11182b340d4d2d8baf5f93 -->

```csharp
InnoEngine.Animation.AnimationClock.Unscaled = 1
```

Uses unscaled session time and continues while simulation is paused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L232).
