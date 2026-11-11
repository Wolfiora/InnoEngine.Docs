---
title: "TextFontStyle"
description: "Reference for TextFontStyle in Inno.Text."
uid: api.inno.text.2f44ed380f86cab5
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextFontStyle`

This reference describes `TextFontStyle` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Italic`](#api-372e203241f3b43b) | Field |
| [`Normal`](#api-10067220be314d7e) | Field |
| [`Oblique`](#api-f49cd479479615f0) | Field |

## Type declaration

<a id="api-2f44ed380f86cab5"></a>
<!-- api: T:Inno.Text.TextFontStyle 75ddf3981e847bcb52da20684df943fb038008afe614cb66df2921976d5009ed -->

```csharp
public enum Inno.Text.TextFontStyle : int
```

Selects the typographic slant requested from a font face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L36).

## `Italic`

<a id="api-372e203241f3b43b"></a>
<!-- api: F:Inno.Text.TextFontStyle.Italic e6ced042b477e6259ea34d004f33c0ef00f28b1357cafabb4d6c9aae876eccf7 -->

```csharp
Inno.Text.TextFontStyle.Italic = 1
```

Uses an italic face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L45).

## `Normal`

<a id="api-10067220be314d7e"></a>
<!-- api: F:Inno.Text.TextFontStyle.Normal 6a54be1a0efd3ce5da385424f0ecc9e86b02f3694780d13636d181b7fc8531c9 -->

```csharp
Inno.Text.TextFontStyle.Normal = 0
```

Uses an upright face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L41).

## `Oblique`

<a id="api-f49cd479479615f0"></a>
<!-- api: F:Inno.Text.TextFontStyle.Oblique 951b73d7f2e22f6dcd7b24f8032330a86c74e87fa9e09bb0593904736380e41e -->

```csharp
Inno.Text.TextFontStyle.Oblique = 2
```

Uses an oblique face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L49).
