---
title: "Text"
description: "Reference for Text in Inno.Text."
uid: api.inno.text.runtime-script.eaf8596d91a199cf
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `Text`

This reference describes `Text` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Rasterize`](#api-a1108e111da58865) | Method |
| [`Shape`](#api-9ed67814d99747ad) | Method |
| [`Shape`](#api-16f95f18f60af764) | Method |

## Type declaration

<a id="api-eaf8596d91a199cf"></a>
<!-- api: T:InnoEngine.Text.Text 68c536747817ab54429008bd57dce707e6cac5633202afab23608900df272b58 -->

```csharp
public static class InnoEngine.Text.Text
```

Provides script-friendly access to Unicode shaping and glyph rasterization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/Text.cs#L38).

## `Rasterize`

<a id="api-a1108e111da58865"></a>
<!-- api: M:InnoEngine.Text.Text.Rasterize(InnoEngine.Text.FontAsset,System.Int32,System.UInt32,System.Single) bca5d039d8f21400e72c29d54950a92d066c92444357b96487f063cac2208276 -->

```csharp
public static InnoEngine.Text.GlyphBitmap InnoEngine.Text.Text.Rasterize(InnoEngine.Text.FontAsset font, int faceIndex, uint glyphId, float fontSize)
```

Rasterizes one shaped glyph into immutable 8-bit coverage.

**Parameter `font`:** The imported font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/Text.cs#L106).

## `Shape`

<a id="api-9ed67814d99747ad"></a>
<!-- api: M:InnoEngine.Text.Text.Shape(InnoEngine.Text.FontAsset,System.String,InnoEngine.Text.TextStyle,InnoEngine.Text.TextShapingOptions) 336b75d6459977c971329fb31e8778615f53dc69c879746e54ba5c3ee932a0ca -->

```csharp
public static InnoEngine.Text.TextLayout InnoEngine.Text.Text.Shape(InnoEngine.Text.FontAsset font, string text, InnoEngine.Text.TextStyle style, InnoEngine.Text.TextShapingOptions options)
```

Shapes text with explicit language, script, and direction hints.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/Text.cs#L80).

## `Shape`

<a id="api-16f95f18f60af764"></a>
<!-- api: M:InnoEngine.Text.Text.Shape(InnoEngine.Text.FontAsset,System.String,InnoEngine.Text.TextStyle) 7756c4175c17dd3482b130353bfeee18a2ae44fe0765fc36e26672e1d3b1ff69 -->

```csharp
public static InnoEngine.Text.TextLayout InnoEngine.Text.Text.Shape(InnoEngine.Text.FontAsset font, string text, InnoEngine.Text.TextStyle style)
```

Shapes text with default automatic language and direction detection.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/Text.cs#L55).
