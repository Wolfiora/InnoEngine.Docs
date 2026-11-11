---
title: "ShaderRerouteNodeCompiler"
description: "Reference for ShaderRerouteNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.45710c8819a4e5f6
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderRerouteNodeCompiler`

This reference describes `ShaderRerouteNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Shaders.IShaderNodeCompiler`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b1908bb1d969a72d) | Method |
| [`GetPorts`](#api-9fea490a8a930b5e) | Method |
| [`Lower`](#api-887cc2f99e2cd811) | Method |
| [`definitionId`](#api-827bb2db5d78f72c) | Property |

## Type declaration

<a id="api-45710c8819a4e5f6"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderRerouteNodeCompiler 0fe7dbdb1d8c2599c2132711a0d4c23bbd3cda9c946cb20bc7b8910192348826 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderRerouteNodeCompiler : Inno.Rendering.Shaders.IShaderNodeCompiler
```

Forwards a typed connection without adding instructions or changing resource-effect order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderRerouteNodeCompiler.cs#L9).

## `#ctor`

<a id="api-b1908bb1d969a72d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.#ctor 85ecbbf3d00a21880518dae92fd2763f936791c14086d14859fd5e79a72b8b11 -->

```csharp
public Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.ShaderRerouteNodeCompiler()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderRerouteNodeCompiler.cs#L9).

## `GetPorts`

<a id="api-9fea490a8a930b5e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 3eb82923e15a3c80b0e5b3736e053c2f65fe8ac272c49f339c3ebdd39718e11e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Gets a ports required by the implemented contract.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderRerouteNodeCompiler.cs#L24).

## `Lower`

<a id="api-887cc2f99e2cd811"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) cf3c78a0dadf6eac823cf7dc79b37bf101ab604166e810126f9374238a010f62 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers this graph node to typed shader IR after validating its inputs.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderRerouteNodeCompiler.cs#L38).

## `definitionId`

<a id="api-827bb2db5d78f72c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.definitionId e1b6a6dd0c83c21aa0a6dfb3e0461b1498eed21a8b1f444b2ae324c0f90d2442 -->

```csharp
public string Inno.Rendering.Shaders.ShaderRerouteNodeCompiler.definitionId { get; }
```

Gets the definition id text used by the current instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderRerouteNodeCompiler.cs#L14).
