---
title: "GraphCanvasLayout"
description: "Reference for GraphCanvasLayout in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.aff1d2aa6c1bfc31
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasLayout`

This reference describes `GraphCanvasLayout` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-885081eef8816989) | Method |
| [`SetNodes`](#api-0f3111cce7954159) | Method |
| [`TryGetNode`](#api-f68962473bd72753) | Method |
| [`nodes`](#api-7b6044ae14b3d1e1) | Property |

## Type declaration

<a id="api-aff1d2aa6c1bfc31"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasLayout b95410b193b40bf2f9badf8ff37014da12a06b2318c08eacc207f38734a2bae7 -->

```csharp
public sealed class InnoEditor.Graph.GraphCanvasLayout
```

Owns a document's neutral node display snapshot, independently of viewport transforms and domain instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L12).

## `#ctor`

<a id="api-885081eef8816989"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasLayout.#ctor 6bbd5f34448bbfa373bfcd9a93c0d83bbb76cf479ffd509d9591d6aa9916f7c1 -->

```csharp
public InnoEditor.Graph.GraphCanvasLayout.GraphCanvasLayout()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L12).

## `SetNodes`

<a id="api-0f3111cce7954159"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasNode}) bbcc4be14873a93423b2533c6a89185d35c9c97fedfa0dcb6732206e78546dc8 -->

```csharp
public int InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable<InnoEditor.Graph.GraphCanvasNode> nodes)
```

Atomically replaces a complete display snapshot, reusing unchanged node geometry by value.

**Parameter `nodes`:** The current neutral node descriptions in draw order.

**Returns:** The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

**Throws `System.ArgumentNullException`:** The collection or one of its nodes is null.

**Throws `System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L37).

## `TryGetNode`

<a id="api-f68962473bd72753"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasLayout.TryGetNode(InnoEngine.Graphs.GraphNodeId,InnoEditor.Graph.GraphCanvasNode@) b4e767455d028eb6c26dba8351e0b66be53dd9a29b7604fa63ce6f34b6984a01 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasLayout.TryGetNode(InnoEngine.Graphs.GraphNodeId id, out InnoEditor.Graph.GraphCanvasNode? node)
```

Resolves a node in this display snapshot without consulting domain or live-object registries.

**Parameter `id`:** The graph node identity to resolve.

**Parameter `node`:** The current neutral node, or null when it is absent.

**Returns:** True when the current snapshot contains the node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L74).

## `nodes`

<a id="api-7b6044ae14b3d1e1"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasLayout.nodes 4fe98808b0e00a5eeda60d57663352b9acfcaed9498a5123730ce82f9bc0ea32 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Graph.GraphCanvasNode> InnoEditor.Graph.GraphCanvasLayout.nodes { get; }
```

Gets nodes in draw order; reverse order determines overlapping-node hit priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasLayout.cs#L20).
