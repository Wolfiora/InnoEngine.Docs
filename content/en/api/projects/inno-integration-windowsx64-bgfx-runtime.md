---
title: Inno.Integration.WindowsX64.Bgfx.Runtime
description: "Windows x64 system surfaces for the BGFX rendering adapter."
uid: project.inno-integration-windowsx64-bgfx-runtime
kind: project
owners: [Inno.Integration.WindowsX64.Bgfx.Runtime]
exampleMode: host
exampleProjects: [Inno.Integration.WindowsX64.Bgfx.Runtime]
---
# Inno.Integration.WindowsX64.Bgfx.Runtime

Windows x64 system surfaces for the BGFX rendering adapter.

Start with [the platform task guide](../../platforms/window-lifetime.md).

## Surface contract

This runtime integration connects the Win32 surface ABI to the neutral BGFX runtime SPI. It depends on the managed rendering adapter and platform SPI, not the native BGFX facade, binding generator or build integration. Its immutable configuration owns no window or device.

`Resolve` validates the ABI, presentation role and nonzero handle before producing a borrowed descriptor. It never transfers the original window or display ownership. Additional surfaces are permitted, subject to the device's actual SwapChain capability; primary-output sRGB reset is permitted.

The device validates the primary surface before native initialization and resolves each new surface once. Closing a window requires the complete [surface retirement procedure](../../platforms/window-lifetime.md); completion of a retirement Task is not a general GPU fence.

## Product composition

Pass this integration to `BgfxRenderingBackendProvider`, then select that provider through `DefaultAdapterCatalogOptions.rendering`. Desktop Editor and Player products can share the runtime integration independently of build-time compiler selection. Browser has a Player composition only.

```csharp
using Inno.Adapter.Rendering.Bgfx;
using Inno.Integration.WindowsX64.Bgfx.Runtime;

var rendering = new BgfxRenderingBackendProvider(new WindowsX64BgfxSurfaceIntegration());
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx.Runtime/Inno.Integration.WindowsX64.Bgfx.Runtime.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../types/platform-services/inno-integration-windowsx64-bgfx-runtime/index.md).
