---
title: "ShaderNodeDescriptionContext"
description: "Reference for ShaderNodeDescriptionContext in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.86933343dad23cf8
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderNodeDescriptionContext`

This reference describes `ShaderNodeDescriptionContext` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Read``1```](#api-62eeb15bf65bdf47) | Method |
| [`definitionId`](#api-d00f9cc9c9e52992) | Property |
| [`implementationId`](#api-317352845e9bfb65) | Property |
| [`nodeId`](#api-ed682059231a99af) | Property |
| [`sourceModule`](#api-eb928cf7c7c1d38f) | Property |
| [`stageInput`](#api-10ae05816c2d647f) | Property |

## Type declaration

<a id="api-86933343dad23cf8"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderNodeDescriptionContext 731bf28fe0f321432938fe377ede6fc453089cf0d6b51f6d3591c2f4817303e5 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderNodeDescriptionContext
```

Provides invocation-scoped property decoding through the complete owner serialization context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L66).

## ```Read``1```

<a id="api-62eeb15bf65bdf47"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.Read``1(System.String,``0) 59898d30f316429a96951c4eab866d7b909f0377285f8118752dd221f6e318bc -->

```csharp
public T Inno.Rendering.Shaders.ShaderNodeDescriptionContext.Read<T>(string id, T defaultValue)
```

Reads a property using the owner's converter generation and complete reference resolver context.

**Type parameter `T`:** Declared property type supported by the native serializer.

**Parameter `id`:** Stable property identity.

**Parameter `defaultValue`:** Value used only when the property is absent, never after corrupt-data failure.

**Returns:** The deserialized value or the supplied absent-property default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L124).

## `definitionId`

<a id="api-d00f9cc9c9e52992"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.definitionId ce6b25426f8efe62c8ab7df1a87c8f5742e26d3f3f2faa9f11b40c575f7d3560 -->

```csharp
public string Inno.Rendering.Shaders.ShaderNodeDescriptionContext.definitionId { get; }
```

Gets the node definition's stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L95).

## `implementationId`

<a id="api-317352845e9bfb65"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.implementationId 4bfb1000a102f3d8bc83416a35c8bf6e9be39551f61b4a9dc05dadf476c596f6 -->

```csharp
public string Inno.Rendering.Shaders.ShaderNodeDescriptionContext.implementationId { get; }
```

Gets the exact implementation key chosen by the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L103).

## `nodeId`

<a id="api-ed682059231a99af"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.nodeId 55e6158ebd6107f67c53ee8d5ff9e4b87da13819302aba5d305bebe32967dbc0 -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Rendering.Shaders.ShaderNodeDescriptionContext.nodeId { get; }
```

Gets the node's stable identity, never its editor runtime handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L91).

## `sourceModule`

<a id="api-eb928cf7c7c1d38f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.sourceModule 9b4de40a28bd13e052a9219c08319015a06073a46302e4c1874458f197a67c7c -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceModuleAnalysis? Inno.Rendering.Shaders.ShaderNodeDescriptionContext.sourceModule { get; }
```

Gets a frozen module resolved by the asset owner; null means unassigned or unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L99).

## `stageInput`

<a id="api-10ae05816c2d647f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.stageInput 74bd9e09e933cc4d8af6b5cbbe2ae9b05c2dd49bd34fcc3cce1f0716c9656114 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStageInput? Inno.Rendering.Shaders.ShaderNodeDescriptionContext.stageInput { get; }
```

Gets the target-assigned stage input for this node, when applicable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompiler.cs#L107).
