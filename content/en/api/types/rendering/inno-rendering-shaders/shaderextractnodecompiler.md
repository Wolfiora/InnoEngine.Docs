---
title: "ShaderExtractNodeCompiler"
description: "Reference for ShaderExtractNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.804326ad984bf5d1
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderExtractNodeCompiler`

This reference describes `ShaderExtractNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-676fb7bb251e574a) | Method |
| [`GetPorts`](#api-7777f6b3cd9b9b47) | Method |
| [`Lower`](#api-59d767e54fa01957) | Method |
| [`definitionId`](#api-df7f2f055f1c7413) | Property |

## Type declaration

<a id="api-804326ad984bf5d1"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderExtractNodeCompiler d0c45373ab683333690481a2701605c5ea304a327ab71d928d63f96011729ded -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderExtractNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Extracts one statically selected component from a vector or matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L10).

## `#ctor`

<a id="api-676fb7bb251e574a"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderExtractNodeCompiler.#ctor f75ffb494c74fb653e74e3c26a3682e01f60a91981381f3c791dcf7c815cdac6 -->

```csharp
public Inno.Rendering.Shaders.ShaderExtractNodeCompiler.ShaderExtractNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L10).

## `GetPorts`

<a id="api-7777f6b3cd9b9b47"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderExtractNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) f4e142122b769c09f7ad7b33cbe9bba4adce2c9e9c785d342337cb98ce650440 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderExtractNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L25).

## `Lower`

<a id="api-59d767e54fa01957"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderExtractNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) a3f484d9947b512888912b8f1354aa5921b5f41751aab5165363d0f0042473aa -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderExtractNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L41).

## `definitionId`

<a id="api-df7f2f055f1c7413"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderExtractNodeCompiler.definitionId ffb31ae031dd1e6152ab5e9bec11e78cc299d3d403bd214ce2ba53bf16d69a66 -->

```csharp
public string Inno.Rendering.Shaders.ShaderExtractNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderValueNodeCompilers.cs#L15).
