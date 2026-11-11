---
title: "ShaderTargetContext"
description: "Reference for ShaderTargetContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.aeb8f4dd6186810d
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderTargetContext`

This reference describes `ShaderTargetContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`document`](#api-3a0ef6831521ae09) | Property |
| [`references`](#api-992df8f098e57ba5) | Property |
| [`serialization`](#api-7aa686411ce5983a) | Property |

## Type declaration

<a id="api-aeb8f4dd6186810d"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderTargetContext 738d97052f1c3d1978bbb6497f76610bea58228c5947172eafb7bd679f745907 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderTargetContext
```

Supplies neutral authoring data to a domain target without exposing an adapter or live asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L57).

## `document`

<a id="api-3a0ef6831521ae09"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetContext.document ef46b512c722680a5cf1dd8b9332820dbcd30a48f1d2a6d8728874aabadbe63d -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderTargetContext.document { get; }
```

Gets a private document copy; expansion cannot modify the authored source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L72).

## `references`

<a id="api-992df8f098e57ba5"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetContext.references 891006c8256cac109dfec52730f115619405b31b985b68d9ce0bdebcdf23430d -->

```csharp
public Inno.Core.Serialization.SerializationContext Inno.Rendering.Shaders.ShaderTargetContext.references { get; }
```

Gets the complete owner reference context used for generated resource defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L80).

## `serialization`

<a id="api-7aa686411ce5983a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetContext.serialization bdc2847f8e0c8878aeab135ccf07d9d401e1968f27ae8c0f8333e10f88c6ee85 -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Rendering.Shaders.ShaderTargetContext.serialization { get; }
```

Gets the current owner converter registry, valid only during expansion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L76).
