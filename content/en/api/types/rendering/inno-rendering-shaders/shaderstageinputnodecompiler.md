---
title: "ShaderStageInputNodeCompiler"
description: "Reference for ShaderStageInputNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.3742b74fe5f3d0f9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderStageInputNodeCompiler`

This reference describes `ShaderStageInputNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bfa0080615a901c5) | Method |
| [`GetPorts`](#api-a215f2a14d568bc5) | Method |
| [`Lower`](#api-08f90902d3871f89) | Method |
| [`definitionId`](#api-4d3c3d2377fe6a70) | Property |

## Type declaration

<a id="api-3742b74fe5f3d0f9"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderStageInputNodeCompiler 50f48e6b10b48e0510178bddd24f0c38073eb72229048801a7fa0e02aa51f640 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderStageInputNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Reads one target-assigned stage/resource input without choosing a native variable name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L157).

## `#ctor`

<a id="api-bfa0080615a901c5"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.#ctor 8d596de513b11b9fa6d6e2f580941b4c129a6ad8c398482381d4e963b9ddd9e5 -->

```csharp
public Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.ShaderStageInputNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L157).

## `GetPorts`

<a id="api-a215f2a14d568bc5"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 952a341714ba4e6b84b06b5578015d47751a0cfe7c2a94f2c620635eab8be1e6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L172).

## `Lower`

<a id="api-08f90902d3871f89"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) 7d9d075f9451659bd151eeae3a085b21059507db566589392228c96866816bc9 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L183).

## `definitionId`

<a id="api-4d3c3d2377fe6a70"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.definitionId 68c3e292377c79893716a4b4aa5407e103f0de172e8005a4dca576f54eb41de1 -->

```csharp
public string Inno.Rendering.Shaders.ShaderStageInputNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L162).
