---
title: "TextStyle"
description: "Reference for TextStyle in Inno.Text."
uid: api.inno.text.db35d5629057cf0a
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextStyle`

This reference describes `TextStyle` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.TextStyle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b74ac912f5552ad3) | Method |
| [`Equals`](#api-d596f6f4b47209f1) | Method |
| [`Equals`](#api-e35d82ee18357862) | Method |
| [`GetHashCode`](#api-736f18cba32326f1) | Method |
| [`op_Equality`](#api-5efc7c044a2e0c0d) | Method |
| [`op_Inequality`](#api-3177f10e6b02ed07) | Method |
| [`ToString`](#api-b1df1eace3d973b5) | Method |
| [`defaultValue`](#api-ed7e0152e7276ad6) | Property |
| [`faceIndex`](#api-395a1ebfe5aa4205) | Property |
| [`fontSize`](#api-e30b5da5ba9a5a13) | Property |
| [`letterSpacing`](#api-4bd17a5f70742eb3) | Property |
| [`style`](#api-7b58043b1c14327c) | Property |
| [`weight`](#api-ff725b231f55caa9) | Property |

## Type declaration

<a id="api-db35d5629057cf0a"></a>
<!-- api: T:Inno.Text.TextStyle 59dc665fcb01addc4ea6d15f9005eb5904a0c4d2d9449d90aa94d8bfc82e1128 -->

```csharp
public readonly record struct Inno.Text.TextStyle : System.IEquatable<Inno.Text.TextStyle>
```

Defines immutable font selection and sizing for one shaping operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `#ctor`

<a id="api-b74ac912f5552ad3"></a>
<!-- api: M:Inno.Text.TextStyle.#ctor(System.Single,System.Int32,System.Int32,Inno.Text.TextFontStyle,System.Single) 7ec5c4ae2914487d1d15b3a2441c2deda562a85de02bc9ea7633c03bd841a5d1 -->

```csharp
public Inno.Text.TextStyle.TextStyle(float fontSize, int faceIndex = 0, int weight = 400, Inno.Text.TextFontStyle style = Inno.Text.TextFontStyle.Normal, float letterSpacing = 0)
```

Creates validated text styling.

**Parameter `fontSize`:** The positive font size in logical pixels.

**Parameter `faceIndex`:** The zero-based face index within the font collection.

**Parameter `weight`:** The requested CSS-compatible weight from 1 through 1000.

**Parameter `style`:** The requested face slant.

**Parameter `letterSpacing`:** Additional logical pixels inserted after each glyph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L89).

## `Equals`

<a id="api-d596f6f4b47209f1"></a>
<!-- api: M:Inno.Text.TextStyle.Equals(Inno.Text.TextStyle) 80ba6534189ef6633960b47e2cc0404dadf1b9ef0176382b89045dbc430027a0 -->

```csharp
public bool Inno.Text.TextStyle.Equals(Inno.Text.TextStyle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `Equals`

<a id="api-e35d82ee18357862"></a>
<!-- api: M:Inno.Text.TextStyle.Equals(System.Object) 894700aabf3150b458b65221325146a27b91403be199fdcecfcf033863805915 -->

```csharp
public override bool Inno.Text.TextStyle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `GetHashCode`

<a id="api-736f18cba32326f1"></a>
<!-- api: M:Inno.Text.TextStyle.GetHashCode 7b793166346628e36a84510103cfe3989437e56d789915ac54bc3380ff91dd4a -->

```csharp
public override int Inno.Text.TextStyle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `op_Equality`

<a id="api-5efc7c044a2e0c0d"></a>
<!-- api: M:Inno.Text.TextStyle.op_Equality(Inno.Text.TextStyle,Inno.Text.TextStyle) 892b55bc254059678a7695f5d85e039a70c3fe2c5314c2f1e2cbda0fc17f6050 -->

```csharp
public static bool Inno.Text.TextStyle.operator ==(Inno.Text.TextStyle left, Inno.Text.TextStyle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `op_Inequality`

<a id="api-3177f10e6b02ed07"></a>
<!-- api: M:Inno.Text.TextStyle.op_Inequality(Inno.Text.TextStyle,Inno.Text.TextStyle) b522b59abc7604511c02b217b448e49f93c7325e1e2954e1b02742ddf0baee87 -->

```csharp
public static bool Inno.Text.TextStyle.operator !=(Inno.Text.TextStyle left, Inno.Text.TextStyle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `ToString`

<a id="api-b1df1eace3d973b5"></a>
<!-- api: M:Inno.Text.TextStyle.ToString 8ea666be511421df26e6a3a488eff5a088a0e35eb872c0d4349aaea82e4af440 -->

```csharp
public override string Inno.Text.TextStyle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L69).

## `defaultValue`

<a id="api-ed7e0152e7276ad6"></a>
<!-- api: P:Inno.Text.TextStyle.defaultValue a9b0bb1f0f77c52c8be2a644d6c8aff25d10fbea057347a24d6955228c74f6f5 -->

```csharp
public static Inno.Text.TextStyle Inno.Text.TextStyle.defaultValue { get; }
```

Gets a 16-pixel regular default style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L115).

## `faceIndex`

<a id="api-395a1ebfe5aa4205"></a>
<!-- api: P:Inno.Text.TextStyle.faceIndex 5daa506b5d528f50b384fa69b15fbb2f0049c5b34882aecc22289331f900de7b -->

```csharp
public int Inno.Text.TextStyle.faceIndex { get; }
```

Gets the collection face index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L123).

## `fontSize`

<a id="api-e30b5da5ba9a5a13"></a>
<!-- api: P:Inno.Text.TextStyle.fontSize 0e5a850f0995bac4b8f731a9a098f9317387fdbe02c4ec90cebadffc6e35e839 -->

```csharp
public float Inno.Text.TextStyle.fontSize { get; }
```

Gets the logical font size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L119).

## `letterSpacing`

<a id="api-4bd17a5f70742eb3"></a>
<!-- api: P:Inno.Text.TextStyle.letterSpacing 46a9185f49ff7333e5d3d05b9bfd07aa7088ff180d05044e359fdc9cebe0d97b -->

```csharp
public float Inno.Text.TextStyle.letterSpacing { get; }
```

Gets additional spacing appended to each glyph advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L135).

## `style`

<a id="api-7b58043b1c14327c"></a>
<!-- api: P:Inno.Text.TextStyle.style 657d34f5b4baea2f72c21a9d80c93a3debd74de2143c95488f1f868fe667f7ab -->

```csharp
public Inno.Text.TextFontStyle Inno.Text.TextStyle.style { get; }
```

Gets the requested face slant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L131).

## `weight`

<a id="api-ff725b231f55caa9"></a>
<!-- api: P:Inno.Text.TextStyle.weight 90ac851c86edbdb57991a8589ab07cc97cbdf64f646dd6410d44a6eb7259107e -->

```csharp
public int Inno.Text.TextStyle.weight { get; }
```

Gets the CSS-compatible font weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L127).
