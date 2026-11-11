---
title: "Rect"
description: "Reference for Rect in Inno.Core.Mathematics."
uid: api.inno.core.mathematics.f3cacfcb50522449
kind: api
owners:
  - Inno.Core.Mathematics
apiSurface: source-clr
contracts:
  - project.inno-core-mathematics#numeric-and-layout-contract
---
# `Rect`

This reference describes `Rect` in `Inno.Core.Mathematics`. Read the [shared contract](../../projects/inno-core-mathematics.md#numeric-and-layout-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Mathematics.Rect>`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-14b2038cab68006e) | Field |
| [`width`](#api-955f7d4d673b77aa) | Field |
| [`x`](#api-17b982bd23315af6) | Field |
| [`y`](#api-8c17e21d30c9f105) | Field |
| [`#ctor`](#api-e16a4dc3a3fe767e) | Method |
| [`Contains`](#api-3b5f6436c3c40bc1) | Method |
| [`Contains`](#api-56c820f03c76318e) | Method |
| [`Contains`](#api-149b0d996eae9da1) | Method |
| [`Equals`](#api-631ab064749f19ed) | Method |
| [`Equals`](#api-2409d70fac60d524) | Method |
| [`FromMinMax`](#api-7f0e72bc7ae558b9) | Method |
| [`GetHashCode`](#api-64d7e08ba3350c08) | Method |
| [`op_Addition`](#api-7479c34cf4a9148a) | Method |
| [`op_Equality`](#api-ac8fc9672739b333) | Method |
| [`op_Implicit`](#api-632d6cdb6f2365e0) | Method |
| [`op_Implicit`](#api-7f5a82bac9b014a8) | Method |
| [`op_Inequality`](#api-180118853a33ca89) | Method |
| [`op_Subtraction`](#api-97080980fbb7b9fc) | Method |
| [`Overlaps`](#api-b741914708d38f21) | Method |
| [`ToString`](#api-f621cad0547e4dc0) | Method |
| [`TryIntersect`](#api-94838d3ea2ba3808) | Method |
| [`Union`](#api-b4a6672fbaa24879) | Method |
| [`bottom`](#api-fe14c492aba40eb5) | Property |
| [`center`](#api-1c8bac3f99de44f0) | Property |
| [`left`](#api-6607beef75c97303) | Property |
| [`max`](#api-f87ea5c1410c1aa6) | Property |
| [`min`](#api-9b5ae352a2574b09) | Property |
| [`right`](#api-227be096e5c39767) | Property |
| [`size`](#api-31f70500bdd79b6e) | Property |
| [`top`](#api-e0a4b9aa634c932f) | Property |

## Type declaration

<a id="api-f3cacfcb50522449"></a>
<!-- api: T:Inno.Core.Mathematics.Rect 2c8aab215b9c8f41b0ed27d8012d2928bf4775ef7315f11ec256fe5e24fc2d77 -->

```csharp
public struct Inno.Core.Mathematics.Rect : System.IEquatable<Inno.Core.Mathematics.Rect>
```

Represents an axis-aligned rectangle with float coordinates.
Coordinates assume Y-axis points upwards (top smaller than bottom).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L10).

## `height`

<a id="api-14b2038cab68006e"></a>
<!-- api: F:Inno.Core.Mathematics.Rect.height 458cda7747a97e60c5560813d6cf48a8faa4f5503591c7c1837a508bf4832c27 -->

```csharp
public float Inno.Core.Mathematics.Rect.height
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `width`

<a id="api-955f7d4d673b77aa"></a>
<!-- api: F:Inno.Core.Mathematics.Rect.width 863f601206d597fea80bcae0b0aac31c255f6c675e478711fb5bcfa46625157c -->

```csharp
public float Inno.Core.Mathematics.Rect.width
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `x`

<a id="api-17b982bd23315af6"></a>
<!-- api: F:Inno.Core.Mathematics.Rect.x 39bf3a250dd4bd5c1d1aed053d599b5e9437b95c4e02ce36cea7935d34c5fbe9 -->

```csharp
public float Inno.Core.Mathematics.Rect.x
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `y`

<a id="api-8c17e21d30c9f105"></a>
<!-- api: F:Inno.Core.Mathematics.Rect.y 7fbd953a037bece9de76085e57eb29c37e3a56fdf1020a816d9eca9b2743b948 -->

```csharp
public float Inno.Core.Mathematics.Rect.y
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L15).

## `#ctor`

<a id="api-e16a4dc3a3fe767e"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.#ctor(System.Single,System.Single,System.Single,System.Single) 6d46c16006eb954aeb8608b9215a66a1a25ed7de9609e5e48cff00527ce1f7d0 -->

```csharp
public Inno.Core.Mathematics.Rect.Rect(float x, float y, float width, float height)
```

Creates a validated rect instance.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L66).

## `Contains`

<a id="api-3b5f6436c3c40bc1"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Contains(Inno.Core.Mathematics.Rect) d09d8b297dbb61855c4f2080aeefb8d9311afedf911a8f47c0e83091da9a5fbd -->

```csharp
public bool Inno.Core.Mathematics.Rect.Contains(Inno.Core.Mathematics.Rect other)
```

Checks if this rectangle fully contains another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L106).

## `Contains`

<a id="api-56c820f03c76318e"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Contains(Inno.Core.Mathematics.Vector2) c3b02f7bd6251c159521ed862092b5287c7de518ec4c1fd4a8253fb36764b1e1 -->

```csharp
public bool Inno.Core.Mathematics.Rect.Contains(Inno.Core.Mathematics.Vector2 p)
```

Determines whether current state contains the requested value value.

**Parameter `p`:** The p consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L145).

## `Contains`

<a id="api-149b0d996eae9da1"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Contains(System.Single,System.Single) cf6ee76f68ea0bc541b3ebea75a239e1abdc95b2d7884a46f071fc3a3f58d5ea -->

```csharp
public bool Inno.Core.Mathematics.Rect.Contains(float px, float py)
```

Checks if this rectangle contains a point.

**Parameter `px`:** The px consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `py`:** The py consumed by contains; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L127).

## `Equals`

<a id="api-631ab064749f19ed"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Equals(Inno.Core.Mathematics.Rect) d78006a4a706393e4aa8e3a5b27f75f417622426fe9a639c0e9b60b023ea77c9 -->

```csharp
public bool Inno.Core.Mathematics.Rect.Equals(Inno.Core.Mathematics.Rect other)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `other`:** The strongly typed value compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L340).

## `Equals`

<a id="api-2409d70fac60d524"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Equals(System.Object) 70173d109d151bac21826c62bacba27bb51f1561a2fd590d596f46374ee2baba -->

```csharp
public override bool Inno.Core.Mathematics.Rect.Equals(object? obj)
```

Determines whether this value and the supplied value represent the same logical state.

**Parameter `obj`:** The object compared with this value.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L330).

## `FromMinMax`

<a id="api-7f0e72bc7ae558b9"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.FromMinMax(Inno.Core.Mathematics.Vector2,Inno.Core.Mathematics.Vector2) 15b1b090bb1b9026d1b169ed2d089163ab24f731a796d5a5647c9e3f625672a7 -->

```csharp
public static Inno.Core.Mathematics.Rect Inno.Core.Mathematics.Rect.FromMinMax(Inno.Core.Mathematics.Vector2 min, Inno.Core.Mathematics.Vector2 max)
```

Creates a rectangle from minimum and maximum boundaries; point containment excludes the maximum boundary.

**Parameter `min`:** The min consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `max`:** The max consumed by from min max; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L160).

## `GetHashCode`

<a id="api-64d7e08ba3350c08"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.GetHashCode 754cc67fb30952a4480ba000da93cd859b684ca37f4ef4360a686cf22a456b4f -->

```csharp
public override int Inno.Core.Mathematics.Rect.GetHashCode()
```

Computes a hash code consistent with the implemented equality contract.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L351).

## `op_Addition`

<a id="api-7479c34cf4a9148a"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Addition(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect) 394d35ef1523b29d42b280227c2cd966bdca4b6903fb48321c41b9397f0abc79 -->

```csharp
public static Inno.Core.Mathematics.Rect Inno.Core.Mathematics.Rect.operator +(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b)
```

Adds the supplied values component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L275).

## `op_Equality`

<a id="api-ac8fc9672739b333"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Equality(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect) fecf8f4210776e4d7acffe12e9adcd4ae780b15970f6854a879a8740dab84790 -->

```csharp
public static bool Inno.Core.Mathematics.Rect.operator ==(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b)
```

Determines whether the supplied values are equal under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L240).

## `op_Implicit`

<a id="api-632d6cdb6f2365e0"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Implicit(Inno.Core.Mathematics.Rect)~System.Numerics.Vector4 3a0c1f5904698e0b32fc706c94579106bd2eeb6fd84b3f7da1f214ba4628d939 -->

```csharp
public static Inno.Core.Mathematics.Rect.implicit operator System.Numerics.Vector4(Inno.Core.Mathematics.Rect r)
```

Converts the supplied value to `System.Numerics.Vector4`.

**Parameter `r`:** The r consumed by convert; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated system.numerics.vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L308).

## `op_Implicit`

<a id="api-7f5a82bac9b014a8"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Implicit(System.Numerics.Vector4)~Inno.Core.Mathematics.Rect c8405fc88004df4205ef101d5d4fbabfad9c437d9787b117e96081048637e335 -->

```csharp
public static Inno.Core.Mathematics.Rect.implicit operator Inno.Core.Mathematics.Rect(System.Numerics.Vector4 v)
```

Converts the supplied value to `Inno.Core.Mathematics.Rect`.

**Parameter `v`:** The concrete value read or transformed by this operation.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L319).

## `op_Inequality`

<a id="api-180118853a33ca89"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Inequality(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect) 9fbe91f217ece34b1b156978764111a9996bacd5a82046caa61ed30875096f3c -->

```csharp
public static bool Inno.Core.Mathematics.Rect.operator !=(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b)
```

Determines whether the supplied values differ under the type's equality tolerance.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L257).

## `op_Subtraction`

<a id="api-97080980fbb7b9fc"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.op_Subtraction(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect) 2ec5fcd8a38489e98f5645e4f8d2c58f7fd631b8868d66a94f8a4e0a2a3265cf -->

```csharp
public static Inno.Core.Mathematics.Rect Inno.Core.Mathematics.Rect.operator -(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b)
```

Subtracts or negates the supplied value component by component.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L293).

## `Overlaps`

<a id="api-b741914708d38f21"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Overlaps(Inno.Core.Mathematics.Rect) f23c5d2129d7648b37b0b07c1e5efbe8220095f2e5fdea0644fc94788ac56e6a -->

```csharp
public bool Inno.Core.Mathematics.Rect.Overlaps(Inno.Core.Mathematics.Rect other)
```

Checks if this rectangle overlaps another rectangle.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L88).

## `ToString`

<a id="api-f621cad0547e4dc0"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.ToString f4d95a8910df3b65c1816f135f0afe0e284f14c9048eb0249695da316e5e05bb -->

```csharp
public override string Inno.Core.Mathematics.Rect.ToString()
```

Formats this value as a human-readable component list.

**Returns:** The validated text representation owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L358).

## `TryIntersect`

<a id="api-94838d3ea2ba3808"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.TryIntersect(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect@) 9d9cde7b2d23a171e62d4c94298de7751bbffa24d983b299270f660d25ae0792 -->

```csharp
public static bool Inno.Core.Mathematics.Rect.TryIntersect(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b, out Inno.Core.Mathematics.Rect intersection)
```

Attempts to intersect without changing state when the operation cannot complete.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Parameter `intersection`:** The intersection consumed by try intersect; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L207).

## `Union`

<a id="api-b4a6672fbaa24879"></a>
<!-- api: M:Inno.Core.Mathematics.Rect.Union(Inno.Core.Mathematics.Rect,Inno.Core.Mathematics.Rect) 1b21e69038d9cd74797d6e7cd2066f6cf639eb389495b86f0a8a0ead65d3347a -->

```csharp
public static Inno.Core.Mathematics.Rect Inno.Core.Mathematics.Rect.Union(Inno.Core.Mathematics.Rect a, Inno.Core.Mathematics.Rect b)
```

Returns the smallest axis-aligned rectangle containing both supplied rectangles.

**Parameter `a`:** The first operand or interpolation endpoint.

**Parameter `b`:** The second operand or interpolation endpoint.

**Returns:** The validated rect that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L180).

## `bottom`

<a id="api-fe14c492aba40eb5"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.bottom c43bfb5769ebafcd9615b964704e1c641d076b1223838ffb5735e56e99cbb867 -->

```csharp
public float Inno.Core.Mathematics.Rect.bottom { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L32).

## `center`

<a id="api-1c8bac3f99de44f0"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.center 89132e5892d0d6bef1705446b892b24419f84b1d5f6160302dcb2872c40e9c62 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Rect.center { get; }
```

Gets the midpoint derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L49).

## `left`

<a id="api-6607beef75c97303"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.left 12b5a9625fbe5ad55d18110f2d15c08c0d7bfa046d46763e15fdd85f2739ccbe -->

```csharp
public float Inno.Core.Mathematics.Rect.left { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L20).

## `max`

<a id="api-f87ea5c1410c1aa6"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.max e747cc9d81dde4cd71a4ec92d944e6b957179c6028f6b2e6eb629a23dddd8011 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Rect.max { get; }
```

Gets the maximum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L41).

## `min`

<a id="api-9b5ae352a2574b09"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.min 53e8403b8d35c6175148c22357be413bab1cfc71313282330cd118ce03105600 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Rect.min { get; }
```

Gets the minimum corner of this axis-aligned rectangle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L37).

## `right`

<a id="api-227be096e5c39767"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.right 253b1b6028ab06e5b9f983db9e166eb433e2a310ea3a3a4ace45b949c90691aa -->

```csharp
public float Inno.Core.Mathematics.Rect.right { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L24).

## `size`

<a id="api-31f70500bdd79b6e"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.size ec05e99a3cf055015e705cdfd873582ef2236f4e02b22c8e42b000809e1e7836 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Core.Mathematics.Rect.size { get; }
```

Gets the width and height derived from the rectangle bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L45).

## `top`

<a id="api-e0a4b9aa634c932f"></a>
<!-- api: P:Inno.Core.Mathematics.Rect.top 0c7489122da2b68fbeec923bb57e243b028b632316220a06dc8e351b37fb2156 -->

```csharp
public float Inno.Core.Mathematics.Rect.top { get; }
```

Gets the scalar measurement or identity associated with the current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Mathematics/Rect.cs#L28).
