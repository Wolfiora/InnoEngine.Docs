---
title: "RenderSamplerAddressMode"
description: "Reference for RenderSamplerAddressMode in Inno.Rendering."
uid: api.inno.rendering.8fa16975966de556
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderSamplerAddressMode`

This reference describes `RenderSamplerAddressMode` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Border`](#api-4f2b7835bd32a64c) | Field |
| [`Clamp`](#api-60356d1617c90bb3) | Field |
| [`Mirror`](#api-4f3c061eb0f79d82) | Field |
| [`Repeat`](#api-382060e051ecac50) | Field |

## Type declaration

<a id="api-8fa16975966de556"></a>
<!-- api: T:Inno.Rendering.RenderSamplerAddressMode 3a549330adbd694f3fef95dc92a938335abdae485d6ed934340fbc010f2f8120 -->

```csharp
public enum Inno.Rendering.RenderSamplerAddressMode : int
```

Selects texture addressing independently for each coordinate axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L29).

## `Border`

<a id="api-4f2b7835bd32a64c"></a>
<!-- api: F:Inno.Rendering.RenderSamplerAddressMode.Border e0363b1948fa88cd94d60772b4501bb266f5d7c363f8071c29f3776d3faf87dc -->

```csharp
Inno.Rendering.RenderSamplerAddressMode.Border = 3
```

Samples the backend border color outside the texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L46).

## `Clamp`

<a id="api-60356d1617c90bb3"></a>
<!-- api: F:Inno.Rendering.RenderSamplerAddressMode.Clamp 18fe4c9b84053fca894fc92f8ed85bcd6c7fa6d95acdf36f07c32bb0aed0ce93 -->

```csharp
Inno.Rendering.RenderSamplerAddressMode.Clamp = 2
```

Clamps coordinates to the texture edge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L42).

## `Mirror`

<a id="api-4f3c061eb0f79d82"></a>
<!-- api: F:Inno.Rendering.RenderSamplerAddressMode.Mirror cf5f93328cd35a8aabbedbc70433bdca41866d4a3d9e261f8ebd91266237483f -->

```csharp
Inno.Rendering.RenderSamplerAddressMode.Mirror = 1
```

Mirrors repeated texture coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L38).

## `Repeat`

<a id="api-382060e051ecac50"></a>
<!-- api: F:Inno.Rendering.RenderSamplerAddressMode.Repeat 2276b4141ed360405e8672d772366b65e00b2513042d4ecb26a36128d973e6bb -->

```csharp
Inno.Rendering.RenderSamplerAddressMode.Repeat = 0
```

Repeats texture coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderSamplerState.cs#L34).
