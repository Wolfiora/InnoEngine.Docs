---
title: "WindowsX64BgfxIntegration"
description: "Reference for WindowsX64BgfxIntegration in Inno.Integration.WindowsX64.Bgfx."
uid: api.inno.integration.windowsx64.bgfx.dc04e103f2194d15
kind: api
owners:
  - Inno.Integration.WindowsX64.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-windowsx64-bgfx
---
# `WindowsX64BgfxIntegration`

This reference describes `WindowsX64BgfxIntegration` in `Inno.Integration.WindowsX64.Bgfx`. Read the [shared contract](../../../projects/inno-integration-windowsx64-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContentCompilerFactory`](#api-a501c4524913f10d) | Method |
| [`nativeProfile`](#api-91f68cd1d422ca22) | Property |
| [`shaderProfile`](#api-2715254c1343aa91) | Property |

## Type declaration

<a id="api-dc04e103f2194d15"></a>
<!-- api: T:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration 0c6d5cf56b8d9f66c12e8ddabca8f9ca18d0130a767ab69ce54ea6b5cd8211b0 -->

```csharp
public static class Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration
```

Connects platform publication facts to BGFX compilation without owning a product component list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxIntegration.cs#L12).

## `CreateContentCompilerFactory`

<a id="api-a501c4524913f10d"></a>
<!-- api: M:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) b2b4aaec4fc8b0db44821344400817cd0ee1b7857ab3502484f349d490b467bd -->

```csharp
public static Inno.Build.Composition.GameContentCompilerFactory Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner tools)
```

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Throws `System.ArgumentNullException`:** The selected tools are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxIntegration.cs#L36).

## `nativeProfile`

<a id="api-91f68cd1d422ca22"></a>
<!-- api: P:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.nativeProfile a8a714e7102f091a3f7288be96639e479b7327142118082f17c7d1bb7cf41a17 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.nativeProfile { get; }
```

Gets the immutable SDK invocation for this platform and backend pairing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxIntegration.cs#L17).

## `shaderProfile`

<a id="api-2715254c1343aa91"></a>
<!-- api: P:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.shaderProfile 6bda475928e60bd085f197795f596511d99e6486c3dcd58ff811f822f92140c1 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.shaderProfile { get; }
```

Gets the explicit shader configuration used by this integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Bgfx/WindowsX64BgfxIntegration.cs#L22).
