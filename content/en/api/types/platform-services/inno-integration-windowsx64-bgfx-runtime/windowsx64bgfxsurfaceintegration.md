---
title: "WindowsX64BgfxSurfaceIntegration"
description: "Reference for WindowsX64BgfxSurfaceIntegration in Inno.Integration.WindowsX64.Bgfx.Runtime."
uid: api.inno.integration.windowsx64.bgfx.runtime.52ef7479dc522194
kind: api
owners:
  - Inno.Integration.WindowsX64.Bgfx.Runtime
apiSurface: source-clr
contracts:
  - project.inno-integration-windowsx64-bgfx-runtime
---
# `WindowsX64BgfxSurfaceIntegration`

This reference describes `WindowsX64BgfxSurfaceIntegration` in `Inno.Integration.WindowsX64.Bgfx.Runtime`. Read the [shared contract](../../../projects/inno-integration-windowsx64-bgfx-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b8f624356a57ca83) | Method |
| [`Resolve`](#api-153e5710f81bbb69) | Method |
| [`supportsAdditionalSurfaces`](#api-9ee6f654ee11b4c1) | Property |

## Type declaration

<a id="api-52ef7479dc522194"></a>
<!-- api: T:Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration bf65d57cfdb8408594f979cdb52b028aaf35cd5378abfde964a551703a2bc84d -->

```csharp
public sealed class Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration : Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration
```

Connects the Windows surface ABI to BGFX without exposing native BGFX types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx.Runtime/WindowsX64BgfxSurfaceIntegration.cs#L10).

## `#ctor`

<a id="api-b8f624356a57ca83"></a>
<!-- api: M:Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.#ctor 9dbca1c0d944514b8a77bf96e86a4135929be0f0c6e662d1869753852b8e1f21 -->

```csharp
public Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.WindowsX64BgfxSurfaceIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx.Runtime/WindowsX64BgfxSurfaceIntegration.cs#L10).

## `Resolve`

<a id="api-153e5710f81bbb69"></a>
<!-- api: M:Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole) 777cc8f0b551945187b48f802bfa1c66fa3ad7da75b34e8c6636e3d2e8787a0e -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles handles, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole role)
```

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Throws `System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Throws `System.ArgumentException`:** The requested role or native window handle is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx.Runtime/WindowsX64BgfxSurfaceIntegration.cs#L35).

## `supportsAdditionalSurfaces`

<a id="api-9ee6f654ee11b4c1"></a>
<!-- api: P:Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.supportsAdditionalSurfaces 07aca03858ac38be8c717c7249b68863ae72454428e0e7d6ffb80a588f982b97 -->

```csharp
public bool Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.supportsAdditionalSurfaces { get; }
```

Gets whether this system integration permits additional window surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx.Runtime/WindowsX64BgfxSurfaceIntegration.cs#L15).
