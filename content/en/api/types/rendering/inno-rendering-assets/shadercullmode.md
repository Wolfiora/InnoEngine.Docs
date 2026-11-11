---
title: "ShaderCullMode"
description: "Reference for ShaderCullMode in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c29fc9a07d17df6c
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderCullMode`

This reference describes `ShaderCullMode` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Back`](#api-a0f339dc89c01765) | Field |
| [`Front`](#api-843de420f6fcb2b2) | Field |
| [`None`](#api-0dec49832618a235) | Field |

## Type declaration

<a id="api-c29fc9a07d17df6c"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderCullMode 3920f55ac70394f2823e114f54a0a9b44621ff8ba0db4266840f6d639ed3ac63 -->

```csharp
public enum Inno.Rendering.Assets.ShaderCullMode : int
```

Selects the triangle face rejected by a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L17).

## `Back`

<a id="api-a0f339dc89c01765"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCullMode.Back 021b946ee4048ac12afd8cafa370ac33c65cfd0ac3a1252f4fde51df5f0d483f -->

```csharp
Inno.Rendering.Assets.ShaderCullMode.Back = 2
```

Rejects back-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L30).

## `Front`

<a id="api-843de420f6fcb2b2"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCullMode.Front 3e5fe608ceb47f294708c0027c4e62b1c7c55692ec83c52ebca98af6f5c31e5e -->

```csharp
Inno.Rendering.Assets.ShaderCullMode.Front = 1
```

Rejects front-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L26).

## `None`

<a id="api-0dec49832618a235"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCullMode.None 4e9273ea2f1f79285a267badf3a0d190a2fd1708ea44748910c06fd2e6ab6dd0 -->

```csharp
Inno.Rendering.Assets.ShaderCullMode.None = 0
```

Does not reject either face orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L22).
