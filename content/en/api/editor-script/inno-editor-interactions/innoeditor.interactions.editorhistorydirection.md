---
title: "EditorHistoryDirection"
description: "Reference for EditorHistoryDirection in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.4a8add6447b2f354
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryDirection`

This reference describes `EditorHistoryDirection` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Redo`](#api-1305464abd94f9f1) | Field |
| [`Undo`](#api-d4ef96ed9176cd49) | Field |

## Type declaration

<a id="api-4a8add6447b2f354"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryDirection ecdb211f425be40134e23b44835336918451bbbe159724d556a66080ef91ef83 -->

```csharp
public enum InnoEditor.Interactions.EditorHistoryDirection : int
```

Identifies the direction in which an editor history change is being applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L6).

## `Redo`

<a id="api-1305464abd94f9f1"></a>
<!-- api: F:InnoEditor.Interactions.EditorHistoryDirection.Redo 50bd5892bbebb02d266b30f52c27395e8be71b74a26c7a3c4bd3dc75d3b313c4 -->

```csharp
InnoEditor.Interactions.EditorHistoryDirection.Redo = 1
```

Restores the state produced by the committed change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L16).

## `Undo`

<a id="api-d4ef96ed9176cd49"></a>
<!-- api: F:InnoEditor.Interactions.EditorHistoryDirection.Undo 495c20ed7f684ab01bc6a262ba4499c8a9e30fba9eed61256d314b3db28e7a32 -->

```csharp
InnoEditor.Interactions.EditorHistoryDirection.Undo = 0
```

Restores the state that existed before the change was committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryDirection.cs#L11).
