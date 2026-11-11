---
title: "GraphCanvasNode"
description: "Reference for GraphCanvasNode in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.55126ed5ada013f4
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasNode`

This reference describes `GraphCanvasNode` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dbdaf723815398eb) | Method |
| [`headerHeight`](#api-491723cb1288b9bf) | Property |
| [`id`](#api-aaba2a1efa8e08b7) | Property |
| [`ports`](#api-4eadf72a16bb3a17) | Property |
| [`position`](#api-ad2f8b34c4467bb1) | Property |
| [`size`](#api-6705f04a48da5310) | Property |
| [`title`](#api-7c8adcc977d1e1b6) | Property |

## Type declaration

<a id="api-55126ed5ada013f4"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasNode 46b55b9e9b5b5d53c7306363e431350a609a616d1e6b470f85f9cad2d7bfe2c1 -->

```csharp
public sealed class Inno.Editor.Graph.ImGui.GraphCanvasNode
```

Freezes one node's geometric and textual presentation without owning its domain record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L12).

## `#ctor`

<a id="api-dbdaf723815398eb"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasNode.#ctor(Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{Inno.Editor.Graph.ImGui.GraphCanvasPort}) c54cac9231ad3573328eec5dbdaf8d7905bfa78d4c45f7495d3a4507ad7e3d91 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasNode.GraphCanvasNode(Inno.Core.Graphs.GraphNodeId id, Inno.Core.Graphs.GraphPosition position, System.Numerics.Vector2 size, float headerHeight, string title, System.Collections.Generic.IEnumerable<Inno.Editor.Graph.ImGui.GraphCanvasPort> ports)
```

Creates immutable display data that can safely outlive the extension that described it.

**Parameter `id`:** The existing graph node identity.

**Parameter `position`:** The node's document position in graph coordinates.

**Parameter `size`:** Finite positive width and height in graph coordinates.

**Parameter `headerHeight`:** The header extent, within the node height.

**Parameter `title`:** A display title already interpreted by its domain owner.

**Parameter `ports`:** Immutable neutral endpoint descriptions; the collection is copied.

**Throws `System.ArgumentNullException`:** The title or port collection is null.

**Throws `System.ArgumentException`:** A node or port identity is invalid, duplicated or owned by a different node.

**Throws `System.ArgumentOutOfRangeException`:** The node's geometry is nonfinite or has an invalid extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L44).

## `headerHeight`

<a id="api-491723cb1288b9bf"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.headerHeight 84b4aa72419b352af8ae1be4670509092a1642aad3fa60128492c7dfbc759069 -->

```csharp
public float Inno.Editor.Graph.ImGui.GraphCanvasNode.headerHeight { get; }
```

Gets the unscaled header extent used for node movement hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L91).

## `id`

<a id="api-aaba2a1efa8e08b7"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.id 6e401fe85a598e33905aec13a5fe89ba6182ed25f57f5c4d8eff2a5ab544c6ac -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Editor.Graph.ImGui.GraphCanvasNode.id { get; }
```

Gets the stable graph identity represented by this display snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L76).

## `ports`

<a id="api-4eadf72a16bb3a17"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.ports b42a6e2459cade88330f2ec33c7b49932472fd87a4b2b3ff885e710ead8a2523 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Graph.ImGui.GraphCanvasPort> Inno.Editor.Graph.ImGui.GraphCanvasNode.ports { get; }
```

Gets copied neutral port descriptions; no callback or domain object is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L101).

## `position`

<a id="api-ad2f8b34c4467bb1"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.position 2eca83a55aab81b974b174664aaaf07d9c01239641c81f4426ec3936c5ff9ec6 -->

```csharp
public Inno.Core.Graphs.GraphPosition Inno.Editor.Graph.ImGui.GraphCanvasNode.position { get; }
```

Gets the document position, before transient gesture previews.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L81).

## `size`

<a id="api-6705f04a48da5310"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.size 45af28fe318ce84a2447452eb3962d7d6b3d95286b4bb551f59e0acbd8a2ead2 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Graph.ImGui.GraphCanvasNode.size { get; }
```

Gets the unscaled node extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L86).

## `title`

<a id="api-7c8adcc977d1e1b6"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasNode.title b44649242f12b22104530fc703ca7edc169725a82e84b8f50f8cf8c0949e3d73 -->

```csharp
public string Inno.Editor.Graph.ImGui.GraphCanvasNode.title { get; }
```

Gets the domain-supplied display title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L96).
