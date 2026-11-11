---
title: "BgfxShaderSourceFrontend"
description: "Reference for BgfxShaderSourceFrontend in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.9ea9da92ba911a42
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxShaderSourceFrontend`

This reference describes `BgfxShaderSourceFrontend` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderSourceFrontend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c6895ed9b4e43fad) | Method |
| [`Analyze`](#api-99e5ba5b8ca6a3db) | Method |
| [`languageId`](#api-481240d036783368) | Property |

## Type declaration

<a id="api-9ea9da92ba911a42"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend cc12d214da115d95b7c042fd6e603743a9c308d38dca8addbe94e8da5b876a32 -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend : Inno.Rendering.Shaders.IShaderSourceFrontend
```

Parses BGFX SC function modules without placing BGFX grammar in the common shader model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Sources/BgfxShaderSourceFrontend.cs#L13).

## `#ctor`

<a id="api-c6895ed9b4e43fad"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.#ctor 63c8e7a89f8d94f56175b9ba34a85bde3d4ffee61476f68577ad458af5a91256 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.BgfxShaderSourceFrontend()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Sources/BgfxShaderSourceFrontend.cs#L13).

## `Analyze`

<a id="api-99e5ba5b8ca6a3db"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.Analyze(Inno.Rendering.Shaders.ShaderSourceRequest) 429b82a8203c90fe73dc572bad18fca0a0f28fc1ac56bd65653addf5c49f4455 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceAnalysis Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.Analyze(Inno.Rendering.Shaders.ShaderSourceRequest request)
```

Analyzes source text and returns validated output with diagnostics.

**Parameter `request`:** The validated immutable request that defines this operation.

**Returns:** The validated shader source analysis that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Sources/BgfxShaderSourceFrontend.cs#L29).

## `languageId`

<a id="api-481240d036783368"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.languageId 1ee84a7004d36e61a30fb22c24383c826ec52974ebd0a67bdb3a46f31955bdea -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderSourceFrontend.languageId { get; }
```

Gets the language id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Sources/BgfxShaderSourceFrontend.cs#L18).
