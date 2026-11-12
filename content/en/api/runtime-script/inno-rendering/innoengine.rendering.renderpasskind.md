---
title: "RenderPassKind"
description: "Reference for RenderPassKind in Inno.Rendering."
uid: api.inno.rendering.runtime-script.a96557103211848f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPassKind`

This reference describes `RenderPassKind` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-bb1f4e5bdde0383c) | Field |
| [`Copy`](#api-92ab5fd3936ea002) | Field |
| [`Raster`](#api-1f79ad3ba5a57185) | Field |

## Type declaration

<a id="api-a96557103211848f"></a>
<!-- api: T:InnoEngine.Rendering.RenderPassKind 18a170e69ae7989df57b3d44d5967a1fe728dd6de442b20a8be9169a1ba48bc0 -->

```csharp
public enum InnoEngine.Rendering.RenderPassKind : int
```

Distinguishes pass command domains for validation and backend execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L41).

## `Compute`

<a id="api-bb1f4e5bdde0383c"></a>
<!-- api: F:InnoEngine.Rendering.RenderPassKind.Compute 23cf2363c794ad9e391bdb126fc44513d7a9f959d9db98eb796e2b49e73c9723 -->

```csharp
InnoEngine.Rendering.RenderPassKind.Compute = 1
```

Compute dispatch commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L50).

## `Copy`

<a id="api-92ab5fd3936ea002"></a>
<!-- api: F:InnoEngine.Rendering.RenderPassKind.Copy 85158cc001a9d655349702bbb9cc3b7c3949d21804a576574c746444dc660ebc -->

```csharp
InnoEngine.Rendering.RenderPassKind.Copy = 2
```

Resource copy commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L54).

## `Raster`

<a id="api-1f79ad3ba5a57185"></a>
<!-- api: F:InnoEngine.Rendering.RenderPassKind.Raster b76070fd66398f842d85ac16a1d8ce0283a49cbef2ca0b36eb5e3759e60809ec -->

```csharp
InnoEngine.Rendering.RenderPassKind.Raster = 0
```

Raster draw commands with optional attachments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L46).
