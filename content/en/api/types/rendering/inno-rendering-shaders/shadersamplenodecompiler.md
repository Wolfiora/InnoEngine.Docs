---
title: "ShaderSampleNodeCompiler"
description: "Reference for ShaderSampleNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.aa229d0b1f57e89d
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSampleNodeCompiler`

This reference describes `ShaderSampleNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d1b83abc563f3347) | Method |
| [`GetPorts`](#api-961f069ecde8eb43) | Method |
| [`Lower`](#api-8df08175fc9bb51e) | Method |
| [`definitionId`](#api-80ed71331c0cbf17) | Property |

## Type declaration

<a id="api-aa229d0b1f57e89d"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSampleNodeCompiler d43ed5435d0de2af6ddb0c25e56305241ccbd2eef52e5e9b8a9e87b89b804068 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSampleNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Samples a graph-connected texture with implicit derivatives or an explicit level of detail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L48).

## `#ctor`

<a id="api-d1b83abc563f3347"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSampleNodeCompiler.#ctor 40c9e28925bb2316a7673b6c418d36a775ab77f9ddbfaeae3b1c481406bbe244 -->

```csharp
public Inno.Rendering.Shaders.ShaderSampleNodeCompiler.ShaderSampleNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L48).

## `GetPorts`

<a id="api-961f069ecde8eb43"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSampleNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) b6320b0677e65c11f2e8a69be9da1b2e0f7ba6a13ed6dfb1d6c234f3d8ff3bc6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderSampleNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L63).

## `Lower`

<a id="api-8df08175fc9bb51e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSampleNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) a8698c7b17387e5446eac0dc385448644deffb13d18b8693d999f08af6fcfe2a -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderSampleNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L82).

## `definitionId`

<a id="api-80ed71331c0cbf17"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSampleNodeCompiler.definitionId c219176dcdd7abd34c0ab846195336e17c2aa0d8a4f0cb903b5e8171d25f7498 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSampleNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L53).
