---
title: Inno.Adapter.Presentation
description: "A neutral, application-owned presentation context for authoring products."
uid: project.inno-adapter-presentation
kind: project
owners: [Inno.Adapter.Presentation]
exampleMode: host
exampleProjects: [Inno.Adapter.Presentation]
---
# Inno.Adapter.Presentation

A neutral, application-owned presentation context for authoring products.

Start with [owning windows and surfaces](../../platforms/window-lifetime.md) and [presentation context ownership](../../extending/presentation-context.md).

## Create one owned context

PresentationBackendId is an open, case-sensitive identity; the default struct is unassigned. Composition explicitly supplies the complete provider set. The catalog freezes it, rejects invalid/duplicate/null providers and reports supportedBackends without creating a native context. Unknown IDs fail with NotSupportedException; null products fail with InvalidOperationException.

CreateContext returns a caller-owned IPresentationContext. PresentationBackendOptions borrows the platform application, primary window and render device and requests neutral feature flags. It contains no shader compiler or asset source. The context must retire before its shared device and window owners. DefaultAuthoringAdapterCatalog requires an explicit non-null presentationProviders sequence; an empty sequence registers none. It does not silently select ImGui for null input.

## Frame, layout and viewport operations

RenderFrame selects its owned context and display metrics, optionally runs synchronous prepareFrame, then invokes the draw callback. A preparation failure prevents drawing and partial publication. A null draw callback or overlapping operation fails explicitly. The context also contributes draw work through the neutral RenderGraph contract.

TryGetWindowId resolves only a live platform window for a presentation viewport. SetLayoutFile(null) disables backend file persistence when the host saves layout text itself. LoadLayout consumes complete text; TryCaptureLayout returns a complete snapshot when dirty or explicitly forced. Host layout persistence remains separate from frame drawing.

## Texture lifetime

RegisterTexture accepts a texture owned by the active render-device generation and returns an opaque presentation token. UnregisterTexture releases that registration without releasing the source texture; it reports whether a registration existed. DrawImage uses logical presentation units. Do not persist tokens, use them after their presentation generation retires or free a source texture while a draw can still consume it.

Editor hosts retain this neutral context, not SDL windows, BGFX handles or a concrete ImGui context. Concrete event bridges and renderers belong to composition/backend implementations.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using Inno.Adapter.Presentation;

static IPresentationContext CreateOwnedPresentation(
    IPresentationBackendFactory factory,
    PresentationBackendId selection,
    PresentationBackendOptions options
) {
    return factory.CreateContext(selection, options);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/Inno.Adapter.Presentation.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../../api/engine/adapter/presentation/index.md).
