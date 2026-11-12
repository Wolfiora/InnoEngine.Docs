---
title: "ShaderPropertyBindingOwner"
description: "Reference for ShaderPropertyBindingOwner in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.3356ccc23b143153
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderPropertyBindingOwner`

This reference describes `ShaderPropertyBindingOwner` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Material`](#api-0303e8bb8977a86f) | Field |
| [`RenderPass`](#api-dafeabdd7bb195a3) | Field |

## Type declaration

<a id="api-3356ccc23b143153"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPropertyBindingOwner acad8c868eaeaa44a898c6daa2a18482b245ca57bbe5ec23c7039e7d7a4a65ef -->

```csharp
public enum InnoEngine.Rendering.ShaderPropertyBindingOwner : int
```

Identifies which layer supplies a declared shader property's value for each dispatch or draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L17).

## `Material`

<a id="api-0303e8bb8977a86f"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingOwner.Material 8328d8d1d1a4e4d683e1f68b3351d3acab54244248da9c3a788342b9f645bc87 -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingOwner.Material = 0
```

The material and its optional property block supply the value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L22).

## `RenderPass`

<a id="api-dafeabdd7bb195a3"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingOwner.RenderPass e6dc6ee6b9f3a69674c479c6f67247cd97144f9b61595a9ff1b56a277eb27dd0 -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingOwner.RenderPass = 1
```

The render pass supplies the value directly through its command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L26).
