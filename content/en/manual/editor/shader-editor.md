---
title: Edit and check a shader graph
description: Separate graph drafts, explicit source saving, isolated compilation and the current preview revision.
uid: manual.editor.shader-editor
kind: how-to
owners: [Inno.Editor.Panel.ShaderEditor, Inno.Editor.Shaders.ImGui]
contracts: [project.inno-editor-panel-shadereditor, project.inno-editor-shaders-imgui]
---
# Edit and check a shader graph

Shader Editor edits `.ishader` graphs. Materials keep a Shader reference and parameters; they do not contain a second material graph. Select a Shader in File Browser or double-click to open/focus it. The header provides selection and Save, Revert, Format and Check. Without a Shader, the header remains visible and document actions are disabled.

## Edit a draft, not the published asset

The graph controller and shared History own node movement, connections, values and undo/redo. A drag commits once at release; text/value edits use independent gesture IDs. Pan/zoom is view state keyed by asset persistent ID, not a saved File Browser selection.

File-entry identity and asset identity differ. Resolve the selected path to AssetInfo, then use its persistent asset ID for the graph, compiler and source reference. A file-entry ID cannot stand in for a shader asset ID.

The minimap reflects current nodes/connections/viewport and supports click/drag navigation. Its independent hit region prevents input leaking into the canvas beneath. Graph geometry is a neutral frame snapshot with stable endpoints; layout/hit testing is not a retained plugin-object graph.

## Create and organize nodes

The shared action/menu model supplies Create, View, Edit, Connections, Organize and Assets categories with query-derived enabled state. Explicit Vertex/Fragment/Compute outputs are unique per stage. Read-only graphs, domain-target ownership and existing outputs can disable creation; paste/duplicate cannot bypass those invariants.

Optional unconnected inputs receive a precisely typed zero only when the type supports it. Required inputs need a compatible connection; stale input-default data cannot satisfy them. Source/type information appears beside the port value rather than creating a hidden override field. Node parameters are edited in Inspector, not a duplicate set of canvas controls.

Groups move their members together. Reroute organizes a typed connection without adding an operation. Format changes positions through undoable dependency/port-aware layout, not shader semantics. Deleting an output also removes dependent pass/orphaned-stage declarations through one transaction; parameter removal preserves shared declarations that still have users.

## Reuse authored functions

`.ishadersource` files export only explicitly listed functions. Private helpers do not become menu APIs and there is no implicit main/default function. Import settings control readable catalog grouping; applying those settings is a separate metadata edit that may affect other graphs.

Reusable graph nodes are also `.ishader` assets. Function inputs/outputs can be independent as long as an interface exists; ordinary functions inline, while domain outputs remain for their target by role. Identity is the referenced asset's persistent ID, with paths as repair hints. Interface cycles, stale ports and incomplete contracts fail visibly instead of reconnecting by port position.

Collapse to Subgraph extracts one stage's selection into a new reversible source asset and replaces it with a graph call. Vertex-to-fragment value flow can lower to a shared transient varying; unsupported stage directions/resource transfers fail. See [reusable shader nodes](../rendering/reusable-shader-nodes.md).

## Save and Check independently

Save—or Command/Ctrl+S with canvas focus—writes the source even when compilation is invalid. It first preserves neutral recovery, checks the last-read source fingerprint and refuses to overwrite an external change. Import is requested on the next Editor update. Switching files, closing the panel or stopping the feature does not silently save.

Revert restores saved contents through History; undo can recover the draft, but publishing it still needs Save. Dirty close uses Save/Discard/Cancel through the shared document service. Missing sources retain data and an undo barrier. Installed graphs are read-only; Copy Shader to Project creates a new undoable asset. Show in File Browser navigates the engine browser rather than launching an external application.

Check compiles the current draft in isolation without saving or publishing. It uses a blocking shared modal that closes after success/failure; diagnostics and exact source locations go to Console. A preview requires that current revision's successful compilation and device validation. Any later edit invalidates it. A failed Check does not display an old cached preview as if it proved the new draft works.

Draft preview is not a complete material/world render or a formal resource publication. Canvas node diagnostics use stable semantic IDs and clear after repair. Builtin stage inputs are neutral declared semantics/types that the target and adapter must support, never an escape hatch for arbitrary native variable names.

## Extend the right boundary

Node drawer presentation belongs to Shaders.ImGui; compiler behavior belongs to Rendering.Shaders; the panel itself has no public node-authoring API. A drawer writes neutral properties through its context and existing gesture, borrows previews only for the callback and does not save the canonical asset. UI wiring and compilation examples do not certify every advanced node, physical renderer or interactive journey for the current candidate.
