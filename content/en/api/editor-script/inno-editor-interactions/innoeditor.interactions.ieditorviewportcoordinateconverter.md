---
title: "IEditorViewportCoordinateConverter"
description: "Reference for IEditorViewportCoordinateConverter in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.8b4b24a748df34dd
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `IEditorViewportCoordinateConverter`

This reference describes `IEditorViewportCoordinateConverter` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`ScreenToWorld`](#api-78fa00140e17ec55) | Method |
| [`WorldToScreen`](#api-f9874767da4df93f) | Method |

## Type declaration

<a id="api-8b4b24a748df34dd"></a>
<!-- api: T:InnoEditor.Interactions.IEditorViewportCoordinateConverter 422fa5952876d8a322935fcf00ec45eb32ade7bafe100f73d269adfe36c96007 -->

```csharp
public interface InnoEditor.Interactions.IEditorViewportCoordinateConverter
```

Converts coordinates for one viewport camera without exposing its presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L184).

## `ScreenToWorld`

<a id="api-78fa00140e17ec55"></a>
<!-- api: M:InnoEditor.Interactions.IEditorViewportCoordinateConverter.ScreenToWorld(InnoEngine.Mathematics.Vector2) a7753fe246e3f37871ab1b9bfe3e71ca400412c4822c8699302807645af62277 -->

```csharp
InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.IEditorViewportCoordinateConverter.ScreenToWorld(InnoEngine.Mathematics.Vector2 screenPosition)
```

Converts viewport-local pixel coordinates to world coordinates.

**Parameter `screenPosition`:** Viewport-local pixel coordinates.

**Returns:** World coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L195).

## `WorldToScreen`

<a id="api-f9874767da4df93f"></a>
<!-- api: M:InnoEditor.Interactions.IEditorViewportCoordinateConverter.WorldToScreen(InnoEngine.Mathematics.Vector2) df25d6687bb8a16c7b993003cff1784460c3cae683594217fe01fa1f921178ca -->

```csharp
InnoEngine.Mathematics.Vector2 InnoEditor.Interactions.IEditorViewportCoordinateConverter.WorldToScreen(InnoEngine.Mathematics.Vector2 worldPosition)
```

Converts world coordinates to viewport-local pixel coordinates.

**Parameter `worldPosition`:** World coordinates.

**Returns:** Viewport-local pixel coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L206).
