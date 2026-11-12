---
title: "EditorHistoryContext"
description: "Reference for EditorHistoryContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.646118cbb5f201cc
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryContext`

This reference describes `EditorHistoryContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b43ee1019f943156) | Method |
| [`editor`](#api-8a0198ca26d9e0a6) | Property |
| [`interactions`](#api-f86e6249566c1936) | Property |

## Type declaration

<a id="api-646118cbb5f201cc"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryContext b0891ceced7cfd0a06f5bc47710a29b2a1cabaa743089aa45c1d878e51dcdbda -->

```csharp
public sealed class InnoEditor.Interactions.EditorHistoryContext
```

Provides current-generation editor services to a history change handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L10).

## `#ctor`

<a id="api-b43ee1019f943156"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryContext.#ctor 61f57e326be27123b35fa81bc0b368274f2f873fd5990a32e6d3c921b3b0e40d -->

```csharp
public InnoEditor.Interactions.EditorHistoryContext.EditorHistoryContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L10).

## `editor`

<a id="api-8a0198ca26d9e0a6"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryContext.editor 55013b5b6b8d970ac362bec721b7ea75f492b8142b87552c37e0c932eaf431c0 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorHistoryContext.editor { get; }
```

Gets the passive editor context for the active project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L23).

## `interactions`

<a id="api-f86e6249566c1936"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryContext.interactions 83728e640bbff5b676e3ed77a9d05f5e55985deac053f97d163f07509e324bd0 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorHistoryContext.interactions { get; }
```

Gets the active interaction entry point used for selection and feature coordination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryContext.cs#L28).
