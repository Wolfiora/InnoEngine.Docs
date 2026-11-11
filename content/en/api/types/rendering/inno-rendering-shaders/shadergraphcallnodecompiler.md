---
title: "ShaderGraphCallNodeCompiler"
description: "Reference for ShaderGraphCallNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.6ca5717da7dd6f7f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphCallNodeCompiler`

This reference describes `ShaderGraphCallNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f341108f9e5d4f8b) | Method |
| [`GetPorts`](#api-5ffaa7f393698501) | Method |
| [`Lower`](#api-14deccebb422e952) | Method |
| [`definitionId`](#api-ec64400b403fe79c) | Property |

## Type declaration

<a id="api-6ca5717da7dd6f7f"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler 24f4f84a329259f1ffb112cdf7ea509b8ee53a2cada7b9bdb886aa0d9c15e3ce -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Describes graph-authored node references before they are expanded or consumed by a Target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L601).

## `#ctor`

<a id="api-f341108f9e5d4f8b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.#ctor 78cb3f1a7d07475ab2767e19fdd0d259c32ba200b8e0a78cb4527c2f48a3a090 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.ShaderGraphCallNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L601).

## `GetPorts`

<a id="api-5ffaa7f393698501"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 02826426ca8445fa2cb74dec9557c3a1b4d90f079c9afd3cf811757576f9c3eb -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L616).

## `Lower`

<a id="api-14deccebb422e952"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) cc7ea230a09386e8de8df2bc8ba8b5e29db0a42684cdae52eef0439883f2cc4c -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L627).

## `definitionId`

<a id="api-ec64400b403fe79c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.definitionId bec9c03543077982f612073ac50c7d3c7c5e7b76a4ae6e34d1acf4f9e6475a14 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphCallNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L606).
