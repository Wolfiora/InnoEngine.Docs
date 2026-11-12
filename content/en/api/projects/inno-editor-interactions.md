---
title: Inno.Editor.Interactions
description: Presentation-independent actions, menus, selection, drag and drop, history and extension activation.
uid: api.projects.inno-editor-interactions
kind: project
owners: [Inno.Editor.Interactions]
contracts: [architecture.editor-generations, manual.identity-and-missing]
---
# Inno.Editor.Interactions

Interactions defines the language shared by Editor features: stable area/action/panel strings, an optional target, a lightweight `EditorInteraction`, and discovered Actions, menus, shortcuts and drops. It does not reference ImGui, Assets, Scene, Scripting features or a panel project.

## Start with a task

- [Register an action and menu](../../extending/editor-actions.md).
- [Select targets and move data](../../extending/editor-selection.md).
- [Record undoable changes](../../extending/editor-history.md).
- [Preserve extension state](../../extending/editor-state.md).
- [Understand generation activation](../../architecture/editor-generations.md).

## Shared interaction model

A feature owns its stable area/action constants. An area describes where interaction occurs; an action describes the semantic operation. Passing an area to `For` or an attribute uses it without a separate registration table. Blank IDs fail and matching is ordinal.

The actual target determines typed action/drop matching. Resolution considers exact area, target-type distance and declared priority. Features use the same resolver through menus, shortcuts and toolbars. They do not introduce an additional command/context service or a marker type solely to identify an area.

## Generation and lifetime contracts

The runtime constructs a candidate extension catalog from one TypeCache snapshot. Identity conflicts and failed construction reject the candidate. Activation, compensation, quarantine and shutdown follow the [shared generation protocol](../../architecture/editor-generations.md).

Deferred targets, focus, selection and drag data resolve through Core Identity before use. A stale generation is rejected. Temporary domain registration borrows an allocator and returns an owner-thread routing lease; it does not own allocator destruction or copy its object table. Duplicate registration, a wrong thread or registration after retirement fails. Release the route only after restoring its previous selection/owner state successfully.

History stores neutral protocol data and current-generation handlers, not collectible delegates. Documents are owned independently of whether a visible panel currently presents them. Neither transient interactions nor an Undo stack become project layout data.

## Document ownership

`IEditorDocumentService` manages shared authoring drafts, including identity, dirty state, Save/Revert/Close, restoration and provider-generation reconnection. A Shader editor or Inspector presents the draft; the service does not create an extra visible panel.

Both persistent asset ID and normalized source path must remain unique. A clean stale context can retire after provider callbacks. A context with unsaved changes rejects replacement until the user explicitly saves, reverts or closes it. Reconnection must not silently discard the draft.

## Host and Editor script surfaces

Host source uses `Inno.Editor.Interactions`. Selected Editor scripts use `InnoEditor.Interactions`, with only explicitly exported contracts. Router internals, catalog snapshots, host selection coordination and temporary History isolation are not inferred script capabilities.

`IEditorSelectionCoordinator` is a host integration boundary for atomic instance replacement. Ordinary panels select through `EditorInteraction.Select`. `BeginHistoryIsolation` is also host-only: a temporary session borrows an isolated empty branch, then restores the complete previous Undo/Redo/fault state when its scope ends. Isolated entries remain subject to the same memory and disk budgets.

## API reference

Exact overloads, immutable models, protected action/drop hooks and failure contracts are derived from the selected source surface. A declaration's presence does not certify its script projection or a product journey.

[Browse Editor Interaction types](../types/editor-interactions/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-interactions/index.md)
