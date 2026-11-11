---
title: "RenderSamplerFilter"
description: "Reference for RenderSamplerFilter in Inno.Rendering."
uid: api.inno.rendering.7e940ed1519f0c17
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderSamplerFilter`

This reference describes `RenderSamplerFilter` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Anisotropic`](#api-474f44934532ef36) | Field |
| [`Linear`](#api-addde3aa2463c8c3) | Field |
| [`Point`](#api-012a2f697e8b1fb8) | Field |

## Type declaration

<a id="api-7e940ed1519f0c17"></a>
<!-- api: T:Inno.Rendering.RenderSamplerFilter a65b48c81a38ff443880590b0768f6e6ed68e7ca6f6de4903f457195c931f8af -->

```csharp
public enum Inno.Rendering.RenderSamplerFilter : int
```

Selects texture filtering independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L10).

## `Anisotropic`

<a id="api-474f44934532ef36"></a>
<!-- api: F:Inno.Rendering.RenderSamplerFilter.Anisotropic 1940d1f4b719ad0dfedaedac120dae02f0c54e9245d84a391784b0f624aa06c8 -->

```csharp
Inno.Rendering.RenderSamplerFilter.Anisotropic = 2
```

Uses anisotropic filtering when supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L23).

## `Linear`

<a id="api-addde3aa2463c8c3"></a>
<!-- api: F:Inno.Rendering.RenderSamplerFilter.Linear 61be1125a1d7edc9dd2826d87b464293208f1974a578a923761b9fdde335526f -->

```csharp
Inno.Rendering.RenderSamplerFilter.Linear = 1
```

Uses linear filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L19).

## `Point`

<a id="api-012a2f697e8b1fb8"></a>
<!-- api: F:Inno.Rendering.RenderSamplerFilter.Point 4350a9ad23ae60dc332c0c589072beac91e28f867563d0d5b31006c524898455 -->

```csharp
Inno.Rendering.RenderSamplerFilter.Point = 0
```

Uses nearest-neighbor filtering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L15).
