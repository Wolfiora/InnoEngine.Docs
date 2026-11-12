---
title: "RenderShaderStageArtifact"
description: "Reference for RenderShaderStageArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.32b8d538b3cb1c9f
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderShaderStageArtifact`

This reference describes `RenderShaderStageArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e387912bf95139c7) | Method |
| [`bytes`](#api-350130958529a13d) | Property |
| [`stage`](#api-1a7b77ae9a71552a) | Property |

## Type declaration

<a id="api-32b8d538b3cb1c9f"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderStageArtifact c03ee613566aa02de4b03be785866e25f13b32dc3b4bdc694ab17cd21a776192 -->

```csharp
public sealed class InnoEngine.Rendering.RenderShaderStageArtifact
```

Stores one immutable target shader stage without retaining authoring source or compiler state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L13).

## `#ctor`

<a id="api-e387912bf95139c7"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderStageArtifact.#ctor(InnoEngine.Rendering.ShaderStage,System.ReadOnlySpan{System.Byte}) 5b06cfdf45eb4a5d035943c5483618652ad51602debd213b9aa1217052aa4f74 -->

```csharp
public InnoEngine.Rendering.RenderShaderStageArtifact.RenderShaderStageArtifact(InnoEngine.Rendering.ShaderStage stage, System.ReadOnlySpan<byte> bytes)
```

Creates a deployed shader stage.

**Parameter `stage`:** The single programmable stage represented by the target binary.

**Parameter `bytes`:** The non-empty target backend program bytes.

**Throws `System.ArgumentException`:** Thrown when `stage` is not a single stage or `bytes` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L29).

## `bytes`

<a id="api-350130958529a13d"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderStageArtifact.bytes b37aea1b089c6357e1521cd941715b5d543849d46c91fbc588b7f4f9a4db13ed -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.RenderShaderStageArtifact.bytes { get; }
```

Gets the immutable target backend program bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L49).

## `stage`

<a id="api-1a7b77ae9a71552a"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderStageArtifact.stage dc24c159927108f7a10046b94db854128d0039529ffacd5ce15bb7108b8db200 -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEngine.Rendering.RenderShaderStageArtifact.stage { get; }
```

Gets the programmable stage represented by this artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderStageArtifact.cs#L44).
