---
title: "RectInt"
description: "Reference for RectInt in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.007308c0e6d2f60e
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `RectInt`

This reference describes `RectInt` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.RectInt>`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-66916fc2a98c13e3) | Field |
| [`width`](#api-c9837666275488b5) | Field |
| [`x`](#api-c9fc87563cb12679) | Field |
| [`y`](#api-b246ca6d1616b6bb) | Field |
| [`#ctor`](#api-17820057caf3c74f) | Method |
| [`Contains`](#api-57abc34caf76d067) | Method |
| [`Contains`](#api-fffd34b8dabd7b56) | Method |
| [`Contains`](#api-8a05a6d50d422b65) | Method |
| [`Equals`](#api-11b152f992bc0af8) | Method |
| [`Equals`](#api-d0c281148ecf3a9f) | Method |
| [`FromMinMax`](#api-5cb736a0514891d9) | Method |
| [`GetHashCode`](#api-f12e321591d0239b) | Method |
| [`op_Addition`](#api-9a9371c954c4fcb2) | Method |
| [`op_Equality`](#api-5bc55bdcb0962c8e) | Method |
| [`op_Implicit`](#api-d71bff799a06c9a5) | Method |
| [`op_Implicit`](#api-05b4c64f52ddf87c) | Method |
| [`op_Implicit`](#api-fd65d6ee64e7133d) | Method |
| [`op_Implicit`](#api-e3908878465097b5) | Method |
| [`op_Inequality`](#api-48835fd4cbe6d773) | Method |
| [`op_Subtraction`](#api-c4c091b4a9174fbe) | Method |
| [`Overlaps`](#api-f0eb7ac0329369e9) | Method |
| [`ToString`](#api-cd53aabcb5cb1fc5) | Method |
| [`TryIntersect`](#api-044d48a64ecbed23) | Method |
| [`Union`](#api-a53435588913df01) | Method |
| [`bottom`](#api-f83f20006a27a25f) | Property |
| [`center`](#api-7513a435639f256c) | Property |
| [`left`](#api-e44302b0aac28a5e) | Property |
| [`max`](#api-4dca7279cc5f9df7) | Property |
| [`min`](#api-8d3dacd3c4a1e141) | Property |
| [`right`](#api-d237d9c76d1fd405) | Property |
| [`size`](#api-9dae8f578288d840) | Property |
| [`top`](#api-c49a180d2ce8c206) | Property |

## Type declaration

<a id="api-007308c0e6d2f60e"></a>
<!-- api: T:Inno.Core.Mathematics.RectInt 607d5694acd838a1745c43053ad8aac824527d2b47b1ba528b0903280d2e6b07 -->

```csharp
public struct Inno.Core.Mathematics.RectInt : System.IEquatable<Inno.Core.Mathematics.RectInt>
```

Represents an axis-aligned rectangle with integer coordinates.
Coordinates assume Y-axis points upwards (top smaller than bottom).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L11).

## `height`

<a id="api-66916fc2a98c13e3"></a>
<!-- api: F:Inno.Core.Mathematics.RectInt.height 4e9c72ade33507cf5741049f74096c4accb1dadade23f42fada343ceec798f53 -->

```csharp
public int Inno.Core.Mathematics.RectInt.height
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `width`

<a id="api-c9837666275488b5"></a>
<!-- api: F:Inno.Core.Mathematics.RectInt.width 0ee4184ee5fd0ae7fdda0c7c7214a47e97a57493e23428f71de63202cd26c35e -->

```csharp
public int Inno.Core.Mathematics.RectInt.width
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `x`

<a id="api-c9fc87563cb12679"></a>
<!-- api: F:Inno.Core.Mathematics.RectInt.x cb9e2125bd56141c7032ab3da1a73f9fff5f1257425cdf07b48ddfa75c344d59 -->

```csharp
public int Inno.Core.Mathematics.RectInt.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `y`

<a id="api-b246ca6d1616b6bb"></a>
<!-- api: F:Inno.Core.Mathematics.RectInt.y ccec2739b85942aef6d6ae4070f9de2874bb6061225aabe37bef68626541577b -->

```csharp
public int Inno.Core.Mathematics.RectInt.y
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L16).

## `#ctor`

<a id="api-17820057caf3c74f"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 7280eeaa1f4e9494647301d56ae1296072eea96733ef02fad1c22a8d44555cf1 -->

```csharp
public Inno.Core.Mathematics.RectInt.RectInt(int x, int y, int width, int height)
```

Creates a validated rect int instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L67).

## `Contains`

<a id="api-57abc34caf76d067"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Contains(Inno.Core.Mathematics.RectInt) 10f27d2695e215ff7008effd934164821cb350d337a28a698eecb81b9b015645 -->

```csharp
public bool Inno.Core.Mathematics.RectInt.Contains(Inno.Core.Mathematics.RectInt other)
```

Checks if this rectangle fully contains another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L107).

## `Contains`

<a id="api-fffd34b8dabd7b56"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Contains(Inno.Core.Mathematics.Vector2Int) 2991050359770d6605e3e5bb4f379aa1a4f278a92c65dec626aa169e30f118b1 -->

```csharp
public bool Inno.Core.Mathematics.RectInt.Contains(Inno.Core.Mathematics.Vector2Int p)
```

Determines whether current state contains the requested value value.

**Parameter `p`:** The p consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L146).

## `Contains`

<a id="api-8a05a6d50d422b65"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Contains(System.Int32,System.Int32) 2e0c1f62127a290ad39c6ac6c3172215be5a17d9650934b963f9a724a299ee7c -->

```csharp
public bool Inno.Core.Mathematics.RectInt.Contains(int px, int py)
```

Checks if this rectangle contains a point.

**Parameter `px`:** The px consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `py`:** The py consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L128).

## `Equals`

<a id="api-11b152f992bc0af8"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Equals(Inno.Core.Mathematics.RectInt) 7036ba5ca33e0e420a82a29a944f917e72157f373d6479aaea9c6e9727bb1d18 -->

```csharp
public bool Inno.Core.Mathematics.RectInt.Equals(Inno.Core.Mathematics.RectInt other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L366).

## `Equals`

<a id="api-d0c281148ecf3a9f"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Equals(System.Object) 7b987777917411bbc6832a6e4022392406a0fb97c55510dbd24d1fab20cc1a0d -->

```csharp
public override bool Inno.Core.Mathematics.RectInt.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L356).

## `FromMinMax`

<a id="api-5cb736a0514891d9"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.FromMinMax(Inno.Core.Mathematics.Vector2Int,Inno.Core.Mathematics.Vector2Int) 708a7c193199b69fcce5a9319010b5f88c2bb86fa2ae9b13efc99cd5c0047b01 -->

```csharp
public static Inno.Core.Mathematics.RectInt Inno.Core.Mathematics.RectInt.FromMinMax(Inno.Core.Mathematics.Vector2Int min, Inno.Core.Mathematics.Vector2Int max)
```

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L161).

## `GetHashCode`

<a id="api-f12e321591d0239b"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.GetHashCode a46c232e6ba4e45ccdc16c2fadf036f6d1ca3651f7e3505ba306623c7673c184 -->

```csharp
public override int Inno.Core.Mathematics.RectInt.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L373).

## `op_Addition`

<a id="api-9a9371c954c4fcb2"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Addition(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt) a179ecfb393b8365f235809c849b8a0ab43c2d89ce3e5f162be10b3328564233 -->

```csharp
public static Inno.Core.Mathematics.RectInt Inno.Core.Mathematics.RectInt.operator +(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L276).

## `op_Equality`

<a id="api-5bc55bdcb0962c8e"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Equality(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt) 5a824c9e24c6b2f3a79d8066ed6b3a5fbb124e57684850e283a7770ef432b065 -->

```csharp
public static bool Inno.Core.Mathematics.RectInt.operator ==(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L241).

## `op_Implicit`

<a id="api-d71bff799a06c9a5"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Implicit(Inno.Core.Mathematics.RectInt)~Inno.Core.Mathematics.Vector4Int 3f5147d1941331e5a5a66eb5a9f5c7aaf7758f4f847afcac13ffe60d0df00e03 -->

```csharp
public static Inno.Core.Mathematics.RectInt.implicit operator Inno.Core.Mathematics.Vector4Int(Inno.Core.Mathematics.RectInt r)
```

Converts the supplied value to `Inno.Core.Mathematics.Vector4Int`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated vector4int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L333).

## `op_Implicit`

<a id="api-05b4c64f52ddf87c"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Implicit(Inno.Core.Mathematics.RectInt)~System.Drawing.Rectangle 30dee9cc0d65ddf8dba8bcb05775e98c100794376bfcd56bc06b03a0f4d2a068 -->

```csharp
public static Inno.Core.Mathematics.RectInt.implicit operator System.Drawing.Rectangle(Inno.Core.Mathematics.RectInt r)
```

Converts the supplied value to `System.Drawing.Rectangle`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rectangle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L309).

## `op_Implicit`

<a id="api-fd65d6ee64e7133d"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Implicit(Inno.Core.Mathematics.Vector4Int)~Inno.Core.Mathematics.RectInt 38a5039ac92f608212f459a866d3eec4e7004ae7fb6852d264fbae7a74437337 -->

```csharp
public static Inno.Core.Mathematics.RectInt.implicit operator Inno.Core.Mathematics.RectInt(Inno.Core.Mathematics.Vector4Int v)
```

Converts the supplied value to `Inno.Core.Mathematics.RectInt`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L345).

## `op_Implicit`

<a id="api-e3908878465097b5"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Implicit(System.Drawing.Rectangle)~Inno.Core.Mathematics.RectInt 5f512da356904fc454cbdb595c6af0d863b51322e9cf3e67fe4bfa0708092407 -->

```csharp
public static Inno.Core.Mathematics.RectInt.implicit operator Inno.Core.Mathematics.RectInt(System.Drawing.Rectangle r)
```

Converts the supplied value to `Inno.Core.Mathematics.RectInt`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L321).

## `op_Inequality`

<a id="api-48835fd4cbe6d773"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Inequality(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt) 8b3efe56b864077f8331182b7f396c7a8582c9894b6ec0b15b76ef0d16b3dfe9 -->

```csharp
public static bool Inno.Core.Mathematics.RectInt.operator !=(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L258).

## `op_Subtraction`

<a id="api-c4c091b4a9174fbe"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.op_Subtraction(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt) 1000b5b81d7386cb3aff484ff389de416b96b9c120bc97c574d1f4078b0cc4dd -->

```csharp
public static Inno.Core.Mathematics.RectInt Inno.Core.Mathematics.RectInt.operator -(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L294).

## `Overlaps`

<a id="api-f0eb7ac0329369e9"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Overlaps(Inno.Core.Mathematics.RectInt) b6cd6471f63c5e8fee9a5c263d4e5fb0718a9dab7c58c8f7e2cedb95972f81bb -->

```csharp
public bool Inno.Core.Mathematics.RectInt.Overlaps(Inno.Core.Mathematics.RectInt other)
```

Checks if this rectangle overlaps another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L89).

## `ToString`

<a id="api-cd53aabcb5cb1fc5"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.ToString 0f62b7551f340d83fcca78613a8fe334c745487212667fe01dfdeef1de12fe9e -->

```csharp
public override string Inno.Core.Mathematics.RectInt.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L380).

## `TryIntersect`

<a id="api-044d48a64ecbed23"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.TryIntersect(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt@) 6f5bb4fc2bf89f726d67e7d21efef742ec758a511d0780c71a331a6b9e4e5c69 -->

```csharp
public static bool Inno.Core.Mathematics.RectInt.TryIntersect(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b, out Inno.Core.Mathematics.RectInt intersection)
```

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L208).

## `Union`

<a id="api-a53435588913df01"></a>
<!-- api: M:Inno.Core.Mathematics.RectInt.Union(Inno.Core.Mathematics.RectInt,Inno.Core.Mathematics.RectInt) c01f59ffd9ed32169edb90b57a46b587dfaf7e20465b302f34e5ed23f721a406 -->

```csharp
public static Inno.Core.Mathematics.RectInt Inno.Core.Mathematics.RectInt.Union(Inno.Core.Mathematics.RectInt a, Inno.Core.Mathematics.RectInt b)
```

Returns the smallest axis-aligned rectangle containing both supplied rectangles.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect int that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L181).

## `bottom`

<a id="api-f83f20006a27a25f"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.bottom 760fb6873d9e459cdf6486527b624d593cc26e2120977f14774c74b103658e31 -->

```csharp
public int Inno.Core.Mathematics.RectInt.bottom { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L33).

## `center`

<a id="api-7513a435639f256c"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.center a8c911ce63760c5f8392c67c82f10351f69a720428de27398ed38a33cdf6d383 -->

```csharp
public Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.RectInt.center { get; }
```

Gets the midpoint derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L50).

## `left`

<a id="api-e44302b0aac28a5e"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.left 20e7d8d461f050247213499b4edb840a1b52b5e54cd4af89e9f93563550d77dd -->

```csharp
public int Inno.Core.Mathematics.RectInt.left { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L21).

## `max`

<a id="api-4dca7279cc5f9df7"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.max 23308839f98377f5808996707080d08b1f602e1b474b66ba4a6f2745b6d9ccb6 -->

```csharp
public Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.RectInt.max { get; }
```

Gets the maximum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L42).

## `min`

<a id="api-8d3dacd3c4a1e141"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.min 580a2dd93b0ce6ca1713d7bdc3854357d014cf23ed2410981a16704b68dee235 -->

```csharp
public Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.RectInt.min { get; }
```

Gets the minimum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L38).

## `right`

<a id="api-d237d9c76d1fd405"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.right b8b9c1c4871e081eb3520095e5320520fd3fdc29ede2d3680b60d4b16706f264 -->

```csharp
public int Inno.Core.Mathematics.RectInt.right { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L25).

## `size`

<a id="api-9dae8f578288d840"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.size 72a0081b99f4771f4148081ca51b3eaa30ac227b70aaa9afb538a47adf77cb2e -->

```csharp
public Inno.Core.Mathematics.Vector2Int Inno.Core.Mathematics.RectInt.size { get; }
```

Gets the width and height derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L46).

## `top`

<a id="api-c49a180d2ce8c206"></a>
<!-- api: P:Inno.Core.Mathematics.RectInt.top 38f960b290ff1b0478f73120c9dd80bbc41f9ff50dbd6b63e06fec3316f18a7e -->

```csharp
public int Inno.Core.Mathematics.RectInt.top { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/RectInt.cs#L29).
