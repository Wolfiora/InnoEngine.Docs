---
title: "ShaderConstantNodeCompiler"
description: "Reference for ShaderConstantNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.876bb82bc7aa2b55
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderConstantNodeCompiler`

This reference describes `ShaderConstantNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c21b842a9528d3d2) | Method |
| [`GetPorts`](#api-ba11b0aed48f7f14) | Method |
| [`Lower`](#api-0ae520225320c934) | Method |
| [`definitionId`](#api-94e8b43ffa4198c3) | Property |

## Type declaration

<a id="api-876bb82bc7aa2b55"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderConstantNodeCompiler 8239cd4f050dd7049a07045ef69514a7b5831386e21ec82911352bd7d422b2b2 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderConstantNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Lowers an exact scalar constant; its type/value are native graph properties.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L11).

## `#ctor`

<a id="api-c21b842a9528d3d2"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstantNodeCompiler.#ctor 4f7fe4f85c6f9d60cc646642cfe36d07cfe12dcdccfdcc744fccab4a084d860f -->

```csharp
public Inno.Rendering.Shaders.ShaderConstantNodeCompiler.ShaderConstantNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L11).

## `GetPorts`

<a id="api-ba11b0aed48f7f14"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstantNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 824f4fae9c5e2bd40c33d3fb45afa65d1b0fcc9cf89632709346dc376dcadcfb -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderConstantNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L26).

## `Lower`

<a id="api-0ae520225320c934"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstantNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) 6e371fc0f6be4d34694506846c4bf733effc9803c8dc5537477392e880ed0fe9 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderConstantNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L37).

## `definitionId`

<a id="api-94e8b43ffa4198c3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderConstantNodeCompiler.definitionId ccdf2d1bd9b66417970961d7545b57dc1cf0f864a8c3f26d82b8c58d2da899ae -->

```csharp
public string Inno.Rendering.Shaders.ShaderConstantNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L16).
