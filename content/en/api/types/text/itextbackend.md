---
title: "ITextBackend"
description: "Reference for ITextBackend in Inno.Text."
uid: api.inno.text.27e41acddd05a81d
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `ITextBackend`

This reference describes `ITextBackend` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`LoadFont`](#api-893c74225c7b9d22) | Method |
| [`Rasterize`](#api-bb2a4623f7de1dee) | Method |
| [`ReleaseFont`](#api-dcc3f8642605cc35) | Method |
| [`Shape`](#api-dd7bfe939e8aebeb) | Method |

## Type declaration

<a id="api-27e41acddd05a81d"></a>
<!-- api: T:Inno.Text.ITextBackend a49307087921953d6961419cda5d94a33342b5008091c4460713064f748377f4 -->

```csharp
public interface Inno.Text.ITextBackend : System.IDisposable
```

Defines the replaceable native shaping and glyph-rasterization boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextBackend.cs#L8).

## `LoadFont`

<a id="api-893c74225c7b9d22"></a>
<!-- api: M:Inno.Text.ITextBackend.LoadFont(System.ReadOnlySpan{System.Byte},System.Int32) 9a0402955992c2714e0d8918e4da7dfd731b3faf752fdff6b30c4f7a5ba968b6 -->

```csharp
Inno.Text.TextFontHandle Inno.Text.ITextBackend.LoadFont(System.ReadOnlySpan<byte> data, int faceIndex)
```

Loads one face from encoded OpenType data.

**Parameter `data`:** The complete encoded font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Returns:** A generation-local face handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextBackend.cs#L22).

## `Rasterize`

<a id="api-bb2a4623f7de1dee"></a>
<!-- api: M:Inno.Text.ITextBackend.Rasterize(Inno.Text.TextFontHandle,System.UInt32,System.Single) 7943dccd6eddd5a33c34a3708bd57ba985a816ce927deb2da9e589acebf187ed -->

```csharp
Inno.Text.GlyphBitmap Inno.Text.ITextBackend.Rasterize(Inno.Text.TextFontHandle font, uint glyphId, float fontSize)
```

Rasterizes one shaped glyph into 8-bit coverage.

**Parameter `font`:** The loaded face.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextBackend.cs#L75).

## `ReleaseFont`

<a id="api-dcc3f8642605cc35"></a>
<!-- api: M:Inno.Text.ITextBackend.ReleaseFont(Inno.Text.TextFontHandle) 6454bd66c3125d48a5ed571407e6c63413855fd75ee8afcea116746c7375ecfe -->

```csharp
void Inno.Text.ITextBackend.ReleaseFont(Inno.Text.TextFontHandle font)
```

Releases one loaded face.

**Parameter `font`:** The face handle to release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextBackend.cs#L33).

## `Shape`

<a id="api-dd7bfe939e8aebeb"></a>
<!-- api: M:Inno.Text.ITextBackend.Shape(Inno.Text.TextFontHandle,System.String,Inno.Text.TextStyle,Inno.Text.TextShapingOptions) 7e884732be1ee6940ed12d8272bb593a11f18c9123f7cf66181e3dd23b262f6a -->

```csharp
Inno.Text.TextLayout Inno.Text.ITextBackend.Shape(Inno.Text.TextFontHandle font, string text, Inno.Text.TextStyle style, Inno.Text.TextShapingOptions options)
```

Shapes one Unicode string into positioned glyphs.

**Parameter `font`:** The loaded face.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font size and spacing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/ITextBackend.cs#L53).
