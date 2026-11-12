---
title: "ShaderGraphNodeKind"
description: "Reference for ShaderGraphNodeKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.3f780af63e593bee
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeKind`

This reference describes `ShaderGraphNodeKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DomainOutput`](#api-15279c55c5c2c78d) | Field |
| [`Function`](#api-0c84c951b5b9efaf) | Field |

## Type declaration

<a id="api-3f780af63e593bee"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeKind a7266239e13b2d0bfe4e0351f724bcca17134f67d17829590a5141cd69104d41 -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderGraphNodeKind : int
```

Chooses whether a graph-authored node is inlined or consumed by a domain Target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L13).

## `DomainOutput`

<a id="api-15279c55c5c2c78d"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodeKind.DomainOutput 98aae1c95cf1b168682bc43671cf44fcdf3fc986ee29dbb910c2285562f5f745 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderGraphNodeKind.DomainOutput = 1
```

Leaves the node as a typed domain boundary for the selected Shader Target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L22).

## `Function`

<a id="api-0c84c951b5b9efaf"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodeKind.Function 248714ddfc41c547aa2719d3d3c7ad750ef5a1e2b9c8c7ad49091674ff1b8385 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderGraphNodeKind.Function = 0
```

Inlines the node graph into the caller before Target expansion and typed lowering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L18).
