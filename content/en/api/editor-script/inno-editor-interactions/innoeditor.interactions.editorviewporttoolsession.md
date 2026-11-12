---
title: "EditorViewportToolSession"
description: "Reference for EditorViewportToolSession in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.a61fa620e964079b
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportToolSession`

This reference describes `EditorViewportToolSession` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2ee931930cf1c8c7) | Method |
| [`Dispose`](#api-366032034bc55b31) | Method |
| [`DrawOverlay`](#api-5281378dc802f9a1) | Method |
| [`HandlePointer`](#api-fe5c9ffc9a776b86) | Method |
| [`HandleShortcut`](#api-a6da04b4b0914f8e) | Method |
| [`SetTool`](#api-27ccb5891960bb95) | Method |
| [`cursor`](#api-1b3f4450aec26c9b) | Property |
| [`tool`](#api-d7bd9741c1b7ac21) | Property |

## Type declaration

<a id="api-a61fa620e964079b"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportToolSession f9fc3efca0bb405e85e8681b1dd0f64000add6eae873251bacabae6182ae2015 -->

```csharp
public sealed class InnoEditor.Interactions.EditorViewportToolSession : System.IDisposable
```

Routes focused viewport input to one active tool while enforcing pointer-capture ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L8).

## `#ctor`

<a id="api-2ee931930cf1c8c7"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.#ctor(InnoEditor.Interactions.IEditorHistory,InnoEditor.Interactions.IEditorViewportCoordinateConverter) c3e72ffd34b242de308a6a8b3c52dad4a76a9118140f3c2773affa604d0f449b -->

```csharp
public InnoEditor.Interactions.EditorViewportToolSession.EditorViewportToolSession(InnoEditor.Interactions.IEditorHistory history, InnoEditor.Interactions.IEditorViewportCoordinateConverter coordinates)
```

Creates a viewport tool session.

**Parameter `history`:** History stack used by gesture transactions.

**Parameter `coordinates`:** Current viewport coordinate converter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L23).

## `Dispose`

<a id="api-366032034bc55b31"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.Dispose 0836b8067f1264f91d105ab009abdcc3b6c358004b43207c071a880c05c4d328 -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolSession.Dispose()
```

Cancels active gesture state and deactivates the tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L115).

## `DrawOverlay`

<a id="api-5281378dc802f9a1"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.DrawOverlay 724a33e8000bf774edf00a0a49407a2fcef27f5cd99e6ca0377f9b1e5ce5d5eb -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolSession.DrawOverlay()
```

Draws the active tool overlay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L106).

## `HandlePointer`

<a id="api-fe5c9ffc9a776b86"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.HandlePointer(InnoEditor.Interactions.EditorViewportPointerEvent) 0bed5645b03b3a9a72f439712ebd0b15022ef7da99e88711026c1839950adcba -->

```csharp
public bool InnoEditor.Interactions.EditorViewportToolSession.HandlePointer(InnoEditor.Interactions.EditorViewportPointerEvent pointer)
```

Routes one immutable pointer sample.

**Parameter `pointer`:** Pointer sample with precomputed world coordinates.

**Returns:** `true` when an active tool accepted the sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L64).

## `HandleShortcut`

<a id="api-a6da04b4b0914f8e"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.HandleShortcut(InnoEditor.Interactions.EditorViewportShortcut) d9e419f0c7d34b7b7d5c196bc48ea64f04bdcac3558f4cb4cd6560140c624b18 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportToolSession.HandleShortcut(InnoEditor.Interactions.EditorViewportShortcut shortcut)
```

Routes one focused keyboard shortcut.

**Parameter `shortcut`:** Pressed key sample.

**Returns:** `true` when consumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L97).

## `SetTool`

<a id="api-27ccb5891960bb95"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportToolSession.SetTool(InnoEditor.Interactions.EditorViewportTool) 1a427119f5a2b2366f3c4cd754a86ab61cdfed5dbab8234803086a5cd0e22364 -->

```csharp
public void InnoEditor.Interactions.EditorViewportToolSession.SetTool(InnoEditor.Interactions.EditorViewportTool? tool)
```

Activates a tool after cancelling any current gesture.

**Parameter `tool`:** Tool to activate, or `null` to deactivate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L46).

## `cursor`

<a id="api-1b3f4450aec26c9b"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportToolSession.cursor dc7f955259a3b099c20dae081eda6655c1584f9a8354d32ef61bb518e7353da6 -->

```csharp
public InnoEditor.Interactions.EditorViewportCursor InnoEditor.Interactions.EditorViewportToolSession.cursor { get; }
```

Gets the requested cursor for the active tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L38).

## `tool`

<a id="api-d7bd9741c1b7ac21"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportToolSession.tool 0af4560cd26d2aa4deccfb222befb4e574109f2725a46e3a57fc32d78b288bc1 -->

```csharp
public InnoEditor.Interactions.EditorViewportTool? InnoEditor.Interactions.EditorViewportToolSession.tool { get; }
```

Gets the active tool, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportToolSession.cs#L33).
