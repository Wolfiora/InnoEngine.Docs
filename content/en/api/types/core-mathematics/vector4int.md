---
title: "Vector4Int"
description: "Reference for Vector4Int in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.0d0ff9d3f2617e78
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector4Int`

This reference describes `Vector4Int` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector4Int>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-440d952d9a376afb) | Field |
| [`UNIT_W`](#api-51a61c6a2fed5be1) | Field |
| [`UNIT_X`](#api-ccee4722c25b9876) | Field |
| [`UNIT_Y`](#api-6c6ae6dd5167c383) | Field |
| [`UNIT_Z`](#api-c39f1c9e74f084b4) | Field |
| [`w`](#api-eec9a298e88ef812) | Field |
| [`x`](#api-71dd511033460b69) | Field |
| [`y`](#api-2074287a52bc7ccb) | Field |
| [`z`](#api-fb840c0cbb7229f4) | Field |
| [`ZERO`](#api-c82866e1a10a18d8) | Field |
| [`#ctor`](#api-dc9bff05406b5c38) | Method |
| [`Dot`](#api-df6b0f2e2a15696d) | Method |
| [`Equals`](#api-dd4164bc1bca810b) | Method |
| [`Equals`](#api-825666cc4f7da3b7) | Method |
| [`GetHashCode`](#api-14f38d8b7cc4b0ec) | Method |
| [`Lerp`](#api-1327ac3b1e506dc9) | Method |
| [`op_Addition`](#api-347a77480c86ce63) | Method |
| [`op_Division`](#api-1bf19158c9e11c3b) | Method |
| [`op_Equality`](#api-a0251c784fa461f1) | Method |
| [`op_Explicit`](#api-83e8588aaba88986) | Method |
| [`op_Explicit`](#api-c490bc62de7567c5) | Method |
| [`op_Inequality`](#api-7122cd1a08df520e) | Method |
| [`op_Multiply`](#api-560fe5dde19ac2c6) | Method |
| [`op_Multiply`](#api-b3c0f49a54861046) | Method |
| [`op_Subtraction`](#api-1834ea91522e8876) | Method |
| [`op_UnaryNegation`](#api-7db89454795d839c) | Method |
| [`Reflect`](#api-adf9b75dfa0a9f13) | Method |
| [`ToString`](#api-6dcb747218237979) | Method |
| [`Transform`](#api-c2c2264b29f52c06) | Method |

## Type declaration

<a id="api-0d0ff9d3f2617e78"></a>
<!-- api: T:Inno.Core.Mathematics.Vector4Int 6dcfe7c91c8273912fbf3de2fe4d2ce767e36e191a8f7cb855babce2eeba172b -->

```csharp
public struct Inno.Core.Mathematics.Vector4Int : System.IEquatable<Inno.Core.Mathematics.Vector4Int>
```

Represents a mutable vector4int value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L11).

## `ONE`

<a id="api-440d952d9a376afb"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.ONE fccb770c96c54e611856ca9daa6941b228fa023ef1307674656208ec0864b62a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L65).

## `UNIT_W`

<a id="api-51a61c6a2fed5be1"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.UNIT_W 4e87972babcd03589169e233187cf50da7b15beb623594138fc24d378853716b -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.UNIT_W
```

A unit value aligned with the w axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L81).

## `UNIT_X`

<a id="api-ccee4722c25b9876"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.UNIT_X 8fd5b67a0a93271a0407e3a47fcd7968004c34c4235266c54585c46912f14626 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L69).

## `UNIT_Y`

<a id="api-6c6ae6dd5167c383"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.UNIT_Y 6ce41f83f5c2b4e8976e5473ce4c9eae36cd661d7a4116e84ecb08720d5f4da3 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L73).

## `UNIT_Z`

<a id="api-c39f1c9e74f084b4"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.UNIT_Z 8cf4c8b26293dd0ad8f434d1ce17bb6d056dd3d62835b0a368f232f010e85ec8 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.UNIT_Z
```

A unit value aligned with the z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L77).

## `w`

<a id="api-eec9a298e88ef812"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.w b717ca6a37c67e58c7965cdf38c46c275aae25202214342e0864ed84187bda78 -->

```csharp
public int Inno.Core.Mathematics.Vector4Int.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L28).

## `x`

<a id="api-71dd511033460b69"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.x c6e4c45dc6c71172684f1581d4f579f85efb31ba3bf7ed445ce4e23a17befb61 -->

```csharp
public int Inno.Core.Mathematics.Vector4Int.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L16).

## `y`

<a id="api-2074287a52bc7ccb"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.y de0760e8a25c34bbb4785962afb73ca6499c0d783f64fec9b6cc5ae21e5a8f47 -->

```csharp
public int Inno.Core.Mathematics.Vector4Int.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L20).

## `z`

<a id="api-fb840c0cbb7229f4"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.z 787c1c6aa6a24a90fbaa50c4a7833e8bc0e6494e66751576b31d4f739e3a9a9b -->

```csharp
public int Inno.Core.Mathematics.Vector4Int.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L24).

## `ZERO`

<a id="api-c82866e1a10a18d8"></a>
<!-- api: F:Inno.Core.Mathematics.Vector4Int.ZERO 425fbf9e8f3fa6847c1bcd04eca46db4cd8aba0a9bc584d61e9f35e84722cbd7 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L61).

## `#ctor`

<a id="api-dc9bff05406b5c38"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 9d77beadf89f019c6dc8c96d4c111e8304a5a41ae59f9311be05ec48c5904fb5 -->

```csharp
public Inno.Core.Mathematics.Vector4Int.Vector4Int(int x, int y, int z, int w)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L45).

## `Dot`

<a id="api-df6b0f2e2a15696d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Dot(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) 4194ea3660eac247de81a712ab30f1b271f4cedab3db9e4674a304616a5c09d8 -->

```csharp
public static int Inno.Core.Mathematics.Vector4Int.Dot(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L97).

## `Equals`

<a id="api-dd4164bc1bca810b"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Equals(Inno.Core.Mathematics.Vector4Int) 4ba9836458387a0bf2e97cef49a431c2eb930c09e56bf9aedb09112e411ecd55 -->

```csharp
public bool Inno.Core.Mathematics.Vector4Int.Equals(Inno.Core.Mathematics.Vector4Int other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L372).

## `Equals`

<a id="api-825666cc4f7da3b7"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Equals(System.Object) 255128073d95138aed79d073cfacdf835e229c9346c0440b87baebd577bf4022 -->

```csharp
public override bool Inno.Core.Mathematics.Vector4Int.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L362).

## `GetHashCode`

<a id="api-14f38d8b7cc4b0ec"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.GetHashCode 32d547b361f0392a25178061f0454c75bcbc43f0568983e103f318ee7d14e4b5 -->

```csharp
public override int Inno.Core.Mathematics.Vector4Int.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L379).

## `Lerp`

<a id="api-1327ac3b1e506dc9"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Lerp(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int,System.Single) 141d0a0964940a6c0ce31caeb0341a199b64ee3804fcb2e4b647c058f71ebf90 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.Lerp(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b, float t)
```

Clamps the interpolation factor to [0, 1] and truncates each interpolated component to an integer.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L120).

## `op_Addition`

<a id="api-347a77480c86ce63"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Addition(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) 248cf1e338ba2d0bacf92074d195203481d1dbc55c569b602ccc6d3be3cbaa58 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator +(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L195).

## `op_Division`

<a id="api-1bf19158c9e11c3b"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Division(Inno.Core.Mathematics.Vector4Int,System.Int32) 938a0ca986a79e32a99b62999072f9a9396694b6fc4f914e26c824de8188a908 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator /(Inno.Core.Mathematics.Vector4Int v, int s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L283).

## `op_Equality`

<a id="api-a0251c784fa461f1"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Equality(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) 9b69abbf665925303d4daae70f2142a36bdf7cb36b6ada5971c6cb26f39c37bb -->

```csharp
public static bool Inno.Core.Mathematics.Vector4Int.operator ==(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L302).

## `op_Explicit`

<a id="api-83e8588aaba88986"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Explicit(Inno.Core.Mathematics.Vector4)~Inno.Core.Mathematics.Vector4Int 4076dc471ff9c54a8ed225469831b54c4bbeb7b8272c977219772a478e1b4376 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int.explicit operator Inno.Core.Mathematics.Vector4Int(Inno.Core.Mathematics.Vector4 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector4Int`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L350).

## `op_Explicit`

<a id="api-c490bc62de7567c5"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Explicit(Inno.Core.Mathematics.Vector4Int)~Inno.Core.Mathematics.Vector4 96ddd0e4c7a6a258b091e6f23b6e5cf4a68ad10f221c7de818e28d43f4415af2 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int.explicit operator Inno.Core.Mathematics.Vector4(Inno.Core.Mathematics.Vector4Int v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector4`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L337).

## `op_Inequality`

<a id="api-7122cd1a08df520e"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Inequality(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) 331f289cd074596cf7b698ec243a641dd62449a35536920e2082e37c8740bd18 -->

```csharp
public static bool Inno.Core.Mathematics.Vector4Int.operator !=(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L321).

## `op_Multiply`

<a id="api-560fe5dde19ac2c6"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Multiply(Inno.Core.Mathematics.Vector4Int,System.Int32) f0dfdae90e837054b63322ad2c636c61ee9a0a9fca4cd8a7af327904f47f48f0 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator *(Inno.Core.Mathematics.Vector4Int v, int s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L246).

## `op_Multiply`

<a id="api-b3c0f49a54861046"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Multiply(System.Int32,Inno.Core.Mathematics.Vector4Int) 627927c45ed9404417206df20572fc83f8d4dce8eacc20297544419dae414673 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator *(int s, Inno.Core.Mathematics.Vector4Int v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L265).

## `op_Subtraction`

<a id="api-1834ea91522e8876"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_Subtraction(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) 71a58cb6b2a7b3fe267f49979e707195d6f61d194e480826fcc5061cf4d81289 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator -(Inno.Core.Mathematics.Vector4Int a, Inno.Core.Mathematics.Vector4Int b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L214).

## `op_UnaryNegation`

<a id="api-7db89454795d839c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.op_UnaryNegation(Inno.Core.Mathematics.Vector4Int) 7ad0c00185b56d5b57983bec31056618c11e542a734ca53d32ccd9b28767b6df -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.operator -(Inno.Core.Mathematics.Vector4Int v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L230).

## `Reflect`

<a id="api-adf9b75dfa0a9f13"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Reflect(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Vector4Int) eb3364c42748e49c8331b44c4cc56e4b9c2ba4c144f1f458971fa6f1853a16b9 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.Reflect(Inno.Core.Mathematics.Vector4Int vec, Inno.Core.Mathematics.Vector4Int normal)
```

Reflects an incident value across the supplied normal.

**Parameter `vec`:** The vec consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L148).

## `ToString`

<a id="api-6dcb747218237979"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.ToString b06927184d2f5b5912c3ec32d1c36fe56d37990a25420bac21f6f64a68656bb4 -->

```csharp
public override string Inno.Core.Mathematics.Vector4Int.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L386).

## `Transform`

<a id="api-c2c2264b29f52c06"></a>
<!-- api: M:Inno.Core.Mathematics.Vector4Int.Transform(Inno.Core.Mathematics.Vector4Int,Inno.Core.Mathematics.Matrix) 3eff661d08552da13bea8c447870cc58bdb0b4f92d99a713fccd90e3d3d2e706 -->

```csharp
public static Inno.Core.Mathematics.Vector4Int Inno.Core.Mathematics.Vector4Int.Transform(Inno.Core.Mathematics.Vector4Int v, Inno.Core.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector4Int.cs#L170).
