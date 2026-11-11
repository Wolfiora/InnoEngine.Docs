---
title: "ITextService"
description: "Reference for ITextService in Inno.Text."
uid: api.inno.text.2ceeda142615f331
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `ITextService`

This reference describes `ITextService` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Rasterize`](#api-2b79652a67d5e680) | Method |
| [`Shape`](#api-24e92feeabc0d75a) | Method |

## Type declaration

<a id="api-2ceeda142615f331"></a>
<!-- api: T:Inno.Text.ITextService c28fc9b7561dc627f0f6a901f42b17d6cd5dd12f22e611d18c35ebd9e731a6c7 -->

```csharp
public interface Inno.Text.ITextService
```

Provides backend-neutral Unicode shaping and glyph rasterization for imported fonts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextService.cs#L6).

## `Rasterize`

<a id="api-2b79652a67d5e680"></a>
<!-- api: M:Inno.Text.ITextService.Rasterize(Inno.Text.FontAsset,System.Int32,System.UInt32,System.Single) c8dbbcdc4393b60ac0ba7e3d1a199e698d326065cb34c4a285709ccf458a10bd -->

```csharp
Inno.Text.GlyphBitmap Inno.Text.ITextService.Rasterize(Inno.Text.FontAsset font, int faceIndex, uint glyphId, float fontSize)
```

Rasterizes one glyph from an imported font.

**Parameter `font`:** The imported font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextService.cs#L51).

## `Shape`

<a id="api-24e92feeabc0d75a"></a>
<!-- api: M:Inno.Text.ITextService.Shape(Inno.Text.FontAsset,System.String,Inno.Text.TextStyle,Inno.Text.TextShapingOptions) 6e94cda0b61108f4ffaeb920c8e5ccb7dd030d021551aa2084705f7a940634d8 -->

```csharp
Inno.Text.TextLayout Inno.Text.ITextService.Shape(Inno.Text.FontAsset font, string text, Inno.Text.TextStyle style, Inno.Text.TextShapingOptions options)
```

Shapes one Unicode string with an imported font.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextService.cs#L26).
