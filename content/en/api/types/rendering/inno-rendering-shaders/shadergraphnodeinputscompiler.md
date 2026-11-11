---
title: "ShaderGraphNodeInputsCompiler"
description: "Reference for ShaderGraphNodeInputsCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2b361927e7898ee8
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeInputsCompiler`

This reference describes `ShaderGraphNodeInputsCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6fdc7931d70b904b) | Method |
| [`GetPorts`](#api-75da4e1f4172f1c9) | Method |
| [`Lower`](#api-753cc43fb9ada43b) | Method |
| [`definitionId`](#api-1d53adaab112ec3e) | Property |

## Type declaration

<a id="api-2b361927e7898ee8"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler 3f1e5541cb3857e217f40ca92bb0ed1adc7d1c59f8c800ba93b1fbff4ca6aef5 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Describes the multi-port external inputs while editing a graph-authored node asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L634).

## `#ctor`

<a id="api-6fdc7931d70b904b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.#ctor 0f6e4375154b8e261a10c76f58d0371d155b53b20d6ab6f25da87cc7656d27cc -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.ShaderGraphNodeInputsCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L634).

## `GetPorts`

<a id="api-75da4e1f4172f1c9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 31b05006e7e3b216962335ddb5e38496d585f2ac7b9acf157c8b5908e60695ff -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L649).

## `Lower`

<a id="api-753cc43fb9ada43b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) aed509ff69426974ad51c7ae350025f9fb0a6825d5719086d294bbbd5b564a5a -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L661).

## `definitionId`

<a id="api-1d53adaab112ec3e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.definitionId c172e5de99affe89341e1498900e98f1251c4dad69cc54984a6ce8f084ba248d -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeInputsCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L639).
