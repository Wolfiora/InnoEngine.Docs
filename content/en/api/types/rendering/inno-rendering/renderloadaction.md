---
title: "RenderLoadAction"
description: "Reference for RenderLoadAction in Inno.Rendering."
uid: api.inno.rendering.8bf224b7d371be04
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderLoadAction`

This reference describes `RenderLoadAction` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Clear`](#api-fb8761c66cc876eb) | Field |
| [`Discard`](#api-aa5539ec12f74982) | Field |
| [`Load`](#api-7b5e126b986fbf0e) | Field |

## Type declaration

<a id="api-8bf224b7d371be04"></a>
<!-- api: T:Inno.Rendering.RenderLoadAction 3e91f9e0d441743a444e9f58f16272a7e7ddd1639e53fe2483ddf26552677ec0 -->

```csharp
public enum Inno.Rendering.RenderLoadAction : int
```

Controls how existing attachment contents enter a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L75).

## `Clear`

<a id="api-fb8761c66cc876eb"></a>
<!-- api: F:Inno.Rendering.RenderLoadAction.Clear 742fb95fca71036fefdb981878e27b3cd361b1d5357658f48747d710b88f8013 -->

```csharp
Inno.Rendering.RenderLoadAction.Clear = 1
```

Clears the attachment before rendering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L84).

## `Discard`

<a id="api-aa5539ec12f74982"></a>
<!-- api: F:Inno.Rendering.RenderLoadAction.Discard daeafa6d86b50c23c9637d24b37569f3cae2e9d0c998d78eaf72ea499cc91fda -->

```csharp
Inno.Rendering.RenderLoadAction.Discard = 2
```

Does not require prior attachment contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L88).

## `Load`

<a id="api-7b5e126b986fbf0e"></a>
<!-- api: F:Inno.Rendering.RenderLoadAction.Load e5ecdc950d43cb9947cf3cdebbc5959889006ba25b745aa9d417d0ab53553e96 -->

```csharp
Inno.Rendering.RenderLoadAction.Load = 0
```

Preserves prior attachment contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L80).
