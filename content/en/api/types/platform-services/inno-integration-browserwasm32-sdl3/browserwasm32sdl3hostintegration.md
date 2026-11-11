---
title: "BrowserWasm32Sdl3HostIntegration"
description: "Reference for BrowserWasm32Sdl3HostIntegration in Inno.Integration.BrowserWasm32.Sdl3."
uid: api.inno.integration.browserwasm32.sdl3.c4a117d6695989f1
kind: api
owners:
  - Inno.Integration.BrowserWasm32.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-integration-browserwasm32-sdl3
---
# `BrowserWasm32Sdl3HostIntegration`

This reference describes `BrowserWasm32Sdl3HostIntegration` in `Inno.Integration.BrowserWasm32.Sdl3`. Read the [shared contract](../../../projects/inno-integration-browserwasm32-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4222ff9774c7d71e) | Method |
| [`ConfigureInitialization`](#api-e5aba1ed2a4fb21c) | Method |
| [`CreateWindow`](#api-28fe337b4b5a258f) | Method |
| [`GetInitialFocus`](#api-69c75e6039feadc0) | Method |
| [`ResolveNativeSurface`](#api-7c70cbbf50f58b3e) | Method |
| [`capabilities`](#api-5976186a68fb11ce) | Property |

## Type declaration

<a id="api-c4a117d6695989f1"></a>
<!-- api: T:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration 1abca6e36003d13751487cde6f86b2e430131e1f3117184e9fd4d8fc6ed0bcd9 -->

```csharp
public sealed class Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration : Inno.Adapter.Platform.Sdl3.ISdl3HostIntegration
```

Provides the Browser SDK, native surface and focus policies for the shared SDL backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L12).

## `#ctor`

<a id="api-4222ff9774c7d71e"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.#ctor b2275854b8ac5b1bda5561c06fc93ba06ee5779f1ef7592363c01bca1b6f0223 -->

```csharp
public Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.BrowserWasm32Sdl3HostIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L12).

## `ConfigureInitialization`

<a id="api-e5aba1ed2a4fb21c"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.ConfigureInitialization ec68d08d2152b27710f922fab4b5041d2e4bd4d6182acf84f6030370e821f4ff -->

```csharp
public void Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.ConfigureInitialization()
```

Applies host-specific SDK configuration before the application's SDL initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L18).

## `CreateWindow`

<a id="api-28fe337b4b5a258f"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions) 2379a885c122e7773f3c8655dbda22ec22b6e6123ce042e3504beb71bce10e71 -->

```csharp
public nint Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L23).

## `GetInitialFocus`

<a id="api-69c75e6039feadc0"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.GetInitialFocus(System.IntPtr) be4cde1c571be8fbd5a9e3f7bf36bad3bea06d4e1e549b48e1df6b3b27e9218c -->

```csharp
public bool Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.GetInitialFocus(nint windowHandle)
```

Reads the initial focus policy before platform events begin updating the wrapper.

**Parameter `windowHandle`:** The live SDL window being registered.

**Returns:** Whether game and editor input may initially treat the window as focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L45).

## `ResolveNativeSurface`

<a id="api-7c70cbbf50f58b3e"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr) 0317b9cf36d987817dc85e78b2bdd134fcbc245a4b3f84213cafbbc7a27e5b41 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.ResolveNativeSurface(nint windowHandle)
```

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L29).

## `capabilities`

<a id="api-5976186a68fb11ce"></a>
<!-- api: P:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.capabilities 6540822868155d41dfa9f0b5d72b59110334bec77427d966685a8949e99f4414 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.capabilities { get; }
```

Gets the host's supported window and scheduling behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Sdl3/BrowserWasm32Sdl3HostIntegration.cs#L15).
