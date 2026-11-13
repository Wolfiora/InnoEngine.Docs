---
title: Inno.Editor.Core
description: Presentation-independent Editor context, extension lifecycle, frame
  statistics and reload coordination.
uid: api.projects.inno-editor-core
kind: project
owners:
  - Inno.Editor.Core
contracts:
  - architecture.editor-generations
  - architecture.ownership
---
# Inno.Editor.Core

Editor Core defines the context and lifecycle shared by Editor runtimes, modules, panels and modals. It has no dependency on ImGui, Actions, menus, Assets, Scene, Scripting features or a particular panel. Features receive their real services through construction; `EditorContext` is not a service locator.

## Start with a task

- [Add an Editor panel](../../extending/editor-panels.md).
- [Create an Editor module](../../extending/editor-modules.md).
- [Add a modal view](../../extending/editor-modals.md).
- [Preserve extension state](../../extending/editor-state.md).
- [Publish frame statistics](../../manual/editor/statistics.md).
- [Understand generation changes](../editor-generations.md).

## Context and frame model

`EditorContext` exposes the project directory, the latest immutable `EditorFrame`, focus information and a narrow statistics exchange. A frame contains `deltaTime`, `totalTime` and `isFocused`. `EditorRuntime` provides presentation-independent `Start`, `Update(EditorFrame)` and `Dispose` operations.

Statistics are the context's frame-data contribution channel. A contribution contains stable item/group identities, display ordering and a string value; it does not retain a plugin type, callback or live object. The exchange synchronizes publication and snapshot access. When content and ordering do not change, readers receive the same immutable snapshot instance. Previously returned snapshots are never modified.

The current frame overlays the last completed frame by item identity. This handoff lets a contributor draw before or after the Stats panel without losing its value. An item that stops publishing disappears after the bounded handoff. Profiling history, sampling and persistent configuration remain with their respective feature owners.

## Host context and layout

The host constructs `EditorContext` with the project directory, keyboard policy and optional initial layout text. Core does not choose standard panels, docking ratios or project content. When an initial document is supplied, it creates `editor.ini` only if the file is absent. An existing file, including an empty one, keeps its contents and timestamp. Concurrent creation does not overwrite the first successful writer. Read, permission and creation errors propagate.

Without initial text, construction remains passive. Later saves use the same readable document and atomic replacement mechanism. The internal layout owner keeps ImGui layout and named Editor sections separate, so neither overwrites the other. ImGui layout line endings normalize to LF when read across platforms.

Constructor, raw layout/section access and save operations are public CLR host integration contracts because their callers live in separate assemblies. They carry `ScriptingApiIgnore` and are absent from the script facade. Scripts cannot create another context or rewrite another extension's section. Business preferences belong to the Settings system rather than `editor.ini`.

## Extension contracts

| Contract | Responsibility |
| --- | --- |
| `EditorModule` | A feature shared across panels, started and stopped with its generation. |
| `EditorPanel` | A discovered dockable body whose window and lifecycle belong to the host. |
| `EditorModal` | A discovered non-dockable overlay, optionally blocking interaction. |
| `EditorState` | Neutral values passed to extension capture and restore hooks. |
| `IEditorPanelReloadState` | Additional neutral bytes retained across panel-generation replacement. |

Stable attribute IDs identify modules, panels and modals. A panel title is presentation text and can change independently. Constructor injection can supply the context, interactions or an unambiguous discovered module; an arbitrary class on disk is not automatically loaded.

`EditorDisplayNames.Nicify` formats labels without a graphics session. Blank input becomes an empty label; underscores, hyphens and lowercase-to-uppercase boundaries become word breaks. It is a presentation helper, not persistent identity normalization.

## Lifecycle and failure contracts

Ownership begins before `Start` or `Attach` invokes an extension callback. A failed start still requires stop compensation; a failed attach still requires detach compensation. Update/draw requires successful activation. Completed stop/detach operations are idempotent.

Modules release owned resources in `OnDispose`. Their `IDisposable.Dispose` implementation belongs to catalog teardown and is not a feature-driven lifecycle API. It stops an unfinished module before disposal. Pending retirement retains the owner and unfinished steps for retry; it must not appear disposed. Ordinary cleanup failures aggregate after remaining cleanup is attempted. See [generation changes](../editor-generations.md) for fault and quarantine boundaries.

## Host and script surfaces

Host extensions use `Inno.Editor.Core`; Editor scripts use the selected `InnoEditor.Core` facade. Exported context, frame, statistics, extension and state contracts do not imply access to the reload coordinator or raw layout storage. Scripts implement protected lifecycle hooks; the host drives `Start`, `Update`, `Stop`, `Attach`, `Detach`, `Prepare` and `Draw`.

The reference below describes evaluated CLR source declarations. Script projection is separately validated and must not be inferred by renaming a namespace.

## API reference

The bound source reference covers public and relevant protected contracts. Its type pages retain exact overloads and source XML; tasks explain the owning workflow.

[Browse Editor Core types](../../api/engine/editor/core/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../../api/scripting/index.md)
