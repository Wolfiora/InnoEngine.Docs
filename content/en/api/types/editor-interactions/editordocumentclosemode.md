---
title: "EditorDocumentCloseMode"
description: "Reference for EditorDocumentCloseMode in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.ca74e9e356cb5500
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDocumentCloseMode`

This reference describes `EditorDocumentCloseMode` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-63696611af094c6f) | Field |
| [`Discard`](#api-05af7010d672d0ec) | Field |
| [`Save`](#api-a01f66463e992bb1) | Field |

## Type declaration

<a id="api-ca74e9e356cb5500"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDocumentCloseMode 51c654f680dce2282282a5f5bd58fe04a9658b4745fca6ea89cc8192d7da3321 -->

```csharp
public enum Inno.Editor.Interactions.EditorDocumentCloseMode : int
```

Selects how a dirty document responds to a close request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L9).

## `Cancel`

<a id="api-63696611af094c6f"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDocumentCloseMode.Cancel 4ffff51dad0675a86e18cf697131afb4023ccbd034bde5d9e38505ef70e17e42 -->

```csharp
Inno.Editor.Interactions.EditorDocumentCloseMode.Cancel = 0
```

Keeps the document open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L14).

## `Discard`

<a id="api-05af7010d672d0ec"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDocumentCloseMode.Discard 57495ae2e85edada6e06e7ebb7a0ed49937d6398644e04cfb44f881cc454bdb8 -->

```csharp
Inno.Editor.Interactions.EditorDocumentCloseMode.Discard = 2
```

Closes the document and discards unsaved state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L22).

## `Save`

<a id="api-a01f66463e992bb1"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDocumentCloseMode.Save 2fa79c49defaa20b652f544b825e080dbb0ef3c6917d5a43d0c6abe932c95ee2 -->

```csharp
Inno.Editor.Interactions.EditorDocumentCloseMode.Save = 1
```

Closes the document after saving.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L18).
