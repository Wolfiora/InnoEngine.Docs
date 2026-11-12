---
title: "AnimationPlaybackState"
description: "Reference for AnimationPlaybackState in Inno.Animation."
uid: api.inno.animation.runtime-script.674675fd4f68abb5
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationPlaybackState`

This reference describes `AnimationPlaybackState` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Paused`](#api-b6753344fdad23d9) | Field |
| [`Playing`](#api-9fb4130f87915a68) | Field |

## Type declaration

<a id="api-674675fd4f68abb5"></a>
<!-- api: T:InnoEngine.Animation.AnimationPlaybackState 9e35e582f8ad8d41c79b2c7b4488e0a691ec80017e8400338c9053c1a7ba9ed8 -->

```csharp
public enum InnoEngine.Animation.AnimationPlaybackState : int
```

Describes the observable lifecycle of one animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L238).

## `Paused`

<a id="api-b6753344fdad23d9"></a>
<!-- api: F:InnoEngine.Animation.AnimationPlaybackState.Paused fd190a2fd0b7e9fc25b1cceabf447dfc61e0bcfc2e9f524a4de749f947433de0 -->

```csharp
InnoEngine.Animation.AnimationPlaybackState.Paused = 1
```

The playback retains its position without advancing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L248).

## `Playing`

<a id="api-9fb4130f87915a68"></a>
<!-- api: F:InnoEngine.Animation.AnimationPlaybackState.Playing 59f20fa2073e71c218a650e3a29bfc74fcd2221c694949d36db631a49c49b4a7 -->

```csharp
InnoEngine.Animation.AnimationPlaybackState.Playing = 0
```

The playback is advancing and producing samples.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L243).
