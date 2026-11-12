---
title: "RenderSamplerAddressMode"
description: "Reference for RenderSamplerAddressMode in Inno.Rendering."
uid: api.inno.rendering.runtime-script.c2ce12d001293ecb
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderSamplerAddressMode`

This reference describes `RenderSamplerAddressMode` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Border`](#api-8314ff3b0ca6538f) | Field |
| [`Clamp`](#api-b65eb93bda8fdacd) | Field |
| [`Mirror`](#api-81d64e51f7b54ea9) | Field |
| [`Repeat`](#api-9c159e9d5eb96d2c) | Field |

## Type declaration

<a id="api-c2ce12d001293ecb"></a>
<!-- api: T:InnoEngine.Rendering.RenderSamplerAddressMode 77915f4ab83f813f977da55ea3b64ca59a8c55503fc95985cdfe1768f60fb15f -->

```csharp
public enum InnoEngine.Rendering.RenderSamplerAddressMode : int
```

Selects texture addressing independently for each coordinate axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L29).

## `Border`

<a id="api-8314ff3b0ca6538f"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerAddressMode.Border b9b3f96ffea3a73721ee489cabcda7ec340a26c4a9d1e010f4b9a61bba1362b5 -->

```csharp
InnoEngine.Rendering.RenderSamplerAddressMode.Border = 3
```

Samples the backend border color outside the texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L46).

## `Clamp`

<a id="api-b65eb93bda8fdacd"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerAddressMode.Clamp 942df581623d8eee8a8de40e40e37caafb16a7dc42a6be6d93f63644cf6f0a6c -->

```csharp
InnoEngine.Rendering.RenderSamplerAddressMode.Clamp = 2
```

Clamps coordinates to the texture edge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L42).

## `Mirror`

<a id="api-81d64e51f7b54ea9"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerAddressMode.Mirror d188fe9f5b71a301b1d9e38980453f5bd32d1671e891a39fb7e2eac099f56697 -->

```csharp
InnoEngine.Rendering.RenderSamplerAddressMode.Mirror = 1
```

Mirrors repeated texture coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L38).

## `Repeat`

<a id="api-9c159e9d5eb96d2c"></a>
<!-- api: F:InnoEngine.Rendering.RenderSamplerAddressMode.Repeat 0900ff11ac1912a9f04c16e2de4cef65d8f072eebfedf6ffd3fd9481e92f8c37 -->

```csharp
InnoEngine.Rendering.RenderSamplerAddressMode.Repeat = 0
```

Repeats texture coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L34).
