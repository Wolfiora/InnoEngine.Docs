---
title: "ISdl3HostIntegration"
description: "Reference for ISdl3HostIntegration in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.d29bc1dcef5f5475
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `ISdl3HostIntegration`

This reference describes `ISdl3HostIntegration` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ConfigureInitialization`](#api-8123efc0bed1296e) | Method |
| [`CreateWindow`](#api-e85d298888fe4487) | Method |
| [`GetInitialFocus`](#api-887d0a8cea60a11c) | Method |
| [`ResolveNativeSurface`](#api-21cab46df873824a) | Method |
| [`capabilities`](#api-1a6414a1a7e4c408) | Property |

## Type declaration

<a id="api-d29bc1dcef5f5475"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration 3ea43f36666a0e1ee37ce2cb3d6bccf92ffa7032e4dc798d89b6412bff59e3ef -->

```csharp
public interface Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration
```

Connects an explicitly selected system host to SDL without selecting platforms inside the backend.

**Constraints:** The application borrows immutable integration configuration. Every operation runs on its owner thread.
SDL handles are adapter-only identities and must never enter domain or scripting APIs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L13).

## `ConfigureInitialization`

<a id="api-8123efc0bed1296e"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.ConfigureInitialization 8182389d35e935eaf9a224e10c288fe457923bf09ecf945fb72617b7cbb99f9f -->

```csharp
void Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.ConfigureInitialization()
```

Applies host-specific SDK configuration before the application's SDL initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L23).

## `CreateWindow`

<a id="api-e85d298888fe4487"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions) edb3b400c7077c109a9ad15b442a320738747a9b2130a794f0fd13557d01a6f0 -->

```csharp
nint Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L34).

## `GetInitialFocus`

<a id="api-887d0a8cea60a11c"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.GetInitialFocus(System.IntPtr) e9ecaa826893da21cc5de205606514bcfd66d215be24372cc1bd4a7037d7b240 -->

```csharp
bool Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.GetInitialFocus(nint windowHandle)
```

Reads the initial focus policy before platform events begin updating the wrapper.

**Parameter `windowHandle`:** The live SDL window being registered.

**Returns:** Whether game and editor input may initially treat the window as focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L56).

## `ResolveNativeSurface`

<a id="api-21cab46df873824a"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.ResolveNativeSurface(System.IntPtr) 4a679bc4e56d864210fcb57c0e3ce48f265a8b44aa0547ac2189a4a73b65b0a7 -->

```csharp
Inno.Adapter.Platform.PlatformNativeHandles Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.ResolveNativeSurface(nint windowHandle)
```

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L45).

## `capabilities`

<a id="api-1a6414a1a7e4c408"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.capabilities 300f015a40126f4edf4f14ee83c6e58cf9a7614bdba26c626af54f37cc4cf6a7 -->

```csharp
Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration.capabilities { get; }
```

Gets the host's supported window and scheduling behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3HostIntegration.cs#L18).
