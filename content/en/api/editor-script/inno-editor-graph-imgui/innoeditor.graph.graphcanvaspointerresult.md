---
title: "GraphCanvasPointerResult"
description: "Reference for GraphCanvasPointerResult in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.dc5e68ec4a6e9885
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasPointerResult`

This reference describes `GraphCanvasPointerResult` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`input`](#api-36d2f02a750d1911) | Property |
| [`movedNodes`](#api-0064f2d480d47e48) | Property |
| [`nodePressed`](#api-c756f68e111cbba6) | Property |
| [`output`](#api-651e4c80c656b7a0) | Property |
| [`releasedOutput`](#api-6f8033f13fa66cf3) | Property |

## Type declaration

<a id="api-dc5e68ec4a6e9885"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasPointerResult ebfc4d7c150385362ca6f4c460909bf38957992ca8c73a737919a111be42a876 -->

```csharp
public readonly struct InnoEditor.Graph.GraphCanvasPointerResult
```

Reports neutral interaction intents for the feature controller to validate and apply through History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L9).

## `input`

<a id="api-36d2f02a750d1911"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerResult.input 11c40f1efe58802d86de0fc886cded825e0d72bf0551a3d246a235c271acf39b -->

```csharp
public InnoEngine.Graphs.GraphEndpoint? InnoEditor.Graph.GraphCanvasPointerResult.input { get; }
```

Gets a requested connection's input endpoint, paired with the output endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L43).

## `movedNodes`

<a id="api-0064f2d480d47e48"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerResult.movedNodes 1a578820947af08bf7fd47cd651e2293ef7fac3f6f97aff16c8eb3f8f69a1ed5 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<InnoEngine.Graphs.GraphNodeId, InnoEngine.Graphs.GraphPosition>? InnoEditor.Graph.GraphCanvasPointerResult.movedNodes { get; }
```

Gets completed movement positions, or null when no data edit was requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L33).

## `nodePressed`

<a id="api-c756f68e111cbba6"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerResult.nodePressed f1c5dc025d3ac592c236217b20d761cf2b046b41e1dd41ea8d53b5ae1575ebe7 -->

```csharp
public InnoEngine.Graphs.GraphNodeId? InnoEditor.Graph.GraphCanvasPointerResult.nodePressed { get; }
```

Gets the pressed node header, or null when no header was pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L28).

## `output`

<a id="api-651e4c80c656b7a0"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerResult.output c05ca1f90e38f514b96e2b67ed9e2d84cc66653eed07cfb8d1a588f38abdb7b6 -->

```csharp
public InnoEngine.Graphs.GraphEndpoint? InnoEditor.Graph.GraphCanvasPointerResult.output { get; }
```

Gets a requested connection's output endpoint; its domain type still requires validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L38).

## `releasedOutput`

<a id="api-6f8033f13fa66cf3"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerResult.releasedOutput 64cc185333bc8d4ed277a77a0b0f2fa9df6883fdbe140ceb8a2420f54a0a9486 -->

```csharp
public InnoEngine.Graphs.GraphEndpoint? InnoEditor.Graph.GraphCanvasPointerResult.releasedOutput { get; }
```

Gets an output released over empty canvas, allowing the feature to offer a creation workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerResult.cs#L48).
