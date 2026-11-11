---
title: "RenderShaderPassArtifact"
description: "Reference for RenderShaderPassArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.116325ee19e21189
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderShaderPassArtifact`

This reference describes `RenderShaderPassArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1270b8518421a69e) | Method |
| [`name`](#api-dfbbd87dbba5cca7) | Property |
| [`programKind`](#api-3272abba3d7838dd) | Property |
| [`rasterState`](#api-eab87e67a24e2723) | Property |
| [`shaderInterface`](#api-52bdc69784ad9272) | Property |
| [`stages`](#api-2a243f9dc253b9d5) | Property |

## Type declaration

<a id="api-116325ee19e21189"></a>
<!-- api: T:Inno.Rendering.Assets.RenderShaderPassArtifact a70962b720a3ab575250fbe9fcb6ab50bae9af89f008f966e66f3f466cbce90f -->

```csharp
public sealed class Inno.Rendering.Assets.RenderShaderPassArtifact
```

Carries one immutable compiled shader pass and its reflected runtime bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L13).

## `#ctor`

<a id="api-1270b8518421a69e"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderPassArtifact.#ctor(System.String,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderRasterState,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderStageArtifact}) 434bddb6cac94aacd6ce952d6df002e0056500ebf917ed5ed025a247bc908351 -->

```csharp
public Inno.Rendering.Assets.RenderShaderPassArtifact.RenderShaderPassArtifact(string name, Inno.Rendering.ShaderProgramKind programKind, Inno.Rendering.RenderRasterState rasterState, Inno.Rendering.ShaderInterface shaderInterface, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderShaderStageArtifact> stages)
```

Creates a deployed shader pass.

**Parameter `name`:** The stable pass name within the owning shader.

**Parameter `programKind`:** The programmable stage combination used by the pass.

**Parameter `rasterState`:** The backend-neutral fixed-function state used by raster passes.

**Parameter `shaderInterface`:** The validated pass-local resource binding contract.

**Parameter `stages`:** The complete target stage binaries required by the pass.

**Throws `System.ArgumentException`:** Thrown when the name, stage set, or program kind is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L38).

## `name`

<a id="api-dfbbd87dbba5cca7"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderPassArtifact.name 1c8c86d901d192035ccce1eedef176b165eeac2662e42ff2160a53942a1fbec9 -->

```csharp
public string Inno.Rendering.Assets.RenderShaderPassArtifact.name { get; }
```

Gets the stable pass name within the owning shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L63).

## `programKind`

<a id="api-3272abba3d7838dd"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderPassArtifact.programKind 74d87c07b86861df2e171409d92c644e06881d45fedafcf97289ed040d2ad28c -->

```csharp
public Inno.Rendering.ShaderProgramKind Inno.Rendering.Assets.RenderShaderPassArtifact.programKind { get; }
```

Gets the programmable stage combination used by this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L68).

## `rasterState`

<a id="api-eab87e67a24e2723"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderPassArtifact.rasterState 6e7ac851291fe0569a368849150581ab10913dbb192c994cf2738d15176334ce -->

```csharp
public Inno.Rendering.RenderRasterState Inno.Rendering.Assets.RenderShaderPassArtifact.rasterState { get; }
```

Gets an immutable copy of the backend-neutral raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L73).

## `shaderInterface`

<a id="api-52bdc69784ad9272"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderPassArtifact.shaderInterface aa1e43bfa6343e4b6cb953c45f34cc59df82f7af1cdeb91fbad551dce5c75770 -->

```csharp
public Inno.Rendering.ShaderInterface Inno.Rendering.Assets.RenderShaderPassArtifact.shaderInterface { get; }
```

Gets the validated pass-local resource binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L78).

## `stages`

<a id="api-2a243f9dc253b9d5"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderPassArtifact.stages da874809b39311927eb56976d9fd1b2a12e76b39f7a96832b6a33cba66c689c1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderShaderStageArtifact> Inno.Rendering.Assets.RenderShaderPassArtifact.stages { get; }
```

Gets the complete target stage binaries required by this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L83).
