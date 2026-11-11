---
title: "ShaderGraphNodePortDefinition"
description: "Reference for ShaderGraphNodePortDefinition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.64587fed60c95114
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodePortDefinition`

This reference describes `ShaderGraphNodePortDefinition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e620d339d0b6674f) | Method |
| [`id`](#api-ffcd70686807958f) | Property |
| [`required`](#api-c6869fc56b54e21b) | Property |
| [`type`](#api-0826d89f2c26d000) | Property |

## Type declaration

<a id="api-64587fed60c95114"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodePortDefinition b8a10e345dac11db5f6ccce43013b9d7562524efed76dd65b48960b38eb598b7 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodePortDefinition : Inno.Core.Serialization.ISerializable
```

Declares one stable, typed port on a graph-authored node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L74).

## `#ctor`

<a id="api-e620d339d0b6674f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.#ctor de8d4041e1194a5542faaf9babfb61c89d564e00ff63edb76cc17d3639210711 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.ShaderGraphNodePortDefinition()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L74).

## `id`

<a id="api-ffcd70686807958f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.id 5e3fe9154c49f87ba7470bffdfff3a155afd72a5de22a7593c292eb9ca0b2c54 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.id { get; set; }
```

Gets or sets the stable node-local port identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L79).

## `required`

<a id="api-c6869fc56b54e21b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.required ad8da5c5c181d32c6019ad0be944326f815fb08f49d5bf8e8bd2ecfbc07755fe -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.required { get; set; }
```

Gets or sets whether callers must connect the input instead of using an explicit/default zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L87).

## `type`

<a id="api-0826d89f2c26d000"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.type 0257e3637744e5e418255f3d28a24fd8a0f302f7a1262662e85685b0597fbef5 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType Inno.Rendering.Shaders.ShaderGraphNodePortDefinition.type { get; set; }
```

Gets or sets the complete backend-neutral value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L83).
