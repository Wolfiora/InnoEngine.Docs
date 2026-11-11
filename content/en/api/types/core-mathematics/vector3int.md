---
title: "Vector3Int"
description: "Reference for Vector3Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.80b282805223ff8f
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector3Int`

This reference describes `Vector3Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector3Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`BACK`](#api-b525b168aa933440) | Field |
| [`DOWN`](#api-542d9674d0708c29) | Field |
| [`FORWARD`](#api-3c38b8200bd9db5a) | Field |
| [`LEFT`](#api-aad457285acee417) | Field |
| [`ONE`](#api-462756d0179c0260) | Field |
| [`RIGHT`](#api-240829f2ea6a6a81) | Field |
| [`UP`](#api-2fdf3d5f1afd02f8) | Field |
| [`x`](#api-a364a204a3ad38bd) | Field |
| [`y`](#api-ef62b5fbb9178a22) | Field |
| [`z`](#api-b39e612f7dddcb99) | Field |
| [`ZERO`](#api-f251ec47b979c6d5) | Field |
| [`#ctor`](#api-18dda876873cc481) | Method |
| [`Equals`](#api-6cd199724dfaa36e) | Method |
| [`Equals`](#api-beb32d7026cde64d) | Method |
| [`GetHashCode`](#api-59570896f194f99a) | Method |
| [`op_Addition`](#api-2539618e4327ae73) | Method |
| [`op_Division`](#api-fc66e987ab766d4d) | Method |
| [`op_Equality`](#api-880a3684c729d125) | Method |
| [`op_Explicit`](#api-443a90d24a906fa0) | Method |
| [`op_Explicit`](#api-0d665a801b7b9cc4) | Method |
| [`op_Inequality`](#api-ca80815565943cd1) | Method |
| [`op_Multiply`](#api-844188bbab4f9123) | Method |
| [`op_Multiply`](#api-d54521582464caf8) | Method |
| [`op_Subtraction`](#api-d3aaddb7e1af4ffa) | Method |
| [`op_UnaryNegation`](#api-e4372650706d0a66) | Method |
| [`ToString`](#api-663f2fdbb33451a7) | Method |

## Type declaration

<a id="api-80b282805223ff8f"></a>
<!-- api: T:Inno.Core.Mathematics.Vector3Int e129e27077ad95a1bb76d0422a9b42844f860345ccf9e9777be8f19a93470f6a -->

```csharp
public struct Inno.Core.Mathematics.Vector3Int : System.IEquatable<Inno.Core.Mathematics.Vector3Int>
```

Represents a mutable vector3int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L11).

## `BACK`

<a id="api-b525b168aa933440"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.BACK 63b046244412b8a53640211472f6ec8f0065fdaf5070cc9fcf3cd19ead10c3a8 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.BACK
```

The back value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L79).

## `DOWN`

<a id="api-542d9674d0708c29"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.DOWN ca5be50dc7bb82ce11b91f798c8826a42f233c057d1c73102c143b269e0ed584 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.DOWN
```

The down value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L63).

## `FORWARD`

<a id="api-3c38b8200bd9db5a"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.FORWARD 967eab89bdc7b91f15ee5e32e83b039b37a2c1f9e8ac0d617b6ab8797054b91a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.FORWARD
```

The forward value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L75).

## `LEFT`

<a id="api-aad457285acee417"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.LEFT d58bbd40ebf2803e68eb1ec47274a135ad6a635652f78c768bd976b50009e46a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.LEFT
```

The left value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L67).

## `ONE`

<a id="api-462756d0179c0260"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.ONE cc01067d6f1a3ed2809495beec926a28ad29e37cf65befec41edeba581d3c38a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L55).

## `RIGHT`

<a id="api-240829f2ea6a6a81"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.RIGHT 83cff020147604a21988ce7ad751bdc1157365444cc07a25f6c0cab689c97f4e -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.RIGHT
```

The right value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L71).

## `UP`

<a id="api-2fdf3d5f1afd02f8"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.UP 15ed8a094a65e1f5ded27dec0d436f5783bfbd5ae23bb9eca35fcf9c0e75f9ce -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.UP
```

The up value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L59).

## `x`

<a id="api-a364a204a3ad38bd"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.x eb313344da6efa11da440521e38908f3d59420fb3f883fb6073e714fd75d2404 -->

```csharp
public int Inno.Core.Mathematics.Vector3Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L16).

## `y`

<a id="api-ef62b5fbb9178a22"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.y afd3df1a680f84e2b028d9e3ac34b9df07bcb9d5cc0afc65bf767772606b7ead -->

```csharp
public int Inno.Core.Mathematics.Vector3Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L20).

## `z`

<a id="api-b39e612f7dddcb99"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.z b91a771bd27343fcb9e8db82076c341d5140bf89b920b03e2bb1b8a8460b5d5a -->

```csharp
public int Inno.Core.Mathematics.Vector3Int.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L24).

## `ZERO`

<a id="api-f251ec47b979c6d5"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3Int.ZERO 8d8d60aa19dd09f67fdc30f54e3c5b36dc02f9a303a070605c563663b3979f51 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L51).

## `#ctor`

<a id="api-18dda876873cc481"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.#ctor(System.Int32,System.Int32,System.Int32) 60bab5bcc197d9da3a13cc701f269f8d66342e1751d0175271ad35b19373407e -->

```csharp
public Inno.Core.Mathematics.Vector3Int.Vector3Int(int x, int y, int z)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L38).

## `Equals`

<a id="api-6cd199724dfaa36e"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.Equals(Inno.Core.Mathematics.Vector3Int) a69e2b60845868e4853738d6f1a18f6a4319a146a314e95e3b8a0b954972bde4 -->

```csharp
public bool Inno.Core.Mathematics.Vector3Int.Equals(Inno.Core.Mathematics.Vector3Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L263).

## `Equals`

<a id="api-beb32d7026cde64d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.Equals(System.Object) 0327af9da860d596fe51ac29d07762c5dc3345bb13a727eb3a0d847fb2c86f1c -->

```csharp
public override bool Inno.Core.Mathematics.Vector3Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L252).

## `GetHashCode`

<a id="api-59570896f194f99a"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.GetHashCode bdfa870090d612ea629dfeb33cf3b6e1bab91330c622beece2ad11784b602d9c -->

```csharp
public override int Inno.Core.Mathematics.Vector3Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L271).

## `op_Addition`

<a id="api-2539618e4327ae73"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Addition(Inno.Core.Mathematics.Vector3Int,Inno.Core.Mathematics.Vector3Int) 1893af23a5afdeb3a69db0d2d69a0bec28131f0f3f8a2cee196def6a93a460a7 -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator +(Inno.Core.Mathematics.Vector3Int a, Inno.Core.Mathematics.Vector3Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L94).

## `op_Division`

<a id="api-fc66e987ab766d4d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Division(Inno.Core.Mathematics.Vector3Int,System.Int32) 3e0bfe40c9365b283a0ae6be777f5c255187152d64004fbdaa57eb32f60b8964 -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator /(Inno.Core.Mathematics.Vector3Int v, int scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L178).

## `op_Equality`

<a id="api-880a3684c729d125"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Equality(Inno.Core.Mathematics.Vector3Int,Inno.Core.Mathematics.Vector3Int) 4c86c7ab8b5740e03145d2cce723b1a20811b3691f4b3db510f0a22dd59aeb8d -->

```csharp
public static bool Inno.Core.Mathematics.Vector3Int.operator ==(Inno.Core.Mathematics.Vector3Int a, Inno.Core.Mathematics.Vector3Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L196).

## `op_Explicit`

<a id="api-443a90d24a906fa0"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Explicit(Inno.Core.Mathematics.Vector3)~Inno.Core.Mathematics.Vector3Int afe34037644558289ffa9304eb19dd1cc79715db0135c0f0d686606f01caa7ee -->

```csharp
public static Inno.Core.Mathematics.Vector3Int.explicit operator Inno.Core.Mathematics.Vector3Int(Inno.Core.Mathematics.Vector3 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector3Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L241).

## `op_Explicit`

<a id="api-0d665a801b7b9cc4"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Explicit(Inno.Core.Mathematics.Vector3Int)~Inno.Core.Mathematics.Vector3 d0a9786e00be1c43dbbc7860df55de339656d9b8c5ab2977b8f0af7b940f0bdb -->

```csharp
public static Inno.Core.Mathematics.Vector3Int.explicit operator Inno.Core.Mathematics.Vector3(Inno.Core.Mathematics.Vector3Int v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L229).

## `op_Inequality`

<a id="api-ca80815565943cd1"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Inequality(Inno.Core.Mathematics.Vector3Int,Inno.Core.Mathematics.Vector3Int) 3e87ef178a565dc22359a3e8838506288439a568e6ab5faccc9f88f28d13c8de -->

```csharp
public static bool Inno.Core.Mathematics.Vector3Int.operator !=(Inno.Core.Mathematics.Vector3Int a, Inno.Core.Mathematics.Vector3Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L214).

## `op_Multiply`

<a id="api-844188bbab4f9123"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Multiply(Inno.Core.Mathematics.Vector3Int,System.Int32) dee0d46276e7a2a0182c96c5297ac17e20ee9d42e20685855342520c4d12cb8d -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator *(Inno.Core.Mathematics.Vector3Int v, int scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L142).

## `op_Multiply`

<a id="api-d54521582464caf8"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Multiply(System.Int32,Inno.Core.Mathematics.Vector3Int) c77d55c2bad7b7d62500ba0cc58c9710299c1e3810546ab559045c8d09f8bd18 -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator *(int scalar, Inno.Core.Mathematics.Vector3Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L160).

## `op_Subtraction`

<a id="api-d3aaddb7e1af4ffa"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_Subtraction(Inno.Core.Mathematics.Vector3Int,Inno.Core.Mathematics.Vector3Int) e1db08241e148355745ba7a66ed58cdfd2253cc9a18572a22f22a2c503cc6a0b -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator -(Inno.Core.Mathematics.Vector3Int a, Inno.Core.Mathematics.Vector3Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L112).

## `op_UnaryNegation`

<a id="api-e4372650706d0a66"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.op_UnaryNegation(Inno.Core.Mathematics.Vector3Int) a938102ba941240d377e1160716616e691eaad6ca8d23e230929f5d2f67b9453 -->

```csharp
public static Inno.Core.Mathematics.Vector3Int Inno.Core.Mathematics.Vector3Int.operator -(Inno.Core.Mathematics.Vector3Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L127).

## `ToString`

<a id="api-663f2fdbb33451a7"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3Int.ToString 0c3565cfde0696be78e07a8b82dad8eec2781f4db9d36ede156564a34d87526a -->

```csharp
public override string Inno.Core.Mathematics.Vector3Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3Int.cs#L279).
