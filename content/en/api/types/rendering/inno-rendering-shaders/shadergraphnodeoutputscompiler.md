---
title: "ShaderGraphNodeOutputsCompiler"
description: "Reference for ShaderGraphNodeOutputsCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.c6ebc293b3245308
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeOutputsCompiler`

This reference describes `ShaderGraphNodeOutputsCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9f11a0bdac75e815) | Method |
| [`GetPorts`](#api-b4c188b3ad4867b1) | Method |
| [`Lower`](#api-cb8de97078c29568) | Method |
| [`definitionId`](#api-99677e361e0970ff) | Property |

## Type declaration

<a id="api-c6ebc293b3245308"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler 2c2abbc78956fea7cb841ad1f577f7e3a484c4326877678e3aed18bd62a8be36 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Describes the multi-port returned values while editing a graph-authored function node asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L668).

## `#ctor`

<a id="api-9f11a0bdac75e815"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.#ctor 687c8de217852baacfea344b85e58f2fb53c31c3fd8614483c8ebc13678dad88 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.ShaderGraphNodeOutputsCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L668).

## `GetPorts`

<a id="api-b4c188b3ad4867b1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 71e62c4ae994589b07c0e118075be8a96ee427826fbdcc15f2cf4dd70a8604fd -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L683).

## `Lower`

<a id="api-cb8de97078c29568"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) c1c80549e552018b10f0ab58e80401e7885016c3a172027cba704272720645b1 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L695).

## `definitionId`

<a id="api-99677e361e0970ff"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.definitionId 7aa92bfec54199d6d06aa8deb7f2ef12f1ff69a8b5f8e59761e2af0c30467444 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeOutputsCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L673).
