---
title: Edit a graph document with undo and recovery
description: Use persistent document identities, session controllers and neutral
  history payloads for graph editing.
uid: extending.graph-documents
kind: how-to
owners:
  - Inno.Editor.Graph
contracts:
  - project.inno-editor-graph
---
# Edit a graph document with undo and recovery

Use the Editor Graph module to edit neutral graph documents without coupling the controller to Shader or ImGui. The module owns document sessions; a controller performs node/edge/value operations; canvas state holds temporary pan, zoom, selection and connection gestures.

## Open an existing identity

Use the asset's persistent ID for an asset-backed document. `OpenDocument` creates or joins its session, retaining dirty content when a UI reconnects. At most 128 documents may be owned simultaneously. `TryOpenDocument` only joins an existing state and never invents a blank replacement.

`RebindDocument` accepts newly imported contents only for an unmodified document. Missing source changes availability without discarding graph data, positions, property bytes or history. Restoration can make the original undo/redo history usable again.

## Record one meaningful edit

The controller handles creation/removal, connections, moves, values, copy/paste and revision/dirty state. Call `MoveNodes` once at drag release; distinct drags do not merge. Value replacement may carry one unique edit-gesture ID. Structural edits do not merge.

History encodes before/after graph data as neutral bytes through `EditorInteractions.history`. It does not retain CLR types, live nodes, GPU objects or delegates. Canvas selection returns frozen collection snapshots and must be changed through its APIs; it is transient session state, not persisted `editor.ini` content.

The synchronous optional paste remapper can update domain-specific IDs within the same atomic change. If it throws, the entire paste rolls back. The callback itself is not stored in history. A shader-stage reference must be remapped by identity rather than guessed from port position.

## Retain the real session owner

Controllers carry weak session identities resolved by the module's allocator. A Guid lookup is a secondary directory, not the lifetime owner. The module's resource collection keeps sessions alive until explicit close or shutdown.

`CloseDocument` permanently invalidates issued controllers, even if the same persistent document ID is opened later. Do not retain one to operate on a new generation. `GraphDocument` is an editable authoring model: callbacks and compiled results need independent copies rather than treating it as an immutable snapshot.

## Recover through the common transaction

The module registers as a reload participant and uses the existing reference-recovery transaction. Preparation captures neutral graph bytes, application decodes a complete candidate, and validation checks nodes, edges, order and property data. Failure restores revision, dirty state and availability precisely.

Stable node IDs express graph semantics; they are not forced into object-reference slots. The [Graph API](../architecture/projects/inno-editor-graph.md) documents exact controller operations. Rendering widgets belong to the separate presentation layer.
