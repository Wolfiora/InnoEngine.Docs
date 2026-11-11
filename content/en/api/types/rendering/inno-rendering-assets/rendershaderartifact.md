---
title: "RenderShaderArtifact"
description: "Reference for RenderShaderArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.1ce0d381c6ef8498
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderShaderArtifact`

This reference describes `RenderShaderArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-96104c474f5a1fe9) | Method |
| [`contentHash`](#api-bb9c02df10a3741f) | Property |
| [`definitionData`](#api-07e2aea81b4691d0) | Property |
| [`passes`](#api-22179aa447261964) | Property |
| [`shaderInterface`](#api-b33b36b8208f8ca5) | Property |
| [`shaderName`](#api-3b41758a16d22477) | Property |
| [`targetKey`](#api-fe27a56fffaa32f2) | Property |
| [`variant`](#api-efe30e4c8d142b04) | Property |

## Type declaration

<a id="api-1ce0d381c6ef8498"></a>
<!-- api: T:Inno.Rendering.Assets.RenderShaderArtifact 03633b1470561ed38ad4bf021401fb05d2761d358baccc5961d51fad89ba3f0d -->

```csharp
public sealed class Inno.Rendering.Assets.RenderShaderArtifact
```

Contains one immutable, source-free shader artifact ready for runtime GPU resource creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L13).

## `#ctor`

<a id="api-96104c474f5a1fe9"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderArtifact.#ctor(System.String,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte}) 074c62f3b4aab0f874d9ecea465bbd2e2c9e9483ac38430accd2930efe8c7d40 -->

```csharp
public Inno.Rendering.Assets.RenderShaderArtifact.RenderShaderArtifact(string shaderName, string targetKey, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.ShaderInterface shaderInterface, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderShaderPassArtifact> passes, System.ReadOnlySpan<byte> definitionData)
```

Creates a complete deployed shader artifact.

**Parameter `shaderName`:** The stable shader name expected by the runtime asset definition.

**Parameter `targetKey`:** The target compiler profile and policy identity.

**Parameter `variant`:** The canonical static keyword selection.

**Parameter `shaderInterface`:** The complete validated shader resource binding contract.

**Parameter `passes`:** Every source-free pass available to the runtime shader definition.

**Throws `System.ArgumentException`:** Thrown when a required identity is empty, no pass exists, or pass names are duplicated.

**Parameter `definitionData`:** Native-serialized material, keyword, technique and pass contract captured with these programs; contains stable asset references only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L42).

## `contentHash`

<a id="api-bb9c02df10a3741f"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.contentHash 245d15c2b8d769235e3150f17a56b3c268dced5c60825b06d848a129a7d3b989 -->

```csharp
public string Inno.Rendering.Assets.RenderShaderArtifact.contentHash { get; }
```

Gets a semantic content identity covering the contract, variant, target, bindings and all compiled stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L78).

## `definitionData`

<a id="api-07e2aea81b4691d0"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.definitionData 6ffbd8c9ffadc95dd13234384a370b58270ab0e9c8767a4177f1a57b24bbeaf9 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Rendering.Assets.RenderShaderArtifact.definitionData { get; }
```

Gets the immutable native-serialized runtime contract paired with this exact program publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L73).

## `passes`

<a id="api-22179aa447261964"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.passes b2f9ed8e8a4d1382afdb86765cd72e36fed28581370c9438317494ecacfbe358 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderShaderPassArtifact> Inno.Rendering.Assets.RenderShaderArtifact.passes { get; }
```

Gets every source-free pass available to the runtime shader definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L103).

## `shaderInterface`

<a id="api-b33b36b8208f8ca5"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.shaderInterface 2473e8858d15648f8cabf7e7553f1f236e331169c903583fd3dcbb040909716b -->

```csharp
public Inno.Rendering.ShaderInterface Inno.Rendering.Assets.RenderShaderArtifact.shaderInterface { get; }
```

Gets the complete validated shader resource binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L98).

## `shaderName`

<a id="api-3b41758a16d22477"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.shaderName f33b7f1325e9b2ed8a796e33e0112285d266d94ba71f3365680385b9a86bcb2b -->

```csharp
public string Inno.Rendering.Assets.RenderShaderArtifact.shaderName { get; }
```

Gets the stable shader name expected by the runtime asset definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L83).

## `targetKey`

<a id="api-fe27a56fffaa32f2"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.targetKey 7d2a1b108437b8cf9e7cc18b23b8eff29370167c6cabe484c41e78288fa1e8a5 -->

```csharp
public string Inno.Rendering.Assets.RenderShaderArtifact.targetKey { get; }
```

Gets the target compiler profile and policy identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L88).

## `variant`

<a id="api-efe30e4c8d142b04"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderArtifact.variant e606820a505b839bb2919c1bb3bfd6571f56eaf128d23fe960fa9f23fd252f28 -->

```csharp
public Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.RenderShaderArtifact.variant { get; }
```

Gets the canonical static keyword selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L93).
