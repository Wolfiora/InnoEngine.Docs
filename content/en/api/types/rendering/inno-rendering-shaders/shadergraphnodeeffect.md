---
title: "ShaderGraphNodeEffect"
description: "Reference for ShaderGraphNodeEffect in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.13e7a6e108726352
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeEffect`

This reference describes `ShaderGraphNodeEffect` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Pure`](#api-16c380978eed3ed6) | Field |
| [`SideEffect`](#api-14c8928521fd5ee0) | Field |

## Type declaration

<a id="api-13e7a6e108726352"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeEffect a0c25ff2c8724ce662076f68a010fadb79b93801aa7ea30bd448106e4654cfda -->

```csharp
public enum Inno.Rendering.Shaders.ShaderGraphNodeEffect : int
```

Declares whether a graph-authored function is pure or intentionally emits ordered effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L28).

## `Pure`

<a id="api-16c380978eed3ed6"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodeEffect.Pure da511ab431dcb2b22d9eb76a53c09cf17072ee92a50196437eab50ac29082985 -->

```csharp
Inno.Rendering.Shaders.ShaderGraphNodeEffect.Pure = 0
```

The function only computes returned values and therefore requires at least one output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L33).

## `SideEffect`

<a id="api-14c8928521fd5ee0"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodeEffect.SideEffect b120bf63ec2a8ff05fd9385a3d7771e7a4fe0c5f8f3b74013f5493053509d250 -->

```csharp
Inno.Rendering.Shaders.ShaderGraphNodeEffect.SideEffect = 1
```

The function may contain ordered GPU effects and can intentionally expose no returned values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L37).
