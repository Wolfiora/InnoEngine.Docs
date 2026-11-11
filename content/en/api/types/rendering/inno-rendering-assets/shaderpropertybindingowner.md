---
title: "ShaderPropertyBindingOwner"
description: "Reference for ShaderPropertyBindingOwner in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.150c36b4a1aa7ce9
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderPropertyBindingOwner`

This reference describes `ShaderPropertyBindingOwner` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Material`](#api-eab982b77c16780e) | Field |
| [`RenderPass`](#api-9cfdc0b0d59d04c0) | Field |

## Type declaration

<a id="api-150c36b4a1aa7ce9"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderPropertyBindingOwner e248a59ad9864d606f6ad63e471523a19f9cca281b290cffc1dba3a87645b5ca -->

```csharp
public enum Inno.Rendering.Assets.ShaderPropertyBindingOwner : int
```

Identifies which layer supplies a declared shader property's value for each dispatch or draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L17).

## `Material`

<a id="api-eab982b77c16780e"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderPropertyBindingOwner.Material af5103a8c5907cb41ea8ce50865f1b9b43a0217e6680391c02f84bca149db00c -->

```csharp
Inno.Rendering.Assets.ShaderPropertyBindingOwner.Material = 0
```

The material and its optional property block supply the value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L22).

## `RenderPass`

<a id="api-9cfdc0b0d59d04c0"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderPropertyBindingOwner.RenderPass 81b6ef28e8f57f957cc778f5aef7e94a278d5c83c6a818ca646a04ee40aa85c5 -->

```csharp
Inno.Rendering.Assets.ShaderPropertyBindingOwner.RenderPass = 1
```

The render pass supplies the value directly through its command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyBindingOwner.cs#L26).
