---
title: "ShaderRenderState"
description: "Reference for ShaderRenderState in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.4ebcf13c17299494
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderRenderState`

This reference describes `ShaderRenderState` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`blend`](#api-c221ea260f5c6195) | Property |
| [`colorWriteMask`](#api-9f0dc1aa7c95fa9f) | Property |
| [`cull`](#api-47b95e74d92f8369) | Property |
| [`depthCompare`](#api-543b6398c119306f) | Property |
| [`depthWrite`](#api-9129ea20ade71e1f) | Property |
| [`frontFace`](#api-01fa031d3f30dbd7) | Property |
| [`multisampling`](#api-978de859507b9177) | Property |
| [`opaque`](#api-c722337ab02aafc2) | Property |
| [`topology`](#api-447256fac8b1e86c) | Property |

## Type declaration

<a id="api-4ebcf13c17299494"></a>
<!-- api: T:InnoEngine.Rendering.ShaderRenderState 1510238ef54e10f21c1d8462aeda3a21e3e67c66e8031041ea2509b02892bd08 -->

```csharp
public struct InnoEngine.Rendering.ShaderRenderState
```

Declares backend-neutral fixed-function state for one shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L77).

## `blend`

<a id="api-c221ea260f5c6195"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.blend e9bdab41295450f83872166856f415f2f15ea63bde0ab202f8ab7fb27ae63fed -->

```csharp
public InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.ShaderRenderState.blend { get; set; }
```

Gets or sets independent RGB and alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L122).

## `colorWriteMask`

<a id="api-9f0dc1aa7c95fa9f"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.colorWriteMask c6eb7b83b895bd4eb33e8c90b8102f3c8e005a4844f72310e5605ef07218f195 -->

```csharp
public byte InnoEngine.Rendering.ShaderRenderState.colorWriteMask { get; set; }
```

Gets or sets the four-bit RGBA color write mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L127).

## `cull`

<a id="api-47b95e74d92f8369"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.cull 449f43f93f264ed34cbd881da2cc7f9fa9db0380e9442975b2ef166d16432e87 -->

```csharp
public InnoEngine.Rendering.ShaderCullMode InnoEngine.Rendering.ShaderRenderState.cull { get; set; }
```

Gets or sets the face culling mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L102).

## `depthCompare`

<a id="api-543b6398c119306f"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.depthCompare ef0cf69d9410311c82c691c1d4bf579bca8fb56ded939c9da94467935d638074 -->

```csharp
public InnoEngine.Rendering.ShaderCompareFunction InnoEngine.Rendering.ShaderRenderState.depthCompare { get; set; }
```

Gets or sets the depth comparison function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L112).

## `depthWrite`

<a id="api-9129ea20ade71e1f"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.depthWrite e298ff440e8b99edb15daca69a6cc2ef813afb2b2d65b770d56a1fc5aaf66199 -->

```csharp
public bool InnoEngine.Rendering.ShaderRenderState.depthWrite { get; set; }
```

Gets or sets whether accepted fragments update depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L117).

## `frontFace`

<a id="api-01fa031d3f30dbd7"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.frontFace ce1ddcc81a50e02937505ce85a4916b6c8b8077c595d40e1e52975ad87bfc9a6 -->

```csharp
public InnoEngine.Rendering.RenderFrontFace InnoEngine.Rendering.ShaderRenderState.frontFace { get; set; }
```

Gets or sets the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L107).

## `multisampling`

<a id="api-978de859507b9177"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.multisampling b0918f37b4640f59d457b19bed58a93a49866812e47631bca53990a276c701d2 -->

```csharp
public bool InnoEngine.Rendering.ShaderRenderState.multisampling { get; set; }
```

Gets or sets whether compatible targets use multisample rasterization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L132).

## `opaque`

<a id="api-c722337ab02aafc2"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.opaque ce576f7e54d54cc28c231a7396c8e6dbdce78593b9ddf58cd853e4fa6abfc6ab -->

```csharp
public static InnoEngine.Rendering.ShaderRenderState InnoEngine.Rendering.ShaderRenderState.opaque { get; }
```

Gets the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L82).

## `topology`

<a id="api-447256fac8b1e86c"></a>
<!-- api: P:InnoEngine.Rendering.ShaderRenderState.topology 1010675debfb5fdc04e08af0537e455a5d6bf6daa1d6016d9af8ecac50900373 -->

```csharp
public InnoEngine.Rendering.RenderPrimitiveTopology InnoEngine.Rendering.ShaderRenderState.topology { get; set; }
```

Gets or sets the primitive assembly used by raster draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L97).
