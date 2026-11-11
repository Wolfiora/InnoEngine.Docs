---
title: "BrowserWasm32BgfxIntegration"
description: "Reference for BrowserWasm32BgfxIntegration in Inno.Integration.BrowserWasm32.Bgfx."
uid: api.inno.integration.browserwasm32.bgfx.6430c3d1526ed658
kind: api
owners:
  - Inno.Integration.BrowserWasm32.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-browserwasm32-bgfx
---
# `BrowserWasm32BgfxIntegration`

This reference describes `BrowserWasm32BgfxIntegration` in `Inno.Integration.BrowserWasm32.Bgfx`. Read the [shared contract](../../../projects/inno-integration-browserwasm32-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContentCompilerFactory`](#api-4440a0d9cb1e2784) | Method |
| [`nativeOptions`](#api-2be3237ba41fff96) | Property |
| [`shaderProfile`](#api-24a59c08cc1bff65) | Property |

## Type declaration

<a id="api-6430c3d1526ed658"></a>
<!-- api: T:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration daf32ea98dd5442307fae3654735e7de7e6f51bdbe37b817b090033289c7d78e -->

```csharp
public static class Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration
```

Connects platform publication facts to BGFX compilation without owning a product component list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxIntegration.cs#L13).

## `CreateContentCompilerFactory`

<a id="api-4440a0d9cb1e2784"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) 4e297eaf169e62d2879298bd5a6e6d082e4d74fd8efed35fa49ff8621b2ab2ca -->

```csharp
public static Inno.Build.Composition.GameContentCompilerFactory Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner tools)
```

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Throws `System.ArgumentNullException`:** The selected tools are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxIntegration.cs#L42).

## `nativeOptions`

<a id="api-2be3237ba41fff96"></a>
<!-- api: P:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.nativeOptions bb7d47cb835a34bb93eda8b82228c50d47a04a8274aa6b8c6adc8bcdb3cae2dc -->

```csharp
public static Inno.Build.Toolchains.NativeComponentBuildOptions Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.nativeOptions { get; }
```

Gets WebGL 2 configuration and Emscripten header mappings for the shared static recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxIntegration.cs#L18).

## `shaderProfile`

<a id="api-24a59c08cc1bff65"></a>
<!-- api: P:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.shaderProfile eda3d14262f37da64038a8744f494713be8b0475c5df08c0b37c5ce91d0c1c53 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.shaderProfile { get; }
```

Gets the explicit shader configuration used by this integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Bgfx/BrowserWasm32BgfxIntegration.cs#L28).
