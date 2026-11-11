---
title: "Text"
description: "Reference for Text in Inno.Text."
uid: api.inno.text.3661add59d3ad7ed
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `Text`

This reference describes `Text` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Rasterize`](#api-d542f50acd19dc07) | Method |
| [`Shape`](#api-b6170c42e862016b) | Method |
| [`Shape`](#api-88913e3c605d8a6c) | Method |

## Type declaration

<a id="api-3661add59d3ad7ed"></a>
<!-- api: T:Inno.Text.Text 9a370006c3980028f31cc22f7e0923ab7a77815d40ffb3b881fd76a621006bf0 -->

```csharp
public static class Inno.Text.Text
```

Provides script-friendly access to Unicode shaping and glyph rasterization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L38).

## `Rasterize`

<a id="api-d542f50acd19dc07"></a>
<!-- api: M:Inno.Text.Text.Rasterize(Inno.Text.FontAsset,System.Int32,System.UInt32,System.Single) e86152a9f6785aaefb6015f4e35052797158fbb83ac95c38045e8fd2df21f9fb -->

```csharp
public static Inno.Text.GlyphBitmap Inno.Text.Text.Rasterize(Inno.Text.FontAsset font, int faceIndex, uint glyphId, float fontSize)
```

Rasterizes one shaped glyph into immutable 8-bit coverage.

**Parameter `font`:** The imported font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L106).

## `Shape`

<a id="api-b6170c42e862016b"></a>
<!-- api: M:Inno.Text.Text.Shape(Inno.Text.FontAsset,System.String,Inno.Text.TextStyle,Inno.Text.TextShapingOptions) d51a9eff234a3f23f4cc2bb8dee17a21b7f9ed2128ce352ff6611d9e5bf07806 -->

```csharp
public static Inno.Text.TextLayout Inno.Text.Text.Shape(Inno.Text.FontAsset font, string text, Inno.Text.TextStyle style, Inno.Text.TextShapingOptions options)
```

Shapes text with explicit language, script, and direction hints.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L80).

## `Shape`

<a id="api-88913e3c605d8a6c"></a>
<!-- api: M:Inno.Text.Text.Shape(Inno.Text.FontAsset,System.String,Inno.Text.TextStyle) 4242ddfc29286ec0a56c60ea0cfdee6e2c5dda103f3073464c4050d5093af6f1 -->

```csharp
public static Inno.Text.TextLayout Inno.Text.Text.Shape(Inno.Text.FontAsset font, string text, Inno.Text.TextStyle style)
```

Shapes text with default automatic language and direction detection.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L55).
