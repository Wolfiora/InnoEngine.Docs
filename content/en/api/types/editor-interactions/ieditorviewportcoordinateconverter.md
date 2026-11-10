---
title: "IEditorViewportCoordinateConverter"
description: "Reference for IEditorViewportCoordinateConverter in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.f06a59fae419198a
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `IEditorViewportCoordinateConverter`

This reference describes `IEditorViewportCoordinateConverter` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ScreenToWorld`](#api-c105d3a620ccd457) | Method |
| [`WorldToScreen`](#api-b75c5aedd18f2b16) | Method |

## Type declaration

<a id="api-f06a59fae419198a"></a>
<!-- api: T:Inno.Editor.Interactions.IEditorViewportCoordinateConverter 08ea81c2e32f87c2643a3c221bacd799c247ca8009b9642d24dc918a1d7355ad -->

```csharp
public interface Inno.Editor.Interactions.IEditorViewportCoordinateConverter
```

Converts coordinates for one viewport camera without exposing its presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L184).

## `ScreenToWorld`

<a id="api-c105d3a620ccd457"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorViewportCoordinateConverter.ScreenToWorld(Inno.Core.Mathematics.Vector2) 59263173411be43ce9dc2b43df0d69fd12fe0b48ce1f7bf5ea8dfaf3855cefdd -->

```csharp
Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.IEditorViewportCoordinateConverter.ScreenToWorld(Inno.Core.Mathematics.Vector2 screenPosition)
```

Converts viewport-local pixel coordinates to world coordinates.

**Parameter `screenPosition`:** Viewport-local pixel coordinates.

**Returns:** World coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L195).

## `WorldToScreen`

<a id="api-b75c5aedd18f2b16"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorViewportCoordinateConverter.WorldToScreen(Inno.Core.Mathematics.Vector2) b776149d1d70325891de399354351350ef39276e9a5059cff27865fab5f4f16c -->

```csharp
Inno.Core.Mathematics.Vector2 Inno.Editor.Interactions.IEditorViewportCoordinateConverter.WorldToScreen(Inno.Core.Mathematics.Vector2 worldPosition)
```

Converts world coordinates to viewport-local pixel coordinates.

**Parameter `worldPosition`:** World coordinates.

**Returns:** Viewport-local pixel coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L206).
