---
title: "ShaderSourceNodeDefinition"
description: "Reference for ShaderSourceNodeDefinition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.af64b23812218e3b
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceNodeDefinition`

This reference describes `ShaderSourceNodeDefinition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Graphs.GraphNodeDefinition`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eef8f8c02c2a4465) | Method |
| [`GetPorts`](#api-275dc7727736566c) | Method |
| [`function`](#api-73d2321edf71a228) | Property |

## Type declaration

<a id="api-af64b23812218e3b"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition 7353e51f924848ce586ef20ecfff2f150144a898914d4423645a64cde047cc66 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition : InnoEngine.Graphs.GraphNodeDefinition
```

Projects one resolved source interface into immutable graph ports without duplicating authored port declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L12).

## `#ctor`

<a id="api-eef8f8c02c2a4465"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.#ctor(InnoEditor.Rendering.Shaders.ShaderSourceFunction) df2c4b67bf1d65a6789723ab42300d87a942057fcc12b03a39e74c6aee663abd -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.ShaderSourceNodeDefinition(InnoEditor.Rendering.Shaders.ShaderSourceFunction function)
```

Creates a source node definition for the currently resolved source generation.

**Parameter `function`:** The single function derived by the source frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L22).

## `GetPorts`

<a id="api-275dc7727736566c"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.GetPorts(InnoEngine.Graphs.GraphNodeRecord) 9d24ab1287d032cea1976f833699c4e129312032eb4a8d99e614cf9e29462db4 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphPortDefinition> InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.GetPorts(InnoEngine.Graphs.GraphNodeRecord node)
```

Gets a ports required by the implemented contract.

**Parameter `node`:** The node consumed by get ports; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L66).

## `function`

<a id="api-73d2321edf71a228"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.function c6f98a7c24ef649cb214712ae6e5e55681685c6c38564d09dff41d8757141b57 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFunction InnoEditor.Rendering.Shaders.ShaderSourceNodeDefinition.function { get; }
```

Gets the immutable parsed source interface belonging to this definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceNodeDefinition.cs#L55).
