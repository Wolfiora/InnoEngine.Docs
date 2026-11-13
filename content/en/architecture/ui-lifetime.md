---
title: UI lifetimes and data flow
description: Separate authoring, runtime sessions, native layout, and
  renderer-owned resources.
uid: architecture.ui-lifetime
kind: explanation
owners:
  - Inno.UI
  - Inno.UI.Runtime
  - Inno.UI.Assets
  - Inno.Adapter.UI
contracts:
  - project.inno-ui#document-and-frame-contract
  - project.inno-ui-runtime#session-and-font-ownership
---
# UI lifetimes and data flow

UI separates the document contract from the implementation that performs layout and from the renderer that owns GPU resources. That separation lets a product choose its native backend and rendering integration without making ordinary document code depend on either.

## Follow the boundaries

| Stage | Responsibility | Output |
| --- | --- | --- |
| Authoring frontend | Analyze a selected language and declare source/font dependencies | Neutral canonical text and diagnostics |
| Asset importer | Resolve fonts and build an implementation-qualified document payload | `UiDocumentAsset` runtime payload |
| Runtime session | Own a backend, retain required font artifacts, bind the UI service | Context and document operations |
| Backend | Own layout state, interaction and retained native resources | Events and `UiRenderFrame` deltas |
| Rendering consumer | Own GPU resources and submission/retirement | Product-specific visible output |

The neutral contract does not depend on the Editor, scene implementation or GPU renderer. An authoring frontend need not load the native runtime just to declare dependencies. A runtime document cannot silently switch to a backend with an incompatible implementation identity.

## Scope services to the runtime

`UiRuntimeFactory` creates a runtime per isolated session. Its declared frame dependency is Input; its current ordering value is -700. The UI runtime captures the current input snapshot and owns a UI binding scope for that frame. It does not declare a separate Text runtime dependency merely because native RmlUi renders text.

The execution slot selects a service; it does not make that service thread-safe. Calls still obey the backend's owner-thread rules. An asynchronous continuation is not permission to use a native owner on another thread.

## Retain only the required asset responsibility

An imported document identifies a backend implementation, language, source and declared font assets. The runtime rejects Missing assets and unavailable imported payloads before use. It acquires font-data artifacts and tracks matching registrations by font identity, document content version, face, family, style and weight.

Compatible registrations can share retained responsibility. Different document versions or family contracts do not become interchangeable just because their bytes happen to originate from the same font asset. Closing the last referencing document releases its runtime-held artifact responsibility.

Native font storage has its own lifetime. The RmlUi process host retains native font memory until its final session shuts down. Releasing an asset lease does not authorize freeing native memory still retained by the library.

## Treat shutdown failures explicitly

Context destruction calls the backend before releasing tracked document font references. Runtime stop attempts backend disposal and remaining font releases, collecting failures. Those attempts are not a single atomic transaction.

The current RmlUi backend marks itself disposed before destroying its native session. If destruction fails, another `Dispose` call does not retry that operation. This is a current implementation limitation, not a guarantee of successful cleanup. Preserve the first failure and retire the affected session through its owner rather than reusing its handles.

## Keep presentation models distinct

Retained document UI, the Editor panel framework, and a consumer's game rendering integration solve different tasks. A custom Editor panel follows host-driven creation, drawing, quarantine and retirement. A retained UI document follows context/document and render-delta lifetimes. Neither implies that the other model is automatically available in a selected product.

Start with [displaying a document](../manual/ui/use-documents.md), [consuming render frames](../extending/ui-render-frames.md), or [adding an Editor panel](../extending/editor-panels.md).
