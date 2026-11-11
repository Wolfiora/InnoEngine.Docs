---
title: "ShaderCompiler"
description: "Reference for ShaderCompiler in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.c874fe92dd888ed8
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderCompiler`

This reference describes `ShaderCompiler` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eb98504a02e9036f) | Method |
| [`CompileAsync`](#api-da057aeb360a06df) | Method |
| [`CompileAsync`](#api-47f1517e7082d0a2) | Method |
| [`CompileGraphAsync`](#api-57cff345e9ca0a64) | Method |
| [`CompileGraphAsync`](#api-469db9ce9c4562cc) | Method |
| [`CreateTarget`](#api-b78c2168863dfc3a) | Method |

## Type declaration

<a id="api-c874fe92dd888ed8"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderCompiler 8fbab24e863079f73609e095ec7fb6fa34febbe1a261af95805d0235181d092b -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderCompiler
```

Compiles validated Shader IR through one target toolchain.

Carries validated inputs and outputs for one shader compilation stage.

Carries validated inputs and outputs for one shader compilation stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L409).

## `#ctor`

<a id="api-eb98504a02e9036f"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.#ctor(Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain) c46f6b32e1b85885413d7dd057d9822b3d555fe97cb029e3a1cb4b31f2edae43 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompiler.ShaderCompiler(Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain toolchain)
```

Creates a common IR compiler with one backend-owned target toolchain.

**Parameter `toolchain`:** Backend compiler implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L419).

## `CompileAsync`

<a id="api-da057aeb360a06df"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Shaders.ShaderGraphProgramResult,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) 235abe4268acdc7ec2e40fea47cfdef6a4459999ed7ba3876e2f270491788ccc -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderCompilationResult> Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Assets.ShaderDefinition definition, Inno.Rendering.Shaders.ShaderGraphProgramResult program, Inno.Rendering.Assets.Authoring.ShaderCompileTarget target, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles every graph-lowered pass through the adapter's typed stage interface.

**Parameter `definition`:** Source-free material, technique, capability and pass contract.

**Parameter `program`:** Complete graph lowering result for this exact variant.

**Parameter `target`:** Target compiler policy and capabilities.

**Parameter `variant`:** Keyword selection already applied while lowering source functions and graph nodes.

**Parameter `serialization`:** Current owner registry used to capture the runtime contract before asynchronous work.

**Parameter `context`:** Complete owner reference context; only the encoded stable references cross the asynchronous boundary.

**Parameter `cancellationToken`:** Cancellation before candidate publication.

**Returns:** One complete immutable target artifact, or errors without a partial candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphCompilation.cs#L145).

## `CompileAsync`

<a id="api-47f1517e7082d0a2"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Shaders.ShaderIrStage,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,System.Threading.CancellationToken) 71612dbb6cfe80cc7bc0482dc3ad9d0a32a8220546b73c348daf5ba1cd007e23 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderStageToolResult> Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileAsync(Inno.Rendering.Shaders.ShaderIrStage stage, Inno.Rendering.Assets.Authoring.ShaderCompileTarget target, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles a typed stage through the configured adapter without an intermediate complete-source authoring asset.

**Parameter `stage`:** Typed stage and frozen function modules.

**Parameter `target`:** Configured target capability/profile snapshot.

**Parameter `cancellationToken`:** Cancellation before publishing the candidate.

**Returns:** Compiled stage bytes, exact generated binding names and structured diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderStageCompilation.cs#L121).

## `CompileGraphAsync`

<a id="api-57cff345e9ca0a64"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Assets.IAssetArtifactLookup,System.Threading.CancellationToken) c8bdb541b8a12af71b70e5cd670229a77dd0b2f13b5cab8dacf94b75bb0a7460 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderCompilationResult> Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.Authoring.ShaderCompileTarget target, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, Inno.Assets.IAssetArtifactLookup artifacts, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures an imported graph in the current owner generation, then starts native compilation without retaining its asset.

**Parameter `shader`:** Committed graph-backed shader asset.

**Parameter `target`:** Target policy and device capabilities.

**Parameter `variant`:** Exact material keyword selection.

**Parameter `types`:** Shared authoring type generation owner.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner asset/reference context.

**Parameter `artifacts`:** Authoring artifact owner supplying the graph output, which is absent from runtime packages.

**Parameter `cancellationToken`:** Cancellation before candidate publication.

**Returns:** A native compilation task for the captured graph, or graph diagnostics without any native work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphCompilation.cs#L50).

## `CompileGraphAsync`

<a id="api-469db9ce9c4562cc"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(System.ReadOnlyMemory{System.Byte},Inno.Rendering.Assets.Authoring.ShaderCompileTarget,Inno.Rendering.Assets.RenderShaderVariant,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) fd67159555f411b4aacc9f5df341dcaa4900e120a81bff2980a3a80a345f53fa -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderCompilationResult> Inno.Rendering.Assets.Authoring.ShaderCompiler.CompileGraphAsync(System.ReadOnlyMemory<byte> artifact, Inno.Rendering.Assets.Authoring.ShaderCompileTarget target, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles an immutable import or preview candidate without reading or mutating a canonical Shader asset.

**Parameter `artifact`:** Frozen target-expanded graph and source bundles.

**Parameter `target`:** Target policy and capabilities.

**Parameter `variant`:** Exact keyword selection.

**Parameter `types`:** Current authoring generation.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner references captured before asynchronous native work.

**Parameter `cancellationToken`:** Cancellation of this candidate.

**Returns:** A complete immutable compilation result, never published by this method.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphCompilation.cs#L91).

## `CreateTarget`

<a id="api-b78c2168863dfc3a"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompiler.CreateTarget(Inno.Rendering.GraphicsCapabilities,System.Boolean,System.Boolean) c429af7b1a68021577bdd5e18fe51738fb653af0f75725aa4bf44744b561443e -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompileTarget Inno.Rendering.Assets.Authoring.ShaderCompiler.CreateTarget(Inno.Rendering.GraphicsCapabilities capabilities, bool optimize = true, bool debugInformation = false)
```

Creates a target supported by the configured backend compiler.

**Parameter `capabilities`:** Target renderer capabilities.

**Parameter `optimize`:** Whether release optimization is enabled.

**Parameter `debugInformation`:** Whether compiler debug information is emitted.

**Returns:** A stable target description accepted by this compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L439).
