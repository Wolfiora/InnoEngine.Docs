---
title: "Vector2"
description: "Reference for Vector2 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.2b5e1e6ea1be1bde
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Vector2`

This reference describes `Vector2` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Vector2>`.

## Members

| Member | Kind |
| --- | --- |
| [`ONE`](#api-0770c5d5f58ca6d4) | Field |
| [`UNIT_X`](#api-b8b7c570e7dbbf0c) | Field |
| [`UNIT_Y`](#api-11e20eabba17c70f) | Field |
| [`x`](#api-a962c771a1f891be) | Field |
| [`y`](#api-37c2ed0ae6cedfe7) | Field |
| [`ZERO`](#api-bfd6c4730cf1447f) | Field |
| [`#ctor`](#api-3e7accf48232beba) | Method |
| [`Angle`](#api-648e4cc74a129230) | Method |
| [`Dot`](#api-81d8a8b9141c76c3) | Method |
| [`Equals`](#api-6922eb602d5cdb36) | Method |
| [`Equals`](#api-22c0d7be1976d4c2) | Method |
| [`GetHashCode`](#api-f0a6ea6b14f46c0f) | Method |
| [`Length`](#api-5184ed73a6f15aff) | Method |
| [`LengthSquared`](#api-4232da2e20baa553) | Method |
| [`Lerp`](#api-41d0c76bc8b5a321) | Method |
| [`Max`](#api-256cd48e24d8896e) | Method |
| [`Min`](#api-3a45c888d6c14601) | Method |
| [`NormalizeSafe`](#api-0a9c7ebf0e352a6c) | Method |
| [`op_Addition`](#api-3a28122202536adf) | Method |
| [`op_Division`](#api-dbaa42516a1f1450) | Method |
| [`op_Equality`](#api-738b205b81217410) | Method |
| [`op_Implicit`](#api-5cdeeff07a57b8d1) | Method |
| [`op_Implicit`](#api-ec4531d2786d0c9f) | Method |
| [`op_Inequality`](#api-1833f028b01aa535) | Method |
| [`op_Multiply`](#api-81fd45a54308b429) | Method |
| [`op_Multiply`](#api-3034e4951d1e483c) | Method |
| [`op_Subtraction`](#api-54f6c891a82bc8c1) | Method |
| [`op_UnaryNegation`](#api-ddf722a4ad5f4d00) | Method |
| [`Project`](#api-7ad825c57da0151a) | Method |
| [`Reflect`](#api-c6afe1570ecdd7f7) | Method |
| [`SignedAngle`](#api-23bc4a2bafbd9922) | Method |
| [`ToString`](#api-f69ac5bd70e20110) | Method |
| [`Transform`](#api-87ef7a19e0c69a85) | Method |
| [`Transform`](#api-a1b61f93a1becd05) | Method |
| [`normalized`](#api-4cc6a12c2961ba40) | Property |

## Type declaration

<a id="api-2b5e1e6ea1be1bde"></a>
<!-- api: T:InnoEngine.Mathematics.Vector2 ea2a0b8582d3066a469502d79ce98ce0d64c8239e4e7f810d667cdbe3c84a15a -->

```csharp
public struct InnoEngine.Mathematics.Vector2 : System.IEquatable<InnoEngine.Mathematics.Vector2>
```

Represents a mutable vector2 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L11).

## `ONE`

<a id="api-0770c5d5f58ca6d4"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.ONE 450bd9dfdf20ccf257a275f28090db6d27e4ee5ab65d6750ac95c7d90f806d65 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L46).

## `UNIT_X`

<a id="api-b8b7c570e7dbbf0c"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.UNIT_X a3cad027aa56d4e5eac68587008c704e714b460de059c3243219ee1220940e9f -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.UNIT_X
```

A unit value aligned with the x axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L50).

## `UNIT_Y`

<a id="api-11e20eabba17c70f"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.UNIT_Y 84c1b8dae14e958bca32f2cbd4ae6588691cc6896fabc076dc419a3bd8fac8fa -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.UNIT_Y
```

A unit value aligned with the y axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L54).

## `x`

<a id="api-a962c771a1f891be"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.x e0806959bd5acdabd787fe89590231ae0f74a5bb49f0aeb35b9aa8ede25d510b -->

```csharp
public float InnoEngine.Mathematics.Vector2.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L16).

## `y`

<a id="api-37c2ed0ae6cedfe7"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.y b93e86cd5d117596e0d0b471816fe4cd40df39d2629c86197bf2d139217dcd18 -->

```csharp
public float InnoEngine.Mathematics.Vector2.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L20).

## `ZERO`

<a id="api-bfd6c4730cf1447f"></a>
<!-- api: F:InnoEngine.Mathematics.Vector2.ZERO 963323d96e1e1849089eef67944c87757791e87bb4a06dd824ae112c7a3b8615 -->

```csharp
public static readonly InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L42).

## `#ctor`

<a id="api-3e7accf48232beba"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.#ctor(System.Single,System.Single) f3789b0d51fa755bd642728551dab082169ab4ffbd31ad1fa2f80e16492fd163 -->

```csharp
public InnoEngine.Mathematics.Vector2.Vector2(float x, float y)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L31).

## `Angle`

<a id="api-648e4cc74a129230"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Angle(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) e17743e57ecbb421eb3fc9539479a913c4a64b00e42c98c0a384fdd280945008 -->

```csharp
public static float InnoEngine.Mathematics.Vector2.Angle(InnoEngine.Mathematics.Vector2 from, InnoEngine.Mathematics.Vector2 to)
```

Calculates the unsigned angle in radians between two values.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L138).

## `Dot`

<a id="api-81d8a8b9141c76c3"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Dot(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 68efdf609abdf74c384a90b555ae6e1fef2cc6cb3dc9cbfbbc856784b8b96607 -->

```csharp
public static float InnoEngine.Mathematics.Vector2.Dot(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L120).

## `Equals`

<a id="api-6922eb602d5cdb36"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Equals(InnoEngine.Mathematics.Vector2) d84bc0989b0a3c172ef535d89e7b4682b1e79ba29ce19253a3e3f661fbb2184c -->

```csharp
public bool InnoEngine.Mathematics.Vector2.Equals(InnoEngine.Mathematics.Vector2 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L501).

## `Equals`

<a id="api-22c0d7be1976d4c2"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Equals(System.Object) dac58adcf28e61df9abc024df6516470ce4493a48171b50c87954ba26ef3bb0e -->

```csharp
public override bool InnoEngine.Mathematics.Vector2.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L491).

## `GetHashCode`

<a id="api-f0a6ea6b14f46c0f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.GetHashCode c9549cbde3cd9c5d1419f3514b16e489decd1a702c95f3882134d150eab70a1b -->

```csharp
public override int InnoEngine.Mathematics.Vector2.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L508).

## `Length`

<a id="api-5184ed73a6f15aff"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Length 8e271e437c75bb70117230265af127d9d8f24f32ebe590f94e87a430099fbf50 -->

```csharp
public float InnoEngine.Mathematics.Vector2.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L63).

## `LengthSquared`

<a id="api-4232da2e20baa553"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.LengthSquared c5ea90817f7cdd326dc9d2bff4c62c18e053a7950533c21c264afe0dee4fa2f6 -->

```csharp
public float InnoEngine.Mathematics.Vector2.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L72).

## `Lerp`

<a id="api-41d0c76bc8b5a321"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Lerp(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2,System.Single) 31dfe1d094c7a004b118ef507327d646bb830d72905a594a3c14408da30d3726 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Lerp(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b, float t)
```

Interpolates linearly between two values without clamping the interpolation factor.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L217).

## `Max`

<a id="api-256cd48e24d8896e"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Max(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 9a4b57ca0c743d425ddced0e620cf34243f0918e738cf8566755661c2dc59098 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Max(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Selects the maximum value independently for each component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L254).

## `Min`

<a id="api-3a45c888d6c14601"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Min(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) c36803aa3754e515cc971737a5c395b5587d317e4644e22edce7ccfc909e91b4 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Min(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Selects the minimum value independently for each component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L236).

## `NormalizeSafe`

<a id="api-0a9c7ebf0e352a6c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.NormalizeSafe(InnoEngine.Mathematics.Vector2,System.Single) 208604273aa1f4a5a6d8c3dccb8defc5761b8b7593ccfeccc9c61f5b7a4067c5 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.NormalizeSafe(InnoEngine.Mathematics.Vector2 value, float epsilon = 1E-06)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L99).

## `op_Addition`

<a id="api-3a28122202536adf"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Addition(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) ce1a77605ac4635910001719cbaa65e8f11e844f94706d534d248797e07f6336 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator +(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L342).

## `op_Division`

<a id="api-dbaa42516a1f1450"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Division(InnoEngine.Mathematics.Vector2,System.Single) fa470d55bb564637c493ff735715d73a3d2b75374d7516058416758076b0f07c -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator /(InnoEngine.Mathematics.Vector2 v, float scalar)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L421).

## `op_Equality`

<a id="api-738b205b81217410"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Equality(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) aa046ef88e9290eff60ba469605ca9f6387dbad430544e60c4fb8b4fe11697c9 -->

```csharp
public static bool InnoEngine.Mathematics.Vector2.operator ==(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L439).

## `op_Implicit`

<a id="api-5cdeeff07a57b8d1"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Implicit(InnoEngine.Mathematics.Vector2)~System.Numerics.Vector2 d7d37a54670af091e82f152bdbd474da855d4ba2fd074fd4b6d2c9a10c18b9ae -->

```csharp
public static InnoEngine.Mathematics.Vector2.implicit operator System.Numerics.Vector2(InnoEngine.Mathematics.Vector2 v)
```

Converts the supplied value to `System.Numerics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L470).

## `op_Implicit`

<a id="api-ec4531d2786d0c9f"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Implicit(System.Numerics.Vector2)~InnoEngine.Mathematics.Vector2 755a72ffed00f1594da6881934e7206909e73fef34aae3d213ec4e6acc90cf57 -->

```csharp
public static InnoEngine.Mathematics.Vector2.implicit operator InnoEngine.Mathematics.Vector2(System.Numerics.Vector2 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector2`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L480).

## `op_Inequality`

<a id="api-1833f028b01aa535"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Inequality(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 1b6049028a5b98ac802781428c98245674cfcd3d29c896e3cb83f76f974a5d07 -->

```csharp
public static bool InnoEngine.Mathematics.Vector2.operator !=(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L456).

## `op_Multiply`

<a id="api-81fd45a54308b429"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Multiply(InnoEngine.Mathematics.Vector2,System.Single) 1f9f62c2ec2317b4a17630a6fa35dca85d7419168fcba8710e5c2a0597a0c285 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator *(InnoEngine.Mathematics.Vector2 v, float scalar)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `scalar`:** The scalar applied to every component.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L387).

## `op_Multiply`

<a id="api-3034e4951d1e483c"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Multiply(System.Single,InnoEngine.Mathematics.Vector2) 93e7bc795eae517d21789334b9d6cb0f9d6ee6fd82e803699822170d01f1fa81 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator *(float scalar, InnoEngine.Mathematics.Vector2 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `scalar`:** The scalar applied to every component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L404).

## `op_Subtraction`

<a id="api-54f6c891a82bc8c1"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_Subtraction(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 773387c89bde2434e66f0e6344e8206a5c30a5bd675d67ff5da3ab10f6f6ebef -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator -(InnoEngine.Mathematics.Vector2 a, InnoEngine.Mathematics.Vector2 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L359).

## `op_UnaryNegation`

<a id="api-ddf722a4ad5f4d00"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.op_UnaryNegation(InnoEngine.Mathematics.Vector2) c29a0e36f138bfba9c2daa2dc10731c4eb315aad8416c4f4aa5f929eadca6299 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.operator -(InnoEngine.Mathematics.Vector2 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L373).

## `Project`

<a id="api-7ad825c57da0151a"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Project(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 8cdbfb128fd262b98e26f3331a4a5d8497e0bb1aef67e8a05ec7b5f98ad40a9a -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Project(InnoEngine.Mathematics.Vector2 vector, InnoEngine.Mathematics.Vector2 onto)
```

Projects the supplied value onto the requested dimensional space.

**Parameter `vector`:** The concrete value read or transformed by this operation.

**Parameter `onto`:** The onto consumed by project; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L188).

## `Reflect`

<a id="api-c6afe1570ecdd7f7"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Reflect(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 31c0d420ef4921ab349a88815d5940e38576029e535ad150852c9f7b9ba61857 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Reflect(InnoEngine.Mathematics.Vector2 v, InnoEngine.Mathematics.Vector2 n)
```

Reflects an incident value across the supplied normal.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `n`:** The surface normal used by the operation.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L272).

## `SignedAngle`

<a id="api-23bc4a2bafbd9922"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.SignedAngle(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) e8ce87b0efa6ebfbfe45ae5715524ed23c98c9ee3ab50d9f020ad736b96c219f -->

```csharp
public static float InnoEngine.Mathematics.Vector2.SignedAngle(InnoEngine.Mathematics.Vector2 from, InnoEngine.Mathematics.Vector2 to)
```

Calculates the signed angle in radians from one value to another.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L166).

## `ToString`

<a id="api-f69ac5bd70e20110"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.ToString 1e08bf75053ca66add53669ef8b44c900fe23b63aae274b96a6c603262a3dfc9 -->

```csharp
public override string InnoEngine.Mathematics.Vector2.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L515).

## `Transform`

<a id="api-87ef7a19e0c69a85"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Transform(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Matrix) d976788f3302873a6f5d70f874bda40336d0f711599333d0845d82b851c1d119 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Transform(InnoEngine.Mathematics.Vector2 v, InnoEngine.Mathematics.Matrix m)
```

Transforms the supplied value by the requested transformation.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L290).

## `Transform`

<a id="api-a1b61f93a1becd05"></a>
<!-- api: M:InnoEngine.Mathematics.Vector2.Transform(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Quaternion) f6ab306137ee885f51d55fc29877781c16e78cb08137a4421e3f0fd254866825 -->

```csharp
public static InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.Transform(InnoEngine.Mathematics.Vector2 value, InnoEngine.Mathematics.Quaternion rotation)
```

Transforms the supplied value by the requested transformation.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `rotation`:** The rotation applied to the supplied value.

**Returns:** The validated vector2 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L312).

## `normalized`

<a id="api-4cc6a12c2961ba40"></a>
<!-- api: P:InnoEngine.Mathematics.Vector2.normalized 776c1b4fa28b1fa09a0a2f63d1861ff9ddfefb9d6795935a901fc849f15f1f1d -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Vector2.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Vector2.cs#L77).
