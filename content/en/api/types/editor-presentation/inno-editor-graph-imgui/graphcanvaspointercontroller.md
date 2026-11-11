---
title: "GraphCanvasPointerController"
description: "Reference for GraphCanvasPointerController in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.601c7b0ebb02ff07
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasPointerController`

This reference describes `GraphCanvasPointerController` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c6e98bcc2c0575e3) | Method |
| [`BeginMove`](#api-df929108a2e73487) | Method |
| [`Cancel`](#api-ab1a623f90ac73cd) | Method |
| [`Step`](#api-2cbffc3d494776bd) | Method |
| [`boxStart`](#api-febbd4199fe0b35d) | Property |
| [`isBoxSelecting`](#api-1564cb0bd9e6e325) | Property |
| [`isMoving`](#api-171fd430f893d7f5) | Property |
| [`previewPositions`](#api-df10e5fd73c21ac3) | Property |

## Type declaration

<a id="api-601c7b0ebb02ff07"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasPointerController fa5fcb65f65aa68e0c49f83d919232f715a1e01f1e9ba92ba68487b74cf17b16 -->

```csharp
public sealed class Inno.Editor.Graph.ImGui.GraphCanvasPointerController
```

Coordinates neutral selection, movement previews, box selection and connection intents for one canvas.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L14).

## `#ctor`

<a id="api-c6e98bcc2c0575e3"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.#ctor(Inno.Editor.Graph.GraphCanvasState) 29821b2c9068bc72cfba10834f9886fe8d255c442587a010a7c60da581262dba -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasPointerController.GraphCanvasPointerController(Inno.Editor.Graph.GraphCanvasState state)
```

Creates a pointer owner over existing document navigation and selection state.

**Parameter `state`:** The existing canvas state, which remains the selection and pending-connection authority.

**Throws `System.ArgumentNullException`:** The state is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L34).

## `BeginMove`

<a id="api-df929108a2e73487"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.BeginMove(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},System.Numerics.Vector2) 184109c948bf5d337dedc5ad7f4631d9b8e0feea18206e330cc3084c6a259a85 -->

```csharp
public void Inno.Editor.Graph.ImGui.GraphCanvasPointerController.BeginMove(Inno.Editor.Graph.ImGui.GraphCanvasLayout layout, System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodes, System.Numerics.Vector2 pointer)
```

Starts movement for explicit node IDs, supporting domain-owned group-header composition.

**Parameter `layout`:** The neutral snapshot supplying initial positions.

**Parameter `nodes`:** Selected stable graph identities; absent nodes remain selected but are not moved.

**Parameter `pointer`:** The screen-space gesture start.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L85).

## `Cancel`

<a id="api-ab1a623f90ac73cd"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Cancel 15d3406acda497f146755adf790ecbd3971ab2c9f17ca3117b3977d7e9e100fa -->

```csharp
public void Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Cancel()
```

Cancels transient presentation state without applying or undoing document changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L64).

## `Step`

<a id="api-2cbffc3d494776bd"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Step(Inno.Editor.Graph.ImGui.GraphCanvasView,Inno.Editor.Graph.ImGui.GraphCanvasLayout,Inno.Editor.Graph.ImGui.GraphCanvasPointerInput) 7489a9cebb8d6a74729587ead5dd67c22c7252947ac916928b3159b9146f9a25 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasPointerResult Inno.Editor.Graph.ImGui.GraphCanvasPointerController.Step(Inno.Editor.Graph.ImGui.GraphCanvasView view, Inno.Editor.Graph.ImGui.GraphCanvasLayout layout, Inno.Editor.Graph.ImGui.GraphCanvasPointerInput input)
```

Consumes one routed frame and returns data-editing intents without invoking domain code.

**Parameter `view`:** The current canvas projection.

**Parameter `layout`:** The immutable neutral node snapshot used by drawing and hit testing.

**Parameter `input`:** Current pointer input after the caller's focus, navigation and overlay routing.

**Returns:** Completed neutral intents. The feature owns validation, atomic mutation and History recording.

**Throws `System.ArgumentOutOfRangeException`:** The pointer position is nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L121).

## `boxStart`

<a id="api-febbd4199fe0b35d"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.boxStart 875035f701f53cf3ff218d6e6d581a6eb8a0eb010ee40c472b14e36f62163a19 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Graph.ImGui.GraphCanvasPointerController.boxStart { get; }
```

Gets the initial screen-space corner of the current selection box.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L59).

## `isBoxSelecting`

<a id="api-1564cb0bd9e6e325"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.isBoxSelecting 9513e6767897051482eafb16e5726c6e5a2054a78a880ffad3cf38c2d11fc99c -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerController.isBoxSelecting { get; }
```

Gets whether a selection box is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L54).

## `isMoving`

<a id="api-171fd430f893d7f5"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.isMoving ed67836821618637b8b932ddeb48a2f89caee2f6c075b44c4146f11222e1cdf9 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerController.isMoving { get; }
```

Gets whether a node movement preview is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L49).

## `previewPositions`

<a id="api-df10e5fd73c21ac3"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.previewPositions 801974f9700f40d2595f41b7b15944f7d3d6e62afd471cfddb5923710c908865 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Core.Graphs.GraphPosition> Inno.Editor.Graph.ImGui.GraphCanvasPointerController.previewPositions { get; }
```

Gets frame-local movement previews; callers must not persist this changing view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerController.cs#L44).
