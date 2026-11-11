---
title: "TextExecutionContext"
description: "Reference for TextExecutionContext in Inno.Text."
uid: api.inno.text.1c3a7dc6335c074d
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextExecutionContext`

This reference describes `TextExecutionContext` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-98c23eee2bdc307d) | Method |
| [`current`](#api-7d2a9d289fe383c7) | Property |

## Type declaration

<a id="api-1c3a7dc6335c074d"></a>
<!-- api: T:Inno.Text.TextExecutionContext 25ea516846c65aae799639fe8216ac07bf14fe191aaff4709abfd96595d77076 -->

```csharp
public static class Inno.Text.TextExecutionContext
```

Binds one text service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L10).

## `EnterScope`

<a id="api-98c23eee2bdc307d"></a>
<!-- api: M:Inno.Text.TextExecutionContext.EnterScope(Inno.Text.ITextService) 280875546c978c4e0db7e0057ab8f973ab76195ecacd1863d7da797092589ede -->

```csharp
public static System.IDisposable Inno.Text.TextExecutionContext.EnterScope(Inno.Text.ITextService text)
```

Binds a text service until the returned strict last-in-first-out scope is disposed.

**Parameter `text`:** The host-owned text service.

**Returns:** The caller-owned binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L28).

## `current`

<a id="api-7d2a9d289fe383c7"></a>
<!-- api: P:Inno.Text.TextExecutionContext.current afe2f48de77aadeb2ae2d615afc7b71f407be39f777c29fd69a542f7a5f98771 -->

```csharp
public static Inno.Text.ITextService Inno.Text.TextExecutionContext.current { get; }
```

Gets the text service bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/Text.cs#L17).
