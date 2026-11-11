---
title: "RenderTargetKind"
description: "Reference for RenderTargetKind in Inno.Rendering."
uid: api.inno.rendering.21e509debd1e4d99
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTargetKind`

This reference describes `RenderTargetKind` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Backbuffer`](#api-f14a2a49637c6b46) | Field |
| [`Texture`](#api-503fa6268f5275cc) | Field |

## Type declaration

<a id="api-21e509debd1e4d99"></a>
<!-- api: T:Inno.Rendering.RenderTargetKind 58f90723e0f7ee3eb6f44ba2f7d2b408f5e676555f7194b321d6df539f9f37b1 -->

```csharp
public enum Inno.Rendering.RenderTargetKind : int
```

Identifies whether a request renders to the main swapchain or an offscreen target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L8).

## `Backbuffer`

<a id="api-f14a2a49637c6b46"></a>
<!-- api: F:Inno.Rendering.RenderTargetKind.Backbuffer 2393dfab4f066f5edb1ab81477ec2cf327f69bf843ee2c3294bcd617c7493c08 -->

```csharp
Inno.Rendering.RenderTargetKind.Backbuffer = 0
```

Main application window swapchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L13).

## `Texture`

<a id="api-503fa6268f5275cc"></a>
<!-- api: F:Inno.Rendering.RenderTargetKind.Texture f2f9c45a6693b13f29beedc356b919a736e658dec9aea1ed6701d6a1e21d9131 -->

```csharp
Inno.Rendering.RenderTargetKind.Texture = 1
```

Persistent offscreen render texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L17).
