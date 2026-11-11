---
title: "RenderTextureContainer"
description: "Reference for RenderTextureContainer in Inno.Rendering."
uid: api.inno.rendering.0e2160faf5b379e6
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureContainer`

This reference describes `RenderTextureContainer` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Ktx`](#api-bf72250bff3c28b7) | Field |

## Type declaration

<a id="api-0e2160faf5b379e6"></a>
<!-- api: T:Inno.Rendering.RenderTextureContainer a2a5b074728038ff8c29129fa494675e61677654c6cc49febf8713633e0908eb -->

```csharp
public enum Inno.Rendering.RenderTextureContainer : int
```

Identifies a portable encoded texture container accepted by a render device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L8).

## `Ktx`

<a id="api-bf72250bff3c28b7"></a>
<!-- api: F:Inno.Rendering.RenderTextureContainer.Ktx 7bc74ef9d69e3ddb0ba553685bde6592f3348353709ef1745938dd006a400f4c -->

```csharp
Inno.Rendering.RenderTextureContainer.Ktx = 0
```

Khronos Texture container containing validated GPU texture payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L13).
