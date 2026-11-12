---
title: "RectInt"
description: "Reference for RectInt in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.714c86bf9813e769
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `RectInt`

This reference describes `RectInt` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.RectInt>`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-376194d6b819b995) | Field |
| [`width`](#api-f7a49c1307092288) | Field |
| [`x`](#api-061c55c0883440d4) | Field |
| [`y`](#api-5b9e895697408ff9) | Field |
| [`#ctor`](#api-9d63bfbcac47b21d) | Method |
| [`Contains`](#api-5420a08dd326e44e) | Method |
| [`Contains`](#api-5abf7adfd2cd02e4) | Method |
| [`Contains`](#api-d8f48ec7968faadd) | Method |
| [`Equals`](#api-e4e7709b0a7e16d5) | Method |
| [`Equals`](#api-19449a6dc988eee3) | Method |
| [`FromMinMax`](#api-f2f46b2dfbd56f1c) | Method |
| [`GetHashCode`](#api-07a750f7f6f78e5b) | Method |
| [`op_Addition`](#api-06da71ca2454bda5) | Method |
| [`op_Equality`](#api-ab82861d1fe73757) | Method |
| [`op_Implicit`](#api-02f9108f7d0adc23) | Method |
| [`op_Implicit`](#api-0650848d75956b11) | Method |
| [`op_Implicit`](#api-96b4371f96c767f6) | Method |
| [`op_Implicit`](#api-9ff8c28f13e073e7) | Method |
| [`op_Inequality`](#api-59094797e1af7e9f) | Method |
| [`op_Subtraction`](#api-09bba85227d31150) | Method |
| [`Overlaps`](#api-bd85261a4462361a) | Method |
| [`ToString`](#api-371b6b2267df0149) | Method |
| [`TryIntersect`](#api-655c5b6c86358beb) | Method |
| [`Union`](#api-ecd2c9a410d1f849) | Method |
| [`bottom`](#api-e5f4a43378f5fe9f) | Property |
| [`center`](#api-5e8ef8f65afa6585) | Property |
| [`left`](#api-ab109af09f2d280c) | Property |
| [`max`](#api-993d5c95b29d94b6) | Property |
| [`min`](#api-8c0e8529665925f2) | Property |
| [`right`](#api-6fa221b8a3f98827) | Property |
| [`size`](#api-8b86d71ff35c6d6a) | Property |
| [`top`](#api-6cd36aea0af1a6de) | Property |

## Type declaration

<a id="api-714c86bf9813e769"></a>
<!-- api: T:InnoEngine.Mathematics.RectInt 7e343988c9cb5e8dfda4bc0e5887a32082645d8d7188a63b432794e52841e5ed -->

```csharp
public struct InnoEngine.Mathematics.RectInt : System.IEquatable<InnoEngine.Mathematics.RectInt>
```

Represents an axis-aligned rectangle with integer coordinates.
Coordinates assume Y-axis points upwards (top smaller than bottom).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L11).

## `height`

<a id="api-376194d6b819b995"></a>
<!-- api: F:InnoEngine.Mathematics.RectInt.height ae58f60519db8d78e415df4e5b498113cc9c87e665b27ceaa062e67230768d65 -->

```csharp
public int InnoEngine.Mathematics.RectInt.height
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `width`

<a id="api-f7a49c1307092288"></a>
<!-- api: F:InnoEngine.Mathematics.RectInt.width 6a5934364432fd55a0a9bdd9bbe8dfb539a7113b49a0b0d4f5b05e5d85175e66 -->

```csharp
public int InnoEngine.Mathematics.RectInt.width
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `x`

<a id="api-061c55c0883440d4"></a>
<!-- api: F:InnoEngine.Mathematics.RectInt.x 7845efacac3a5c006d81a48687497a7774291444006a1e009d37ddf503bbb800 -->

```csharp
public int InnoEngine.Mathematics.RectInt.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `y`

<a id="api-5b9e895697408ff9"></a>
<!-- api: F:InnoEngine.Mathematics.RectInt.y 585120473e82abf024b431c6a33de33a772a61f4e7795459a8222d1fda837800 -->

```csharp
public int InnoEngine.Mathematics.RectInt.y
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `#ctor`

<a id="api-9d63bfbcac47b21d"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) ad68e6095d8e1b5f7514aff3148acea6d7e5311b76a21392813f195912ca8a74 -->

```csharp
public InnoEngine.Mathematics.RectInt.RectInt(int x, int y, int width, int height)
```

Creates a validated rect int instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L67).

## `Contains`

<a id="api-5420a08dd326e44e"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Contains(InnoEngine.Mathematics.RectInt) a9b13f671512abedda916c936f11d0f0bfb64238d40f51cb53a21fda1a79b26d -->

```csharp
public bool InnoEngine.Mathematics.RectInt.Contains(InnoEngine.Mathematics.RectInt other)
```

Checks if this rectangle fully contains another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L107).

## `Contains`

<a id="api-5abf7adfd2cd02e4"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Contains(InnoEngine.Mathematics.Vector2Int) b89b40f781d3ceae108dc770ebeca1b2647a24a0687f60097b0abebfa5ffea20 -->

```csharp
public bool InnoEngine.Mathematics.RectInt.Contains(InnoEngine.Mathematics.Vector2Int p)
```

Determines whether current state contains the requested value value.

**Parameter `p`:** The p consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L146).

## `Contains`

<a id="api-d8f48ec7968faadd"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Contains(System.Int32,System.Int32) d471863dc7623644869faf4c0e6a92f9368fe51f26621ee8eb4820372f4dfe0c -->

```csharp
public bool InnoEngine.Mathematics.RectInt.Contains(int px, int py)
```

Checks if this rectangle contains a point.

**Parameter `px`:** The px consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `py`:** The py consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L128).

## `Equals`

<a id="api-e4e7709b0a7e16d5"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Equals(InnoEngine.Mathematics.RectInt) 01ef630b28bbb823f4c98aaf3c40280ae0b9a0a852a5c485dcf0f3de33155bec -->

```csharp
public bool InnoEngine.Mathematics.RectInt.Equals(InnoEngine.Mathematics.RectInt other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L366).

## `Equals`

<a id="api-19449a6dc988eee3"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Equals(System.Object) 45adca32c23be9cc694dbc5ee8b9ffd1e5653226c34edc7515fe5b6812c2671c -->

```csharp
public override bool InnoEngine.Mathematics.RectInt.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L356).

## `FromMinMax`

<a id="api-f2f46b2dfbd56f1c"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.FromMinMax(InnoEngine.Mathematics.Vector2Int,InnoEngine.Mathematics.Vector2Int) 5ca29897a62c5bbcb3a4bf756d7784b06380d0386893a8c44af443f33d480877 -->

```csharp
public static InnoEngine.Mathematics.RectInt InnoEngine.Mathematics.RectInt.FromMinMax(InnoEngine.Mathematics.Vector2Int min, InnoEngine.Mathematics.Vector2Int max)
```

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L161).

## `GetHashCode`

<a id="api-07a750f7f6f78e5b"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.GetHashCode 37d33114842e64eabb3c6d58c18799ab23b2b4d3872b17fee232856cf462b65b -->

```csharp
public override int InnoEngine.Mathematics.RectInt.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L373).

## `op_Addition`

<a id="api-06da71ca2454bda5"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Addition(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt) 798bd136136f5ecfb34cf90b2f3d0e012a6e7be5d27a9c11296d06510861d416 -->

```csharp
public static InnoEngine.Mathematics.RectInt InnoEngine.Mathematics.RectInt.operator +(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L276).

## `op_Equality`

<a id="api-ab82861d1fe73757"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Equality(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt) 32372d27d56df3c0ad1f534090e2a7505aaa4928730127f0c15431e30f6ff900 -->

```csharp
public static bool InnoEngine.Mathematics.RectInt.operator ==(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L241).

## `op_Implicit`

<a id="api-02f9108f7d0adc23"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Implicit(InnoEngine.Mathematics.RectInt)~InnoEngine.Mathematics.Vector4Int 91b2e9c6ab1e879bd1564a051b3a68a05c46a167dc5f1ba8a06346328749bff9 -->

```csharp
public static InnoEngine.Mathematics.RectInt.implicit operator InnoEngine.Mathematics.Vector4Int(InnoEngine.Mathematics.RectInt r)
```

Converts the supplied value to `InnoEngine.Mathematics.Vector4Int`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L333).

## `op_Implicit`

<a id="api-0650848d75956b11"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Implicit(InnoEngine.Mathematics.RectInt)~System.Drawing.Rectangle 557d07aae74dc137162d10746b0bb06dd0a95cf73aff169e97a81598627608f2 -->

```csharp
public static InnoEngine.Mathematics.RectInt.implicit operator System.Drawing.Rectangle(InnoEngine.Mathematics.RectInt r)
```

Converts the supplied value to `System.Drawing.Rectangle`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rectangle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L309).

## `op_Implicit`

<a id="api-96b4371f96c767f6"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Implicit(InnoEngine.Mathematics.Vector4Int)~InnoEngine.Mathematics.RectInt debdebcb9ff618abea2f0b5284d24ff9ccb5a7b145b40ac7b78e93ad492dec6f -->

```csharp
public static InnoEngine.Mathematics.RectInt.implicit operator InnoEngine.Mathematics.RectInt(InnoEngine.Mathematics.Vector4Int v)
```

Converts the supplied value to `InnoEngine.Mathematics.RectInt`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L345).

## `op_Implicit`

<a id="api-9ff8c28f13e073e7"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Implicit(System.Drawing.Rectangle)~InnoEngine.Mathematics.RectInt 19645c2e56d2c7c194c06c443b93c1aaba49d3a7a9dd682796369bf1a5d11e2f -->

```csharp
public static InnoEngine.Mathematics.RectInt.implicit operator InnoEngine.Mathematics.RectInt(System.Drawing.Rectangle r)
```

Converts the supplied value to `InnoEngine.Mathematics.RectInt`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L321).

## `op_Inequality`

<a id="api-59094797e1af7e9f"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Inequality(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt) 823188cb109086c9abff71ce3cfad07b344873b713268768db5b3ca5cdfbc974 -->

```csharp
public static bool InnoEngine.Mathematics.RectInt.operator !=(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L258).

## `op_Subtraction`

<a id="api-09bba85227d31150"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.op_Subtraction(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt) 061dc426e1c861acbccd9b86344b490a4cf3409853c6fde49f88775846b29439 -->

```csharp
public static InnoEngine.Mathematics.RectInt InnoEngine.Mathematics.RectInt.operator -(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L294).

## `Overlaps`

<a id="api-bd85261a4462361a"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Overlaps(InnoEngine.Mathematics.RectInt) 172386b8ae8d2f8a9df615795f4afedda7f6157ccfa68dad48b191b3e6f34ee0 -->

```csharp
public bool InnoEngine.Mathematics.RectInt.Overlaps(InnoEngine.Mathematics.RectInt other)
```

Checks if this rectangle overlaps another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L89).

## `ToString`

<a id="api-371b6b2267df0149"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.ToString d1a93dda7626126a2c6d3c8a3428ebbc29be530f612916eaa7bbbc184a8c9f07 -->

```csharp
public override string InnoEngine.Mathematics.RectInt.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L380).

## `TryIntersect`

<a id="api-655c5b6c86358beb"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.TryIntersect(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt@) 47100a905c02d8e7fd9a74060a7c62787a5cff0904680d23ad70abbafbe6e91a -->

```csharp
public static bool InnoEngine.Mathematics.RectInt.TryIntersect(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b, out InnoEngine.Mathematics.RectInt intersection)
```

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L208).

## `Union`

<a id="api-ecd2c9a410d1f849"></a>
<!-- api: M:InnoEngine.Mathematics.RectInt.Union(InnoEngine.Mathematics.RectInt,InnoEngine.Mathematics.RectInt) 0714091956932d33b434f22ab4b592680df8236bcfa1855fa3178d0e437bc53d -->

```csharp
public static InnoEngine.Mathematics.RectInt InnoEngine.Mathematics.RectInt.Union(InnoEngine.Mathematics.RectInt a, InnoEngine.Mathematics.RectInt b)
```

Returns the smallest axis-aligned rectangle containing both supplied rectangles.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L181).

## `bottom`

<a id="api-e5f4a43378f5fe9f"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.bottom 3cd84e4cc2ffe14c720809e69b41a62bef77e3c192a89bfcc8f3378eaf942049 -->

```csharp
public int InnoEngine.Mathematics.RectInt.bottom { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L33).

## `center`

<a id="api-5e8ef8f65afa6585"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.center b136ac4382869ba8167f805241211d5154b6ebd939c395c4a70e4f2f3588340a -->

```csharp
public InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.RectInt.center { get; }
```

Gets the midpoint derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L50).

## `left`

<a id="api-ab109af09f2d280c"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.left 6dad96f5e527ee4144cfd568a448facc3049ace7d6dfc22b456b48523070d27a -->

```csharp
public int InnoEngine.Mathematics.RectInt.left { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L21).

## `max`

<a id="api-993d5c95b29d94b6"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.max 6f1c44c74bcdae7fc1c595faf7026251c798585033a4a257efd3475f73850d1c -->

```csharp
public InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.RectInt.max { get; }
```

Gets the maximum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L42).

## `min`

<a id="api-8c0e8529665925f2"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.min 15c34e92ed52bb9649fa591c20a2e5b29970af4ecffd8e507145d1a3e051ab24 -->

```csharp
public InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.RectInt.min { get; }
```

Gets the minimum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L38).

## `right`

<a id="api-6fa221b8a3f98827"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.right 7ecef16364ff60fdb1ab5e107eb0189edd837a3728ecdf97ffc573bfb83c1c46 -->

```csharp
public int InnoEngine.Mathematics.RectInt.right { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L25).

## `size`

<a id="api-8b86d71ff35c6d6a"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.size 5439003e30e69c34f2d80cd1c091a01466a1072ee35e47c8f192572f01a4464e -->

```csharp
public InnoEngine.Mathematics.Vector2Int InnoEngine.Mathematics.RectInt.size { get; }
```

Gets the width and height derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L46).

## `top`

<a id="api-6cd36aea0af1a6de"></a>
<!-- api: P:InnoEngine.Mathematics.RectInt.top 934122a398bb2c4831213c276f20c582334db9382b83c25682fded79b7c81f78 -->

```csharp
public int InnoEngine.Mathematics.RectInt.top { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L29).
