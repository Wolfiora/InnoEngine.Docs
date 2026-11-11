---
title: "ShaderTarget"
description: "Reference for ShaderTarget in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.c83ace802694dada
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderTarget`

This reference describes `ShaderTarget` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-830d39c18be06b89) | Method |
| [`Expand`](#api-0911ebb221bcaf22) | Method |

## Type declaration

<a id="api-c83ace802694dada"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderTarget d3f38b980bebcc9842f879ba958c4eb4669d0c8ab439fee36cfdd275bd6d7b99 -->

```csharp
public abstract class Inno.Rendering.Shaders.ShaderTarget
```

Expands a domain's surface contract into ordinary graph stages before source dependency capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L34).

## `#ctor`

<a id="api-830d39c18be06b89"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTarget.#ctor 38c59b77bc5e34638c792d38aec70030a1d5ff49374db9616f6ad2956d957cac -->

```csharp
protected Inno.Rendering.Shaders.ShaderTarget.ShaderTarget()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L34).

## `Expand`

<a id="api-0911ebb221bcaf22"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderTarget.Expand(Inno.Rendering.Shaders.ShaderTargetContext,System.Threading.CancellationToken) a43cf39e3b0f0e39ed3e6725760c9dd966c1e2689a27d6adb9b02ff9b3ed7df9 -->

```csharp
public abstract Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderTarget.Expand(Inno.Rendering.Shaders.ShaderTargetContext context, System.Threading.CancellationToken cancellationToken)
```

Builds explicit stage interfaces, resource declarations, techniques and pass states.

**Parameter `context`:** Invocation-scoped detached document and complete owner serialization services.

**Parameter `cancellationToken`:** Cancellation between expansion operations.

**Returns:** A detached graph for the common typed compiler; all required capabilities belong in its pass contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L48).
