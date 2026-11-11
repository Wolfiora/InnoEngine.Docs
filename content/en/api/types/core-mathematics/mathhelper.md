---
title: "MathHelper"
description: "Reference for MathHelper in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.1cb7db4f4a322116
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `MathHelper`

This reference describes `MathHelper` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`C_TOLERANCE`](#api-3f7093a1a07155aa) | Field |
| [`AlmostEquals`](#api-00ba7371940dfcbc) | Method |
| [`Barycentric`](#api-068168524c690351) | Method |
| [`CatmullRom`](#api-9acd336a6320c2b9) | Method |
| [`Clamp`](#api-540d3b44a9880ebd) | Method |
| [`Distance`](#api-d55c2f18e2c1c329) | Method |
| [`Hermite`](#api-9f320b1e4862acc1) | Method |
| [`IsFinite`](#api-1104abdd63b0389b) | Method |
| [`IsPowerOfTwo`](#api-41ee682afd18177c) | Method |
| [`Lerp`](#api-2e1183760dcfd0df) | Method |
| [`LerpPrecise`](#api-75a49311b8d50d3c) | Method |
| [`LerpUnclamped`](#api-0fe596be825f7735) | Method |
| [`Saturate`](#api-88f9f8c0bfa9c25c) | Method |
| [`SmoothStep`](#api-fce4f450fba0c467) | Method |
| [`ToDegrees`](#api-8a13274a1bb71aa4) | Method |
| [`ToRadians`](#api-600981024b8e7ed7) | Method |
| [`WrapAngle`](#api-303f13eae9065614) | Method |

## Type declaration

<a id="api-1cb7db4f4a322116"></a>
<!-- api: T:Inno.Core.Mathematics.MathHelper 8cdd54f0e306a48c67a28d57baaa9a18d86631d339f0d3bdd4ddf5f01dace12a -->

```csharp
public static class Inno.Core.Mathematics.MathHelper
```

Contains commonly used precalculated values and mathematical operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L11).

## `C_TOLERANCE`

<a id="api-3f7093a1a07155aa"></a>
<!-- api: F:Inno.Core.Mathematics.MathHelper.C_TOLERANCE b452ea5601448be0ffecf349aee0a7882dc076b7a06a7ddab0b840e245635140 -->

```csharp
public const float Inno.Core.Mathematics.MathHelper.C_TOLERANCE = 1E-06
```

The c tolerance value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L16).

## `AlmostEquals`

<a id="api-00ba7371940dfcbc"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.AlmostEquals(System.Single,System.Single,System.Single) c5179ff3d7efd61030f575ab954e59f5e0232a91550ca8f920842dc49c278d68 -->

```csharp
public static bool Inno.Core.Mathematics.MathHelper.AlmostEquals(float a, float b, float relTolerance = 1E-06)
```

Determines whether two floating-point numbers are approximately equal,
using a relative tolerance based on the magnitude of the numbers.
This is useful for comparing floats where rounding errors may occur.

**Parameter `a`:** The first float value to compare.

**Parameter `b`:** The second float value to compare.

**Parameter `relTolerance`:** The relative tolerance allowed between `a` and `b`.
Default is 1e-6. The comparison checks if the difference is within
`relTolerance * max(|a|, |b|)`.

**Returns:** `true` if the absolute difference between `a` and `b`
    is less than or equal to the relative tolerance multiplied by the larger magnitude of the two values;
    otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L40).

## `Barycentric`

<a id="api-068168524c690351"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Barycentric(System.Single,System.Single,System.Single,System.Single,System.Single) a49234a5594992f8bd8b74210b047df05a199c1d13b4d8892222c92efdf4ebf2 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Barycentric(float value1, float value2, float value3, float amount1, float amount2)
```

Returns the Cartesian coordinate for one axis of a point that is defined by a given triangle and two normalized barycentric (areal) coordinates.

**Parameter `value1`:** The coordinate on one axis of vertex 1 of the defining triangle.

**Parameter `value2`:** The coordinate on the same axis of vertex 2 of the defining triangle.

**Parameter `value3`:** The coordinate on the same axis of vertex 3 of the defining triangle.

**Parameter `amount1`:** The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.

**Parameter `amount2`:** The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.

**Returns:** Cartesian coordinate of the specified point with respect to the axis being used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L70).

## `CatmullRom`

<a id="api-9acd336a6320c2b9"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.CatmullRom(System.Single,System.Single,System.Single,System.Single,System.Single) 7bff9a024d2bffe1f2dc370c1d3dcdfb53754c615248531051db30c72de55013 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.CatmullRom(float value1, float value2, float value3, float value4, float amount)
```

Performs a Catmull-Rom interpolation using the specified positions.

**Parameter `value1`:** The first position in the interpolation.

**Parameter `value2`:** The second position in the interpolation.

**Parameter `value3`:** The third position in the interpolation.

**Parameter `value4`:** The fourth position in the interpolation.

**Parameter `amount`:** Weighting factor.

**Returns:** A position that is the result of the Catmull-Rom interpolation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L102).

## `Clamp`

<a id="api-540d3b44a9880ebd"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Clamp(System.Single,System.Single,System.Single) 740b422d4d189a7d3323cec8891983bf844f11b860f11c867f0accfe816720f5 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Clamp(float value, float min, float max)
```

Clamps a value to the inclusive range [min, max].

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `min`:** The min consumed by clamp; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.

**Parameter `max`:** The max consumed by clamp; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L336).

## `Distance`

<a id="api-d55c2f18e2c1c329"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Distance(System.Single,System.Single) 0a436b81e45cb41f6efe29f915757a597340ce490c8b54a52807e7825e6c5820 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Distance(float value1, float value2)
```

Calculates the absolute value of the difference of two values.

**Parameter `value1`:** Source value.

**Returns:** Distance between the two values.

**Parameter `value2`:** The value2 consumed by distance; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L127).

## `Hermite`

<a id="api-9f320b1e4862acc1"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Hermite(System.Single,System.Single,System.Single,System.Single,System.Single) 802032774a69c1363638eb4287c99b9ead387fa4445467126c84520ca0bc93b4 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Hermite(float value1, float tangent1, float value2, float tangent2, float amount)
```

Performs a Hermite spline interpolation.

**Parameter `value1`:** Source position.

**Parameter `tangent1`:** Source tangent.

**Parameter `value2`:** Source position.

**Parameter `tangent2`:** Source tangent.

**Parameter `amount`:** Weighting factor.

**Returns:** The result of the Hermite spline interpolation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L154).

## `IsFinite`

<a id="api-1104abdd63b0389b"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.IsFinite(System.Single) ffba4edf542c6c9ba5980ac17672a372f1c508b59cf964caa923062bc8582713 -->

```csharp
public static bool Inno.Core.Mathematics.MathHelper.IsFinite(float value)
```

Returns true if the value is finite (not NaN or infinity).

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L364).

## `IsPowerOfTwo`

<a id="api-41ee682afd18177c"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.IsPowerOfTwo(System.Int32) 2db8c3f6b3c7efc66fc83628ae0afd7d25dcb4bb6843adaf580277c0088634ab -->

```csharp
public static bool Inno.Core.Mathematics.MathHelper.IsPowerOfTwo(int value)
```

Determines if value is powered by two.

**Returns:** `true` if `value` is powered by two; otherwise `false`.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L396).

## `Lerp`

<a id="api-2e1183760dcfd0df"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Lerp(System.Single,System.Single,System.Single) b0d4faecfc99797c6a3547535a00e713c462cd5a707f39b1ac99bcea7ad09312 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Lerp(float value1, float value2, float amount)
```

Linearly interpolates between two values.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Destination value.

**Parameter `amount`:** Value between 0 and 1 indicating the weight of value2.

**Returns:** Interpolated value.

**Constraints:** This method performs the linear interpolation based on the following formula:
    `value1 + (value2 - value1) * amount`
    Passing amount a value of 0 will cause value1 to be returned, a value of 1 will cause value2 to be returned.
    See `MathHelper.LerpPrecise(System.Single,System.Single,System.Single)` for a less efficient version with more precision around edge cases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L192).

## `LerpPrecise`

<a id="api-75a49311b8d50d3c"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.LerpPrecise(System.Single,System.Single,System.Single) 5db189fa66c5a81e24178a08ee4a8763ad4e075d253f63182ac0fcbda1a8b370 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.LerpPrecise(float value1, float value2, float amount)
```

Linearly interpolates between two values.
This method is a less efficient, more precise version of `MathHelper.Lerp(System.Single,System.Single,System.Single)`.
See remarks for more info.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Destination value.

**Parameter `amount`:** Value between 0 and 1 indicating the weight of value2.

**Returns:** Interpolated value.

**Constraints:** This method performs the linear interpolation based on the following formula:
    `((1 - amount) * value1) + (value2 * amount)`.
    Passing amount a value of 0 will cause value1 to be returned, a value of 1 will cause value2 to be returned.
    This method does not have the floating point precision issue that `MathHelper.Lerp(System.Single,System.Single,System.Single)` has.
    i.e. If there is a big gap between value1 and value2 in magnitude (e.g. value1=10000000000000000, value2=1),
    right at the edge of the interpolation range (amount=1), `MathHelper.Lerp(System.Single,System.Single,System.Single)` will return 0 (whereas it should return 1).
    This also holds for value1=10^17, value2=10; value1=10^18,value2=10^2... so on.
    For an in depth explanation of the issue, see below references:
    Relevant Wikipedia Article: https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support
    Relevant StackOverflow Answer: http://stackoverflow.com/questions/4353525/floating-point-linear-interpolation#answer-23716956


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L253).

## `LerpUnclamped`

<a id="api-0fe596be825f7735"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.LerpUnclamped(System.Single,System.Single,System.Single) b04c7e3bdccc99cd234e9608aedbf481b86203e964e0e792f242a36914034811 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.LerpUnclamped(float value1, float value2, float amount)
```

Linearly interpolates between two values without clamping the amount.

**Parameter `value1`:** The value1 consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `value2`:** The value2 consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `amount`:** The amount consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L216).

## `Saturate`

<a id="api-88f9f8c0bfa9c25c"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.Saturate(System.Single) 6ba8332b0cd55373cbd70990d2828d9f0be528ef16b1bac185c0a4c1245b99b8 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.Saturate(float value)
```

Clamps a value to the inclusive range [0, 1].

**Returns:** The scalar result calculated from the supplied inputs.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L352).

## `SmoothStep`

<a id="api-fce4f450fba0c467"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.SmoothStep(System.Single,System.Single,System.Single) ae45308ea6030baa0f6329cfea4c13756dd40a027037c8bd27d9019cb7b94b80 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.SmoothStep(float value1, float value2, float amount)
```

Interpolates between two values using a cubic equation.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Source value.

**Parameter `amount`:** Weighting value.

**Returns:** Interpolated value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L277).

## `ToDegrees`

<a id="api-8a13274a1bb71aa4"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.ToDegrees(System.Single) 4fbb6f9cf5e450688f183c28068f782c57ad3d992fec6bd2c96680010b822b95 -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.ToDegrees(float radians)
```

Converts radians to degrees.

**Parameter `radians`:** The angle in radians.

**Returns:** The angle in degrees.

**Constraints:** This method uses double precision internally,
though it returns single float
Factor = 180 / pi


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L301).

## `ToRadians`

<a id="api-600981024b8e7ed7"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.ToRadians(System.Single) 7966a4c725c71644dd44ede78e01de00ee419120231a7cefeb32a514f7ee9ccd -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.ToRadians(float degrees)
```

Converts degrees to radians.

**Returns:** The angle in radians.

**Constraints:** This method uses double precision internally,
though it returns single float
Factor = pi / 180

**Parameter `degrees`:** The degrees consumed by to radians; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L318).

## `WrapAngle`

<a id="api-303f13eae9065614"></a>
<!-- api: M:Inno.Core.Mathematics.MathHelper.WrapAngle(System.Single) 65dae2b0bbdae9d7a6f3a0faa747bce9a58cdd0de0e64487efd8f290cc67d4eb -->

```csharp
public static float Inno.Core.Mathematics.MathHelper.WrapAngle(float angle)
```

Reduces a given angle to a value between π and -π.

**Parameter `angle`:** The angle to reduce, in radians.

**Returns:** The new angle, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L376).
