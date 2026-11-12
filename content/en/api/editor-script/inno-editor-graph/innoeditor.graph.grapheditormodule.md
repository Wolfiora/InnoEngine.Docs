---
title: "GraphEditorModule"
description: "Reference for GraphEditorModule in Inno.Editor.Graph."
uid: api.inno.editor.graph.editor-script.bafc294e4f9da602
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: editor-script
contracts:
  - project.inno-editor-graph
  - manual.scripting.use-script-api
---
# `GraphEditorModule`

This reference describes `GraphEditorModule` in `Inno.Editor.Graph`. Read the [shared contract](../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c5ba5f12c48d8810) | Method |
| [`CloseDocument`](#api-c9c9035745c998a4) | Method |
| [`OnDispose`](#api-d026d8f3aa5a989c) | Method |
| [`OnStart`](#api-a148d749a7260a96) | Method |
| [`OnStop`](#api-3bad637fadc74328) | Method |
| [`OpenDocument`](#api-643b84ba418d3220) | Method |
| [`RebindDocument`](#api-971d24a62eeb10f8) | Method |
| [`SetAvailability`](#api-870c49c4ebbc0297) | Method |
| [`TryOpenDocument`](#api-b30f0c5395c458dd) | Method |

## Type declaration

<a id="api-bafc294e4f9da602"></a>
<!-- api: T:InnoEditor.Graph.GraphEditorModule 816e0813838eda3b5b71f086fa32d6626b9d2c27d72389c6632abd3ceb947582 -->

```csharp
public sealed class InnoEditor.Graph.GraphEditorModule : InnoEditor.Core.EditorModule
```

Owns active neutral graph document sessions resolved by reload-safe Editor History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L19).

## `#ctor`

<a id="api-c5ba5f12c48d8810"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.#ctor cc8e7fff03ab61e0aaeae3c6b472cd7217451f2a73d02682f35af03a688dc23a -->

```csharp
public InnoEditor.Graph.GraphEditorModule.GraphEditorModule()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L19).

## `CloseDocument`

<a id="api-c9c9035745c998a4"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.CloseDocument(System.Guid) 155ab6178875b0446a22142aeea9f06c792825bcc3926cdf6d2329910190fe8f -->

```csharp
public bool InnoEditor.Graph.GraphEditorModule.CloseDocument(System.Guid documentId)
```

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

**Parameter `documentId`:** The persistent document identity to release.

**Returns:** True when a live document was closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L89).

## `OnDispose`

<a id="api-d026d8f3aa5a989c"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.OnDispose 8be68a6abf35317b913fbbb91f2c370f657d3bb75373c4b7224b8fd9fd4a9367 -->

```csharp
protected override void InnoEditor.Graph.GraphEditorModule.OnDispose()
```

Unregisters every document identity so issued controllers cannot resolve retired sessions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L207).

## `OnStart`

<a id="api-a148d749a7260a96"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.OnStart(InnoEditor.Core.EditorContext) 80c114adc0b0967ba0867e92178b5ddb277ae555b035ac95ccca364f58396328 -->

```csharp
protected override void InnoEditor.Graph.GraphEditorModule.OnStart(InnoEditor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L190).

## `OnStop`

<a id="api-3bad637fadc74328"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.OnStop(InnoEditor.Core.EditorContext) 7280d7dfbdf27c637877af200240b5cad115e6cb43c043ae9b0e51e6310a9671 -->

```csharp
protected override void InnoEditor.Graph.GraphEditorModule.OnStop(InnoEditor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L198).

## `OpenDocument`

<a id="api-643b84ba418d3220"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.OpenDocument(System.Guid,InnoEngine.Graphs.GraphDocument,InnoEditor.Interactions.IEditorHistory) 2fdb2e3cd5182bab428548c693b0697583ecd6536fb412ff756b03d295f26a40 -->

```csharp
public InnoEditor.Graph.GraphDocumentController InnoEditor.Graph.GraphEditorModule.OpenDocument(System.Guid documentId, InnoEngine.Graphs.GraphDocument document, InnoEditor.Interactions.IEditorHistory history)
```

Opens or joins an active graph document session.

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

**Returns:** A presentation-independent document controller.

**Throws `System.InvalidOperationException`:** The bounded document owner is full.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L57).

## `RebindDocument`

<a id="api-971d24a62eeb10f8"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.RebindDocument(System.Guid,InnoEngine.Graphs.GraphDocument) c1f1d3855ebe37e8a7a6c93d95fec12bdc38b3d4033ef61343910fc23621480d -->

```csharp
public void InnoEditor.Graph.GraphEditorModule.RebindDocument(System.Guid documentId, InnoEngine.Graphs.GraphDocument document)
```

Rebinds an active session to a newly imported current-generation document.

**Parameter `documentId`:** Stable document identity.

**Parameter `document`:** New current-generation document instance.

**Throws `System.InvalidOperationException`:** Thrown when the document has no active session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L155).

## `SetAvailability`

<a id="api-870c49c4ebbc0297"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.SetAvailability(System.Guid,System.Boolean) 850eb5cdbba144f3906154fb36df998a0f01d083570e21ed01f49226fbfa331f -->

```csharp
public void InnoEditor.Graph.GraphEditorModule.SetAvailability(System.Guid documentId, bool available)
```

Marks a temporarily Missing source without discarding its graph or advancing its History stack.

**Parameter `documentId`:** The persistent identity of an open document.

**Parameter `available`:** Whether its source can be resolved in the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L135).

## `TryOpenDocument`

<a id="api-b30f0c5395c458dd"></a>
<!-- api: M:InnoEditor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,InnoEditor.Interactions.IEditorHistory,InnoEditor.Graph.GraphDocumentController@) fc18fbc6eab4f5ab6fdf60dfb56aea801abeb3ae4105f9de3b745d0812491f11 -->

```csharp
public bool InnoEditor.Graph.GraphEditorModule.TryOpenDocument(System.Guid documentId, InnoEditor.Interactions.IEditorHistory history, out InnoEditor.Graph.GraphDocumentController? controller)
```

Resolves an already open document without replacing its authored contents.

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

**Returns:** True when the document is still owned by this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L115).
