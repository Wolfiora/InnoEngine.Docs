---
title: "Vector2"
description: "Reference for Vector2 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.4260e9466cd12616
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector2`

This reference describes `Vector2` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector2>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-36155fe2612b02f0) | Field |
| [`UNIT_X`](#api-31bf283f0947ceef) | Field |
| [`UNIT_Y`](#api-1e6b5179921906e0) | Field |
| [`x`](#api-f246bf995a21c55b) | Field |
| [`y`](#api-8e616a9a20626bc3) | Field |
| [`ZERO`](#api-9ee013301e44c626) | Field |
| [`#ctor`](#api-5e6f66273786d5e6) | Method |
| [`Angle`](#api-a4732400bcc38608) | Method |
| [`Dot`](#api-fdd94d4ee05de0a1) | Method |
| [`Equals`](#api-eb76c44cc536ee7f) | Method |
| [`Equals`](#api-0e6a24814e4371e6) | Method |
| [`GetHashCode`](#api-6ac2e21aa1b9805c) | Method |
| [`Length`](#api-2ce41f7e7735c4fe) | Method |
| [`LengthSquared`](#api-5503be3e8ae6ae07) | Method |
| [`Lerp`](#api-e3928b2f6bdd67a9) | Method |
| [`Max`](#api-ed5e374e6368774c) | Method |
| [`Min`](#api-1d8cd8324a649031) | Method |
| [`NormalizeSafe`](#api-65d9d0f5544b94a2) | Method |
| [`op_Addition`](#api-9db0a6cc428cd656) | Method |
| [`op_Division`](#api-cbf5ce7c5f43d234) | Method |
| [`op_Equality`](#api-690f39e2f8b591f2) | Method |
| [`op_Implicit`](#api-6157bc661d584833) | Method |
| [`op_Implicit`](#api-b3b31c8610358c6f) | Method |
| [`op_Inequality`](#api-98e900163902075b) | Method |
| [`op_Multiply`](#api-1c41dfe08b30c6d2) | Method |
| [`op_Multiply`](#api-9644e0954eccacee) | Method |
| [`op_Subtraction`](#api-65fd5a02697796c5) | Method |
| [`op_UnaryNegation`](#api-a2c72faceb29a6db) | Method |
| [`Project`](#api-6ee1ffe97a34d7d3) | Method |
| [`Reflect`](#api-bdefa3732139f046) | Method |
| [`SignedAngle`](#api-361096fe474aaae9) | Method |
| [`ToString`](#api-31ff1f2adfc0c69d) | Method |
| [`Transform`](#api-ed27be052c58db9c) | Method |
| [`Transform`](#api-723a4a26e1d2e8ec) | Method |
| [`normalized`](#api-fd057166f797da94) | Property |

## Type declaration

<a id="api-4260e9466cd12616"></a>
<!-- api: T:Inno.Core.Mathematics.Vector2 fd5097e178dc4ee69614b7a78a9d216f2cebc19cde11897a4c29ffa3c68ae066 -->

```csharp
public struct Inno.Core.Mathematics.Vector2 : System.IEquatable<Inno.Core.Mathematics.Vector2>
```

Represents a mutable vector2 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L11).

## `ONE`

<a id="api-36155fe2612b02f0"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.ONE c22a4cf679fe13161b4062e293acc4d9326c224b6304e30338ea9edd9e833d4d -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L46).

## `UNIT_X`

<a id="api-31bf283f0947ceef"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.UNIT_X cba1aef92768b73995bb2b12c6fa2ee3b4724c49a6ded71251ebd06fdcbb58ae -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L50).

## `UNIT_Y`

<a id="api-1e6b5179921906e0"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.UNIT_Y d917424fe1ef481781b66fb4976b6c7018773e0bb95254edcaddedbabab4474a -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L54).

## `x`

<a id="api-f246bf995a21c55b"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.x 876a639d3dd832ac0ce3ff743ff7ce2d71a9c9439161f7d7b9cc58c6b80e1ecd -->

```csharp
public float Inno.Core.Mathematics.Vector2.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L16).

## `y`

<a id="api-8e616a9a20626bc3"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.y 056b3bf50eebf23a16da441dda2d55fe9536f974a4359d7ae37138012f721ff2 -->

```csharp
public float Inno.Core.Mathematics.Vector2.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L20).

## `ZERO`

<a id="api-9ee013301e44c626"></a>
<!-- api: F:Inno.Core.Mathematics.Vector2.ZERO 74f52bd04e3dfb07d5deb1d16aedf34717261189c0d26cdb7bc51e6b4a2d48e3 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L42).

## `#ctor`

<a id="api-5e6f66273786d5e6"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.#ctor(System.Single,System.Single) 9be1282c283da3dff7fecc33c2b2ac75e420d8050bd35359ad2b7f13410f1c0b -->

```csharp
public Inno.Core.Mathematics.Vector2.Vector2(float x, float y)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L31).

## `Angle`

<a id="api-a4732400bcc38608"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Angle(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) 50719ee04a955ab777073023c1df77a871f576d3cf0caa073240ca53d94cd81c -->

```csharp
public static float Inno.Core.Mathematics.Vector2.Angle(Inno.Core.Mathematics.Vector2 from, Inno.Core.Mathematics.Vector2 to)
```

Calculates the unsigned angle in radians between two values.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L138).

## `Dot`

<a id="api-fdd94d4ee05de0a1"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Dot(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) d1bcf46ad8c93e07c62693030e0f555999ce440b245f5af833986a097809571d -->

```csharp
public static float Inno.Core.Mathematics.Vector2.Dot(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L120).

## `Equals`

<a id="api-eb76c44cc536ee7f"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Equals(Inno.Core.Mathematics.Vector2) ff6adffba20e6c558e3b09fd2505e1a0a0824ade7976c6da68fa8ebf4ef7bea5 -->

```csharp
public bool Inno.Core.Mathematics.Vector2.Equals(Inno.Core.Mathematics.Vector2 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L501).

## `Equals`

<a id="api-0e6a24814e4371e6"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Equals(System.Object) 461363e5c756e06395f28a9b9814b0c0bd6c4f5c49b5cafade4983f5457b2686 -->

```csharp
public override bool Inno.Core.Mathematics.Vector2.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L491).

## `GetHashCode`

<a id="api-6ac2e21aa1b9805c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.GetHashCode 387ab05e4428551deb888fe0d9f0c4c3abe19981b8f84c7b1341c4137cc50577 -->

```csharp
public override int Inno.Core.Mathematics.Vector2.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L508).

## `Length`

<a id="api-2ce41f7e7735c4fe"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Length fcb20b031e47e1fa5817ca748458deba5f8c6320a91f9d1941f306bed532b3a8 -->

```csharp
public float Inno.Core.Mathematics.Vector2.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L63).

## `LengthSquared`

<a id="api-5503be3e8ae6ae07"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.LengthSquared 080d4c298b79c759ce9376de5c488df95bac3524aae9529c0417679e61341a49 -->

```csharp
public float Inno.Core.Mathematics.Vector2.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L72).

## `Lerp`

<a id="api-e3928b2f6bdd67a9"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Lerp(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2,System.Single) 4df081ac86113e014ca1bb1f7b1301617ca7b4ee445bef9e6ae28ff961179555 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Lerp(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b, float t)
```

Interpolates linearly between two values without clamping the interpolation factor.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L217).

## `Max`

<a id="api-ed5e374e6368774c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Max(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) 10de050ced1e107cf60203ceb7a410d57cbba3016fc63ff2ae2df9750d5e5da5 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Max(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Selects the maximum value independently for each component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L254).

## `Min`

<a id="api-1d8cd8324a649031"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Min(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) fa774d098d33d54bcfe2d3d6c38180c43141316bb1402c44f9e13c43ea7c86c3 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Min(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Selects the minimum value independently for each component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L236).

## `NormalizeSafe`

<a id="api-65d9d0f5544b94a2"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.NormalizeSafe(Inno.Core.Mathematics.Vector2,System.Single) 459d554c47beff454987b8925077dd19a529aeb1e154a3ae2bf6180ab8e85ac5 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.NormalizeSafe(Inno.Core.Mathematics.Vector2 value, float epsilon = 1E-06)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L99).

## `op_Addition`

<a id="api-9db0a6cc428cd656"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Addition(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) febec32166edd7c7c5c9e1079ce350fc8aab46ab215c1ab574cd19c150c4dfbf -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator +(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L342).

## `op_Division`

<a id="api-cbf5ce7c5f43d234"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Division(Inno.Core.Mathematics.Vector2,System.Single) 9a93a5e69095b488da6d43774d1e3448a6e994c482404696bed8de24e73428fa -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator /(Inno.Core.Mathematics.Vector2 v, float scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L421).

## `op_Equality`

<a id="api-690f39e2f8b591f2"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Equality(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) 604e434cdffff9e4d275be451fb460abced0e4b83495902a5a934fec0c30dac5 -->

```csharp
public static bool Inno.Core.Mathematics.Vector2.operator ==(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L439).

## `op_Implicit`

<a id="api-6157bc661d584833"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Implicit(Inno.Core.Mathematics.Vector2)~System.Numerics.Vector2 0be030e272177ce80d223b19bd0cbcfed33411a51c607fc3dcb2b4a7151c08a8 -->

```csharp
public static Inno.Core.Mathematics.Vector2.implicit operator System.Numerics.Vector2(Inno.Core.Mathematics.Vector2 v)
```

Converts the supplied value to `System.Numerics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L470).

## `op_Implicit`

<a id="api-b3b31c8610358c6f"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Implicit(System.Numerics.Vector2)~Inno.Core.Mathematics.Vector2 3885421adbdb44d87129c56dbf0b0f91a7eae78aba31f0e54186f55b70434fc6 -->

```csharp
public static Inno.Core.Mathematics.Vector2.implicit operator Inno.Core.Mathematics.Vector2(System.Numerics.Vector2 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L480).

## `op_Inequality`

<a id="api-98e900163902075b"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Inequality(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) ef4a1dc74397a355b98dd2577f1b6d9034cfe538ec61d0be0faffd4e9574d417 -->

```csharp
public static bool Inno.Core.Mathematics.Vector2.operator !=(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L456).

## `op_Multiply`

<a id="api-1c41dfe08b30c6d2"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Multiply(Inno.Core.Mathematics.Vector2,System.Single) ce74b782de25ff6692614635c8a611b16177be72f2f3525acc7db4775b8be3f1 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator *(Inno.Core.Mathematics.Vector2 v, float scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L387).

## `op_Multiply`

<a id="api-9644e0954eccacee"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Multiply(System.Single,Inno.Core.Mathematics.Vector2) c8ee230dcb08d5962e00aed2e10b1ed3456a9fd07926c38d417aa86e8f8007aa -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator *(float scalar, Inno.Core.Mathematics.Vector2 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L404).

## `op_Subtraction`

<a id="api-65fd5a02697796c5"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_Subtraction(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) c8bdf49368b17a124f59d32dc92421e653487138dfd3ed7fe1c8bf5c961f9288 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator -(Inno.Core.Mathematics.Vector2 a, Inno.Core.Mathematics.Vector2 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L359).

## `op_UnaryNegation`

<a id="api-a2c72faceb29a6db"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.op_UnaryNegation(Inno.Core.Mathematics.Vector2) 3d1db5c525b5f72ccc690f4be3e8408757ca2a8130410dac0aefa42a4a997689 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.operator -(Inno.Core.Mathematics.Vector2 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L373).

## `Project`

<a id="api-6ee1ffe97a34d7d3"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Project(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) 43d2163de112a1c7b843f740753cd68f56efdad655b6df447ad15dde17f0ab58 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Project(Inno.Core.Mathematics.Vector2 vector, Inno.Core.Mathematics.Vector2 onto)
```

Projects the supplied value onto the requested dimensional space.

**Parameter `vector`:** The concrete value read or transformed by this operation.

**Parameter `onto`:** The onto consumed by project; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L188).

## `Reflect`

<a id="api-bdefa3732139f046"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Reflect(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) cc270958b424eed282e74934dadb3116413972dd3f3d1b44c4e72b6119e999b1 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Reflect(Inno.Core.Mathematics.Vector2 v, Inno.Core.Mathematics.Vector2 n)
```

Reflects an incident value across the supplied normal.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `n`:** The surface normal used by the operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L272).

## `SignedAngle`

<a id="api-361096fe474aaae9"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.SignedAngle(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) e7dcf2a92bc7a56985144f77ada8eb282e699a0f603ae9efdc84cd3841cd613e -->

```csharp
public static float Inno.Core.Mathematics.Vector2.SignedAngle(Inno.Core.Mathematics.Vector2 from, Inno.Core.Mathematics.Vector2 to)
```

Calculates the signed angle in radians from one value to another.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L166).

## `ToString`

<a id="api-31ff1f2adfc0c69d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.ToString efbcee5cf4f6aeb8b2fa6378fbd51be784f5d0574c954afd06c287cf9e9af114 -->

```csharp
public override string Inno.Core.Mathematics.Vector2.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L515).

## `Transform`

<a id="api-ed27be052c58db9c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Transform(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Matrix) 96b932292a88a6221c69d7cfb376829d2d8a1f33a0ad4dffa4d32ee09a2e9518 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Transform(Inno.Core.Mathematics.Vector2 v, Inno.Core.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L290).

## `Transform`

<a id="api-723a4a26e1d2e8ec"></a>
<!-- api: M:Inno.Core.Mathematics.Vector2.Transform(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Quaternion) 2357bb7b077db1b61ec296fd236fd841f75dc709a7a3d576c8ea099bd8c02aa3 -->

```csharp
public static Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.Transform(Inno.Core.Mathematics.Vector2 value, Inno.Core.Mathematics.Quaternion rotation)
```

Transforms the supplied value by the requested transformation.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `rotation`:** The rotation applied to the supplied value.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L312).

## `normalized`

<a id="api-fd057166f797da94"></a>
<!-- api: P:Inno.Core.Mathematics.Vector2.normalized 3a0efbbda4a8763cf90c7f0631ed96c6ab3c3871d05c17ba1a82c74b0e2e4678 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Vector2.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L77).
