---
title: "RenderShaderBindingKind"
description: "Reference for RenderShaderBindingKind in Inno.Rendering."
uid: api.inno.rendering.runtime-script.b91da2f24a162c6f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderShaderBindingKind`

This reference describes `RenderShaderBindingKind` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`StorageBuffer`](#api-faf2e7a44d2acf4f) | Field |
| [`StorageTexture`](#api-064bc4df464420cc) | Field |
| [`Texture`](#api-6b9331202d0bf48b) | Field |
| [`Uniform`](#api-5b95cfb72facdb06) | Field |

## Type declaration

<a id="api-b91da2f24a162c6f"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderBindingKind 12d3ad94e3e76998b2308b25631cb404a04f53b3d2ac6eb7ae8d6782c70ad5c3 -->

```csharp
public enum InnoEngine.Rendering.RenderShaderBindingKind : int
```

Identifies a shader interface binding domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L10).

## `StorageBuffer`

<a id="api-faf2e7a44d2acf4f"></a>
<!-- api: F:InnoEngine.Rendering.RenderShaderBindingKind.StorageBuffer 12212a6117186c49b315bf122a636a801393fdba21c6d7f5656bdbe631dfa09e -->

```csharp
InnoEngine.Rendering.RenderShaderBindingKind.StorageBuffer = 3
```

Compute-readable or writable buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L27).

## `StorageTexture`

<a id="api-064bc4df464420cc"></a>
<!-- api: F:InnoEngine.Rendering.RenderShaderBindingKind.StorageTexture aa4e3a24ff0d8862a23e050e05aea82c40c45646aaa9cf199bd70104d4319555 -->

```csharp
InnoEngine.Rendering.RenderShaderBindingKind.StorageTexture = 2
```

Shader-readable or writable storage texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L23).

## `Texture`

<a id="api-6b9331202d0bf48b"></a>
<!-- api: F:InnoEngine.Rendering.RenderShaderBindingKind.Texture 645bf700b1ba4838ab51a2f4ae4ca3a8dbd5d7e357e7ea240d38dbda76a0bb49 -->

```csharp
InnoEngine.Rendering.RenderShaderBindingKind.Texture = 1
```

Sampled texture and sampler state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L19).

## `Uniform`

<a id="api-5b95cfb72facdb06"></a>
<!-- api: F:InnoEngine.Rendering.RenderShaderBindingKind.Uniform 48dc36e5dbbbe88250dd3993dfbb233e1e177c5111ff86ccb1b431a30bfd7f10 -->

```csharp
InnoEngine.Rendering.RenderShaderBindingKind.Uniform = 0
```

Vector or matrix uniform data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L15).
