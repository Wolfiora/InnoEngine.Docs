---
uid: api.directory.scripting.editor
title: "Editor"
kind: landing
owners: []
---

# Editor

Find types in this declared script scope. Each type links to its exact declarations and member contracts.

## A

| Type | Purpose |
| --- | --- |
| [AssetArtifactWriter](assetartifactwriter/index.md) | Collects immutable named outputs for an aggregate asset build. |
| [AssetBrowserRoot](assetbrowserroot/index.md) | Identifies the authoring or installed-content root displayed by the Asset Browser. |
| [AssetBrowserState](assetbrowserstate/index.md) | Stores asset browser navigation independently from global object selection. |
| [AssetBrowserStyle](assetbrowserstyle/index.md) | Freezes Browser-specific layout values from the shared UI scale without retaining a session. The default value uses the standard 100 percent scale. |
| [AssetBuildContext&lt;TDefinition&gt;](assetbuildcontext/index.md) | Provides a stable input snapshot to an aggregate asset build. |
| [AssetBuildProcessor](assetbuildprocessor-40d2ea3a7825/index.md) | Defines an automatically discovered aggregate asset build processor. |
| [AssetBuildProcessor&lt;TDefinition&gt;](assetbuildprocessor-69abc5b0fed4/index.md) | Provides a strongly typed aggregate asset build processor. |
| [AssetBuildProcessorAttribute](assetbuildprocessorattribute/index.md) | Declares the immutable cache protocol identity of an automatically discovered asset build processor. |
| [AssetCreationContext](assetcreationcontext/index.md) | Provides source encoding services to one detached Asset creation template invocation. |
| [AssetCreationMenuAttribute](assetcreationmenuattribute/index.md) | Declares the source name, extension, and menu placement that cannot be inferred from an T:InnoEngine.Assets.AssetObject type alone. |
| [AssetCreationTemplate](assetcreationtemplate-62ef699e948b/index.md) | Produces the detached initial value for one authorable native asset source. |
| [AssetCreationTemplate&lt;TAsset&gt;](assetcreationtemplate-4df0b08210c7/index.md) | Creates a default-constructed native source for an authorable asset type. |
| [AssetDeploymentScope](assetdeploymentscope/index.md) | Defines whether an imported asset participates in deployed runtime content. |
| [AssetEditor](asseteditor/index.md) | Customizes editor interactions for one imported asset type. |
| [AssetEditorAttribute](asseteditorattribute/index.md) | Associates an asset editor with an imported asset type. |
| [AssetEditorContext](asseteditorcontext/index.md) | Provides an immutable snapshot for an asset editor operation. |
| [AssetExportContext](assetexportcontext/index.md) | Provides generation-bound services for one editable asset source export. |
| [AssetFileEntry](assetfileentry/index.md) | One node in the asset source filesystem index. |
| [AssetIconAttribute](asseticonattribute/index.md) | Declares the icon used by the Asset Browser for an imported asset type or source extension. |
| [AssetImportContext](assetimportcontext/index.md) | Collects source data and dependency declarations for one import operation. |
| [AssetImporter](assetimporter-3cf4acdb7e24/index.md) | Defines metadata shared by automatically discovered asset importers. |
| [AssetImporter&lt;TAsset&gt;](assetimporter-b3a203a02f47/index.md) | Provides the strongly typed implementation base for an asset importer. |
| [AssetImporterAttribute](assetimporterattribute/index.md) | Declares the immutable protocol identity of an automatically discovered asset importer. |
| [AssetImportExtensionUnavailableException](assetimportextensionunavailableexception/index.md) | Reports a required authoring extension absent from the current generation. |
| [AssetImportSettingsEdits](assetimportsettingsedits/index.md) | Applies importer configuration through the common sidecar pipeline and stable-identity Editor history. |
| [AssetImportWriter&lt;TAsset&gt;](assetimportwriter/index.md) | Collects the complete candidate output of one source import. |
| [AssetOperationValidation](assetoperationvalidation/index.md) | Describes whether an editor asset operation may proceed. |
| [AssetReferenceDropTarget](assetreferencedroptarget/index.md) | Borrows an asset property&#39;s type and assignment callback for one synchronous drop request. |
| [AssetSerializationServices](assetserializationservices/index.md) | Provides generation-bound structured serialization without exposing host registries to importer extensions. |

## D

| Type | Purpose |
| --- | --- |
| [DialogLayout](dialoglayout/index.md) | Carries a measured dialog layout. Only its required extent is public; drawing mechanics remain owned by the widget. |
| [DialogPresentation](dialogpresentation/index.md) | Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks. |

## E

| Type | Purpose |
| --- | --- |
| [EditorAction](editoraction-d5ec40872490/index.md) | Defines one automatically discovered editor operation and owns its complete multi-frame lifecycle. |
| [EditorAction&lt;TTarget, TArgument&gt;](editoraction-59a990be6ea3/index.md) | Defines a target action that requires one strongly typed command argument. |
| [EditorAction&lt;TTarget&gt;](editoraction-69e90c0fd312/index.md) | Defines a discoverable action whose target must be assignable to a specific reference type. |
| [EditorActionArgumentContext&lt;TArgument&gt;](editoractionargumentcontext/index.md) | Provides a strongly typed action argument to a targetless editor action. |
| [EditorActionAttribute](editoractionattribute/index.md) | Registers an editor action for automatic discovery and dispatch. |
| [EditorActionContext](editoractioncontext-c36fa14b65cf/index.md) | Provides contextual state to an editor action. |
| [EditorActionContext&lt;TTarget, TArgument&gt;](editoractioncontext-3fb4344512aa/index.md) | Provides a strongly typed target and action argument to an editor action. |
| [EditorActionContext&lt;TTarget&gt;](editoractioncontext-d87af1c41c85/index.md) | Provides a strongly typed target to an editor action implementation. |
| [EditorActionState](editoractionstate/index.md) | Describes the current presentation and availability of an editor action. |
| [EditorArgumentAction&lt;TArgument&gt;](editorargumentaction/index.md) | Defines a targetless editor action that requires one strongly typed command argument. |
| [EditorAssets](editorassets/index.md) | Provides Editor-script asset mutations through the authoring pipeline bound by the current host. |
| [EditorContext](editorcontext/index.md) | Provides passive project and frame state shared by editor extensions. Interaction routing is supplied separately by Inno.Editor.Interactions. |
| [EditorDisplayNames](editordisplaynames/index.md) | Formats readable Editor labels independently from a native UI context or session. |
| [EditorDocumentCloseMode](editordocumentclosemode/index.md) | Selects how a dirty document responds to a close request. |
| [EditorDocumentContext](editordocumentcontext/index.md) | Stores only stable, reload-safe document identity and provider-owned draft parameters. |
| [EditorDocumentProvider](editordocumentprovider/index.md) | Implements one reloadable asset-document kind without owning presentation or source identity. |
| [EditorDragContext](editordragcontext/index.md) | Provides contextual state while beginning an editor drag. |
| [EditorDragData](editordragdata/index.md) | Contains the transient identity and preview label for one editor drag operation. |
| [EditorDrawList](editordrawlist/index.md) | A pointer-free drawing borrow valid only in its original window, UI session and frame. |
| [EditorDrop](editordrop-e7bff6ba0d1f/index.md) | Defines one discoverable typed editor drop operation. |
| [EditorDrop&lt;TSource, TTarget&gt;](editordrop-f4e5351ef416/index.md) | Defines a typed drop operation for one managed source and target pair. |
| [EditorDropAttribute](editordropattribute/index.md) | Registers a typed editor drop handler for an optional exact area. |
| [EditorDropContext](editordropcontext-3e1637ac9ef8/index.md) | Provides contextual state to an editor drop handler. |
| [EditorDropContext&lt;TSource, TTarget&gt;](editordropcontext-1c53e8dc8ef6/index.md) | Provides strongly typed source and target values to a drop operation. |
| [EditorDropPlacement](editordropplacement/index.md) | Describes the requested placement relative to an editor drop target. |
| [EditorDropResult](editordropresult/index.md) | Describes the observable result of a completed editor drop. |
| [EditorDropStatus](editordropstatus/index.md) | Describes whether and how a target accepts the active drag. |
| [EditorDropVisual](editordropvisual/index.md) | Defines the standard visual used for a compatible drop target. |
| [EditorEditGesture](editoreditgesture/index.md) | Owns one continuous edit transaction without retaining edited objects, setters or extension instances. |
| [EditorFrame](editorframe/index.md) | Describes one immutable editor frame. |
| [EditorGizmoContext](editorgizmocontext/index.md) | Provides scene content and selection for transient Editor gizmos. |
| [EditorGizmoProvider](editorgizmoprovider/index.md) | Contributes Editor-only icons and bounds without modifying a rendering model. |
| [EditorGizmoProviderExtensionAttribute](editorgizmoproviderextensionattribute/index.md) | Marks one reloadable Editor gizmo provider. |
| [EditorHistoryAvailability](editorhistoryavailability/index.md) | Describes whether a history change can currently move in one direction. |
| [EditorHistoryChange](editorhistorychange/index.md) | Describes one neutral reload-safe mutation interpreted by an attribute-discovered history handler. |
| [EditorHistoryContext](editorhistorycontext/index.md) | Provides current-generation editor services to a history change handler. |
| [EditorHistoryDirection](editorhistorydirection/index.md) | Identifies the direction in which an editor history change is being applied. |
| [EditorHistoryHandler](editorhistoryhandler/index.md) | Interprets neutral editor history payloads for one current-generation feature protocol. |
| [EditorHistoryHandlerAttribute](editorhistoryhandlerattribute/index.md) | Registers a stateless editor history handler for one stable change protocol. |
| [EditorHistoryPayload](editorhistorypayload/index.md) | Owns immutable neutral bytes used by a reload-safe editor history change. |
| [EditorHistoryResult](editorhistoryresult/index.md) | Describes the outcome of applying, undoing, or redoing an editor history operation. |
| [EditorHistoryTransaction](editorhistorytransaction/index.md) | Collects several history operations into one atomic undo and redo entry. |
| [EditorInteraction](editorinteraction/index.md) | Provides a fluent handle that borrows an optional target for a synchronous interaction request. |
| [EditorInteractions](editorinteractions/index.md) | Provides the single presentation-independent entry point for editor actions, menus, selection, focus, and drag-and-drop. |
| [EditorKeyboardPolicy](editorkeyboardpolicy/index.md) | Supplies immutable keyboard conventions selected by the Editor product composition. |
| [EditorMenuAttribute](editormenuattribute/index.md) | Places an editor action at an arbitrary path on a menu surface. |
| [EditorMenuBuilder](editormenubuilder/index.md) | Collects dynamic menu item placements. |
| [EditorMenuContext](editormenucontext/index.md) | Provides contextual state while constructing an editor menu. |
| [EditorMenuItem](editormenuitem/index.md) | Represents one immutable contextual menu node. |
| [EditorMenuModel](editormenumodel/index.md) | Contains a complete immutable menu tree. |
| [EditorMenuSource](editormenusource/index.md) | Contributes dynamic entries to one or more editor menu surfaces. |
| [EditorMenuSourceAttribute](editormenusourceattribute/index.md) | Registers a dynamic editor menu source. |
| [EditorModal](editormodal/index.md) | Defines non-dockable modal editor content. |
| [EditorModalAttribute](editormodalattribute/index.md) | Registers a centered editor modal for automatic discovery. |
| [EditorModule](editormodule/index.md) | Owns optional shared state and lifecycle for one editor feature. Simple panels and actions do not need a module. |
| [EditorModuleAttribute](editormoduleattribute/index.md) | Registers an editor feature module with a stable identity for automatic discovery. |
| [EditorPalette](editorpalette/index.md) | Defines the complete editor color palette in one theme surface. |
| [EditorPanel](editorpanel/index.md) | Base class for editor panel implementations. |
| [EditorPanelAttribute](editorpanelattribute/index.md) | Registers an editor panel for automatic discovery. |
| [EditorPlanarNavigation](editorplanarnavigation/index.md) | Shares captured planar gestures and mouse-anchored zoom math between scene and graph canvases. |
| [EditorPlayModeState](editorplaymodestate/index.md) | Identifies the current relationship between editor documents and game simulation. |
| [EditorPresentationAction&lt;TTarget, TPresentation&gt;](editorpresentationaction/index.md) | Defines a target action with a typed presentation-only argument. |
| [EditorPreviewHandle](editorpreviewhandle/index.md) | Identifies one preview texture owned by a specific rendering-device generation. |
| [EditorRuntime](editorruntime/index.md) | Defines the presentation-independent lifecycle of an editor runtime. |
| [EditorSelectionSnapshot](editorselectionsnapshot/index.md) | Captures ordered selection identities without retaining any domain object or extension instance. |
| [EditorSelectionState](editorselectionstate/index.md) | Owns ordered transient selection through domain-qualified identities instead of retaining live objects. |
| [EditorSetting](editorsetting/index.md) | Defines one path-addressed Settings page or one custom-drawn Settings field. |
| [EditorSettingObject](editorsettingobject/index.md) | Represents one isolated, strongly typed object exposed to a Settings field and its consumers. |
| [EditorSettingPathAttribute](editorsettingpathattribute/index.md) | Places an T:InnoEditor.Settings.EditorSetting at an arbitrary string Settings path. |
| [EditorSettings](editorsettings/index.md) | Owns the discovered Settings catalog and the project-root Settings document. |
| [EditorShaderCompilationState](editorshadercompilationstate/index.md) | Identifies native compilation state independently of document persistence. |
| [EditorShaderDraftCompilationSnapshot](editorshaderdraftcompilationsnapshot/index.md) | Contains a preview-only immutable candidate, never registered as a canonical asset artifact. |
| [EditorShortcutAttribute](editorshortcutattribute/index.md) | Associates an editor action with a keyboard shortcut. |
| [EditorState](editorstate/index.md) | Provides the serialization-neutral parameter used to capture or restore one editor extension&#39;s project state. |
| [EditorStatistic](editorstatistic/index.md) | Describes one immutable, presentation-ready statistic without retaining provider instances or types. |
| [EditorStatisticGroupId](editorstatisticgroupid/index.md) | Identifies one visual group in the editor statistics presentation. |
| [EditorStatisticId](editorstatisticid/index.md) | Identifies one editor statistic across panels, modules, and reloadable extensions. |
| [EditorStatistics](editorstatistics/index.md) | Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers. |
| [EditorStyleMetrics](editorstylemetrics/index.md) | Defines reusable layout metrics and separates owned frame values from requested style changes. |
| [EditorToolbarIcon](editortoolbaricon/index.md) | Identifies a presentation-independent symbol for an editor toolbar command. |
| [EditorToolbarItem](editortoolbaritem/index.md) | Describes one resolved toolbar command. |
| [EditorToolbarItemAttribute](editortoolbaritemattribute/index.md) | Places an editor action on a compact toolbar surface. |
| [EditorToolbarModel](editortoolbarmodel/index.md) | Contains an immutable resolved toolbar for one interaction area. |
| [EditorUiInput](editoruiinput/index.md) | Copies frame input facts used by presentation without exposing native input storage. |
| [EditorUiLayout](editoruilayout/index.md) | Copies the presentation metrics needed by custom layouts without retaining native style memory. |
| [EditorUiSession](editoruisession/index.md) | Owns editor controls and transient presentation state for one host, independently from other ImGui contexts. |
| [EditorValidationResult](editorvalidationresult/index.md) | Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected. |
| [EditorViewportComposition](editorviewportcomposition/index.md) | Describes a complete ordered set of rendering-model layers targeting one Editor viewport. |
| [EditorViewportContext](editorviewportcontext/index.md) | Supplies frame-only Editor interaction and output dimensions to a contributor. |
| [EditorViewportContribution](editorviewportcontribution/index.md) | Returns one rendering-model contribution without exposing a GPU backend. |
| [EditorViewportContributor](editorviewportcontributor/index.md) | Contributes one rendering model while the host owns viewport composition, targets, and presentation. |
| [EditorViewportContributorExtensionAttribute](editorviewportcontributorextensionattribute/index.md) | Marks a reloadable rendering-model contributor for one Editor viewport purpose. |
| [EditorViewportCursor](editorviewportcursor/index.md) | Selects a presentation-independent cursor requested by a viewport tool. |
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
| [EditorViewportPointerContext](editorviewportpointercontext/index.md) | Supplies normalized pointer interaction over one rendered viewport. |
| [EditorViewportPointerEvent](editorviewportpointerevent/index.md) | Contains one immutable viewport pointer sample in screen and world coordinates. |
| [EditorViewportPointerPhase](editorviewportpointerphase/index.md) | Selects the lifecycle phase of one viewport pointer sample. |
| [EditorViewportPresentation](editorviewportpresentation/index.md) | Describes host-selected presentation preferences without prescribing rendering behavior. |
| [EditorViewportProjection](editorviewportprojection/index.md) | Identifies the projection family represented by neutral Editor viewport navigation state. |
| [EditorViewportShortcut](editorviewportshortcut/index.md) | Contains one presentation-independent shortcut sample for a focused viewport tool. |
| [EditorViewportTool](editorviewporttool/index.md) | Defines one presentation-independent, reloadable viewport editing tool. |
| [EditorViewportToolContext](editorviewporttoolcontext/index.md) | Coordinates pointer capture, transforms, and one history transaction for a viewport gesture. |
| [EditorViewportToolSession](editorviewporttoolsession/index.md) | Routes focused viewport input to one active tool while enforcing pointer-capture ownership. |
| [EngineObjectReferenceDropTarget](engineobjectreferencedroptarget/index.md) | Borrows an object property&#39;s type and assignment callback for one synchronous drop request. |

## G

| Type | Purpose |
| --- | --- |
| [GraphCanvasLayout](graphcanvaslayout/index.md) | Owns a document&#39;s neutral node display snapshot, independently of viewport transforms and domain instances. |
| [GraphCanvasNode](graphcanvasnode/index.md) | Freezes one node&#39;s geometric and textual presentation without owning its domain record. |
| [GraphCanvasPointerController](graphcanvaspointercontroller/index.md) | Coordinates neutral selection, movement previews, box selection and connection intents for one canvas. |
| [GraphCanvasPointerInput](graphcanvaspointerinput/index.md) | Carries one frame&#39;s already-routed pointer input without depending on a native backend. |
| [GraphCanvasPointerResult](graphcanvaspointerresult/index.md) | Reports neutral interaction intents for the feature controller to validate and apply through History. |
| [GraphCanvasPort](graphcanvasport/index.md) | Describes a neutral port&#39;s node-relative geometry and display state without retaining extensions. |
| [GraphCanvasState](graphcanvasstate/index.md) | Stores transient pan, zoom, selection and connection interaction state without ImGui dependencies. |
| [GraphCanvasView](graphcanvasview/index.md) | Projects and presents an arbitrary graph viewport without owning document mutations or domain semantics. |
| [GraphClipboardData](graphclipboarddata/index.md) | Contains a neutral copied node fragment suitable for graph clipboard operations. |
| [GraphDocumentController](graphdocumentcontroller/index.md) | Applies neutral graph edits atomically and records every data mutation in reload-safe Editor History. |
| [GraphEditorModule](grapheditormodule/index.md) | Owns active neutral graph document sessions resolved by reload-safe Editor History. |

## H

| Type | Purpose |
| --- | --- |
| [HierarchyObjectDropTarget](hierarchyobjectdroptarget/index.md) | Identifies a game object hierarchy drop target. |
| [HierarchySceneDropTarget](hierarchyscenedroptarget/index.md) | Identifies a scene row or scene root hierarchy drop target. |
| [HotKeyGesture](hotkeygesture/index.md) | Describes one keyboard gesture used to invoke an editor command. |

## I

| Type | Purpose |
| --- | --- |
| [IEditorDocumentService](ieditordocumentservice/index.md) | Owns single-instance editor documents independently from reloadable providers and presentation. |
| [IEditorGizmoSink](ieditorgizmosink/index.md) | Receives transient world-space gizmo geometry from independent Editor extensions. |
| [IEditorHistory](ieditorhistory/index.md) | Exposes reload-safe Undo and Redo operations based exclusively on neutral history changes. |
| [IEditorPanelReloadState](ieditorpanelreloadstate/index.md) | Optionally migrates presentation-neutral panel state across assembly reloads. |
| [IEditorPlayMode](ieditorplaymode/index.md) | Controls the editor&#39;s isolated game-simulation session. |
| [IEditorPreviewService](ieditorpreviewservice/index.md) | Provides one shared preview texture bridge for browsers, inspectors, and document canvases. |
| [IEditorSceneWorkspace](ieditorsceneworkspace/index.md) | Exposes the active Edit or Play scene presentation and the persistence operations available to it. |
| [IEditorViewportCoordinateConverter](ieditorviewportcoordinateconverter/index.md) | Converts coordinates for one viewport camera without exposing its presentation backend. |
| [IInspectionIconProvider&lt;TTarget&gt;](iinspectioniconprovider/index.md) | Resolves a presentation icon for inspected targets owned by another editor feature. |
| [IInspectionPropertyEditService](iinspectionpropertyeditservice/index.md) | Applies one root serialized-property mutation through the history mechanism owned by a feature. |
| [IInspectorAttributeDrawer](iinspectorattributedrawer/index.md) | Extends serialized-property presentation with reusable attribute-driven behavior. |
| [ImGui](imgui/index.md) | Provides pointer-free controls within the active Editor UI session. |
| [ImGuiButtonFlags](imguibuttonflags/index.md) | Defines the supported button flags choices at the Editor presentation boundary. |
| [ImGuiChildFlags](imguichildflags/index.md) | Defines the supported child flags choices at the Editor presentation boundary. |
| [ImGuiCol](imguicol/index.md) | Defines the supported col choices at the Editor presentation boundary. |
| [ImGuiColorEditFlags](imguicoloreditflags/index.md) | Defines the supported color edit flags choices at the Editor presentation boundary. |
| [ImGuiComboFlags](imguicomboflags/index.md) | Defines the supported combo flags choices at the Editor presentation boundary. |
| [ImGuiCond](imguicond/index.md) | Defines the supported cond choices at the Editor presentation boundary. |
| [ImGuiFocusedFlags](imguifocusedflags/index.md) | Defines the supported focused flags choices at the Editor presentation boundary. |
| [ImGuiFont](imguifont/index.md) | Uses the host&#39;s context-owned font catalog without exposing backend types to Editor features. |
| [ImGuiFontScope](imguifontscope/index.md) | Restores a font push only in its original session, frame and native stack position. |
| [ImGuiFontStyle](imguifontstyle/index.md) | Chooses composable font emphasis while leaving actual font ownership with the presentation host. |
| [ImGuiHoveredFlags](imguihoveredflags/index.md) | Defines the supported hovered flags choices at the Editor presentation boundary. |
| [ImGuiIcon](imguiicon/index.md) | Provides the standard Editor glyph vocabulary; extension controls may also supply their own glyph text. |
| [ImGuiInputTextFlags](imguiinputtextflags/index.md) | Defines the supported input text flags choices at the Editor presentation boundary. |
| [ImGuiKey](imguikey/index.md) | Defines the supported key choices at the Editor presentation boundary. |
| [ImGuiMouseButton](imguimousebutton/index.md) | Defines the supported mouse button choices at the Editor presentation boundary. |
| [ImGuiMouseCursor](imguimousecursor/index.md) | Defines the supported mouse cursor choices at the Editor presentation boundary. |
| [ImGuiPopupFlags](imguipopupflags/index.md) | Defines the supported popup flags choices at the Editor presentation boundary. |
| [ImGuiSelectableFlags](imguiselectableflags/index.md) | Defines the supported selectable flags choices at the Editor presentation boundary. |
| [ImGuiSliderFlags](imguisliderflags/index.md) | Defines the supported slider flags choices at the Editor presentation boundary. |
| [ImGuiStyleVar](imguistylevar/index.md) | Defines the supported style var choices at the Editor presentation boundary. |
| [ImGuiTabBarFlags](imguitabbarflags/index.md) | Defines the supported tab bar flags choices at the Editor presentation boundary. |
| [ImGuiTabItemFlags](imguitabitemflags/index.md) | Defines the supported tab item flags choices at the Editor presentation boundary. |
| [ImGuiTableBgTarget](imguitablebgtarget/index.md) | Defines the supported table bg target choices at the Editor presentation boundary. |
| [ImGuiTableColumnFlags](imguitablecolumnflags/index.md) | Defines the supported table column flags choices at the Editor presentation boundary. |
| [ImGuiTableFlags](imguitableflags/index.md) | Defines the supported table flags choices at the Editor presentation boundary. |
| [ImGuiTableRowFlags](imguitablerowflags/index.md) | Defines the supported table row flags choices at the Editor presentation boundary. |
| [ImGuiTreeNodeFlags](imguitreenodeflags/index.md) | Defines the supported tree node flags choices at the Editor presentation boundary. |
| [ImGuiWidget](imguiwidget/index.md) | Provides reusable editor controls and rendering helpers built on the native ImGui API. |
| [ImGuiWindowFlags](imguiwindowflags/index.md) | Defines the supported window flags choices at the Editor presentation boundary. |
| [InlineRenameResult](inlinerenameresult/index.md) | Describes the outcome of an inline rename control. |
| [InspectionDrawContext](inspectiondrawcontext/index.md) | Provides services and state to an inspector drawer. |
| [InspectionDrawer&lt;TTarget&gt;](inspectiondrawer/index.md) | Provides the target-specific header presentation and body drawing behavior for an inspected target. |
| [InspectionDrawerAttribute](inspectiondrawerattribute/index.md) | Associates an inspector drawer with a selected target type. |
| [InspectorAttributeDrawContext](inspectorattributedrawcontext/index.md) | Carries the mutable presentation state of one attribute-annotated Inspector property. |
| [InspectorAttributeDrawerAttribute](inspectorattributedrawerattribute/index.md) | Associates an Inspector attribute drawer with an attribute type. |
| [IPropertyDrawer](ipropertydrawer/index.md) | Draws and optionally edits one serialized property value. |
| [IShaderNodeCompiler](ishadernodecompiler/index.md) | Defines one shader node&#39;s typed ports and lowering; drawing belongs to a separate editor extension. |
| [IShaderSourceFrontend](ishadersourcefrontend/index.md) | Parses one source language into canonical function interfaces; it does not create GPU objects. |
| [IShaderSourceResolver](ishadersourceresolver/index.md) | Reads dependencies only from the current source candidate and records their import dependencies. |

## L

| Type | Purpose |
| --- | --- |
| [ListNavigationResult](listnavigationresult/index.md) | Carries frame-local list navigation intents over visible indices without owning objects or selection state. |

## M

| Type | Purpose |
| --- | --- |
| [MaterialDocuments](materialdocuments/index.md) | Owns Material authoring sessions; native source editing uses the shared asset draft lifecycle. |

## N

| Type | Purpose |
| --- | --- |
| [NativeAssetSourceSerialization](nativeassetsourceserialization/index.md) | Imports and exports editable asset source state through the common native serializer. |

## P

| Type | Purpose |
| --- | --- |
| [PipelineDocuments](pipelinedocuments/index.md) | Edits Pipeline sources and typed extension settings without changing canonical rendering assets before Save. |
| [ProjectSettingEditor](projectsettingeditor-85d41d695b84/index.md) | Describes one Editor presentation for a strongly typed runtime project setting. |
| [ProjectSettingEditor&lt;TSetting&gt;](projectsettingeditor-129cae2beac7/index.md) | Provides a typed drawing extension for one runtime project setting protocol. |
| [ProjectSettingPathAttribute](projectsettingpathattribute/index.md) | Places a strongly typed project setting editor under the Project root of the unified Settings window. |
| [PropertyDrawContext](propertydrawcontext/index.md) | Encapsulates one editable property path and its drawing services. |
| [PropertyDrawerAttribute](propertydrawerattribute/index.md) | Associates a property drawer with a declared property type. |

## S

| Type | Purpose |
| --- | --- |
| [SceneEdits](sceneedits/index.md) | Applies scene-document mutations and records compact, reload-safe inverse data in editor history. |
| [SceneHierarchyEdit](scenehierarchyedit/index.md) | Exposes world-owned hierarchy operations inside one atomic scene history mutation. |
| [SerializationRegistry](serializationregistry/index.md) | Owns one generation-aware converter registry and provides deterministic root serialization operations. |
| [SerializedPropertyRenderer](serializedpropertyrenderer/index.md) | Resolves drawers and renders serialized property paths with isolated error handling. |
| [ShaderFunctionAsset](shaderfunctionasset/index.md) | Represents an authoring-only source-function library; it is never a complete GPU stage or runtime dependency. |
| [ShaderGraphBindings](shadergraphbindings/index.md) | Keeps graph input edits and the material-visible parameter contract in one neutral document change. |
| [ShaderGraphClipboard](shadergraphclipboard/index.md) | Copies and pastes shader structures as detached atomic candidates, including their parameter and Pass contracts. |
| [ShaderGraphDocument](shadergraphdocument/index.md) | Defines the native graph document protocol shared by shader import, templates and the editor. |
| [ShaderGraphInputSettings](shadergraphinputsettings/index.md) | Stores a stage input node&#39;s logical interface without native names or GPU handles. |
| [ShaderGraphLiteral](shadergraphliteral/index.md) | Stores an exact typed value for an unconnected node input, independently of source-language syntax. |
| [ShaderGraphNodeEffect](shadergraphnodeeffect/index.md) | Declares whether a graph-authored function is pure or intentionally emits ordered effects. |
| [ShaderGraphNodeInputSettings](shadergraphnodeinputsettings/index.md) | Stores values supplied by callers to a graph-authored node. |
| [ShaderGraphNodeInterface](shadergraphnodeinterface/index.md) | Freezes the complete public interface resolved from one graph-authored node asset. |
| [ShaderGraphNodeKind](shadergraphnodekind/index.md) | Chooses whether a graph-authored node is inlined or consumed by a domain Target. |
| [ShaderGraphNodeOutputSettings](shadergraphnodeoutputsettings/index.md) | Stores values returned by a graph-authored function node. |
| [ShaderGraphNodePortDefinition](shadergraphnodeportdefinition/index.md) | Declares one stable, typed port on a graph-authored node interface. |
| [ShaderGraphNodes](shadergraphnodes/index.md) | Reads and expands reusable node graphs without retaining assets or provider instances. |
| [ShaderGraphNodeSettings](shadergraphnodesettings/index.md) | Stores graph-level identity and catalog metadata for a reusable Shader node. |
| [ShaderGraphOutput](shadergraphoutput/index.md) | Stores one stable output port&#39;s destination, independent of adapter source syntax. |
| [ShaderGraphPassProgram](shadergraphpassprogram/index.md) | References shared stage output identities from a material-selectable pass. |
| [ShaderGraphPasteResult](shadergraphpasteresult/index.md) | Contains a detached paste candidate and its newly allocated node identities. |
| [ShaderGraphPrograms](shadergraphprograms/index.md) | Edits pass-to-program references without copying computation or changing runtime render states. |
| [ShaderGraphStageSettings](shadergraphstagesettings/index.md) | Stores one stage&#39;s explicit output interface and compute dimensions inside its output node. |
| [ShaderGraphTemplate](shadergraphtemplate/index.md) | Contributes an ordinary shader graph to the shared asset creation workflow. |
| [ShaderGraphTemplateAttribute](shadergraphtemplateattribute/index.md) | Declares immutable creation metadata for a Shader graph template. |
| [ShaderGraphTemplates](shadergraphtemplates/index.md) | Provides small backend-neutral starting documents composed exclusively of ordinary graph nodes. |
| [ShaderGraphType](shadergraphtype/index.md) | Persists a complete shader type as neutral native-serializable data, without extension instances. |
| [ShaderIrBlock](shaderirblock/index.md) | Contains immutable ordered instructions and nested structured regions without retaining builder callbacks. |
| [ShaderIrBuilder](shaderirbuilder/index.md) | Builds typed shader IR instructions for graph compilation. |
| [ShaderIrInputKind](shaderirinputkind/index.md) | Identifies the GPU interface through which a stage receives a value. |
| [ShaderIrInstruction](shaderirinstruction/index.md) | Stores one immutable typed instruction without generated stage source or backend expressions. |
| [ShaderIrOperation](shaderiroperation/index.md) | Defines backend-neutral value operations; graph node IDs are not instruction opcodes. |
| [ShaderIrOutputKind](shaderiroutputkind/index.md) | Identifies where a typed stage output is written. |
| [ShaderIrStage](shaderirstage/index.md) | Freezes a typed GPU stage and its explicit interface. It contains no main function, varying declarations or source expressions. Targets own stage/resource layout; adapters translate these semantics into their native language. |
| [ShaderIrStageInput](shaderirstageinput/index.md) | Describes a stage input without embedding native declarations or expressions. |
| [ShaderIrStageOutput](shaderirstageoutput/index.md) | Describes a named block output&#39;s GPU destination. |
| [ShaderIrValue](shaderirvalue/index.md) | Identifies a typed single-assignment value within one intermediate block. |
| [ShaderNodeDescriptionContext](shadernodedescriptioncontext/index.md) | Provides invocation-scoped property decoding through the complete owner serialization context. |
| [ShaderNodeDrawContext](shadernodedrawcontext/index.md) | Exposes detached node values and one-gesture writes without exposing the live graph document. |
| [ShaderNodeDrawer](shadernodedrawer/index.md) | Provides reloadable Inspector controls; instances must not retain frame contexts or asset objects. |
| [ShaderNodeDrawerAttribute](shadernodedrawerattribute/index.md) | Registers Editor-only node controls independently from a node&#39;s shader compiler. |
| [ShaderNodeLoweringContext](shadernodeloweringcontext/index.md) | Supplies one node&#39;s connected values and the region builder during lowering only. |
| [ShaderNodePort](shadernodeport/index.md) | Declares a typed shader port independently of editor presentation and backend source syntax. |
| [ShaderParameterPresentation](shaderparameterpresentation/index.md) | Stores Editor-only parameter presentation by stable binding identity in the Shader&#39;s authoring graph. |
| [ShaderPreviewContext](shaderpreviewcontext/index.md) | Carries frame-only preview inputs; persistent provider state must retain stable values rather than this object. |
| [ShaderPreviewProvider](shaderpreviewprovider/index.md) | Builds domain-owned preview geometry and pass inputs without changing a scene or canonical asset. |
| [ShaderPreviewProviderAttribute](shaderpreviewproviderattribute/index.md) | Associates a reloadable preview implementation with one open Shader contract. |
| [ShaderPreviews](shaderpreviews/index.md) | Hosts isolated Shader and Material images using domain-contributed preview pipelines. |
| [ShaderPropertyInspector](shaderpropertyinspector/index.md) | Uses the shared Inspector drawers for both Shader defaults and Material overrides. |
| [ShaderSourceAnalysis](shadersourceanalysis/index.md) | Returns a recoverable source analysis result and complete original-source dependencies. |
| [ShaderSourceDiagnostic](shadersourcediagnostic/index.md) | Reports a frontend problem without retaining a language-specific exception or parser. |
| [ShaderSourceField](shadersourcefield/index.md) | Describes one immutable named structure field. |
| [ShaderSourceFile](shadersourcefile/index.md) | Contains immutable source text supplied by the asset candidate&#39;s controlled source resolver. |
| [ShaderSourceFunction](shadersourcefunction/index.md) | Contains the single callable interface exported by a source asset. |
| [ShaderSourceImplementationAnalysis](shadersourceimplementationanalysis/index.md) | Freezes a parsed implementation and its complete source inputs without retaining a frontend or resolver. |
| [ShaderSourceImportSettings](shadersourceimportsettings/index.md) | Configures one source-function library through the standard asset import-settings sidecar. |
| [ShaderSourceInclude](shadersourceinclude/index.md) | Records an include resolution edge so compilation never reinterprets authoring paths against live files. |
| [ShaderSourceModuleAnalysis](shadersourcemoduleanalysis/index.md) | Reports whether every supplied implementation and variant has the same callable graph interface. |
| [ShaderSourceNodeDefinition](shadersourcenodedefinition/index.md) | Projects one resolved source interface into immutable graph ports without duplicating authored port declarations. |
| [ShaderSourceParameter](shadersourceparameter/index.md) | Describes one parameter parsed from a public source declaration. |
| [ShaderSourceParameterDirection](shadersourceparameterdirection/index.md) | Declares value flow across a source function parameter. |
| [ShaderSourcePosition](shadersourceposition/index.md) | Identifies an original source position, not a generated temporary compiler filename. |
| [ShaderSourceRequest](shadersourcerequest/index.md) | Carries the immutable inputs required to execute one shader source request. |
| [ShaderSourceType](shadersourcetype/index.md) | Describes a language-independent function value, including aggregate members and fixed arrays. |
| [ShaderStorageType](shaderstoragetype/index.md) | Describes typed storage without embedding a backend register, declaration or resource handle. |
| [ShaderTarget](shadertarget/index.md) | Expands a domain&#39;s surface contract into ordinary graph stages before source dependency capture. |
| [ShaderTargetAttribute](shadertargetattribute/index.md) | Declares the immutable identity used to select a Shader Target from an authored graph. |
| [ShaderTargetContext](shadertargetcontext/index.md) | Supplies neutral authoring data to a domain target without exposing an adapter or live asset. |
| [ShaderTargetUnavailableException](shadertargetunavailableexception/index.md) | Identifies an authored target that is absent from the current extension generation. |

## T

| Type | Purpose |
| --- | --- |
| [TransformGizmoOperation](transformgizmooperation/index.md) | Chooses the transform handles rendered by the viewport presenter. |
| [TransformGizmoOptions](transformgizmooptions/index.md) | Supplies frame-local matrices and interaction policy without native handles. |
| [TransformGizmoResult](transformgizmoresult/index.md) | Returns copied manipulation output; the domain owner decides how to apply and record it. |
| [TransformGizmoSpace](transformgizmospace/index.md) | Chooses how the manipulation axes are oriented. |
| [TreeNodeDrawContext](treenodedrawcontext/index.md) | Provides the native geometry of a tree row while its custom content is being drawn. |
| [TreeNodeOptions](treenodeoptions/index.md) | Configures an interactive tree row. |
| [TreeNodeResult](treenoderesult/index.md) | Describes interaction state produced by a tree row. |

