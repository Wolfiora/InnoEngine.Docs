---
title: "EditorDragContext"
description: "Reference for EditorDragContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.e51b951c9a587beb
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDragContext`

This reference describes `EditorDragContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b38795d5ee5d9666) | Method |
| [`area`](#api-a9f394b01f24edfc) | Property |
| [`data`](#api-648ccc6de43583d4) | Property |
| [`editor`](#api-2d15ff72d22967b9) | Property |
| [`interactions`](#api-6208ab71672a02cf) | Property |

## Type declaration

<a id="api-e51b951c9a587beb"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDragContext 7a7652612ad3543837937b3dfb944aa813385d8ae55643d64e4a34763cf54b9f -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDragContext
```

Provides contextual state while beginning an editor drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L10).

## `#ctor`

<a id="api-b38795d5ee5d9666"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDragContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData) 1e6856d9a81865a158d9fed26d646e2266007d5dcb4c4b99a8975a8ae247908f -->

```csharp
public Inno.Editor.Interactions.EditorDragContext.EditorDragContext(Inno.Editor.Core.EditorContext editor, Inno.Editor.Interactions.EditorInteractions interactions, string area, Inno.Editor.Interactions.EditorDragData data)
```

Creates a managed editor drag request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

**Throws `System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L33).

## `area`

<a id="api-a9f394b01f24edfc"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragContext.area 31afee56eb5888e4410a32aa00a706d1edd1b3ec76b7c8765b7b454ccf06e9be -->

```csharp
public string Inno.Editor.Interactions.EditorDragContext.area { get; }
```

Gets the source interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L59).

## `data`

<a id="api-648ccc6de43583d4"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragContext.data a6e2f2a85e9c7be754cd0907cce71c5e2b66305360aa12fd775d98d2116bd0b9 -->

```csharp
public Inno.Editor.Interactions.EditorDragData Inno.Editor.Interactions.EditorDragContext.data { get; }
```

Gets the managed drag data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L64).

## `editor`

<a id="api-2d15ff72d22967b9"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragContext.editor 255236c258640d410c8fc0c99c3581ba2c240336d9f182b014c8187c46050ebf -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorDragContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L49).

## `interactions`

<a id="api-6208ab71672a02cf"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDragContext.interactions d4f6de43658b4703053b8ff8f61a2049e9bb99901b3f5ed69b826c4bcd495cc3 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorDragContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDragContext.cs#L54).
