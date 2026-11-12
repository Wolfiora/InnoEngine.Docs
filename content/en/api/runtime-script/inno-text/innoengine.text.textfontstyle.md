---
title: "TextFontStyle"
description: "Reference for TextFontStyle in Inno.Text."
uid: api.inno.text.runtime-script.ee659b7c203ef0f9
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextFontStyle`

This reference describes `TextFontStyle` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Italic`](#api-7e05b3c2ec5ef6f9) | Field |
| [`Normal`](#api-37ca9ab4179ffb3a) | Field |
| [`Oblique`](#api-9a77ddefbefc3efa) | Field |

## Type declaration

<a id="api-ee659b7c203ef0f9"></a>
<!-- api: T:InnoEngine.Text.TextFontStyle 564bd3f9ba1ad348c19852ab7573b6c3e0f0206e44d30eda39d75919774e8948 -->

```csharp
public enum InnoEngine.Text.TextFontStyle : int
```

Selects the typographic slant requested from a font face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L36).

## `Italic`

<a id="api-7e05b3c2ec5ef6f9"></a>
<!-- api: F:InnoEngine.Text.TextFontStyle.Italic 66918dd6ffd4624f6f5c38ea652dd3e6f7141211a160eca81cb6904a5df80182 -->

```csharp
InnoEngine.Text.TextFontStyle.Italic = 1
```

Uses an italic face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L45).

## `Normal`

<a id="api-37ca9ab4179ffb3a"></a>
<!-- api: F:InnoEngine.Text.TextFontStyle.Normal 9c032684c12a38d142ebcf43b90b266f5691c5669400ad20b9f145521f68d89f -->

```csharp
InnoEngine.Text.TextFontStyle.Normal = 0
```

Uses an upright face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L41).

## `Oblique`

<a id="api-9a77ddefbefc3efa"></a>
<!-- api: F:InnoEngine.Text.TextFontStyle.Oblique d03771cb869c6d6a3b052a88c927ed1ac8cdbfccbeaa22394db068f3e3aa7b24 -->

```csharp
InnoEngine.Text.TextFontStyle.Oblique = 2
```

Uses an oblique face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L49).
