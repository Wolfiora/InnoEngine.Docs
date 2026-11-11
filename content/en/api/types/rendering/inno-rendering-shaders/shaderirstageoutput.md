---
title: "ShaderIrStageOutput"
description: "Reference for ShaderIrStageOutput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.1551b6a1eac1b00e
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrStageOutput`

This reference describes `ShaderIrStageOutput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6c756a48d89f91b1) | Method |
| [`id`](#api-708b0f4dc536c6f0) | Property |
| [`kind`](#api-fc1d975d25e9b8c2) | Property |
| [`location`](#api-a8760ba2bafdf4c3) | Property |
| [`semantic`](#api-7d245ccc06038732) | Property |

## Type declaration

<a id="api-1551b6a1eac1b00e"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrStageOutput 52185aa42909ede3542f3654d75f18947b0b4389b2e90aa9e69733c6fc74717e -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrStageOutput
```

Describes a named block output's GPU destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L133).

## `#ctor`

<a id="api-6c756a48d89f91b1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrStageOutput.#ctor(System.String,Inno.Rendering.Shaders.ShaderIrOutputKind,System.String,System.Int32) 330b9ee5bb35c3555e935ed8eb8a8e79f25b234f36669f1d37e61a6a2554d225 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStageOutput.ShaderIrStageOutput(string id, Inno.Rendering.Shaders.ShaderIrOutputKind kind, string semantic = "", int location = 0)
```

Creates an immutable stage output binding.

**Parameter `id`:** The exact name in the block's output map.

**Parameter `kind`:** GPU output category.

**Parameter `semantic`:** Varying semantic matched by the next stage; otherwise empty.

**Parameter `location`:** Varying index or color attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L150).

## `id`

<a id="api-708b0f4dc536c6f0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageOutput.id d409dc2e580e5577aa26fd0b93fcb08fcdc107ad24d504c8f41d6d3c4e806138 -->

```csharp
public string Inno.Rendering.Shaders.ShaderIrStageOutput.id { get; }
```

Gets the exact block output identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L171).

## `kind`

<a id="api-fc1d975d25e9b8c2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageOutput.kind 7fc9ef1b5c819bdc058c9c63cbafbf1cc24d5effbfc92c66db83b86af8fe1696 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrOutputKind Inno.Rendering.Shaders.ShaderIrStageOutput.kind { get; }
```

Gets the GPU output category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L175).

## `location`

<a id="api-a8760ba2bafdf4c3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageOutput.location 78f266bb6f8775faa16e52472edbf1fa59331c92fce2bd8d15e814bd5eb6e9a7 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrStageOutput.location { get; }
```

Gets the target-assigned varying or attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L183).

## `semantic`

<a id="api-7d245ccc06038732"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageOutput.semantic 29a80ff5e06fcc2ff85fb07fbed7612169261d5939859fcbcd844bc96d15eb94 -->

```csharp
public string Inno.Rendering.Shaders.ShaderIrStageOutput.semantic { get; }
```

Gets the varying semantic, not native assignment syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L179).
