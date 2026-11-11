---
title: "RenderFeatureConfiguration"
description: "Reference for RenderFeatureConfiguration in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.10a65b652e493154
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderFeatureConfiguration`

This reference describes `RenderFeatureConfiguration` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-892032b7a806ed61) | Method |
| [`#ctor`](#api-ba303c00443c79ad) | Method |
| [`enabled`](#api-f21b4ccb370793e2) | Property |
| [`featureTypeId`](#api-705c4a625ae909cb) | Property |
| [`state`](#api-9ea415188e3be73e) | Property |

## Type declaration

<a id="api-10a65b652e493154"></a>
<!-- api: T:Inno.Rendering.Assets.RenderFeatureConfiguration a7a61e8145fce74b794d8147e07a51cf42730279f0173571399709f3501ea5b2 -->

```csharp
public struct Inno.Rendering.Assets.RenderFeatureConfiguration
```

Stores one ordered feature extension selection using only stable data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L16).

## `#ctor`

<a id="api-892032b7a806ed61"></a>
<!-- api: M:Inno.Rendering.Assets.RenderFeatureConfiguration.#ctor 3a20f4bb2f192ec02de993902d8cea771dba6e666d966a13f1e60b322dd9e0e0 -->

```csharp
public Inno.Rendering.Assets.RenderFeatureConfiguration.RenderFeatureConfiguration()
```

Creates an empty feature configuration for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L21).

## `#ctor`

<a id="api-ba303c00443c79ad"></a>
<!-- api: M:Inno.Rendering.Assets.RenderFeatureConfiguration.#ctor(System.String,System.Nullable{Inno.Rendering.Assets.SerializedRenderExtensionState},System.Boolean) 2e5f4bbccfdcdfb8bf991840fbd9b0c1cb29abff59991fe9a266ccd4a5f692f9 -->

```csharp
public Inno.Rendering.Assets.RenderFeatureConfiguration.RenderFeatureConfiguration(string featureTypeId, Inno.Rendering.Assets.SerializedRenderExtensionState? state = null, bool enabled = true)
```

Creates a feature configuration.

**Parameter `featureTypeId`:** Globally stable feature extension identifier.

**Parameter `state`:** Optional reload-safe settings state.

**Parameter `enabled`:** Whether the feature participates in graph building.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L37).

## `enabled`

<a id="api-f21b4ccb370793e2"></a>
<!-- api: P:Inno.Rendering.Assets.RenderFeatureConfiguration.enabled 2076772094d3b96a0c2e39fbc0cba095d9d7c4106c7b0b631b823e45555b0570 -->

```csharp
public bool Inno.Rendering.Assets.RenderFeatureConfiguration.enabled { get; set; }
```

Gets or sets whether the feature participates in graph building.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L64).

## `featureTypeId`

<a id="api-705c4a625ae909cb"></a>
<!-- api: P:Inno.Rendering.Assets.RenderFeatureConfiguration.featureTypeId 4173e3a6ae4e220fc2d8f6b349db948262b3e9ad6f05995c8b72dca56ec77cc5 -->

```csharp
public string Inno.Rendering.Assets.RenderFeatureConfiguration.featureTypeId { get; set; }
```

Gets or sets the stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L52).

## `state`

<a id="api-9ea415188e3be73e"></a>
<!-- api: P:Inno.Rendering.Assets.RenderFeatureConfiguration.state 3994dd96169b8510d0792bd4bc68ca71314d7e90527f01ebe039df073c61759f -->

```csharp
public Inno.Rendering.Assets.SerializedRenderExtensionState Inno.Rendering.Assets.RenderFeatureConfiguration.state { get; set; }
```

Gets or sets reload-safe settings state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L58).
