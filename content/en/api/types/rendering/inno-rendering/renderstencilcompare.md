---
title: "RenderStencilCompare"
description: "Reference for RenderStencilCompare in Inno.Rendering."
uid: api.inno.rendering.d7a18e3b7c2bf34f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStencilCompare`

This reference describes `RenderStencilCompare` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-2104403ee479809c) | Field |
| [`Equal`](#api-65fbbbb4ec66cdaa) | Field |
| [`Greater`](#api-5a2fb852f38affe0) | Field |
| [`GreaterEqual`](#api-04227152a81a6615) | Field |
| [`Less`](#api-32d60dad2872b960) | Field |
| [`LessEqual`](#api-8238cfd66671d261) | Field |
| [`Never`](#api-9d79e1f8524c9612) | Field |
| [`NotEqual`](#api-6a6d01216111a166) | Field |

## Type declaration

<a id="api-d7a18e3b7c2bf34f"></a>
<!-- api: T:Inno.Rendering.RenderStencilCompare 45991c53e8f924dfaf226c0d4fd589bf39a7f4c31165ab3ac71237c2f4d315dc -->

```csharp
public enum Inno.Rendering.RenderStencilCompare : int
```

Selects the comparison applied to stencil reference and stored values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L10).

## `Always`

<a id="api-2104403ee479809c"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.Always 8d821c7d64f6ad811f0c156d54578b79bf8fbf81517e43bcfee766ab01c9c1e6 -->

```csharp
Inno.Rendering.RenderStencilCompare.Always = 7
```

Always passes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L43).

## `Equal`

<a id="api-65fbbbb4ec66cdaa"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.Equal 5c46982f36661c3258986d9cad3a39309316cfcf6c5d7aec988bc130ca7e0a34 -->

```csharp
Inno.Rendering.RenderStencilCompare.Equal = 2
```

Passes when values are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L23).

## `Greater`

<a id="api-5a2fb852f38affe0"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.Greater bfa276ff98b28ac832de9f78e97b5c2bfbf40eb1d6161daa6b2046950ebd7bb2 -->

```csharp
Inno.Rendering.RenderStencilCompare.Greater = 4
```

Passes when reference is greater.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L31).

## `GreaterEqual`

<a id="api-04227152a81a6615"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.GreaterEqual 1c62e0d257ed13ab11dbfde05987ee5ff15962cfc6c1e3886c10c70164c786c2 -->

```csharp
Inno.Rendering.RenderStencilCompare.GreaterEqual = 6
```

Passes when reference is greater or equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L39).

## `Less`

<a id="api-32d60dad2872b960"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.Less 84335fa0c8fe260dd35614a48a41cd1fa17e87c9678cdb7f9b222ca926e5cd3a -->

```csharp
Inno.Rendering.RenderStencilCompare.Less = 1
```

Passes when reference is smaller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L19).

## `LessEqual`

<a id="api-8238cfd66671d261"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.LessEqual 938a8767708d97c8d569d711a422da2afa6dd73e51c80314cc0bbdcdefb73ad0 -->

```csharp
Inno.Rendering.RenderStencilCompare.LessEqual = 3
```

Passes when reference is smaller or equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L27).

## `Never`

<a id="api-9d79e1f8524c9612"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.Never fc1f3a1decc5eba493a3646adebb279c3b4d6c194b4810a026a078ef3802f9fb -->

```csharp
Inno.Rendering.RenderStencilCompare.Never = 0
```

Never passes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L15).

## `NotEqual`

<a id="api-6a6d01216111a166"></a>
<!-- api: F:Inno.Rendering.RenderStencilCompare.NotEqual 045cc38566ba8c526bf96bd085548c38ad74e03853f8110ee01673f580050e34 -->

```csharp
Inno.Rendering.RenderStencilCompare.NotEqual = 5
```

Passes when values differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L35).
