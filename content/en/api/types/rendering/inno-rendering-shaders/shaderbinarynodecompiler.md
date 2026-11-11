---
title: "ShaderBinaryNodeCompiler"
description: "Reference for ShaderBinaryNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.381205c6f4f03bfe
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderBinaryNodeCompiler`

This reference describes `ShaderBinaryNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e1a3caf95b65e151) | Method |
| [`GetPorts`](#api-e6f80540a994ed2c) | Method |
| [`Lower`](#api-bece33cc265d4e59) | Method |
| [`definitionId`](#api-0fa9a5660c9fa3b1) | Property |

## Type declaration

<a id="api-381205c6f4f03bfe"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderBinaryNodeCompiler 6069672db308fb8bf1429de515c829d6dc8a9c8a30d2323760bf9868967512c1 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderBinaryNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Lowers an explicit arithmetic/comparison operation; operation IDs are node configuration, not backend code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L55).

## `#ctor`

<a id="api-e1a3caf95b65e151"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.#ctor 4ba4d2dae2689af46f003c0a6d459bb9b3041af70b54008a7181620d1ed0eeb4 -->

```csharp
public Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.ShaderBinaryNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L55).

## `GetPorts`

<a id="api-e6f80540a994ed2c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 4875f2548f0286c6d1316bb3bc600eeacca2a5cecf298ce4ad2b6ff45957252e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L70).

## `Lower`

<a id="api-bece33cc265d4e59"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) c07808daaa9e923afe15975c553dfee8409dcebc6e83388ac00a8f04923664a6 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L86).

## `definitionId`

<a id="api-0fa9a5660c9fa3b1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.definitionId 048d290cb1c7cfe5e6538590732860d7b1d858bbc92eb7c7825d3cb42124ae41 -->

```csharp
public string Inno.Rendering.Shaders.ShaderBinaryNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L60).
