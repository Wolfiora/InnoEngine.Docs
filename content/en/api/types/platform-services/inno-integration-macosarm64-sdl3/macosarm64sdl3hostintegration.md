---
title: "MacOSArm64Sdl3HostIntegration"
description: "Reference for MacOSArm64Sdl3HostIntegration in Inno.Integration.MacOSArm64.Sdl3."
uid: api.inno.integration.macosarm64.sdl3.ff09f5668d7cd384
kind: api
owners:
  - Inno.Integration.MacOSArm64.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-integration-macosarm64-sdl3
---
# `MacOSArm64Sdl3HostIntegration`

This reference describes `MacOSArm64Sdl3HostIntegration` in `Inno.Integration.MacOSArm64.Sdl3`. Read the [shared contract](../../../projects/inno-integration-macosarm64-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2469e37f832f9185) | Method |
| [`ConfigureInitialization`](#api-cf1f8b01c7eb1585) | Method |
| [`CreateWindow`](#api-58b48f8baf9befb1) | Method |
| [`GetInitialFocus`](#api-330ee71004f9c187) | Method |
| [`ResolveNativeSurface`](#api-08fd9fc5558a49f4) | Method |
| [`capabilities`](#api-6ee6ad3c48275041) | Property |

## Type declaration

<a id="api-ff09f5668d7cd384"></a>
<!-- api: T:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration 73d51ac5d332e366d2753920f4c72023d7c2379b53faa2a6a64a1629e70116c5 -->

```csharp
public sealed class Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration : Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration
```

Provides the MacOS SDK, native surface and focus policies for the shared SDL backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L12).

## `#ctor`

<a id="api-2469e37f832f9185"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.#ctor 4e7273bb972ed7a227766502ff49f9082494750dc495c64ce764df9b678d2071 -->

```csharp
public Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.MacOSArm64Sdl3HostIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L12).

## `ConfigureInitialization`

<a id="api-cf1f8b01c7eb1585"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.ConfigureInitialization 393fe2ecdd6e78f4141f40c99505a2c16ca5d82b297abe9427ffa2787b802b69 -->

```csharp
public void Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.ConfigureInitialization()
```

Applies host-specific SDK configuration before the application's SDL initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L18).

## `CreateWindow`

<a id="api-58b48f8baf9befb1"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions) f5f206862797df7268523cf0bfcc8d01d13a677c2df168683e33b460ef4660f5 -->

```csharp
public nint Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L24).

## `GetInitialFocus`

<a id="api-330ee71004f9c187"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.GetInitialFocus(System.IntPtr) 0a0739116ed2760d070a5b044a62b8974e8aea5115d4a517d7a86ffb6ae52ae5 -->

```csharp
public bool Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.GetInitialFocus(nint windowHandle)
```

Reads the initial focus policy before platform events begin updating the wrapper.

**Parameter `windowHandle`:** The live SDL window being registered.

**Returns:** Whether game and editor input may initially treat the window as focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L45).

## `ResolveNativeSurface`

<a id="api-08fd9fc5558a49f4"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr) ee9d2acfc4aaf373caff2bc0e367eae3e8a3cc6d6fbb6775d765daaf29cc5131 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.ResolveNativeSurface(nint windowHandle)
```

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L30).

## `capabilities`

<a id="api-6ee6ad3c48275041"></a>
<!-- api: P:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.capabilities 7423036e93ad1b56660c5c1a1a9b3e8e887122908a66b8c076921d074f259a76 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.capabilities { get; }
```

Gets the host's supported window and scheduling behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Sdl3/MacOSArm64Sdl3HostIntegration.cs#L15).
