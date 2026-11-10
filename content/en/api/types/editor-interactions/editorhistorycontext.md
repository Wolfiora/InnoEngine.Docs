---
title: "EditorHistoryContext"
description: "Reference for EditorHistoryContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.1fb31ab99be66812
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryContext`

This reference describes `EditorHistoryContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`editor`](#api-751d2a736ffae8c0) | Property |
| [`interactions`](#api-d6f5e8c6bc9b0f1d) | Property |

## Type declaration

<a id="api-1fb31ab99be66812"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryContext ce805416fd3073b653d8c42a36a96eb948088875e71876cda719bd9cfb8fe2bd -->

```csharp
public sealed class Inno.Editor.Interactions.EditorHistoryContext
```

Provides current-generation editor services to a history change handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L10).

## `editor`

<a id="api-751d2a736ffae8c0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryContext.editor f39911a709249ab972b8a081f7826b6d87d83f0bcc728873f42038a07308203f -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorHistoryContext.editor { get; }
```

Gets the passive editor context for the active project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L23).

## `interactions`

<a id="api-d6f5e8c6bc9b0f1d"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryContext.interactions be10a16f3fe3d9485816b7a9e478c634f823abe1e5fa0f7f3794d0f5ca3c03f4 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorHistoryContext.interactions { get; }
```

Gets the active interaction entry point used for selection and feature coordination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L28).
