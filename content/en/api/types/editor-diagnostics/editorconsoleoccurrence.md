---
title: "EditorConsoleOccurrence"
description: "Reference for EditorConsoleOccurrence in Inno.Editor.Diagnostics."
uid: api.inno.editor.diagnostics.d5ee5c552f8f19e2
kind: api
owners:
  - Inno.Editor.Diagnostics
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-diagnostics#lifetime-and-policy
---
# `EditorConsoleOccurrence`

This reference describes `EditorConsoleOccurrence` in `Inno.Editor.Diagnostics`. Read the [shared contract](../../projects/inno-editor-diagnostics.md#lifetime-and-policy) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`category`](#api-7e590b61b2a50f49) | Property |
| [`code`](#api-711f16e164ba3b08) | Property |
| [`column`](#api-34cc794cbf62a9de) | Property |
| [`displayMessage`](#api-54366cdbb3ab640c) | Property |
| [`file`](#api-169a39679855b384) | Property |
| [`kind`](#api-6263895c1ded5863) | Property |
| [`level`](#api-60e78b56c9032844) | Property |
| [`line`](#api-495dff8431b940dc) | Property |
| [`message`](#api-e325bb813cd81daa) | Property |
| [`sequence`](#api-6951d2d200c8bbc6) | Property |
| [`sessionId`](#api-b11a651e42848def) | Property |
| [`source`](#api-4b986f5d061ae3aa) | Property |
| [`sourceId`](#api-63b75e4e542579b0) | Property |
| [`stackTrace`](#api-411ff9c0d387c06c) | Property |
| [`time`](#api-590804c30b1693e4) | Property |

## Type declaration

<a id="api-d5ee5c552f8f19e2"></a>
<!-- api: T:Inno.Editor.Diagnostics.EditorConsoleOccurrence 51b2174ea982393f677d0b6fcbcf0b69e6d4bc04ecc8be9b91a32d8e3d349cbd -->

```csharp
public sealed class Inno.Editor.Diagnostics.EditorConsoleOccurrence
```

Describes one immutable log or diagnostic occurrence in the editor Console timeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L10).

## `category`

<a id="api-7e590b61b2a50f49"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.category 1806ddca9d9d04e80f55c6b1596d87f7f978ee7afb5578bf9290c70e7bf0e3b3 -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.category { get; }
```

Gets the producer-defined category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L77).

## `code`

<a id="api-711f16e164ba3b08"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.code 68281562e4b6b877d88d920208cbc2cd3fcf903c66854328ae4a5a99c543097b -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.code { get; }
```

Gets the diagnostic code, or an empty string for uncoded entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L72).

## `column`

<a id="api-34cc794cbf62a9de"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.column 0721c99d517ba53ae6a4920e7e497cf591e4a62403d5c91b7e2ff14fe7ddb3bb -->

```csharp
public int Inno.Editor.Diagnostics.EditorConsoleOccurrence.column { get; }
```

Gets the one-based source column, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L107).

## `displayMessage`

<a id="api-54366cdbb3ab640c"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.displayMessage 4056dcc71f886d27cf168f103f95feb00688595471c74d0fbf8e79d9ffa1cf46 -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.displayMessage { get; }
```

Gets the message text prefixed by its diagnostic code when one is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L87).

## `file`

<a id="api-169a39679855b384"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.file 24658803941aa9fa2c8ae011eede1c4ddcccfde849709595a2ffc142a7366166 -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.file { get; }
```

Gets the related source path, or an empty string when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L97).

## `kind`

<a id="api-6263895c1ded5863"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.kind 43ce2ffdbaf0558553c5ecc036fe7583378e5727af201c3fcfe0e4b3c3bb9164 -->

```csharp
public Inno.Editor.Diagnostics.EditorConsoleEntryKind Inno.Editor.Diagnostics.EditorConsoleOccurrence.kind { get; }
```

Gets the source protocol represented by this occurrence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L52).

## `level`

<a id="api-60e78b56c9032844"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.level 2e3c07f6c9c553761e06a9f01e1608318adaa791a9ea3dcfe0222abf615a06d3 -->

```csharp
public Inno.Core.Logging.LogLevel Inno.Editor.Diagnostics.EditorConsoleOccurrence.level { get; }
```

Gets the normalized Console severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L57).

## `line`

<a id="api-495dff8431b940dc"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.line 5eb7a4b635f7af04c947ac33d78a36b3b854036082b791a6e3345dddcb63993f -->

```csharp
public int Inno.Editor.Diagnostics.EditorConsoleOccurrence.line { get; }
```

Gets the one-based source line, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L102).

## `message`

<a id="api-e325bb813cd81daa"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.message 95ba159d0e34f611b9a7c403e76e9d15213a43c134d8aef9d753e193bef3ec99 -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.message { get; }
```

Gets the original message text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L82).

## `sequence`

<a id="api-6951d2d200c8bbc6"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.sequence f769f922e9299615be6262d858548a043aff7caf1f7ab01a517f2043bc90bd08 -->

```csharp
public long Inno.Editor.Diagnostics.EditorConsoleOccurrence.sequence { get; }
```

Gets the process-local monotonic sequence assigned when this occurrence entered the Console.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L47).

## `sessionId`

<a id="api-b11a651e42848def"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.sessionId 00f5e1f67ea584a1743c5256ceaec03b1c9dc77f6c69642e948b248940fb21b1 -->

```csharp
public Inno.Core.Logging.LogSessionId Inno.Editor.Diagnostics.EditorConsoleOccurrence.sessionId { get; }
```

Gets the isolated runtime session that emitted this occurrence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L117).

## `source`

<a id="api-4b986f5d061ae3aa"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.source f163ae6b1f26261a71db0138ac19e9974fb0ffffb75bd417543e877fd906cf9e -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.source { get; }
```

Gets the human-readable producer name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L62).

## `sourceId`

<a id="api-63b75e4e542579b0"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.sourceId 63912ab3f45b7b1c2a7c124b49af765d8ccedd923a851349e39bec7a18864128 -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.sourceId { get; }
```

Gets the stable diagnostic producer identifier, or an empty string for log entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L67).

## `stackTrace`

<a id="api-411ff9c0d387c06c"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.stackTrace 0814141162fc25da224b7c83c4cdbe17ade1bc07ced2445c2f21a0c4dbd5ee1d -->

```csharp
public string Inno.Editor.Diagnostics.EditorConsoleOccurrence.stackTrace { get; }
```

Gets the captured stack trace, or an empty string when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L112).

## `time`

<a id="api-590804c30b1693e4"></a>
<!-- api: P:Inno.Editor.Diagnostics.EditorConsoleOccurrence.time 593c3974f0c46635a93bdeb0f6a5865ceb4a87d0261a5a565d7f0b5ce91c0683 -->

```csharp
public System.DateTime Inno.Editor.Diagnostics.EditorConsoleOccurrence.time { get; }
```

Gets the occurrence timestamp.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Diagnostics/EditorConsoleOccurrence.cs#L92).
