---
title: "RenderBlendState"
description: "Reference for RenderBlendState in Inno.Rendering."
uid: api.inno.rendering.a7c84da2367010a7
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBlendState`

This reference describes `RenderBlendState` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`additive`](#api-642731d7adec697f) | Property |
| [`alpha`](#api-a5061d2d7db55898) | Property |
| [`alphaDestination`](#api-83a0ae855a636e1f) | Property |
| [`alphaEquation`](#api-dd64b956cd7ff7aa) | Property |
| [`alphaSource`](#api-b55fdc90ff1eacf3) | Property |
| [`alphaToCoverage`](#api-a930727c7f0c4124) | Property |
| [`colorDestination`](#api-0d89d471b19c95d3) | Property |
| [`colorEquation`](#api-20d6d52b337f1ddb) | Property |
| [`colorSource`](#api-33cfc1027348b1b8) | Property |
| [`constantRgba`](#api-3606982c583cecc2) | Property |
| [`enabled`](#api-9169c23845e575fc) | Property |
| [`opaque`](#api-53d4ebe5cd83541c) | Property |
| [`premultiplied`](#api-6e35365a9205562b) | Property |

## Type declaration

<a id="api-a7c84da2367010a7"></a>
<!-- api: T:Inno.Rendering.RenderBlendState 4c73b604ee0777d5973de27df02dd1735a0fef344a3101a0095a0a68884d146a -->

```csharp
public struct Inno.Rendering.RenderBlendState
```

Describes independent color and alpha blending without backend-native flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L96).

## `additive`

<a id="api-642731d7adec697f"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.additive aa605e605f71eed020a17bffee366748a54586423fb4f08870a764dff64c470a -->

```csharp
public static Inno.Rendering.RenderBlendState Inno.Rendering.RenderBlendState.additive { get; }
```

Gets additive source-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L125).

## `alpha`

<a id="api-a5061d2d7db55898"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.alpha 72422c8ee24252a115af5aa884775f65ca8789ff173053765b66bee39f9770e2 -->

```csharp
public static Inno.Rendering.RenderBlendState Inno.Rendering.RenderBlendState.alpha { get; }
```

Gets conventional straight-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L113).

## `alphaDestination`

<a id="api-83a0ae855a636e1f"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.alphaDestination 772f952f2cc4ab63b5f9507a7446cf68b7d9c66029a4cb5ee0d97958fb4d1b0e -->

```csharp
public Inno.Rendering.RenderBlendFactor Inno.Rendering.RenderBlendState.alphaDestination { get; set; }
```

Gets or sets the destination multiplier for alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L174).

## `alphaEquation`

<a id="api-dd64b956cd7ff7aa"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.alphaEquation 22b11454880902d1eb97a6643a7f4dd6fe640dc2fdbb7140785965015d8ed550 -->

```csharp
public Inno.Rendering.RenderBlendEquation Inno.Rendering.RenderBlendState.alphaEquation { get; set; }
```

Gets or sets the alpha combination equation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L179).

## `alphaSource`

<a id="api-b55fdc90ff1eacf3"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.alphaSource ea35bb680d4cc6e2e030e0e0ca41c92789b819ec97713d9fa18e12eafff255dd -->

```csharp
public Inno.Rendering.RenderBlendFactor Inno.Rendering.RenderBlendState.alphaSource { get; set; }
```

Gets or sets the source multiplier for alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L169).

## `alphaToCoverage`

<a id="api-a930727c7f0c4124"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.alphaToCoverage 68412fb6222f2bc110dc7daa58d7a2523c60c3d2c9ecab2d56b6c2a60bb38023 -->

```csharp
public bool Inno.Rendering.RenderBlendState.alphaToCoverage { get; set; }
```

Gets or sets whether alpha-to-coverage is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L189).

## `colorDestination`

<a id="api-0d89d471b19c95d3"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.colorDestination 5812556ef36b0d2140354bae3e05e44c03be5ee3b40f53929a46a5df8a2c1348 -->

```csharp
public Inno.Rendering.RenderBlendFactor Inno.Rendering.RenderBlendState.colorDestination { get; set; }
```

Gets or sets the destination multiplier for RGB channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L159).

## `colorEquation`

<a id="api-20d6d52b337f1ddb"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.colorEquation b629938ec4a7e7e6193c9131141105ddc848d2f21c0332897b682a0868d513f8 -->

```csharp
public Inno.Rendering.RenderBlendEquation Inno.Rendering.RenderBlendState.colorEquation { get; set; }
```

Gets or sets the RGB combination equation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L164).

## `colorSource`

<a id="api-33cfc1027348b1b8"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.colorSource c1e504c3264804e74a9e6d132993c20107f9f65dc19ace8acff909e72a63c811 -->

```csharp
public Inno.Rendering.RenderBlendFactor Inno.Rendering.RenderBlendState.colorSource { get; set; }
```

Gets or sets the source multiplier for RGB channels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L154).

## `constantRgba`

<a id="api-3606982c583cecc2"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.constantRgba 65a4141479c15885434071cc105896769f5bb44eb74a97aea263cff4abfe401b -->

```csharp
public uint Inno.Rendering.RenderBlendState.constantRgba { get; set; }
```

Gets or sets the packed RGBA8 constant used by constant blend factors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L184).

## `enabled`

<a id="api-9169c23845e575fc"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.enabled ec73ee359f9042ae2978a338f7236c65e04a8becf3faf22859fc7072d6225e00 -->

```csharp
public bool Inno.Rendering.RenderBlendState.enabled { get; set; }
```

Gets or sets whether blending is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L149).

## `opaque`

<a id="api-53d4ebe5cd83541c"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.opaque 003f8636e4479a1df1f33a439ce2ed8d06c86221965528c35dcb75854b0d8a39 -->

```csharp
public static Inno.Rendering.RenderBlendState Inno.Rendering.RenderBlendState.opaque { get; }
```

Gets the disabled opaque blend state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L101).

## `premultiplied`

<a id="api-6e35365a9205562b"></a>
<!-- api: P:Inno.Rendering.RenderBlendState.premultiplied ba414c01be58a996a20781311a0af984d4d74394130c5ba62a28d3818d1edf0e -->

```csharp
public static Inno.Rendering.RenderBlendState Inno.Rendering.RenderBlendState.premultiplied { get; }
```

Gets conventional premultiplied-alpha blending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L137).
