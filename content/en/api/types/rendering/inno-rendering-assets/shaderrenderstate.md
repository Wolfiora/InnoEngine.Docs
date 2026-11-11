---
title: "ShaderRenderState"
description: "Reference for ShaderRenderState in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.0137c916220d79a7
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderRenderState`

This reference describes `ShaderRenderState` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`blend`](#api-012a4dcca95a6e03) | Property |
| [`colorWriteMask`](#api-e29764dae6f819ce) | Property |
| [`cull`](#api-9caa172ec7817318) | Property |
| [`depthCompare`](#api-5a9cfdc6ea240df1) | Property |
| [`depthWrite`](#api-2baf0fca35e3bbf5) | Property |
| [`frontFace`](#api-205de8dfab6755ac) | Property |
| [`multisampling`](#api-2b6259a0448adc9c) | Property |
| [`opaque`](#api-c06e8dffccda49fd) | Property |
| [`topology`](#api-3c79e7adf9f1bbcf) | Property |

## Type declaration

<a id="api-0137c916220d79a7"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderRenderState 17b67abf67c03d2d87e608bd087f4db2622b5347e671171474a6721792524d43 -->

```csharp
public struct Inno.Rendering.Assets.ShaderRenderState
```

Declares backend-neutral fixed-function state for one shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L77).

## `blend`

<a id="api-012a4dcca95a6e03"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.blend 4b391d49d8c8a22c16f96383e9c28e62ce2c769de97dc63dbbfcf09494dd21a7 -->

```csharp
public Inno.Rendering.RenderBlendState Inno.Rendering.Assets.ShaderRenderState.blend { get; set; }
```

Gets or sets independent RGB and alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L122).

## `colorWriteMask`

<a id="api-e29764dae6f819ce"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.colorWriteMask 2cb308d625db4dfc7bb0821712aeadb27e0d836f2a1bd779263db570b5bd0ec4 -->

```csharp
public byte Inno.Rendering.Assets.ShaderRenderState.colorWriteMask { get; set; }
```

Gets or sets the four-bit RGBA color write mask.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L127).

## `cull`

<a id="api-9caa172ec7817318"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.cull 8a168661d98ba1443850312dee0d92999b4582981e88bf5a38ba42004b7f89c7 -->

```csharp
public Inno.Rendering.Assets.ShaderCullMode Inno.Rendering.Assets.ShaderRenderState.cull { get; set; }
```

Gets or sets the face culling mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L102).

## `depthCompare`

<a id="api-5a9cfdc6ea240df1"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.depthCompare a005573d90411535028b0cbe0c1a6e47951897d057535c9bb78257f53d74a601 -->

```csharp
public Inno.Rendering.Assets.ShaderCompareFunction Inno.Rendering.Assets.ShaderRenderState.depthCompare { get; set; }
```

Gets or sets the depth comparison function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L112).

## `depthWrite`

<a id="api-2baf0fca35e3bbf5"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.depthWrite 186e0aeb8273c0a5989eb5bd4de08f1264dd9a714902ca42cf9d2ad5ccfa03c0 -->

```csharp
public bool Inno.Rendering.Assets.ShaderRenderState.depthWrite { get; set; }
```

Gets or sets whether accepted fragments update depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L117).

## `frontFace`

<a id="api-205de8dfab6755ac"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.frontFace f87af62bd1e439f43795036fa40d4ce842f1ce60c8d6198b29b33d15ab37a6a1 -->

```csharp
public Inno.Rendering.RenderFrontFace Inno.Rendering.Assets.ShaderRenderState.frontFace { get; set; }
```

Gets or sets the winding order interpreted as the front face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L107).

## `multisampling`

<a id="api-2b6259a0448adc9c"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.multisampling 4abfe24ac984bc0faa9b03b8fac20c78f2cf6485f02c1296fc36e42a080d231c -->

```csharp
public bool Inno.Rendering.Assets.ShaderRenderState.multisampling { get; set; }
```

Gets or sets whether compatible targets use multisample rasterization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L132).

## `opaque`

<a id="api-c06e8dffccda49fd"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.opaque 3c62e4f24e915bda793b46e03b622c1cffc84edc2269910bce8b7ceea2729982 -->

```csharp
public static Inno.Rendering.Assets.ShaderRenderState Inno.Rendering.Assets.ShaderRenderState.opaque { get; }
```

Gets the default opaque raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L82).

## `topology`

<a id="api-3c79e7adf9f1bbcf"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderRenderState.topology d62780949f4a8cafbe693f5173ad946bf13662a07a7bd8d7e4ea2666fa893de7 -->

```csharp
public Inno.Rendering.RenderPrimitiveTopology Inno.Rendering.Assets.ShaderRenderState.topology { get; set; }
```

Gets or sets the primitive assembly used by raster draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L97).
