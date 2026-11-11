---
title: "FreeTypeHarfBuzzTextBackend"
description: "Reference for FreeTypeHarfBuzzTextBackend in Inno.Adapter.Text.FreeTypeHarfBuzz."
uid: api.inno.adapter.text.freetypeharfbuzz.a7499741085fd46b
kind: api
owners:
  - Inno.Adapter.Text.FreeTypeHarfBuzz
apiSurface: source-clr
contracts:
  - project.inno-adapter-text-freetypeharfbuzz#backend-lifetime-contract
---
# `FreeTypeHarfBuzzTextBackend`

This reference describes `FreeTypeHarfBuzzTextBackend` in `Inno.Adapter.Text.FreeTypeHarfBuzz`. Read the [shared contract](../../projects/inno-adapter-text-freetypeharfbuzz.md#backend-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Text.ITextBackend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ad0e224e242a3d2f) | Method |
| [`Dispose`](#api-65d00c25bf9536d9) | Method |
| [`LoadFont`](#api-42747f84b42a4d4d) | Method |
| [`Rasterize`](#api-1795679268cbe250) | Method |
| [`ReleaseFont`](#api-5eee554dba608f94) | Method |
| [`Shape`](#api-9d5e216ef0865019) | Method |

## Type declaration

<a id="api-a7499741085fd46b"></a>
<!-- api: T:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend dc42031ec2e296afdced09f095f6e26b5ee4a711382b1d4789a39b808b49c390 -->

```csharp
public sealed class Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend : Inno.Text.ITextBackend
```

Implements Unicode shaping and glyph rasterization through pinned FreeType and HarfBuzz sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L12).

## `#ctor`

<a id="api-ad0e224e242a3d2f"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.#ctor 558746113da085815022aa837debbef48d21cf8ff2fee8ce6eb99cb1f755fcf3 -->

```csharp
public Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.FreeTypeHarfBuzzTextBackend()
```

Creates and validates a native text context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L20).

## `Dispose`

<a id="api-65d00c25bf9536d9"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Dispose 067cdbba486db223c2be0ad14347eeb3738d8ef0e122ee6eb659ae9f9ec1c116 -->

```csharp
public void Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Dispose()
```

Releases the native text context and every remaining face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L215).

## `LoadFont`

<a id="api-42747f84b42a4d4d"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.LoadFont(System.ReadOnlySpan{System.Byte},System.Int32) 3ac184337b127622689ff8efd60ac4bff8a2b55ce25f752aaddcd5b08e12e62a -->

```csharp
public Inno.Text.TextFontHandle Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.LoadFont(System.ReadOnlySpan<byte> data, int faceIndex)
```

Loads one face from encoded OpenType data.

**Parameter `data`:** The complete encoded font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Returns:** A generation-local face handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L40).

## `Rasterize`

<a id="api-1795679268cbe250"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Rasterize(Inno.Text.TextFontHandle,System.UInt32,System.Single) 485d8d94b924b331b22447bec3e1cc6be7fb0fcda1ed7974ddc8012d964dd1c4 -->

```csharp
public Inno.Text.GlyphBitmap Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Rasterize(Inno.Text.TextFontHandle font, uint glyphId, float fontSize)
```

Rasterizes one shaped glyph into 8-bit coverage.

**Parameter `font`:** The loaded face.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L182).

## `ReleaseFont`

<a id="api-5eee554dba608f94"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.ReleaseFont(Inno.Text.TextFontHandle) 3b2bceeb773d48c5f7fffe43d680474ae0797abd889df65472f7795e95486616 -->

```csharp
public void Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.ReleaseFont(Inno.Text.TextFontHandle font)
```

Releases one loaded face.

**Parameter `font`:** The face handle to release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L59).

## `Shape`

<a id="api-9d5e216ef0865019"></a>
<!-- api: M:Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Shape(Inno.Text.TextFontHandle,System.String,Inno.Text.TextStyle,Inno.Text.TextShapingOptions) 2479ed462bc8e26446d48f7b26068aa49e6c0679051ed1ac09bfb9ff9662cdcc -->

```csharp
public Inno.Text.TextLayout Inno.Adapter.Text.FreeTypeHarfBuzz.FreeTypeHarfBuzzTextBackend.Shape(Inno.Text.TextFontHandle font, string text, Inno.Text.TextStyle style, Inno.Text.TextShapingOptions options)
```

Shapes one Unicode string into positioned glyphs.

**Parameter `font`:** The loaded face.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font size and spacing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/runtime/Inno.Adapter.Text.FreeTypeHarfBuzz/FreeTypeHarfBuzzTextBackend.cs#L85).
