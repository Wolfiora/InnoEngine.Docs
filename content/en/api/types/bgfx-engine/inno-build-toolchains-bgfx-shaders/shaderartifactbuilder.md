---
title: "ShaderArtifactBuilder"
description: "Reference for ShaderArtifactBuilder in Inno.Build.Toolchains.Bgfx.Shaders."
uid: api.inno.build.toolchains.bgfx.shaders.3deca2c9bb611ecf
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Shaders
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-shaders
---
# `ShaderArtifactBuilder`

This reference describes `ShaderArtifactBuilder` in `Inno.Build.Toolchains.Bgfx.Shaders`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Compile`](#api-cfe60052dff10b65) | Method |
| [`CompileGraphicsProgram`](#api-e8abbeb67847dfa7) | Method |

## Type declaration

<a id="api-3deca2c9bb611ecf"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder a5d8b19a7c506ad4ab9ad6bf346c6015e26169f35209da55cd23c68795e705de -->

```csharp
public static class Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder
```

Compiles authored shader graphs through the standard import, IR and artifact pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderArtifactBuilder.cs#L26).

## `Compile`

<a id="api-cfe60052dff10b65"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder.Compile(Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs,Inno.Core.IO.ProcessOwnedDirectory,System.String,Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile,Inno.Rendering.GraphicsApi,System.String,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner,System.Threading.CancellationToken) 3787bb36a2eb2002beff7ef87ce91292c4f4e45754d2acf573210a5a647e559c -->

```csharp
public static void Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder.Compile(Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs inputs, Inno.Core.IO.ProcessOwnedDirectory workspace, string shaderPath, Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile platform, Inno.Rendering.GraphicsApi backend, string outputFile, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Imports and compiles one shader graph for an explicitly selected graphics target.

**Parameter `inputs`:** The operation's fixed source and permanent import-setting identity, copied before import.

**Parameter `workspace`:** A fresh caller-owned operation directory retained until compilation returns. The caller releases it after all consumers finish.

**Parameter `shaderPath`:** The source-local shader graph path.

**Parameter `platform`:** The native compiler's target platform.

**Parameter `backend`:** The graphics API for the compiled artifact.

**Parameter `outputFile`:** The artifact destination, replaced atomically after successful compilation.

**Throws `System.IO.InvalidDataException`:** Import or shader compilation fails.

**Throws `System.ArgumentException`:** A required shader path or output path is blank.

**Throws `System.ArgumentNullException`:** The fixed input identity or workspace is null.

**Throws `System.InvalidOperationException`:** The borrowed workspace has been released or is not empty.

**Throws `System.OperationCanceledException`:** Import, copying, verification or compilation was canceled before publication.

**Parameter `tools`:** The host-selected executable distribution, or null for the application's deployed tools.

**Parameter `cancellationToken`:** Cancels import and native compilation before replacing the destination artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderArtifactBuilder.cs#L70).

## `CompileGraphicsProgram`

<a id="api-e8abbeb67847dfa7"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder.CompileGraphicsProgram(Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs,Inno.Core.IO.ProcessOwnedDirectory,System.String,Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile,Inno.Rendering.GraphicsApi,System.String,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner,System.Threading.CancellationToken) 71bc0cd4e5bc90846804f2f2a39b44b1d318c671e3ad23c61ee5fd0dbb06c0af -->

```csharp
public static void Inno.Build.Toolchains.Bgfx.Shaders.ShaderArtifactBuilder.CompileGraphicsProgram(Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs inputs, Inno.Core.IO.ProcessOwnedDirectory workspace, string shaderPath, Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile platform, Inno.Rendering.GraphicsApi backend, string outputFile, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles one raster graph into device-only program facts for an embedded adapter distribution.

**Parameter `inputs`:** The operation's fixed source and permanent import-setting identity, copied before import.

**Parameter `workspace`:** A fresh caller-owned operation directory retained until compilation returns. The caller releases it after all consumers finish.

**Parameter `shaderPath`:** The source-local graph whose sole raster pass becomes the device program.

**Parameter `platform`:** The compiler's native target platform.

**Parameter `backend`:** The graphics API for the program binaries.

**Parameter `outputFile`:** The device artifact destination, atomically replaced after successful compilation.

**Throws `System.ArgumentException`:** A required shader path or output path is blank.

**Throws `System.IO.InvalidDataException`:** Compilation fails or the graph does not define exactly one raster program.

**Throws `System.ArgumentNullException`:** The fixed input identity or workspace is null.

**Throws `System.InvalidOperationException`:** The borrowed workspace has been released or is not empty.

**Throws `System.OperationCanceledException`:** Import, copying, verification or compilation was canceled before publication.

**Parameter `tools`:** The host-selected executable distribution, or null for the application's deployed tools.

**Parameter `cancellationToken`:** Cancels import and native compilation before replacing the destination artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderArtifactBuilder.cs#L129).
