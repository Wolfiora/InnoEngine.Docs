---
title: "ShaderGraphTemplates"
description: "Reference for ShaderGraphTemplates in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2fc1f27a986e3029
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphTemplates`

This reference describes `ShaderGraphTemplates` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateRaster`](#api-b9e90f846ab5c161) | Method |

## Type declaration

<a id="api-2fc1f27a986e3029"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphTemplates d23a3b9de8fba18a66dc5aba126eaaf619f360a62f0cc95dd813190f0421ee91 -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphTemplates
```

Provides small backend-neutral starting documents composed exclusively of ordinary graph nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphTemplates.cs#L12).

## `CreateRaster`

<a id="api-b9e90f846ab5c161"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) d21653e8a4acebc2a504272d5eac6379caef98191547d85be85565bb960a0440 -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates a raster graph accepting clip-space XY positions and an exposed RGBA color.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context for material defaults.

**Returns:** A valid two-stage document; pipelines may replace its vertex transform or provide their own templates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphTemplates.cs#L26).
