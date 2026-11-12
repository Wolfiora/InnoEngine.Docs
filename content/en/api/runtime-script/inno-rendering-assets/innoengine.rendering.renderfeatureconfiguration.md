---
title: "RenderFeatureConfiguration"
description: "Reference for RenderFeatureConfiguration in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.e4cda819c70b7e83
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderFeatureConfiguration`

This reference describes `RenderFeatureConfiguration` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4c499443b9b4bf2d) | Method |
| [`enabled`](#api-7a797d0388a371df) | Property |
| [`featureTypeId`](#api-19b12b95ce8983b5) | Property |
| [`state`](#api-11c53248e758ec3d) | Property |

## Type declaration

<a id="api-e4cda819c70b7e83"></a>
<!-- api: T:InnoEngine.Rendering.RenderFeatureConfiguration 978095a5b2a231a81df4fc57360a9652cb9b3eeebea54a05853d1898e87af4c8 -->

```csharp
public struct InnoEngine.Rendering.RenderFeatureConfiguration
```

Stores one ordered feature extension selection using only stable data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L16).

## `#ctor`

<a id="api-4c499443b9b4bf2d"></a>
<!-- api: M:InnoEngine.Rendering.RenderFeatureConfiguration.#ctor(System.String,System.Nullable{InnoEngine.Rendering.SerializedRenderExtensionState},System.Boolean) b806ab98aea3ccfb13a8005d924712f44bb4a6157d0cd9abc98f919e26e21329 -->

```csharp
public InnoEngine.Rendering.RenderFeatureConfiguration.RenderFeatureConfiguration(string featureTypeId, InnoEngine.Rendering.SerializedRenderExtensionState? state = null, bool enabled = true)
```

Creates a feature configuration.

**Parameter `featureTypeId`:** Globally stable feature extension identifier.

**Parameter `state`:** Optional reload-safe settings state.

**Parameter `enabled`:** Whether the feature participates in graph building.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L37).

## `enabled`

<a id="api-7a797d0388a371df"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureConfiguration.enabled 71cdb5c3dfd5ed27581c4cf979ca5894e7946b899b16fa5f00a2f7283c8488c1 -->

```csharp
public bool InnoEngine.Rendering.RenderFeatureConfiguration.enabled { get; set; }
```

Gets or sets whether the feature participates in graph building.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L64).

## `featureTypeId`

<a id="api-19b12b95ce8983b5"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureConfiguration.featureTypeId 0d391a28a4f80c602faecdc63f18949b77a6547d96f7691f0570d859b7837323 -->

```csharp
public string InnoEngine.Rendering.RenderFeatureConfiguration.featureTypeId { get; set; }
```

Gets or sets the stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L52).

## `state`

<a id="api-11c53248e758ec3d"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureConfiguration.state 7aba8d1040f035dea8737c982aa37f88246042dd18ab5cc1057eabc171c7de7d -->

```csharp
public InnoEngine.Rendering.SerializedRenderExtensionState InnoEngine.Rendering.RenderFeatureConfiguration.state { get; set; }
```

Gets or sets reload-safe settings state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderFeatureConfiguration.cs#L58).
