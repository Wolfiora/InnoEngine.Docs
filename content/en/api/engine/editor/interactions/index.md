---
uid: api.directory.engine.editor.interactions
title: "Interactions"
kind: landing
owners: []
---

# Interactions

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [EditorAction](editoraction-7b44a37abc5a/index.md) | Defines one automatically discovered editor operation and owns its complete multi-frame lifecycle. |
| [EditorAction&lt;TTarget, TArgument&gt;](editoraction-af042feb1b7b/index.md) | Defines a target action that requires one strongly typed command argument. |
| [EditorAction&lt;TTarget&gt;](editoraction-312d1316a897/index.md) | Defines a discoverable action whose target must be assignable to a specific reference type. |
| [EditorActionArgumentContext&lt;TArgument&gt;](editoractionargumentcontext/index.md) | Provides a strongly typed action argument to a targetless editor action. |
| [EditorActionAttribute](editoractionattribute/index.md) | Registers an editor action for automatic discovery and dispatch. |
| [EditorActionContext](editoractioncontext-c391553e7878/index.md) | Provides contextual state to an editor action. |
| [EditorActionContext&lt;TTarget, TArgument&gt;](editoractioncontext-319d0756ee41/index.md) | Provides a strongly typed target and action argument to an editor action. |
| [EditorActionContext&lt;TTarget&gt;](editoractioncontext-c0be094fdb90/index.md) | Provides a strongly typed target to an editor action implementation. |
| [EditorActionState](editoractionstate/index.md) | Describes the current presentation and availability of an editor action. |
| [EditorArgumentAction&lt;TArgument&gt;](editorargumentaction/index.md) | Defines a targetless editor action that requires one strongly typed command argument. |
| [EditorDocumentCloseMode](editordocumentclosemode/index.md) | Selects how a dirty document responds to a close request. |
| [EditorDocumentContext](editordocumentcontext/index.md) | Stores only stable, reload-safe document identity and provider-owned draft parameters. |
| [EditorDocumentProvider](editordocumentprovider/index.md) | Implements one reloadable asset-document kind without owning presentation or source identity. |
| [EditorDragContext](editordragcontext/index.md) | Provides contextual state while beginning an editor drag. |
| [EditorDragData](editordragdata/index.md) | Contains the transient identity and preview label for one editor drag operation. |
| [EditorDrop](editordrop-07bc832098d2/index.md) | Defines one discoverable typed editor drop operation. |
| [EditorDrop&lt;TSource, TTarget&gt;](editordrop-d667ec4515a8/index.md) | Defines a typed drop operation for one managed source and target pair. |
| [EditorDropAttribute](editordropattribute/index.md) | Registers a typed editor drop handler for an optional exact area. |
| [EditorDropContext](editordropcontext-3c7ce1439d0d/index.md) | Provides contextual state to an editor drop handler. |
| [EditorDropContext&lt;TSource, TTarget&gt;](editordropcontext-4dfea841fa64/index.md) | Provides strongly typed source and target values to a drop operation. |
| [EditorDropPlacement](editordropplacement/index.md) | Describes the requested placement relative to an editor drop target. |
| [EditorDropResult](editordropresult/index.md) | Describes the observable result of a completed editor drop. |
| [EditorDropStatus](editordropstatus/index.md) | Describes whether and how a target accepts the active drag. |
| [EditorDropVisual](editordropvisual/index.md) | Defines the standard visual used for a compatible drop target. |
| [EditorEditGesture](editoreditgesture/index.md) | Owns one continuous edit transaction without retaining edited objects, setters or extension instances. |
| [EditorHistoryAvailability](editorhistoryavailability/index.md) | Describes whether a history change can currently move in one direction. |
| [EditorHistoryChange](editorhistorychange/index.md) | Describes one neutral reload-safe mutation interpreted by an attribute-discovered history handler. |
| [EditorHistoryContext](editorhistorycontext/index.md) | Provides current-generation editor services to a history change handler. |
| [EditorHistoryDirection](editorhistorydirection/index.md) | Identifies the direction in which an editor history change is being applied. |
| [EditorHistoryHandler](editorhistoryhandler/index.md) | Interprets neutral editor history payloads for one current-generation feature protocol. |
| [EditorHistoryHandlerAttribute](editorhistoryhandlerattribute/index.md) | Registers a stateless editor history handler for one stable change protocol. |
| [EditorHistoryOptions](editorhistoryoptions/index.md) | Configures retention and payload storage for one editor history. |
| [EditorHistoryPayload](editorhistorypayload/index.md) | Owns immutable neutral bytes used by a reload-safe editor history change. |
| [EditorHistoryResult](editorhistoryresult/index.md) | Describes the outcome of applying, undoing, or redoing an editor history operation. |
| [EditorHistoryTransaction](editorhistorytransaction/index.md) | Collects several history operations into one atomic undo and redo entry. |
| [EditorInteraction](editorinteraction/index.md) | Provides a fluent handle that borrows an optional target for a synchronous interaction request. |
| [EditorInteractionRuntime](editorinteractionruntime/index.md) | Hosts attribute-discovered editor extensions without depending on a presentation backend. |
| [EditorInteractions](editorinteractions/index.md) | Provides the single presentation-independent entry point for editor actions, menus, selection, focus, and drag-and-drop. |
| [EditorMenuAttribute](editormenuattribute/index.md) | Places an editor action at an arbitrary path on a menu surface. |
| [EditorMenuBuilder](editormenubuilder/index.md) | Collects dynamic menu item placements. |
| [EditorMenuContext](editormenucontext/index.md) | Provides contextual state while constructing an editor menu. |
| [EditorMenuItem](editormenuitem/index.md) | Represents one immutable contextual menu node. |
| [EditorMenuModel](editormenumodel/index.md) | Contains a complete immutable menu tree. |
| [EditorMenuSource](editormenusource/index.md) | Contributes dynamic entries to one or more editor menu surfaces. |
| [EditorMenuSourceAttribute](editormenusourceattribute/index.md) | Registers a dynamic editor menu source. |
| [EditorModalExtension](editormodalextension/index.md) | Describes one active modal extension. |
| [EditorModalExtension.Presentation](presentation/index.md) | Stores immutable modal window policy values read from one extension generation. |
| [EditorOperationPreparingEvent](editoroperationpreparingevent/index.md) | Synchronously closes transient edits before command execution or an extension-handler generation switch. |
| [EditorPanelExtension](editorpanelextension/index.md) | Describes one active dockable panel extension. |
| [EditorPlanarNavigation](editorplanarnavigation/index.md) | Shares captured planar gestures and mouse-anchored zoom math between scene and graph canvases. |
| [EditorPresentationAction&lt;TTarget, TPresentation&gt;](editorpresentationaction/index.md) | Defines a target action with a typed presentation-only argument. |
| [EditorSelectionSnapshot](editorselectionsnapshot/index.md) | Captures ordered selection identities without retaining any domain object or extension instance. |
| [EditorSelectionState](editorselectionstate/index.md) | Owns ordered transient selection through domain-qualified identities instead of retaining live objects. |
| [EditorShortcutAttribute](editorshortcutattribute/index.md) | Associates an editor action with a keyboard shortcut. |
| [EditorToolbarIcon](editortoolbaricon/index.md) | Identifies a presentation-independent symbol for an editor toolbar command. |
| [EditorToolbarItem](editortoolbaritem/index.md) | Describes one resolved toolbar command. |
| [EditorToolbarItemAttribute](editortoolbaritemattribute/index.md) | Places an editor action on a compact toolbar surface. |
| [EditorToolbarModel](editortoolbarmodel/index.md) | Contains an immutable resolved toolbar for one interaction area. |
| [EditorValidationResult](editorvalidationresult/index.md) | Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected. |
| [EditorViewportCursor](editorviewportcursor/index.md) | Selects a presentation-independent cursor requested by a viewport tool. |
| [EditorViewportPointerEvent](editorviewportpointerevent/index.md) | Contains one immutable viewport pointer sample in screen and world coordinates. |
| [EditorViewportPointerPhase](editorviewportpointerphase/index.md) | Selects the lifecycle phase of one viewport pointer sample. |
| [EditorViewportShortcut](editorviewportshortcut/index.md) | Contains one presentation-independent shortcut sample for a focused viewport tool. |
| [EditorViewportTool](editorviewporttool/index.md) | Defines one presentation-independent, reloadable viewport editing tool. |
| [EditorViewportToolContext](editorviewporttoolcontext/index.md) | Coordinates pointer capture, transforms, and one history transaction for a viewport gesture. |
| [EditorViewportToolSession](editorviewporttoolsession/index.md) | Routes focused viewport input to one active tool while enforcing pointer-capture ownership. |
| [HotKeyGesture](hotkeygesture/index.md) | Describes one keyboard gesture used to invoke an editor command. |
| [IEditorDocumentService](ieditordocumentservice/index.md) | Owns single-instance editor documents independently from reloadable providers and presentation. |
| [IEditorHistory](ieditorhistory/index.md) | Exposes reload-safe Undo and Redo operations based exclusively on neutral history changes. |
| [IEditorHistoryIsolation](ieditorhistoryisolation/index.md) | Creates temporary history branches for transient editor workflows without exposing history internals. |
| [IEditorSelectionCoordinator](ieditorselectioncoordinator/index.md) | Coordinates host-owned selection and the Core identity lifetime of temporary presentations. |
| [IEditorViewportCoordinateConverter](ieditorviewportcoordinateconverter/index.md) | Converts coordinates for one viewport camera without exposing its presentation backend. |

