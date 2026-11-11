---
title: "ShaderSourceNodeDefinition"
description: "Reference for ShaderSourceNodeDefinition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2864034b65df4948
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceNodeDefinition`

This reference describes `ShaderSourceNodeDefinition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Graphs.GraphNodeDefinition`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-29141535010b7788) | Method |
| [`GetPorts`](#api-7490896a0a80a93d) | Method |
| [`function`](#api-0331f6b5d4f01f37) | Property |

## Type declaration

<a id="api-2864034b65df4948"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceNodeDefinition e868456dcc57c7f489593b371d561fb6c9af5c7ca89d6eff21121188cbe7eb1a -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceNodeDefinition : Inno.Core.Graphs.GraphNodeDefinition
```

Projects one resolved source interface into immutable graph ports without duplicating authored port declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L12).

## `#ctor`

<a id="api-29141535010b7788"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceNodeDefinition.#ctor(Inno.Rendering.Shaders.ShaderSourceFunction) 8babbc924e275f23524e9d7167697b91dc5a36c360bd02a8e808643fbfbffd54 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceNodeDefinition.ShaderSourceNodeDefinition(Inno.Rendering.Shaders.ShaderSourceFunction function)
```

Creates a source node definition for the currently resolved source generation.

**Parameter `function`:** The single function derived by the source frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L22).

## `GetPorts`

<a id="api-7490896a0a80a93d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceNodeDefinition.GetPorts(Inno.Core.Graphs.GraphNodeRecord) 2e58bb68a94ac4eb02a0b19afefab7082eee0f9c4ef4b8361f30cdd18232d583 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphPortDefinition> Inno.Rendering.Shaders.ShaderSourceNodeDefinition.GetPorts(Inno.Core.Graphs.GraphNodeRecord node)
```

Gets a ports required by the implemented contract.

**Parameter `node`:** The node consumed by get ports; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L66).

## `function`

<a id="api-0331f6b5d4f01f37"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceNodeDefinition.function 4c9468efe7ccf2f849c700d84002ef4cc8d06922eed5be6665d1f892badcbfa2 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFunction Inno.Rendering.Shaders.ShaderSourceNodeDefinition.function { get; }
```

Gets the immutable parsed source interface belonging to this definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L55).
