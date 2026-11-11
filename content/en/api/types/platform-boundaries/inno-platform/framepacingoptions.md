---
title: "FramePacingOptions"
description: "Reference for FramePacingOptions in Inno.Platform."
uid: api.inno.platform.2ab34d297d9deb35
kind: api
owners:
  - Inno.Platform
apiSurface: source-clr
contracts:
  - project.inno-platform
---
# `FramePacingOptions`

This reference describes `FramePacingOptions` in `Inno.Platform`. Read the [shared contract](../../../projects/inno-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6df1ace530fe2350) | Method |
| [`maximumFrameRate`](#api-ef6bedbb76004e38) | Property |
| [`verticalSync`](#api-f91aaee63f0389ef) | Property |

## Type declaration

<a id="api-2ab34d297d9deb35"></a>
<!-- api: T:Inno.Platform.FramePacingOptions 92b43b439d5e13ae023bedd8a662029c563d84bd8ed51159895ebe713c715df3 -->

```csharp
public sealed class Inno.Platform.FramePacingOptions
```

Defines host presentation cadence independently of simulation and fixed-step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/FramePacingOptions.cs#L8).

## `#ctor`

<a id="api-6df1ace530fe2350"></a>
<!-- api: M:Inno.Platform.FramePacingOptions.#ctor 2ab231ca399ba3c7c6fc166eb6a0c3122c44cfbc3685ad68927f888b690ecc35 -->

```csharp
public Inno.Platform.FramePacingOptions.FramePacingOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/FramePacingOptions.cs#L8).

## `maximumFrameRate`

<a id="api-ef6bedbb76004e38"></a>
<!-- api: P:Inno.Platform.FramePacingOptions.maximumFrameRate 143136c3466d3fabbb87ea32812550328da8ff2a7802ded64aaf91bcb175d50d -->

```csharp
public int Inno.Platform.FramePacingOptions.maximumFrameRate { get; set; }
```

Gets or sets the software frame-rate ceiling. Zero leaves the frame rate unlimited.

**Throws `System.ArgumentOutOfRangeException`:** The value is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/FramePacingOptions.cs#L21).

## `verticalSync`

<a id="api-f91aaee63f0389ef"></a>
<!-- api: P:Inno.Platform.FramePacingOptions.verticalSync 1e186660257f7ec48d5d05bb9df682119fa983e0345dffa58fb3eed62f678d6e -->

```csharp
public bool Inno.Platform.FramePacingOptions.verticalSync { get; set; }
```

Gets or sets whether presentation waits for display synchronization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/FramePacingOptions.cs#L13).
