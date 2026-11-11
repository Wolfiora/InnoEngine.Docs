---
title: "ShaderTargetAttribute"
description: "Reference for ShaderTargetAttribute in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.858fa5689a204637
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderTargetAttribute`

This reference describes `ShaderTargetAttribute` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8b5d43fc19b2c1cf) | Method |
| [`id`](#api-1f26752b9d6c71a0) | Property |

## Type declaration

<a id="api-858fa5689a204637"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderTargetAttribute 673f53b0e8947bb11302e6088f1e5c9dc6de28b5cb921be75301d498b381ca82 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderTargetAttribute : System.Attribute
```

Declares the immutable identity used to select a Shader Target from an authored graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L12).

## `#ctor`

<a id="api-8b5d43fc19b2c1cf"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTargetAttribute.#ctor(System.String) 15af4849e59d95369459d8298edd6a458fec3efd12b2feec8f4aa62b4b607cef -->

```csharp
public Inno.Rendering.Shaders.ShaderTargetAttribute.ShaderTargetAttribute(string id)
```

Creates target discovery metadata.

**Parameter `id`:** Stable target identity persisted by Shader assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L20).

## `id`

<a id="api-1f26752b9d6c71a0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetAttribute.id b77c424e763747617842e5509f01d65a18a50da700682d6183c9402146dd910b -->

```csharp
public string Inno.Rendering.Shaders.ShaderTargetAttribute.id { get; }
```

Gets the stable target identity persisted by Shader assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L28).
