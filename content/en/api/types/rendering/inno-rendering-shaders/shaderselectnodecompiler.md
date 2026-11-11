---
title: "ShaderSelectNodeCompiler"
description: "Reference for ShaderSelectNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2470847c2b2da51b
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSelectNodeCompiler`

This reference describes `ShaderSelectNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e864cbe4c6ff3aa2) | Method |
| [`GetPorts`](#api-e3663dc79aba7546) | Method |
| [`Lower`](#api-4b6bf72b36e1c715) | Method |
| [`definitionId`](#api-d899609117eb04bc) | Property |

## Type declaration

<a id="api-2470847c2b2da51b"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSelectNodeCompiler 43e34bc5529b5a701970a61bb144652d4905b913bbd0f949f656c2d6ddf288be -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSelectNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Selects between equal typed values; all producer effects remain evaluated before selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L195).

## `#ctor`

<a id="api-e864cbe4c6ff3aa2"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSelectNodeCompiler.#ctor a5a47bbcb07be7f6b3d797d5b9c133df2d45c0f796d4658fb93bee7a2de43750 -->

```csharp
public Inno.Rendering.Shaders.ShaderSelectNodeCompiler.ShaderSelectNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L195).

## `GetPorts`

<a id="api-e3663dc79aba7546"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSelectNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) da8e65ad6bb5c47bb522b1c910274d622e076a0efde47f3e9a09abfc6e96d6a9 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderSelectNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L210).

## `Lower`

<a id="api-4b6bf72b36e1c715"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSelectNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) 47ac989983f0c09e7e151e8e66575bd3883c2a11ee391aad7f83682472556d98 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderSelectNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L225).

## `definitionId`

<a id="api-d899609117eb04bc"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSelectNodeCompiler.definitionId fd9a727466125169bbb2bfd045581ab7096f80b313e58690b3f52578d453870a -->

```csharp
public string Inno.Rendering.Shaders.ShaderSelectNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderBuiltinNodeCompilers.cs#L200).
