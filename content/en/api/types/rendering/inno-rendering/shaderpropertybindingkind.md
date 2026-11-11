---
title: "ShaderPropertyBindingKind"
description: "Reference for ShaderPropertyBindingKind in Inno.Rendering."
uid: api.inno.rendering.cbcc2cf91ffecd84
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderPropertyBindingKind`

This reference describes `ShaderPropertyBindingKind` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SampledTexture`](#api-0887b3a481e48b34) | Field |
| [`StorageBuffer`](#api-95ddbcef98895998) | Field |
| [`StorageTexture`](#api-3be13f6978fddf40) | Field |
| [`Uniform`](#api-b6e7085d189eec73) | Field |

## Type declaration

<a id="api-cbcc2cf91ffecd84"></a>
<!-- api: T:Inno.Rendering.ShaderPropertyBindingKind cca4cadfcbe8a69e7c9ca2afbf28b51e625313fd15db8e3c1b234ef4e95f4025 -->

```csharp
public enum Inno.Rendering.ShaderPropertyBindingKind : int
```

Defines how one shader property enters the backend-neutral resource interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L14).

## `SampledTexture`

<a id="api-0887b3a481e48b34"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyBindingKind.SampledTexture aef27821563f31ae3714d62e1368447e1360fa69fd4cfcde91fe3f369e3fdf97 -->

```csharp
Inno.Rendering.ShaderPropertyBindingKind.SampledTexture = 1
```

Texture sampled through an explicit material sampler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L23).

## `StorageBuffer`

<a id="api-95ddbcef98895998"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyBindingKind.StorageBuffer 5fcf7e187318a83bf6623da289e6bbc25f55bf798b30a2c7cd510f873ad86ab3 -->

```csharp
Inno.Rendering.ShaderPropertyBindingKind.StorageBuffer = 3
```

Buffer bound for unordered shader access by a Pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L31).

## `StorageTexture`

<a id="api-3be13f6978fddf40"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyBindingKind.StorageTexture a3786d4f2e8268a547e6827a60ed20a14b424d579aa0a34e3a314d64a2cf9ac9 -->

```csharp
Inno.Rendering.ShaderPropertyBindingKind.StorageTexture = 2
```

Texture bound for unordered shader access by a Pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L27).

## `Uniform`

<a id="api-b6e7085d189eec73"></a>
<!-- api: F:Inno.Rendering.ShaderPropertyBindingKind.Uniform 5545148ab19cebddac8fac6e1f488e2fdeae85e7d9c443c94012e356acab318e -->

```csharp
Inno.Rendering.ShaderPropertyBindingKind.Uniform = 0
```

Vector or matrix uniform data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L19).
