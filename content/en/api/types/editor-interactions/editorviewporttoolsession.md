---
title: "EditorViewportToolSession"
description: "Reference for EditorViewportToolSession in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.807e4b9fffa0e60f
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportToolSession`

This reference describes `EditorViewportToolSession` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-62155119e47b4a87) | Method |
| [`Dispose`](#api-95159c7ca431e8c1) | Method |
| [`DrawOverlay`](#api-c9a654b7a58ca922) | Method |
| [`HandlePointer`](#api-531301eb1222738a) | Method |
| [`HandleShortcut`](#api-fa7bbc8e113182b2) | Method |
| [`SetTool`](#api-bbdf3400d49a9438) | Method |
| [`cursor`](#api-509b4ff02e8e52f6) | Property |
| [`tool`](#api-22036bbe6bf93edc) | Property |

## Type declaration

<a id="api-807e4b9fffa0e60f"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportToolSession ea9c1bc94abe5c9fd4eaef23b9061205a3fb885f89b3f89ff8476540254d68e0 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorViewportToolSession : System.IDisposable
```

Routes focused viewport input to one active tool while enforcing pointer-capture ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L8).

## `#ctor`

<a id="api-62155119e47b4a87"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.#ctor(Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Interactions.IEditorViewportCoordinateConverter) 0d004734d3cd3a3c2837a05c5d1cb31e98e12bb638c6f57dce966e10dd504c6e -->

```csharp
public Inno.Editor.Interactions.EditorViewportToolSession.EditorViewportToolSession(Inno.Editor.Interactions.IEditorHistory history, Inno.Editor.Interactions.IEditorViewportCoordinateConverter coordinates)
```

Creates a viewport tool session.

**Parameter `history`:** History stack used by gesture transactions.

**Parameter `coordinates`:** Current viewport coordinate converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L23).

## `Dispose`

<a id="api-95159c7ca431e8c1"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.Dispose 8f3bbdf9ee1fe06f0857325041e0e891384a38058b09c31e11384ac9c253f743 -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolSession.Dispose()
```

Cancels active gesture state and deactivates the tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L115).

## `DrawOverlay`

<a id="api-c9a654b7a58ca922"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.DrawOverlay 54301c037ac05765c9e53067f5f087244cc734b481567e89e8a54b99125e9684 -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolSession.DrawOverlay()
```

Draws the active tool overlay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L106).

## `HandlePointer`

<a id="api-531301eb1222738a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.HandlePointer(Inno.Editor.Interactions.EditorViewportPointerEvent) 68c0d138a39677ae9d9e86ecc74bf4db4b3c6bb5487bf988fe2a2d84ab3a24af -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportToolSession.HandlePointer(Inno.Editor.Interactions.EditorViewportPointerEvent pointer)
```

Routes one immutable pointer sample.

**Parameter `pointer`:** Pointer sample with precomputed world coordinates.

**Returns:** `true` when an active tool accepted the sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L64).

## `HandleShortcut`

<a id="api-fa7bbc8e113182b2"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.HandleShortcut(Inno.Editor.Interactions.EditorViewportShortcut) 6963c154d40b0e06a42db9ae0fa921662405b936a61db75cc184b0deaa38d994 -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportToolSession.HandleShortcut(Inno.Editor.Interactions.EditorViewportShortcut shortcut)
```

Routes one focused keyboard shortcut.

**Parameter `shortcut`:** Pressed key sample.

**Returns:** `true` when consumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L97).

## `SetTool`

<a id="api-bbdf3400d49a9438"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportToolSession.SetTool(Inno.Editor.Interactions.EditorViewportTool) d4e686a4ee9f85fb37e888d3dbb46c37d28a38bec66c6d19c3d141b74f1c9a0e -->

```csharp
public void Inno.Editor.Interactions.EditorViewportToolSession.SetTool(Inno.Editor.Interactions.EditorViewportTool? tool)
```

Activates a tool after cancelling any current gesture.

**Parameter `tool`:** Tool to activate, or `null` to deactivate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L46).

## `cursor`

<a id="api-509b4ff02e8e52f6"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportToolSession.cursor 529864aa8575b09bb25809bdae032499bd7abcdca08bc5a0a5801c230601f6eb -->

```csharp
public Inno.Editor.Interactions.EditorViewportCursor Inno.Editor.Interactions.EditorViewportToolSession.cursor { get; }
```

Gets the requested cursor for the active tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L38).

## `tool`

<a id="api-22036bbe6bf93edc"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportToolSession.tool c9e483a59607cd98c253b2d0f32ee700cbb21e73d0fa4eaec50b18d9cf7efe2e -->

```csharp
public Inno.Editor.Interactions.EditorViewportTool? Inno.Editor.Interactions.EditorViewportToolSession.tool { get; }
```

Gets the active tool, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L33).
