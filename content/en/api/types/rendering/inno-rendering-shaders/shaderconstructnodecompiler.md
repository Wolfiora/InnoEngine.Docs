---
title: "ShaderConstructNodeCompiler"
description: "Reference for ShaderConstructNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.bbffeaf8f5421317
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderConstructNodeCompiler`

This reference describes `ShaderConstructNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b496db049b3f57a9) | Method |
| [`GetPorts`](#api-9693672523a3ffcd) | Method |
| [`Lower`](#api-046460084cf8e836) | Method |
| [`definitionId`](#api-c568809eb4dd70d0) | Property |

## Type declaration

<a id="api-bbffeaf8f5421317"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderConstructNodeCompiler 7ae58e125bc35e59ebd15d1d8aa6415e1fb52c66edde3d5807c6f10dca4aad7f -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderConstructNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Constructs a vector or column-major matrix from individually connected scalar components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L103).

## `#ctor`

<a id="api-b496db049b3f57a9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstructNodeCompiler.#ctor 6bfd92352f2c042ab85e99969fbd28ac9b094618ca985a2942ab6f4981efd4bf -->

```csharp
public Inno.Rendering.Shaders.ShaderConstructNodeCompiler.ShaderConstructNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L103).

## `GetPorts`

<a id="api-9693672523a3ffcd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstructNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) c35dece3da7e8f9594dd0f99a9e38ec8fa2854b5cd671f61fc9ed58d8aa6d12f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderConstructNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L118).

## `Lower`

<a id="api-046460084cf8e836"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderConstructNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) 4378c8263b1dee98591660171fd203969ac0ba9562a2ec9a61c82b86e6de46d0 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderConstructNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L133).

## `definitionId`

<a id="api-c568809eb4dd70d0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderConstructNodeCompiler.definitionId b7c99f2409b7d918617e22c2a138e5338377a005cdb4a546fce1564f261053a0 -->

```csharp
public string Inno.Rendering.Shaders.ShaderConstructNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L108).
