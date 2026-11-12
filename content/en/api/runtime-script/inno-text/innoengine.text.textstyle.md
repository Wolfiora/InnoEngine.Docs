---
title: "TextStyle"
description: "Reference for TextStyle in Inno.Text."
uid: api.inno.text.runtime-script.7ceb72a2b9acb4c0
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextStyle`

This reference describes `TextStyle` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Text.TextStyle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-72149158380ca416) | Method |
| [`Equals`](#api-be9e996ce4da6307) | Method |
| [`Equals`](#api-cbf7040ef7e137c3) | Method |
| [`GetHashCode`](#api-6b9771465e9f32c6) | Method |
| [`op_Equality`](#api-bf7ae432b364eb16) | Method |
| [`op_Inequality`](#api-5954bfa018db247d) | Method |
| [`ToString`](#api-b383829fe98cce79) | Method |
| [`defaultValue`](#api-860ebdc8ea5755fe) | Property |
| [`faceIndex`](#api-2a2ee6c4b447f069) | Property |
| [`fontSize`](#api-9b1be04c36277330) | Property |
| [`letterSpacing`](#api-fdc36e63ef77d1f8) | Property |
| [`style`](#api-bdfb3c04b4d4c4aa) | Property |
| [`weight`](#api-8b9af12a8e463556) | Property |

## Type declaration

<a id="api-7ceb72a2b9acb4c0"></a>
<!-- api: T:InnoEngine.Text.TextStyle 6b70c08635a77f4594362d9b95215dc5d244400fc6b15a04028648e1e66f85f0 -->

```csharp
public readonly struct InnoEngine.Text.TextStyle : System.IEquatable<InnoEngine.Text.TextStyle>
```

Defines immutable font selection and sizing for one shaping operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `#ctor`

<a id="api-72149158380ca416"></a>
<!-- api: M:InnoEngine.Text.TextStyle.#ctor(System.Single,System.Int32,System.Int32,InnoEngine.Text.TextFontStyle,System.Single) faa547d577b72549d2b39fd4cb02bf3c95c8aa8eb98b0885708b9258f1dfe933 -->

```csharp
public InnoEngine.Text.TextStyle.TextStyle(float fontSize, int faceIndex = 0, int weight = 400, InnoEngine.Text.TextFontStyle style = InnoEngine.Text.TextFontStyle.Normal, float letterSpacing = 0)
```

Creates validated text styling.

**Parameter `fontSize`:** The positive font size in logical pixels.

**Parameter `faceIndex`:** The zero-based face index within the font collection.

**Parameter `weight`:** The requested CSS-compatible weight from 1 through 1000.

**Parameter `style`:** The requested face slant.

**Parameter `letterSpacing`:** Additional logical pixels inserted after each glyph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L89).

## `Equals`

<a id="api-be9e996ce4da6307"></a>
<!-- api: M:InnoEngine.Text.TextStyle.Equals(InnoEngine.Text.TextStyle) 53e552b6ae2cd188cdb45bc6d3e451e9207e50bfd3d8008c097813b7f08f7d4e -->

```csharp
public bool InnoEngine.Text.TextStyle.Equals(InnoEngine.Text.TextStyle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `Equals`

<a id="api-cbf7040ef7e137c3"></a>
<!-- api: M:InnoEngine.Text.TextStyle.Equals(System.Object) dad54d5f3da479e61a73694c56fff988cf89e4321ed1da4acdecaa1d3ea546fb -->

```csharp
public override bool InnoEngine.Text.TextStyle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `GetHashCode`

<a id="api-6b9771465e9f32c6"></a>
<!-- api: M:InnoEngine.Text.TextStyle.GetHashCode 04e92da94e2bd75a877b263a1c5bb501cb05884a1511f1962580463c38264339 -->

```csharp
public override int InnoEngine.Text.TextStyle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `op_Equality`

<a id="api-bf7ae432b364eb16"></a>
<!-- api: M:InnoEngine.Text.TextStyle.op_Equality(InnoEngine.Text.TextStyle,InnoEngine.Text.TextStyle) 25cb7a1279f65e270622b341638ac10912a4ea0f6666d25f041ec361fcfd627a -->

```csharp
public static bool InnoEngine.Text.TextStyle.operator ==(InnoEngine.Text.TextStyle left, InnoEngine.Text.TextStyle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `op_Inequality`

<a id="api-5954bfa018db247d"></a>
<!-- api: M:InnoEngine.Text.TextStyle.op_Inequality(InnoEngine.Text.TextStyle,InnoEngine.Text.TextStyle) 0beb28d409f232a1f770378711e4a3587f1a8f9d92988fe662f11ffb3b7ae460 -->

```csharp
public static bool InnoEngine.Text.TextStyle.operator !=(InnoEngine.Text.TextStyle left, InnoEngine.Text.TextStyle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `ToString`

<a id="api-b383829fe98cce79"></a>
<!-- api: M:InnoEngine.Text.TextStyle.ToString 25079c9073122d8e7182009764e0adfbb800a8bb5ffc89a7999fb93c5a8d9e7f -->

```csharp
public override string InnoEngine.Text.TextStyle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L69).

## `defaultValue`

<a id="api-860ebdc8ea5755fe"></a>
<!-- api: P:InnoEngine.Text.TextStyle.defaultValue 308499f12000a5c1d7bb233ae062f4efc93538f4331967d0dbe5d072462b1d37 -->

```csharp
public static InnoEngine.Text.TextStyle InnoEngine.Text.TextStyle.defaultValue { get; }
```

Gets a 16-pixel regular default style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L115).

## `faceIndex`

<a id="api-2a2ee6c4b447f069"></a>
<!-- api: P:InnoEngine.Text.TextStyle.faceIndex 147d71d276912204ee85c01e09ccaf9941c9366c25857c2037a405b07c08e6af -->

```csharp
public int InnoEngine.Text.TextStyle.faceIndex { get; }
```

Gets the collection face index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L123).

## `fontSize`

<a id="api-9b1be04c36277330"></a>
<!-- api: P:InnoEngine.Text.TextStyle.fontSize 3d5b9a9968da36e766c06380ec8b5c0d88ba1573bd90a820daa2c07b40244d48 -->

```csharp
public float InnoEngine.Text.TextStyle.fontSize { get; }
```

Gets the logical font size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L119).

## `letterSpacing`

<a id="api-fdc36e63ef77d1f8"></a>
<!-- api: P:InnoEngine.Text.TextStyle.letterSpacing bf70204855f41cbb2dfaf2ed342ec9a5cd7a14e9e3c252c086fc8a3ac1316414 -->

```csharp
public float InnoEngine.Text.TextStyle.letterSpacing { get; }
```

Gets additional spacing appended to each glyph advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L135).

## `style`

<a id="api-bdfb3c04b4d4c4aa"></a>
<!-- api: P:InnoEngine.Text.TextStyle.style b6fb52226ea691b508cb793f6a082ea76a5d2524b630ff884edaee40f0dfbf8e -->

```csharp
public InnoEngine.Text.TextFontStyle InnoEngine.Text.TextStyle.style { get; }
```

Gets the requested face slant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L131).

## `weight`

<a id="api-8b9af12a8e463556"></a>
<!-- api: P:InnoEngine.Text.TextStyle.weight fcfdad5dcf6bc0972b8fee78b56b156c035581a87e51de393128060a85386a85 -->

```csharp
public int InnoEngine.Text.TextStyle.weight { get; }
```

Gets the CSS-compatible font weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L127).
