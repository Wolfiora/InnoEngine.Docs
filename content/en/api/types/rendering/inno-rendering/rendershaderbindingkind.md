---
title: "RenderShaderBindingKind"
description: "Reference for RenderShaderBindingKind in Inno.Rendering."
uid: api.inno.rendering.4b476a3ba69a8b6e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderShaderBindingKind`

This reference describes `RenderShaderBindingKind` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`StorageBuffer`](#api-8dd9f6e157cd351a) | Field |
| [`StorageTexture`](#api-980cc2453f2c7707) | Field |
| [`Texture`](#api-7bf4e8fb53a7d924) | Field |
| [`Uniform`](#api-b9cc1303917e2f2b) | Field |

## Type declaration

<a id="api-4b476a3ba69a8b6e"></a>
<!-- api: T:Inno.Rendering.RenderShaderBindingKind 2e87a6bf5d59f21ffbfa4aa9166b81fef37e924de6623eafd7e9144ac33bbff8 -->

```csharp
public enum Inno.Rendering.RenderShaderBindingKind : int
```

Identifies a shader interface binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L10).

## `StorageBuffer`

<a id="api-8dd9f6e157cd351a"></a>
<!-- api: F:Inno.Rendering.RenderShaderBindingKind.StorageBuffer d3399c93d25cbd5e4154a925f25ac2a7216950639dff6f25c713de5b9186e9ef -->

```csharp
Inno.Rendering.RenderShaderBindingKind.StorageBuffer = 3
```

Compute-readable or writable buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L27).

## `StorageTexture`

<a id="api-980cc2453f2c7707"></a>
<!-- api: F:Inno.Rendering.RenderShaderBindingKind.StorageTexture b6199312df6bc117d1ba69a95dc1e675bf19c4a1c0a23d7d1cecb98285bfbeae -->

```csharp
Inno.Rendering.RenderShaderBindingKind.StorageTexture = 2
```

Shader-readable or writable storage texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L23).

## `Texture`

<a id="api-7bf4e8fb53a7d924"></a>
<!-- api: F:Inno.Rendering.RenderShaderBindingKind.Texture ab57629a40756cf282dc24e9179f47a4746650089efb789b141a0bae2d9ab67a -->

```csharp
Inno.Rendering.RenderShaderBindingKind.Texture = 1
```

Sampled texture and sampler state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L19).

## `Uniform`

<a id="api-b9cc1303917e2f2b"></a>
<!-- api: F:Inno.Rendering.RenderShaderBindingKind.Uniform 8feadd1c8cdce7b644081aa529b25e476dda70b38fa2ed74b6d407767a53cd15 -->

```csharp
Inno.Rendering.RenderShaderBindingKind.Uniform = 0
```

Vector or matrix uniform data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L15).
