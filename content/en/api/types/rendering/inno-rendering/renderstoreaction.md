---
title: "RenderStoreAction"
description: "Reference for RenderStoreAction in Inno.Rendering."
uid: api.inno.rendering.07a43f1641a57ac8
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStoreAction`

This reference describes `RenderStoreAction` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Discard`](#api-9668cbeae2afa85f) | Field |
| [`Store`](#api-e6f55a7b73e52cbc) | Field |

## Type declaration

<a id="api-07a43f1641a57ac8"></a>
<!-- api: T:Inno.Rendering.RenderStoreAction 759d5fae5fd2e81414d8ba8601aaaf7466aa3a7ecc3eac7840e440bdaf4ef3d9 -->

```csharp
public enum Inno.Rendering.RenderStoreAction : int
```

Controls whether attachment contents remain valid after a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L94).

## `Discard`

<a id="api-9668cbeae2afa85f"></a>
<!-- api: F:Inno.Rendering.RenderStoreAction.Discard 139424302a31ec2d7b3c7b92049267134999e11ecc512a29d0f397dbea76ceac -->

```csharp
Inno.Rendering.RenderStoreAction.Discard = 1
```

Allows the backend to discard rendered contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L103).

## `Store`

<a id="api-e6f55a7b73e52cbc"></a>
<!-- api: F:Inno.Rendering.RenderStoreAction.Store c88bab6549a8e92ef757e69f07df7f875b317fbd7ea0aa12a57c71d5643ca7d6 -->

```csharp
Inno.Rendering.RenderStoreAction.Store = 0
```

Preserves rendered contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L99).
