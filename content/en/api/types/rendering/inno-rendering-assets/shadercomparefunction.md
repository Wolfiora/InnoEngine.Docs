---
title: "ShaderCompareFunction"
description: "Reference for ShaderCompareFunction in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.3f2e4a4fbb45bc46
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderCompareFunction`

This reference describes `ShaderCompareFunction` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-ac7e35efba0a2ccf) | Field |
| [`Equal`](#api-cb710a0ad3208908) | Field |
| [`Greater`](#api-feb654a5a7ac763b) | Field |
| [`GreaterEqual`](#api-84d3ee8980982ed3) | Field |
| [`Less`](#api-407bd79fa8744a86) | Field |
| [`LessEqual`](#api-29b1859ffe2c3d50) | Field |
| [`Never`](#api-300cf104e454250e) | Field |
| [`NotEqual`](#api-37d2e08f52619194) | Field |

## Type declaration

<a id="api-3f2e4a4fbb45bc46"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderCompareFunction 32db707b5867ebee4851c8d0be62eef4826ea52a6611f999fe62d036754cd281 -->

```csharp
public enum Inno.Rendering.Assets.ShaderCompareFunction : int
```

Selects the comparison used by depth testing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L37).

## `Always`

<a id="api-ac7e35efba0a2ccf"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.Always d022a341f1afcb8a08bde0bfae95b59cf5b096035412ee68eddf8238c863e192 -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.Always = 7
```

Always accepts the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L70).

## `Equal`

<a id="api-cb710a0ad3208908"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.Equal 078adb09959352e2f17bbc8e84efbf4e030d654447c3c74bd9484223a4f943fd -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.Equal = 2
```

Accepts a fragment with an equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L50).

## `Greater`

<a id="api-feb654a5a7ac763b"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.Greater 9162ba58941b0f5959a6ba973288062dd9d55cea4f776429dfdf39a62bb452ce -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.Greater = 4
```

Accepts a fragment with a greater depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L58).

## `GreaterEqual`

<a id="api-84d3ee8980982ed3"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.GreaterEqual 793e8e79c9edf73b232e6d414298fd1aeb8a355f8466c47e4eb5f03619e503de -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.GreaterEqual = 6
```

Accepts a fragment with a greater or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L66).

## `Less`

<a id="api-407bd79fa8744a86"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.Less f5bf8843a3622515e85dcd13cdb1777842549f7b46b0088b5ae0eead8a38ddd8 -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.Less = 1
```

Accepts a fragment with a smaller depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L46).

## `LessEqual`

<a id="api-29b1859ffe2c3d50"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.LessEqual 0565d1f44eabbadf7d5e057c0086e4c375d6de385362eefe79a9d4d461832020 -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.LessEqual = 3
```

Accepts a fragment with a smaller or equal depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L54).

## `Never`

<a id="api-300cf104e454250e"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.Never 5383161001763d0f672903fbeff4b96dfa51a539f29b0f2fd97c354a6d15c43e -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.Never = 0
```

Always rejects the fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L42).

## `NotEqual`

<a id="api-37d2e08f52619194"></a>
<!-- api: F:Inno.Rendering.Assets.ShaderCompareFunction.NotEqual 1689f37d3dda3f014d7b885e2d9ed5738d10dcf367a91c9b9d9fe6dcbcfee9b8 -->

```csharp
Inno.Rendering.Assets.ShaderCompareFunction.NotEqual = 5
```

Accepts a fragment with a different depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderRenderState.cs#L62).
