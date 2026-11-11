---
title: "ShaderGraphNodeKind"
description: "Reference for ShaderGraphNodeKind in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.ea1a71b89eb72279
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeKind`

This reference describes `ShaderGraphNodeKind` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DomainOutput`](#api-3c106dad421e914c) | Field |
| [`Function`](#api-dc684144f9cf554d) | Field |

## Type declaration

<a id="api-ea1a71b89eb72279"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeKind 7796620825246e58e80f7f79c23ff7030e023ce7be2730d1defdf2eca6665c37 -->

```csharp
public enum Inno.Rendering.Shaders.ShaderGraphNodeKind : int
```

Chooses whether a graph-authored node is inlined or consumed by a domain Target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L13).

## `DomainOutput`

<a id="api-3c106dad421e914c"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodeKind.DomainOutput 94aac29b608df06fbf30f00c85547d9fa5fa01840f9c754fa7daecc02d659a54 -->

```csharp
Inno.Rendering.Shaders.ShaderGraphNodeKind.DomainOutput = 1
```

Leaves the node as a typed domain boundary for the selected Shader Target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L22).

## `Function`

<a id="api-dc684144f9cf554d"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodeKind.Function e5072c3d5f70da4141db43c9dc6b6a7444f16344c0115d29ed90decf9acf4542 -->

```csharp
Inno.Rendering.Shaders.ShaderGraphNodeKind.Function = 0
```

Inlines the node graph into the caller before Target expansion and typed lowering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L18).
