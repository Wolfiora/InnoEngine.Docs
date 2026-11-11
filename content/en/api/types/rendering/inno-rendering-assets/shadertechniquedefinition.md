---
title: "ShaderTechniqueDefinition"
description: "Reference for ShaderTechniqueDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.89591603aa89f766
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderTechniqueDefinition`

This reference describes `ShaderTechniqueDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-358d7f621a6d60dc) | Method |
| [`contract`](#api-a66c885cd1e3191a) | Property |
| [`id`](#api-ea0449b7a03823b7) | Property |
| [`passes`](#api-596743001f089ba0) | Property |
| [`requiredFeatures`](#api-1d8c33351b6782b9) | Property |

## Type declaration

<a id="api-89591603aa89f766"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderTechniqueDefinition 5ccf42badcb03add5a48af7a5afe1de1bc715ecaa76df3eaf080db353d925417 -->

```csharp
public struct Inno.Rendering.Assets.ShaderTechniqueDefinition
```

Declares one contract-compatible pass mapping selectable by materials.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L17).

## `#ctor`

<a id="api-358d7f621a6d60dc"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueDefinition.#ctor(Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderContractId,System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderTechniquePass},Inno.Rendering.GraphicsCapability) 305ff17ac5399ee06108097877dbd17f0411a4f741121342bdb5a7e8d3a2fdb1 -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueDefinition.ShaderTechniqueDefinition(Inno.Rendering.Assets.ShaderTechniqueId id, Inno.Rendering.Assets.ShaderContractId contract, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderTechniquePass> passes, Inno.Rendering.GraphicsCapability requiredFeatures = Inno.Rendering.GraphicsCapability.None)
```

Creates a shader technique definition.

**Parameter `id`:** Stable technique identifier.

**Parameter `contract`:** Open rendering-provider contract.

**Parameter `passes`:** Role-to-pass mappings.

**Parameter `requiredFeatures`:** Capabilities required by the complete technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L34).

## `contract`

<a id="api-a66c885cd1e3191a"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueDefinition.contract 2a6c58f5a104da4dbedb1bbea12bed29d15677ff6e30402961287357000d9d8d -->

```csharp
public Inno.Rendering.Assets.ShaderContractId Inno.Rendering.Assets.ShaderTechniqueDefinition.contract { get; set; }
```

Gets or sets the open rendering-provider contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L59).

## `id`

<a id="api-ea0449b7a03823b7"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueDefinition.id 2910ce8809bbb8c5845e7a1fa0a58fdf5545634f4eabeff956c119b5144bebcb -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueId Inno.Rendering.Assets.ShaderTechniqueDefinition.id { get; set; }
```

Gets or sets the stable technique identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L54).

## `passes`

<a id="api-596743001f089ba0"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueDefinition.passes 0b6a916f36dd9a20390207e1bf9a9ce6f1f524bfc85e267e45ca7676a6dbfa46 -->

```csharp
public Inno.Rendering.Assets.ShaderTechniquePass[] Inno.Rendering.Assets.ShaderTechniqueDefinition.passes { get; set; }
```

Gets or sets role-to-pass mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L64).

## `requiredFeatures`

<a id="api-1d8c33351b6782b9"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueDefinition.requiredFeatures 3de6e8d9b5ab83b9e8505a7588ab8c1619420c86aa4dea0d0ad0d82b3af9dac2 -->

```csharp
public Inno.Rendering.GraphicsCapability Inno.Rendering.Assets.ShaderTechniqueDefinition.requiredFeatures { get; set; }
```

Gets or sets capabilities required by the complete technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueDefinition.cs#L69).
