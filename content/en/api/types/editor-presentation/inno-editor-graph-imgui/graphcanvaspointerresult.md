---
title: "GraphCanvasPointerResult"
description: "Reference for GraphCanvasPointerResult in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.871d86a2e5de54fa
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasPointerResult`

This reference describes `GraphCanvasPointerResult` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`input`](#api-e003ad1177f1514d) | Property |
| [`movedNodes`](#api-ecb5a29bba847791) | Property |
| [`nodePressed`](#api-92b9e64c457e09f3) | Property |
| [`output`](#api-3889b2ca3c528075) | Property |
| [`releasedOutput`](#api-6e6e0d42be5a3809) | Property |

## Type declaration

<a id="api-871d86a2e5de54fa"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult 3cdbca1fe9b7289bf06a47e931176ee61db0c70b3f7ba74f490ebd1d81c38438 -->

```csharp
public readonly struct Inno.Editor.Graph.ImGui.GraphCanvasPointerResult
```

Reports neutral interaction intents for the feature controller to validate and apply through History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L9).

## `input`

<a id="api-e003ad1177f1514d"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.input 76bcbf43cd94123d0006287a8e84c650d12a6ea68f3ca671de6feab3d8bc0f30 -->

```csharp
public Inno.Core.Graphs.GraphEndpoint? Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.input { get; }
```

Gets a requested connection's input endpoint, paired with the output endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L43).

## `movedNodes`

<a id="api-ecb5a29bba847791"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.movedNodes 0c6d92ae16ee2abad38122568da667fb4f21b0b2a621f429b9f3a63083cfc3be -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Core.Graphs.GraphPosition>? Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.movedNodes { get; }
```

Gets completed movement positions, or null when no data edit was requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L33).

## `nodePressed`

<a id="api-92b9e64c457e09f3"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.nodePressed 3978859ed64510936827f6dcfe6de2496a206188eec703832413fb7e8b7ba1ec -->

```csharp
public Inno.Core.Graphs.GraphNodeId? Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.nodePressed { get; }
```

Gets the pressed node header, or null when no header was pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L28).

## `output`

<a id="api-3889b2ca3c528075"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.output 006e26672e3e874d55c208e3a3c5939fe0b4de5fe2c576de50893032978f4a03 -->

```csharp
public Inno.Core.Graphs.GraphEndpoint? Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.output { get; }
```

Gets a requested connection's output endpoint; its domain type still requires validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L38).

## `releasedOutput`

<a id="api-6e6e0d42be5a3809"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.releasedOutput 506a36ea540125e2f7856ac2f9feb55ca7a40408c4b597bc3063471a368ae507 -->

```csharp
public Inno.Core.Graphs.GraphEndpoint? Inno.Editor.Graph.ImGui.GraphCanvasPointerResult.releasedOutput { get; }
```

Gets an output released over empty canvas, allowing the feature to offer a creation workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L48).
