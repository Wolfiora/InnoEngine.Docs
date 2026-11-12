---
title: "EditorDragContext"
description: "Reference for EditorDragContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.119dc8fdf9ceb1f2
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDragContext`

This reference describes `EditorDragContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8ee310004a9539e3) | Method |
| [`area`](#api-732101d220d195ba) | Property |
| [`data`](#api-573db282eb60c728) | Property |
| [`editor`](#api-968d6fd82ff8ea17) | Property |
| [`interactions`](#api-a2ab420a47cc3b63) | Property |

## Type declaration

<a id="api-119dc8fdf9ceb1f2"></a>
<!-- api: T:InnoEditor.Interactions.EditorDragContext cee68db7f3eafb11bc74872d5f7afebbf223ed787b2ad42ffa4d24e1d5380e3d -->

```csharp
public sealed class InnoEditor.Interactions.EditorDragContext
```

Provides contextual state while beginning an editor drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L10).

## `#ctor`

<a id="api-8ee310004a9539e3"></a>
<!-- api: M:InnoEditor.Interactions.EditorDragContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData) d272b3ea3c49ff0d4cb9349039493aae1b8c6a43614a46485240679ab0697deb -->

```csharp
public InnoEditor.Interactions.EditorDragContext.EditorDragContext(InnoEditor.Core.EditorContext editor, InnoEditor.Interactions.EditorInteractions interactions, string area, InnoEditor.Interactions.EditorDragData data)
```

Creates a managed editor drag request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

**Throws `System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L33).

## `area`

<a id="api-732101d220d195ba"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragContext.area 2c330c4f065860ac96def7bb371d7cbb873497c6e84089ed738da28bb7832e03 -->

```csharp
public string InnoEditor.Interactions.EditorDragContext.area { get; }
```

Gets the source interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L59).

## `data`

<a id="api-573db282eb60c728"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragContext.data 04cd0559faba074586a56284dd4b87e49183574f41788390738a43bd6547438e -->

```csharp
public InnoEditor.Interactions.EditorDragData InnoEditor.Interactions.EditorDragContext.data { get; }
```

Gets the managed drag data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L64).

## `editor`

<a id="api-968d6fd82ff8ea17"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragContext.editor fa93e5d973577656faba11e016a39c0ecace041e3aa4ab319f3dcffd2ad18949 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorDragContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L49).

## `interactions`

<a id="api-a2ab420a47cc3b63"></a>
<!-- api: P:InnoEditor.Interactions.EditorDragContext.interactions 44248bfe84ef8e79f45afae07f9bc77ffa94419a884037e9aa3f2ba34dcdc4b5 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorDragContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L54).
