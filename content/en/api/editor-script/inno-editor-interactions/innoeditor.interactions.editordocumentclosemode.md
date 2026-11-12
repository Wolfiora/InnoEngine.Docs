---
title: "EditorDocumentCloseMode"
description: "Reference for EditorDocumentCloseMode in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.174ef2083be4c000
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDocumentCloseMode`

This reference describes `EditorDocumentCloseMode` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-d4c1011c32aa4d22) | Field |
| [`Discard`](#api-aa40a858b2c9738a) | Field |
| [`Save`](#api-7c8f9c62e0dec032) | Field |

## Type declaration

<a id="api-174ef2083be4c000"></a>
<!-- api: T:InnoEditor.Interactions.EditorDocumentCloseMode f2d223bf77eccde7185018903acd35731f14ab60da837c8c4b57c3f1e4f4b847 -->

```csharp
public enum InnoEditor.Interactions.EditorDocumentCloseMode : int
```

Selects how a dirty document responds to a close request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L9).

## `Cancel`

<a id="api-d4c1011c32aa4d22"></a>
<!-- api: F:InnoEditor.Interactions.EditorDocumentCloseMode.Cancel 992b61426851f60ac1b9290c7e62e0707454b6943851799a804b3f4b0f35ed27 -->

```csharp
InnoEditor.Interactions.EditorDocumentCloseMode.Cancel = 0
```

Keeps the document open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L14).

## `Discard`

<a id="api-aa40a858b2c9738a"></a>
<!-- api: F:InnoEditor.Interactions.EditorDocumentCloseMode.Discard 0d837e1533d8c4566081cab8a1b1789e2c8eff081c70a719f1fcc1e1abd6cedd -->

```csharp
InnoEditor.Interactions.EditorDocumentCloseMode.Discard = 2
```

Closes the document and discards unsaved state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L22).

## `Save`

<a id="api-7c8f9c62e0dec032"></a>
<!-- api: F:InnoEditor.Interactions.EditorDocumentCloseMode.Save b440026c719d024bb88b544f08c9ad983f6e35a26029347852c097af45b8f8f8 -->

```csharp
InnoEditor.Interactions.EditorDocumentCloseMode.Save = 1
```

Closes the document after saving.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L18).
