---
title: "Rect"
description: "Reference for Rect in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.runtime-script.837ff794b954b4b9
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: runtime-script
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
  - manual.scripting.use-script-api
---
# `Rect`

This reference describes `Rect` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Mathematics.Rect>`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-355c08e390fe8a2f) | Field |
| [`width`](#api-3018a2f8b301626d) | Field |
| [`x`](#api-a23b3423f5e80c55) | Field |
| [`y`](#api-2e51d4f67d0562ea) | Field |
| [`#ctor`](#api-26c4150705d06048) | Method |
| [`Contains`](#api-ed3e53b95c04fff0) | Method |
| [`Contains`](#api-5b7e32113751568e) | Method |
| [`Contains`](#api-0f7857c6d78721f9) | Method |
| [`Equals`](#api-e1ff64eb6f29be45) | Method |
| [`Equals`](#api-991c1aac2baf7cf3) | Method |
| [`FromMinMax`](#api-79971b4198f812e9) | Method |
| [`GetHashCode`](#api-85b7e11c03df2ee3) | Method |
| [`op_Addition`](#api-e183de5815324249) | Method |
| [`op_Equality`](#api-bf693164158b4dca) | Method |
| [`op_Implicit`](#api-e3c7a1af4b7f17f0) | Method |
| [`op_Implicit`](#api-971e5469ac3d0543) | Method |
| [`op_Inequality`](#api-39a17db3ed2c6bf1) | Method |
| [`op_Subtraction`](#api-c6ba6b82bb84c2f7) | Method |
| [`Overlaps`](#api-298ca3f8579325f7) | Method |
| [`ToString`](#api-d6d58ad9bfa41a90) | Method |
| [`TryIntersect`](#api-af835454d6310322) | Method |
| [`Union`](#api-2a0a0c6834b07d13) | Method |
| [`bottom`](#api-df890dda753955b6) | Property |
| [`center`](#api-4d87ea0f9c602f21) | Property |
| [`left`](#api-522326232fb6d66c) | Property |
| [`max`](#api-20b23567c74f3910) | Property |
| [`min`](#api-2c9cfbc1958e8b09) | Property |
| [`right`](#api-94f3c505610d559d) | Property |
| [`size`](#api-d59934df20c9ebc3) | Property |
| [`top`](#api-90580ea8694748e6) | Property |

## Type declaration

<a id="api-837ff794b954b4b9"></a>
<!-- api: T:InnoEngine.Mathematics.Rect 6a0f50446fa29cfae877dcb5130b6878d05664f891fb7d81f9755154a434c4e7 -->

```csharp
public struct InnoEngine.Mathematics.Rect : System.IEquatable<InnoEngine.Mathematics.Rect>
```

Represents an axis-aligned rectangle with float coordinates.
Coordinates assume Y-axis points upwards (top smaller than bottom).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L10).

## `height`

<a id="api-355c08e390fe8a2f"></a>
<!-- api: F:InnoEngine.Mathematics.Rect.height fb66f5d965f5ad5fcb9ba73b68aad9a9324bc36e494c91afb5693668691f40c4 -->

```csharp
public float InnoEngine.Mathematics.Rect.height
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `width`

<a id="api-3018a2f8b301626d"></a>
<!-- api: F:InnoEngine.Mathematics.Rect.width 5e32962097f5c41b4973ad7f237440b41ba2f041053fa4044812fc9bc0914dda -->

```csharp
public float InnoEngine.Mathematics.Rect.width
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `x`

<a id="api-a23b3423f5e80c55"></a>
<!-- api: F:InnoEngine.Mathematics.Rect.x a64b48ba626a411319d37dad65f553aa8cbd47023d0c171b9a062b19c93ff82a -->

```csharp
public float InnoEngine.Mathematics.Rect.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `y`

<a id="api-2e51d4f67d0562ea"></a>
<!-- api: F:InnoEngine.Mathematics.Rect.y 138094f1dbc537ec5f77fbe57a48948fa377dc4da93bdb8baa124ac070065f3b -->

```csharp
public float InnoEngine.Mathematics.Rect.y
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `#ctor`

<a id="api-26c4150705d06048"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.#ctor(System.Single,System.Single,System.Single,System.Single) 287f09f957a06a78a7d7bd56499161fe227592cdb4c60af8c3b02e00ecdb563f -->

```csharp
public InnoEngine.Mathematics.Rect.Rect(float x, float y, float width, float height)
```

Creates a validated rect instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L66).

## `Contains`

<a id="api-ed3e53b95c04fff0"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Contains(InnoEngine.Mathematics.Rect) 7003f75863955270fd369a7b4042792e8c855d4c97452f5a3812605a09b8eba0 -->

```csharp
public bool InnoEngine.Mathematics.Rect.Contains(InnoEngine.Mathematics.Rect other)
```

Checks if this rectangle fully contains another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L106).

## `Contains`

<a id="api-5b7e32113751568e"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Contains(InnoEngine.Mathematics.Vector2) 08bf82c1a550d91999a1130738f2cd8c8ae08d652228f62b1fb79ad1739c018e -->

```csharp
public bool InnoEngine.Mathematics.Rect.Contains(InnoEngine.Mathematics.Vector2 p)
```

Determines whether current state contains the requested value value.

**Parameter `p`:** The p consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L145).

## `Contains`

<a id="api-0f7857c6d78721f9"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Contains(System.Single,System.Single) 47d828d241675d90377441b677d478d2d7e102684396c3b002438b9ae729f15f -->

```csharp
public bool InnoEngine.Mathematics.Rect.Contains(float px, float py)
```

Checks if this rectangle contains a point.

**Parameter `px`:** The px consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `py`:** The py consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L127).

## `Equals`

<a id="api-e1ff64eb6f29be45"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Equals(InnoEngine.Mathematics.Rect) 1fbcfb583ae56a12726f570e8ca57ac23c73c11b3ab47382edebb13504551e8a -->

```csharp
public bool InnoEngine.Mathematics.Rect.Equals(InnoEngine.Mathematics.Rect other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L340).

## `Equals`

<a id="api-991c1aac2baf7cf3"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Equals(System.Object) 2436ca425713f5d317d82adfe46ba252a4915f3bf8bb73ad78042875289b7b42 -->

```csharp
public override bool InnoEngine.Mathematics.Rect.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L330).

## `FromMinMax`

<a id="api-79971b4198f812e9"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.FromMinMax(InnoEngine.Mathematics.Vector2,InnoEngine.Mathematics.Vector2) 712985e89558dd292002da2ac73b2796c803df11731766b08821b95b4d0e1693 -->

```csharp
public static InnoEngine.Mathematics.Rect InnoEngine.Mathematics.Rect.FromMinMax(InnoEngine.Mathematics.Vector2 min, InnoEngine.Mathematics.Vector2 max)
```

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L160).

## `GetHashCode`

<a id="api-85b7e11c03df2ee3"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.GetHashCode 5bf7d4023386347931c5862226d6207cd6ca58b3523dee6b8ddc8598298ed91e -->

```csharp
public override int InnoEngine.Mathematics.Rect.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L351).

## `op_Addition`

<a id="api-e183de5815324249"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Addition(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect) a64e87d9e9cc97dcb77b27e0fcadb41c97cffd3b57dc2d26d41918e08cf5bdf3 -->

```csharp
public static InnoEngine.Mathematics.Rect InnoEngine.Mathematics.Rect.operator +(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L275).

## `op_Equality`

<a id="api-bf693164158b4dca"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Equality(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect) 1a4aa4dc9b7d3d116eb2f647842738afcb23038eef30a58d481f5fed3b9e4d67 -->

```csharp
public static bool InnoEngine.Mathematics.Rect.operator ==(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L240).

## `op_Implicit`

<a id="api-e3c7a1af4b7f17f0"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Implicit(InnoEngine.Mathematics.Rect)~System.Numerics.Vector4 5328090f2d84eb6b7147a6fd6f12063784f5514d2a8e8cc2ec5a41b6b06f3ec3 -->

```csharp
public static InnoEngine.Mathematics.Rect.implicit operator System.Numerics.Vector4(InnoEngine.Mathematics.Rect r)
```

Converts the supplied value to `System.Numerics.Vector4`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated system.numerics.vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L308).

## `op_Implicit`

<a id="api-971e5469ac3d0543"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Implicit(System.Numerics.Vector4)~InnoEngine.Mathematics.Rect 86d47663b14f752fc636f01ac986c435a28dd83a42e476dd38c47328ad1546c0 -->

```csharp
public static InnoEngine.Mathematics.Rect.implicit operator InnoEngine.Mathematics.Rect(System.Numerics.Vector4 v)
```

Converts the supplied value to `InnoEngine.Mathematics.Rect`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L319).

## `op_Inequality`

<a id="api-39a17db3ed2c6bf1"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Inequality(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect) a0eba8dd7773e9f93a9077121cf66d5f6f9ab10fdea5837808ab57972ec604d3 -->

```csharp
public static bool InnoEngine.Mathematics.Rect.operator !=(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L257).

## `op_Subtraction`

<a id="api-c6ba6b82bb84c2f7"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.op_Subtraction(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect) 373e59c5c9987bcc0852362911ad5625a22e1be304b635f6a261952aea84dc3d -->

```csharp
public static InnoEngine.Mathematics.Rect InnoEngine.Mathematics.Rect.operator -(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L293).

## `Overlaps`

<a id="api-298ca3f8579325f7"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Overlaps(InnoEngine.Mathematics.Rect) e8730a37997dc42b0241b97055845288f2c3418d17ba607033b978bb905ce05c -->

```csharp
public bool InnoEngine.Mathematics.Rect.Overlaps(InnoEngine.Mathematics.Rect other)
```

Checks if this rectangle overlaps another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L88).

## `ToString`

<a id="api-d6d58ad9bfa41a90"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.ToString 299da7f74cb0353eec3cf6f2445e34ec92ba5e8210e8705e8d9552800978aa78 -->

```csharp
public override string InnoEngine.Mathematics.Rect.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L358).

## `TryIntersect`

<a id="api-af835454d6310322"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.TryIntersect(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect@) 4de52ef7b4835b37462634e2531d470afaa5a60fa3c6c962523b3dc5db64203b -->

```csharp
public static bool InnoEngine.Mathematics.Rect.TryIntersect(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b, out InnoEngine.Mathematics.Rect intersection)
```

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L207).

## `Union`

<a id="api-2a0a0c6834b07d13"></a>
<!-- api: M:InnoEngine.Mathematics.Rect.Union(InnoEngine.Mathematics.Rect,InnoEngine.Mathematics.Rect) d50d66ab22f9573dc96a7ef0402561740bc5b3216ea5dcfa0591f6c45c219303 -->

```csharp
public static InnoEngine.Mathematics.Rect InnoEngine.Mathematics.Rect.Union(InnoEngine.Mathematics.Rect a, InnoEngine.Mathematics.Rect b)
```

Returns the smallest axis-aligned rectangle containing both supplied rectangles.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L180).

## `bottom`

<a id="api-df890dda753955b6"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.bottom 62cf7f96285970bd0b9c0cd18e206d1402887c3cbd3a4acfa64f0517eb9add8c -->

```csharp
public float InnoEngine.Mathematics.Rect.bottom { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L32).

## `center`

<a id="api-4d87ea0f9c602f21"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.center be57d6cec3bae4ed27987b59c3c487263faab1bcff8dddd6d8d3a6ff3854e773 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Rect.center { get; }
```

Gets the midpoint derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L49).

## `left`

<a id="api-522326232fb6d66c"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.left 81b9d5631060e98f085274644cbc2dcc001837fbb894061e6c85d62f35d35353 -->

```csharp
public float InnoEngine.Mathematics.Rect.left { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L20).

## `max`

<a id="api-20b23567c74f3910"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.max 8a47f528c59b6db40f9211686c40bbe82f3037121145b7656f011654f72d40f8 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Rect.max { get; }
```

Gets the maximum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L41).

## `min`

<a id="api-2c9cfbc1958e8b09"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.min 2124ed5fe9763bad005a316a2534a02ede53c9e0d609d57158b63eafe8abb3a9 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Rect.min { get; }
```

Gets the minimum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L37).

## `right`

<a id="api-94f3c505610d559d"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.right 188525188138275f41314700f0510605f8ca6be2bb92534bfb6b28125a5aea05 -->

```csharp
public float InnoEngine.Mathematics.Rect.right { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L24).

## `size`

<a id="api-d59934df20c9ebc3"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.size 5e9a99cd9115b8541c402ce7afb2aec7bdc0059730419f52ce128c7084f56fa4 -->

```csharp
public InnoEngine.Mathematics.Vector2 InnoEngine.Mathematics.Rect.size { get; }
```

Gets the width and height derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L45).

## `top`

<a id="api-90580ea8694748e6"></a>
<!-- api: P:InnoEngine.Mathematics.Rect.top 2b07b9276073139cf11af4f8cbc4c8ca35381ba5feee7cb85a0839f3dc0f68ea -->

```csharp
public float InnoEngine.Mathematics.Rect.top { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L28).
