---
title: "ShaderGraphStageSettings"
description: "Reference for ShaderGraphStageSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.9c19dcc85f72b7c2
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphStageSettings`

This reference describes `ShaderGraphStageSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b8c0d9e263bd02d9) | Method |
| [`outputs`](#api-96d199bdb4f787e1) | Property |
| [`stage`](#api-9d338cb7fdcffb92) | Property |
| [`threadsX`](#api-f8b70c33d67039e2) | Property |
| [`threadsY`](#api-bd9002e61694703a) | Property |
| [`threadsZ`](#api-f7385e3098dc3606) | Property |

## Type declaration

<a id="api-9c19dcc85f72b7c2"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphStageSettings 8507d3987e20d26c8c2855a599f88e54814c360bb29bb5209f02dd2d23ec7950 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphStageSettings : Inno.Core.Serialization.ISerializable
```

Stores one stage's explicit output interface and compute dimensions inside its output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L235).

## `#ctor`

<a id="api-b8c0d9e263bd02d9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphStageSettings.#ctor 2ff7adc51b65bffc3cd28746fcd4221e5311ff97dc123ca14db507713cb1f932 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphStageSettings.ShaderGraphStageSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L235).

## `outputs`

<a id="api-96d199bdb4f787e1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphStageSettings.outputs 301bf4bfa5dca8a85d2707f8b3450f98c60fe37bc93edeca8294addba1e8ff65 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphOutput[] Inno.Rendering.Shaders.ShaderGraphStageSettings.outputs { get; set; }
```

Gets or sets output ports and their GPU destinations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L244).

## `stage`

<a id="api-9d338cb7fdcffb92"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphStageSettings.stage 88b1de2d2972cd8c095c0da360c47741bc3685580b85d8755b711d6a288851e1 -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Shaders.ShaderGraphStageSettings.stage { get; set; }
```

Gets or sets the programmable stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L240).

## `threadsX`

<a id="api-f8b70c33d67039e2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsX 4605358706c62fd45099951404c48178e8634994a9dffe87f999858f5f2b7206 -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsX { get; set; }
```

Gets or sets compute workgroup width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L248).

## `threadsY`

<a id="api-bd9002e61694703a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsY 92f7eb0da3a7cdcecaeaa0c0f0f0d31ca0469313c022b62b2e799165b3875061 -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsY { get; set; }
```

Gets or sets compute workgroup height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L252).

## `threadsZ`

<a id="api-f7385e3098dc3606"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsZ 5e5be620f87c08045090a6a61691884b70f4a627345cbb891940b8a5cac001af -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphStageSettings.threadsZ { get; set; }
```

Gets or sets compute workgroup depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L256).
