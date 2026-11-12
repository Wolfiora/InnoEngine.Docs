---
title: "RenderUniformType"
description: "Reference for RenderUniformType in Inno.Rendering."
uid: api.inno.rendering.runtime-script.92a10960a7d05e37
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderUniformType`

This reference describes `RenderUniformType` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Matrix3x3`](#api-5e885f3ab57897ef) | Field |
| [`Matrix4x4`](#api-71bbece6e63d5b72) | Field |
| [`Vector4`](#api-4e0530886d702c9f) | Field |

## Type declaration

<a id="api-92a10960a7d05e37"></a>
<!-- api: T:InnoEngine.Rendering.RenderUniformType 01a7f7c3507f9975781293748c86296d1f9786f2b60d6988c409c0a1df02441b -->

```csharp
public enum InnoEngine.Rendering.RenderUniformType : int
```

Identifies the native-independent shape of one uniform binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L33).

## `Matrix3x3`

<a id="api-5e885f3ab57897ef"></a>
<!-- api: F:InnoEngine.Rendering.RenderUniformType.Matrix3x3 13eeceecb1b3355ca4b9b25ebbd2f0f9b07b19f710e7680ef1a5c746d7128453 -->

```csharp
InnoEngine.Rendering.RenderUniformType.Matrix3x3 = 1
```

Three-by-three 32-bit floating-point matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L42).

## `Matrix4x4`

<a id="api-71bbece6e63d5b72"></a>
<!-- api: F:InnoEngine.Rendering.RenderUniformType.Matrix4x4 66fa00b08a2f061410deae712babb2d4259d227cee2554bb9bab918ef3b8286c -->

```csharp
InnoEngine.Rendering.RenderUniformType.Matrix4x4 = 2
```

Four-by-four 32-bit floating-point matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L46).

## `Vector4`

<a id="api-4e0530886d702c9f"></a>
<!-- api: F:InnoEngine.Rendering.RenderUniformType.Vector4 06329d0bb6ce6da592bcbba91995b4f30aba893eba43fe1b3eff1485af192822 -->

```csharp
InnoEngine.Rendering.RenderUniformType.Vector4 = 0
```

Four-component 32-bit floating-point vector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L38).
