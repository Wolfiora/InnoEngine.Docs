---
title: Inno.Integration.WindowsX64.Sdl3
description: "Windows x64 window, surface and focus policies for the SDL3 adapter."
uid: project.inno-integration-windowsx64-sdl3
kind: project
owners: [Inno.Integration.WindowsX64.Sdl3]
exampleMode: host
exampleProjects: [Inno.Integration.WindowsX64.Sdl3]
---
# Inno.Integration.WindowsX64.Sdl3

Windows x64 window, surface and focus policies for the SDL3 adapter.

Start with [the platform task guide](../../platforms/window-lifetime.md).

## Application contract

This implementation supplies `ISdl3HostIntegration`: initialization policy, window creation, system surface resolution and initial focus. It depends on the shared SDL adapter and its private native boundary, not another platform or a BGFX build integration. Product composition passes the instance explicitly to `Sdl3PlatformBackendProvider`.

The application borrows the integration and owns successfully created windows. If wrapping a newly created window fails, the application destroys that new window. An adopted external window remains owned externally: release its application wrapper before the original owner destroys it. All operations stay on the original owner thread. `GetWindows` enumerates this application, not every process window.

Windows exposes Win32 surfaces and supports multiple windows and live resize.

Missing surfaces and creation failures are explicit errors. Released wrappers reject `nativeHandles`; borrowed windows must not be destroyed twice. See [window and rendering lifetime](../../platforms/window-lifetime.md) before integrating a rendering device.

## Create an owned application

The following host example requires the actual target runtime and its deployed SDL component. Compilation alone does not validate a native window or its event thread.

```csharp
using Inno.Integration.WindowsX64.Sdl3;
using Inno.Adapter.Platform.Sdl3;
using Inno.Platform;

using var app = new Sdl3PlatformApplication(new WindowsX64Sdl3HostIntegration());
using var window = app.CreateWindow(new PlatformWindowOptions { title = "Application", width = 960, height = 540 });
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/Inno.Integration.WindowsX64.Sdl3.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../types/platform-services/inno-integration-windowsx64-sdl3/index.md).
