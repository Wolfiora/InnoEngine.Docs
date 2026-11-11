---
title: "RenderShaderBindingDescriptor"
description: "Reference for RenderShaderBindingDescriptor in Inno.Rendering."
uid: api.inno.rendering.0f5c3e025c196878
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderShaderBindingDescriptor`

This reference describes `RenderShaderBindingDescriptor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b07c7ac647010c76) | Method |
| [`count`](#api-cabae5a1f81e038d) | Property |
| [`id`](#api-8c30631b022e7a93) | Property |
| [`kind`](#api-c302243e56aea6fd) | Property |
| [`nativeName`](#api-e21e4ddc89c2f195) | Property |
| [`slot`](#api-6e86d17d3db609b5) | Property |
| [`storageAccess`](#api-f7ff239a0d21c2bf) | Property |
| [`uniformType`](#api-bb4a2b9e63391214) | Property |

## Type declaration

<a id="api-0f5c3e025c196878"></a>
<!-- api: T:Inno.Rendering.RenderShaderBindingDescriptor f8d55055912d214f4213bd50f71962aaca258234debb230fdf76ffe883d505aa -->

```csharp
public sealed class Inno.Rendering.RenderShaderBindingDescriptor
```

Declares one manifest-derived shader binding used for reflection validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L71).

## `#ctor`

<a id="api-b07c7ac647010c76"></a>
<!-- api: M:Inno.Rendering.RenderShaderBindingDescriptor.#ctor(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind,System.Int32,Inno.Rendering.RenderUniformType,System.Int32,Inno.Rendering.RenderStorageAccess,System.String) 4826251c8b68f9d0ce042ee133809931d83dd3f274ef49a11b0411bd7a457471 -->

```csharp
public Inno.Rendering.RenderShaderBindingDescriptor.RenderShaderBindingDescriptor(Inno.Rendering.RenderBindingId id, Inno.Rendering.RenderShaderBindingKind kind, int slot = 0, Inno.Rendering.RenderUniformType uniformType = Inno.Rendering.RenderUniformType.Vector4, int count = 1, Inno.Rendering.RenderStorageAccess storageAccess = Inno.Rendering.RenderStorageAccess.Read, string? nativeName = null)
```

Creates a shader binding descriptor.

**Parameter `id`:** Stable manifest binding name.

**Parameter `kind`:** Binding domain.

**Parameter `slot`:** Backend-neutral texture or storage slot.

**Parameter `uniformType`:** Uniform shape when `kind` is Uniform.

**Parameter `count`:** Uniform array element count.

**Parameter `storageAccess`:** Storage texture or buffer access.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L97).

## `count`

<a id="api-cabae5a1f81e038d"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.count 0662a8b3c98d1dd94cca0671c938172740b07ef8c88d3703c23e9cef26c73393 -->

```csharp
public int Inno.Rendering.RenderShaderBindingDescriptor.count { get; }
```

Gets uniform array element count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L152).

## `id`

<a id="api-8c30631b022e7a93"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.id 9c369972c26e71b5a426c1802e808c82b8577d43588247312a646b73791895a0 -->

```csharp
public Inno.Rendering.RenderBindingId Inno.Rendering.RenderShaderBindingDescriptor.id { get; }
```

Gets the stable manifest binding name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L132).

## `kind`

<a id="api-c302243e56aea6fd"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.kind baff879f1f51a0d162139118e557f8f246d4f7ffc035e6ef291a45eeb23f3b97 -->

```csharp
public Inno.Rendering.RenderShaderBindingKind Inno.Rendering.RenderShaderBindingDescriptor.kind { get; }
```

Gets the binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L137).

## `nativeName`

<a id="api-e21e4ddc89c2f195"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.nativeName bdf727e4a515526a0cd7ed6412d3676939569e301c315d489745dc13fdec4b22 -->

```csharp
public string Inno.Rendering.RenderShaderBindingDescriptor.nativeName { get; }
```

Gets the exact adapter-generated symbol used only for reflection and native resource creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L162).

## `slot`

<a id="api-6e86d17d3db609b5"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.slot c63df7dea11eacdabfa0a7f15fe9da438717494989e045f37b0a67b36a87076f -->

```csharp
public int Inno.Rendering.RenderShaderBindingDescriptor.slot { get; }
```

Gets the backend-neutral texture or storage slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L142).

## `storageAccess`

<a id="api-f7ff239a0d21c2bf"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.storageAccess 812638b274b4eacbaa2e8077ef105e0c953bf328d4fa8cf68d9b39874c97bc7e -->

```csharp
public Inno.Rendering.RenderStorageAccess Inno.Rendering.RenderShaderBindingDescriptor.storageAccess { get; }
```

Gets storage texture or buffer access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L157).

## `uniformType`

<a id="api-bb4a2b9e63391214"></a>
<!-- api: P:Inno.Rendering.RenderShaderBindingDescriptor.uniformType c16235e4cfd6861977bddfd5c7d654806d2c59209c2881426e1242bc70d694cf -->

```csharp
public Inno.Rendering.RenderUniformType Inno.Rendering.RenderShaderBindingDescriptor.uniformType { get; }
```

Gets the uniform shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L147).
