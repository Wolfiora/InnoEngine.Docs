---
title: "ShaderGraphNodeOutputSettings"
description: "Reference for ShaderGraphNodeOutputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.25c88d63b7a55dbe
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeOutputSettings`

This reference describes `ShaderGraphNodeOutputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b673e20a30c4021c) | Method |
| [`ports`](#api-7666d6ea4ca6d88b) | Property |

## Type declaration

<a id="api-25c88d63b7a55dbe"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings 217c60a7de2293120a4fd4a22b58327f7d2d55153ba86162e0709c8971175de6 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings : Inno.Core.Serialization.ISerializable
```

Stores values returned by a graph-authored function node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L107).

## `#ctor`

<a id="api-b673e20a30c4021c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings.#ctor 8ccd09d0972f8f624c676ff7f79e36b04a41aaff939e4c9309cdba718d2da498 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings.ShaderGraphNodeOutputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L107).

## `ports`

<a id="api-7666d6ea4ca6d88b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings.ports 94ad3e548145559008e97eaec39267b348dfd426a9aecd0af3dd6cc7b598daf0 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodePortDefinition[] Inno.Rendering.Shaders.ShaderGraphNodeOutputSettings.ports { get; set; }
```

Gets or sets values collected inside the node graph and exposed as outputs to callers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L112).
