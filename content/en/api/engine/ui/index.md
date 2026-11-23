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
| [IUIBackend](iuibackend/index.md) | Defines the replaceable document, layout, input, and draw-geometry backend boundary. |
| [IUIService](iuiservice/index.md) | Provides retained-mode documents and backend-neutral UI frames to scripts and rendering plugins. |
| [UI](ui/index.md) | Provides script-friendly retained-mode UI operations. |
| [UIBackendCapabilities](uibackendcapabilities/index.md) | Describes optional behavior implemented by one UI backend generation. |
| [UIBackendCapability](uibackendcapability/index.md) | Identifies an optional backend behavior requested by a caller. |
| [UICapabilityUnavailableException](uicapabilityunavailableexception/index.md) | Reports that the selected backend cannot perform an explicitly requested optional operation. |
| [UIClipRectangle](uicliprectangle/index.md) | Defines an integer clipping rectangle in UI surface coordinates. |
| [UIContextHandle](uicontexthandle/index.md) | Identifies one UI context owned by the active UI service generation. |
| [UIContextOptions](uicontextoptions/index.md) | Defines one independent UI layout and interaction surface. |
| [UIDocumentAsset](uidocumentasset/index.md) | Represents one imported, language-tagged UI document source. |
| [UIDocumentFontFace](uidocumentfontface/index.md) | Identifies one imported font face owned by a single UI document. |
| [UIDocumentFragment](uidocumentfragment/index.md) | Contains a language-tagged fragment for a backend-specific document mutation. |
| [UIDocumentHandle](uidocumenthandle/index.md) | Identifies one document owned by a UI context. |
| [UIDocumentLanguageID](uidocumentlanguageid/index.md) | Identifies a document source language independently from any UI backend implementation. |
| [UIDocumentSource](uidocumentsource/index.md) | Contains immutable text in one explicitly selected UI document language. |
| [UIDrawCommand](uidrawcommand/index.md) | Describes one draw of a previously published mesh. |
| [UIEvent](uievent/index.md) | Describes one queued document event after a context update. |
| [UIEventType](uieventtype/index.md) | Identifies one document event made visible to game code. |
| [UIExecutionContext](uiexecutioncontext/index.md) | Binds one UI service to the current asynchronous execution context. |
| [UIFontRegistration](uifontregistration/index.md) | Describes one encoded font face registration across the neutral backend boundary. |
| [UIInputSnapshot](uiinputsnapshot/index.md) | Carries one immutable input snapshot across the UI backend boundary. |
| [UIMeshHandle](uimeshhandle/index.md) | Identifies one backend-owned immutable mesh generation. |
| [UIMeshUpdate](uimeshupdate/index.md) | Publishes one immutable mesh generation to a rendering plugin. |
| [UIRenderFrame](uirenderframe/index.md) | Contains incremental resource changes and ordered draw commands for one UI context. |
| [UIRenderFrameBuilder](uirenderframebuilder/index.md) | Builds one immutable backend-neutral frame while transferring ownership of update arrays. |
| [UITextureData](uitexturedata/index.md) | Contains immutable RGBA8 texture pixels addressable by a document source name. |
| [UITextureHandle](uitexturehandle/index.md) | Identifies one backend-owned immutable texture generation. |
| [UITextureUpdate](uitextureupdate/index.md) | Publishes one immutable premultiplied RGBA8 texture generation. |
| [UIVertex](uivertex/index.md) | Describes one vertex in backend-neutral UI draw geometry. |

