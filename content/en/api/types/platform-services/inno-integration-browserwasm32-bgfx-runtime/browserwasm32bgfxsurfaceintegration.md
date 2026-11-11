---
title: "BrowserWasm32BgfxSurfaceIntegration"
description: "Reference for BrowserWasm32BgfxSurfaceIntegration in Inno.Integration.BrowserWasm32.Bgfx.Runtime."
uid: api.inno.integration.browserwasm32.bgfx.runtime.522d601b62b517c5
kind: api
owners:
  - Inno.Integration.BrowserWasm32.Bgfx.Runtime
apiSurface: source-clr
contracts:
  - project.inno-integration-browserwasm32-bgfx-runtime
---
# `BrowserWasm32BgfxSurfaceIntegration`

This reference describes `BrowserWasm32BgfxSurfaceIntegration` in `Inno.Integration.BrowserWasm32.Bgfx.Runtime`. Read the [shared contract](../../../projects/inno-integration-browserwasm32-bgfx-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f2feb73a3d5d549c) | Method |
| [`Resolve`](#api-267b57b91b7e0dae) | Method |
| [`supportsAdditionalSurfaces`](#api-44c3ee4179da8b4a) | Property |

## Type declaration

<a id="api-522d601b62b517c5"></a>
<!-- api: T:Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration 300a1077561de1918a6472e34cf38bd0cbfc4142d3bf2c4d8307f3ca8748fa99 -->

```csharp
public sealed class Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration : Inno.Adapter.Rendering.Bgfx.IBgfxSurfaceIntegration
```

Connects the Browser surface ABI to BGFX without exposing native BGFX types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx.Runtime/BrowserWasm32BgfxSurfaceIntegration.cs#L10).

## `#ctor`

<a id="api-f2feb73a3d5d549c"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.#ctor 1322b89ab21c18988493ff043fc750b4a1431c05692e9acd291eb5058381e50b -->

```csharp
public Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.BrowserWasm32BgfxSurfaceIntegration()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx.Runtime/BrowserWasm32BgfxSurfaceIntegration.cs#L10).

## `Resolve`

<a id="api-267b57b91b7e0dae"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole) 039492e575e46847f6d0bd1e5f9cadcbfa5edfded11414283b54734587bd5106 -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxSurfaceDescriptor Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles handles, Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole role)
```

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Throws `System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Throws `System.ArgumentException`:** The requested role or native window handle is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx.Runtime/BrowserWasm32BgfxSurfaceIntegration.cs#L35).

## `supportsAdditionalSurfaces`

<a id="api-44c3ee4179da8b4a"></a>
<!-- api: P:Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.supportsAdditionalSurfaces 01e851fd1c010d8ea089000fb2c04ae254b49199d864c1cafecb1153c12d9ff1 -->

```csharp
public bool Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.supportsAdditionalSurfaces { get; }
```

Gets whether this system integration permits additional window surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx.Runtime/BrowserWasm32BgfxSurfaceIntegration.cs#L15).
