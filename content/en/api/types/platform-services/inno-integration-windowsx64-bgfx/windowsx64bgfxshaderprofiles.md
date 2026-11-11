---
title: "WindowsX64BgfxShaderProfiles"
description: "Reference for WindowsX64BgfxShaderProfiles in Inno.Integration.WindowsX64.Bgfx."
uid: api.inno.integration.windowsx64.bgfx.b0b0973a36137cfd
kind: api
owners:
  - Inno.Integration.WindowsX64.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-windowsx64-bgfx
---
# `WindowsX64BgfxShaderProfiles`

This reference describes `WindowsX64BgfxShaderProfiles` in `Inno.Integration.WindowsX64.Bgfx`. Read the [shared contract](../../../projects/inno-integration-windowsx64-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`target`](#api-7bfe14724a9e4969) | Property |

## Type declaration

<a id="api-b0b0973a36137cfd"></a>
<!-- api: T:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxShaderProfiles f024d0a7613105c41f8cc65da5c83b906e582fa7727df01bed5b809326f597b8 -->

```csharp
public static class Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxShaderProfiles
```

Owns explicit Windows shader dialects and offline product capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxShaderProfiles.cs#L11).

## `target`

<a id="api-7bfe14724a9e4969"></a>
<!-- api: P:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxShaderProfiles.target c7fa46944c0fa6f5b49810d7f8bd66e26266b7443bfc2570e663958b6e0cd15c -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxShaderProfiles.target { get; }
```

Gets the immutable configuration shared by this platform's products and publication module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxShaderProfiles.cs#L16).
