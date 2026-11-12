---
title: "RenderTargetKind"
description: "Reference for RenderTargetKind in Inno.Rendering."
uid: api.inno.rendering.runtime-script.f2b1031ba0213cfd
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTargetKind`

This reference describes `RenderTargetKind` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Backbuffer`](#api-ac722b8471155857) | Field |
| [`Texture`](#api-5e8d6c9535041d9a) | Field |

## Type declaration

<a id="api-f2b1031ba0213cfd"></a>
<!-- api: T:InnoEngine.Rendering.RenderTargetKind abf40e9c26cc8203764c8f5d5b322ddd1dc87f2bce74bb89a6f62323af33e228 -->

```csharp
public enum InnoEngine.Rendering.RenderTargetKind : int
```

Identifies whether a request renders to the main swapchain or an offscreen target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L8).

## `Backbuffer`

<a id="api-ac722b8471155857"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetKind.Backbuffer 02a5aa2d4ac51ef9b10da8311434b5bf8f827e55a0a16ede54e72fcba5cecb63 -->

```csharp
InnoEngine.Rendering.RenderTargetKind.Backbuffer = 0
```

Main application window swapchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L13).

## `Texture`

<a id="api-5e8d6c9535041d9a"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetKind.Texture a7922dbbeee2aa475c3d404ff51999126e2877861d4e0daca87570abdff681b0 -->

```csharp
InnoEngine.Rendering.RenderTargetKind.Texture = 1
```

Persistent offscreen render texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L17).
