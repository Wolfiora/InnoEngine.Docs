---
title: "MaterialPropertyBlock"
description: "Reference for MaterialPropertyBlock in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c9cbbc88a18bc0a6
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialPropertyBlock`

This reference describes `MaterialPropertyBlock` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1056febf2d4a2180) | Method |
| [`Clear`](#api-83f7cfd83497a82b) | Method |
| [`Set`](#api-892d3dcc85cd81bb) | Method |
| [`TryGet`](#api-e39eefcfa94cd32e) | Method |
| [`count`](#api-df8f89f944a3a970) | Property |

## Type declaration

<a id="api-c9cbbc88a18bc0a6"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialPropertyBlock 3e3e2b185ce7a1b0861d5169b5398a2af8438f96c61696519ed19c4086a1e5fb -->

```csharp
public sealed class Inno.Rendering.Assets.MaterialPropertyBlock
```

Holds frame-local material overrides without modifying a shared asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L16).

## `#ctor`

<a id="api-1056febf2d4a2180"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPropertyBlock.#ctor 83faed0d4b4b4f56b38da36b3e4e3b3c56171a2d0f2e1de8714484975ebd4805 -->

```csharp
public Inno.Rendering.Assets.MaterialPropertyBlock.MaterialPropertyBlock()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L16).

## `Clear`

<a id="api-83f7cfd83497a82b"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPropertyBlock.Clear 8e75b50de8a8b719aef63ac48185257c6d111058dcdaa4f3f64d0b177ac82b5c -->

```csharp
public void Inno.Rendering.Assets.MaterialPropertyBlock.Clear()
```

Removes all frame-local overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L63).

## `Set`

<a id="api-892d3dcc85cd81bb"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPropertyBlock.Set(Inno.Rendering.ShaderPropertyId,Inno.Rendering.Assets.MaterialValue) 12b9737882e402fd92e5509f0eec2ea729fe01ccb135601c95128d586ec997fb -->

```csharp
public void Inno.Rendering.Assets.MaterialPropertyBlock.Set(Inno.Rendering.ShaderPropertyId id, Inno.Rendering.Assets.MaterialValue value)
```

Creates or replaces one frame-local override.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L34).

## `TryGet`

<a id="api-e39eefcfa94cd32e"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPropertyBlock.TryGet(Inno.Rendering.ShaderPropertyId,Inno.Rendering.Assets.MaterialValue@) 30daddf7d1fcf4856435bf5b7486dc189a4a6a042b33543683f936c721e0b5fd -->

```csharp
public bool Inno.Rendering.Assets.MaterialPropertyBlock.TryGet(Inno.Rendering.ShaderPropertyId id, out Inno.Rendering.Assets.MaterialValue value)
```

Tries to read one frame-local override.

**Parameter `id`:** Stable shader property identifier.

**Returns:** `true` when the override exists.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L55).

## `count`

<a id="api-df8f89f944a3a970"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialPropertyBlock.count 9668d4ff212c8ada2453985e6662a5351edf0f6dc6da2e8335307c9b447f64f1 -->

```csharp
public int Inno.Rendering.Assets.MaterialPropertyBlock.count { get; }
```

Gets the number of active overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyBlock.cs#L23).
