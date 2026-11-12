---
title: "RenderPipelineExtensionAttribute"
description: "Reference for RenderPipelineExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.f345a03363fa3ab7
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderPipelineExtensionAttribute`

This reference describes `RenderPipelineExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eeb67ebf66e43dd4) | Method |
| [`id`](#api-d077fc41bdf66da0) | Property |

## Type declaration

<a id="api-f345a03363fa3ab7"></a>
<!-- api: T:InnoEngine.Rendering.RenderPipelineExtensionAttribute 636a8e684d6bb8be3504e8fc555df2ed5ab30c1a4476158990ed6f6adade3568 -->

```csharp
public sealed class InnoEngine.Rendering.RenderPipelineExtensionAttribute : System.Attribute
```

Marks a reloadable render pipeline implementation with a stable extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-eeb67ebf66e43dd4"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineExtensionAttribute.#ctor(System.String) 98fd115cdf15cd65bf52e3c04d3ec0aa7c27e5f562c06810d05fba8bbfea41f5 -->

```csharp
public InnoEngine.Rendering.RenderPipelineExtensionAttribute.RenderPipelineExtensionAttribute(string id)
```

Creates a pipeline extension declaration.

**Parameter `id`:** Globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L24).

## `id`

<a id="api-d077fc41bdf66da0"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineExtensionAttribute.id d5223bc2061df0244cc432ad573a69f4c181360980618e0b35f2157cc6286a5a -->

```csharp
public string InnoEngine.Rendering.RenderPipelineExtensionAttribute.id { get; }
```

Gets the globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L33).
