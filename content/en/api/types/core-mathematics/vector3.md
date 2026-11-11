---
title: "Vector3"
description: "Reference for Vector3 in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.c3fafe685cc44f29
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Vector3`

This reference describes `Vector3` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Vector3>`.

## Members

| Member | Kind |
| --- | --- |
| [`BACK`](#api-a0287b9ef2a9cf3f) | Field |
| [`DOWN`](#api-8b2218fc503cb090) | Field |
| [`FORWARD`](#api-1efa54f18f46ee32) | Field |
| [`LEFT`](#api-0ab6d54b5a391f43) | Field |
| [`ONE`](#api-7640be14d3d7c4e9) | Field |
| [`RIGHT`](#api-e549a0b0d7c42109) | Field |
| [`UP`](#api-f216168e2f258e15) | Field |
| [`x`](#api-c6e9720ec0cd5c90) | Field |
| [`y`](#api-4666f64b4dfde2ec) | Field |
| [`z`](#api-aed2ca5cc666abc0) | Field |
| [`ZERO`](#api-87930f00c220425c) | Field |
| [`#ctor`](#api-f226bdc6246a4c1c) | Method |
| [`Angle`](#api-ffa3ceee83b22c66) | Method |
| [`Cross`](#api-40295c5811cdaf97) | Method |
| [`Distance`](#api-ef346b3f51547af6) | Method |
| [`Dot`](#api-906871a82eec8f1d) | Method |
| [`Equals`](#api-c3906d2782fa4250) | Method |
| [`Equals`](#api-a6cd363cccd8451d) | Method |
| [`GetHashCode`](#api-c4bdeb9871bc0e56) | Method |
| [`Length`](#api-dc951fa133ea064b) | Method |
| [`LengthSquared`](#api-72d32e90e56c7714) | Method |
| [`Lerp`](#api-9b6234c6362be519) | Method |
| [`NormalizeSafe`](#api-119a346279439e5f) | Method |
| [`op_Addition`](#api-aeaeae24cddc6ed8) | Method |
| [`op_Division`](#api-85b8a34460743f2e) | Method |
| [`op_Equality`](#api-2007a3de2eb2a2a7) | Method |
| [`op_Implicit`](#api-baacac81a4f0f430) | Method |
| [`op_Implicit`](#api-9b3a3153aa750801) | Method |
| [`op_Inequality`](#api-189208a24c5c4ce8) | Method |
| [`op_Multiply`](#api-8504d847c52ee683) | Method |
| [`op_Multiply`](#api-1fd6f45832bc2a3b) | Method |
| [`op_Subtraction`](#api-06150a209f433d50) | Method |
| [`op_UnaryNegation`](#api-428823a1b843db71) | Method |
| [`Project`](#api-4d300ce447028c86) | Method |
| [`Reflect`](#api-1c23869391162419) | Method |
| [`SignedAngle`](#api-edbbf93de149223a) | Method |
| [`ToString`](#api-567dc9e70ec9e69e) | Method |
| [`Transform`](#api-b45731f9e0d67b4f) | Method |
| [`Transform`](#api-68323e0d8b49a21e) | Method |
| [`TransformNormal`](#api-c75d081d882f9142) | Method |
| [`normalized`](#api-37d1a884d9c9d36d) | Property |

## Type declaration

<a id="api-c3fafe685cc44f29"></a>
<!-- api: T:Inno.Core.Mathematics.Vector3 248d0da2c37da5797ba213482269e530ad2718b6edd717ce1a22cbca8fea2447 -->

```csharp
public struct Inno.Core.Mathematics.Vector3 : System.IEquatable<Inno.Core.Mathematics.Vector3>
```

Represents a mutable vector3 value with component-wise arithmetic semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L14).

## `BACK`

<a id="api-a0287b9ef2a9cf3f"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.BACK 139055475e7636f63ce2319265eb5d942186f81f7d3da4d12c20dc687a6f88b4 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.BACK
```

The back value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L83).

## `DOWN`

<a id="api-8b2218fc503cb090"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.DOWN ab00c95c7e5874527753a8d314f5ff9608e687de514d5c070483a39a33a72040 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.DOWN
```

The down value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L67).

## `FORWARD`

<a id="api-1efa54f18f46ee32"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.FORWARD 52479b1162025b9be72e2e7ce9356342e8ba37a73dcadebac01068cc3e353105 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.FORWARD
```

The forward value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L79).

## `LEFT`

<a id="api-0ab6d54b5a391f43"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.LEFT 87477dcc518a20cc95bd8b20dac7998307059656d0fb84763f43a787ff25151d -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.LEFT
```

The left value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L71).

## `ONE`

<a id="api-7640be14d3d7c4e9"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.ONE 5b4ad08930ad3cac73bb40c0a778be9a4c691d3964fcc98d3b87174e649e0586 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.ONE
```

A value whose components are all one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L59).

## `RIGHT`

<a id="api-e549a0b0d7c42109"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.RIGHT cca998db8debcaef0ceb5d7c421d1f11b717fa0dfc3a17ce711c65e9de8e08f9 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.RIGHT
```

The right value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L75).

## `UP`

<a id="api-f216168e2f258e15"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.UP 8aae1bfeca599d443260d1d680a1b24372b4882d34813c98df377953191fe4a7 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.UP
```

The up value used as part of this type's public representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L63).

## `x`

<a id="api-c6e9720ec0cd5c90"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.x 24f6581b7de41bf4ecf46cc5e46b7eec7bd28ba91718cb5256a1e70efb851e22 -->

```csharp
public float Inno.Core.Mathematics.Vector3.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L19).

## `y`

<a id="api-4666f64b4dfde2ec"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.y e9949402e63a2b9db237cadf36cfc46c27d16159b427f7eafe06991065350239 -->

```csharp
public float Inno.Core.Mathematics.Vector3.y
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L23).

## `z`

<a id="api-aed2ca5cc666abc0"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.z f0927b2ef2312b0b6439bb1e051ba6d9701cf54acd32db8f3a3af63c1b6c28a0 -->

```csharp
public float Inno.Core.Mathematics.Vector3.z
```

The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L27).

## `ZERO`

<a id="api-87930f00c220425c"></a>
<!-- api: F:Inno.Core.Mathematics.Vector3.ZERO f4ad2d405636c32bbf73df4002569aabd012250d349851daf9d447f355649395 -->

```csharp
public static readonly Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.ZERO
```

A value whose components are all zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L55).

## `#ctor`

<a id="api-f226bdc6246a4c1c"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.#ctor(System.Single,System.Single,System.Single) 289a154c10160dd0c7356b1d4e3fcaca2bfed38378ec430ce27b80720ee1cfeb -->

```csharp
public Inno.Core.Mathematics.Vector3.Vector3(float x, float y, float z)
```

Creates a vector from explicit component values.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `z`:** The depth or third component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L41).

## `Angle`

<a id="api-ffa3ceee83b22c66"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Angle(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 13b706a803b02b3b45dd68b5c3daa96d14848dfff5565337c67cc43c96257029 -->

```csharp
public static float Inno.Core.Mathematics.Vector3.Angle(Inno.Core.Mathematics.Vector3 from, Inno.Core.Mathematics.Vector3 to)
```

Calculates the unsigned angle in radians between two values.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L169).

## `Cross`

<a id="api-40295c5811cdaf97"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Cross(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 60360859a25157be6a8444a27929d3739b461ce3dcb71dec7801853ec68ec61d -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Cross(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Calculates the vector perpendicular to both supplied vectors.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L251).

## `Distance`

<a id="api-ef346b3f51547af6"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Distance(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 3800b1ee24b345d99535f9d5cab7bbecc47c6adb1da271f4213ef7be2909eaa7 -->

```csharp
public static float Inno.Core.Mathematics.Vector3.Distance(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Calculates the Euclidean distance between two points.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L274).

## `Dot`

<a id="api-906871a82eec8f1d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Dot(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 5bd5355147ed2c071b4515a3ebf708059691310fbcc7679faa754d8aa9046808 -->

```csharp
public static float Inno.Core.Mathematics.Vector3.Dot(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Calculates the scalar dot product of two values.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L151).

## `Equals`

<a id="api-c3906d2782fa4250"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Equals(Inno.Core.Mathematics.Vector3) 734019a7234cb6e98300d088fde3f02d25d3d02f67f3494bfd71f10e254e57ea -->

```csharp
public bool Inno.Core.Mathematics.Vector3.Equals(Inno.Core.Mathematics.Vector3 other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L603).

## `Equals`

<a id="api-a6cd363cccd8451d"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Equals(System.Object) 3be7997a2b80fe80b9910ae27d59e2df2bc3647545c5ae05c1446c1ae2a30213 -->

```csharp
public override bool Inno.Core.Mathematics.Vector3.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L593).

## `GetHashCode`

<a id="api-c4bdeb9871bc0e56"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.GetHashCode c9ffdc02c257ce7f80923eac353279f23bacd8ee36e723751c59a0a7d951e106 -->

```csharp
public override int Inno.Core.Mathematics.Vector3.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L610).

## `Length`

<a id="api-dc951fa133ea064b"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Length 0b1dafc56925194549e43b5cb8f07449b3b21936145e59cbbf13a7483b72ba1a -->

```csharp
public float Inno.Core.Mathematics.Vector3.Length()
```

Calculates the Euclidean magnitude of this value.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L93).

## `LengthSquared`

<a id="api-72d32e90e56c7714"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.LengthSquared 7b4910cc90c16ea327c2597dedcf9078dfb6046ffd976750e1af79df23378331 -->

```csharp
public float Inno.Core.Mathematics.Vector3.LengthSquared()
```

Calculates the squared Euclidean magnitude without a square-root operation.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L102).

## `Lerp`

<a id="api-9b6234c6362be519"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Lerp(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,System.Single) 4a2ae42ea9f24d9b96e8ec24a0e33fdbd64f2667d952bda43c06d9a60151e7b4 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Lerp(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b, float t)
```

Interpolates linearly after clamping the interpolation factor to [0, 1].

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `t`:** The interpolation factor, where zero selects the first endpoint and one selects the second.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L296).

## `NormalizeSafe`

<a id="api-119a346279439e5f"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.NormalizeSafe(Inno.Core.Mathematics.Vector3,System.Single) d449db3b953246bdb31194d90bc516af991d97482133b76c408793d8ae27e8f0 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.NormalizeSafe(Inno.Core.Mathematics.Vector3 value, float epsilon = 1E-06)
```

Returns a unit-length value while handling degenerate input according to the method contract.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L129).

## `op_Addition`

<a id="api-aeaeae24cddc6ed8"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Addition(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 066eea3f2b6e5221ca5a4d22a4f88ca819952239609a8388db3b3f8e04f9dab5 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator +(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L440).

## `op_Division`

<a id="api-85b8a34460743f2e"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Division(Inno.Core.Mathematics.Vector3,System.Single) 8019e046df7e024718808f2d21cd44841f2403d9bcfabbb43900132d1b7bda3c -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator /(Inno.Core.Mathematics.Vector3 v, float s)
```

Divides the supplied value by the scalar divisor component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by /; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L519).

## `op_Equality`

<a id="api-2007a3de2eb2a2a7"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Equality(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 4b3fe6a2bd61b47a08146314a906d95af00e7dce6fc46b7b3142684e70640ba0 -->

```csharp
public static bool Inno.Core.Mathematics.Vector3.operator ==(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L537).

## `op_Implicit`

<a id="api-baacac81a4f0f430"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Implicit(Inno.Core.Mathematics.Vector3)~System.Numerics.Vector3 629ee8caa78acef42701435d691664fa2c3899c377dd8b89f34095a9d1062d3b -->

```csharp
public static Inno.Core.Mathematics.Vector3.implicit operator System.Numerics.Vector3(Inno.Core.Mathematics.Vector3 v)
```

Converts the supplied value to `System.Numerics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated system.numerics.vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L572).

## `op_Implicit`

<a id="api-9b3a3153aa750801"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Implicit(System.Numerics.Vector3)~Inno.Core.Mathematics.Vector3 01a3c73070e34fe161c379940ebc8079c5c301b546d6f9f9f62685f97f8d7e6e -->

```csharp
public static Inno.Core.Mathematics.Vector3.implicit operator Inno.Core.Mathematics.Vector3(System.Numerics.Vector3 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector3`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L582).

## `op_Inequality`

<a id="api-189208a24c5c4ce8"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Inequality(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 76f8c3137fbebc8d78de17ee4ef302876ce6bf0e7a99899824f7e2925102078e -->

```csharp
public static bool Inno.Core.Mathematics.Vector3.operator !=(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L558).

## `op_Multiply`

<a id="api-8504d847c52ee683"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Multiply(Inno.Core.Mathematics.Vector3,System.Single) 596af461963b436504e121ec3228016edb85bae76270a99dde131f608aa6e001 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator *(Inno.Core.Mathematics.Vector3 v, float s)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L485).

## `op_Multiply`

<a id="api-1fd6f45832bc2a3b"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Multiply(System.Single,Inno.Core.Mathematics.Vector3) fe89ea61cce8fdde1602e82cb8ae3a0b713967ddd79fd84adb30354c33d55333 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator *(float s, Inno.Core.Mathematics.Vector3 v)
```

Multiplies the supplied values according to their algebraic contract.

**Parameter `s`:** The s consumed by *; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L502).

## `op_Subtraction`

<a id="api-06150a209f433d50"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_Subtraction(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) df7b83739e00fe02e3c513901efc57829cb9f22ac368e4d293fdbb612258c864 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator -(Inno.Core.Mathematics.Vector3 a, Inno.Core.Mathematics.Vector3 b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L457).

## `op_UnaryNegation`

<a id="api-428823a1b843db71"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.op_UnaryNegation(Inno.Core.Mathematics.Vector3) 915a6bef8dc902319927d374e7a8503628c883c2b2b02ccd41294767067f24df -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.operator -(Inno.Core.Mathematics.Vector3 v)
```

Subtracts or negates the supplied value component by component.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L471).

## `Project`

<a id="api-4d300ce447028c86"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Project(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) b443b636efd9d44dbf2c33e16d3e2286930cec7da91cb9afce73f4314015d5b9 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Project(Inno.Core.Mathematics.Vector3 vector, Inno.Core.Mathematics.Vector3 onto)
```

Projects the supplied value onto the requested dimensional space.

**Parameter `vector`:** The concrete value read or transformed by this operation.

**Parameter `onto`:** The onto consumed by project; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L224).

## `Reflect`

<a id="api-1c23869391162419"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Reflect(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) 9964f60571d75c57ce4961b3268c4aeebe9df98dad2ffa077592b448505648f9 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Reflect(Inno.Core.Mathematics.Vector3 dir, Inno.Core.Mathematics.Vector3 normal)
```

Reflects an incident value across the supplied normal.

**Parameter `dir`:** The dir consumed by reflect; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `normal`:** The surface normal used by the operation.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L317).

## `SignedAngle`

<a id="api-edbbf93de149223a"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.SignedAngle(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3) f7c55a47afc73d1c830f0cce2db73a86c1a237a1a802b451599205fe07128b65 -->

```csharp
public static float Inno.Core.Mathematics.Vector3.SignedAngle(Inno.Core.Mathematics.Vector3 from, Inno.Core.Mathematics.Vector3 to, Inno.Core.Mathematics.Vector3 axis)
```

Calculates the signed angle in radians from one value to another.

**Parameter `from`:** The starting value used by the operation.

**Parameter `to`:** The destination value used by the operation.

**Parameter `axis`:** The axis consumed by signed angle; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L200).

## `ToString`

<a id="api-567dc9e70ec9e69e"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.ToString a04ba0d86b20e3d828303f8a0f51cce889ef9a4d07f916e86ca2bea273f1823e -->

```csharp
public override string Inno.Core.Mathematics.Vector3.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L617).

## `Transform`

<a id="api-b45731f9e0d67b4f"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Transform(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Matrix) 5c53dfdada5050d62aaeef2f8c555a8abc068d1b0aa9ab83c682b19d5966c018 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Transform(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Matrix matrix)
```

Transforms a position as a column vector with an implicit homogeneous coordinate of one.

**Returns:** The transformed XYZ components, including translation. No perspective divide is performed.

**Parameter `position`:** The input position.

**Parameter `matrix`:** The transformation matrix applied to the supplied value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L336).

## `Transform`

<a id="api-68323e0d8b49a21e"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.Transform(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Quaternion) 33c2ffcf8b55977d24cf339b6cc22e28504c57295496b2dcd3c5aacb867c4f8b -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.Transform(Inno.Core.Mathematics.Vector3 value, Inno.Core.Mathematics.Quaternion rotation)
```

Transforms the supplied value by the requested transformation.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `rotation`:** The rotation applied to the supplied value.

**Returns:** The validated vector3 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L408).

## `TransformNormal`

<a id="api-c75d081d882f9142"></a>
<!-- api: M:Inno.Core.Mathematics.Vector3.TransformNormal(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Matrix) c05de78cb4d2d22f1b1f037585e2b0887604be86e11d01ee6b52011d71dfdf16 -->

```csharp
public static Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.TransformNormal(Inno.Core.Mathematics.Vector3 normal, Inno.Core.Mathematics.Matrix matrix)
```

Applies the matrix's upper-left 3-by-3 linear transform without translation.

**Parameter `normal`:** The surface normal used by the operation.

**Parameter `matrix`:** The transformation matrix applied to the supplied value.

**Returns:** The transformed components without normalization or an automatically computed inverse transpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L372).

## `normalized`

<a id="api-37d1a884d9c9d36d"></a>
<!-- api: P:Inno.Core.Mathematics.Vector3.normalized aacd3a77fa405ccac40563bcc45af8e100b68d894c9186ee8546f0b267bdb458 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Core.Mathematics.Vector3.normalized { get; }
```

Gets a unit-length copy, or the zero value when normalization is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Vector3.cs#L107).
