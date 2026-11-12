---
title: "ShaderPropertyBindingKind"
description: "Reference for ShaderPropertyBindingKind in Inno.Rendering."
uid: api.inno.rendering.runtime-script.af3cbf9f23b6c4c5
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderPropertyBindingKind`

This reference describes `ShaderPropertyBindingKind` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SampledTexture`](#api-fc127cc7aa42311c) | Field |
| [`StorageBuffer`](#api-a94843ca50392154) | Field |
| [`StorageTexture`](#api-c760cb6f35c50e8b) | Field |
| [`Uniform`](#api-34d35752a22edcb5) | Field |

## Type declaration

<a id="api-af3cbf9f23b6c4c5"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPropertyBindingKind 4a8a59142d73a1e3d1b4db9caa4e7c819b5e278e2a0943b5af44eed1cdf5c061 -->

```csharp
public enum InnoEngine.Rendering.ShaderPropertyBindingKind : int
```

Defines how one shader property enters the backend-neutral resource interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L14).

## `SampledTexture`

<a id="api-fc127cc7aa42311c"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingKind.SampledTexture 3a24ec88cce757119a9e7b777ae0be77cc61eab499d50aa340b8005e9f2b9957 -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingKind.SampledTexture = 1
```

Texture sampled through an explicit material sampler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L23).

## `StorageBuffer`

<a id="api-a94843ca50392154"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingKind.StorageBuffer 6f0c6847fb9359b871c5f0ed225644313585a5f40244c8d1f6eb643ad2445c2d -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingKind.StorageBuffer = 3
```

Buffer bound for unordered shader access by a Pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L31).

## `StorageTexture`

<a id="api-c760cb6f35c50e8b"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingKind.StorageTexture 528e045f2b04bf261605b766eb6a0e46c9dc922e3bcbf73bf94ebc644398a18f -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingKind.StorageTexture = 2
```

Texture bound for unordered shader access by a Pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L27).

## `Uniform`

<a id="api-34d35752a22edcb5"></a>
<!-- api: F:InnoEngine.Rendering.ShaderPropertyBindingKind.Uniform a80d67f45d269cef8335caec38d29e966e444924d2eab343bdbab83ac23c9fee -->

```csharp
InnoEngine.Rendering.ShaderPropertyBindingKind.Uniform = 0
```

Vector or matrix uniform data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyBindingKind.cs#L19).
