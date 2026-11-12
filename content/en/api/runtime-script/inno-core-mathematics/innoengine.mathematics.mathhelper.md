---
title: "MathHelper"
description: "Reference for MathHelper in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.a3d0f9ea1446e24a
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `MathHelper`

This reference describes `MathHelper` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`C_TOLERANCE`](#api-19ac973478c365c5) | Field |
| [`AlmostEquals`](#api-215262be5d0eda53) | Method |
| [`Barycentric`](#api-ee7f130b937ded12) | Method |
| [`CatmullRom`](#api-3bb334dd277cfd76) | Method |
| [`Clamp`](#api-ff5272413d894db4) | Method |
| [`Distance`](#api-d6237db3b47d6a18) | Method |
| [`Hermite`](#api-239f33ff48dcc050) | Method |
| [`IsFinite`](#api-939dc77a1baab7f0) | Method |
| [`IsPowerOfTwo`](#api-1fa851cf47d5fda5) | Method |
| [`Lerp`](#api-d90646d919e80694) | Method |
| [`LerpPrecise`](#api-438a8e08caff11ce) | Method |
| [`LerpUnclamped`](#api-5b92bfcee5f1be4a) | Method |
| [`Saturate`](#api-2006ebc107863253) | Method |
| [`SmoothStep`](#api-6ac8493bb60c7035) | Method |
| [`ToDegrees`](#api-0515c35d1ea6bb46) | Method |
| [`ToRadians`](#api-ab7837871d80cfa2) | Method |
| [`WrapAngle`](#api-5670a1ad95d693d1) | Method |

## Type declaration

<a id="api-a3d0f9ea1446e24a"></a>
<!-- api: T:InnoEngine.Mathematics.MathHelper 8de555c4f0aa250c9fe80b226a56651a80f946a934efa9b82d111b26c5080056 -->

```csharp
public static class InnoEngine.Mathematics.MathHelper
```

Contains commonly used precalculated values and mathematical operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L11).

## `C_TOLERANCE`

<a id="api-19ac973478c365c5"></a>
<!-- api: F:InnoEngine.Mathematics.MathHelper.C_TOLERANCE 32b30f43e9fa4ee9cf4bb01aa73f207f705ded954b563d0e97ff7e01239782f2 -->

```csharp
public const float InnoEngine.Mathematics.MathHelper.C_TOLERANCE = 1E-06
```

The c tolerance value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L16).

## `AlmostEquals`

<a id="api-215262be5d0eda53"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.AlmostEquals(System.Single,System.Single,System.Single) 048e75b8e8b89f9250ccdd2d40e7099e26edf380d3364506eec1eae2dd0e3f5a -->

```csharp
public static bool InnoEngine.Mathematics.MathHelper.AlmostEquals(float a, float b, float relTolerance = 1E-06)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L40).

## `Barycentric`

<a id="api-ee7f130b937ded12"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Barycentric(System.Single,System.Single,System.Single,System.Single,System.Single) 88db6f11102a6deeba9cd5d23894bc7119ec7c12bcfb48ac2a7cd8c3afd8f893 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Barycentric(float value1, float value2, float value3, float amount1, float amount2)
```

Returns the Cartesian coordinate for one axis of a point that is defined by a given triangle and two normalized barycentric (areal) coordinates.

**Parameter `value1`:** The coordinate on one axis of vertex 1 of the defining triangle.

**Parameter `value2`:** The coordinate on the same axis of vertex 2 of the defining triangle.

**Parameter `value3`:** The coordinate on the same axis of vertex 3 of the defining triangle.

**Parameter `amount1`:** The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.

**Parameter `amount2`:** The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.

**Returns:** Cartesian coordinate of the specified point with respect to the axis being used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L70).

## `CatmullRom`

<a id="api-3bb334dd277cfd76"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.CatmullRom(System.Single,System.Single,System.Single,System.Single,System.Single) 5cb08dc1dbd7c3858ffddac0562cd20d31ad001982e9f66b37dfc8e6ffac1e83 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.CatmullRom(float value1, float value2, float value3, float value4, float amount)
```

Performs a Catmull-Rom interpolation using the specified positions.

**Parameter `value1`:** The first position in the interpolation.

**Parameter `value2`:** The second position in the interpolation.

**Parameter `value3`:** The third position in the interpolation.

**Parameter `value4`:** The fourth position in the interpolation.

**Parameter `amount`:** Weighting factor.

**Returns:** A position that is the result of the Catmull-Rom interpolation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L102).

## `Clamp`

<a id="api-ff5272413d894db4"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Clamp(System.Single,System.Single,System.Single) 4b197b8c781b784ed67cfeea8a6ee1e15ac3692d39f19edcc2d8c88cd9623370 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Clamp(float value, float min, float max)
```

Clamps a value to the inclusive range [min, max].

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `min`:** The min consumed by clamp; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.

**Parameter `max`:** The max consumed by clamp; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L336).

## `Distance`

<a id="api-d6237db3b47d6a18"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Distance(System.Single,System.Single) d73d0071232dc664891a45bc862425ffa7d3c1cf70c950248779ba1a565148bd -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Distance(float value1, float value2)
```

Calculates the absolute value of the difference of two values.

**Parameter `value1`:** Source value.

**Returns:** Distance between the two values.

**Parameter `value2`:** The value2 consumed by distance; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L127).

## `Hermite`

<a id="api-239f33ff48dcc050"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Hermite(System.Single,System.Single,System.Single,System.Single,System.Single) 5970285149b512ee83b85d3e838eba4740080fb362443327b852464b1d860223 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Hermite(float value1, float tangent1, float value2, float tangent2, float amount)
```

Performs a Hermite spline interpolation.

**Parameter `value1`:** Source position.

**Parameter `tangent1`:** Source tangent.

**Parameter `value2`:** Source position.

**Parameter `tangent2`:** Source tangent.

**Parameter `amount`:** Weighting factor.

**Returns:** The result of the Hermite spline interpolation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L154).

## `IsFinite`

<a id="api-939dc77a1baab7f0"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.IsFinite(System.Single) 842f802f9feb1cec7fdbc34263345b3b6648d18784c6de62c5512e2891f4e659 -->

```csharp
public static bool InnoEngine.Mathematics.MathHelper.IsFinite(float value)
```

Returns true if the value is finite (not NaN or infinity).

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L364).

## `IsPowerOfTwo`

<a id="api-1fa851cf47d5fda5"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.IsPowerOfTwo(System.Int32) e4f77c0536cd32f4e0cd26808962db689fc2660a61ebf45569632519b54e2486 -->

```csharp
public static bool InnoEngine.Mathematics.MathHelper.IsPowerOfTwo(int value)
```

Determines if value is powered by two.

**Returns:** `true` if `value` is powered by two; otherwise `false`.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L396).

## `Lerp`

<a id="api-d90646d919e80694"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Lerp(System.Single,System.Single,System.Single) 1e646217d73320ecbd60ddd37263c7fd6021e84f65e3417ed686a9da3b304d90 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Lerp(float value1, float value2, float amount)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L192).

## `LerpPrecise`

<a id="api-438a8e08caff11ce"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.LerpPrecise(System.Single,System.Single,System.Single) 18c1d142c5b4be4f8b0b364d52458bdab7f17e47305fc7682a4c9a84a3bd559f -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.LerpPrecise(float value1, float value2, float amount)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L253).

## `LerpUnclamped`

<a id="api-5b92bfcee5f1be4a"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.LerpUnclamped(System.Single,System.Single,System.Single) f8500647090a196f2d70527c91b4cedc89fc11847392d6586de8682ecf0b5414 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.LerpUnclamped(float value1, float value2, float amount)
```

Linearly interpolates between two values without clamping the amount.

**Parameter `value1`:** The value1 consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `value2`:** The value2 consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `amount`:** The amount consumed by lerp unclamped; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L216).

## `Saturate`

<a id="api-2006ebc107863253"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.Saturate(System.Single) 1f2630eea3c99527faa71c292c06b954237d2791f56505c91d278676ee85a148 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.Saturate(float value)
```

Clamps a value to the inclusive range [0, 1].

**Returns:** The scalar result calculated from the supplied inputs.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L352).

## `SmoothStep`

<a id="api-6ac8493bb60c7035"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.SmoothStep(System.Single,System.Single,System.Single) 7bbb833a595b81aa965d1f24757f6c5d7477bb0df7eee8e83ac5d6bcc85ac06f -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.SmoothStep(float value1, float value2, float amount)
```

Interpolates between two values using a cubic equation.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Source value.

**Parameter `amount`:** Weighting value.

**Returns:** Interpolated value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L277).

## `ToDegrees`

<a id="api-0515c35d1ea6bb46"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.ToDegrees(System.Single) b9b0bddfc0a2a5ddf807e407c1ce7db5f2cb4b4cae288f3f5586d5e2e06da194 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.ToDegrees(float radians)
```

Converts radians to degrees.

**Parameter `radians`:** The angle in radians.

**Returns:** The angle in degrees.

**Constraints:** This method uses double precision internally,
though it returns single float
Factor = 180 / pi


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L301).

## `ToRadians`

<a id="api-ab7837871d80cfa2"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.ToRadians(System.Single) 9339f056295b952e1e51387358ff1c0c06247f4f3662ae672c6b17a7e7644565 -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.ToRadians(float degrees)
```

Converts degrees to radians.

**Returns:** The angle in radians.

**Constraints:** This method uses double precision internally,
though it returns single float
Factor = pi / 180

**Parameter `degrees`:** The degrees consumed by to radians; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L318).

## `WrapAngle`

<a id="api-5670a1ad95d693d1"></a>
<!-- api: M:InnoEngine.Mathematics.MathHelper.WrapAngle(System.Single) dcc6d88e6504d7724d0478b8a13a6931b56d5847cc3d902d911b2747d251c96a -->

```csharp
public static float InnoEngine.Mathematics.MathHelper.WrapAngle(float angle)
```

Reduces a given angle to a value between π and -π.

**Parameter `angle`:** The angle to reduce, in radians.

**Returns:** The new angle, in radians.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/MathHelper.cs#L376).
