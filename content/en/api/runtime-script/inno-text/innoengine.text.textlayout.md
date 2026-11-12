---
title: "TextLayout"
description: "Reference for TextLayout in Inno.Text."
uid: api.inno.text.runtime-script.21123d2f447c4a4e
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextLayout`

This reference describes `TextLayout` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a4be6c59c56d0002) | Method |
| [`glyphs`](#api-c5281643e76d5548) | Property |
| [`height`](#api-57f22a7a5bd606b1) | Property |
| [`metrics`](#api-2da24ad50d8f424a) | Property |
| [`width`](#api-087195f791cacd07) | Property |

## Type declaration

<a id="api-21123d2f447c4a4e"></a>
<!-- api: T:InnoEngine.Text.TextLayout 54e7e9b759305a8b2f39f8e8f8cf0016726929238e2e85de11cd607ab6e7a134 -->

```csharp
public sealed class InnoEngine.Text.TextLayout
```

Contains immutable positioned glyphs and aggregate bounds for one shaped string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L245).

## `#ctor`

<a id="api-a4be6c59c56d0002"></a>
<!-- api: M:InnoEngine.Text.TextLayout.#ctor(System.Collections.Generic.IEnumerable{InnoEngine.Text.TextGlyph},InnoEngine.Text.TextMetrics,System.Single,System.Single) 0c9b81e016c2d3ef11daefbabcedf92f3d203ec12cae2854b046e46e359901db -->

```csharp
public InnoEngine.Text.TextLayout.TextLayout(System.Collections.Generic.IEnumerable<InnoEngine.Text.TextGlyph> glyphs, InnoEngine.Text.TextMetrics metrics, float width, float height)
```

Creates an immutable text layout.

**Parameter `glyphs`:** The positioned glyph sequence.

**Parameter `metrics`:** The face metrics used by the layout.

**Parameter `width`:** The logical horizontal advance.

**Parameter `height`:** The logical line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L264).

## `glyphs`

<a id="api-c5281643e76d5548"></a>
<!-- api: P:InnoEngine.Text.TextLayout.glyphs e45b44203155ed728cbd80759fabeb7f6881fc1e75de2b5d4ef560b733c7d8dd -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Text.TextGlyph> InnoEngine.Text.TextLayout.glyphs { get; }
```

Gets the immutable positioned glyph sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L284).

## `height`

<a id="api-57f22a7a5bd606b1"></a>
<!-- api: P:InnoEngine.Text.TextLayout.height c61d01677b73f50ca7916abc3f47e76e16e6461333c19ec4372e42eec94be91b -->

```csharp
public float InnoEngine.Text.TextLayout.height { get; }
```

Gets the aggregate line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L296).

## `metrics`

<a id="api-2da24ad50d8f424a"></a>
<!-- api: P:InnoEngine.Text.TextLayout.metrics 1ceeed0bba801568f67955db2d7e6a10cbaa91576a30e456420e41220dfdb459 -->

```csharp
public InnoEngine.Text.TextMetrics InnoEngine.Text.TextLayout.metrics { get; }
```

Gets the font metrics used to build this layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L288).

## `width`

<a id="api-087195f791cacd07"></a>
<!-- api: P:InnoEngine.Text.TextLayout.width 7f8a64ecd3fe5c6c77e5dffcd97c22cac85d829868340b4b184834173a93be16 -->

```csharp
public float InnoEngine.Text.TextLayout.width { get; }
```

Gets the aggregate horizontal advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L292).
