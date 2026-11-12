---
title: "GraphCanvasPointerController"
description: "Reference for GraphCanvasPointerController in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.e3fe67cc8287fec2
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasPointerController`

This reference describes `GraphCanvasPointerController` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4ca30aa26a8ce59f) | Method |
| [`BeginMove`](#api-4ea02b1880929a6b) | Method |
| [`Cancel`](#api-0a1498ca312908fb) | Method |
| [`Step`](#api-aff6b1d38ced822e) | Method |
| [`boxStart`](#api-95254ffc9d10226a) | Property |
| [`isBoxSelecting`](#api-8c6732f04dabc40b) | Property |
| [`isMoving`](#api-3d729ed4787ce9b9) | Property |
| [`previewPositions`](#api-ae340b509196810f) | Property |

## Type declaration

<a id="api-e3fe67cc8287fec2"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasPointerController bcb82df16f01697bab22f4b659838dee266fde4fb820aa3e80938451c3dc8800 -->

```csharp
public sealed class InnoEditor.Graph.GraphCanvasPointerController
```

Coordinates neutral selection, movement previews, box selection and connection intents for one canvas.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L14).

## `#ctor`

<a id="api-4ca30aa26a8ce59f"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPointerController.#ctor(InnoEditor.Graph.GraphCanvasState) e0e3c85946fae49dcfa860fa8e5fc88faf00963ed072c8f6527d2e1790fb42be -->

```csharp
public InnoEditor.Graph.GraphCanvasPointerController.GraphCanvasPointerController(InnoEditor.Graph.GraphCanvasState state)
```

Creates a pointer owner over existing document navigation and selection state.

**Parameter `state`:** The existing canvas state, which remains the selection and pending-connection authority.

**Throws `System.ArgumentNullException`:** The state is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L34).

## `BeginMove`

<a id="api-4ea02b1880929a6b"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPointerController.BeginMove(InnoEditor.Graph.GraphCanvasLayout,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},System.Numerics.Vector2) 934070db36774f6ddfe966d308dd58364726859b6bd9ceef72850b545c5bc34b -->

```csharp
public void InnoEditor.Graph.GraphCanvasPointerController.BeginMove(InnoEditor.Graph.GraphCanvasLayout layout, System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodes, System.Numerics.Vector2 pointer)
```

Starts movement for explicit node IDs, supporting domain-owned group-header composition.

**Parameter `layout`:** The neutral snapshot supplying initial positions.

**Parameter `nodes`:** Selected stable graph identities; absent nodes remain selected but are not moved.

**Parameter `pointer`:** The screen-space gesture start.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L85).

## `Cancel`

<a id="api-0a1498ca312908fb"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPointerController.Cancel 38d281c16db5ac4d8a2c73176dc8797a7a5736fb20d428a44727b1f7910b11b3 -->

```csharp
public void InnoEditor.Graph.GraphCanvasPointerController.Cancel()
```

Cancels transient presentation state without applying or undoing document changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L64).

## `Step`

<a id="api-aff6b1d38ced822e"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasPointerController.Step(InnoEditor.Graph.GraphCanvasView,InnoEditor.Graph.GraphCanvasLayout,InnoEditor.Graph.GraphCanvasPointerInput) 648f8a71dcb0495e6afa77ff1b29e3253617eb213e648c20ff449e5f4cdba370 -->

```csharp
public InnoEditor.Graph.GraphCanvasPointerResult InnoEditor.Graph.GraphCanvasPointerController.Step(InnoEditor.Graph.GraphCanvasView view, InnoEditor.Graph.GraphCanvasLayout layout, InnoEditor.Graph.GraphCanvasPointerInput input)
```

Consumes one routed frame and returns data-editing intents without invoking domain code.

**Parameter `view`:** The current canvas projection.

**Parameter `layout`:** The immutable neutral node snapshot used by drawing and hit testing.

**Parameter `input`:** Current pointer input after the caller's focus, navigation and overlay routing.

**Returns:** Completed neutral intents. The feature owns validation, atomic mutation and History recording.

**Throws `System.ArgumentOutOfRangeException`:** The pointer position is nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L121).

## `boxStart`

<a id="api-95254ffc9d10226a"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerController.boxStart 939c747edb35a72d40e1281cec4c957b72c7fcf0fef24263807fc28a7425646a -->

```csharp
public System.Numerics.Vector2 InnoEditor.Graph.GraphCanvasPointerController.boxStart { get; }
```

Gets the initial screen-space corner of the current selection box.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L59).

## `isBoxSelecting`

<a id="api-8c6732f04dabc40b"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerController.isBoxSelecting 65c384efcd1182f138c6ab8ce68864b4276ec5ef820ebd792e8612b814a8a35c -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerController.isBoxSelecting { get; }
```

Gets whether a selection box is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L54).

## `isMoving`

<a id="api-3d729ed4787ce9b9"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerController.isMoving fa98006359c3e9ea2779a89204700bb18b9e031056cb2dfd12f4093418a7260b -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerController.isMoving { get; }
```

Gets whether a node movement preview is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L49).

## `previewPositions`

<a id="api-ae340b509196810f"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerController.previewPositions 1fe5052ab18554cf9d7c11e5e50b0626642241877a82362bd898994a03440987 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<InnoEngine.Graphs.GraphNodeId, InnoEngine.Graphs.GraphPosition> InnoEditor.Graph.GraphCanvasPointerController.previewPositions { get; }
```

Gets frame-local movement previews; callers must not persist this changing view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L44).
