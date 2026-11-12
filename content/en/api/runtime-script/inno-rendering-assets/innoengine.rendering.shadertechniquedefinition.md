---
title: "ShaderTechniqueDefinition"
description: "Reference for ShaderTechniqueDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.08e881177cdf04c3
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderTechniqueDefinition`

This reference describes `ShaderTechniqueDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-197b6fce8dce94c5) | Method |
| [`contract`](#api-b046a8f39a0beebd) | Property |
| [`id`](#api-4a8b6944428d9ecd) | Property |
| [`passes`](#api-e78cc2c82248dd65) | Property |
| [`requiredFeatures`](#api-57aab76b06ed7d0d) | Property |

## Type declaration

<a id="api-08e881177cdf04c3"></a>
<!-- api: T:InnoEngine.Rendering.ShaderTechniqueDefinition 5543f3119da24cf4e27ff3a3d79d7b598baecab255cdd8d0847d1a3480732d84 -->

```csharp
public struct InnoEngine.Rendering.ShaderTechniqueDefinition
```

Declares one contract-compatible pass mapping selectable by materials.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L17).

## `#ctor`

<a id="api-197b6fce8dce94c5"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniqueDefinition.#ctor(InnoEngine.Rendering.ShaderTechniqueId,InnoEngine.Rendering.ShaderContractId,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderTechniquePass},InnoEngine.Rendering.GraphicsCapability) 05df4fd3b0b57d1d6d90f3053c1993dfe4f60bb27f48def30bb1464ac79ba2d9 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueDefinition.ShaderTechniqueDefinition(InnoEngine.Rendering.ShaderTechniqueId id, InnoEngine.Rendering.ShaderContractId contract, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderTechniquePass> passes, InnoEngine.Rendering.GraphicsCapability requiredFeatures = InnoEngine.Rendering.GraphicsCapability.None)
```

Creates a shader technique definition.

**Parameter `id`:** Stable technique identifier.

**Parameter `contract`:** Open rendering-provider contract.

**Parameter `passes`:** Role-to-pass mappings.

**Parameter `requiredFeatures`:** Capabilities required by the complete technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L34).

## `contract`

<a id="api-b046a8f39a0beebd"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueDefinition.contract 77f9696902e0526c4c810665b39df8570da0322f309ae41a7952fc1a57f9790c -->

```csharp
public InnoEngine.Rendering.ShaderContractId InnoEngine.Rendering.ShaderTechniqueDefinition.contract { get; set; }
```

Gets or sets the open rendering-provider contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L59).

## `id`

<a id="api-4a8b6944428d9ecd"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueDefinition.id 60347a328d1dac76a63912d0730c2232367825ee7e8f1efca125ce57e9fc4f92 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueId InnoEngine.Rendering.ShaderTechniqueDefinition.id { get; set; }
```

Gets or sets the stable technique identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L54).

## `passes`

<a id="api-e78cc2c82248dd65"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueDefinition.passes 29d619c58959c645cd635d4ccf2dab6f4a167989a0c7a28e05eba379b65f0f84 -->

```csharp
public InnoEngine.Rendering.ShaderTechniquePass[] InnoEngine.Rendering.ShaderTechniqueDefinition.passes { get; set; }
```

Gets or sets role-to-pass mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L64).

## `requiredFeatures`

<a id="api-57aab76b06ed7d0d"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniqueDefinition.requiredFeatures 9ad26564d64fb68fcc82533d78b092b64671beb822b9c687c05fa10762d3df74 -->

```csharp
public InnoEngine.Rendering.GraphicsCapability InnoEngine.Rendering.ShaderTechniqueDefinition.requiredFeatures { get; set; }
```

Gets or sets capabilities required by the complete technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L69).
