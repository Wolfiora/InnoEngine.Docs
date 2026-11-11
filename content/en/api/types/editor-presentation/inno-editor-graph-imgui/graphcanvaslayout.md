---
title: "GraphCanvasLayout"
description: "Reference for GraphCanvasLayout in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.44e3529e02735e60
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasLayout`

This reference describes `GraphCanvasLayout` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2bc25dc58ade11ad) | Method |
| [`SetNodes`](#api-733df9e153ce7d49) | Method |
| [`TryGetNode`](#api-53ab69ca3a57a658) | Method |
| [`nodes`](#api-9b2d3765ce5c89f7) | Property |

## Type declaration

<a id="api-44e3529e02735e60"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasLayout 9bf8a93c68d8e8193858449b79038f72fd7ce22d435d5ac4215557cd1394fe23 -->

```csharp
public sealed class Inno.Editor.Graph.ImGui.GraphCanvasLayout
```

Owns a document's neutral node display snapshot, independently of viewport transforms and domain instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L12).

## `#ctor`

<a id="api-2bc25dc58ade11ad"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasLayout.#ctor 36a52fe75fb7ec2bca4501ae28d88744b79448ca07cf8c71cf447b2edf082499 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasLayout.GraphCanvasLayout()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L12).

## `SetNodes`

<a id="api-733df9e153ce7d49"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{Inno.Editor.Graph.ImGui.GraphCanvasNode}) e3210e5367f3b2bb30aeb52292d7e466ed9d6babfa215493f60305f25c73f5fa -->

```csharp
public int Inno.Editor.Graph.ImGui.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable<Inno.Editor.Graph.ImGui.GraphCanvasNode> nodes)
```

Atomically replaces a complete display snapshot, reusing unchanged node geometry by value.

**Parameter `nodes`:** The current neutral node descriptions in draw order.

**Returns:** The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

**Throws `System.ArgumentNullException`:** The collection or one of its nodes is null.

**Throws `System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L37).

## `TryGetNode`

<a id="api-53ab69ca3a57a658"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasLayout.TryGetNode(Inno.Core.Graphs.GraphNodeId,Inno.Editor.Graph.ImGui.GraphCanvasNode@) d06fd39aa37b06d9d8ca5e8ba67896ef73be19eb9ff6acaf9f7d09afd4de33d9 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasLayout.TryGetNode(Inno.Core.Graphs.GraphNodeId id, out Inno.Editor.Graph.ImGui.GraphCanvasNode? node)
```

Resolves a node in this display snapshot without consulting domain or live-object registries.

**Parameter `id`:** The graph node identity to resolve.

**Parameter `node`:** The current neutral node, or null when it is absent.

**Returns:** True when the current snapshot contains the node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L74).

## `nodes`

<a id="api-9b2d3765ce5c89f7"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasLayout.nodes afc79189a446d9cdc1c5e119133877a5601247601fb20292f28a06c8446a9820 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Graph.ImGui.GraphCanvasNode> Inno.Editor.Graph.ImGui.GraphCanvasLayout.nodes { get; }
```

Gets nodes in draw order; reverse order determines overlapping-node hit priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L20).
