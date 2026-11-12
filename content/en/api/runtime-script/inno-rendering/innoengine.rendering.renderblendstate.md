---
title: "RenderBlendState"
description: "Reference for RenderBlendState in Inno.Rendering."
uid: api.inno.rendering.runtime-script.33ca4a981997b7af
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBlendState`

This reference describes `RenderBlendState` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`additive`](#api-de7cd9369811aac8) | Property |
| [`alpha`](#api-ed9f61cc2fc9d189) | Property |
| [`alphaDestination`](#api-c01f7b7d8fe35d0d) | Property |
| [`alphaEquation`](#api-64753da344b318dd) | Property |
| [`alphaSource`](#api-9ac1e8165b1e14c6) | Property |
| [`alphaToCoverage`](#api-00fa7ca7defbe0e3) | Property |
| [`colorDestination`](#api-de1a6749f7f96649) | Property |
| [`colorEquation`](#api-c814726270c84dbb) | Property |
| [`colorSource`](#api-17789dd6f687f76e) | Property |
| [`constantRgba`](#api-3bffe9ddec33da81) | Property |
| [`enabled`](#api-bf1e06fbabe7150e) | Property |
| [`opaque`](#api-91676fb9fc589042) | Property |
| [`premultiplied`](#api-30269dd7953af1d5) | Property |

## Type declaration

<a id="api-33ca4a981997b7af"></a>
<!-- api: T:InnoEngine.Rendering.RenderBlendState 524a62dacb4b82e581bb438bb4eb75694984486c2d0e80c5a9ddcad7a7069043 -->

```csharp
public struct InnoEngine.Rendering.RenderBlendState
```

Describes independent color and alpha blending without backend-native flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L96).

## `additive`

<a id="api-de7cd9369811aac8"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.additive edaf1fd2d37bff60ccc8f837005131b83f3fc2ddcfda6c0f5c631207f6bbbf55 -->

```csharp
public static InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.RenderBlendState.additive { get; }
```

Gets additive source-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L125).

## `alpha`

<a id="api-ed9f61cc2fc9d189"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.alpha ac2661ffcfe6683285841308b9d1c3a3076860bff821ad9093df38f72ef87da8 -->

```csharp
public static InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.RenderBlendState.alpha { get; }
```

Gets conventional straight-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L113).

## `alphaDestination`

<a id="api-c01f7b7d8fe35d0d"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.alphaDestination ed41de8cef7de4b66b9ba2d25eff758f5c735e6094b99cc46e1a1e284fcc20e1 -->

```csharp
public InnoEngine.Rendering.RenderBlendFactor InnoEngine.Rendering.RenderBlendState.alphaDestination { get; set; }
```

Gets or sets the destination multiplier for alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L174).

## `alphaEquation`

<a id="api-64753da344b318dd"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.alphaEquation 299793d3bcb926fd27eb00ec5e7ee661ec7763dcc76da8ca5a61097403dba01c -->

```csharp
public InnoEngine.Rendering.RenderBlendEquation InnoEngine.Rendering.RenderBlendState.alphaEquation { get; set; }
```

Gets or sets the alpha combination equation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L179).

## `alphaSource`

<a id="api-9ac1e8165b1e14c6"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.alphaSource 0cb0d6d7ea94d694702c13ee52e20517bbb6c843137c93862c810c9d65386420 -->

```csharp
public InnoEngine.Rendering.RenderBlendFactor InnoEngine.Rendering.RenderBlendState.alphaSource { get; set; }
```

Gets or sets the source multiplier for alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L169).

## `alphaToCoverage`

<a id="api-00fa7ca7defbe0e3"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.alphaToCoverage 9430544f4c4462c241db8a99cbcb6f149ef9a4308fcc04ad0cd6cf890b7ebf2a -->

```csharp
public bool InnoEngine.Rendering.RenderBlendState.alphaToCoverage { get; set; }
```

Gets or sets whether alpha-to-coverage is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L189).

## `colorDestination`

<a id="api-de1a6749f7f96649"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.colorDestination 6c9aa432d3e9191052d693da41be6f0d2f03d2d1d1f73aaa5c26da144d056aa0 -->

```csharp
public InnoEngine.Rendering.RenderBlendFactor InnoEngine.Rendering.RenderBlendState.colorDestination { get; set; }
```

Gets or sets the destination multiplier for RGB channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L159).

## `colorEquation`

<a id="api-c814726270c84dbb"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.colorEquation b75a5c9b8a7ed50e7f06dfe3e2eb0cefe30f06885413ee57ec972ec674780655 -->

```csharp
public InnoEngine.Rendering.RenderBlendEquation InnoEngine.Rendering.RenderBlendState.colorEquation { get; set; }
```

Gets or sets the RGB combination equation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L164).

## `colorSource`

<a id="api-17789dd6f687f76e"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.colorSource 0933932a5d578d45e22fad06e0afda2ac6503f3529adf79d504688e165f9ac6a -->

```csharp
public InnoEngine.Rendering.RenderBlendFactor InnoEngine.Rendering.RenderBlendState.colorSource { get; set; }
```

Gets or sets the source multiplier for RGB channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L154).

## `constantRgba`

<a id="api-3bffe9ddec33da81"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.constantRgba 4f89faaa87ae5d905a9b0f2d577c92e2cdab8db6ca4a12615cf184f8fd16f733 -->

```csharp
public uint InnoEngine.Rendering.RenderBlendState.constantRgba { get; set; }
```

Gets or sets the packed RGBA8 constant used by constant blend factors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L184).

## `enabled`

<a id="api-bf1e06fbabe7150e"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.enabled e8a5821b9669d8e32d85c297bcf688c8553d47e415de0bb39281492cb2069440 -->

```csharp
public bool InnoEngine.Rendering.RenderBlendState.enabled { get; set; }
```

Gets or sets whether blending is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L149).

## `opaque`

<a id="api-91676fb9fc589042"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.opaque b18e7c85d06a4ab7441a979118bc0591ae8d5ecbdcbc55ad19b0028590f01e7e -->

```csharp
public static InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.RenderBlendState.opaque { get; }
```

Gets the disabled opaque blend state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L101).

## `premultiplied`

<a id="api-30269dd7953af1d5"></a>
<!-- api: P:InnoEngine.Rendering.RenderBlendState.premultiplied af48ca2f057cbb0eb7d1f0e470d559cf19073da3d23ed5aba88b07bb456fc00e -->

```csharp
public static InnoEngine.Rendering.RenderBlendState InnoEngine.Rendering.RenderBlendState.premultiplied { get; }
```

Gets conventional premultiplied-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L137).
