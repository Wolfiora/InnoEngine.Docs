---
title: "AnimationValueKind"
description: "Reference for AnimationValueKind in Inno.Animation."
uid: api.inno.animation.runtime-script.28a375a2622f9aeb
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationValueKind`

This reference describes `AnimationValueKind` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Quaternion`](#api-f2a16cd8f31dc6b0) | Field |
| [`Scalar`](#api-ec07d0c00cc6929e) | Field |
| [`Vector2`](#api-43c159584719bd6a) | Field |
| [`Vector3`](#api-40da156ced516bde) | Field |
| [`Vector4`](#api-9100a2a5091b9df0) | Field |

## Type declaration

<a id="api-28a375a2622f9aeb"></a>
<!-- api: T:InnoEngine.Animation.AnimationValueKind 8003158ab90bf221bec851ad21be4d5c5129270ea76a1d379409da243543984f -->

```csharp
public enum InnoEngine.Animation.AnimationValueKind : int
```

Describes the number and interpretation of components in an animation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L46).

## `Quaternion`

<a id="api-f2a16cd8f31dc6b0"></a>
<!-- api: F:InnoEngine.Animation.AnimationValueKind.Quaternion 17701e9cab7e33d6b92aa13ac343e5b05c5ca1441a94324f359244b69c157252 -->

```csharp
InnoEngine.Animation.AnimationValueKind.Quaternion = 4
```

Four normalized rotation components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L71).

## `Scalar`

<a id="api-ec07d0c00cc6929e"></a>
<!-- api: F:InnoEngine.Animation.AnimationValueKind.Scalar 6cdc0b144122fd0a7a9564721f487aaa8bfd9f36ab903f9934df2552dab5321a -->

```csharp
InnoEngine.Animation.AnimationValueKind.Scalar = 0
```

A single scalar component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L51).

## `Vector2`

<a id="api-43c159584719bd6a"></a>
<!-- api: F:InnoEngine.Animation.AnimationValueKind.Vector2 c64682bf063c39f6f745a39cbb1b4edfd103999b254adccb58c4abfe65df6062 -->

```csharp
InnoEngine.Animation.AnimationValueKind.Vector2 = 1
```

Two independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L56).

## `Vector3`

<a id="api-40da156ced516bde"></a>
<!-- api: F:InnoEngine.Animation.AnimationValueKind.Vector3 6f41f7ceceb9891b3789f6b6d56f25ebebcbc12b612886f2fba6280b23300e25 -->

```csharp
InnoEngine.Animation.AnimationValueKind.Vector3 = 2
```

Three independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L61).

## `Vector4`

<a id="api-9100a2a5091b9df0"></a>
<!-- api: F:InnoEngine.Animation.AnimationValueKind.Vector4 e7722cb70e72ff3dae9dde0328a388ff44d71964c9146f8c13d8bc70319ae0bf -->

```csharp
InnoEngine.Animation.AnimationValueKind.Vector4 = 3
```

Four independent components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L66).
