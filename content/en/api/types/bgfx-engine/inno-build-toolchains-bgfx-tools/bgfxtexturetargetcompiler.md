---
title: "BgfxTextureTargetCompiler"
description: "Reference for BgfxTextureTargetCompiler in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.eb45c025d66ab90a
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxTextureTargetCompiler`

This reference describes `BgfxTextureTargetCompiler` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Assets.Authoring.ITextureTargetCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7e95c7b5d11f9957) | Method |
| [`CompileKtxAsync`](#api-977a1697b3de170c) | Method |

## Type declaration

<a id="api-eb45c025d66ab90a"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler 5ba6e77e71892ea29769333983da1bbd85a8cb74110d022482d658564776a75e -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler : Inno.Rendering.Assets.Authoring.ITextureTargetCompiler
```

Converts artist texture sources into validated KTX containers with BGFX texturec.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxTextureTargetCompiler.cs#L15).

## `#ctor`

<a id="api-7e95c7b5d11f9957"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler.#ctor(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) 4dc22d20017f0360e841b3fabe32b9af70736d448c2db88863d33b2c0956d936 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler.BgfxTextureTargetCompiler(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner? tools = null)
```

Creates a texture compiler using frozen host tools or the application's explicit native deployment.

**Parameter `tools`:** The selected tool runner, or null for application-deployed tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxTextureTargetCompiler.cs#L25).

## `CompileKtxAsync`

<a id="api-977a1697b3de170c"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler.CompileKtxAsync(System.IO.Stream,Inno.Rendering.Assets.TextureColorSpace,System.Threading.CancellationToken) 788910690ba52482aef632f5d5eb4077b131e8f0e1a7cf7a5d06d60477626cc7 -->

```csharp
public System.Threading.Tasks.ValueTask<byte[]> Inno.Build.Toolchains.Bgfx.Tools.BgfxTextureTargetCompiler.CompileKtxAsync(System.IO.Stream source, Inno.Rendering.Assets.TextureColorSpace colorSpace, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles the supplied source into a validated runtime artifact.

**Parameter `source`:** The borrowed encoded image stream; only this toolchain materializes a short-lived compiler input.

**Parameter `colorSpace`:** The color transfer convention preserved in the compiled texture artifact.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** An asynchronous operation that completes after all requested work has finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxTextureTargetCompiler.cs#L42).
