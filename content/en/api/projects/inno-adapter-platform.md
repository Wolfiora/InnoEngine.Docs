---
title: Inno.Adapter.Platform
description: "Explicit platform providers and the borrowed surface boundary between native adapters."
uid: project.inno-adapter-platform
kind: project
owners: [Inno.Adapter.Platform]
exampleMode: host
exampleProjects: [Inno.Adapter.Platform]
---
# Inno.Adapter.Platform

Explicit platform providers and the borrowed surface boundary between native adapters.

Start with [owning windows and surfaces](../../platforms/window-lifetime.md) and [presentation context ownership](../../extending/presentation-context.md).

## Register before allocation

PlatformBackendId is an open, ordinal, case-sensitive identity without whitespace. Its default struct is unassigned; sdl3 is a built-in identity, not an exhaustive platform list. PlatformBackendProvider captures the explicitly configured immutable ID and creates a caller-owned application.

PlatformBackendCatalog freezes the complete provider set and rejects invalid, duplicate or null registrations. Registration does not create a window. Resolve only an exact registered ID; unsupported IDs throw NotSupportedException and a null product throws InvalidOperationException. AdapterSelection validates all selected domains before window/device initialization.

Composition owns providers and their resources; the catalog does not take over their lifetime. This explicitly supplied set is distinct from Attribute/TypeRegistry discovery. A new provider does not require a central enum or switch.

## Borrow native surfaces only between adapters

INativeWindowSurface is an optional host-adapter SPI. Its window/display handles are borrowed from the window owner and become invalid on window disposal. PlatformNativeHandleId describes the exact ABI through an open stable identity; built-in values describe Win32, Cocoa and a UTF-8 browser canvas selector. A default ABI identity is unassigned and a display handle may be zero.

The consuming graphics adapter must understand the ABI and reject unsupported windows before acquiring process resources. Borrowing after window disposal throws ObjectDisposedException. These handles are not engine service, script, Identity, History or serialization data. They never transfer window ownership.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System;
using Inno.Adapter.Platform;
using Inno.Platform;

static void RunWithWindow(
    IPlatformBackendFactory factory,
    PlatformBackendId selection,
    PlatformWindowOptions options,
    Action<IPlatformApplication, IPlatformWindow> run
) {
    using IPlatformApplication application = factory.CreateApplication(selection);
    using IPlatformWindow window = application.CreateWindow(options);
    run(application, window);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/Inno.Adapter.Platform.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/platform-boundaries/inno-adapter-platform/index.md).
