---
title: "GraphCanvasNode"
description: "Reference for GraphCanvasNode in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.1797e02fbb33449c
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasNode`

This reference describes `GraphCanvasNode` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5bf35819a5ad2926) | Method |
| [`headerHeight`](#api-6e04f14b2a5d755e) | Property |
| [`id`](#api-4a80f582015a8222) | Property |
| [`ports`](#api-1c526b8fde6ea81c) | Property |
| [`position`](#api-8480c153dbf515cb) | Property |
| [`size`](#api-12f6966f34d82100) | Property |
| [`title`](#api-0de97c65d21571e3) | Property |

## Type declaration

<a id="api-1797e02fbb33449c"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasNode ec63b78fe096bed2fd2b84ff55e29b987c9bb40397435b5b27b2ca6774646ad8 -->

```csharp
public sealed class InnoEditor.Graph.GraphCanvasNode
```

Freezes one node's geometric and textual presentation without owning its domain record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L12).

## `#ctor`

<a id="api-5bf35819a5ad2926"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasNode.#ctor(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasPort}) e583d7032eb399fdaf3e804e1bed132b8274ebdc1c9722940503357ded2a2ffb -->

```csharp
public InnoEditor.Graph.GraphCanvasNode.GraphCanvasNode(InnoEngine.Graphs.GraphNodeId id, InnoEngine.Graphs.GraphPosition position, System.Numerics.Vector2 size, float headerHeight, string title, System.Collections.Generic.IEnumerable<InnoEditor.Graph.GraphCanvasPort> ports)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L44).

## `headerHeight`

<a id="api-6e04f14b2a5d755e"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.headerHeight ef6654520a122eaf89af2fb38b60a619c511268db410f7a94ac2a3027aa66be2 -->

```csharp
public float InnoEditor.Graph.GraphCanvasNode.headerHeight { get; }
```

Gets the unscaled header extent used for node movement hit testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L91).

## `id`

<a id="api-4a80f582015a8222"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.id bc7758152257df97ff7afaa69672f24e924299a407cf722422ef1b1afbe6faa2 -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEditor.Graph.GraphCanvasNode.id { get; }
```

Gets the stable graph identity represented by this display snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L76).

## `ports`

<a id="api-1c526b8fde6ea81c"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.ports 4fd0cb73907a76f4f66a190adf65241e829f7af7d161f0484952fca4a5d7e8bb -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Graph.GraphCanvasPort> InnoEditor.Graph.GraphCanvasNode.ports { get; }
```

Gets copied neutral port descriptions; no callback or domain object is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L101).

## `position`

<a id="api-8480c153dbf515cb"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.position d9685966a9561d3df5b64e89901216b440cb89556479edeca9d77094a78e2618 -->

```csharp
public InnoEngine.Graphs.GraphPosition InnoEditor.Graph.GraphCanvasNode.position { get; }
```

Gets the document position, before transient gesture previews.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L81).

## `size`

<a id="api-12f6966f34d82100"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.size 99f287df61b29c771fe5a190531715d84ab358a8d0a13566a04aa199747ea852 -->

```csharp
public System.Numerics.Vector2 InnoEditor.Graph.GraphCanvasNode.size { get; }
```

Gets the unscaled node extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L86).

## `title`

<a id="api-0de97c65d21571e3"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasNode.title 48516800111055b38fc45867b320df1f260b9bd8d0f61a5e051352d4262f1f92 -->

```csharp
public string InnoEditor.Graph.GraphCanvasNode.title { get; }
```

Gets the domain-supplied display title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasNode.cs#L96).
