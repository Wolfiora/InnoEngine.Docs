---
title: "RenderSamplerFilter"
description: "Reference for RenderSamplerFilter in Inno.Rendering."
uid: api.inno.rendering.runtime-script.1c092e3f2384c46a
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderSamplerFilter`

This reference describes `RenderSamplerFilter` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Anisotropic`](#api-5711e404b8e8d679) | Field |
| [`Linear`](#api-3bbba816c8a85d53) | Field |
| [`Point`](#api-434bf00ff12cf487) | Field |

## Type declaration

<a id="api-1c092e3f2384c46a"></a>
<!-- api: T:InnoEngine.Rendering.RenderSamplerFilter 5b131bdc6f753a57a9d0a9dcc8df864f65bdf2fa936325b15d4486a72b9afd9f -->

```csharp
public enum InnoEngine.Rendering.RenderSamplerFilter : int
```

Selects texture filtering independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L10).

## `Anisotropic`

<a id="api-5711e404b8e8d679"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerFilter.Anisotropic c9fbb3ffb12e64d6eb455cc575459cc7902859eb743ee42ad93b974a60be3f20 -->

```csharp
InnoEngine.Rendering.RenderSamplerFilter.Anisotropic = 2
```

Uses anisotropic filtering when supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L23).

## `Linear`

<a id="api-3bbba816c8a85d53"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerFilter.Linear 18204854785d83e33953d0e1c43c8c8f448fd4f88d7cd932ca71d89ac3b076a2 -->

```csharp
InnoEngine.Rendering.RenderSamplerFilter.Linear = 1
```

Uses linear filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L19).

## `Point`

<a id="api-434bf00ff12cf487"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerFilter.Point 43cc99b56fe7584e6adecae07a748ffc6b5b79a4dc8c99c28f868824bc29ec34 -->

```csharp
InnoEngine.Rendering.RenderSamplerFilter.Point = 0
```

Uses nearest-neighbor filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L15).
