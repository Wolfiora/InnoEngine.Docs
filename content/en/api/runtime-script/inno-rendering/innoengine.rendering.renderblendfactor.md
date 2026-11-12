---
title: "RenderBlendFactor"
description: "Reference for RenderBlendFactor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.773b43c72ef842c9
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBlendFactor`

This reference describes `RenderBlendFactor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Constant`](#api-ff8ea5d540d7764a) | Field |
| [`DestinationAlpha`](#api-38e2e07d26c4addd) | Field |
| [`DestinationColor`](#api-24bfabf0f0343608) | Field |
| [`InverseConstant`](#api-5a3eadbe56e3274c) | Field |
| [`InverseDestinationAlpha`](#api-5aa894c71a752c30) | Field |
| [`InverseDestinationColor`](#api-11d136949952f5e2) | Field |
| [`InverseSourceAlpha`](#api-f02abf960635a0e1) | Field |
| [`InverseSourceColor`](#api-9ffcd2fe5c89a261) | Field |
| [`One`](#api-e82c9d342f6c3627) | Field |
| [`SourceAlpha`](#api-0816eaef0cf87a76) | Field |
| [`SourceAlphaSaturate`](#api-12aed6ca02e97fa4) | Field |
| [`SourceColor`](#api-c360807662130d0e) | Field |
| [`Zero`](#api-73b8d58549f87031) | Field |

## Type declaration

<a id="api-773b43c72ef842c9"></a>
<!-- api: T:InnoEngine.Rendering.RenderBlendFactor f73bb1e87c697ed7758dac367a2cc93212ca8521bc3077b669c7fad1d81691d8 -->

```csharp
public enum InnoEngine.Rendering.RenderBlendFactor : int
```

Selects one source or destination blend multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L10).

## `Constant`

<a id="api-ff8ea5d540d7764a"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.Constant 63c64781fa5413b81f3b2d5368ce865d2f5a49cec5330453add1ce59b29e27a7 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.Constant = 11
```

Multiplies by the packed constant blend color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L59).

## `DestinationAlpha`

<a id="api-38e2e07d26c4addd"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.DestinationAlpha f7b9e56e20e71eb665b5d8f242d809f0d89d0d0012974a2fd8df32b50c7cc778 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.DestinationAlpha = 6
```

Multiplies by destination alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L39).

## `DestinationColor`

<a id="api-24bfabf0f0343608"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.DestinationColor 60dc7aa4ca7cc529140ee17abf1a552a27a45b3cd105dd8b1c60225c4d3430f9 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.DestinationColor = 8
```

Multiplies by destination color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L47).

## `InverseConstant`

<a id="api-5a3eadbe56e3274c"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.InverseConstant 3a2fa59981ddb89c9f1a6e60f62abe8c68c0b653fd2f5acc584fddb37f8a7e4f -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.InverseConstant = 12
```

Multiplies by one minus the packed constant blend color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L63).

## `InverseDestinationAlpha`

<a id="api-5aa894c71a752c30"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.InverseDestinationAlpha 07c4250f20531bee8e936cc1fd9e1e18add88875ba1f782c226f6feb21f6bfe7 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.InverseDestinationAlpha = 7
```

Multiplies by one minus destination alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L43).

## `InverseDestinationColor`

<a id="api-11d136949952f5e2"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.InverseDestinationColor cbe1362e154ae2a01c9ac2346f146a80ec3268aeeb3132e392231a19dd4c7f5a -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.InverseDestinationColor = 9
```

Multiplies by one minus destination color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L51).

## `InverseSourceAlpha`

<a id="api-f02abf960635a0e1"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.InverseSourceAlpha f709a0ba17734f4402e8dbc0bfae05110eefa90c1ec6a45c78170bac535552d7 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.InverseSourceAlpha = 5
```

Multiplies by one minus source alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L35).

## `InverseSourceColor`

<a id="api-9ffcd2fe5c89a261"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.InverseSourceColor 0d982883bfba21ec0ddf37142843313ae0a61efd2f17952ef9d94eb1d4f275cd -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.InverseSourceColor = 3
```

Multiplies by one minus source color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L27).

## `One`

<a id="api-e82c9d342f6c3627"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.One 2e2b17916d1f67586c0d39e65b0f40b0bfb5e2dbef3b2aea3807f3c2e10010fe -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.One = 1
```

Multiplies by one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L19).

## `SourceAlpha`

<a id="api-0816eaef0cf87a76"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.SourceAlpha 7000b8b59fd9fc0e9dc31e0943ad8c81c5c2e11bf4c3816f20e6882d6ac5dd19 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.SourceAlpha = 4
```

Multiplies by source alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L31).

## `SourceAlphaSaturate`

<a id="api-12aed6ca02e97fa4"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.SourceAlphaSaturate c70ed1480614ecd1ae9337dd1440f75164239776276d36a559a3536723032fcc -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.SourceAlphaSaturate = 10
```

Uses the saturated source-alpha factor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L55).

## `SourceColor`

<a id="api-c360807662130d0e"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.SourceColor d6635d02163271d1fad4a8730e9c8299a739f8fa3937d0a148cab1d64aff6e59 -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.SourceColor = 2
```

Multiplies by source color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L23).

## `Zero`

<a id="api-73b8d58549f87031"></a>
<!-- api: F:InnoEngine.Rendering.RenderBlendFactor.Zero 33027e2ca918873b93f86c0519f414291d67bdbcdc878d5af3c3132c7564730c -->

```csharp
InnoEngine.Rendering.RenderBlendFactor.Zero = 0
```

Multiplies by zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBlendState.cs#L15).
