---
title: "RenderStencilOperation"
description: "Reference for RenderStencilOperation in Inno.Rendering."
uid: api.inno.rendering.b56a616857c84980
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStencilOperation`

This reference describes `RenderStencilOperation` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DecrementClamp`](#api-cb70a4a3e3e9ce77) | Field |
| [`DecrementWrap`](#api-b18dac84cac06893) | Field |
| [`IncrementClamp`](#api-17f068e8eaaf6c01) | Field |
| [`IncrementWrap`](#api-9c921dd6e78ffbe8) | Field |
| [`Invert`](#api-153e6c6178d58df6) | Field |
| [`Keep`](#api-3b0b7ae03fb21a18) | Field |
| [`Replace`](#api-346ab11e22dab727) | Field |
| [`Zero`](#api-88a0e77f7eae9d1f) | Field |

## Type declaration

<a id="api-b56a616857c84980"></a>
<!-- api: T:Inno.Rendering.RenderStencilOperation c11d5ebac97e739bc0963725d6b2c98206722196e61d10c17334490de922fcce -->

```csharp
public enum Inno.Rendering.RenderStencilOperation : int
```

Selects the update applied to a stencil value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L49).

## `DecrementClamp`

<a id="api-cb70a4a3e3e9ce77"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.DecrementClamp 28e4ab4fc8b93bb09592311ff557dc42855af1c663c32b97deb61b12d0ddcf50 -->

```csharp
Inno.Rendering.RenderStencilOperation.DecrementClamp = 5
```

Decrements and clamps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L74).

## `DecrementWrap`

<a id="api-b18dac84cac06893"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.DecrementWrap 0ef82ed855c13b4c594e8d3e4624c7b6cb8949e9e2278fd5de230f6adcfdb20a -->

```csharp
Inno.Rendering.RenderStencilOperation.DecrementWrap = 6
```

Decrements and wraps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L78).

## `IncrementClamp`

<a id="api-17f068e8eaaf6c01"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.IncrementClamp af03fe6174ddfedac275b8af1d402de513f50c1a06e28c4049b28f68807a7aaf -->

```csharp
Inno.Rendering.RenderStencilOperation.IncrementClamp = 3
```

Increments and clamps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L66).

## `IncrementWrap`

<a id="api-9c921dd6e78ffbe8"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.IncrementWrap f1d92f3a01fba2550f8a075dfb444dab5d6f3c3dd8a3a11a81a4082f106a0958 -->

```csharp
Inno.Rendering.RenderStencilOperation.IncrementWrap = 4
```

Increments and wraps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L70).

## `Invert`

<a id="api-153e6c6178d58df6"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.Invert 0fce9e41f396dce20ae334869f425b478214d38d45f2d1f0eec8942512283505 -->

```csharp
Inno.Rendering.RenderStencilOperation.Invert = 7
```

Bitwise-inverts the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L82).

## `Keep`

<a id="api-3b0b7ae03fb21a18"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.Keep 93d33de59dda90da534b9b76b76eccceb3a114d203f6c024d7acd642af8db256 -->

```csharp
Inno.Rendering.RenderStencilOperation.Keep = 0
```

Keeps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L54).

## `Replace`

<a id="api-346ab11e22dab727"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.Replace ae193adf6600b9358e0ea9a6c2732fdfa4ae2fbf5f9e4496aa30779297ea7048 -->

```csharp
Inno.Rendering.RenderStencilOperation.Replace = 2
```

Replaces the stored value with the reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L62).

## `Zero`

<a id="api-88a0e77f7eae9d1f"></a>
<!-- api: F:Inno.Rendering.RenderStencilOperation.Zero 2b8d66b1cccd44fe7adf7735d9558321d2b48d4b0d323e632d37c4bdfeab9adb -->

```csharp
Inno.Rendering.RenderStencilOperation.Zero = 1
```

Clears the stored value to zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L58).
