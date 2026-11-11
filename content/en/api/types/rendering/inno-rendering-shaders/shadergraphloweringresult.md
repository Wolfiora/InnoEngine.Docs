---
title: "ShaderGraphLoweringResult"
description: "Reference for ShaderGraphLoweringResult in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.93592dfd755c17a9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphLoweringResult`

This reference describes `ShaderGraphLoweringResult` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`block`](#api-6f6376570c1712f4) | Property |
| [`diagnostics`](#api-58a668e8977a1bcd) | Property |
| [`succeeded`](#api-0a201b0a270ac542) | Property |

## Type declaration

<a id="api-93592dfd755c17a9"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphLoweringResult 58ad5ed32cfaa6230343a12add168555f4931fccf41b5e533b93ef10dd95a974 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphLoweringResult
```

Contains a detached typed region only after all graph, port and node lowering validation succeeds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L101).

## `block`

<a id="api-6f6376570c1712f4"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringResult.block 9616fe369189979e4131d25bc78e99d124c5352f43f9b979182372b98412546a -->

```csharp
public Inno.Rendering.Shaders.ShaderIrBlock? Inno.Rendering.Shaders.ShaderGraphLoweringResult.block { get; }
```

Gets the immutable typed region, or null on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L113).

## `diagnostics`

<a id="api-58a668e8977a1bcd"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringResult.diagnostics 2fb654f1a021f0f79e0f7ceca3b856b08917c42e064cb60856ad0af4af21087e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderGraphDiagnostic> Inno.Rendering.Shaders.ShaderGraphLoweringResult.diagnostics { get; }
```

Gets located graph diagnostics, including missing definitions and stale source ports.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L117).

## `succeeded`

<a id="api-0a201b0a270ac542"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphLoweringResult.succeeded 803914676509342047989ea733624556e111baa7bd1fc0ec59d7f5f370817477 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphLoweringResult.succeeded { get; }
```

Gets whether lowering produced a complete region without errors; native compilation is a separate gate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderGraphLoweringRequest.cs#L121).
