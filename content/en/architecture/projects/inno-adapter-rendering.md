---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-rendering
symbol: project:Inno.Adapter.Rendering
title: Inno.Adapter.Rendering
kind: project
owners:
- Inno.Adapter.Rendering
sourceFingerprint: 727e06f8bafc208e6847518996c5716bf570c2291a5b63ed9ef4004e540f8f54
contracts: []
outdatedFor: a3e89ae3a5de1bdae08f290aba1e37381737521bb21eb4353f998c625fc5142e

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Explicit runtime rendering providers without backend-native types or compiler dependencies.
outdated: false
exampleMode: host
exampleProjects:
- Inno.Adapter.Rendering
---
# Inno.Adapter.Rendering

Explicit runtime rendering providers without backend-native types or compiler dependencies.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../render-frame.md).

## Registration and creation

RenderingBackendID is an open, case-sensitive stable implementation identity. The built-in bgfx value identifies the standard implementation; a default struct is unassigned and rejected before allocation. The protected provider constructor captures its configured ID once. It cannot be overridden or inferred by creating a temporary device.

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
    RenderingBackendID selection,
    IPlatformWindow window
) {
    return factory.CreateDevice(selection, new RenderingBackendOptions { window = window });
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/Inno.Adapter.Rendering.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../../api/engine/adapter/rendering/index.md).
