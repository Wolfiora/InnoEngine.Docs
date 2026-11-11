---
title: "AnimationValue"
description: "Reference for AnimationValue in Inno.Animation."
uid: api.inno.animation.3e528ecadda0bdf0
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationValue`

This reference describes `AnimationValue` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5eb4c13d6844128a) | Method |
| [`kind`](#api-82efd3d322450659) | Property |
| [`w`](#api-ac97529c5ee31d7b) | Property |
| [`x`](#api-9de7be61c3b323f1) | Property |
| [`y`](#api-7e208569d63b59ad) | Property |
| [`z`](#api-b482a34792b289be) | Property |

## Type declaration

<a id="api-3e528ecadda0bdf0"></a>
<!-- api: T:Inno.Animation.AnimationValue 6663ccc3ba85b0839b8c4c3f775658c972ce3c04f64d918cc41d69fceeb7d1ec -->

```csharp
public struct Inno.Animation.AnimationValue
```

Stores one backend-neutral scalar, vector, or quaternion animation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L77).

## `#ctor`

<a id="api-5eb4c13d6844128a"></a>
<!-- api: M:Inno.Animation.AnimationValue.#ctor(Inno.Animation.AnimationValueKind,System.Single,System.Single,System.Single,System.Single) 67c3b8323970c49032bd1a6ffbc2d16bc46ed6e99d59a7d20b793a2b60475cd0 -->

```csharp
public Inno.Animation.AnimationValue.AnimationValue(Inno.Animation.AnimationValueKind kind, float x, float y = 0, float z = 0, float w = 0)
```

Creates a four-component animation value.

**Parameter `kind`:** Interpretation of the populated components.

**Parameter `x`:** First component.

**Parameter `y`:** Second component.

**Parameter `z`:** Third component.

**Parameter `w`:** Fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L97).

## `kind`

<a id="api-82efd3d322450659"></a>
<!-- api: P:Inno.Animation.AnimationValue.kind 3552ad8c4a5b24a7733467ff6575b11ce9afd85fba81989373de6f4e2d98a0bb -->

```csharp
public Inno.Animation.AnimationValueKind Inno.Animation.AnimationValue.kind { get; set; }
```

Gets or sets the component interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L115).

## `w`

<a id="api-ac97529c5ee31d7b"></a>
<!-- api: P:Inno.Animation.AnimationValue.w 80e50ddf7229306012f57449e299464bcb5e723324032dcaeae226d6c94eac3a -->

```csharp
public float Inno.Animation.AnimationValue.w { get; set; }
```

Gets or sets the fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L139).

## `x`

<a id="api-9de7be61c3b323f1"></a>
<!-- api: P:Inno.Animation.AnimationValue.x 0bf5b405d62d67d2269d32e43a95b12c6d490ab548335a4abff216b055494bdc -->

```csharp
public float Inno.Animation.AnimationValue.x { get; set; }
```

Gets or sets the first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L121).

## `y`

<a id="api-7e208569d63b59ad"></a>
<!-- api: P:Inno.Animation.AnimationValue.y acf886c0b354430eb7ddc20b30e16341df8c5f783d8d30a0bfc2e6123cab48f9 -->

```csharp
public float Inno.Animation.AnimationValue.y { get; set; }
```

Gets or sets the second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L127).

## `z`

<a id="api-b482a34792b289be"></a>
<!-- api: P:Inno.Animation.AnimationValue.z 5085d60869401db36e402cde22b21c7ed28382d43c55639b5e11ed7456380a87 -->

```csharp
public float Inno.Animation.AnimationValue.z { get; set; }
```

Gets or sets the third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L133).
