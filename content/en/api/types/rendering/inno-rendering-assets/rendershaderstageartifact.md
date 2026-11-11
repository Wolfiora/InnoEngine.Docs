---
title: "RenderShaderStageArtifact"
description: "Reference for RenderShaderStageArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.3932ddc9c4b2309b
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderShaderStageArtifact`

This reference describes `RenderShaderStageArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-44b69951da326850) | Method |
| [`bytes`](#api-516365655477996f) | Property |
| [`stage`](#api-2cb56cd9b9591720) | Property |

## Type declaration

<a id="api-3932ddc9c4b2309b"></a>
<!-- api: T:Inno.Rendering.Assets.RenderShaderStageArtifact f30fe7df2c30a12e24bbe55b9a7e228b12a0efd44f482213d8b2f5b765890ccb -->

```csharp
public sealed class Inno.Rendering.Assets.RenderShaderStageArtifact
```

Stores one immutable target shader stage without retaining authoring source or compiler state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L13).

## `#ctor`

<a id="api-44b69951da326850"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderStageArtifact.#ctor(Inno.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte}) e6ba7af233ef1c3b030eeeab43400e0ee9a86812cbd120d269f9bacc40834b73 -->

```csharp
public Inno.Rendering.Assets.RenderShaderStageArtifact.RenderShaderStageArtifact(Inno.Rendering.ShaderStage stage, System.ReadOnlySpan<byte> bytes)
```

Creates a deployed shader stage.

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

**Throws `System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L29).

## `bytes`

<a id="api-516365655477996f"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderStageArtifact.bytes 69fdf02f5cafb565623dc41dd1f3c8a63409f9ed68772e9c55ec884a1e6196cc -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.Assets.RenderShaderStageArtifact.bytes { get; }
```

Gets the immutable target backend program bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L49).

## `stage`

<a id="api-2cb56cd9b9591720"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderStageArtifact.stage 9501a8f4e29c26a2b53255d32c8acfe9bd7251688cd0d22a3014b6ce426eaae5 -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Assets.RenderShaderStageArtifact.stage { get; }
```

Gets the programmable stage represented by this artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L44).
