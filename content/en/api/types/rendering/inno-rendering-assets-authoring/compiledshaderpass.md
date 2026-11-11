---
title: "CompiledShaderPass"
description: "Reference for CompiledShaderPass in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.8c37c1b583129edb
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `CompiledShaderPass`

This reference describes `CompiledShaderPass` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-220f52629480df89) | Method |
| [`definition`](#api-57ce6b821c4b7097) | Property |
| [`shaderInterface`](#api-e99e582bc88fc185) | Property |
| [`stages`](#api-ab67a3567c3e5f34) | Property |

## Type declaration

<a id="api-8c37c1b583129edb"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.CompiledShaderPass 01fd5c6f5345d5064b7d70dfc11bdbca25c7a32c2d20f360cb07b80f271d40db -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.CompiledShaderPass
```

Stores all compiled stages and state for one shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L128).

## `#ctor`

<a id="api-220f52629480df89"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.CompiledShaderPass.#ctor(Inno.Rendering.Assets.ShaderPassDefinition,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.Authoring.ShaderStageArtifact},Inno.Rendering.ShaderInterface) fbc3541467b8e2e3a514dd804577e8407e78ba35cb64d9c0c7cc6a586392642d -->

```csharp
public Inno.Rendering.Assets.Authoring.CompiledShaderPass.CompiledShaderPass(Inno.Rendering.Assets.ShaderPassDefinition definition, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.Authoring.ShaderStageArtifact> stages, Inno.Rendering.ShaderInterface shaderInterface)
```

Creates a compiled pass artifact.

**Parameter `definition`:** Stable pass definition.

**Parameter `stages`:** Compiled target stages.

**Parameter `shaderInterface`:** Pass-local manifest binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L143).

## `definition`

<a id="api-57ce6b821c4b7097"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderPass.definition 991d73edc74a9787403fc43889e3e360a72b69a305f17bfc99d968b306b9a673 -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition Inno.Rendering.Assets.Authoring.CompiledShaderPass.definition { get; }
```

Gets the stable pass definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L159).

## `shaderInterface`

<a id="api-e99e582bc88fc185"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderPass.shaderInterface 1363e59959d67ceb01b64489c442462f16e1ef61ade30e401afe365c3eb14c13 -->

```csharp
public Inno.Rendering.ShaderInterface Inno.Rendering.Assets.Authoring.CompiledShaderPass.shaderInterface { get; }
```

Gets the pass-local manifest binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L177).

## `stages`

<a id="api-ab67a3567c3e5f34"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderPass.stages fc14f28f0bd6e0518a5f8f324fa962c8a7bfc1d6fcf07e945be9997f0601afbd -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.Authoring.ShaderStageArtifact> Inno.Rendering.Assets.Authoring.CompiledShaderPass.stages { get; }
```

Gets compiled target stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L172).
