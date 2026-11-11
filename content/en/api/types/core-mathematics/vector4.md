---
title: "Vector4"
description: "Reference for Vector4 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.ddd9ff8c04de398c
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector4`

This reference describes `Vector4` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector4>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-c90487fecdaf594b) | Field |
| [`UNIT_W`](#api-ecd436aba13c3f74) | Field |
| [`UNIT_X`](#api-4a26fef5202e2ad5) | Field |
| [`UNIT_Y`](#api-251a62a6389f7e34) | Field |
| [`UNIT_Z`](#api-b05fd785657bae9a) | Field |
| [`w`](#api-6bf27ad32acfdb7a) | Field |
| [`x`](#api-e15b75eaeee7748d) | Field |
| [`y`](#api-eccdd29762d50c35) | Field |
| [`z`](#api-25231d7f74c040ed) | Field |
| [`ZERO`](#api-a8df92f4270caa27) | Field |
| [`#ctor`](#api-d93194de48b6c5a8) | Method |
| [`Dot`](#api-a6818bac8f5218d8) | Method |
| [`Equals`](#api-eb9c48eedb8a7cd0) | Method |
| [`Equals`](#api-5c0e0c432e94f733) | Method |
| [`GetHashCode`](#api-61565d5360eb39df) | Method |
| [`Length`](#api-56255bacc9062950) | Method |
| [`LengthSquared`](#api-9406d725eebc7ae4) | Method |
| [`Lerp`](#api-e1e8a72f30fe4c45) | Method |
| [`op_Addition`](#api-a7d4d757c56a9932) | Method |
| [`op_Division`](#api-6d14458c55f0fbdc) | Method |
| [`op_Equality`](#api-6390781250b72664) | Method |
| [`op_Implicit`](#api-ccf5a19491eb29b7) | Method |
| [`op_Implicit`](#api-8be0032643af6ec0) | Method |
| [`op_Inequality`](#api-bf5eb1995d524090) | Method |
| [`op_Multiply`](#api-26bfa4a01ad6e6da) | Method |
| [`op_Multiply`](#api-3f457efde4ed0cc4) | Method |
| [`op_Multiply`](#api-4d9554a25ef5a123) | Method |
| [`op_Subtraction`](#api-99d84777202aa3be) | Method |
| [`op_UnaryNegation`](#api-7bfeab6a23d85359) | Method |
| [`ProjectToVector3`](#api-2c528999e1e2a375) | Method |
| [`Reflect`](#api-acf6b15b9ac58a63) | Method |
| [`ToString`](#api-27afe4e46051b0ce) | Method |
| [`Transform`](#api-197ce7f2808081a3) | Method |
| [`normalized`](#api-8755d0ee1fb5b743) | Property |

## Type declaration

<a id="api-ddd9ff8c04de398c"></a>
<!-- api: T:Inno.Core.Mathematics.Vector4 b20ffcbb0b88d9310e37aeadc650a1ba775aed6228a1d483277ec447fb974612 -->

```csharp
public struct Inno.Core.Mathematics.Vector4 : System.IEquatable<Inno.Core.Mathematics.Vector4>
```

Represents a mutable vector4 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L14).

## `ONE`

<a id="api-c90487fecdaf594b"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.ONE 147236c02a537a5398dbd6b0cd2433cd7f3e3cf90086edf67d193f25a8506afb -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L68).

## `UNIT_W`

<a id="api-ecd436aba13c3f74"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.UNIT_W a08686cd507612a0962da4b1a864a05247089e2856fc768a1b20a07f748d2398 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.UNIT_W
```

A unit value aligned with the w axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L84).

## `UNIT_X`

<a id="api-4a26fef5202e2ad5"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.UNIT_X 277b682abb726ed573f610501659b7a84705f7771e9e04e3ca93e6041b65dab9 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L72).

## `UNIT_Y`

<a id="api-251a62a6389f7e34"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.UNIT_Y caeda9940102a91ffd3dfe2fbfbd417776df301d224b7f80346578bed6c86800 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L76).

## `UNIT_Z`

<a id="api-b05fd785657bae9a"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.UNIT_Z bf00e4be7d2e6a09ac4d8435248ad3727f8706a55bfda9e3b8ed408ba5fe41c7 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.UNIT_Z
```

A unit value aligned with the z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L80).

## `w`

<a id="api-6bf27ad32acfdb7a"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.w f1e714ba3721b66c62f302b41973812dfb198855146fffb0c0f36acf175f266a -->

```csharp
public float Inno.Core.Mathematics.Vector4.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L31).

## `x`

<a id="api-e15b75eaeee7748d"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.x fd9a384d0b9a63c809f031072ce502f634ff2eab1ea4f0ac807b015e5c84c922 -->

```csharp
public float Inno.Core.Mathematics.Vector4.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L19).

## `y`

<a id="api-eccdd29762d50c35"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.y 8891b4a769aded98e1b0ef9b72cc0d03c90732078464dbcdda62b16b7845264f -->

```csharp
public float Inno.Core.Mathematics.Vector4.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L23).

## `z`

<a id="api-25231d7f74c040ed"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.z 2c6add183a087fef50044dc7a067c5951ae3e4583506c74820034ad1a4ee28ce -->

```csharp
public float Inno.Core.Mathematics.Vector4.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L27).

## `ZERO`

<a id="api-a8df92f4270caa27"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4.ZERO 7bdfd00f398bb07112f5e042aaa973a94db7aa2fc98671356801bcba6ad3b1a1 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L64).

## `#ctor`

<a id="api-d93194de48b6c5a8"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.#ctor(System.Single,System.Single,System.Single,System.Single) 0a722efea99b2c42ec328e250a6df80678619a84625145735b39ef524be7c7a7 -->

```csharp
public Inno.Core.Mathematics.Vector4.Vector4(float x, float y, float z, float w)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L48).

## `Dot`

<a id="api-a6818bac8f5218d8"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Dot(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) 0b5e7396b6d7313fec7bb161b6c9b572520785ba02f3eb42e0c33cd73586119d -->

```csharp
public static float Inno.Core.Mathematics.Vector4.Dot(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L131).

## `Equals`

<a id="api-eb9c48eedb8a7cd0"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Equals(Inno.Core.Mathematics.Vector4) c9970e6cb5dc82ef7715c03afd34bf8785f16e300537d68709a87c5c071208f1 -->

```csharp
public bool Inno.Core.Mathematics.Vector4.Equals(Inno.Core.Mathematics.Vector4 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L449).

## `Equals`

<a id="api-5c0e0c432e94f733"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Equals(System.Object) de63fbee423ac29d91ae12b3a7fae334c12d8989b941ab60ede2198a4797e126 -->

```csharp
public override bool Inno.Core.Mathematics.Vector4.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L439).

## `GetHashCode`

<a id="api-61565d5360eb39df"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.GetHashCode f4c1a0b5c58df3b047a4e31e48a6ca61963c745fef5910551838d858626e2b35 -->

```csharp
public override int Inno.Core.Mathematics.Vector4.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L456).

## `Length`

<a id="api-56255bacc9062950"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Length acfb5550f4ba427b27a020b75e750737b02d4d3253835520cf4768443977ab1b -->

```csharp
public float Inno.Core.Mathematics.Vector4.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L94).

## `LengthSquared`

<a id="api-9406d725eebc7ae4"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.LengthSquared 98fe8e7543908b16af8943e9b53d1c2029d076621faf1538b7bfcfb497bc7552 -->

```csharp
public float Inno.Core.Mathematics.Vector4.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L103).

## `Lerp`

<a id="api-e1e8a72f30fe4c45"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Lerp(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4,System.Single) ca7e7d86bb50665bd0f9bf571ce7d4ecc5c6b6de404966b93d9258e9dbf6aaf8 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.Lerp(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b, float t)
```

Interpolates linearly after clamping the interpolation factor to [0, 1].

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L154).

## `op_Addition`

<a id="api-a7d4d757c56a9932"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Addition(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) 7d390e97c28d2ddf8220c77d30dc8de6379bb6c571e27e076a5b47cf61e4b777 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator +(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L250).

## `op_Division`

<a id="api-6d14458c55f0fbdc"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Division(Inno.Core.Mathematics.Vector4,System.Single) 5e0e3357022cee0684d34ad9b472040844d6d79b14671bcfd36e6e897e7cbeea -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator /(Inno.Core.Mathematics.Vector4 v, float s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L363).

## `op_Equality`

<a id="api-6390781250b72664"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Equality(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) 992aa6ae7b8335baad9085e4306485c0725eaf618bde2770df6a724d493e5c49 -->

```csharp
public static bool Inno.Core.Mathematics.Vector4.operator ==(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L382).

## `op_Implicit`

<a id="api-ccf5a19491eb29b7"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Implicit(Inno.Core.Mathematics.Vector4)~System.Numerics.Vector4 24157a44c971ec47af4668d373f950f217cfc7d7e71935863e224a055835a279 -->

```csharp
public static Inno.Core.Mathematics.Vector4.implicit operator System.Numerics.Vector4(Inno.Core.Mathematics.Vector4 v)
```

Converts the supplied value to `System.Numerics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L418).

## `op_Implicit`

<a id="api-8be0032643af6ec0"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Implicit(System.Numerics.Vector4)~Inno.Core.Mathematics.Vector4 8fe796b87e009ef9a5fd0355f393c913d1e42ae9a401188559ad918ff621cf04 -->

```csharp
public static Inno.Core.Mathematics.Vector4.implicit operator Inno.Core.Mathematics.Vector4(System.Numerics.Vector4 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L428).

## `op_Inequality`

<a id="api-bf5eb1995d524090"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Inequality(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) 61214581d6b0b26cd29094d192461b5382dbd000efbca7be759b12df7544904d -->

```csharp
public static bool Inno.Core.Mathematics.Vector4.operator !=(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L404).

## `op_Multiply`

<a id="api-26bfa4a01ad6e6da"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Multiply(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector4) 7a7ba69df665d505decd6253b2afe4a9231a76485e133774059225af43c2ba64 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator *(Inno.Core.Mathematics.Matrix m, Inno.Core.Mathematics.Vector4 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L338).

## `op_Multiply`

<a id="api-3f457efde4ed0cc4"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Multiply(Inno.Core.Mathematics.Vector4,System.Single) 3961c15c882e9dcbcf9e5785cb0c9229996b4f1ade8f1c50c071f7910911472a -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator *(Inno.Core.Mathematics.Vector4 v, float s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L301).

## `op_Multiply`

<a id="api-4d9554a25ef5a123"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Multiply(System.Single,Inno.Core.Mathematics.Vector4) 4db056a4e1467987eb5e2ffd4aafb53c3610150ce1a6d13766a1f0817862bb25 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator *(float s, Inno.Core.Mathematics.Vector4 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L320).

## `op_Subtraction`

<a id="api-99d84777202aa3be"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_Subtraction(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) fe52f72360260f7a8d0fff91a58bd0092a981a91cc4ece8567911045553b70f7 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator -(Inno.Core.Mathematics.Vector4 a, Inno.Core.Mathematics.Vector4 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L269).

## `op_UnaryNegation`

<a id="api-7bfeab6a23d85359"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.op_UnaryNegation(Inno.Core.Mathematics.Vector4) f98583330f84eee9911959702964eb06d2602ff28860ce5b9d8dce5af8c6689e -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.operator -(Inno.Core.Mathematics.Vector4 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L285).

## `ProjectToVector3`

<a id="api-2c528999e1e2a375"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.ProjectToVector3 9f54cb283b90f3f3f029a48bc7145ab21308584fd29b085b79a8b028c52b72b6 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector4.ProjectToVector3()
```

Projects the supplied value onto the requested dimensional space.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L229).

## `Reflect`

<a id="api-acf6b15b9ac58a63"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Reflect(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector4) 7bd1a007102cd1fe6c0efe871b9987b94254dc91cb6947f88335c4f3b02c5fe4 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.Reflect(Inno.Core.Mathematics.Vector4 vec, Inno.Core.Mathematics.Vector4 normal)
```

Reflects an incident value across the supplied normal.

**Parameter `vec`:** The vec consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L175).

## `ToString`

<a id="api-27afe4e46051b0ce"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.ToString 3cb20e36a48319a6eea965bc437478e85f2aa59ac5399d687370932a631d8025 -->

```csharp
public override string Inno.Core.Mathematics.Vector4.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L463).

## `Transform`

<a id="api-197ce7f2808081a3"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4.Transform(Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Matrix) 4628eea48efa217a3b60ac7bcc474d0c6cfaddd34fc9a6fb01299b039ef00b35 -->

```csharp
public static Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.Transform(Inno.Core.Mathematics.Vector4 v, Inno.Core.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L195).

## `normalized`

<a id="api-8755d0ee1fb5b743"></a>
<!-- api: P:Inno.Core.Mathematics.Vector4.normalized 450a70e5f8767615c3d5a8681b06df15856e56a4b197ae42a0d62468f85bea74 -->

```csharp
public Inno.Core.Mathematics.Vector4 Inno.Core.Mathematics.Vector4.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4.cs#L108).
