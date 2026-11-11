---
title: "IShaderNodeCompiler"
description: "Reference for IShaderNodeCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.ba9fb136c54b929a
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `IShaderNodeCompiler`

This reference describes `IShaderNodeCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetPorts`](#api-588651202a6768bb) | Method |
| [`Lower`](#api-808a8a24dbcec64c) | Method |
| [`definitionId`](#api-5dd65f3e87d018f9) | Property |

## Type declaration

<a id="api-ba9fb136c54b929a"></a>
<!-- api: T:Inno.Rendering.Shaders.IShaderNodeCompiler 940441be9c82516ef28a86b0f7341e5675f500ef76526f444a440a92b863445c -->

```csharp
public interface Inno.Rendering.Shaders.IShaderNodeCompiler
```

Defines one shader node's typed ports and lowering; drawing belongs to a separate editor extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L35).

## `GetPorts`

<a id="api-588651202a6768bb"></a>
<!-- api: M:Inno.Rendering.Shaders.IShaderNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext) 28b67450c6cc4f79237dae702c1801878ebaf3c59de4f816cea370c4ddeb6dcf -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.IShaderNodeCompiler.GetPorts(Inno.Rendering.Shaders.ShaderNodeDescriptionContext context)
```

Describes ports for the current neutral properties and resolved source/target inputs.

**Parameter `context`:** Invocation-scoped node properties and frozen source/target data.

**Returns:** Complete typed ports; duplicate identities are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L50).

## `Lower`

<a id="api-808a8a24dbcec64c"></a>
<!-- api: M:Inno.Rendering.Shaders.IShaderNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext) 9ec41eca75a8707529a24f7a4d6dd541095a5c583bc16ceca4082428ec338248 -->

```csharp
System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.IShaderNodeCompiler.Lower(Inno.Rendering.Shaders.ShaderNodeLoweringContext context)
```

Lowers the node into the supplied typed builder without generating source strings.

**Parameter `context`:** Connected typed inputs and the shared region builder.

**Returns:** Exactly the declared output ports by stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L60).

## `definitionId`

<a id="api-5dd65f3e87d018f9"></a>
<!-- api: P:Inno.Rendering.Shaders.IShaderNodeCompiler.definitionId a2dbdd40d9ce70ae225322a37cf43c4b15e31560f6649484f944b81c569e751f -->

```csharp
string Inno.Rendering.Shaders.IShaderNodeCompiler.definitionId { get; }
```

Gets the exact graph node definition identity implemented by this compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L40).
