---
title: Inno.Editor.Graph
description: "Neutral graph editing sessions, weak controllers, canvas interaction state and recoverable History."
uid: project.inno-editor-graph
kind: project
owners: [Inno.Editor.Graph]
---
# Inno.Editor.Graph

Neutral graph editing sessions, weak controllers, canvas interaction state and recoverable History.

Read the linked task or ownership explanation before using the exact API below.

## Begin with document identity

[Edit a graph document](../../extending/graph-documents.md) explains persistent IDs, the 128-document bound, controller invalidation, atomic edits, gesture History and Missing/reload recovery. This layer has no Shader or ImGui semantics.

GraphEditorModule owns sessions through a resource collection and indexes them using its allocator and persistent document IDs. GraphDocumentController carries a weak identity; it cannot keep a session alive or operate on a later reopened generation. GraphCanvasState is transient presentation state, with frozen selection snapshots rather than exposed mutable sets.

## Keep history neutral

Before/after graph data is encoded as bytes through EditorInteractions.history. Types, node instances, GPU objects and delegates do not enter History. Paste remapping is synchronous and part of the same atomic edit; a failing callback rolls back the whole change.

Reload uses the common reference-recovery transaction and validates complete graph data before publication. Rollback restores revision, dirty state and availability. The editable GraphDocument is not an immutable runtime snapshot; callbacks and compiled outputs need independent copies.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/Inno.Editor.Graph.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/graph/index.md) preserve captured declarations and source XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../../api/scripting/index.md)
