---
title: "Vector4Int"
description: "Reference for Vector4Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.ef4fa5990d409745
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector4Int`

This reference describes `Vector4Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector4Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-783b1650a24ae5d9) | Field |
| [`UNIT_W`](#api-47aa395fdf609456) | Field |
| [`UNIT_X`](#api-c51ea94bd98e037e) | Field |
| [`UNIT_Y`](#api-0138b3e71b0a4e16) | Field |
| [`UNIT_Z`](#api-157d8177642d1029) | Field |
| [`w`](#api-c8cc7b0b38119dff) | Field |
| [`x`](#api-10e6d55e026ea56e) | Field |
| [`y`](#api-6f048e49eb004f20) | Field |
| [`z`](#api-90e33c3512f457ac) | Field |
| [`ZERO`](#api-687f571fbecbc806) | Field |
| [`#ctor`](#api-e2dbe29a1d0177ad) | Method |
| [`Dot`](#api-6c78b5728ac9c91c) | Method |
| [`Equals`](#api-0d10c87bdfa81bc7) | Method |
| [`Equals`](#api-640f4746145bb5c1) | Method |
| [`GetHashCode`](#api-3bcf767c78eb04bb) | Method |
| [`Lerp`](#api-06c6bcfcd7f9c225) | Method |
| [`op_Addition`](#api-7eaa46d0e1b61e7c) | Method |
| [`op_Division`](#api-aaa1ae8c36e22756) | Method |
| [`op_Equality`](#api-654317f4e9922211) | Method |
| [`op_Explicit`](#api-6388c404bbc8273d) | Method |
| [`op_Explicit`](#api-b17ef0bc3167e46f) | Method |
| [`op_Inequality`](#api-cc64d90cd4be360a) | Method |
| [`op_Multiply`](#api-35860d136d4f0e73) | Method |
| [`op_Multiply`](#api-66286800c2c42e6e) | Method |
| [`op_Subtraction`](#api-d17883970ca35fa3) | Method |
| [`op_UnaryNegation`](#api-1c16535780c55d5d) | Method |
| [`Reflect`](#api-eb15c1658483455c) | Method |
| [`ToString`](#api-7cc5c9fbbc929451) | Method |
| [`Transform`](#api-1ef104bd60b03450) | Method |

## Type declaration

<a id="api-ef4fa5990d409745"></a>
<!-- api: T:InnoEngine.Mathematics.Vector4Int 7286b676c41b0f82c7adb34fa64293913cd196f6ce6e54afe5ee4650f19d1790 -->

```csharp
public struct InnoEngine.Mathematics.Vector4Int : System.IEquatable<InnoEngine.Mathematics.Vector4Int>
```

Represents a mutable vector4int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L11).

## `ONE`

<a id="api-783b1650a24ae5d9"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.ONE 48feb2c73fafd6239626bbaad0eee9f443c020e28753cdb4b0fc6414396d067b -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L65).

## `UNIT_W`

<a id="api-47aa395fdf609456"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.UNIT_W c46d4cf5d6cce368ec8d599af8090f802dd64fcfe6bca95832c8b3bdf4e48336 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.UNIT_W
```

A unit value aligned with the w axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L81).

## `UNIT_X`

<a id="api-c51ea94bd98e037e"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.UNIT_X 89a8a4c7abec70a30e412826f7eb8cf25730af567003184633a54745b43b028b -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L69).

## `UNIT_Y`

<a id="api-0138b3e71b0a4e16"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.UNIT_Y 19e09c75e926791a1d50fef0cbc05e20227299bdbcb81dfc38fb0293ad5898ec -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L73).

## `UNIT_Z`

<a id="api-157d8177642d1029"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.UNIT_Z 1eedad17cf124a2c39595d8c706dc105130e6b5afc0057f495c7ee5383076d6f -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.UNIT_Z
```

A unit value aligned with the z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L77).

## `w`

<a id="api-c8cc7b0b38119dff"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.w e34b997b772ea066d0ac8748e90cc1a52ab4dee20590da079c0598acfb3db555 -->

```csharp
public int InnoEngine.Mathematics.Vector4Int.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L28).

## `x`

<a id="api-10e6d55e026ea56e"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.x cd65c71da2cc37d1d7f8b2de3e63f96cce0506ba3922e5c06cc50fe1ae090192 -->

```csharp
public int InnoEngine.Mathematics.Vector4Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L16).

## `y`

<a id="api-6f048e49eb004f20"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.y 8ee8cc9bbb4ab31b0e53592203016d3a030c1efa5ddd7715d567f85765e4289e -->

```csharp
public int InnoEngine.Mathematics.Vector4Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L20).

## `z`

<a id="api-90e33c3512f457ac"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.z ceaeb955cdc5d685df033c08e6a3941977eaf0a4b9ee3121d4a9965d83c24b96 -->

```csharp
public int InnoEngine.Mathematics.Vector4Int.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L24).

## `ZERO`

<a id="api-687f571fbecbc806"></a>
<!-- api: F:InnoEngine.Mathematics.Vector4Int.ZERO 4d1ea0829e8ea8b78f97cbc60966fefb2cd3acf4bb56bb81cf1d12157aab9bc7 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L61).

## `#ctor`

<a id="api-e2dbe29a1d0177ad"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 11096fcc2ed6b66ded0b41ad0d3e58a2dccec9b106c0ed188187a3095f38b990 -->

```csharp
public InnoEngine.Mathematics.Vector4Int.Vector4Int(int x, int y, int z, int w)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L45).

## `Dot`

<a id="api-6c78b5728ac9c91c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Dot(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) b167631ce20986967f7cba59412af0551a5ec6b59642eea4ff115569df59c79c -->

```csharp
public static int InnoEngine.Mathematics.Vector4Int.Dot(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L97).

## `Equals`

<a id="api-0d10c87bdfa81bc7"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Equals(InnoEngine.Mathematics.Vector4Int) 307a3adeb1198f0c17f37f919913c8b00ad171497cce7c918072f50749863dc1 -->

```csharp
public bool InnoEngine.Mathematics.Vector4Int.Equals(InnoEngine.Mathematics.Vector4Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L372).

## `Equals`

<a id="api-640f4746145bb5c1"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Equals(System.Object) 256d3afb4ac7bd79bb9d21b9d711b24ee30d89b72de62fb38c382bb0b922719e -->

```csharp
public override bool InnoEngine.Mathematics.Vector4Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L362).

## `GetHashCode`

<a id="api-3bcf767c78eb04bb"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.GetHashCode 8ab194099b09561b43447b8d9a38a9965483bc133817cfe1470dfd90490cf801 -->

```csharp
public override int InnoEngine.Mathematics.Vector4Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L379).

## `Lerp`

<a id="api-06c6bcfcd7f9c225"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Lerp(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int,System.Single) c0d5a69685307aa76b7288186ab7fe4ca403077cc25e228866f4d44b4efcec79 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.Lerp(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b, float t)
```

Clamps the interpolation factor to [0, 1] and truncates each interpolated component to an integer.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L120).

## `op_Addition`

<a id="api-7eaa46d0e1b61e7c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Addition(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) ae84a3350ba06dbe6bea105bb543b58dc839efae3362d4e5ac35e3968db87a12 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator +(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L195).

## `op_Division`

<a id="api-aaa1ae8c36e22756"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Division(InnoEngine.Mathematics.Vector4Int,System.Int32) 498660be6665d35c7c099a8fd7318999a089aafc9f50a45099f0b8965709b59f -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator /(InnoEngine.Mathematics.Vector4Int v, int s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L283).

## `op_Equality`

<a id="api-654317f4e9922211"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Equality(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) 58d0b21db0957fb588183af70750b915014703ee0b0dc863fd98cd18743a8b9a -->

```csharp
public static bool InnoEngine.Mathematics.Vector4Int.operator ==(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L302).

## `op_Explicit`

<a id="api-6388c404bbc8273d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Explicit(InnoEngine.Mathematics.Vector4)~InnoEngine.Mathematics.Vector4Int 1b5c55bd0e48d7d7bbfd185cc0d699098ef64634157f5d57254207e3b4b81fb4 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int.explicit operator InnoEngine.Mathematics.Vector4Int(InnoEngine.Mathematics.Vector4 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector4Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L350).

## `op_Explicit`

<a id="api-b17ef0bc3167e46f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Explicit(InnoEngine.Mathematics.Vector4Int)~InnoEngine.Mathematics.Vector4 2e81626ffb599665f46477b18b99cf0eb1fce4a37c2cdff5b95d92721c5b4f3a -->

```csharp
public static InnoEngine.Mathematics.Vector4Int.explicit operator InnoEngine.Mathematics.Vector4(InnoEngine.Mathematics.Vector4Int v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L337).

## `op_Inequality`

<a id="api-cc64d90cd4be360a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Inequality(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) 40ecbb13ae9eb0a297780c0f8cfff5640d7a1c12bcd7bc0fe595aad2a52cd2c8 -->

```csharp
public static bool InnoEngine.Mathematics.Vector4Int.operator !=(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L321).

## `op_Multiply`

<a id="api-35860d136d4f0e73"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Multiply(InnoEngine.Mathematics.Vector4Int,System.Int32) ac5e60d8219f37736fdfe84179f3ed9fd6833baa9d69cbb8149a1afd84b699d2 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator *(InnoEngine.Mathematics.Vector4Int v, int s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L246).

## `op_Multiply`

<a id="api-66286800c2c42e6e"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Multiply(System.Int32,InnoEngine.Mathematics.Vector4Int) 601c5779d7f2b7c3c4c6f2d9ad8f95cf46d0589ba5b98c6372dff611024b0a8b -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator *(int s, InnoEngine.Mathematics.Vector4Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L265).

## `op_Subtraction`

<a id="api-d17883970ca35fa3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_Subtraction(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) 769cfab36223f3b088b2fcc7ec43f87520cce1f844d398c23b0c901566f861f6 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator -(InnoEngine.Mathematics.Vector4Int a, InnoEngine.Mathematics.Vector4Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L214).

## `op_UnaryNegation`

<a id="api-1c16535780c55d5d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.op_UnaryNegation(InnoEngine.Mathematics.Vector4Int) 58c467724d9c728e27724f28008b01ae25ac13c22aabe29759ae5f2da2866eb8 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.operator -(InnoEngine.Mathematics.Vector4Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L230).

## `Reflect`

<a id="api-eb15c1658483455c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Reflect(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Vector4Int) 421b6ed4a448cf0a937c6e9a4af5e954047d6349bec64261250027ba837da9f7 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.Reflect(InnoEngine.Mathematics.Vector4Int vec, InnoEngine.Mathematics.Vector4Int normal)
```

Reflects an incident value across the supplied normal.

**Parameter `vec`:** The vec consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L148).

## `ToString`

<a id="api-7cc5c9fbbc929451"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.ToString ca4142f53714a6e299293c9d1a7b1eb2dbbf791548d59ec45439fb2066f96ca2 -->

```csharp
public override string InnoEngine.Mathematics.Vector4Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L386).

## `Transform`

<a id="api-1ef104bd60b03450"></a>
<!-- api: M:InnoEngine.Mathematics.Vector4Int.Transform(InnoEngine.Mathematics.Vector4Int,InnoEngine.Mathematics.Matrix) 1d9d4696280f5739425c222e2fd2ce868a6e3729bda1902f0adf1f08ffb81074 -->

```csharp
public static InnoEngine.Mathematics.Vector4Int InnoEngine.Mathematics.Vector4Int.Transform(InnoEngine.Mathematics.Vector4Int v, InnoEngine.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L170).
