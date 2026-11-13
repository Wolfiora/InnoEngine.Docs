---
uid: api.directory.engine.editor.imgui
title: "ImGui"
kind: landing
owners: []
---

# ImGui

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [DialogLayout](dialoglayout/index.md) | Carries a measured dialog layout. Only its required extent is public; drawing mechanics remain owned by the widget. |
| [DialogPresentation](dialogpresentation/index.md) | Describes immutable content for a measured message dialog. Actions are returned to its owner, never retained as callbacks. |
| [EditorDragDropRenderer](editordragdroprenderer/index.md) | Bridges managed editor drag sessions to the native ImGui payload API. |
| [EditorDrawList](editordrawlist/index.md) | A pointer-free drawing borrow valid only in its original window, UI session and frame. |
| [EditorDropWidgetResult](editordropwidgetresult/index.md) | Reports the preview and delivery state of an ImGui editor drop target. |
| [EditorGameInputCapture](editorgameinputcapture/index.md) | Routes platform input to the Play session only while the visible Game View owns focus. |
| [EditorIconCatalog](editoriconcatalog/index.md) | Describes the host&#39;s complete standard glyph vocabulary as immutable presentation values. |
| [EditorMenuRenderer](editormenurenderer/index.md) | Renders immutable editor menu models through ImGui. |
| [EditorPalette](editorpalette/index.md) | Defines the complete editor color palette in one theme surface. |
| [EditorStyleMetrics](editorstylemetrics/index.md) | Defines reusable layout metrics and separates owned frame values from requested style changes. |
| [EditorUiInput](editoruiinput/index.md) | Copies frame input facts used by presentation without exposing native input storage. |
| [EditorUiLayout](editoruilayout/index.md) | Copies the presentation metrics needed by custom layouts without retaining native style memory. |
| [EditorUiSession](editoruisession/index.md) | Owns editor controls and transient presentation state for one host, independently from other ImGui contexts. |
| [ImGui](imgui/index.md) | Provides pointer-free controls within the active Editor UI session. |
| [ImGuiButtonFlags](imguibuttonflags/index.md) | Defines the supported button flags choices at the Editor presentation boundary. |
| [ImGuiChildFlags](imguichildflags/index.md) | Defines the supported child flags choices at the Editor presentation boundary. |
| [ImGuiCol](imguicol/index.md) | Defines the supported col choices at the Editor presentation boundary. |
| [ImGuiColorEditFlags](imguicoloreditflags/index.md) | Defines the supported color edit flags choices at the Editor presentation boundary. |
| [ImGuiComboFlags](imguicomboflags/index.md) | Defines the supported combo flags choices at the Editor presentation boundary. |
| [ImGuiCond](imguicond/index.md) | Defines the supported cond choices at the Editor presentation boundary. |
| [ImGuiEditorRuntime](imguieditorruntime/index.md) | Presents the backend-independent editor interaction runtime through ImGui. |
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
| [InlineRenamePresentation](inlinerenamepresentation/index.md) | Describes the view-owned geometry used to present an active inline rename action. |
| [InlineRenameResult](inlinerenameresult/index.md) | Describes the outcome of an inline rename control. |
| [ListNavigationResult](listnavigationresult/index.md) | Carries frame-local list navigation intents over visible indices without owning objects or selection state. |
| [TransformGizmoOperation](transformgizmooperation/index.md) | Chooses the transform handles rendered by the viewport presenter. |
| [TransformGizmoOptions](transformgizmooptions/index.md) | Supplies frame-local matrices and interaction policy without native handles. |
| [TransformGizmoResult](transformgizmoresult/index.md) | Returns copied manipulation output; the domain owner decides how to apply and record it. |
| [TransformGizmoSpace](transformgizmospace/index.md) | Chooses how the manipulation axes are oriented. |
| [TreeNodeDrawContext](treenodedrawcontext/index.md) | Provides the native geometry of a tree row while its custom content is being drawn. |
| [TreeNodeOptions](treenodeoptions/index.md) | Configures an interactive tree row. |
| [TreeNodeResult](treenoderesult/index.md) | Describes interaction state produced by a tree row. |

