---
title: "TextDirection"
description: "Reference for TextDirection in Inno.Text."
uid: api.inno.text.runtime-script.6725bdd9ebc2c850
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextDirection`

This reference describes `TextDirection` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Automatic`](#api-eb9708356f1baf69) | Field |
| [`BottomToTop`](#api-73bc46577824d493) | Field |
| [`LeftToRight`](#api-2a138f0070e2e010) | Field |
| [`RightToLeft`](#api-fabbde83fc7108e7) | Field |
| [`TopToBottom`](#api-4c4a5f5c6c48c1f3) | Field |

## Type declaration

<a id="api-6725bdd9ebc2c850"></a>
<!-- api: T:InnoEngine.Text.TextDirection 8efacc3dc13ae5e9640662708dd10a33c69e82647615a95033fd1c3ba0e7fc04 -->

```csharp
public enum InnoEngine.Text.TextDirection : int
```

Selects the logical direction used by the shaping engine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L9).

## `Automatic`

<a id="api-eb9708356f1baf69"></a>
<!-- api: F:InnoEngine.Text.TextDirection.Automatic b07478613ca0cde9306df7a9d74aecddc129aba9b64ef2fc6e8098cf40512dbf -->

```csharp
InnoEngine.Text.TextDirection.Automatic = 0
```

Lets the shaping engine infer direction from the text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L14).

## `BottomToTop`

<a id="api-73bc46577824d493"></a>
<!-- api: F:InnoEngine.Text.TextDirection.BottomToTop c1e99b568a501d3a7b42c115a9c218024191eece408732644aa5a25883e5ebd9 -->

```csharp
InnoEngine.Text.TextDirection.BottomToTop = 4
```

Shapes text from bottom to top.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L30).

## `LeftToRight`

<a id="api-2a138f0070e2e010"></a>
<!-- api: F:InnoEngine.Text.TextDirection.LeftToRight b95c61c1befe1be36f013ee155308b89e4765deb5ebec47ba5358df3e97fb81e -->

```csharp
InnoEngine.Text.TextDirection.LeftToRight = 1
```

Shapes text from left to right.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L18).

## `RightToLeft`

<a id="api-fabbde83fc7108e7"></a>
<!-- api: F:InnoEngine.Text.TextDirection.RightToLeft 6fa218603350fffc4f472bb2b9d36d28ec83eddeca4a2d1528c7d8c31f9e1440 -->

```csharp
InnoEngine.Text.TextDirection.RightToLeft = 2
```

Shapes text from right to left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L22).

## `TopToBottom`

<a id="api-4c4a5f5c6c48c1f3"></a>
<!-- api: F:InnoEngine.Text.TextDirection.TopToBottom 08f02e4e5693a1f732e2ba4fe4b7e2155480ada817b9de38c3b37116dc8c82e0 -->

```csharp
InnoEngine.Text.TextDirection.TopToBottom = 3
```

Shapes text from top to bottom.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L26).
