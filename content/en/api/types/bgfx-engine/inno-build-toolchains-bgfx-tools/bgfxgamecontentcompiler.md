---
title: "BgfxGameContentCompiler"
description: "Reference for BgfxGameContentCompiler in Inno.Build.Toolchains.Bgfx.Tools."
uid: api.inno.build.toolchains.bgfx.tools.e16bdb3f9f5bdc1d
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Tools
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-tools
---
# `BgfxGameContentCompiler`

This reference describes `BgfxGameContentCompiler` in `Inno.Build.Toolchains.Bgfx.Tools`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-tools.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IGameContentCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-472f447d588f4442) | Method |
| [`CompileAsync`](#api-6e36eb00191f3fbf) | Method |
| [`target`](#api-aaea08f13ca11d89) | Property |

## Type declaration

<a id="api-e16bdb3f9f5bdc1d"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler dcce377a81c4d60d5ccdbc259a32a5fd10d3800462719f7c6139e41376e8eaaf -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler : Inno.Build.IGameContentCompiler
```

Produces source-free BGFX shader and texture artifacts for one Player target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxGameContentCompiler.cs#L20).

## `#ctor`

<a id="api-472f447d588f4442"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog,Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile,System.Collections.Generic.IEnumerable{Inno.Rendering.GraphicsApi},Inno.Build.Toolchains.Bgfx.Tools.ToolRunner) c553ad199b547b78ccd76ca6a0dacbe91ae584f530f8c1839b7b56672ad92847 -->

```csharp
public Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.BgfxGameContentCompiler(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types, Inno.Build.Toolchains.Bgfx.Tools.BgfxShaderTargetProfile platform, System.Collections.Generic.IEnumerable<Inno.Rendering.GraphicsApi> backends, Inno.Build.Toolchains.Bgfx.Tools.ToolRunner tools)
```

Creates a compiler using explicit target profiles and the selected runtime API closure.

**Parameter `assets`:** The active authoring asset owner.

**Parameter `serialization`:** The matching serialization registry.

**Parameter `types`:** The matching extension catalog.

**Parameter `platform`:** The immutable platform-contributed shader configuration.

**Parameter `backends`:** The nonempty renderer closure to publish.

**Parameter `tools`:** Borrowed frozen executables and shader includes; retain their product owner through compilation.

**Throws `System.ArgumentException`:** A renderer is missing, duplicated or not deployable.

**Throws `System.ArgumentNullException`:** A required authoring service, profile, renderer collection, or borrowed tool runner is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxGameContentCompiler.cs#L56).

## `CompileAsync`

<a id="api-6e36eb00191f3fbf"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext,System.Threading.CancellationToken) c61c844d6f3d861d0f022e012f5310c2deca1916be0c75a8a5c45a601176e391 -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures the active Asset generation and compiles every required runtime variant.

**Parameter `context`:** The target staging path and immutable build generation services.

**Parameter `cancellationToken`:** Cancellation observed before every compiler invocation and artifact write.

**Returns:** An operation that completes when the source-free target closure is staged.

**Throws `System.InvalidOperationException`:** Thrown when an asset has no stable identity, source mount, or valid target compilation result.

**Throws `System.ArgumentNullException`:** The build context is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxGameContentCompiler.cs#L105).

## `target`

<a id="api-aaea08f13ca11d89"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.target e21b7dd85c5d15c6883614e1b35ccf64fb970e91d4d6c641e5f0be5539cf82a5 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.Toolchains.Bgfx.Tools.BgfxGameContentCompiler.target { get; }
```

Gets the exact publication target whose content this compiler produces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/BgfxGameContentCompiler.cs#L85).
