---
title: "RenderTextureContainer"
description: "Reference for RenderTextureContainer in Inno.Rendering."
uid: api.inno.rendering.runtime-script.0dbbf7a3da53c0a7
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureContainer`

This reference describes `RenderTextureContainer` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Ktx`](#api-9d2fb1021b6d0067) | Field |

## Type declaration

<a id="api-0dbbf7a3da53c0a7"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureContainer 06b2fd8f801f01a589e00c25af484a83a4ff431e3eb9ecc9dd3b60ee3119261e -->

```csharp
public enum InnoEngine.Rendering.RenderTextureContainer : int
```

Identifies a portable encoded texture container accepted by a render device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L8).

## `Ktx`

<a id="api-9d2fb1021b6d0067"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureContainer.Ktx 6c95ffd0b531d3b6ddb6e163b026448ad4c07cd1b8c69b39225fa8b255e336d5 -->

```csharp
InnoEngine.Rendering.RenderTextureContainer.Ktx = 0
```

Khronos Texture container containing validated GPU texture payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L13).
