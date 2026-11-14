---
uid: api.directory.engine.editor.rendering
title: "Rendering"
kind: landing
owners: []
---

# Rendering

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [EditorGizmoContext](editorgizmocontext/index.md) | Provides scene content and selection for transient Editor gizmos. |
| [EditorGizmoFrame](editorgizmoframe/index.md) | Holds the transient gizmo primitives for one Scene viewport frame. |
| [EditorGizmoIcon](editorgizmoicon/index.md) | One selectable Editor icon. |
| [EditorGizmoLine](editorgizmoline/index.md) | One non-interactive Editor line. |
| [EditorGizmoProvider](editorgizmoprovider/index.md) | Contributes Editor-only icons and bounds without modifying a rendering model. |
| [EditorGizmoProviderExtensionAttribute](editorgizmoproviderextensionattribute/index.md) | Marks one reloadable Editor gizmo provider. |
| [EditorPreviewHandle](editorpreviewhandle/index.md) | Identifies one preview texture owned by a specific rendering-device generation. |
| [EditorRenderingModule](editorrenderingmodule/index.md) | Composes reloadable rendering-model contributors while retaining only opaque presentation outputs. |
| [EditorRenderTargetArtifactProvider](editorrendertargetartifactprovider/index.md) | Produces target-specific render artifacts from imported authoring assets without exposing source access to the backend-neutral render runtime. |
| [EditorShaderArtifactValidationSnapshot](editorshaderartifactvalidationsnapshot/index.md) | Contains active-device validation state for one immutable Editor shader candidate. |
| [EditorShaderCompilation](editorshadercompilation/index.md) | Schedules Editor shader compilation for the active device without exposing native handles to authoring panels. |
| [EditorShaderCompilationSnapshot](editorshadercompilationsnapshot/index.md) | Contains detached compiler state without retaining assets, tasks or extension instances. |
| [EditorShaderCompilationState](editorshadercompilationstate/index.md) | Identifies native compilation state independently of document persistence. |
| [EditorShaderDraftCompilationSnapshot](editorshaderdraftcompilationsnapshot/index.md) | Contains a preview-only immutable candidate, never registered as a canonical asset artifact. |
| [EditorViewportComposition](editorviewportcomposition/index.md) | Describes a complete ordered set of rendering-model layers targeting one Editor viewport. |
| [EditorViewportContext](editorviewportcontext/index.md) | Supplies frame-only Editor interaction and output dimensions to a contributor. |
| [EditorViewportContribution](editorviewportcontribution/index.md) | Returns one rendering-model contribution without exposing a GPU backend. |
| [EditorViewportContributor](editorviewportcontributor/index.md) | Contributes one rendering model while the host owns viewport composition, targets, and presentation. |
| [EditorViewportContributorExtensionAttribute](editorviewportcontributorextensionattribute/index.md) | Marks a reloadable rendering-model contributor for one Editor viewport purpose. |
| [EditorViewportFocusBounds](editorviewportfocusbounds/index.md) | Describes a world-space sphere that can be framed by host navigation. |
| [EditorViewportKindId](editorviewportkindid/index.md) | Identifies one open Editor viewport purpose without prescribing rendering semantics. |
| [EditorViewportLayer](editorviewportlayer/index.md) | Describes one model-neutral layer in an Editor viewport composition. |
| [EditorViewportManipulationPlane](editorviewportmanipulationplane/index.md) | Selects whether transform handles use all axes or a contributor-declared planar orientation. |
| [EditorViewportManipulationSpace](editorviewportmanipulationspace/index.md) | Describes the exact backend-neutral view and projection used to draw a viewport so host tools can manipulate selected scene transforms without knowing the controller&#39;s camera model. |
| [EditorViewportNavigationCapabilities](editorviewportnavigationcapabilities/index.md) | Declares navigation operations supported by one viewport interaction controller. |
| [EditorViewportNavigationMode](editorviewportnavigationmode/index.md) | Identifies the active interaction model without prescribing a rendering camera type. |
| [EditorViewportNavigationProfile](editorviewportnavigationprofile/index.md) | Describes how the host may navigate one provider-owned viewport without exposing the provider&#39;s camera model. |
| [EditorViewportNavigationProfileId](editorviewportnavigationprofileid/index.md) | Identifies a provider-defined navigation profile across reload generations. |
| [EditorViewportNavigationState](editorviewportnavigationstate/index.md) | Stores rendering-model-neutral navigation state for one Editor viewport across provider reloads. |
| [EditorViewportOutput](editorviewportoutput/index.md) | Identifies a renderer-owned editor viewport image through an opaque presentation token. |
| [EditorViewportPointerContext](editorviewportpointercontext/index.md) | Supplies normalized pointer interaction over one rendered viewport. |
| [EditorViewportPresentation](editorviewportpresentation/index.md) | Describes host-selected presentation preferences without prescribing rendering behavior. |
| [EditorViewportProjection](editorviewportprojection/index.md) | Identifies the projection family represented by neutral Editor viewport navigation state. |
| [IEditorGizmoSink](ieditorgizmosink/index.md) | Receives transient world-space gizmo geometry from independent Editor extensions. |
| [IEditorPreviewService](ieditorpreviewservice/index.md) | Provides one shared preview texture bridge for browsers, inspectors, and document canvases. |
| [IEditorRenderingHost](ieditorrenderinghost/index.md) | Bridges editor extensions to a host-owned render request sink and opaque texture presenter. |
| [IEditorShaderArtifactValidator](ieditorshaderartifactvalidator/index.md) | Queues immutable shader candidates for validation at the active device&#39;s next frame safety point. |
| [PipelineDocuments](pipelinedocuments/index.md) | Edits Pipeline sources and typed extension settings without changing canonical rendering assets before Save. |

