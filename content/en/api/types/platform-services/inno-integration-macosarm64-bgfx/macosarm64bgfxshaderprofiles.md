---
title: "MacOSArm64BgfxShaderProfiles"
description: "Reference for MacOSArm64BgfxShaderProfiles in Inno.Integration.MacOSArm64.Bgfx."
uid: api.inno.integration.macosarm64.bgfx.11b5d520d66b1a8d
kind: api
owners:
  - Inno.Integration.MacOSArm64.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-macosarm64-bgfx
---
# `MacOSArm64BgfxShaderProfiles`

This reference describes `MacOSArm64BgfxShaderProfiles` in `Inno.Integration.MacOSArm64.Bgfx`. Read the [shared contract](../../../projects/inno-integration-macosarm64-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`target`](#api-49600e8ccb19db32) | Property |

## Type declaration

<a id="api-11b5d520d66b1a8d"></a>
<!-- api: T:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxShaderProfiles a0eaf42d2aea94c3408fbca8f8bb5a92472c37cbb044166835d67e786ae7f8c3 -->

```csharp
public static class Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxShaderProfiles
```

Owns explicit MacOS shader dialects and offline product capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxShaderProfiles.cs#L11).

## `target`

<a id="api-49600e8ccb19db32"></a>
<!-- api: P:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxShaderProfiles.target db68ac750e87b172915e1c13f3b820bee25d8c1e9da8c18a7f3c5c145f94bbce -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxShaderProfiles.target { get; }
```

Gets the immutable configuration shared by this platform's products and publication module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxShaderProfiles.cs#L16).
