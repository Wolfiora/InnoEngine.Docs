---
uid: api.directory.engine.ui
title: "UI"
kind: landing
owners: []
---

# UI

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Assets](assets/index.md) | Neutral UI import settings, language frontends, dependency analysis and runtime payload production. |
| [Runtime](runtime/index.md) | Session-owned UI service, input capture, imported document loading and retained font artifacts. |

## Types

| Type | Purpose |
| --- | --- |
| [IUiBackend](iuibackend/index.md) | Defines the replaceable document, layout, input, and draw-geometry backend boundary. |
| [IUiService](iuiservice/index.md) | Provides retained-mode documents and backend-neutral UI frames to scripts and rendering plugins. |
| [UI](ui/index.md) | Provides script-friendly retained-mode UI operations. |
| [UiBackendCapabilities](uibackendcapabilities/index.md) | Describes optional behavior implemented by one UI backend generation. |
| [UiBackendCapability](uibackendcapability/index.md) | Identifies an optional backend behavior requested by a caller. |
| [UiCapabilityUnavailableException](uicapabilityunavailableexception/index.md) | Reports that the selected backend cannot perform an explicitly requested optional operation. |
| [UiClipRectangle](uicliprectangle/index.md) | Defines an integer clipping rectangle in UI surface coordinates. |
| [UiContextHandle](uicontexthandle/index.md) | Identifies one UI context owned by the active UI service generation. |
| [UiContextOptions](uicontextoptions/index.md) | Defines one independent UI layout and interaction surface. |
| [UiDocumentAsset](uidocumentasset/index.md) | Represents one imported, language-tagged UI document source. |
| [UiDocumentFontFace](uidocumentfontface/index.md) | Identifies one imported font face owned by a single UI document. |
| [UiDocumentFragment](uidocumentfragment/index.md) | Contains a language-tagged fragment for a backend-specific document mutation. |
| [UiDocumentHandle](uidocumenthandle/index.md) | Identifies one document owned by a UI context. |
| [UiDocumentLanguageId](uidocumentlanguageid/index.md) | Identifies a document source language independently from any UI backend implementation. |
| [UiDocumentSource](uidocumentsource/index.md) | Contains immutable text in one explicitly selected UI document language. |
| [UiDrawCommand](uidrawcommand/index.md) | Describes one draw of a previously published mesh. |
| [UiEvent](uievent/index.md) | Describes one queued document event after a context update. |
| [UiEventType](uieventtype/index.md) | Identifies one document event made visible to game code. |
| [UiExecutionContext](uiexecutioncontext/index.md) | Binds one UI service to the current asynchronous execution context. |
| [UiFontRegistration](uifontregistration/index.md) | Describes one encoded font face registration across the neutral backend boundary. |
| [UiInputSnapshot](uiinputsnapshot/index.md) | Carries one immutable input snapshot across the UI backend boundary. |
| [UiMeshHandle](uimeshhandle/index.md) | Identifies one backend-owned immutable mesh generation. |
| [UiMeshUpdate](uimeshupdate/index.md) | Publishes one immutable mesh generation to a rendering plugin. |
| [UiRenderFrame](uirenderframe/index.md) | Contains incremental resource changes and ordered draw commands for one UI context. |
| [UiRenderFrameBuilder](uirenderframebuilder/index.md) | Builds one immutable backend-neutral frame while transferring ownership of update arrays. |
| [UiTextureData](uitexturedata/index.md) | Contains immutable RGBA8 texture pixels addressable by a document source name. |
| [UiTextureHandle](uitexturehandle/index.md) | Identifies one backend-owned immutable texture generation. |
| [UiTextureUpdate](uitextureupdate/index.md) | Publishes one immutable premultiplied RGBA8 texture generation. |
| [UiVertex](uivertex/index.md) | Describes one vertex in backend-neutral UI draw geometry. |

