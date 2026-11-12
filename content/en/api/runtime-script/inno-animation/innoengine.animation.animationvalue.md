---
title: "AnimationValue"
description: "Reference for AnimationValue in Inno.Animation."
uid: api.inno.animation.runtime-script.26750ca4ce01658f
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationValue`

This reference describes `AnimationValue` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-363c5d2002908862) | Method |
| [`kind`](#api-21acca4947b0e883) | Property |
| [`w`](#api-66bb44ac7166f5ac) | Property |
| [`x`](#api-6308bcb07acfa839) | Property |
| [`y`](#api-4d5a79114b6d28b9) | Property |
| [`z`](#api-dbc77dce921dfd7b) | Property |

## Type declaration

<a id="api-26750ca4ce01658f"></a>
<!-- api: T:InnoEngine.Animation.AnimationValue 65afaa39a67767bb12f3f967138168d9e783c5b8bc5af3cb763251816dc778fa -->

```csharp
public struct InnoEngine.Animation.AnimationValue
```

Stores one backend-neutral scalar, vector, or quaternion animation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L77).

## `#ctor`

<a id="api-363c5d2002908862"></a>
<!-- api: M:InnoEngine.Animation.AnimationValue.#ctor(InnoEngine.Animation.AnimationValueKind,System.Single,System.Single,System.Single,System.Single) 9a0e08d6dd0641f83f0cb8039724740cdfefb5227cf9f5117799f4167343b23a -->

```csharp
public InnoEngine.Animation.AnimationValue.AnimationValue(InnoEngine.Animation.AnimationValueKind kind, float x, float y = 0, float z = 0, float w = 0)
```

Creates a four-component animation value.

**Parameter `kind`:** Interpretation of the populated components.

**Parameter `x`:** First component.

**Parameter `y`:** Second component.

**Parameter `z`:** Third component.

**Parameter `w`:** Fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L97).

## `kind`

<a id="api-21acca4947b0e883"></a>
<!-- api: P:InnoEngine.Animation.AnimationValue.kind b246f923c826889d2f78a8901894a16c618a562034fa137be51d14ac5a4a1b5f -->

```csharp
public InnoEngine.Animation.AnimationValueKind InnoEngine.Animation.AnimationValue.kind { get; set; }
```

Gets or sets the component interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L115).

## `w`

<a id="api-66bb44ac7166f5ac"></a>
<!-- api: P:InnoEngine.Animation.AnimationValue.w 68952cac091695388fda51054f830dc0eadd3b6a3ebe67de811017f38a61e28d -->

```csharp
public float InnoEngine.Animation.AnimationValue.w { get; set; }
```

Gets or sets the fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L139).

## `x`

<a id="api-6308bcb07acfa839"></a>
<!-- api: P:InnoEngine.Animation.AnimationValue.x b417e287265b3c56f009444fcf420238af8a40489296e39813c961917dbdf37a -->

```csharp
public float InnoEngine.Animation.AnimationValue.x { get; set; }
```

Gets or sets the first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L121).

## `y`

<a id="api-4d5a79114b6d28b9"></a>
<!-- api: P:InnoEngine.Animation.AnimationValue.y fbb925709f5f30a3acc35239f23e9c82de15f4cb07dddbb9b96dc49006e81e19 -->

```csharp
public float InnoEngine.Animation.AnimationValue.y { get; set; }
```

Gets or sets the second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L127).

## `z`

<a id="api-dbc77dce921dfd7b"></a>
<!-- api: P:InnoEngine.Animation.AnimationValue.z 9d5430c22e6a19058f40ff8406d824de4ea33b6dbdb847125196a2ecd29df770 -->

```csharp
public float InnoEngine.Animation.AnimationValue.z { get; set; }
```

Gets or sets the third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L133).
