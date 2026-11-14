---
uid: api.directory.engine.editor.core
title: "Core"
kind: landing
owners: []
---

# Core

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [EditorContext](editorcontext/index.md) | Provides passive project and frame state shared by editor extensions. Interaction routing is supplied separately by Inno.Editor.Interactions. |
| [EditorDisplayNames](editordisplaynames/index.md) | Formats readable Editor labels independently from a native UI context or session. |
| [EditorFrame](editorframe/index.md) | Describes one immutable editor frame. |
| [EditorKeyboardPolicy](editorkeyboardpolicy/index.md) | Supplies immutable keyboard conventions selected by the Editor product composition. |
| [EditorModal](editormodal/index.md) | Defines non-dockable modal editor content. |
| [EditorModalAttribute](editormodalattribute/index.md) | Registers a centered editor modal for automatic discovery. |
| [EditorModule](editormodule/index.md) | Owns optional shared state and lifecycle for one editor feature. Simple panels and actions do not need a module. |
| [EditorModuleAttribute](editormoduleattribute/index.md) | Registers an editor feature module with a stable identity for automatic discovery. |
| [EditorPanel](editorpanel/index.md) | Base class for editor panel implementations. |
| [EditorPanelAttribute](editorpanelattribute/index.md) | Registers an editor panel for automatic discovery. |
| [EditorReloadCoordinator](editorreloadcoordinator/index.md) | Coordinates weakly registered editor feature migrations around atomic assembly reload sessions. |
| [EditorRuntime](editorruntime/index.md) | Defines the presentation-independent lifecycle of an editor runtime. |
| [EditorState](editorstate/index.md) | Provides the serialization-neutral parameter used to capture or restore one editor extension&#39;s project state. |
| [EditorStatistic](editorstatistic/index.md) | Describes one immutable, presentation-ready statistic without retaining provider instances or types. |
| [EditorStatisticGroupId](editorstatisticgroupid/index.md) | Identifies one visual group in the editor statistics presentation. |
| [EditorStatisticId](editorstatisticid/index.md) | Identifies one editor statistic across panels, modules, and reloadable extensions. |
| [EditorStatistics](editorstatistics/index.md) | Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers. |
| [EditorTypeSpecificity](editortypespecificity/index.md) | Ranks assignable editor extension targets by class ancestry, with interface registrations one step away. |
| [IEditorPanelReloadState](ieditorpanelreloadstate/index.md) | Optionally migrates presentation-neutral panel state across assembly reloads. |
| [IEditorReloadGuard](ieditorreloadguard/index.md) | Describes whether an editor owner has released the state required for a generation change. |
| [IEditorReloadParticipant](ieditorreloadparticipant/index.md) | Contributes editor-owned live state to an assembly reload without coupling the reload requester to a feature domain. |

