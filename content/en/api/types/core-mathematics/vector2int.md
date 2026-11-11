---
title: "Vector2Int"
description: "Reference for Vector2Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.4902d5f9885d2517
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector2Int`

This reference describes `Vector2Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector2Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-6d7879f237c49825) | Field |
| [`UNIT_X`](#api-a020dc3071fbe8f6) | Field |
| [`UNIT_Y`](#api-f1e093f62d67115f) | Field |
| [`x`](#api-ba6efd5ee98e1418) | Field |
| [`y`](#api-dccb64eb441b1f42) | Field |
| [`ZERO`](#api-5182c1b53e8e19cf) | Field |
| [`#ctor`](#api-394d6f3be7865a22) | Method |
| [`Equals`](#api-bd68753939d7ff00) | Method |
| [`Equals`](#api-38b74f1d0d75a340) | Method |
| [`GetHashCode`](#api-20e1d945d07f6e77) | Method |
| [`op_Addition`](#api-c9054fd7b79a5e2d) | Method |
| [`op_Division`](#api-5efe77770d5a320f) | Method |
| [`op_Equality`](#api-390806161fbd8c55) | Method |
| [`op_Explicit`](#api-cb84cc0f2879efec) | Method |
| [`op_Explicit`](#api-328e83e5e089403c) | Method |
| [`op_Inequality`](#api-6680a6c6d40f8a97) | Method |
| [`op_Multiply`](#api-69851803104f2528) | Method |
| [`op_Multiply`](#api-f2bccc1cad47a7f9) | Method |
| [`op_Subtraction`](#api-c9fbb9df011167da) | Method |
| [`op_UnaryNegation`](#api-d5b85491ccdae3ff) | Method |
| [`ToString`](#api-7fbecce37aa273ff) | Method |

## Type declaration

<a id="api-4902d5f9885d2517"></a>
<!-- api: T:Inno.Core.Mathematics.Vector2Int e865923ec7ec48c2b5b202fd67d8aadc31ec4982db7744d8eabbf6ee55ac100f -->

```csharp
public struct Inno.Core.Mathematics.Vector2Int : System.IEquatable<Inno.Core.Mathematics.Vector2Int>
```

Represents a mutable vector2int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L11).

## `ONE`

<a id="api-6d7879f237c49825"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.ONE 6b1564f7f65c1f697d62b9a9249ce3d70dd1f4b910cd6b9f9914f50c9ffc3960 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L47).

## `UNIT_X`

<a id="api-a020dc3071fbe8f6"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.UNIT_X 857244bd9b8cabe1a1df23f0271f8350e148a560c04174ba46ad2a727eeb442b -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L51).

## `UNIT_Y`

<a id="api-f1e093f62d67115f"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.UNIT_Y 18ef9b914c118160fd9d769494d395e5b101adaa4f8d985a3ebed4309567cf3a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L55).

## `x`

<a id="api-ba6efd5ee98e1418"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.x c53d79d352b683feda88fc94dcac0b54c2a63ca60df55aed23d7a91b25e79104 -->

```csharp
public int Inno.Core.Mathematics.Vector2Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L16).

## `y`

<a id="api-dccb64eb441b1f42"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.y 43da22c155f322cb4f9cd38d740a62b51f0213cffcb9c87e7d83024dc7f61bea -->

```csharp
public int Inno.Core.Mathematics.Vector2Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L20).

## `ZERO`

<a id="api-5182c1b53e8e19cf"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2Int.ZERO 0eec189fef7d27ece2a6d6fe4aaafb3cf958aea9194f31ccd76b1ab7288abbfa -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L43).

## `#ctor`

<a id="api-394d6f3be7865a22"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.#ctor(System.Int32,System.Int32) e90ff4bdce4119d9f6b64e65072251473546093aa4864961c3eb51ee7b69d129 -->

```csharp
public Inno.Core.Mathematics.Vector2Int.Vector2Int(int x, int y)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L31).

## `Equals`

<a id="api-bd68753939d7ff00"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.Equals(Inno.Core.Mathematics.Vector2Int) 3e0370dca13b8156c8e986bc41fa639046dfa915fcc9fe8ed50c24f93dd622e1 -->

```csharp
public bool Inno.Core.Mathematics.Vector2Int.Equals(Inno.Core.Mathematics.Vector2Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L242).

## `Equals`

<a id="api-38b74f1d0d75a340"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.Equals(System.Object) 163e978a4f30d0f03242dab4c3bfc99cd517894ebc5bd5f790f05a0b653b357f -->

```csharp
public override bool Inno.Core.Mathematics.Vector2Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L231).

## `GetHashCode`

<a id="api-20e1d945d07f6e77"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.GetHashCode e15b2af407f2475f398212403287cfd390660f8e214f0ba2c229b74fc5443612 -->

```csharp
public override int Inno.Core.Mathematics.Vector2Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L250).

## `op_Addition`

<a id="api-c9054fd7b79a5e2d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Addition(Inno.Core.Mathematics.Vector2Int,Inno.Core.Mathematics.Vector2Int) 86362e5d403e8519c7ff0e666b7c6766ba3ddbab20853320e75f00090e6d80eb -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator +(Inno.Core.Mathematics.Vector2Int a, Inno.Core.Mathematics.Vector2Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L71).

## `op_Division`

<a id="api-5efe77770d5a320f"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Division(Inno.Core.Mathematics.Vector2Int,System.Int32) af16e46bb5317a30c588461e1a3a6e07fd6062f0e8907480f6d7d4fc5a2c7003 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator /(Inno.Core.Mathematics.Vector2Int v, int scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L155).

## `op_Equality`

<a id="api-390806161fbd8c55"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Equality(Inno.Core.Mathematics.Vector2Int,Inno.Core.Mathematics.Vector2Int) b90a09f4775da09447bc0c23262bf100160c549a6abc6a857640195310e5f19a -->

```csharp
public static bool Inno.Core.Mathematics.Vector2Int.operator ==(Inno.Core.Mathematics.Vector2Int a, Inno.Core.Mathematics.Vector2Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L173).

## `op_Explicit`

<a id="api-cb84cc0f2879efec"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Explicit(Inno.Core.Mathematics.Vector2)~Inno.Core.Mathematics.Vector2Int b4938f1d242244ca8f586175356209d20659346d33da36161980ce8c406783f4 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int.explicit operator Inno.Core.Mathematics.Vector2Int(Inno.Core.Mathematics.Vector2 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector2Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L219).

## `op_Explicit`

<a id="api-328e83e5e089403c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Explicit(Inno.Core.Mathematics.Vector2Int)~Inno.Core.Mathematics.Vector2 6e2d93d3e9135e18a2cf5c1dd1b0b0e3fa155cb61f5a147304a11c98de323822 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int.explicit operator Inno.Core.Mathematics.Vector2(Inno.Core.Mathematics.Vector2Int v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L207).

## `op_Inequality`

<a id="api-6680a6c6d40f8a97"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Inequality(Inno.Core.Mathematics.Vector2Int,Inno.Core.Mathematics.Vector2Int) c9e2deebcf4d615483fe928d3511456934aaf225dfa3201dd95e477d83532c60 -->

```csharp
public static bool Inno.Core.Mathematics.Vector2Int.operator !=(Inno.Core.Mathematics.Vector2Int a, Inno.Core.Mathematics.Vector2Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L191).

## `op_Multiply`

<a id="api-69851803104f2528"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Multiply(Inno.Core.Mathematics.Vector2Int,System.Int32) cfaa80e4a963a34d4ff6eb3581a9c48b7f1af160010153c922f99578d32f772b -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator *(Inno.Core.Mathematics.Vector2Int v, int scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L119).

## `op_Multiply`

<a id="api-f2bccc1cad47a7f9"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Multiply(System.Int32,Inno.Core.Mathematics.Vector2Int) d304ccb37a1c3b217a5f79c11d611af8a80942630a82a66d74b2d165b1084c66 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator *(int scalar, Inno.Core.Mathematics.Vector2Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L137).

## `op_Subtraction`

<a id="api-c9fbb9df011167da"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_Subtraction(Inno.Core.Mathematics.Vector2Int,Inno.Core.Mathematics.Vector2Int) 9d2fd2294f7074821eb289965e9dac9c88d762e44c473724e64cc7eb843fa886 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator -(Inno.Core.Mathematics.Vector2Int a, Inno.Core.Mathematics.Vector2Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L89).

## `op_UnaryNegation`

<a id="api-d5b85491ccdae3ff"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.op_UnaryNegation(Inno.Core.Mathematics.Vector2Int) 65b14805f90dd755e14a6faeaf097a2e947bb00b7fe3f82609d151fabcbf4458 -->

```csharp
public static Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.Vector2Int.operator -(Inno.Core.Mathematics.Vector2Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L104).

## `ToString`

<a id="api-7fbecce37aa273ff"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2Int.ToString d3520a99b6001a535fa65de27090ea69059fc59338ac7f9bb1f0c06bec0f6fe2 -->

```csharp
public override string Inno.Core.Mathematics.Vector2Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2Int.cs#L258).
