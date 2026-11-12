---
title: "Quaternion"
description: "Reference for Quaternion in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.6fe181050c16fef3
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Quaternion`

This reference describes `Quaternion` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Quaternion>`.

## Members

| Member | Kind |
| --- | --- |
| [`w`](#api-31dd8f5222f317eb) | Field |
| [`x`](#api-21874543efd25b3e) | Field |
| [`y`](#api-8a359bf124748ea6) | Field |
| [`z`](#api-66f7af4efa12352a) | Field |
| [`#ctor`](#api-aed5a05b455e85a0) | Method |
| [`Conjugate`](#api-62fc816fc4a827c0) | Method |
| [`CreateFromAxisAngle`](#api-03557239a79416cb) | Method |
| [`CreateFromYawPitchRoll`](#api-b51c8af1db8ddee7) | Method |
| [`Equals`](#api-2c4250fef3d5781d) | Method |
| [`Equals`](#api-962f6dc1326a7963) | Method |
| [`FromEulerAnglesXYZ`](#api-56e90433d5cc1c2f) | Method |
| [`FromEulerAnglesXYZDegrees`](#api-7f31ba9bb7c922f8) | Method |
| [`FromEulerAnglesZYX`](#api-67c90a65b0546fd6) | Method |
| [`FromEulerAnglesZYXDegrees`](#api-0d730f524d9571e0) | Method |
| [`FromRotationMatrix`](#api-a11dcb27d5aff691) | Method |
| [`GetHashCode`](#api-3f57615f27596a93) | Method |
| [`Inverse`](#api-488591a903165a51) | Method |
| [`Length`](#api-5e329f58645c2632) | Method |
| [`LengthSquared`](#api-143faaeecf29b18b) | Method |
| [`LookRotation`](#api-48971190e10c6d02) | Method |
| [`Normalize`](#api-9de781a4db3abd67) | Method |
| [`op_Equality`](#api-37e95550c0e66a23) | Method |
| [`op_Implicit`](#api-3bc8c380be1933ea) | Method |
| [`op_Implicit`](#api-a0d7a2118a0812fc) | Method |
| [`op_Inequality`](#api-949c8a39d20458ab) | Method |
| [`op_Multiply`](#api-bfa1d3bdbbd5a0c3) | Method |
| [`Slerp`](#api-ef53239edf8c0e06) | Method |
| [`ToEulerAnglesXYZ`](#api-3a931332045f5728) | Method |
| [`ToEulerAnglesXYZDegrees`](#api-95ff70e09090c29c) | Method |
| [`ToEulerAnglesZYX`](#api-7eddb3ac6e7c3289) | Method |
| [`ToEulerAnglesZYXDegrees`](#api-b46a2d7f3a86aa0b) | Method |
| [`ToMatrix`](#api-3ac0f95ffcfdaba8) | Method |
| [`ToString`](#api-a20c702260a010b8) | Method |
| [`identity`](#api-0d729eeeef34ae92) | Property |
| [`normalized`](#api-07eb85097ef13142) | Property |

## Type declaration

<a id="api-6fe181050c16fef3"></a>
<!-- api: T:InnoEngine.Mathematics.Quaternion cc9ecf650871ae1417edb177c4ad9c362321612bcb2c78974fc114adf2766283 -->

```csharp
public struct InnoEngine.Mathematics.Quaternion : System.IEquatable<InnoEngine.Mathematics.Quaternion>
```

Represents a rotation as a normalized four-component quaternion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L11).

## `w`

<a id="api-31dd8f5222f317eb"></a>
<!-- api: F:InnoEngine.Mathematics.Quaternion.w 107c28e6252b5eed2392e795d36734ece848516bee31879dd9a959a5efd06837 -->

```csharp
public float InnoEngine.Mathematics.Quaternion.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L28).

## `x`

<a id="api-21874543efd25b3e"></a>
<!-- api: F:InnoEngine.Mathematics.Quaternion.x 842d88721f570dbccff2e839c379f827a8984a7e1c2c640f54c962e8af1efa60 -->

```csharp
public float InnoEngine.Mathematics.Quaternion.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L16).

## `y`

<a id="api-8a359bf124748ea6"></a>
<!-- api: F:InnoEngine.Mathematics.Quaternion.y f967705aa241394cb158c367702e9ca85fbb6bbddcb9c5d080198fa73d7bbf1b -->

```csharp
public float InnoEngine.Mathematics.Quaternion.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L20).

## `z`

<a id="api-66f7af4efa12352a"></a>
<!-- api: F:InnoEngine.Mathematics.Quaternion.z f7606d168f978b805e4ffeb7ce2abf24209c1bbbd719e3c165286247142a3c47 -->

```csharp
public float InnoEngine.Mathematics.Quaternion.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L24).

## `#ctor`

<a id="api-aed5a05b455e85a0"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.#ctor(System.Single,System.Single,System.Single,System.Single) 9cb030abc037c8399646524839d6410884866e41011fff90acd29531e5489b68 -->

```csharp
public InnoEngine.Mathematics.Quaternion.Quaternion(float x, float y, float z, float w)
```

Creates a validated quaternion instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L45).

## `Conjugate`

<a id="api-62fc816fc4a827c0"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Conjugate(InnoEngine.Mathematics.Quaternion) 9dbb127929ac7dfbc41179cb17aca72aad167a98d2fd096a447bd56be7a55423 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.Conjugate(InnoEngine.Mathematics.Quaternion q)
```

Returns the quaternion conjugate by negating its vector components.

**Parameter `q`:** The q consumed by conjugate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L113).

## `CreateFromAxisAngle`

<a id="api-03557239a79416cb"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.CreateFromAxisAngle(InnoEngine.Mathematics.Vector3,System.Single) 1c97ca1d3d7652454d53bcfc43b5eb057ad624c7f8e3a2145e464044ab1a1146 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.CreateFromAxisAngle(InnoEngine.Mathematics.Vector3 axis, float angle)
```

Creates and validates a caller-owned from axis angle value.

**Parameter `axis`:** The axis consumed by create from axis angle; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `angle`:** The angle consumed by create from axis angle; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L203).

## `CreateFromYawPitchRoll`

<a id="api-b51c8af1db8ddee7"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.CreateFromYawPitchRoll(System.Single,System.Single,System.Single) 3d9b3e0f859d47097086f2e24e6198cd36bc91d7b2d499865727b5cb4d3934d2 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.CreateFromYawPitchRoll(float yaw, float pitch, float roll)
```

Creates and validates a caller-owned from yaw pitch roll value.

**Parameter `yaw`:** The yaw consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `pitch`:** The pitch consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `roll`:** The roll consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L328).

## `Equals`

<a id="api-2c4250fef3d5781d"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Equals(InnoEngine.Mathematics.Quaternion) 04e65398b4d513dffc0e29e424123c64ec64afa401736b1db3e33424ea8dae7a -->

```csharp
public bool InnoEngine.Mathematics.Quaternion.Equals(InnoEngine.Mathematics.Quaternion other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L633).

## `Equals`

<a id="api-962f6dc1326a7963"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Equals(System.Object) 3eadcc831dd914ce8abc40dc6e1c16678c3da4061cbee09007085788c701bc97 -->

```csharp
public override bool InnoEngine.Mathematics.Quaternion.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L622).

## `FromEulerAnglesXYZ`

<a id="api-56e90433d5cc1c2f"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.FromEulerAnglesXYZ(InnoEngine.Mathematics.Vector3) aa94900a5f1ff638fcc6431b435feec9dc70ae9a6757c20d91c40453eff85c8c -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.FromEulerAnglesXYZ(InnoEngine.Mathematics.Vector3 euler)
```

Creates the target representation from the supplied euler angles xyz value.

**Parameter `euler`:** The euler consumed by from euler angles xyz; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L428).

## `FromEulerAnglesXYZDegrees`

<a id="api-7f31ba9bb7c922f8"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.FromEulerAnglesXYZDegrees(InnoEngine.Mathematics.Vector3) 1f3d046c73d6af1d7411e1bae9cf484718d0764a522db2bc6a01ef2c35638b76 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.FromEulerAnglesXYZDegrees(InnoEngine.Mathematics.Vector3 eulerDegrees)
```

Creates the target representation from the supplied euler angles xyzdegrees value.

**Parameter `eulerDegrees`:** The euler degrees consumed by from euler angles xyzdegrees; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L455).

## `FromEulerAnglesZYX`

<a id="api-67c90a65b0546fd6"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.FromEulerAnglesZYX(InnoEngine.Mathematics.Vector3) bc1a69da5b4c5267a070733f3aeec5249fa67543909350e0cb450e89efb26de4 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.FromEulerAnglesZYX(InnoEngine.Mathematics.Vector3 euler)
```

Creates the target representation from the supplied euler angles zyx value.

**Parameter `euler`:** The euler consumed by from euler angles zyx; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L484).

## `FromEulerAnglesZYXDegrees`

<a id="api-0d730f524d9571e0"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.FromEulerAnglesZYXDegrees(InnoEngine.Mathematics.Vector3) f1a4e5a7c263516d43427ff4d343ec61729b264721460a8dbfc1e0697af2a156 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.FromEulerAnglesZYXDegrees(InnoEngine.Mathematics.Vector3 eulerDegrees)
```

Creates the target representation from the supplied euler angles zyxdegrees value.

**Parameter `eulerDegrees`:** The euler degrees consumed by from euler angles zyxdegrees; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L511).

## `FromRotationMatrix`

<a id="api-a11dcb27d5aff691"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.FromRotationMatrix(InnoEngine.Mathematics.Matrix) 7b9a371932516e56094b85da1506b9c5c92dbd9c3b6ad843b7c8d110168bcde0 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.FromRotationMatrix(InnoEngine.Mathematics.Matrix m)
```

Creates a quaternion from a rotation matrix.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L228).

## `GetHashCode`

<a id="api-3f57615f27596a93"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.GetHashCode 0e9f999cc06c5adcb0537671499d296bb476c9432c035b72227acba63b40b559 -->

```csharp
public override int InnoEngine.Mathematics.Quaternion.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L641).

## `Inverse`

<a id="api-488591a903165a51"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Inverse(InnoEngine.Mathematics.Quaternion) 51504b2ee3677edacc44817653f859e88895d5f47e4f03161633a9ccdcc234f7 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.Inverse(InnoEngine.Mathematics.Quaternion q)
```

Calculates the inverse rotation represented by the supplied quaternion.

**Parameter `q`:** The q consumed by inverse; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L125).

## `Length`

<a id="api-5e329f58645c2632"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Length 7a4293e5767869296fac24bf56307c7ae0d4f5506e0a3f69bfd8685cda35c1f5 -->

```csharp
public float InnoEngine.Mathematics.Quaternion.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L69).

## `LengthSquared`

<a id="api-143faaeecf29b18b"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.LengthSquared 9f433c8d505d9fd8af2b17c74525c0b4a12b23594819527ca27eca2db04c6611 -->

```csharp
public float InnoEngine.Mathematics.Quaternion.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L78).

## `LookRotation`

<a id="api-48971190e10c6d02"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.LookRotation(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 9894f6ed9d9a3b0b82335e17ff421824b66aa863614a65ecf2b5ad15ed0c6390 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.LookRotation(InnoEngine.Mathematics.Vector3 forward, InnoEngine.Mathematics.Vector3 up)
```

Creates a rotation quaternion that looks in `forward` direction with the given `up`.

**Parameter `forward`:** The forward consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `up`:** The up consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L286).

## `Normalize`

<a id="api-9de781a4db3abd67"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Normalize(InnoEngine.Mathematics.Quaternion) 9a455cc6d32629b9f61ffa04fbc9ebebbdb213430be75ba028f26d990575726e -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.Normalize(InnoEngine.Mathematics.Quaternion q)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `q`:** The q consumed by normalize; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L95).

## `op_Equality`

<a id="api-37e95550c0e66a23"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.op_Equality(InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Quaternion) b20425ac34fbb845023267fc0b25249f8371759a2c2c7c1df6bdf2c9ede7fc7f -->

```csharp
public static bool InnoEngine.Mathematics.Quaternion.operator ==(InnoEngine.Mathematics.Quaternion a, InnoEngine.Mathematics.Quaternion b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L566).

## `op_Implicit`

<a id="api-3bc8c380be1933ea"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.op_Implicit(InnoEngine.Mathematics.Quaternion)~System.Numerics.Quaternion ef21d0e0509a187667291ca47e06c98eb44e95fe75394a26d45d840d1234461f -->

```csharp
public static InnoEngine.Mathematics.Quaternion.implicit operator System.Numerics.Quaternion(InnoEngine.Mathematics.Quaternion q)
```

Converts the supplied value to `System.Numerics.Quaternion`.

**Parameter `q`:** The q consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated system.numerics.quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L601).

## `op_Implicit`

<a id="api-a0d7a2118a0812fc"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.op_Implicit(System.Numerics.Quaternion)~InnoEngine.Mathematics.Quaternion 6488059eda1823072d3040a737c5955b5ce43d2da1efc10892c48316412872be -->

```csharp
public static InnoEngine.Mathematics.Quaternion.implicit operator InnoEngine.Mathematics.Quaternion(System.Numerics.Quaternion q)
```

Converts the supplied value to `InnoEngine.Mathematics.Quaternion`.

**Parameter `q`:** The q consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L611).

## `op_Inequality`

<a id="api-949c8a39d20458ab"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.op_Inequality(InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Quaternion) 6523a67ba794c9759390763203041a821c76b998065222ed49a76362c56c2376 -->

```csharp
public static bool InnoEngine.Mathematics.Quaternion.operator !=(InnoEngine.Mathematics.Quaternion a, InnoEngine.Mathematics.Quaternion b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L587).

## `op_Multiply`

<a id="api-bfa1d3bdbbd5a0c3"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.op_Multiply(InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Quaternion) f73fdddc1fcc678f6d7aaac76342fc0f82815d76f4a48f9681edc0ae603668dc -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.operator *(InnoEngine.Mathematics.Quaternion a, InnoEngine.Mathematics.Quaternion b)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L542).

## `Slerp`

<a id="api-ef53239edf8c0e06"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.Slerp(InnoEngine.Mathematics.Quaternion,InnoEngine.Mathematics.Quaternion,System.Single) 33c2c1fc5deca6a8bed765b574c9f1bd374b8043cc96e586b55f95c72c5c2e30 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.Slerp(InnoEngine.Mathematics.Quaternion a, InnoEngine.Mathematics.Quaternion b, float t)
```

Interpolates along the shortest spherical path between two rotations.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L149).

## `ToEulerAnglesXYZ`

<a id="api-3a931332045f5728"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToEulerAnglesXYZ af5cdb6a0c79bf0a325197bf8f6ade7baff1056cbac3ad698af082a936ac5a84 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Quaternion.ToEulerAnglesXYZ()
```

Converts this value to its euler angles xyz representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L341).

## `ToEulerAnglesXYZDegrees`

<a id="api-95ff70e09090c29c"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToEulerAnglesXYZDegrees eedbb776de32b22dbf56ce8abf1e813101310ec496ad4af183caa4905dc02591 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Quaternion.ToEulerAnglesXYZDegrees()
```

Converts this value to its euler angles xyzdegrees representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L364).

## `ToEulerAnglesZYX`

<a id="api-7eddb3ac6e7c3289"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToEulerAnglesZYX f2be4a30895a33c7b5e4b3b96cace18fba9c90e8d39323b4949ea8eb55e8803c -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Quaternion.ToEulerAnglesZYX()
```

Converts this value to its euler angles zyx representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L372).

## `ToEulerAnglesZYXDegrees`

<a id="api-b46a2d7f3a86aa0b"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToEulerAnglesZYXDegrees 8ff98a912d05d51e888fd09dca6ef7acc466973a2c31fa4f1d2bec8eb349945b -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEngine.Mathematics.Quaternion.ToEulerAnglesZYXDegrees()
```

Converts this value to its euler angles zyxdegrees representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L396).

## `ToMatrix`

<a id="api-3ac0f95ffcfdaba8"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToMatrix a789ff63cb269e9cb034c265cc6339ed6fdbece20db59f9b8cd4ab28bf92b36e -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEngine.Mathematics.Quaternion.ToMatrix()
```

Converts this quaternion to a rotation matrix.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L310).

## `ToString`

<a id="api-a20c702260a010b8"></a>
<!-- api: M:InnoEngine.Mathematics.Quaternion.ToString b7d0adbf8416399982527422cd8bea508f9a67d6d9fcd999c0a26788212536a8 -->

```csharp
public override string InnoEngine.Mathematics.Quaternion.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L649).

## `identity`

<a id="api-0d729eeeef34ae92"></a>
<!-- api: P:InnoEngine.Mathematics.Quaternion.identity f9b196d676b1a1671410a914764275b5134fe6e900dabf668355efebc04a6272 -->

```csharp
public static InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.identity { get; }
```

Gets the stable identity used to reference this value across subsystem boundaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L60).

## `normalized`

<a id="api-07eb85097ef13142"></a>
<!-- api: P:InnoEngine.Mathematics.Quaternion.normalized e8dfd9a6dda73ab2e8f6647c6dba1ce47bde3bab4a84fa7a0ce21d4a42c70e0c -->

```csharp
public InnoEngine.Mathematics.Quaternion InnoEngine.Mathematics.Quaternion.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L83).
