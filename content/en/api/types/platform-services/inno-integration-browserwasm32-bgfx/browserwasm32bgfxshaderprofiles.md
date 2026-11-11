---
title: "BrowserWasm32BgfxShaderProfiles"
description: "Reference for BrowserWasm32BgfxShaderProfiles in Inno.Integration.BrowserWasm32.Bgfx."
uid: api.inno.integration.browserwasm32.bgfx.0b5ad18bfc194db8
kind: api
owners:
  - Inno.Integration.BrowserWasm32.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-browserwasm32-bgfx
---
# `BrowserWasm32BgfxShaderProfiles`

This reference describes `BrowserWasm32BgfxShaderProfiles` in `Inno.Integration.BrowserWasm32.Bgfx`. Read the [shared contract](../../../projects/inno-integration-browserwasm32-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`target`](#api-b7fc1a873075a25f) | Property |

## Type declaration

<a id="api-0b5ad18bfc194db8"></a>
<!-- api: T:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxShaderProfiles 54aff2f70b5dd53dd185178e7d21e8bdd2712f27916e505d9a5a5a3dd91640ef -->

```csharp
public static class Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxShaderProfiles
```

Owns explicit Browser shader dialects and offline product capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxShaderProfiles.cs#L11).

## `target`

<a id="api-b7fc1a873075a25f"></a>
<!-- api: P:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxShaderProfiles.target d61ab5f359e5001d1a193ea89e7165bf6762e1ffe6018f5dfb43418224f6e452 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxShaderProfiles.target { get; }
```

Gets the immutable configuration shared by this platform's products and publication module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxShaderProfiles.cs#L16).
