---
title: Inno.Adapter.Rendering
description: "Explicit runtime rendering providers without backend-native types or compiler dependencies."
uid: project.inno-adapter-rendering
kind: project
owners: [Inno.Adapter.Rendering]
exampleMode: host
exampleProjects: [Inno.Adapter.Rendering]
---
# Inno.Adapter.Rendering

Explicit runtime rendering providers without backend-native types or compiler dependencies.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../render-frame.md).

## Registration and creation

RenderingBackendId is an open, case-sensitive stable implementation identity. The built-in bgfx value identifies the standard implementation; a default struct is unassigned and rejected before allocation. The protected provider constructor captures its configured ID once. It cannot be overridden or inferred by creating a temporary device.

RenderingBackendCatalog freezes the provider collection and rejects invalid/duplicate IDs or null providers. It resolves only registered backends, with no silent replacement. IRenderingBackendFactory exposes supportedBackends, CreateDevice and CreateCompositionProgramProvider. Shell validates selection before window initialization, and Editor/Player obtain composition programs from the same registered implementation.

RenderingBackendOptions contains neutral window, graphics preference, VSync, sRGB and threading policy. The returned device is caller-owned. Provider lifetime belongs to composition; do not retain reloadable providers in cross-generation static caches.

## Runtime-only boundary

The contract exposes no BGFX handle, native enum, view ID or compiler executable path. A custom implementation registers a new stable ID and derived provider without editing a central enum or platform switch. DefaultAdapterCatalogOptions requires the complete rendering factory; it does not silently create BGFX.

Authoring shader/texture compiler creation belongs to Inno.Adapter.Rendering.Authoring. Keeping it separate prevents the runtime Adapter catalog and Player from acquiring asset authoring or Build toolchains.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Adapter.Rendering;
using Inno.Platform;
using Inno.Rendering;

static IRenderDevice CreateOwnedDevice(
    IRenderingBackendFactory factory,
    RenderingBackendId selection,
    IPlatformWindow window
) {
    return factory.CreateDevice(selection, new RenderingBackendOptions { window = window });
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/Inno.Adapter.Rendering.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../../api/engine/adapter/rendering/index.md).
