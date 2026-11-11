---
title: "MacOSArm64BgfxSurfaceIntegration"
description: "Reference for MacOSArm64BgfxSurfaceIntegration in Inno.Integration.MacOSArm64.Bgfx.Runtime."
uid: api.inno.integration.macosarm64.bgfx.runtime.edcf9b9be5189c67
kind: api
owners:
  - Inno.Integration.MacOSArm64.Bgfx.Runtime
apiSurface: source-clr
contracts:
  - project.inno-integration-macosarm64-bgfx-runtime
---
# `MacOSArm64BgfxSurfaceIntegration`

This reference describes `MacOSArm64BgfxSurfaceIntegration` in `Inno.Integration.MacOSArm64.Bgfx.Runtime`. Read the [shared contract](../../../projects/inno-integration-macosarm64-bgfx-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8adfaf6b10a29997) | Method |
| [`Resolve`](#api-05b85a82054130ea) | Method |
| [`supportsAdditionalSurfaces`](#api-75bf733eb41a5fb4) | Property |

## Type declaration

<a id="api-edcf9b9be5189c67"></a>
<!-- api: T:Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration b897d5aeb73104771132dda14cbcbd9c67c363eb7ce72bfab3bd9d8f49f43124 -->

```csharp
public sealed class Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration : Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration
```

Connects the MacOS surface ABI to BGFX without exposing native BGFX types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx.Runtime/MacOSArm64BgfxSurfaceIntegration.cs#L10).

## `#ctor`

<a id="api-8adfaf6b10a29997"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.#ctor 94207d16afef35c2793f23b3726dc3dccee11c54ba2e8f8e3445238c0c3705b6 -->

```csharp
public Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.MacOSArm64BgfxSurfaceIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx.Runtime/MacOSArm64BgfxSurfaceIntegration.cs#L10).

## `Resolve`

<a id="api-05b85a82054130ea"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole) f98170765bb12d4b1e76968ab8b248b8eb382f82f91000927897932ce215490d -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles handles, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole role)
```

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Throws `System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Throws `System.ArgumentException`:** The requested role or native window handle is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx.Runtime/MacOSArm64BgfxSurfaceIntegration.cs#L35).

## `supportsAdditionalSurfaces`

<a id="api-75bf733eb41a5fb4"></a>
<!-- api: P:Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.supportsAdditionalSurfaces 562140c37b6b198ae6f0f781e86a8074e48119a96fb345b10999816c7df2101b -->

```csharp
public bool Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.supportsAdditionalSurfaces { get; }
```

Gets whether this system integration permits additional window surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx.Runtime/MacOSArm64BgfxSurfaceIntegration.cs#L15).
