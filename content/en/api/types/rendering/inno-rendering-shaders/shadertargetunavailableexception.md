---
title: "ShaderTargetUnavailableException"
description: "Reference for ShaderTargetUnavailableException in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.189c293bca127c72
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderTargetUnavailableException`

This reference describes `ShaderTargetUnavailableException` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.InvalidOperationException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c3611e667a80eeb3) | Method |
| [`targetId`](#api-5c29448561623d12) | Property |

## Type declaration

<a id="api-189c293bca127c72"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderTargetUnavailableException d02509f4194f5b59bd0c752f9ffa8c84c280a7f69d8ab6b8d3d64f6d496fe5d0 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderTargetUnavailableException : System.InvalidOperationException
```

Identifies an authored target that is absent from the current extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L8).

## `#ctor`

<a id="api-c3611e667a80eeb3"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTargetUnavailableException.#ctor(System.String) 54dae01bb93df6cb28baeaafaa6a9f53d06c82df65b88e23ebfb6f79f116f952 -->

```csharp
public Inno.Rendering.Shaders.ShaderTargetUnavailableException.ShaderTargetUnavailableException(string targetId)
```

Creates a missing-target diagnostic without retaining extension objects.

**Parameter `targetId`:** The stable authored target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L16).

## `targetId`

<a id="api-5c29448561623d12"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderTargetUnavailableException.targetId 90a0ba39cbfa2e787dfb48bb2f55000a9de88cd509108c25ed61fd89020a1371 -->

```csharp
public string Inno.Rendering.Shaders.ShaderTargetUnavailableException.targetId { get; }
```

Gets the stable target identity required by the authored graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L26).
