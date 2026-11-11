---
title: "GraphEditorModule"
description: "Reference for GraphEditorModule in Inno.Editor.Graph."
uid: api.inno.editor.graph.e783863c315e1b44
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: source-clr
contracts:
  - project.inno-editor-graph
---
# `GraphEditorModule`

This reference describes `GraphEditorModule` in `Inno.Editor.Graph`. Read the [shared contract](../../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

**Direct interfaces:** `Inno.Editor.Core.IEditorReloadParticipant`.

## Members

| Member | Kind |
| --- | --- |
| [`CloseDocument`](#api-f83f78c4be225636) | Method |
| [`OnDispose`](#api-acdf657f0fb7a949) | Method |
| [`OnStart`](#api-70a7ee3828f9f515) | Method |
| [`OnStop`](#api-f67531bd97f2c315) | Method |
| [`OpenDocument`](#api-5887a63af5577123) | Method |
| [`RebindDocument`](#api-a5804ef1d83ce974) | Method |
| [`SetAvailability`](#api-34fbf9215a1f5ba6) | Method |
| [`TryOpenDocument`](#api-62d748b2e1b23e6f) | Method |

## Type declaration

<a id="api-e783863c315e1b44"></a>
<!-- api: T:Inno.Editor.Graph.GraphEditorModule cf79c44d5d97410c635db3a022340a107f450bec92ceabeed10c5cc93d9b7736 -->

```csharp
public sealed class Inno.Editor.Graph.GraphEditorModule : Inno.Editor.Core.EditorModule, Inno.Editor.Core.IEditorReloadParticipant
```

Owns active neutral graph document sessions resolved by reload-safe Editor History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L19).

## `CloseDocument`

<a id="api-f83f78c4be225636"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.CloseDocument(System.Guid) 73ac251298684794779914e24087e93df65cd6d5e381c5bcca6943625949b5d3 -->

```csharp
public bool Inno.Editor.Graph.GraphEditorModule.CloseDocument(System.Guid documentId)
```

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

**Parameter `documentId`:** The persistent document identity to release.

**Returns:** True when a live document was closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L89).

## `OnDispose`

<a id="api-acdf657f0fb7a949"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.OnDispose ae254ca47698a4b5c4cf884c155ccfd3b10ab4ade3e9dcd0df703483fadc4f4d -->

```csharp
protected override void Inno.Editor.Graph.GraphEditorModule.OnDispose()
```

Unregisters every document identity so issued controllers cannot resolve retired sessions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L207).

## `OnStart`

<a id="api-70a7ee3828f9f515"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.OnStart(Inno.Editor.Core.EditorContext) ea780b04958acccd7882b6c152ffe69be87daaabcd741829a87b811142c57564 -->

```csharp
protected override void Inno.Editor.Graph.GraphEditorModule.OnStart(Inno.Editor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L190).

## `OnStop`

<a id="api-f67531bd97f2c315"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.OnStop(Inno.Editor.Core.EditorContext) 8cd4507b4ff2f357b85dc702736529eca6f0070f401c1c295b5830eb08d46188 -->

```csharp
protected override void Inno.Editor.Graph.GraphEditorModule.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L198).

## `OpenDocument`

<a id="api-5887a63af5577123"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid,Inno.Core.Graphs.GraphDocument,Inno.Editor.Interactions.IEditorHistory) f9d1c7c05fc926f08d8bb5c16961c982a0a65c37336909761b911077155f9280 -->

```csharp
public Inno.Editor.Graph.GraphDocumentController Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid documentId, Inno.Core.Graphs.GraphDocument document, Inno.Editor.Interactions.IEditorHistory history)
```

Opens or joins an active graph document session.

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

**Returns:** A presentation-independent document controller.

**Throws `System.InvalidOperationException`:** The bounded document owner is full.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L57).

## `RebindDocument`

<a id="api-a5804ef1d83ce974"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.RebindDocument(System.Guid,Inno.Core.Graphs.GraphDocument) c361fa3cbd83624091c4b560838d48600a377b83f58232bc2478b2a5ef9fcd0c -->

```csharp
public void Inno.Editor.Graph.GraphEditorModule.RebindDocument(System.Guid documentId, Inno.Core.Graphs.GraphDocument document)
```

Rebinds an active session to a newly imported current-generation document.

**Parameter `documentId`:** Stable document identity.

**Parameter `document`:** New current-generation document instance.

**Throws `System.InvalidOperationException`:** Thrown when the document has no active session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L155).

## `SetAvailability`

<a id="api-34fbf9215a1f5ba6"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.SetAvailability(System.Guid,System.Boolean) ce5f4d5c39a636286e15322629ab0bbcb4b0a89baad42a3a31d95564ff18ae9d -->

```csharp
public void Inno.Editor.Graph.GraphEditorModule.SetAvailability(System.Guid documentId, bool available)
```

Marks a temporarily Missing source without discarding its graph or advancing its History stack.

**Parameter `documentId`:** The persistent identity of an open document.

**Parameter `available`:** Whether its source can be resolved in the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L135).

## `TryOpenDocument`

<a id="api-62d748b2e1b23e6f"></a>
<!-- api: M:Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Graph.GraphDocumentController@) 235296ce2f76bd5b2410d6d036f3f280c227461459a8a59a248135ebd0331aba -->

```csharp
public bool Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid documentId, Inno.Editor.Interactions.IEditorHistory history, out Inno.Editor.Graph.GraphDocumentController? controller)
```

Resolves an already open document without replacing its authored contents.

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

**Returns:** True when the document is still owned by this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphEditorModule.cs#L115).
