---
title: "BgfxShadercToolchain"
description: "Reference for BgfxShadercToolchain in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.08ef2d6d5b9c44f2
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxShadercToolchain`

This reference describes `BgfxShadercToolchain` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c28d7aa30a4ba2f3) | Method |
| [`CompileAsync`](#api-bc0c98354605bad9) | Method |
| [`CreateTarget`](#api-e5e1c3fbfdac267d) | Method |
| [`implementationId`](#api-488602f3370aef89) | Property |
| [`supportedSourceLanguages`](#api-380644fcc83943c3) | Property |

## Type declaration

<a id="api-08ef2d6d5b9c44f2"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain 15358ba466c46a14b8c64a34aaf7985a61d08c8694322cc21576f57edebf62a0 -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain : Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain
```

Compiles common Shader IR stages with the BGFX shaderc toolchain.

Keeps compiled GLSL bindings and the BGFX binary uniform table consistent.

Compiles typed shader stages with the bgfx shader toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShadercToolchain.cs#L16).

## `#ctor`

<a id="api-c28d7aa30a4ba2f3"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.#ctor(Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) d20bb3a622f75ccbf546bebc05a3e84f2b7e78905823254ca1e287cb053475ef -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.BgfxShadercToolchain(Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile targetPlatform, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null)
```

Creates a compiler for one explicit offline target platform.

**Parameter `targetPlatform`:** Target platform whose shaderc profiles are required.

**Parameter `tools`:** Frozen host-selected executables, or null to use the application's explicit native deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShadercToolchain.cs#L30).

## `CompileAsync`

<a id="api-bc0c98354605bad9"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,System.Threading.CancellationToken) f6839afaded398c6c6799197c4941b94907d9f9c8820eeb1d27dc9fa26752d50 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderStageToolResult> Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest request, System.Threading.CancellationToken cancellationToken)
```

Compiles the supplied source into a validated runtime artifact.

**Parameter `request`:** The validated immutable request that defines this operation.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** An asynchronous operation that completes after all requested work has finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Intermediate/BgfxShadercToolchain.Typed.cs#L51).

## `CreateTarget`

<a id="api-e5e1c3fbfdac267d"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.CreateTarget(Inno.Rendering.GraphicsCapabilities,System.Boolean,System.Boolean) 5d07d74fbb179f82962825066d514fd759185eb59fb609ec571296898ef8c71c -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompileTarget Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.CreateTarget(Inno.Rendering.GraphicsCapabilities capabilities, bool optimize = true, bool debugInformation = false)
```

Creates a target using this implementation's validated inputs.

**Parameter `capabilities`:** The immutable graphics capabilities used to validate the operation.

**Parameter `optimize`:** Whether the compiler should optimize the generated runtime artifact.

**Parameter `debugInformation`:** Whether the compiler should retain target debug information.

**Returns:** The validated shader compile target that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxShadercToolchain.cs#L54).

## `implementationId`

<a id="api-488602f3370aef89"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.implementationId acca7fb3aa275076be79c3c77888aeb503ab8d1aeef05ad6f4f6df719f100077 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.implementationId { get; }
```

Gets the implementation id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Intermediate/BgfxShadercToolchain.Typed.cs#L37).

## `supportedSourceLanguages`

<a id="api-380644fcc83943c3"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.supportedSourceLanguages 064a3b865dd1f1881cf1f7b3748bd72c6affbdea8da5a860742fe9a8e75c60bf -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.Bgfx.Tools.BgfxShadercToolchain.supportedSourceLanguages { get; }
```

Gets shader source languages accepted by this toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Intermediate/BgfxShadercToolchain.Typed.cs#L32).
