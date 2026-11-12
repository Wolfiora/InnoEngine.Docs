---
title: "ShaderTarget"
description: "Reference for ShaderTarget in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.c858cb6ba45db364
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderTarget`

This reference describes `ShaderTarget` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f5c815862a9f6bc) | Method |
| [`Expand`](#api-292c0356d9bd23b2) | Method |

## Type declaration

<a id="api-c858cb6ba45db364"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderTarget afa685f518d01ff7fac5e978ce1bc8991f570b4e534faefe37b0a43c3cec77bc -->

```csharp
public abstract class InnoEditor.Rendering.Shaders.ShaderTarget
```

Expands a domain's surface contract into ordinary graph stages before source dependency capture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L34).

## `#ctor`

<a id="api-4f5c815862a9f6bc"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderTarget.#ctor 1970ef5112f32cdeb829612153ecdc55eb214e8aa5c49883fa1d2e2f08623aaa -->

```csharp
protected InnoEditor.Rendering.Shaders.ShaderTarget.ShaderTarget()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L34).

## `Expand`

<a id="api-292c0356d9bd23b2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderTarget.Expand(InnoEditor.Rendering.Shaders.ShaderTargetContext,System.Threading.CancellationToken) dcae4aeec38db8cfc75354035c1da9e06fefc52b6806448c0e013385a145e4f6 -->

```csharp
public abstract InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderTarget.Expand(InnoEditor.Rendering.Shaders.ShaderTargetContext context, System.Threading.CancellationToken cancellationToken)
```

Builds explicit stage interfaces, resource declarations, techniques and pass states.

**Parameter `context`:** Invocation-scoped detached document and complete owner serialization services.

**Parameter `cancellationToken`:** Cancellation between expansion operations.

**Returns:** A detached graph for the common typed compiler; all required capabilities belong in its pass contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L48).
