---
title: "ShaderCullMode"
description: "Reference for ShaderCullMode in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.c826e32307d035d5
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderCullMode`

This reference describes `ShaderCullMode` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Back`](#api-af697cd9ca684832) | Field |
| [`Front`](#api-b329b08e3458c24a) | Field |
| [`None`](#api-0380abd4248de4a8) | Field |

## Type declaration

<a id="api-c826e32307d035d5"></a>
<!-- api: T:InnoEngine.Rendering.ShaderCullMode 510e0a004653be38ef1fb3d5f359144b4fd43d3b1aeccbeefc063acc0f9defd1 -->

```csharp
public enum InnoEngine.Rendering.ShaderCullMode : int
```

Selects the triangle face rejected by a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L17).

## `Back`

<a id="api-af697cd9ca684832"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCullMode.Back 69671c609301e82ca2dd740bee05144e24821d5394b4a805612825527cc2f60d -->

```csharp
InnoEngine.Rendering.ShaderCullMode.Back = 2
```

Rejects back-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L30).

## `Front`

<a id="api-b329b08e3458c24a"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCullMode.Front 92397a55a1e1cff21d85d8e602ca22a46f62fd30aec67622c541b7f6bc7c0187 -->

```csharp
InnoEngine.Rendering.ShaderCullMode.Front = 1
```

Rejects front-facing triangles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L26).

## `None`

<a id="api-0380abd4248de4a8"></a>
<!-- api: F:InnoEngine.Rendering.ShaderCullMode.None 315f577ddf15ea604f449db8fbf1b5047caaaa3edf3041799dbf144efbb868c1 -->

```csharp
InnoEngine.Rendering.ShaderCullMode.None = 0
```

Does not reject either face orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L22).
