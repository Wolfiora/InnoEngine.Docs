---
title: Display and update a UI document
description: Load an imported document, manage its context, route input, and
  hand resource deltas to a renderer.
uid: manual.ui.use-documents
kind: how-to
owners:
  - Inno.UI
  - Inno.UI.Runtime
contracts:
  - project.inno-ui#document-and-frame-contract
  - project.inno-ui-runtime#session-and-font-ownership
exampleMode: runtime-script
exampleProjects:
  - Inno.UI
---
# Display and update a UI document

InnoEngine's retained UI service loads documents, updates interaction and layout, and produces backend-neutral render frames. A product must supply both a compatible document backend and a renderer that consumes those frames. Calling `UI.Render` alone does not draw to a window.

This service is separate from the Editor's host-driven panel framework. To add a dockable Editor tool, start with [adding an Editor panel](../../extending/editor-panels.md).

## Prerequisites

The host must compose Input and UI runtime subsystems, select a backend, and provide an asset artifact lookup. The document must already be imported for that backend. The caller must hold the document asset through its normal asset lifetime; a handle returned by UI is not a new persistent asset identity.

Use the script facade only inside an active UI execution scope. Host infrastructure should receive an explicit `IUiService`. The facade does not search for a backend, construct a global runtime, or marshal execution to its owning thread.

## Load an imported document

This Runtime script helper borrows a live `UiDocumentAsset`. It returns an owned context and its document. Keep the pair together and destroy the context when the screen closes. Context destruction also closes its documents.

```csharp
using InnoEngine.UI;

public static class DocumentScreen
{
    public static (UiContextHandle Context, UiDocumentHandle Document) Open(
        UiDocumentAsset asset, int width, int height)
    {
        UiContextHandle context = UI.CreateContext(
            new UiContextOptions("main-screen", width, height));
        try
        {
            UiDocumentHandle document = UI.LoadDocument(context, asset);
            UI.ShowDocument(context, document);
            return (context, document);
        }
        catch
        {
            UI.DestroyContext(context);
            throw;
        }
    }

    public static void Close(UiContextHandle context) => UI.DestroyContext(context);
}
```

The example assumes destruction succeeds during error cleanup. An application that must preserve both a load failure and a cleanup failure should record both exceptions. It must not continue using the failed context or silently swallow the cleanup failure.

Use positive physical pixel dimensions and a finite positive density. Call `SetViewport` when those values change. Do not persist context or document handles across runtime replacement.

## Change content deliberately

`SetText` takes plain Unicode text; the backend performs source-language escaping. Do not pre-escape user text. `SetContent` instead accepts a language-tagged `UiDocumentFragment` and intentionally replaces children with markup understood by the selected backend.

For `SetText`, `SetContent`, `SetAttribute` and `SetClass`, true means that the target element exists and the operation was applied. It does **not** mean that the new value differs from the old one. False means that the element was not found. Invalid context/document handles and backend errors still fail explicitly.

`HideDocument` preserves the loaded document. `CloseDocument` releases that document and its tracked font references. Never use its handle afterward. Destroying the owning context releases all its remaining documents.

## Advance one frame

1. Update the context after the host captures input for the current runtime frame.
2. Read and route `DrainEvents` results using their document handle, event type and target element ID.
3. Call `Render` and pass the result to the product's UI renderer.
4. Keep the renderer's resource state across frames, applying resource updates and retirements as described in [consuming UI frames](../../extending/ui-render-frames.md).

The ordinary `Update(context)` uses the runtime's captured input snapshot. It does not convert a whole-window pointer position into a sub-viewport coordinate system. Hosts embedding a UI surface must supply a correctly mapped `UiInputSnapshot` through the explicit overload.

Event delivery is backend-specific. The current RmlUi adapter clears its queued events in a `finally` block, including when copying an event fails. A failed drain is not a promise that the same events can be replayed.

## Diagnose a missing screen

| Symptom | Check |
| --- | --- |
| No active UI scope | Run inside the composed runtime frame or use an explicitly owned service. |
| Document load rejected | Check Missing state, imported payload, language and exact backend implementation identity. |
| Layout updates but nothing appears | Confirm the product consumes `UiRenderFrame` and submits its own rendering work. |
| Text does not render | Verify imported font declarations, artifact dependencies and supported face selection. |
| Pointer input is offset | Map the input into the context's physical pixel coordinates. |
| A setter returns false | Check the element ID in the loaded document, not an old document generation. |

## Continue

- [Author an RmlUi document](author-rml.md), including imported fonts and stylesheet dependencies.
- [UI lifetime and rendering model](../../architecture/ui-lifetime.md).
- [UI service reference](../../architecture/projects/inno-ui.md).
