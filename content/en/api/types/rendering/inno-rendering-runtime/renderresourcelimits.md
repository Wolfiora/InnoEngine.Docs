---
title: "RenderResourceLimits"
description: "Reference for RenderResourceLimits in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.166b1e6dec7d3e84
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderResourceLimits`

This reference describes `RenderResourceLimits` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8bcc239e47748e8f) | Method |
| [`pendingReadbacks`](#api-c81132f27f05218a) | Property |
| [`resourcesPerKind`](#api-2c213ac43aa7826c) | Property |
| [`targets`](#api-868654d1bfa50a15) | Property |
| [`uploadBytesPerFrame`](#api-66668c01512251a5) | Property |
| [`uploadPages`](#api-3075bcf5a72778f2) | Property |
| [`uploadResidentBytes`](#api-3624e9a7a75d8381) | Property |

## Type declaration

<a id="api-166b1e6dec7d3e84"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderResourceLimits 0c112ffe6ff68a6fe19ac2aa8d8731cfe5f9dcd8e5b561e0ece85e349a4132a5 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderResourceLimits
```

Sets finite native resource and asynchronous readback admission limits for one rendering owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L8).

## `#ctor`

<a id="api-8bcc239e47748e8f"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceLimits.#ctor 398c478d5779c3fd2e5548a6b76cdae5b8db3d80d70f64a32dc990a3f1027f2e -->

```csharp
public Inno.Rendering.Runtime.RenderResourceLimits.RenderResourceLimits()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L8).

## `pendingReadbacks`

<a id="api-c81132f27f05218a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.pendingReadbacks eedf74ee660a441d1ccc99816b9102876a753dcf0ea7a8a8be00255ca1c928e3 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceLimits.pendingReadbacks { get; init; }
```

Gets the maximum readbacks that can retain GPU resources before owner-thread completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L18).

## `resourcesPerKind`

<a id="api-2c213ac43aa7826c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.resourcesPerKind 25d19f3a8676cfe501c756c432671d8704a593ade2d0877f7f33c6d1dee4d844 -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceLimits.resourcesPerKind { get; init; }
```

Gets the maximum active entries in each buffer, texture or pipeline cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L13).

## `targets`

<a id="api-868654d1bfa50a15"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.targets fa52b12065aa7ae5ae78b23cf57f14f0e2754b127750554a1a4319289e0c865f -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceLimits.targets { get; init; }
```

Gets the offscreen target count and per-frame target allocation capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L35).

## `uploadBytesPerFrame`

<a id="api-66668c01512251a5"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.uploadBytesPerFrame 5208904dd00c1a6f1f51141e5c270831427e49320724eccee2670c06497e6572 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceLimits.uploadBytesPerFrame { get; init; }
```

Gets the maximum bytes uploaded during one frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L31).

## `uploadPages`

<a id="api-3075bcf5a72778f2"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.uploadPages ca005b65c010a8a25da9b6c65836981605353d3ca005ddea1d07e87d6ab0babe -->

```csharp
public int Inno.Rendering.Runtime.RenderResourceLimits.uploadPages { get; init; }
```

Gets the maximum resident frame-upload pages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L23).

## `uploadResidentBytes`

<a id="api-3624e9a7a75d8381"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderResourceLimits.uploadResidentBytes badce4909daeb79205b1a194e7467bb0d04aebc7f632f570acc3c9f24e044ed4 -->

```csharp
public long Inno.Rendering.Runtime.RenderResourceLimits.uploadResidentBytes { get; init; }
```

Gets the maximum resident frame-upload bytes, including retired pages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderResourceLimits.cs#L27).
