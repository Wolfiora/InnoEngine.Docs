---
title: "Vector3"
description: "Reference for Vector3 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.cd39ad16a23c96a2
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector3`

This reference describes `Vector3` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector3>`.

## Members

| Member | Kind |
| --- | --- |
| [`BACK`](#api-cd8d36b7fd18e4aa) | Field |
| [`DOWN`](#api-0bc189b40a0355cb) | Field |
| [`FORWARD`](#api-e6b271ed266bdb7e) | Field |
| [`LEFT`](#api-35a181660b43d369) | Field |
| [`ONE`](#api-7e8813014f210ffc) | Field |
| [`RIGHT`](#api-f8c46bb424c3a4ac) | Field |
| [`UP`](#api-e870fc30842fb266) | Field |
| [`x`](#api-dc69d58daafd265a) | Field |
| [`y`](#api-a526abcbcf4218c9) | Field |
| [`z`](#api-d619960f1fb7bb23) | Field |
| [`ZERO`](#api-0726929edb2ec7ce) | Field |
| [`#ctor`](#api-f5f0e7a4aec51b96) | Method |
| [`Angle`](#api-e1fb3df4e159aac3) | Method |
| [`Cross`](#api-b5da272652ed6503) | Method |
| [`Distance`](#api-103c3266fb2992dd) | Method |
| [`Dot`](#api-05150437a6fc7c87) | Method |
| [`Equals`](#api-110441b3db5ffde6) | Method |
| [`Equals`](#api-2dbac3e80f5e6768) | Method |
| [`GetHashCode`](#api-2cd2ed8943b32121) | Method |
| [`Length`](#api-332d49810fc0ef9d) | Method |
| [`LengthSquared`](#api-ccef98c57069ec24) | Method |
| [`Lerp`](#api-3d393176f019c763) | Method |
| [`NormalizeSafe`](#api-76a0e2c901007580) | Method |
| [`op_Addition`](#api-1cc497a3c176b7f4) | Method |
| [`op_Division`](#api-4466a9361d45889d) | Method |
| [`op_Equality`](#api-67e50d9695c7b885) | Method |
| [`op_Implicit`](#api-5e1c091f287214a6) | Method |
| [`op_Implicit`](#api-e7ce15523d25fb47) | Method |
| [`op_Inequality`](#api-ef7d998c135426fb) | Method |
| [`op_Multiply`](#api-53c71a0fb4eb8512) | Method |
| [`op_Multiply`](#api-9c1acb4e26973125) | Method |
| [`op_Subtraction`](#api-4c9570f2dcfda7c2) | Method |
| [`op_UnaryNegation`](#api-7a09827f56733cf0) | Method |
| [`Project`](#api-57f3507ad0e93c56) | Method |
| [`Reflect`](#api-2c0ea1b043828c36) | Method |
| [`SignedAngle`](#api-2be967f846bcd197) | Method |
| [`ToString`](#api-4a9d9dcf8c1a9c17) | Method |
| [`Transform`](#api-91fcb7f1ddc6be6f) | Method |
| [`Transform`](#api-3c9dd44d960ad865) | Method |
| [`TransformNormal`](#api-7b545eaa128431ba) | Method |
| [`normalized`](#api-6a56ca683f2d6628) | Property |

## Type declaration

<a id="api-cd39ad16a23c96a2"></a>
<!-- api: T:InnoEngine.Mathematics.Vector3 a6d474d871d6b63a7b1c3f3400402cd49291c8511014fe54e89c46ccd06d4a34 -->

```csharp
public struct InnoEngine.Mathematics.Vector3 : System.IEquatable<InnoEngine.Mathematics.Vector3>
```

Represents a mutable vector3 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L14).

## `BACK`

<a id="api-cd8d36b7fd18e4aa"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.BACK 8e68475c61725e08349290ffc5291530f648cf072a9222c3ce85920e11514d34 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.BACK
```

The back value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L83).

## `DOWN`

<a id="api-0bc189b40a0355cb"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.DOWN 87bd3d16ec0efa4430a9b1809f88ed13c278fb478d28d63245d7489f374fa086 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.DOWN
```

The down value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L67).

## `FORWARD`

<a id="api-e6b271ed266bdb7e"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.FORWARD 0ce89af71ec64acb1db1ee4ffcd7a90db4e8648c483e3f4aa0eceab65a7c5fcf -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.FORWARD
```

The forward value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L79).

## `LEFT`

<a id="api-35a181660b43d369"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.LEFT b98fd9dc8ff8bcae586eeaa42ce22d155435504e0fe92a9f79f8e23df5a5eb48 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.LEFT
```

The left value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L71).

## `ONE`

<a id="api-7e8813014f210ffc"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.ONE 5bd49d37d54917d168abae88429d8c6c69ed14052b5ad5cf03257e2c43da96ff -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L59).

## `RIGHT`

<a id="api-f8c46bb424c3a4ac"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.RIGHT cc2a3021f3a16ea98d3f2dd06cbec9d123a9616b0fca55ac81da1546fd4ff4fd -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.RIGHT
```

The right value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L75).

## `UP`

<a id="api-e870fc30842fb266"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.UP ba6845bfbccf0ac4e117d34db996a4523bd8d5dad4c623ec2823de7793f416d3 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.UP
```

The up value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L63).

## `x`

<a id="api-dc69d58daafd265a"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.x 991afdad1b539bffec00a54d3f13d957d20568442e9d3830b366084065da9200 -->

```csharp
public float InnoEngine.Mathematics.Vector3.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L19).

## `y`

<a id="api-a526abcbcf4218c9"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.y 17ec824689049ef81af012a860b58ab2fd6182844820af355e75e5eaeacd252a -->

```csharp
public float InnoEngine.Mathematics.Vector3.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L23).

## `z`

<a id="api-d619960f1fb7bb23"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.z 53a8980991e90d48b7a5a6b2c2ada6254f18312e044cf950a5b918afe31a707c -->

```csharp
public float InnoEngine.Mathematics.Vector3.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L27).

## `ZERO`

<a id="api-0726929edb2ec7ce"></a>
<!-- api: F:InnoEngine.Mathematics.Vector3.ZERO 13019b326af1f11630dc36f0aeb1c7e51ea0ca67c776e1a0ca7c94c5849a76b4 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L55).

## `#ctor`

<a id="api-f5f0e7a4aec51b96"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.#ctor(System.Single,System.Single,System.Single) 78018e3538759f7223fbfbd22e808defc67d097a4ad441746880d1cd23471d45 -->

```csharp
public InnoEngine.Mathematics.Vector3.Vector3(float x, float y, float z)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L41).

## `Angle`

<a id="api-e1fb3df4e159aac3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Angle(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 6a820275624d73fde92a80f54fe190474f19816e93dea5a67d7891ff05906f6e -->

```csharp
public static float InnoEngine.Mathematics.Vector3.Angle(InnoEngine.Mathematics.Vector3 from, InnoEngine.Mathematics.Vector3 to)
```

Calculates the unsigned angle in radians between two values.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L169).

## `Cross`

<a id="api-b5da272652ed6503"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Cross(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 9f2813113e22a5d3bde5c8263a7420bf4c1d77ac42f0bcdd8e57da1a4f14c8f4 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Cross(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Calculates the vector perpendicular to both supplied vectors.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L251).

## `Distance`

<a id="api-103c3266fb2992dd"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Distance(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 4e85490285fdb724eccfa11636402f9c0dfd866da28782fbb2db76a6f54195ad -->

```csharp
public static float InnoEngine.Mathematics.Vector3.Distance(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Calculates the Euclidean distance between two points.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L274).

## `Dot`

<a id="api-05150437a6fc7c87"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Dot(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 4a227ec69ec95d0f90c4ee491a6e1b4863ba807ceacc1a6ae0c3efe1f804aaa1 -->

```csharp
public static float InnoEngine.Mathematics.Vector3.Dot(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L151).

## `Equals`

<a id="api-110441b3db5ffde6"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Equals(InnoEngine.Mathematics.Vector3) 793927daff5468cf5f6a30258195b99c43b985a84a1923ff6ede3a42b5cc01f6 -->

```csharp
public bool InnoEngine.Mathematics.Vector3.Equals(InnoEngine.Mathematics.Vector3 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L603).

## `Equals`

<a id="api-2dbac3e80f5e6768"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Equals(System.Object) 30f5f5d6f5b09ae8f090e43fc18e193fd459943057ed9786a4a1e940db56fc25 -->

```csharp
public override bool InnoEngine.Mathematics.Vector3.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L593).

## `GetHashCode`

<a id="api-2cd2ed8943b32121"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.GetHashCode 01aba30a68de7ae21d7667624771e2fe97ecc0038164e897e3c12a226240228a -->

```csharp
public override int InnoEngine.Mathematics.Vector3.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L610).

## `Length`

<a id="api-332d49810fc0ef9d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Length 493f93b68fe25be732161fc83a67d46d3fa07eac8aee8da34db1b1454c7c02ce -->

```csharp
public float InnoEngine.Mathematics.Vector3.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L93).

## `LengthSquared`

<a id="api-ccef98c57069ec24"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.LengthSquared 91880ce95909fc24daeebaa7af2e8421ba515315725abb760a3b32de6d5a37f6 -->

```csharp
public float InnoEngine.Mathematics.Vector3.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L102).

## `Lerp`

<a id="api-3d393176f019c763"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Lerp(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,System.Single) acc1c02c87a20212ec8e6baaaaff2a70ef766be80a9139f5fbdec5f795a779a7 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Lerp(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b, float t)
```

Interpolates linearly after clamping the interpolation factor to [0, 1].

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L296).

## `NormalizeSafe`

<a id="api-76a0e2c901007580"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.NormalizeSafe(InnoEngine.Mathematics.Vector3,System.Single) 691051dcf6ee001ac8a3cf94ceacf0c181f47733349ca4c7d8e05329772202b6 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.NormalizeSafe(InnoEngine.Mathematics.Vector3 value, float epsilon = 1E-06)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L129).

## `op_Addition`

<a id="api-1cc497a3c176b7f4"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Addition(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 0be62676d224bf0f61438c46c9699f4916b6c2b9657b498befe424da776e7e38 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator +(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L440).

## `op_Division`

<a id="api-4466a9361d45889d"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Division(InnoEngine.Mathematics.Vector3,System.Single) 738b1ee8e9be87221846f10c80a2e7310e471f1922d4f87315157caea884bba7 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator /(InnoEngine.Mathematics.Vector3 v, float s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L519).

## `op_Equality`

<a id="api-67e50d9695c7b885"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Equality(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) af346acfd9abd7a028f2e2c07e72ef9a35aba213dbeae895306094a24d5cbb2c -->

```csharp
public static bool InnoEngine.Mathematics.Vector3.operator ==(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L537).

## `op_Implicit`

<a id="api-5e1c091f287214a6"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Implicit(InnoEngine.Mathematics.Vector3)~System.Numerics.Vector3 96dc839f75e12058777a4ff1d7af3d3b000f29cb9e3ad38f46e74073cda93551 -->

```csharp
public static InnoEngine.Mathematics.Vector3.implicit operator System.Numerics.Vector3(InnoEngine.Mathematics.Vector3 v)
```

Converts the supplied value to `System.Numerics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L572).

## `op_Implicit`

<a id="api-e7ce15523d25fb47"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Implicit(System.Numerics.Vector3)~InnoEngine.Mathematics.Vector3 15edf82b38af5dad1fd2c4dd0814c9c979c4417e5977eb2f0e1841553ceee0a1 -->

```csharp
public static InnoEngine.Mathematics.Vector3.implicit operator InnoEngine.Mathematics.Vector3(System.Numerics.Vector3 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L582).

## `op_Inequality`

<a id="api-ef7d998c135426fb"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Inequality(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) e1073e59172a743dfa0941ff96d3e8cb0d8cfd49639282206dd686f2f03f1c9b -->

```csharp
public static bool InnoEngine.Mathematics.Vector3.operator !=(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L558).

## `op_Multiply`

<a id="api-53c71a0fb4eb8512"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Multiply(InnoEngine.Mathematics.Vector3,System.Single) 687823ff3cab63454beaf70f2900024f34a7532e144f430dd511ac16b025b894 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator *(InnoEngine.Mathematics.Vector3 v, float s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L485).

## `op_Multiply`

<a id="api-9c1acb4e26973125"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Multiply(System.Single,InnoEngine.Mathematics.Vector3) 7f8c1ce5547ad55bc0fd68cb46c1ab099d285b88f836939cf5d6ce3ff8e8c7ab -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator *(float s, InnoEngine.Mathematics.Vector3 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L502).

## `op_Subtraction`

<a id="api-4c9570f2dcfda7c2"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_Subtraction(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 111d7564198ddb9516469671dab491bca4b7a87e52f066754c9668a7a5b02270 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator -(InnoEngine.Mathematics.Vector3 a, InnoEngine.Mathematics.Vector3 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L457).

## `op_UnaryNegation`

<a id="api-7a09827f56733cf0"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.op_UnaryNegation(InnoEngine.Mathematics.Vector3) a16a6d79e724312400274bbedec69fba13fe4c24136a96896a93d97e2b6150b9 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.operator -(InnoEngine.Mathematics.Vector3 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L471).

## `Project`

<a id="api-57f3507ad0e93c56"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Project(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) a5ddade35409ad354463b41136065af39659275615172a6e644294bebae04069 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Project(InnoEngine.Mathematics.Vector3 vector, InnoEngine.Mathematics.Vector3 onto)
```

Projects the supplied value onto the requested dimensional space.

**Parameter `vector`:** The concrete value read or transformed by this operation.

**Parameter `onto`:** The onto consumed by project; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L224).

## `Reflect`

<a id="api-2c0ea1b043828c36"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Reflect(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) ddff6fec2430421aaae294a99a7be6a10a7257f5b31a85944ea34307ef877a4d -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Reflect(InnoEngine.Mathematics.Vector3 dir, InnoEngine.Mathematics.Vector3 normal)
```

Reflects an incident value across the supplied normal.

**Parameter `dir`:** The dir consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L317).

## `SignedAngle`

<a id="api-2be967f846bcd197"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.SignedAngle(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 906c8ce1c517e8f235c8585e0d0f8c6d59e53f35162062755bb0d137e038cbe5 -->

```csharp
public static float InnoEngine.Mathematics.Vector3.SignedAngle(InnoEngine.Mathematics.Vector3 from, InnoEngine.Mathematics.Vector3 to, InnoEngine.Mathematics.Vector3 axis)
```

Calculates the signed angle in radians from one value to another.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Parameter `axis`:** The axis consumed by signed angle; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L200).

## `ToString`

<a id="api-4a9d9dcf8c1a9c17"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.ToString 72117ebee2112e792611961cdd8a936613be85f738e77c70da2e7ccc66dcc410 -->

```csharp
public override string InnoEngine.Mathematics.Vector3.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L617).

## `Transform`

<a id="api-91fcb7f1ddc6be6f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Transform(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Matrix) 970340f3c4990f6aaba7e384dca557c647c0b45f9bf5f2f747fe944f4c390694 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Transform(InnoEngine.Mathematics.Vector3 position, InnoEngine.Mathematics.Matrix matrix)
```

Transforms a position as a column vector with an implicit homogeneous coordinate of one.

**Returns:** The transformed XYZ components, including translation. No perspective divide is performed.

**Parameter `position`:** The input position.

**Parameter `matrix`:** The transformation matrix applied to the supplied value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L336).

## `Transform`

<a id="api-3c9dd44d960ad865"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.Transform(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion) 50699cf5576f1e3f0adc5c2d470c5f9856a561652bcfacfcf5c47d984a499cf1 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.Transform(InnoEngine.Mathematics.Vector3 value, InnoEngine.Mathematics.Quaternion rotation)
```

Transforms the supplied value by the requested transformation.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `rotation`:** The rotation applied to the supplied value.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L408).

## `TransformNormal`

<a id="api-7b545eaa128431ba"></a>
<!-- api: M:InnoEngine.Mathematics.Vector3.TransformNormal(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Matrix) dbdc7d7c0bf77a8100d11ee3d131fd915429af2dfb65e67c44f057c15200d1e5 -->

```csharp
public static InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.TransformNormal(InnoEngine.Mathematics.Vector3 normal, InnoEngine.Mathematics.Matrix matrix)
```

Applies the matrix's upper-left 3-by-3 linear transform without translation.

**Parameter `normal`:** The surface normal used by the operation.

**Parameter `matrix`:** The transformation matrix applied to the supplied value.

**Returns:** The transformed components without normalization or an automatically computed inverse transpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L372).

## `normalized`

<a id="api-6a56ca683f2d6628"></a>
<!-- api: P:InnoEngine.Mathematics.Vector3.normalized 162de767a7c26eac38d1b9636d811a40626acca5e721645fb898120727cb4575 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Vector3.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L107).
