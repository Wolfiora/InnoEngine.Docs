---
title: "BgfxRenderingBackendProvider"
description: "Reference for BgfxRenderingBackendProvider in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.b9e40a937fb56937
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxRenderingBackendProvider`

This reference describes `BgfxRenderingBackendProvider` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Rendering.RenderingBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-adaeede87f7b70b2) | Method |
| [`CreateCompositionProgramProvider`](#api-10ad1bb650b043fb) | Method |
| [`CreateDevice`](#api-44d333250479c564) | Method |

## Type declaration

<a id="api-b9e40a937fb56937"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider 8ab535dca9a83e145848d9d8404f3479f931dc190d95fcecfcbf9d1674d6786c -->

```csharp
public sealed class Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider : Inno.Adapter.Rendering.RenderingBackendProvider
```

Supplies BGFX rendering devices and compatible layer composition programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxRenderingBackendProvider.cs#L9).

## `#ctor`

<a id="api-adaeede87f7b70b2"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.#ctor(Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration) 16f34cae284b2fc737114672c421105ca08d18b2228592dc3da99a0364b3fdbb -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.BgfxRenderingBackendProvider(Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration surfaceIntegration)
```

Registers BGFX with an explicitly selected, borrowed host surface integration.

**Parameter `surfaceIntegration`:** Immutable host configuration shared by devices created from this provider.

**Throws `System.ArgumentNullException`:** The integration is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxRenderingBackendProvider.cs#L22).

## `CreateCompositionProgramProvider`

<a id="api-10ad1bb650b043fb"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.CreateCompositionProgramProvider 51d70af6ec2a1b93c8d68293c60ae2b99e2c8995fbf41712da51e2fe72c6276f -->

```csharp
public override Inno.Rendering.IRenderLayerCompositionProgramProvider Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.CreateCompositionProgramProvider()
```

Creates the backend-owned program provider used when the host composites render layers.

**Returns:** A provider compatible with devices created by this rendering implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxRenderingBackendProvider.cs#L44).

## `CreateDevice`

<a id="api-44d333250479c564"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.CreateDevice(Inno.Adapter.Rendering.RenderingBackendOptions) fc87fc8cae50816c74aa829a4cbced6317f194f834c647f50c7a513331e1fe1c -->

```csharp
public override Inno.Rendering.IRenderDevice Inno.Adapter.Rendering.Bgfx.BgfxRenderingBackendProvider.CreateDevice(Inno.Adapter.Rendering.RenderingBackendOptions options)
```

Creates a caller-owned device using backend-neutral surface options.

**Parameter `options`:** Validated surface and device creation options.

**Returns:** A new device owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxRenderingBackendProvider.cs#L29).
