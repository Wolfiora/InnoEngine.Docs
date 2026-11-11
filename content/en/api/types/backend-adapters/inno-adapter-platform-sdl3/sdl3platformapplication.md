---
title: "Sdl3PlatformApplication"
description: "Reference for Sdl3PlatformApplication in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.78200e7f14c62468
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3PlatformApplication`

This reference describes `Sdl3PlatformApplication` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Platform.IPlatformApplication`.

## Members

| Member | Kind |
| --- | --- |
| [`redrawRequested`](#api-295648663dfda5f9) | Event |
| [`#ctor`](#api-f933197ced4adf53) | Method |
| [`AdoptWindow`](#api-487066d0dae21eee) | Method |
| [`CreateWindow`](#api-43146cd5e453577c) | Method |
| [`Dispose`](#api-e736f83d6c114882) | Method |
| [`GetWindows`](#api-4c60ec48c46c2446) | Method |
| [`PollEvent`](#api-af0800b03fbe6a2e) | Method |
| [`RegisterExtension`](#api-e1a9d2ea0f26319b) | Method |
| [`ReleaseWindow`](#api-c8cf041a703dcd08) | Method |

## Type declaration

<a id="api-78200e7f14c62468"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication 68453ce2bd459a76f84b8d87bc4dbbc8c4cfe876851c7012ea6124a3346956b6 -->

```csharp
public sealed class Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication : Inno.Platform.IPlatformApplication
```

Platform runtime entry point responsible for window creation and platform event polling.

Platform runtime entry point responsible for window creation and platform event polling.

Owns the application window directory and its native lifetime transfers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L11).

## `redrawRequested`

<a id="api-295648663dfda5f9"></a>
<!-- api: E:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.redrawRequested fb5b89b0b712f6ce0100c09d9d2fe42d8f622b449862950da790306c82f9ac9d -->

```csharp
public System.Action<uint>? Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.redrawRequested
```

Occurs after the observable redraw requested state changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L16).

## `#ctor`

<a id="api-f933197ced4adf53"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.#ctor(Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration) f7c97c3d5060ca05a00708b0a9e1e10b69f7d1b5a620378cec508dab26c92e81 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.Sdl3PlatformApplication(Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration hostIntegration)
```

Initializes platform subsystems required for windowing and input events.

**Parameter `hostIntegration`:** The borrowed immutable host configuration used for every window and native surface.

**Throws `System.ArgumentNullException`:** Host configuration is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L27).

## `AdoptWindow`

<a id="api-487066d0dae21eee"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.AdoptWindow(System.IntPtr) 34bde0d236a0fe443deb3efe8d8b3b505fb8ce58b6594a2f1a0ebcec18ec6809 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.AdoptWindow(nint windowHandle)
```

Registers an externally owned window using this application's host and surface integration.

**Parameter `windowHandle`:** The live opaque SDL window handle; its original owner retains destruction responsibility.

**Returns:** A borrowed wrapper visible only in this application's window directory.

**Throws `System.ArgumentException`:** The handle is null or the window is already registered in this application.

**Throws `System.NotSupportedException`:** The host does not support additional windows.

**Throws `System.InvalidOperationException`:** Registration runs outside the owner thread or window inspection fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Sdl3PlatformApplication.Windows.cs#L63).

## `CreateWindow`

<a id="api-43146cd5e453577c"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions) 8426bdb87365052d23f629f1b8bb5d303c62cf236e09da512e62f3fdbf81b75d -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates and registers a window through the borrowed host integration.

**Parameter `options`:** The logical size, visibility and title requested by the product.

**Returns:** A wrapper whose native window is owned by this application until disposal.

**Throws `System.InvalidOperationException`:** Creation or surface inspection fails, or execution is outside the owner thread.

**Throws `System.NotSupportedException`:** The host does not support an additional window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L44).

## `Dispose`

<a id="api-e736f83d6c114882"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.Dispose eb59b98d3d7292f2ba5edc920273196d327d1cf931fe56e9404a802ab5bda738 -->

```csharp
public void Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.Dispose()
```

Releases the resources owned by this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L86).

## `GetWindows`

<a id="api-4c60ec48c46c2446"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.GetWindows ce63e013ac1d42c1479ca88e133f2ccd1b0f8405fbe2e3fbdb36a6d6a606d194 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow> Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.GetWindows()
```

Retrieves the requested windows value from current authoritative state.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L64).

## `PollEvent`

<a id="api-af0800b03fbe6a2e"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.PollEvent(Inno.Core.Events.Event@) 9ffec1a78648b9ff49c65a6d2e36269e850e34b3340ceb98297af6751cb078b9 -->

```csharp
public bool Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.PollEvent(out Inno.Core.Events.Event? evnt)
```

Attempts to dequeue the next backend-neutral platform event.

**Parameter `evnt`:** The evnt consumed by poll event; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the requested condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L55).

## `RegisterExtension`

<a id="api-e1a9d2ea0f26319b"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.RegisterExtension(Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension) 2559dee49864ca815687d9afb6f3d721e632618fcd59cc1224d1ca7c33d21dac -->

```csharp
public System.IDisposable Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.RegisterExtension(Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension extension)
```

Registers a platform extension for the application lifetime.

**Parameter `extension`:** The extension consumed by register extension; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated idisposable that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformApplication.cs#L81).

## `ReleaseWindow`

<a id="api-c8cf041a703dcd08"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.ReleaseWindow(Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow) be699df7d8a2fcdbb3bc12f0bbc7d18ae77e4de137ba2c6ec48fdf00ea058786 -->

```csharp
public void Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication.ReleaseWindow(Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow window)
```

Invalidates and unregisters a borrowed window before its original owner destroys it.

**Parameter `window`:** The external wrapper returned by this application's adoption operation.

**Throws `System.ArgumentException`:** The window is owned by SDL application creation or is not registered by this application.

**Throws `System.InvalidOperationException`:** The operation runs outside the owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Sdl3PlatformApplication.Windows.cs#L84).
