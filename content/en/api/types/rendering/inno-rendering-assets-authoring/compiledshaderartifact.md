---
title: "CompiledShaderArtifact"
description: "Reference for CompiledShaderArtifact in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.7eb9ff62a13afd50
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `CompiledShaderArtifact`

This reference describes `CompiledShaderArtifact` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a9ed1c9b8288362e) | Method |
| [`CreateRuntimeArtifact`](#api-a5ab337c50a945d0) | Method |
| [`passes`](#api-f12ed39b446fe7c8) | Property |
| [`shaderInterface`](#api-e577e4d8d7ab7546) | Property |
| [`shaderName`](#api-5ef06ed4da238c36) | Property |
| [`targetKey`](#api-572ce260591f7fea) | Property |
| [`variant`](#api-add2960795f3fb6c) | Property |

## Type declaration

<a id="api-7eb9ff62a13afd50"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact 88b891a391d22f18369123a3d9a23b99ae0455cc042374d11535800e39273a2c -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.CompiledShaderArtifact
```

Contains an immutable target shader artifact and expected reflected interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L184).

## `#ctor`

<a id="api-a9ed1c9b8288362e"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.#ctor(System.String,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.Authoring.CompiledShaderPass},System.ReadOnlySpan{System.Byte}) 58f126bd2f378c90c6af95a902745bacca8e4f846257f8845465316e08f785b2 -->

```csharp
public Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.CompiledShaderArtifact(string shaderName, string targetKey, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.ShaderInterface shaderInterface, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.Authoring.CompiledShaderPass> passes, System.ReadOnlySpan<byte> definitionData)
```

Creates a compiled shader artifact.

**Parameter `shaderName`:** Artist-facing shader name.

**Parameter `targetKey`:** Stable target cache key.

**Parameter `variant`:** Static keyword variant.

**Parameter `shaderInterface`:** Manifest-derived binding contract.

**Parameter `passes`:** Compiled pass binaries.

**Parameter `definitionData`:** Native-serialized runtime definition captured before asynchronous compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L208).

## `CreateRuntimeArtifact`

<a id="api-a5ab337c50a945d0"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.CreateRuntimeArtifact 1bbb105d7e3e8c05901a45bc9cb7099c15b61c7b1b2de9b955f491926479c7a2 -->

```csharp
public Inno.Rendering.Assets.RenderShaderArtifact Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.CreateRuntimeArtifact()
```

Creates the source-free deployment artifact consumed by Editor preview sessions and Players.

**Returns:** A deep immutable runtime artifact containing only target binaries, fixed-function state, and binding contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L261).

## `passes`

<a id="api-f12ed39b446fe7c8"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.passes 8c2a5935a46f8314050d3c1147a4be5190af8cbd23617fabb224a9f0b4a55f95 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.Authoring.CompiledShaderPass> Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.passes { get; }
```

Gets compiled pass binaries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L253).

## `shaderInterface`

<a id="api-e577e4d8d7ab7546"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.shaderInterface 8f6472a220461706257d150af72e65fa92ac80981356f992a3c84666b06e7891 -->

```csharp
public Inno.Rendering.ShaderInterface Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.shaderInterface { get; }
```

Gets the manifest-derived binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L248).

## `shaderName`

<a id="api-5ef06ed4da238c36"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.shaderName 147c1ca3338447e59ecc971e830e23ae7e7b715b89462e4fd0761e85f12ecb89 -->

```csharp
public string Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.shaderName { get; }
```

Gets the artist-facing shader name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L233).

## `targetKey`

<a id="api-572ce260591f7fea"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.targetKey d9561cc1b8f30db56fe6899ba338554bf4fb5ff3b9ef32eda5e9af0702fce1bc -->

```csharp
public string Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.targetKey { get; }
```

Gets the stable target cache key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L238).

## `variant`

<a id="api-add2960795f3fb6c"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.variant a04d07787540eb5768f93e3baa609b6738c18939244df7bda4fab8a1f5488bca -->

```csharp
public Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.Authoring.CompiledShaderArtifact.variant { get; }
```

Gets the static keyword variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L243).
