---
title: "BgfxTargetCapabilities"
description: "Reference for BgfxTargetCapabilities in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.afc2a00b87a341e8
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxTargetCapabilities`

This reference describes `BgfxTargetCapabilities` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-927405ea67d88a2d) | Method |

## Type declaration

<a id="api-afc2a00b87a341e8"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxTargetCapabilities 9bb6198c63f9533b7a5b38c60fbb96e9ab4b4cbcf7bc154752dc019cb3932ede -->

```csharp
public static class Inno.Build.Toolchains.Bgfx.Tools.BgfxTargetCapabilities
```

Supplies one consistent offline capability profile to all BGFX target compilers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxTargetCapabilities.cs#L10).

## `Create`

<a id="api-927405ea67d88a2d"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxTargetCapabilities.Create(Inno.Rendering.GraphicsApi) ca6f81d35c3fbca80bb341263f7861d7b5e0b7237d8946c62abc51b4bc67243f -->

```csharp
public static Inno.Rendering.GraphicsCapabilities Inno.Build.Toolchains.Bgfx.Tools.BgfxTargetCapabilities.Create(Inno.Rendering.GraphicsApi backend)
```

Creates the limits and format set used to validate one target's shader output.

**Parameter `backend`:** The renderer whose shader dialect is being compiled.

**Returns:** The immutable offline validation profile for the selected target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxTargetCapabilities.cs#L21).
