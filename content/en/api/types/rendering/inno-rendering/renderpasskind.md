---
title: "RenderPassKind"
description: "Reference for RenderPassKind in Inno.Rendering."
uid: api.inno.rendering.1177b6dd70c2d4ed
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPassKind`

This reference describes `RenderPassKind` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-d321015fd36de0d8) | Field |
| [`Copy`](#api-f5f08cb57d9d36d7) | Field |
| [`Raster`](#api-0fba7060cb455c9a) | Field |

## Type declaration

<a id="api-1177b6dd70c2d4ed"></a>
<!-- api: T:Inno.Rendering.RenderPassKind 627f010a9a6f062e606d02f2918d5be039a9121594ab9d9dc6b4f4695da61936 -->

```csharp
public enum Inno.Rendering.RenderPassKind : int
```

Distinguishes pass command domains for validation and backend execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L41).

## `Compute`

<a id="api-d321015fd36de0d8"></a>
<!-- api: F:Inno.Rendering.RenderPassKind.Compute ca73921dcae88b55c76162c5fb813f5a8d22d0b0fd4f3e2a304b7e5fd228a14e -->

```csharp
Inno.Rendering.RenderPassKind.Compute = 1
```

Compute dispatch commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L50).

## `Copy`

<a id="api-f5f08cb57d9d36d7"></a>
<!-- api: F:Inno.Rendering.RenderPassKind.Copy 64f50e87b6d0e7df54b065ac23815504685797608eb7320353044302975ba1fb -->

```csharp
Inno.Rendering.RenderPassKind.Copy = 2
```

Resource copy commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L54).

## `Raster`

<a id="api-0fba7060cb455c9a"></a>
<!-- api: F:Inno.Rendering.RenderPassKind.Raster 0aa528fd09e57e85178e9e945fb0ecd062ea23c8eb078341dc23c8824cc65003 -->

```csharp
Inno.Rendering.RenderPassKind.Raster = 0
```

Raster draw commands with optional attachments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L46).
