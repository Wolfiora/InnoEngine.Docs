---
title: "Quaternion"
description: "Reference for Quaternion in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.afdccd537e3a0d78
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Quaternion`

This reference describes `Quaternion` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Quaternion>`.

## Members

| Member | Kind |
| --- | --- |
| [`w`](#api-f3ad1e0ff7c96632) | Field |
| [`x`](#api-ac179a83317ee576) | Field |
| [`y`](#api-4e7de04dc7644c24) | Field |
| [`z`](#api-2c6375d9b052d62f) | Field |
| [`#ctor`](#api-e5ad850eb008ba4d) | Method |
| [`Conjugate`](#api-f78fa11980f8d0ee) | Method |
| [`CreateFromAxisAngle`](#api-bf859b4ea7630f53) | Method |
| [`CreateFromYawPitchRoll`](#api-f3ece9e55b89d82f) | Method |
| [`Equals`](#api-98d44a7943bf5fbf) | Method |
| [`Equals`](#api-c5ebf1f5fc613ec2) | Method |
| [`FromEulerAnglesXYZ`](#api-74e8899cf1c171fe) | Method |
| [`FromEulerAnglesXYZDegrees`](#api-2fcd57816c5255bd) | Method |
| [`FromEulerAnglesZYX`](#api-af7b97fd2b1cfab1) | Method |
| [`FromEulerAnglesZYXDegrees`](#api-fe954de7f0b3b333) | Method |
| [`FromRotationMatrix`](#api-dfda13287a842d1a) | Method |
| [`GetHashCode`](#api-9841010a6b026688) | Method |
| [`Inverse`](#api-58bab4856cf42c26) | Method |
| [`Length`](#api-693cc297559b1590) | Method |
| [`LengthSquared`](#api-d5ca552ae12935bc) | Method |
| [`LookRotation`](#api-289a63e606c3e99d) | Method |
| [`Normalize`](#api-0cbc9d5ac59bc983) | Method |
| [`op_Equality`](#api-46acf1ae0f8dd790) | Method |
| [`op_Implicit`](#api-a2ecb161984128cd) | Method |
| [`op_Implicit`](#api-0622c1f669611f9c) | Method |
| [`op_Inequality`](#api-b886e702ed691278) | Method |
| [`op_Multiply`](#api-e16499997dd88adb) | Method |
| [`Slerp`](#api-ed8d22ac41105314) | Method |
| [`ToEulerAnglesXYZ`](#api-89a64fb97910f31f) | Method |
| [`ToEulerAnglesXYZDegrees`](#api-c7fc5280dee37cc1) | Method |
| [`ToEulerAnglesZYX`](#api-e481852c5ad8d716) | Method |
| [`ToEulerAnglesZYXDegrees`](#api-518416c09c4c6eea) | Method |
| [`ToMatrix`](#api-d6f83edfe588085a) | Method |
| [`ToString`](#api-833696215adaaef5) | Method |
| [`identity`](#api-f1feea74ff1f42e9) | Property |
| [`normalized`](#api-029a757031e8c486) | Property |

## Type declaration

<a id="api-afdccd537e3a0d78"></a>
<!-- api: T:Inno.Core.Mathematics.Quaternion 4fc8dc44bf1d30d617015680c84885b3f0f606dd05c7f41971b61badd928571a -->

```csharp
public struct Inno.Core.Mathematics.Quaternion : System.IEquatable<Inno.Core.Mathematics.Quaternion>
```

Represents a rotation as a normalized four-component quaternion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L11).

## `w`

<a id="api-f3ad1e0ff7c96632"></a>
<!-- api: F:Inno.Core.Mathematics.Quaternion.w 1d6d09accfe6a5eed8a8358971bc89df70141cf89911c8457f7d822dd3d41345 -->

```csharp
public float Inno.Core.Mathematics.Quaternion.w
```

The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L28).

## `x`

<a id="api-ac179a83317ee576"></a>
<!-- api: F:Inno.Core.Mathematics.Quaternion.x 8748ae92365fc8cf5e6cd30e157d02ce9980a3237ee5b725d031c2a6026f1475 -->

```csharp
public float Inno.Core.Mathematics.Quaternion.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L16).

## `y`

<a id="api-4e7de04dc7644c24"></a>
<!-- api: F:Inno.Core.Mathematics.Quaternion.y ea5efbed1f29cd864c978603d6f2b63ffd8f064dd1398e11a006bb2ea824a059 -->

```csharp
public float Inno.Core.Mathematics.Quaternion.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L20).

## `z`

<a id="api-2c6375d9b052d62f"></a>
<!-- api: F:Inno.Core.Mathematics.Quaternion.z 4c4f01ba7e6b95c18c571562903acb396626b23f573b5edc1b83bb200971bc72 -->

```csharp
public float Inno.Core.Mathematics.Quaternion.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L24).

## `#ctor`

<a id="api-e5ad850eb008ba4d"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.#ctor(System.Single,System.Single,System.Single,System.Single) 001d9e3b2eb661db6e7609709d2828ecd845e0a94f3af147076d599e75dae8aa -->

```csharp
public Inno.Core.Mathematics.Quaternion.Quaternion(float x, float y, float z, float w)
```

Creates a validated quaternion instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.

**Parameter `w`:** The homogeneous or fourth component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L45).

## `Conjugate`

<a id="api-f78fa11980f8d0ee"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Conjugate(Inno.Core.Mathematics.Quaternion) 22690a5dac480309412372a6cd9db028d2cffbd1c59d48effd468337b8f7eb29 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.Conjugate(Inno.Core.Mathematics.Quaternion q)
```

Returns the quaternion conjugate by negating its vector components.

**Parameter `q`:** The q consumed by conjugate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L113).

## `CreateFromAxisAngle`

<a id="api-bf859b4ea7630f53"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.CreateFromAxisAngle(Inno.Core.Mathematics.Vector3,System.Single) fda70431b2fb435c125b95b2bde31f9bdcd2247e25ffd779189cf423430d77d6 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.CreateFromAxisAngle(Inno.Core.Mathematics.Vector3 axis, float angle)
```

Creates and validates a caller-owned from axis angle value.

**Parameter `axis`:** The axis consumed by create from axis angle; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `angle`:** The angle consumed by create from axis angle; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L203).

## `CreateFromYawPitchRoll`

<a id="api-f3ece9e55b89d82f"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.CreateFromYawPitchRoll(System.Single,System.Single,System.Single) 13f9e6c1824f94b491b39c179e646854c9321bc2f7263bad1598a24412866d58 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.CreateFromYawPitchRoll(float yaw, float pitch, float roll)
```

Creates and validates a caller-owned from yaw pitch roll value.

**Parameter `yaw`:** The yaw consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `pitch`:** The pitch consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `roll`:** The roll consumed by create from yaw pitch roll; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L328).

## `Equals`

<a id="api-98d44a7943bf5fbf"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Equals(Inno.Core.Mathematics.Quaternion) 474c12a072322818dcda17bf600fd43c322621c7bdd7aa70d1ec8147d7ba5527 -->

```csharp
public bool Inno.Core.Mathematics.Quaternion.Equals(Inno.Core.Mathematics.Quaternion other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L633).

## `Equals`

<a id="api-c5ebf1f5fc613ec2"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Equals(System.Object) 243b1d29d0d1ee50a25ef67bad0cd0c3f61a159067b17ef275747742d6181f37 -->

```csharp
public override bool Inno.Core.Mathematics.Quaternion.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L622).

## `FromEulerAnglesXYZ`

<a id="api-74e8899cf1c171fe"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.FromEulerAnglesXYZ(Inno.Core.Mathematics.Vector3) dfc80875d70811a865f0ef31985388f5c195ba02adcf4592673b7242dfd30b0e -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.FromEulerAnglesXYZ(Inno.Core.Mathematics.Vector3 euler)
```

Creates the target representation from the supplied euler angles xyz value.

**Parameter `euler`:** The euler consumed by from euler angles xyz; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L428).

## `FromEulerAnglesXYZDegrees`

<a id="api-2fcd57816c5255bd"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.FromEulerAnglesXYZDegrees(Inno.Core.Mathematics.Vector3) 76e67d536533c4f143e8b90d3fd6dd36efeff2cc17c8628e276593cdada053ea -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.FromEulerAnglesXYZDegrees(Inno.Core.Mathematics.Vector3 eulerDegrees)
```

Creates the target representation from the supplied euler angles xyzdegrees value.

**Parameter `eulerDegrees`:** The euler degrees consumed by from euler angles xyzdegrees; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L455).

## `FromEulerAnglesZYX`

<a id="api-af7b97fd2b1cfab1"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.FromEulerAnglesZYX(Inno.Core.Mathematics.Vector3) c0059bf785c97410c5a5c1c4d678f1426d6e759f756402d4747170ccec62ea79 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.FromEulerAnglesZYX(Inno.Core.Mathematics.Vector3 euler)
```

Creates the target representation from the supplied euler angles zyx value.

**Parameter `euler`:** The euler consumed by from euler angles zyx; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L484).

## `FromEulerAnglesZYXDegrees`

<a id="api-fe954de7f0b3b333"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.FromEulerAnglesZYXDegrees(Inno.Core.Mathematics.Vector3) da824d0c176fcf018b007631cc9596631a53acc20b3da6340ad9d5ac8cedc84f -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.FromEulerAnglesZYXDegrees(Inno.Core.Mathematics.Vector3 eulerDegrees)
```

Creates the target representation from the supplied euler angles zyxdegrees value.

**Parameter `eulerDegrees`:** The euler degrees consumed by from euler angles zyxdegrees; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L511).

## `FromRotationMatrix`

<a id="api-dfda13287a842d1a"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.FromRotationMatrix(Inno.Core.Mathematics.Matrix) 2778b13ec4b3d1568cab756dd9f521ebd7ae49a5f6a6c1c95e2e3e6f4cf0ea71 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.FromRotationMatrix(Inno.Core.Mathematics.Matrix m)
```

Creates a quaternion from a rotation matrix.

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L228).

## `GetHashCode`

<a id="api-9841010a6b026688"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.GetHashCode f4bbd3bde532738549ec045db6498c62f5a4d8e937151be62bae7fec51b2d69d -->

```csharp
public override int Inno.Core.Mathematics.Quaternion.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L641).

## `Inverse`

<a id="api-58bab4856cf42c26"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Inverse(Inno.Core.Mathematics.Quaternion) d669ca86d41b40e660d0e3763351e027d3a14797334b43f4c94799078aa01f7e -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.Inverse(Inno.Core.Mathematics.Quaternion q)
```

Calculates the inverse rotation represented by the supplied quaternion.

**Parameter `q`:** The q consumed by inverse; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L125).

## `Length`

<a id="api-693cc297559b1590"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Length a4a269fdf5d11bb7631ea2795d450ca1548ec4b72baeb55c4adbfc39b18820dd -->

```csharp
public float Inno.Core.Mathematics.Quaternion.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L69).

## `LengthSquared`

<a id="api-d5ca552ae12935bc"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.LengthSquared a5e214e7e689237c68fe9f46f1fe236d3b2cbde42252bc82f64d0b92aca2c283 -->

```csharp
public float Inno.Core.Mathematics.Quaternion.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L78).

## `LookRotation`

<a id="api-289a63e606c3e99d"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.LookRotation(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 41edee6efe169e7203faccf19c994309cedb89d6a90822903bdcfce512bc835d -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.LookRotation(Inno.Core.Mathematics.Vector3 forward, Inno.Core.Mathematics.Vector3 up)
```

Creates a rotation quaternion that looks in `forward` direction with the given `up`.

**Parameter `forward`:** The forward consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `up`:** The up consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L286).

## `Normalize`

<a id="api-0cbc9d5ac59bc983"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Normalize(Inno.Core.Mathematics.Quaternion) 3fe9461c29de20a75532e13fb558348fe605eb62a742eab6ff656f3467693ba1 -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.Normalize(Inno.Core.Mathematics.Quaternion q)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `q`:** The q consumed by normalize; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L95).

## `op_Equality`

<a id="api-46acf1ae0f8dd790"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.op_Equality(Inno.Core.Mathematics.Quaternion,Inno.Core.Mathematics.Quaternion) a822acb4d9fd154a8d1099d8ac004e43206b53c1eb3b01d9069b482eb512bd49 -->

```csharp
public static bool Inno.Core.Mathematics.Quaternion.operator ==(Inno.Core.Mathematics.Quaternion a, Inno.Core.Mathematics.Quaternion b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L566).

## `op_Implicit`

<a id="api-a2ecb161984128cd"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.op_Implicit(Inno.Core.Mathematics.Quaternion)~System.Numerics.Quaternion 6831fa6a923bcdc00e2d99ef45c3faae016d792d2beb887e814da59ef6f75b50 -->

```csharp
public static Inno.Core.Mathematics.Quaternion.implicit operator System.Numerics.Quaternion(Inno.Core.Mathematics.Quaternion q)
```

Converts the supplied value to `System.Numerics.Quaternion`.

**Parameter `q`:** The q consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated system.numerics.quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L601).

## `op_Implicit`

<a id="api-0622c1f669611f9c"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.op_Implicit(System.Numerics.Quaternion)~Inno.Core.Mathematics.Quaternion 8c90355a317111caaea22e20cc8bafda1edd6a247f7ae3ba07d59980c2ac7616 -->

```csharp
public static Inno.Core.Mathematics.Quaternion.implicit operator Inno.Core.Mathematics.Quaternion(System.Numerics.Quaternion q)
```

Converts the supplied value to `Inno.Core.Mathematics.Quaternion`.

**Parameter `q`:** The q consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L611).

## `op_Inequality`

<a id="api-b886e702ed691278"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.op_Inequality(Inno.Core.Mathematics.Quaternion,Inno.Core.Mathematics.Quaternion) d9f6256580694b175d3277d5d1321182c7afb2e0f8df47d854e415de7dbdb8a7 -->

```csharp
public static bool Inno.Core.Mathematics.Quaternion.operator !=(Inno.Core.Mathematics.Quaternion a, Inno.Core.Mathematics.Quaternion b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L587).

## `op_Multiply`

<a id="api-e16499997dd88adb"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.op_Multiply(Inno.Core.Mathematics.Quaternion,Inno.Core.Mathematics.Quaternion) c30ff67ff870f4b45a85f791c5a3ff87c2e9693ad724cc54264e1ba2da7f097f -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.operator *(Inno.Core.Mathematics.Quaternion a, Inno.Core.Mathematics.Quaternion b)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L542).

## `Slerp`

<a id="api-ed8d22ac41105314"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.Slerp(Inno.Core.Mathematics.Quaternion,Inno.Core.Mathematics.Quaternion,System.Single) 66c8cc08c7ff017a6c237f1babe46b7a7ef1be937dbecfebf71c6c41cac2426d -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.Slerp(Inno.Core.Mathematics.Quaternion a, Inno.Core.Mathematics.Quaternion b, float t)
```

Interpolates along the shortest spherical path between two rotations.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated quaternion that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L149).

## `ToEulerAnglesXYZ`

<a id="api-89a64fb97910f31f"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToEulerAnglesXYZ 0c57075043b351c8bf21b0ab0c8bae594fad48acb5726556f268b4eb4856fd5a -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Quaternion.ToEulerAnglesXYZ()
```

Converts this value to its euler angles xyz representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L341).

## `ToEulerAnglesXYZDegrees`

<a id="api-c7fc5280dee37cc1"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToEulerAnglesXYZDegrees c26325aab319e2fd9c50ca50a3fb8c2a0c0a5cfe6ad8b1310f464ad8af7bc1d3 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Quaternion.ToEulerAnglesXYZDegrees()
```

Converts this value to its euler angles xyzdegrees representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L364).

## `ToEulerAnglesZYX`

<a id="api-e481852c5ad8d716"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToEulerAnglesZYX bde5fac31c1ff1d2dd0c5a86062c01761b77c70bea3e98608258a15fd55feb95 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Quaternion.ToEulerAnglesZYX()
```

Converts this value to its euler angles zyx representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L372).

## `ToEulerAnglesZYXDegrees`

<a id="api-518416c09c4c6eea"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToEulerAnglesZYXDegrees 65c588822ead3c08ac1e52dbf42a19be06466343754a1eca0f5d2c7bc4f162ee -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Quaternion.ToEulerAnglesZYXDegrees()
```

Converts this value to its euler angles zyxdegrees representation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L396).

## `ToMatrix`

<a id="api-d6f83edfe588085a"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToMatrix 5949767d69e35a6a836eafee790c6d1e5e712ed5c213041f7ca5980bebbd40fc -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Core.Mathematics.Quaternion.ToMatrix()
```

Converts this quaternion to a rotation matrix.

**Returns:** The validated matrix that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L310).

## `ToString`

<a id="api-833696215adaaef5"></a>
<!-- api: M:Inno.Core.Mathematics.Quaternion.ToString ee87742c4bcb0eb5239b9a52edd12ace950a40b7c72f8aa02e9999a37a85f59b -->

```csharp
public override string Inno.Core.Mathematics.Quaternion.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L649).

## `identity`

<a id="api-f1feea74ff1f42e9"></a>
<!-- api: P:Inno.Core.Mathematics.Quaternion.identity 0284ee3082e1998b4503b30bd9903d10dfab8a90c21002476f99f1c6d232ecae -->

```csharp
public static Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.identity { get; }
```

Gets the stable identity used to reference this value across subsystem boundaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L60).

## `normalized`

<a id="api-029a757031e8c486"></a>
<!-- api: P:Inno.Core.Mathematics.Quaternion.normalized 2c7dba169100e73d92ce05e9116c40c0337cb07e241f634fb5628bc039239b45 -->

```csharp
public Inno.Core.Mathematics.Quaternion Inno.Core.Mathematics.Quaternion.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Quaternion.cs#L83).
