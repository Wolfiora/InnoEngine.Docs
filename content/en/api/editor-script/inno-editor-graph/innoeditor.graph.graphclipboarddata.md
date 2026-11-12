---
title: "GraphClipboardData"
description: "Reference for GraphClipboardData in Inno.Editor.Graph."
uid: api.inno.editor.graph.editor-script.f156823d053238e8
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: editor-script
contracts:
  - project.inno-editor-graph
  - manual.scripting.use-script-api
---
# `GraphClipboardData`

This reference describes `GraphClipboardData` in `Inno.Editor.Graph`. Read the [shared contract](../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8cffb3d093d74741) | Method |
| [`edgeCount`](#api-21e50f0af1eeb345) | Property |
| [`nodeCount`](#api-1047d56a3ff4061e) | Property |

## Type declaration

<a id="api-f156823d053238e8"></a>
<!-- api: T:InnoEditor.Graph.GraphClipboardData e60480ff411692bd82c34236c89ef7ae637612e11738a1fc25d192cad4081cfd -->

```csharp
public sealed class InnoEditor.Graph.GraphClipboardData
```

Contains a neutral copied node fragment suitable for graph clipboard operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L14).

## `#ctor`

<a id="api-8cffb3d093d74741"></a>
<!-- api: M:InnoEditor.Graph.GraphClipboardData.#ctor f32c72f98c3c3cf8a4275778d726d07a53b9e8da49ba86b8090ba4d8c1ef413e -->

```csharp
public InnoEditor.Graph.GraphClipboardData.GraphClipboardData()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L14).

## `edgeCount`

<a id="api-21e50f0af1eeb345"></a>
<!-- api: P:InnoEditor.Graph.GraphClipboardData.edgeCount 7ca48392131651dfee16c1e05fffd054e284d279d82034f9958de8ed78194d38 -->

```csharp
public int InnoEditor.Graph.GraphClipboardData.edgeCount { get; }
```

Gets the copied connection count whose endpoints both belong to the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L28).

## `nodeCount`

<a id="api-1047d56a3ff4061e"></a>
<!-- api: P:InnoEditor.Graph.GraphClipboardData.nodeCount a16eb478f336ecd6ae25f0dd54b29d2556b9ae3314592b79391c9f3908980f87 -->

```csharp
public int InnoEditor.Graph.GraphClipboardData.nodeCount { get; }
```

Gets the copied node count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L23).
