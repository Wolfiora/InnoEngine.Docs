---
title: "MacOSArm64BgfxIntegration"
description: "Reference for MacOSArm64BgfxIntegration in Inno.Integration.MacOSArm64.Bgfx."
uid: api.inno.integration.macosarm64.bgfx.a0e70a0c1bf3f22d
kind: api
owners:
  - Inno.Integration.MacOSArm64.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-integration-macosarm64-bgfx
---
# `MacOSArm64BgfxIntegration`

This reference describes `MacOSArm64BgfxIntegration` in `Inno.Integration.MacOSArm64.Bgfx`. Read the [shared contract](../../../projects/inno-integration-macosarm64-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateContentCompilerFactory`](#api-37ffa4109e010cba) | Method |
| [`nativeProfile`](#api-a22043b5d6d16904) | Property |
| [`shaderProfile`](#api-0bae63c267655a92) | Property |

## Type declaration

<a id="api-a0e70a0c1bf3f22d"></a>
<!-- api: T:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration e475fee56fb65375d2bbb492d8f994ca0f36e8e41947c3a5712631bd17aecfb7 -->

```csharp
public static class Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration
```

Connects platform publication facts to BGFX compilation without owning a product component list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxIntegration.cs#L12).

## `CreateContentCompilerFactory`

<a id="api-37ffa4109e010cba"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) 82e75c5778f15ce256287e6b2789d8de98794b25c000bb83f050b0c054167616 -->

```csharp
public static Inno.Build.Composition.GameContentCompilerFactory Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner tools)
```

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Throws `System.ArgumentNullException`:** The selected tools are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxIntegration.cs#L36).

## `nativeProfile`

<a id="api-a22043b5d6d16904"></a>
<!-- api: P:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.nativeProfile 4f0135a7b0b7535a906ddad2872e8c633c39317a9030cf01b5026231ea737279 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.nativeProfile { get; }
```

Gets the immutable SDK invocation for this platform and backend pairing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxIntegration.cs#L17).

## `shaderProfile`

<a id="api-0bae63c267655a92"></a>
<!-- api: P:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.shaderProfile 854026f5e16d4dbfb5d9493c4b0c7d2c9d7e69e4083628b86ed32ba23a869399 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.shaderProfile { get; }
```

Gets the explicit shader configuration used by this integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/MacOSArm64BgfxIntegration.cs#L22).
