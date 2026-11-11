---
title: "ShaderStage"
description: "Reference for ShaderStage in Inno.Rendering."
uid: api.inno.rendering.d62d08735d03f574
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderStage`

This reference describes `ShaderStage` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-67b34ba276ddf80b) | Field |
| [`Fragment`](#api-7f10c9acd52ac057) | Field |
| [`None`](#api-fab8eec2ef26d8c3) | Field |
| [`Vertex`](#api-a74253767c65ca18) | Field |

## Type declaration

<a id="api-d62d08735d03f574"></a>
<!-- api: T:Inno.Rendering.ShaderStage b20a744e112f4f3c246363264e116495430a6add71ea02721222e8029d79ad12 -->

```csharp
public enum Inno.Rendering.ShaderStage : int
```

Identifies a programmable shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L15).

## `Compute`

<a id="api-67b34ba276ddf80b"></a>
<!-- api: F:Inno.Rendering.ShaderStage.Compute 97da6674d1267b5f3d7ca1007b1be71fecb23c86a144f510a79a8bf8f45d1673 -->

```csharp
Inno.Rendering.ShaderStage.Compute = 4
```

Compute shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L32).

## `Fragment`

<a id="api-7f10c9acd52ac057"></a>
<!-- api: F:Inno.Rendering.ShaderStage.Fragment 37c77c2df6af8a06ea49b7cd357ce3e6354ad8b5e95efb8dda3ceb9d64436266 -->

```csharp
Inno.Rendering.ShaderStage.Fragment = 2
```

Fragment shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L28).

## `None`

<a id="api-fab8eec2ef26d8c3"></a>
<!-- api: F:Inno.Rendering.ShaderStage.None f850e7c497a0652ae40c0f5dc27d56e7c67af0cf37d68a20882aee5335eb188c -->

```csharp
Inno.Rendering.ShaderStage.None = 0
```

No shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L20).

## `Vertex`

<a id="api-a74253767c65ca18"></a>
<!-- api: F:Inno.Rendering.ShaderStage.Vertex dc72d83a594d8c6d42a9b117da704fcdff36f46c64eabf0377bf7f9461bdabce -->

```csharp
Inno.Rendering.ShaderStage.Vertex = 1
```

Vertex shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L24).
