---
title: "MaterialValueKind"
description: "Reference for MaterialValueKind in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.060c8d048d970c53
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialValueKind`

This reference describes `MaterialValueKind` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Color`](#api-91d82abcb8829131) | Field |
| [`Float`](#api-16bab1789d30b6fc) | Field |
| [`Matrix`](#api-d1a05d99975f7ffb) | Field |
| [`Texture`](#api-5ae77afa0e82cfba) | Field |
| [`Vector`](#api-a8c8a02be9b3f40b) | Field |

## Type declaration

<a id="api-060c8d048d970c53"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialValueKind 9ae971b7f35a5408c2d13551eb0e859ca8c48ed4f7bafbdcc8ac9af5176d804a -->

```csharp
public enum Inno.Rendering.Assets.MaterialValueKind : int
```

Identifies the neutral value stored by a material property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L16).

## `Color`

<a id="api-91d82abcb8829131"></a>
<!-- api: F:Inno.Rendering.Assets.MaterialValueKind.Color d838cad55a90bbd0f8e02736a285d8599b05faf02c03193598aa058ed281041a -->

```csharp
Inno.Rendering.Assets.MaterialValueKind.Color = 2
```

Linear color value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L29).

## `Float`

<a id="api-16bab1789d30b6fc"></a>
<!-- api: F:Inno.Rendering.Assets.MaterialValueKind.Float 227477f1ee519d1664177f405ceefb18effdcf85dd887b596e6cd470273a10ad -->

```csharp
Inno.Rendering.Assets.MaterialValueKind.Float = 0
```

Scalar floating-point value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L21).

## `Matrix`

<a id="api-d1a05d99975f7ffb"></a>
<!-- api: F:Inno.Rendering.Assets.MaterialValueKind.Matrix ab0cd8dff90cb7a5800baa56554fca48175c1e2fc96fa758bc01ca7cb29c1f73 -->

```csharp
Inno.Rendering.Assets.MaterialValueKind.Matrix = 3
```

Four-by-four matrix value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L33).

## `Texture`

<a id="api-5ae77afa0e82cfba"></a>
<!-- api: F:Inno.Rendering.Assets.MaterialValueKind.Texture 8223fff295b740d9da764bbbba7c9c44dc5faabcc0977d7fa2ec3b48604eb733 -->

```csharp
Inno.Rendering.Assets.MaterialValueKind.Texture = 4
```

Texture asset reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L37).

## `Vector`

<a id="api-a8c8a02be9b3f40b"></a>
<!-- api: F:Inno.Rendering.Assets.MaterialValueKind.Vector 6dcc5e052f814af1d16f1f1d9405f60f9a7746bd1c55d0ce6df877fe201db91a -->

```csharp
Inno.Rendering.Assets.MaterialValueKind.Vector = 1
```

Four-component vector value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L25).
