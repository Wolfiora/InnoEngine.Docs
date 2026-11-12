---
title: "Vector4"
description: "Reference for Vector4 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.686c6acc6234ae65
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector4`

This reference describes `Vector4` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector4>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-9a061bcc580b8b68) | Field |
| [`UNIT_W`](#api-79c5258f29eb6bf2) | Field |
| [`UNIT_X`](#api-002c3c9ffb2e9402) | Field |
| [`UNIT_Y`](#api-8de7195bf20c3c46) | Field |
| [`UNIT_Z`](#api-52966cc71bab9ad0) | Field |
| [`w`](#api-561b1cc2144c046c) | Field |
| [`x`](#api-679ee4b27833a195) | Field |
| [`y`](#api-1c78ac96ec07744d) | Field |
| [`z`](#api-395ed695b4e9327d) | Field |
| [`ZERO`](#api-41829ca987301afc) | Field |
| [`#ctor`](#api-efb18518ee93a1b3) | Method |
| [`Dot`](#api-a8aba51ea5bd373a) | Method |
| [`Equals`](#api-a960483af3b1d7c9) | Method |
| [`Equals`](#api-01121a6e26487c6f) | Method |
| [`GetHashCode`](#api-c4b341052d5942c8) | Method |
| [`Length`](#api-3766c61f0d0454ad) | Method |
| [`LengthSquared`](#api-cfa4203adc6a427f) | Method |
| [`Lerp`](#api-397bef61a9ffb56a) | Method |
| [`op_Addition`](#api-e6cd6ce85e3a273e) | Method |
| [`op_Division`](#api-bc558b92bd1d914c) | Method |
| [`op_Equality`](#api-7cb7bf82f4ee9347) | Method |
| [`op_Implicit`](#api-33283c57ca619887) | Method |
| [`op_Implicit`](#api-c494374ef196abb7) | Method |
| [`op_Inequality`](#api-dc687ff35304e448) | Method |
| [`op_Multiply`](#api-d93326586f8a0fc3) | Method |
| [`op_Multiply`](#api-07bce5bd90985e2f) | Method |
| [`op_Multiply`](#api-cee94dbeb0a52f3b) | Method |
| [`op_Subtraction`](#api-0117d39f4be2b036) | Method |
| [`op_UnaryNegation`](#api-bf115788265ebc79) | Method |
| [`ProjectToVector3`](#api-bd0a3cbeebe25bc4) | Method |
| [`Reflect`](#api-1d603a65f6c24aa8) | Method |
| [`ToString`](#api-0d318c2f973099dc) | Method |
| [`Transform`](#api-7e0023edf12ba967) | Method |
| [`normalized`](#api-d93b716fcc81c6d1) | Property |

## Type declaration

<a id="api-686c6acc6234ae65"></a>
<!-- api: T:InnoEngine.Mathematics.Vector4 2266a0fb3263418073bf216224ef21044a8b58a5672d77220f25848ff80997db -->

```csharp
public struct InnoEngine.Mathematics.Vector4 : System.IEquatable<InnoEngine.Mathematics.Vector4>
```

Represents a mutable vector4 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L14).

## `ONE`

<a id="api-9a061bcc580b8b68"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.ONE 942a948bbff8cecc0bb4fa9740c3f64228b606e36df99086e0a962d107bdeeaa -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L68).

## `UNIT_W`

<a id="api-79c5258f29eb6bf2"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.UNIT_W 8bcb1585e63a26bf6f93c5a7b45a775423e4f9a122ded77e00ad41791fda5fd3 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.UNIT_W
```

A unit value aligned with the w axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L84).

## `UNIT_X`

<a id="api-002c3c9ffb2e9402"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.UNIT_X c624e8f12d4292a92b1d95313076af7dbd2907ce7071f45d695112a28eaebc9f -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L72).

## `UNIT_Y`

<a id="api-8de7195bf20c3c46"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.UNIT_Y 668052b21bd71c44c2fe369aae27ebbf8ee4a426e61c0662c9c0fafbd4e371a6 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L76).

## `UNIT_Z`

<a id="api-52966cc71bab9ad0"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.UNIT_Z 5f6a4c6f5698643f833d90e915e29b2ec1152e315b523a45434184aff6598f2f -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.UNIT_Z
```

A unit value aligned with the z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L80).

## `w`

<a id="api-561b1cc2144c046c"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.w 639a3bb32fb87162fdbebd4cc3095126058b6791708f3c90cd4518f00fa80589 -->

```csharp
public float InnoEngine.Mathematics.Vector4.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L31).

## `x`

<a id="api-679ee4b27833a195"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.x 80f45fca41f832f6a3e434e6b99e14dadc7aac5fd3196fa901831c8d343b3042 -->

```csharp
public float InnoEngine.Mathematics.Vector4.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L19).

## `y`

<a id="api-1c78ac96ec07744d"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.y 23c02f88f6b52c86201cbceaffd4d0e90534824b0f4ce19c71307f34993a3dce -->

```csharp
public float InnoEngine.Mathematics.Vector4.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L23).

## `z`

<a id="api-395ed695b4e9327d"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.z 086382a1e49098361b54876056de1546455c7acb2dd40ce4db06627749d5b3b5 -->

```csharp
public float InnoEngine.Mathematics.Vector4.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L27).

## `ZERO`

<a id="api-41829ca987301afc"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4.ZERO e14411b4772decd417c81b23dae82a4b51a5358345649398339f1740f761d88d -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L64).

## `#ctor`

<a id="api-efb18518ee93a1b3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.#ctor(System.Single,System.Single,System.Single,System.Single) 36cc135fe20b173d5bd0ee041e16ff7ca987341a13b13c3b1e97fd043cf2ec8c -->

```csharp
public InnoEngine.Mathematics.Vector4.Vector4(float x, float y, float z, float w)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L48).

## `Dot`

<a id="api-a8aba51ea5bd373a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Dot(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) 50307eddb9c62d10e10c44ee56e7fe270e188c778ea8b00a31b7a3f6b4b4fe78 -->

```csharp
public static float InnoEngine.Mathematics.Vector4.Dot(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L131).

## `Equals`

<a id="api-a960483af3b1d7c9"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Equals(InnoEngine.Mathematics.Vector4) e8759969a958a41754517a466e504b05e790060bdcf000f0cfff11d09d8ccb33 -->

```csharp
public bool InnoEngine.Mathematics.Vector4.Equals(InnoEngine.Mathematics.Vector4 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L449).

## `Equals`

<a id="api-01121a6e26487c6f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Equals(System.Object) 217d3954e531a87ff2e3420dac3ffddd6663a1bca59e75334f52321d9af90cc0 -->

```csharp
public override bool InnoEngine.Mathematics.Vector4.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L439).

## `GetHashCode`

<a id="api-c4b341052d5942c8"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.GetHashCode 5b0fb54093cf794285fd2269eae9bc9ed61e1e7bc17e044fd82750639759f535 -->

```csharp
public override int InnoEngine.Mathematics.Vector4.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L456).

## `Length`

<a id="api-3766c61f0d0454ad"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Length ed1aed508934fc56a7b2bda93733593a23661c29b995443141a7782cb5eb2d1a -->

```csharp
public float InnoEngine.Mathematics.Vector4.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L94).

## `LengthSquared`

<a id="api-cfa4203adc6a427f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.LengthSquared a325bdfc130f8fdf8e7a73ca095f1ac29e47c44c8931fdd56d22f4c2a605de7b -->

```csharp
public float InnoEngine.Mathematics.Vector4.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L103).

## `Lerp`

<a id="api-397bef61a9ffb56a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Lerp(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4,System.Single) a2f64a01da0a52abc8b34ea83a6a12778e13666c21568ae55176b576c856c3e4 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.Lerp(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b, float t)
```

Interpolates linearly after clamping the interpolation factor to [0, 1].

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L154).

## `op_Addition`

<a id="api-e6cd6ce85e3a273e"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Addition(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) b20c3adeffadea515e94d6fa5b3dadc91a8ee74b6c3855578fd54c421fdee4dd -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator +(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L250).

## `op_Division`

<a id="api-bc558b92bd1d914c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Division(InnoEngine.Mathematics.Vector4,System.Single) 5a2e5ce26edd0c45156d80d45dd104c1eb60e077a41f60d1dbde7e2f46844eeb -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator /(InnoEngine.Mathematics.Vector4 v, float s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L363).

## `op_Equality`

<a id="api-7cb7bf82f4ee9347"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Equality(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) 6c85146241ae4fbea7445fff6b579708a5753f31fb2f26aa8a79926be6ce9e2b -->

```csharp
public static bool InnoEngine.Mathematics.Vector4.operator ==(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L382).

## `op_Implicit`

<a id="api-33283c57ca619887"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Implicit(InnoEngine.Mathematics.Vector4)~System.Numerics.Vector4 f9b68bfeb6419d682793d5c9f243dac6976dc4ae75368f4899800f92916eda01 -->

```csharp
public static InnoEngine.Mathematics.Vector4.implicit operator System.Numerics.Vector4(InnoEngine.Mathematics.Vector4 v)
```

Converts the supplied value to `System.Numerics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L418).

## `op_Implicit`

<a id="api-c494374ef196abb7"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Implicit(System.Numerics.Vector4)~InnoEngine.Mathematics.Vector4 4e2c97bb64903a1e76212835c8ba8dc868b268d59065093c95d6784d78eb6efb -->

```csharp
public static InnoEngine.Mathematics.Vector4.implicit operator InnoEngine.Mathematics.Vector4(System.Numerics.Vector4 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L428).

## `op_Inequality`

<a id="api-dc687ff35304e448"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Inequality(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) dc8c4b1781111850a69d3b297a12f4fbd3480b3a1ce96f94533d5b59263f7f91 -->

```csharp
public static bool InnoEngine.Mathematics.Vector4.operator !=(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L404).

## `op_Multiply`

<a id="api-d93326586f8a0fc3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Multiply(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector4) 060e6d4127f52c599b2699b1623d9c5a4783c44e43ca55d922a662ec38f70299 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator *(InnoEngine.Mathematics.Matrix m, InnoEngine.Mathematics.Vector4 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L338).

## `op_Multiply`

<a id="api-07bce5bd90985e2f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Multiply(InnoEngine.Mathematics.Vector4,System.Single) 4478b494d301fbe84c8ff0d2c312bf0e3b791057dfd2aa090675b33e8afe7bc2 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator *(InnoEngine.Mathematics.Vector4 v, float s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L301).

## `op_Multiply`

<a id="api-cee94dbeb0a52f3b"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Multiply(System.Single,InnoEngine.Mathematics.Vector4) 101be2b2fdacce571cd7902edc9b055cbb5ad7b4928c57eba3681adc185d2d2b -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator *(float s, InnoEngine.Mathematics.Vector4 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L320).

## `op_Subtraction`

<a id="api-0117d39f4be2b036"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_Subtraction(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) f518caff5c65eb5b8629a65364374f5a2966597d62444e99681913c9f64307f3 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator -(InnoEngine.Mathematics.Vector4 a, InnoEngine.Mathematics.Vector4 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L269).

## `op_UnaryNegation`

<a id="api-bf115788265ebc79"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.op_UnaryNegation(InnoEngine.Mathematics.Vector4) 199e0662109365b4cd24d2a29d560aba9ea714ba30445aca386118b54b0d4650 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.operator -(InnoEngine.Mathematics.Vector4 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L285).

## `ProjectToVector3`

<a id="api-bd0a3cbeebe25bc4"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.ProjectToVector3 8544fccc51d6a936bf8cbc3ee2f119a6ea35350a4b02f59e51db3b1c666f7033 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector4.ProjectToVector3()
```

Projects the supplied value onto the requested dimensional space.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L229).

## `Reflect`

<a id="api-1d603a65f6c24aa8"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Reflect(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Vector4) 5de64458c48b32e928b7fb3c0ae4e85a35457aca982c38d244a51b3b053f2b6d -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.Reflect(InnoEngine.Mathematics.Vector4 vec, InnoEngine.Mathematics.Vector4 normal)
```

Reflects an incident value across the supplied normal.

**Parameter `vec`:** The vec consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L175).

## `ToString`

<a id="api-0d318c2f973099dc"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.ToString ce1abae43182ba7a38e28004bd369345dbfc125a4183e80e9bc4205aac758172 -->

```csharp
public override string InnoEngine.Mathematics.Vector4.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L463).

## `Transform`

<a id="api-7e0023edf12ba967"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4.Transform(InnoEngine.Mathematics.Vector4,InnoEngine.Mathematics.Matrix) 48a677d53bcf3b4013527b127d6b92ec67add464fb323c1c496bcc85d9c5b8c8 -->

```csharp
public static InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.Transform(InnoEngine.Mathematics.Vector4 v, InnoEngine.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L195).

## `normalized`

<a id="api-d93b716fcc81c6d1"></a>
<!-- api: P:InnoEngine.Mathematics.Vector4.normalized 67155b34698bcaddff23e56b4a70912c73e270c99e4fe253c4028f3bc59b7121 -->

```csharp
public InnoEngine.Mathematics.Vector4 InnoEngine.Mathematics.Vector4.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L108).
