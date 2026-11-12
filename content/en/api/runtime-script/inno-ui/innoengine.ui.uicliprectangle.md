---
title: "UiClipRectangle"
description: "Reference for UiClipRectangle in Inno.UI."
uid: api.inno.ui.runtime-script.17ac7ae116c0258c
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiClipRectangle`

This reference describes `UiClipRectangle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiClipRectangle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1fee3887374d5248) | Method |
| [`Deconstruct`](#api-8a51b2930c546ed0) | Method |
| [`Equals`](#api-466e93cb0f011469) | Method |
| [`Equals`](#api-7ae34c88a45dca78) | Method |
| [`GetHashCode`](#api-ad05402936f420e6) | Method |
| [`op_Equality`](#api-9dcc32dc507157cc) | Method |
| [`op_Inequality`](#api-6dd3f5df0288c337) | Method |
| [`ToString`](#api-f76fbc6ffa9a030c) | Method |
| [`height`](#api-d74f04857338995c) | Property |
| [`width`](#api-7dabc511347146e5) | Property |
| [`x`](#api-e9d0201fff982f69) | Property |
| [`y`](#api-080f148eaa5f8b49) | Property |

## Type declaration

<a id="api-17ac7ae116c0258c"></a>
<!-- api: T:InnoEngine.UI.UiClipRectangle cbe569a219a99090e2bcdc0403ada9f73b9b0ef4883998531da12eb61bad2472 -->

```csharp
public readonly struct InnoEngine.UI.UiClipRectangle : System.IEquatable<InnoEngine.UI.UiClipRectangle>
```

Defines an integer clipping rectangle in UI surface coordinates.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `#ctor`

<a id="api-1fee3887374d5248"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) bf39e4debd9098abda4ab8376cb2c5430fdefd855c4c5ccd5485563e62aec956 -->

```csharp
public InnoEngine.UI.UiClipRectangle.UiClipRectangle(int x, int y, int width, int height)
```

Defines an integer clipping rectangle in UI surface coordinates.

**Parameter `x`:** The horizontal or first component.

**Parameter `y`:** The vertical or second component.

**Parameter `width`:** The width in logical units or pixels required by this operation.

**Parameter `height`:** The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Deconstruct`

<a id="api-8a51b2930c546ed0"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.Deconstruct(System.Int32@,System.Int32@,System.Int32@,System.Int32@) 67789b12550192a9816a3a3a751b3248a2237895aa61013615f32c1d9da66816 -->

```csharp
public void InnoEngine.UI.UiClipRectangle.Deconstruct(out int x, out int y, out int width, out int height)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Equals`

<a id="api-466e93cb0f011469"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.Equals(InnoEngine.UI.UiClipRectangle) f457b6a024b2b845069ef45dff14183bd50c4a8b922c7e7ef2014b676debda1e -->

```csharp
public bool InnoEngine.UI.UiClipRectangle.Equals(InnoEngine.UI.UiClipRectangle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `Equals`

<a id="api-7ae34c88a45dca78"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.Equals(System.Object) 569722ed9e21982c5fecfa76f0b8a7c126af55cf19190b49abe03cd3703995f0 -->

```csharp
public override bool InnoEngine.UI.UiClipRectangle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `GetHashCode`

<a id="api-ad05402936f420e6"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.GetHashCode 408bf58d0f3dc752fc4a7799b197b146aa8c688e8a6432a54b3a79194b27520e -->

```csharp
public override int InnoEngine.UI.UiClipRectangle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `op_Equality`

<a id="api-9dcc32dc507157cc"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.op_Equality(InnoEngine.UI.UiClipRectangle,InnoEngine.UI.UiClipRectangle) b05e2b8262c2ed8552afce53a3131e8a92d5a86a78d960efa93c57fd5d3ad84b -->

```csharp
public static bool InnoEngine.UI.UiClipRectangle.operator ==(InnoEngine.UI.UiClipRectangle left, InnoEngine.UI.UiClipRectangle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `op_Inequality`

<a id="api-6dd3f5df0288c337"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.op_Inequality(InnoEngine.UI.UiClipRectangle,InnoEngine.UI.UiClipRectangle) 2d652f77842c9bc607d7b07b10715edffdbc6f796ed03fe132c8afb59ec981dc -->

```csharp
public static bool InnoEngine.UI.UiClipRectangle.operator !=(InnoEngine.UI.UiClipRectangle left, InnoEngine.UI.UiClipRectangle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `ToString`

<a id="api-f76fbc6ffa9a030c"></a>
<!-- api: M:InnoEngine.UI.UiClipRectangle.ToString 59f55729ef38a2647ebf19f6d2a325085a9a62c07d29388b5264e10dcf65eb01 -->

```csharp
public override string InnoEngine.UI.UiClipRectangle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L48).

## `height`

<a id="api-d74f04857338995c"></a>
<!-- api: P:InnoEngine.UI.UiClipRectangle.height 334b0fdfc638a5ab4909262e9e0960c9d28678d1fa1efedc7b757f7dc5983182 -->

```csharp
public int InnoEngine.UI.UiClipRectangle.height { get; set; }
```

The height in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L52).

## `width`

<a id="api-7dabc511347146e5"></a>
<!-- api: P:InnoEngine.UI.UiClipRectangle.width 63c612b950dd66b1421629e852bb250510ed37f4a1ad29af957b59ffbf4a8c22 -->

```csharp
public int InnoEngine.UI.UiClipRectangle.width { get; set; }
```

The width in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L51).

## `x`

<a id="api-e9d0201fff982f69"></a>
<!-- api: P:InnoEngine.UI.UiClipRectangle.x 1fbb9ee3bbb3ee25183cd10f7330b3a7172cec491a0f84fd457f46285a9f1939 -->

```csharp
public int InnoEngine.UI.UiClipRectangle.x { get; set; }
```

The horizontal or first component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L49).

## `y`

<a id="api-080f148eaa5f8b49"></a>
<!-- api: P:InnoEngine.UI.UiClipRectangle.y 6ce7746f721b6e4eba92a67babdf3b4f14c2ec818a45f6a4685484e713cff762 -->

```csharp
public int InnoEngine.UI.UiClipRectangle.y { get; set; }
```

The vertical or second component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L50).
