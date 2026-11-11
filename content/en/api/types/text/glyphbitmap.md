---
title: "GlyphBitmap"
description: "Reference for GlyphBitmap in Inno.Text."
uid: api.inno.text.832f392c8ae640eb
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `GlyphBitmap`

This reference describes `GlyphBitmap` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-001df24d326d77b5) | Method |
| [`advanceX`](#api-c2244a15e4c17310) | Property |
| [`bearingX`](#api-2de2f4a4ce9d11bf) | Property |
| [`bearingY`](#api-ef47e96d02eb89e8) | Property |
| [`height`](#api-e04143ca16c775f1) | Property |
| [`pixels`](#api-60e3c796c2c40812) | Property |
| [`width`](#api-3eaa04c9c387c827) | Property |

## Type declaration

<a id="api-832f392c8ae640eb"></a>
<!-- api: T:Inno.Text.GlyphBitmap 1ecd7d65e487daabad24819caa653f7eba31fcef87a63f31e41163ea702659f3 -->

```csharp
public sealed class Inno.Text.GlyphBitmap
```

Contains one rasterized glyph as tightly packed 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L302).

## `#ctor`

<a id="api-001df24d326d77b5"></a>
<!-- api: M:Inno.Text.GlyphBitmap.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.Single,System.ReadOnlySpan{System.Byte}) 20e7909a954fe9a68e96a901d00478e59551626f341e8ed148865e92c1f8d690 -->

```csharp
public Inno.Text.GlyphBitmap.GlyphBitmap(int width, int height, int bearingX, int bearingY, float advanceX, System.ReadOnlySpan<byte> pixels)
```

Creates a validated immutable glyph bitmap.

**Parameter `width`:** The bitmap width in pixels.

**Parameter `height`:** The bitmap height in pixels.

**Parameter `bearingX`:** The horizontal bearing in pixels.

**Parameter `bearingY`:** The vertical bearing in pixels.

**Parameter `advanceX`:** The horizontal glyph advance.

**Parameter `pixels`:** Tightly packed row-major 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L327).

## `advanceX`

<a id="api-c2244a15e4c17310"></a>
<!-- api: P:Inno.Text.GlyphBitmap.advanceX 886a8c06268a62dae83a6074d7bf692c3586c7c813f0d8b2734611a0a87a57a9 -->

```csharp
public float Inno.Text.GlyphBitmap.advanceX { get; }
```

Gets the horizontal glyph advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L368).

## `bearingX`

<a id="api-2de2f4a4ce9d11bf"></a>
<!-- api: P:Inno.Text.GlyphBitmap.bearingX a5d18ff63e768affc58f95d640fecb0b4dc6d3e1ecb0e6d132d756246d26a00b -->

```csharp
public int Inno.Text.GlyphBitmap.bearingX { get; }
```

Gets the horizontal bearing in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L360).

## `bearingY`

<a id="api-ef47e96d02eb89e8"></a>
<!-- api: P:Inno.Text.GlyphBitmap.bearingY 5aaa7f74d7e84d1e20e7b99cf9fcc3f9e218c75ce0407bc5de9958e29b20bfdc -->

```csharp
public int Inno.Text.GlyphBitmap.bearingY { get; }
```

Gets the vertical bearing in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L364).

## `height`

<a id="api-e04143ca16c775f1"></a>
<!-- api: P:Inno.Text.GlyphBitmap.height 0bba508f37067779bfdb76a4f856e016888b739861ce98bacc5dca09ab57b5e7 -->

```csharp
public int Inno.Text.GlyphBitmap.height { get; }
```

Gets the bitmap height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L356).

## `pixels`

<a id="api-60e3c796c2c40812"></a>
<!-- api: P:Inno.Text.GlyphBitmap.pixels bba9b0a396e9adeedd4e78b02e8ef64e00aa8299d5a27f3dba0a566481e86218 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Text.GlyphBitmap.pixels { get; }
```

Gets tightly packed row-major 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L372).

## `width`

<a id="api-3eaa04c9c387c827"></a>
<!-- api: P:Inno.Text.GlyphBitmap.width 09688847206b474b0d2a0bec378f39f732d468ffd5f5257529815160b489f6e1 -->

```csharp
public int Inno.Text.GlyphBitmap.width { get; }
```

Gets the bitmap width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L352).
