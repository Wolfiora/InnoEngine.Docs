---
title: "RenderShaderArtifact"
description: "Reference for RenderShaderArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.baa2044da11c3bbd
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderShaderArtifact`

This reference describes `RenderShaderArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d898bed1a1f16e7) | Method |
| [`contentHash`](#api-a84733261a72473a) | Property |
| [`definitionData`](#api-71e8a790bc545164) | Property |
| [`passes`](#api-a53a0d61b5b3c2d8) | Property |
| [`shaderInterface`](#api-b82e08885df8924d) | Property |
| [`shaderName`](#api-12f1bb96c73737e3) | Property |
| [`targetKey`](#api-f682c66f9a599068) | Property |
| [`variant`](#api-bb03d987cae3b279) | Property |

## Type declaration

<a id="api-baa2044da11c3bbd"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderArtifact dc44d94d1f83995b42444a133f3b8ee414b1ed9c0f319e2d82a1acaf1322d3ff -->

```csharp
public sealed class InnoEngine.Rendering.RenderShaderArtifact
```

Contains one immutable, source-free shader artifact ready for runtime GPU resource creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L13).

## `#ctor`

<a id="api-1d898bed1a1f16e7"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderArtifact.#ctor(System.String,System.String,InnoEngine.Rendering.RenderShaderVariant,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderPassArtifact},System.ReadOnlySpan{System.Byte}) 6a1f265e4f13e977cfdef1539e954dfaf356c348df37d5c8a1ba0d8311bd7a6d -->

```csharp
public InnoEngine.Rendering.RenderShaderArtifact.RenderShaderArtifact(string shaderName, string targetKey, InnoEngine.Rendering.RenderShaderVariant variant, InnoEngine.Rendering.ShaderInterface shaderInterface, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderPassArtifact> passes, System.ReadOnlySpan<byte> definitionData)
```

Creates a complete deployed shader artifact.

**Parameter `shaderName`:** The stable shader name expected by the runtime asset definition.

**Parameter `targetKey`:** The target compiler profile and policy identity.

**Parameter `variant`:** The canonical static keyword selection.

**Parameter `shaderInterface`:** The complete validated shader resource binding contract.

**Parameter `passes`:** Every source-free pass available to the runtime shader definition.

**Throws `System.ArgumentException`:** Thrown when a required identity is empty, no pass exists, or pass names are duplicated.

**Parameter `definitionData`:** Native-serialized material, keyword, technique and pass contract captured with these programs; contains stable asset references only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L42).

## `contentHash`

<a id="api-a84733261a72473a"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.contentHash 86fd146387db084b8399b035b85ca51355c5ca83a62ba6226bf99ab6ab9c4880 -->

```csharp
public string InnoEngine.Rendering.RenderShaderArtifact.contentHash { get; }
```

Gets a semantic content identity covering the contract, variant, target, bindings and all compiled stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L78).

## `definitionData`

<a id="api-71e8a790bc545164"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.definitionData a9ee5c4c4824cd682d90e971738a269325be8871dae4e2b4bf819fe7dc3c2743 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.RenderShaderArtifact.definitionData { get; }
```

Gets the immutable native-serialized runtime contract paired with this exact program publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L73).

## `passes`

<a id="api-a53a0d61b5b3c2d8"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.passes d1828f840f81609ab2591b7017ef073a721c5a4f0f526098c6c46e4bdf74ae68 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderPassArtifact> InnoEngine.Rendering.RenderShaderArtifact.passes { get; }
```

Gets every source-free pass available to the runtime shader definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L103).

## `shaderInterface`

<a id="api-b82e08885df8924d"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.shaderInterface 213a61fe2dfc15960a65da355944e194834da55fc0a8d0c25fc5345692499e1e -->

```csharp
public InnoEngine.Rendering.ShaderInterface InnoEngine.Rendering.RenderShaderArtifact.shaderInterface { get; }
```

Gets the complete validated shader resource binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L98).

## `shaderName`

<a id="api-12f1bb96c73737e3"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.shaderName 306c4952332d534bece55b897bb9a1a76890dbb1fb643cd8ba65909f62fcb776 -->

```csharp
public string InnoEngine.Rendering.RenderShaderArtifact.shaderName { get; }
```

Gets the stable shader name expected by the runtime asset definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L83).

## `targetKey`

<a id="api-f682c66f9a599068"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.targetKey ac94a9df3e615148109d440deeb9b45ffda025120abb8814309a021f636f2adf -->

```csharp
public string InnoEngine.Rendering.RenderShaderArtifact.targetKey { get; }
```

Gets the target compiler profile and policy identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L88).

## `variant`

<a id="api-bb03d987cae3b279"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderArtifact.variant 5417e604dc9a291bef5ce0128157a14f393d2d27376732209a1aca728b108072 -->

```csharp
public InnoEngine.Rendering.RenderShaderVariant InnoEngine.Rendering.RenderShaderArtifact.variant { get; }
```

Gets the canonical static keyword selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifact.cs#L93).
