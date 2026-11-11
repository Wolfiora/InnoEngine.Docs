---
title: "WindowsX64Sdl3HostIntegration"
description: "Reference for WindowsX64Sdl3HostIntegration in Inno.Integration.WindowsX64.Sdl3."
uid: api.inno.integration.windowsx64.sdl3.ab43dd7b893be83e
kind: api
owners:
  - Inno.Integration.WindowsX64.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-integration-windowsx64-sdl3
---
# `WindowsX64Sdl3HostIntegration`

This reference describes `WindowsX64Sdl3HostIntegration` in `Inno.Integration.WindowsX64.Sdl3`. Read the [shared contract](../../../projects/inno-integration-windowsx64-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dcf8337d686e6faa) | Method |
| [`ConfigureInitialization`](#api-c2262af29453ae56) | Method |
| [`CreateWindow`](#api-500658734a7b84ae) | Method |
| [`GetInitialFocus`](#api-a7ea89f2699d0dbb) | Method |
| [`ResolveNativeSurface`](#api-f39142267b6c3dd3) | Method |
| [`capabilities`](#api-a9ddf27c1a6349ca) | Property |

## Type declaration

<a id="api-ab43dd7b893be83e"></a>
<!-- api: T:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration 35716570ab0d3037a8bd940571c3cdb2aafc916540a07185c85cd51f667ceec7 -->

```csharp
public sealed class Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration : Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration
```

Provides the Windows SDK, native surface and focus policies for the shared SDL backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L12).

## `#ctor`

<a id="api-dcf8337d686e6faa"></a>
<!-- api: M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.#ctor ab41281d316a2f8a223f2f6cce6035652f34e276c00b7af9fba6234b4fc6061a -->

```csharp
public Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.WindowsX64Sdl3HostIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L12).

## `ConfigureInitialization`

<a id="api-c2262af29453ae56"></a>
<!-- api: M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.ConfigureInitialization 835d373b9d1d05c223b0c88b294e883a2d37b8de845f472740880c7472765224 -->

```csharp
public void Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.ConfigureInitialization()
```

Applies host-specific SDK configuration before the application's SDL initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L18).

## `CreateWindow`

<a id="api-500658734a7b84ae"></a>
<!-- api: M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions) fad052b976a014c68a1e657a406b3e75ee547519d7fcd9b7fb38a12eabc78a7d -->

```csharp
public nint Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L23).

## `GetInitialFocus`

<a id="api-a7ea89f2699d0dbb"></a>
<!-- api: M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.GetInitialFocus(System.IntPtr) 8e5263027f28501777afc05cdaa9986408602f9100c3daa8b22023b6cb83969c -->

```csharp
public bool Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.GetInitialFocus(nint windowHandle)
```

Reads the initial focus policy before platform events begin updating the wrapper.

**Parameter `windowHandle`:** The live SDL window being registered.

**Returns:** Whether game and editor input may initially treat the window as focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L44).

## `ResolveNativeSurface`

<a id="api-f39142267b6c3dd3"></a>
<!-- api: M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr) 7c9d93951667c3330095eec030d54571a3e17de411a1f75ca8990e7b61159f78 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.ResolveNativeSurface(nint windowHandle)
```

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L29).

## `capabilities`

<a id="api-a9ddf27c1a6349ca"></a>
<!-- api: P:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.capabilities 2d7c800f455c446730af79a005e74fafcba7c5cdd2eae8c03bd77032623f2690 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.capabilities { get; }
```

Gets the host's supported window and scheduling behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Sdl3/WindowsX64Sdl3HostIntegration.cs#L15).
