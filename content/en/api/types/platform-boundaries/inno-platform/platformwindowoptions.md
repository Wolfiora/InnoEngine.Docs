---
title: "PlatformWindowOptions"
description: "Reference for PlatformWindowOptions in Inno.Platform."
uid: api.inno.platform.5f26ef4ef9de4a6b
kind: api
owners:
  - Inno.Platform
apiSurface: source-clr
contracts:
  - project.inno-platform
---
# `PlatformWindowOptions`

This reference describes `PlatformWindowOptions` in `Inno.Platform`. Read the [shared contract](../../../projects/inno-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4c3cb042dc8164db) | Method |
| [`height`](#api-1ab0286a6d475e70) | Property |
| [`highPixelDensity`](#api-5d5991a7e7f8e1c4) | Property |
| [`resizable`](#api-c42a0306bf7fb05d) | Property |
| [`title`](#api-cb3a229bd9d25339) | Property |
| [`visible`](#api-666852d6be8ca18b) | Property |
| [`width`](#api-2cc448d97c1ebab6) | Property |

## Type declaration

<a id="api-5f26ef4ef9de4a6b"></a>
<!-- api: T:Inno.Platform.PlatformWindowOptions 92d282015a8f2176b743f4a100031216084983e945bf48c753db6900761da753 -->

```csharp
public readonly struct Inno.Platform.PlatformWindowOptions
```

Defines backend-neutral properties used to create a platform window.

**Returns:** A validated immutable window description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L9).

## `#ctor`

<a id="api-4c3cb042dc8164db"></a>
<!-- api: M:Inno.Platform.PlatformWindowOptions.#ctor 43aed5f19cd1b2ecaf7dbc55a971fe2edd54594d8af8b19b60a10ef02c54eae8 -->

```csharp
public Inno.Platform.PlatformWindowOptions.PlatformWindowOptions()
```

Defines backend-neutral properties used to create a platform window.

**Returns:** A validated immutable window description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L9).

## `height`

<a id="api-1ab0286a6d475e70"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.height e6400c1d4a19c46a3248bd65ca653413c3d3c5f275ed792abf2ab091ad5bbd75 -->

```csharp
public int Inno.Platform.PlatformWindowOptions.height { get; init; }
```

Gets the initial window height in platform-independent logical units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L24).

## `highPixelDensity`

<a id="api-5d5991a7e7f8e1c4"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.highPixelDensity e9f5d5914984967591e17981012516e4b97063f0cc34dde0a20c955dc1f6a2eb -->

```csharp
public bool Inno.Platform.PlatformWindowOptions.highPixelDensity { get; init; }
```

Gets whether high pixel density is requested for the window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L34).

## `resizable`

<a id="api-c42a0306bf7fb05d"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.resizable 81c85ca2f9e25c2f5beb438f8da5280bbb24a22f1f965cdeb480d66941fa7150 -->

```csharp
public bool Inno.Platform.PlatformWindowOptions.resizable { get; init; }
```

Gets whether the window is user-resizable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L29).

## `title`

<a id="api-cb3a229bd9d25339"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.title e444ab8c7e51619d570092fe802a2c28f77bf14531627e3e3a3850a6c4c6f44d -->

```csharp
public string Inno.Platform.PlatformWindowOptions.title { get; init; }
```

Gets the window title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L14).

## `visible`

<a id="api-666852d6be8ca18b"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.visible 8b285e405a5ad9cc327b417574fbd28772e6a63401f34848d9d72971dd27cc16 -->

```csharp
public bool Inno.Platform.PlatformWindowOptions.visible { get; init; }
```

Gets whether the window is initially shown; hidden windows retain their rendering surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L39).

## `width`

<a id="api-2cc448d97c1ebab6"></a>
<!-- api: P:Inno.Platform.PlatformWindowOptions.width 047284322b8f5e8249103f566f2213d1bcd6e4643f1579c34c3e7ec38d7769d3 -->

```csharp
public int Inno.Platform.PlatformWindowOptions.width { get; init; }
```

Gets the initial window width in platform-independent logical units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/PlatformWindowOptions.cs#L19).
