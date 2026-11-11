---
title: "TextDirection"
description: "Reference for TextDirection in Inno.Text."
uid: api.inno.text.ff30fe8d6e73607e
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextDirection`

This reference describes `TextDirection` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Automatic`](#api-7baa9c7d446e25c0) | Field |
| [`BottomToTop`](#api-0d681a2e30e5b6c5) | Field |
| [`LeftToRight`](#api-05d39e700e557638) | Field |
| [`RightToLeft`](#api-df8da577ea5d85e7) | Field |
| [`TopToBottom`](#api-a1db108eb53a9f52) | Field |

## Type declaration

<a id="api-ff30fe8d6e73607e"></a>
<!-- api: T:Inno.Text.TextDirection 5fc83b138bad42cfea1cb9f0552e5a4bbff831f89b349b6a6dae01685de00e02 -->

```csharp
public enum Inno.Text.TextDirection : int
```

Selects the logical direction used by the shaping engine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L9).

## `Automatic`

<a id="api-7baa9c7d446e25c0"></a>
<!-- api: F:Inno.Text.TextDirection.Automatic ef5c147d1c4b5758f3617040b8c259794f18207cac4644565f4259c7f404d7b6 -->

```csharp
Inno.Text.TextDirection.Automatic = 0
```

Lets the shaping engine infer direction from the text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L14).

## `BottomToTop`

<a id="api-0d681a2e30e5b6c5"></a>
<!-- api: F:Inno.Text.TextDirection.BottomToTop 27e436c936174fbcc572297a52a29f005bd785d7f5920cf39fdadf4990d2a892 -->

```csharp
Inno.Text.TextDirection.BottomToTop = 4
```

Shapes text from bottom to top.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L30).

## `LeftToRight`

<a id="api-05d39e700e557638"></a>
<!-- api: F:Inno.Text.TextDirection.LeftToRight 87abfa93f3d12a0c3bcb390813c5edce6bd133f74400f2dcf9e10cdcb6fbb48a -->

```csharp
Inno.Text.TextDirection.LeftToRight = 1
```

Shapes text from left to right.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L18).

## `RightToLeft`

<a id="api-df8da577ea5d85e7"></a>
<!-- api: F:Inno.Text.TextDirection.RightToLeft e1018346e76c969ecdc972c45ded96525bad91ae1c1e2c812ae890c69916e76b -->

```csharp
Inno.Text.TextDirection.RightToLeft = 2
```

Shapes text from right to left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L22).

## `TopToBottom`

<a id="api-a1db108eb53a9f52"></a>
<!-- api: F:Inno.Text.TextDirection.TopToBottom 090c399c1319a1c96f29453f8d44906a460810fbad6250d8e5cc27a80432699f -->

```csharp
Inno.Text.TextDirection.TopToBottom = 3
```

Shapes text from top to bottom.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L26).
