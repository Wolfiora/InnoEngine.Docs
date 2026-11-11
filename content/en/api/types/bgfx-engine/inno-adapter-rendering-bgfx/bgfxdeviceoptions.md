---
title: "BgfxDeviceOptions"
description: "Reference for BgfxDeviceOptions in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.d6b4064888ba48be
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxDeviceOptions`

This reference describes `BgfxDeviceOptions` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9dc4d08832ea55af) | Method |
| [`backbufferHeight`](#api-e1616ec58bbc93c7) | Property |
| [`backbufferWidth`](#api-bca93c2cac04fc00) | Property |
| [`deferredDestroyFrames`](#api-1cd3d02a824bf8ac) | Property |
| [`forceSingleThreaded`](#api-85d66c77bd588097) | Property |
| [`preferredBackend`](#api-5e0f54f7140d0cbe) | Property |
| [`sRgbBackbuffer`](#api-155b33f7324f8872) | Property |
| [`surfaceIntegration`](#api-d86b16d21b7d6e47) | Property |
| [`verticalSync`](#api-2ecdf4508fb08702) | Property |
| [`window`](#api-417f42d6d68d26fe) | Property |

## Type declaration

<a id="api-d6b4064888ba48be"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions c622e70578b976a1fe120ead12e302358d76654c60340164e70071d805140a86 -->

```csharp
public sealed class Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions
```

Configures BGFX initialization without exposing native BGFX structures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L10).

## `#ctor`

<a id="api-9dc4d08832ea55af"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.#ctor 2c108a58dd4c9ed4aa5f83ffde1e2f1a39c5f50b2ae0bc2978ab9a61e8e6ddfc -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.BgfxDeviceOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L10).

## `backbufferHeight`

<a id="api-e1616ec58bbc93c7"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.backbufferHeight 3ef27be3e711c654b01d10fd4461ab3559e508228c77b9a50fb26a5583b1db4e -->

```csharp
public int Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.backbufferHeight { get; set; }
```

Gets or sets the initial backbuffer height in physical pixels when no window supplies one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L46).

## `backbufferWidth`

<a id="api-bca93c2cac04fc00"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.backbufferWidth 93095b9fe0364e45e723a0ac5a4c0cc26c9c294a3ef8d5f426abd0f618b1f6de -->

```csharp
public int Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.backbufferWidth { get; set; }
```

Gets or sets the initial backbuffer width in physical pixels when no window supplies one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L35).

## `deferredDestroyFrames`

<a id="api-1cd3d02a824bf8ac"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.deferredDestroyFrames cdafa6cc814f0e9b99783280452a8da88f8d9b51acd645d5a6ab42398f4e303e -->

```csharp
public int Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.deferredDestroyFrames { get; set; }
```

Gets or sets the number of submitted frames before queued native destruction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L76).

## `forceSingleThreaded`

<a id="api-85d66c77bd588097"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.forceSingleThreaded d9f2940e0f7b859f3fd557b469f593659297b5bcdf9f32e790ed629f8cbe0cb1 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.forceSingleThreaded { get; set; }
```

Gets or sets whether BGFX rendering is driven inline on the API thread.

**Constraints:** This is intended for Noop tests and hosts that cannot provide a dedicated
BGFX render thread. Production windowed hosts normally leave it disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L71).

## `preferredBackend`

<a id="api-5e0f54f7140d0cbe"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.preferredBackend 79ffd50408bc9609714d87173b8aecf48a96e067b1339c5d27e4eb4838077435 -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.preferredBackend { get; set; }
```

Gets or sets the preferred renderer, or `null` for platform default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L19).

## `sRgbBackbuffer`

<a id="api-155b33f7324f8872"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.sRgbBackbuffer 13b88974a84369ee965b68597b1bf648980b6500fd1d03fd1ec602bbe7759b0f -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.sRgbBackbuffer { get; set; }
```

Gets or sets whether the main backbuffer performs sRGB encoding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L62).

## `surfaceIntegration`

<a id="api-d86b16d21b7d6e47"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.surfaceIntegration db14a41bd14310f8f3ae3b946d58a8037c46e8d06857b06474496e805739da3e -->

```csharp
public Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration? Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.surfaceIntegration { get; set; }
```

Gets or sets the borrowed immutable surface integration, required for a windowed device.
A windowless device may omit it and cannot create additional windows without one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L30).

## `verticalSync`

<a id="api-2ecdf4508fb08702"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.verticalSync edbc43a89b5ee9160b5ecbe0cb33a72eefea8d09fe3085d0239da19c3f388a86 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.verticalSync { get; set; }
```

Gets or sets whether submission waits for display synchronization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L57).

## `window`

<a id="api-417f42d6d68d26fe"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.window 3ae1ba401a16fd8dd3ad312d5f607527edf9f0298927ef09e92382215aa4164a -->

```csharp
public Inno.Platform.IPlatformWindow? Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions.window { get; set; }
```

Gets or sets the platform window used as the main swapchain surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDeviceOptions.cs#L24).
