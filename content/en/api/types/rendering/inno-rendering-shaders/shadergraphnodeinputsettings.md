---
title: "ShaderGraphNodeInputSettings"
description: "Reference for ShaderGraphNodeInputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.59a48c73fb3668bd
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeInputSettings`

This reference describes `ShaderGraphNodeInputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5b2d886f58def2da) | Method |
| [`ports`](#api-13989e8e27d56283) | Property |

## Type declaration

<a id="api-59a48c73fb3668bd"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeInputSettings 8f70cf9c7cc0c5c121911897c16f86387603c95025f81e22a90b8d8ebab5033f -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeInputSettings : Inno.Core.Serialization.ISerializable
```

Stores values supplied by callers to a graph-authored node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L96).

## `#ctor`

<a id="api-5b2d886f58def2da"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInputSettings.#ctor ab81a116999bb01d8a48271ad1d3bc8904fe5314c905c783726a06d88e39624b -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeInputSettings.ShaderGraphNodeInputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L96).

## `ports`

<a id="api-13989e8e27d56283"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInputSettings.ports 2ad2e9a87182cf631857f4f28fe5f1469465720f72d9168baad6a47fa3e8937d -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodePortDefinition[] Inno.Rendering.Shaders.ShaderGraphNodeInputSettings.ports { get; set; }
```

Gets or sets values supplied by callers and exposed as outputs inside the node graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L101).
