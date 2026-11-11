---
title: "IBgfxSurfaceIntegration"
description: "Reference for IBgfxSurfaceIntegration in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.311009687970aade
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `IBgfxSurfaceIntegration`

This reference describes `IBgfxSurfaceIntegration` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Resolve`](#api-880327ab6677f614) | Method |
| [`supportsAdditionalSurfaces`](#api-1ead9a59f11409b5) | Property |

## Type declaration

<a id="api-311009687970aade"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration a37a301ff683e9a5397da6c8baf3f0ce6d2f6dc0e7026bc217e28bcf101fb574 -->

```csharp
public interface Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration
```

Resolves an explicitly selected host's borrowed surface handles for the shared BGFX backend.

**Constraints:** The device borrows this immutable integration. Resolution runs once per surface on its owner thread,
before acquiring native ownership. Neither the integration nor the device owns the native window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L27).

## `Resolve`

<a id="api-880327ab6677f614"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole) 5c8712a2a1912690ef82d8f0fc615bee1d5810a11e18126fe31c482714a034b5 -->

```csharp
Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles handles, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole role)
```

Validates a host ABI and freezes the handle values needed by the requested surface role.

**Parameter `handles`:** The borrowed window and optional display, kept alive by their original owner until retirement.

**Parameter `role`:** The primary or additional use requested by the backend.

**Returns:** A valid immutable borrowing description; unsupported ABIs or roles must fail explicitly.

**Throws `System.ArgumentException`:** A handle or role is invalid.

**Throws `System.NotSupportedException`:** The host cannot connect the supplied ABI or requested role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L52).

## `supportsAdditionalSurfaces`

<a id="api-1ead9a59f11409b5"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration.supportsAdditionalSurfaces 842501b0baa1b48051e3db004b20e31683d2dfc12b306ab817b0c5c06d5ec911 -->

```csharp
bool Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration.supportsAdditionalSurfaces { get; }
```

Gets whether this host permits additional surfaces, subject to the device's SwapChain capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L32).
