---
title: Inno.Editor.WindowsX64
description: "Explicit WindowsX64 composition for shared Editor startup, platform services and native presentation."
uid: project.inno-editor-windowsx64
kind: project
owners: [Inno.Editor.WindowsX64]
exampleMode: host
exampleProjects: [Inno.Editor.WindowsX64]
---
# Inno.Editor.WindowsX64

Explicit WindowsX64 composition for shared Editor startup, platform services and native presentation.

## Start through the unified Editor entry

The product runs on the caller's main thread and selects its actual platform/backend integrations. With no arguments it opens a native project-folder dialog. Run returns 0 on normal exit/dialog cancellation, 2 on cancellation/invalid arguments and 1 on startup failure. A live dialog retains its callback owner until completion.

The composition supplies keyboard policy, authoring providers, collectible modules, serialization and build distribution to the shared host. Native resources are prepared and deployed by the product, not borrowed from a bootstrap directory. Shared hosting owns its created resources; caller-owned inputs retain their declared lifetimes.

Its handwritten startup signature uses System types. Generated registration contracts separately expose Core.Serialization and Extensibility.Catalogs dependencies; other product dependencies are implementation choices.

## Shared product contracts

[Product composition](../../platforms/product-composition.md) explains startup, return codes, content layouts, platform selection and shutdown. [Publish a Player](../../platforms/publish-player.md) covers export prerequisites; [platform selection](../../platforms/select-target.md) distinguishes source support from certified execution.

## Compose backend catalogs

This host example selects immutable providers without creating windows or devices. Real startup remains owned by the product host.

```csharp
using Inno.Adapter.Platform;
using Inno.Adapter.Platform.Sdl3;
using Inno.Adapter.Rendering;
using Inno.Adapter.Rendering.Bgfx;
using Inno.Integration.WindowsX64.Bgfx.Runtime;
using Inno.Integration.WindowsX64.Sdl3;

var platform = new PlatformBackendCatalog(
    [new Sdl3PlatformBackendProvider(new WindowsX64Sdl3HostIntegration())]);
var rendering = new RenderingBackendCatalog(
    [new BgfxRenderingBackendProvider(new WindowsX64BgfxSurfaceIntegration())]);
```

## Source and verification

[Startup declaration and exact parameter/result contract](../../api/engine/editor/windowsx64/index.md) documents the public composition entry.

[Source project](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/WindowsX64/editor/Inno.Editor.WindowsX64/Inno.Editor.WindowsX64.csproj). The evaluated Windows source surface was captured without executing the product.
