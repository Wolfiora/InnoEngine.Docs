---
title: "GlyphBitmap"
description: "Reference for GlyphBitmap in Inno.Text."
uid: api.inno.text.runtime-script.0ade82510118ed06
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `GlyphBitmap`

This reference describes `GlyphBitmap` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1db2a9fd6fdcf906) | Method |
| [`advanceX`](#api-c372ccca6e445b94) | Property |
| [`bearingX`](#api-e0ab63a40cb2702d) | Property |
| [`bearingY`](#api-3bd778c644ac3f81) | Property |
| [`height`](#api-64cc95641e76fdcc) | Property |
| [`pixels`](#api-edffe8626cf45614) | Property |
| [`width`](#api-70645448c2449965) | Property |

## Type declaration

<a id="api-0ade82510118ed06"></a>
<!-- api: T:InnoEngine.Text.GlyphBitmap 50961d77afc433484db47cdaa16366f4dc6f8f80cbe7ed2a1419fd9e716df6bc -->

```csharp
public sealed class InnoEngine.Text.GlyphBitmap
```

Contains one rasterized glyph as tightly packed 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L302).

## `#ctor`

<a id="api-1db2a9fd6fdcf906"></a>
<!-- api: M:InnoEngine.Text.GlyphBitmap.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.Single,System.ReadOnlySpan{System.Byte}) 7b0d600352d467220233289e8fb9577a61b1e6ed9d303abf927f415e2d54461a -->

```csharp
public InnoEngine.Text.GlyphBitmap.GlyphBitmap(int width, int height, int bearingX, int bearingY, float advanceX, System.ReadOnlySpan<byte> pixels)
```

Creates a validated immutable glyph bitmap.

**Parameter `width`:** The bitmap width in pixels.

**Parameter `height`:** The bitmap height in pixels.

**Parameter `bearingX`:** The horizontal bearing in pixels.

**Parameter `bearingY`:** The vertical bearing in pixels.

**Parameter `advanceX`:** The horizontal glyph advance.

**Parameter `pixels`:** Tightly packed row-major 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L327).

## `advanceX`

<a id="api-c372ccca6e445b94"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.advanceX f12e14cde474282ad87d25dab47c4d79157491d562cdc675e5c6a31b33e3c92a -->

```csharp
public float InnoEngine.Text.GlyphBitmap.advanceX { get; }
```

Gets the horizontal glyph advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L368).

## `bearingX`

<a id="api-e0ab63a40cb2702d"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.bearingX 967a69f683ac87ab18c16f9461b7aa9c36d568631b1752cad5c7e11be8deae75 -->

```csharp
public int InnoEngine.Text.GlyphBitmap.bearingX { get; }
```

Gets the horizontal bearing in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L360).

## `bearingY`

<a id="api-3bd778c644ac3f81"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.bearingY 88ed78ffa6e1ab1a7b5a238a80a98881da3baf771c50ac1fe3394e2c83202b70 -->

```csharp
public int InnoEngine.Text.GlyphBitmap.bearingY { get; }
```

Gets the vertical bearing in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L364).

## `height`

<a id="api-64cc95641e76fdcc"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.height 8182137d9c3f3bf2b81bb3fdf0a17b821424d845bd6e327881a2259bea28382f -->

```csharp
public int InnoEngine.Text.GlyphBitmap.height { get; }
```

Gets the bitmap height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L356).

## `pixels`

<a id="api-edffe8626cf45614"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.pixels 827d11414d5abb0ba361da9d50e5df0fbd90477a29a439d5d9ccc13948791027 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Text.GlyphBitmap.pixels { get; }
```

Gets tightly packed row-major 8-bit coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L372).

## `width`

<a id="api-70645448c2449965"></a>
<!-- api: P:InnoEngine.Text.GlyphBitmap.width 5d95582e30ba97b55cd10fa5a3c45fb78aefa2e7e792632491ff0dd120a046c1 -->

```csharp
public int InnoEngine.Text.GlyphBitmap.width { get; }
```

Gets the bitmap width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L352).
