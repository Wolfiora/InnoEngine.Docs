---
title: "GraphClipboardData"
description: "Reference for GraphClipboardData in Inno.Editor.Graph."
uid: api.inno.editor.graph.d3383be96101c019
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: source-clr
contracts:
  - project.inno-editor-graph
---
# `GraphClipboardData`

This reference describes `GraphClipboardData` in `Inno.Editor.Graph`. Read the [shared contract](../../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`edgeCount`](#api-1dfc6d0b65e98dda) | Property |
| [`nodeCount`](#api-c5d7e4976d83f2b2) | Property |

## Type declaration

<a id="api-d3383be96101c019"></a>
<!-- api: T:Inno.Editor.Graph.GraphClipboardData 59bdb05a1f90a73a69cc756c77f1f05e60a76e116a1d9f766d2c6a689daa2f39 -->

```csharp
public sealed class Inno.Editor.Graph.GraphClipboardData
```

Contains a neutral copied node fragment suitable for graph clipboard operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L14).

## `edgeCount`

<a id="api-1dfc6d0b65e98dda"></a>
<!-- api: P:Inno.Editor.Graph.GraphClipboardData.edgeCount 6b5f60789f653326ac4aa730cb669933cd3977d465ef78fde9df848db23c5faa -->

```csharp
public int Inno.Editor.Graph.GraphClipboardData.edgeCount { get; }
```

Gets the copied connection count whose endpoints both belong to the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L28).

## `nodeCount`

<a id="api-c5d7e4976d83f2b2"></a>
<!-- api: P:Inno.Editor.Graph.GraphClipboardData.nodeCount e00fff116070c61d452bbd720547c2648643f4d8e3efdf353c215804bb39ece8 -->

```csharp
public int Inno.Editor.Graph.GraphClipboardData.nodeCount { get; }
```

Gets the copied node count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L23).
