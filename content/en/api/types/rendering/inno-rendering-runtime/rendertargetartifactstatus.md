---
title: "RenderTargetArtifactStatus"
description: "Reference for RenderTargetArtifactStatus in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.d1080169fb72c7e7
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderTargetArtifactStatus`

This reference describes `RenderTargetArtifactStatus` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Failed`](#api-9b90962777ba6215) | Field |
| [`Pending`](#api-c0341c9097a4e9f9) | Field |
| [`Ready`](#api-2edff6c2e50f0d3c) | Field |
| [`Unavailable`](#api-318c29d3a30b1530) | Field |

## Type declaration

<a id="api-d1080169fb72c7e7"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderTargetArtifactStatus 23622e3c5ad4efb340e5ce609c458a2eaef0392d6a525edc362a4740687e3125 -->

```csharp
public enum Inno.Rendering.Runtime.RenderTargetArtifactStatus : int
```

Describes the current availability of one target-specific rendering artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L9).

## `Failed`

<a id="api-9b90962777ba6215"></a>
<!-- api: F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Failed 16e0c83a6c0f9cf7f2ec950eef3a9b6c1793f93679e7dc0d704dfeeebd3c7484 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus.Failed = 3
```

Artifact production completed unsuccessfully and published a specific diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L29).

## `Pending`

<a id="api-c0341c9097a4e9f9"></a>
<!-- api: F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Pending 8d45a06e69b82b7fd1e829328fdc08d87fe48498ca121e9bb8ef0ef3b3fbd5f9 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus.Pending = 1
```

Artifact production is still running and no usable artifact is available yet.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L19).

## `Ready`

<a id="api-2edff6c2e50f0d3c"></a>
<!-- api: F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready 2f524e5f2d190ff24a474b8eb25920a71151a9cc4fc615500e0e27a98d4c5717 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready = 0
```

A validated artifact is available for immediate use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L14).

## `Unavailable`

<a id="api-318c29d3a30b1530"></a>
<!-- api: F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable 6de3641e6d501e9c8a83301b7c8d8e31ee177d47921da42ad46cb94469701e53 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable = 2
```

The active deployment does not contain the requested artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L24).
