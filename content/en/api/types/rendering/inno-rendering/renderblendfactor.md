---
title: "RenderBlendFactor"
description: "Reference for RenderBlendFactor in Inno.Rendering."
uid: api.inno.rendering.da31643501ed39f5
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderBlendFactor`

This reference describes `RenderBlendFactor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Constant`](#api-793f24c6e90c3b5b) | Field |
| [`DestinationAlpha`](#api-137e2a752eddbefd) | Field |
| [`DestinationColor`](#api-808d7ae0e302535d) | Field |
| [`InverseConstant`](#api-540af016b597e70c) | Field |
| [`InverseDestinationAlpha`](#api-43e64b86095dfce5) | Field |
| [`InverseDestinationColor`](#api-dd3afdc3f9900629) | Field |
| [`InverseSourceAlpha`](#api-d4be16a39c4a01d4) | Field |
| [`InverseSourceColor`](#api-66dcc1737cfbc1f2) | Field |
| [`One`](#api-a3c6be53f8b1a62d) | Field |
| [`SourceAlpha`](#api-fa95f20ec8fa49d9) | Field |
| [`SourceAlphaSaturate`](#api-2936ad9d7b4049a3) | Field |
| [`SourceColor`](#api-a8aa5ce55e01439b) | Field |
| [`Zero`](#api-057f311feecbb8c2) | Field |

## Type declaration

<a id="api-da31643501ed39f5"></a>
<!-- api: T:Inno.Rendering.RenderBlendFactor 57d937adfb777a6998ac644865888abb8e065f293bc671a4bfee6d55215ec921 -->

```csharp
public enum Inno.Rendering.RenderBlendFactor : int
```

Selects one source or destination blend multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L10).

## `Constant`

<a id="api-793f24c6e90c3b5b"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.Constant 7951ddb8b154fdef32a28d4f36742c345be13ac623224f931df64ca49cfd93c8 -->

```csharp
Inno.Rendering.RenderBlendFactor.Constant = 11
```

Multiplies by the packed constant blend color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L59).

## `DestinationAlpha`

<a id="api-137e2a752eddbefd"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.DestinationAlpha 0d53da2a1d61effa8c08d0f838add43b776520b1d61aaef695f20d3a80d27c82 -->

```csharp
Inno.Rendering.RenderBlendFactor.DestinationAlpha = 6
```

Multiplies by destination alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L39).

## `DestinationColor`

<a id="api-808d7ae0e302535d"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.DestinationColor 169fc7dcce0983fcf77200611cc221bf063fb0da70a8cfa45e473a2ffabbf34c -->

```csharp
Inno.Rendering.RenderBlendFactor.DestinationColor = 8
```

Multiplies by destination color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L47).

## `InverseConstant`

<a id="api-540af016b597e70c"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.InverseConstant cf357dcc7635ced8b28fb67b21dd6a19c292e05c5ced5773ba2acb040cc4d4b2 -->

```csharp
Inno.Rendering.RenderBlendFactor.InverseConstant = 12
```

Multiplies by one minus the packed constant blend color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L63).

## `InverseDestinationAlpha`

<a id="api-43e64b86095dfce5"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.InverseDestinationAlpha a9303eb0d92c05fb27840d4c17aec5e9048b3d5e74b19a26855de3162b2710ea -->

```csharp
Inno.Rendering.RenderBlendFactor.InverseDestinationAlpha = 7
```

Multiplies by one minus destination alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L43).

## `InverseDestinationColor`

<a id="api-dd3afdc3f9900629"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.InverseDestinationColor edf46486329bd27126bda2dffb68d53b9f2dffa4ee4727de8620a5c609935f65 -->

```csharp
Inno.Rendering.RenderBlendFactor.InverseDestinationColor = 9
```

Multiplies by one minus destination color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L51).

## `InverseSourceAlpha`

<a id="api-d4be16a39c4a01d4"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.InverseSourceAlpha 29a8b5185e9409a88d85f7f14f01e7992fd2e29d00acaaf14836e0aef37d422e -->

```csharp
Inno.Rendering.RenderBlendFactor.InverseSourceAlpha = 5
```

Multiplies by one minus source alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L35).

## `InverseSourceColor`

<a id="api-66dcc1737cfbc1f2"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.InverseSourceColor 9cf6b04d48a860663511f5f21f9560e4682730c8a2b9b2cfe1968e29f85642c6 -->

```csharp
Inno.Rendering.RenderBlendFactor.InverseSourceColor = 3
```

Multiplies by one minus source color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L27).

## `One`

<a id="api-a3c6be53f8b1a62d"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.One e66040d034e12a995788fe871f511e0aa78b2f62f2381c60c3a18bbdf6dfa5b9 -->

```csharp
Inno.Rendering.RenderBlendFactor.One = 1
```

Multiplies by one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L19).

## `SourceAlpha`

<a id="api-fa95f20ec8fa49d9"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.SourceAlpha 8ea169fdf016c94c87745aea78effeabafdfff89a12cec638d51ae7c2f22e2bb -->

```csharp
Inno.Rendering.RenderBlendFactor.SourceAlpha = 4
```

Multiplies by source alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L31).

## `SourceAlphaSaturate`

<a id="api-2936ad9d7b4049a3"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.SourceAlphaSaturate 07580a54d712d93413a15aa1a15716aaad6b0b0f5e4b3acf5dd1360c35055c6c -->

```csharp
Inno.Rendering.RenderBlendFactor.SourceAlphaSaturate = 10
```

Uses the saturated source-alpha factor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L55).

## `SourceColor`

<a id="api-a8aa5ce55e01439b"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.SourceColor eb16cbc9471ac7a8fdf8c05a522fd0902d8625ec777c0f8073896d22ec231b67 -->

```csharp
Inno.Rendering.RenderBlendFactor.SourceColor = 2
```

Multiplies by source color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L23).

## `Zero`

<a id="api-057f311feecbb8c2"></a>
<!-- api: F:Inno.Rendering.RenderBlendFactor.Zero d5965e6766c24f875968d5fc98a3ca9adf71284d1cb220a585579a6189ba1b4f -->

```csharp
Inno.Rendering.RenderBlendFactor.Zero = 0
```

Multiplies by zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L15).
