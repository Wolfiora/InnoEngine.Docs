---
title: "IShaderCompilerToolchain"
description: "Reference for IShaderCompilerToolchain in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.4292fb478e52ff94
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `IShaderCompilerToolchain`

This reference describes `IShaderCompilerToolchain` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CompileAsync`](#api-fbf077d9c571d945) | Method |
| [`CreateTarget`](#api-c43242bc20280b7a) | Method |
| [`implementationId`](#api-49d96eb68d8ce80e) | Property |
| [`supportedSourceLanguages`](#api-e3d871617ff958ce) | Property |

## Type declaration

<a id="api-4292fb478e52ff94"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain 77f12d896b4c958d917e2edf5b9c189d400c19292835114329b71d6554e11513 -->

```csharp
public interface Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain
```

Defines a backend-owned target compiler used by the common Shader IR pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L353).

## `CompileAsync`

<a id="api-fbf077d9c571d945"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest,System.Threading.CancellationToken) fdc7804799edbf0f2eb956be1d9f79ff761a8578097084765a871064047a4f8d -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Rendering.Assets.Authoring.ShaderStageToolResult> Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CompileAsync(Inno.Rendering.Assets.Authoring.ShaderStageToolRequest request, System.Threading.CancellationToken cancellationToken)
```

Generates and compiles one typed stage, including its frozen function modules and resource layout.

**Parameter `request`:** Typed stage and exact target profile.

**Parameter `cancellationToken`:** Cancellation before publishing the candidate.

**Returns:** Immutable compiled bytes, generated binding names and structured diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L377).

## `CreateTarget`

<a id="api-c43242bc20280b7a"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CreateTarget(Inno.Rendering.GraphicsCapabilities,System.Boolean,System.Boolean) 08c93702c37e319bf0bfe5ea9bb9e321cf3385820e8d639710250d9c1861ee63 -->

```csharp
Inno.Rendering.Assets.Authoring.ShaderCompileTarget Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.CreateTarget(Inno.Rendering.GraphicsCapabilities capabilities, bool optimize = true, bool debugInformation = false)
```

Creates a target supported by this toolchain and capability snapshot.

**Parameter `capabilities`:** Target renderer capabilities.

**Parameter `optimize`:** Whether release optimization is enabled.

**Parameter `debugInformation`:** Whether compiler debug information is emitted.

**Returns:** A stable target description accepted by this toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L397).

## `implementationId`

<a id="api-49d96eb68d8ce80e"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.implementationId a0dd8eee436ed52abbd1a25640caf8cfcee1f63e000574bc6061da66146ec168 -->

```csharp
string Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.implementationId { get; }
```

Gets the stable source implementation identity paired with this rendering adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L358).

## `supportedSourceLanguages`

<a id="api-e3d871617ff958ce"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.supportedSourceLanguages c4f23372d70f762a6713d89133ab7decd8c084b42190de33d29c96ffd83804b1 -->

```csharp
System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain.supportedSourceLanguages { get; }
```

Gets the explicit source-language identities accepted by this adapter's typed IR generator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L363).
