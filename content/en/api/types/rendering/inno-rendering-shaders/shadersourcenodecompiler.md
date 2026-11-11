---
title: "ShaderSourceNodeCompiler"
description: "Reference for ShaderSourceNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.3aa06cd8781854b9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceNodeCompiler`

This reference describes `ShaderSourceNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b817a4f6a3bfbddd) | Method |
| [`GetPorts`](#api-8d770279f36d70ec) | Method |
| [`Lower`](#api-d0389d2df719781c) | Method |
| [`definitionId`](#api-37db8b75088ddef4) | Property |

## Type declaration

<a id="api-3aa06cd8781854b9"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceNodeCompiler cada1b504f1a04580ab52dde752f99c538e3f282b86fbe8ca01070ae38e894f9 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Lowers a parsed function module with name-based ports and explicit aggregate/member connection alternatives.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L232).

## `#ctor`

<a id="api-b817a4f6a3bfbddd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceNodeCompiler.#ctor 07b73ce4ef37b07b4e6617bb0a3e736b763c237756e5dfc891d57047030f414a -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceNodeCompiler.ShaderSourceNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L232).

## `GetPorts`

<a id="api-8d770279f36d70ec"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 58c0d1b3ead3361366fc6c3e1beec48129965af8a4320034f8991bc689e745b9 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderSourceNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L247).

## `Lower`

<a id="api-d0389d2df719781c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) fc71a3ae726e2ec2f730461df92c6420f18fb240106c389804633e5e957f3203 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderSourceNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L280).

## `definitionId`

<a id="api-37db8b75088ddef4"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceNodeCompiler.definitionId b22b41af10d7488e751244271a929b3b5f23c5f33e7bb41043e22ea3e4c33726 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L237).
