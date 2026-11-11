---
title: "TextLayout"
description: "Reference for TextLayout in Inno.Text."
uid: api.inno.text.ef32529435b6d56c
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextLayout`

This reference describes `TextLayout` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c88dd6d7bb258665) | Method |
| [`glyphs`](#api-5b9b4a1258ee30bc) | Property |
| [`height`](#api-dccf92ca1db8c92d) | Property |
| [`metrics`](#api-2da28083da51e413) | Property |
| [`width`](#api-97db62e7d187f123) | Property |

## Type declaration

<a id="api-ef32529435b6d56c"></a>
<!-- api: T:Inno.Text.TextLayout ef1e435aa1831244635796b87d01a3c086ef0aac9a7adfae1ec4d4662ce89839 -->

```csharp
public sealed class Inno.Text.TextLayout
```

Contains immutable positioned glyphs and aggregate bounds for one shaped string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L245).

## `#ctor`

<a id="api-c88dd6d7bb258665"></a>
<!-- api: M:Inno.Text.TextLayout.#ctor(System.Collections.Generic.IEnumerable{Inno.Text.TextGlyph},Inno.Text.TextMetrics,System.Single,System.Single) e65bf26c61476b1f4240fcceb3b39678d9056e654c1889dcb49a78332e1c8d21 -->

```csharp
public Inno.Text.TextLayout.TextLayout(System.Collections.Generic.IEnumerable<Inno.Text.TextGlyph> glyphs, Inno.Text.TextMetrics metrics, float width, float height)
```

Creates an immutable text layout.

**Parameter `glyphs`:** The positioned glyph sequence.

**Parameter `metrics`:** The face metrics used by the layout.

**Parameter `width`:** The logical horizontal advance.

**Parameter `height`:** The logical line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L264).

## `glyphs`

<a id="api-5b9b4a1258ee30bc"></a>
<!-- api: P:Inno.Text.TextLayout.glyphs 11d0d80d02ffa3a216f8589eb1e7d26e5d9d424a1b1aa12a140736c6132e57fb -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Text.TextGlyph> Inno.Text.TextLayout.glyphs { get; }
```

Gets the immutable positioned glyph sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L284).

## `height`

<a id="api-dccf92ca1db8c92d"></a>
<!-- api: P:Inno.Text.TextLayout.height 16816e88300808b7b8aa157a2e0aab55d5b0723205c3ea669071c4b67bd9e7a1 -->

```csharp
public float Inno.Text.TextLayout.height { get; }
```

Gets the aggregate line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L296).

## `metrics`

<a id="api-2da28083da51e413"></a>
<!-- api: P:Inno.Text.TextLayout.metrics b768716f07f197a8b4f5cb75513c2336feda03e64feeedc904e9e84ef68b0419 -->

```csharp
public Inno.Text.TextMetrics Inno.Text.TextLayout.metrics { get; }
```

Gets the font metrics used to build this layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L288).

## `width`

<a id="api-97db62e7d187f123"></a>
<!-- api: P:Inno.Text.TextLayout.width 6cbdfb8ee7b259a686b4ad478c0e8aeb1ac7ce8e6b1a7fbbb42a412160c36c85 -->

```csharp
public float Inno.Text.TextLayout.width { get; }
```

Gets the aggregate horizontal advance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L292).
