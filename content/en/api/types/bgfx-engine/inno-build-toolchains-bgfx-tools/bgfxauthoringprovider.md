---
title: "BgfxAuthoringProvider"
description: "Reference for BgfxAuthoringProvider in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.77c1421c57babc29
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxAuthoringProvider`

This reference describes `BgfxAuthoringProvider` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Rendering.RenderingAuthoringBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9e8ba34a304ce5c8) | Method |
| [`CreateShaderCompilerToolchain`](#api-47453aa4cd1c73ed) | Method |
| [`CreateTextureTargetCompiler`](#api-4540f4c38ab65e64) | Method |

## Type declaration

<a id="api-77c1421c57babc29"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider e55a300a420e61d8f7a758e454bf0b0f7ba202139dad8fcd75ce847a7b8a27ad -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider : Inno.Adapter.Rendering.RenderingAuthoringBackendProvider
```

Registers the BGFX authoring compiler and texture target compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxAuthoringProvider.cs#L11).

## `#ctor`

<a id="api-9e8ba34a304ce5c8"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.#ctor(Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile,Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) 03bd06c69aed21fddd87aa964349830b104761dbb5fd86ac2389049fe29b83cd -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.BgfxAuthoringProvider(Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile target, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null)
```

Registers the bundled rendering authoring tools without initializing a compiler.

**Parameter `target`:** The product's explicit preview shader target.

**Parameter `tools`:** Frozen executable tools, or null for the product's own deployed tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxAuthoringProvider.cs#L25).

## `CreateShaderCompilerToolchain`

<a id="api-47453aa4cd1c73ed"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.CreateShaderCompilerToolchain ec6ea79d05dc49f1183023059a88aa8ea88e8cce45f3a750c384c6232c17b22e -->

```csharp
public override Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.CreateShaderCompilerToolchain()
```

Creates the shader toolchain for this implementation.

**Returns:** A compiler compatible with devices registered under the same identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxAuthoringProvider.cs#L35).

## `CreateTextureTargetCompiler`

<a id="api-4540f4c38ab65e64"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.CreateTextureTargetCompiler 96348f921ef504eea98b9ffe1110f3eb64b8612312d987abdd9bbb648bf79ea8 -->

```csharp
public override Inno.Rendering.Assets.Authoring.ITextureTargetCompiler Inno.Build.Toolchains.Bgfx.Tools.BgfxAuthoringProvider.CreateTextureTargetCompiler()
```

Creates the texture compiler for this implementation.

**Returns:** A compiler compatible with devices registered under the same identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxAuthoringProvider.cs#L38).
