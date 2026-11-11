---
title: "ShaderGraphNodes"
description: "Reference for ShaderGraphNodes in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.d8a06463463f6945
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodes`

This reference describes `ShaderGraphNodes` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`callDefinitionId`](#api-ae0a1dea8fe3039e) | Field |
| [`inputDefinitionId`](#api-91619e395d833984) | Field |
| [`interfaceKey`](#api-0664d6fb107e2b3e) | Field |
| [`outputDefinitionId`](#api-d787cb856ef84e92) | Field |
| [`settingsKey`](#api-66ab37bd5c6c96fb) | Field |
| [`Expand`](#api-b6f691bc67e52fcd) | Method |
| [`IsNodeGraph`](#api-0328fa0f127c5642) | Method |
| [`ReadCallInterface`](#api-f8a044e955465981) | Method |
| [`ReadInterface`](#api-fe237d304c2db917) | Method |
| [`ReadSettings`](#api-03788cb8cdfacb87) | Method |
| [`WriteSettings`](#api-fbfba8888b88115c) | Method |

## Type declaration

<a id="api-d8a06463463f6945"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodes 1a2953c80d46da632d5606bfba6e6feba67249f50e9130f8daaa14faf74b22da -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphNodes
```

Reads and expands reusable node graphs without retaining assets or provider instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L168).

## `callDefinitionId`

<a id="api-ae0a1dea8fe3039e"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodes.callDefinitionId 38d2d3dc76aa736a3a084955b2a98072be5a9a670585b8caec93d734d55769f0 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphNodes.callDefinitionId = "inno.shader.graph-node"
```

Identifies a reference to another Shader graph used as a node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L181).

## `inputDefinitionId`

<a id="api-91619e395d833984"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodes.inputDefinitionId df30aab0f3869860b551b433b88e53d98bb26ed3f3eb3eaabf8429ccc3f79aa5 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphNodes.inputDefinitionId = "inno.shader.node-inputs"
```

Identifies the single multi-port node-input interface record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L173).

## `interfaceKey`

<a id="api-0664d6fb107e2b3e"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodes.interfaceKey 6a7000a540dec40e61cb833f25423d6bcb338860b14a37476c30cf6fe8803884 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphNodes.interfaceKey = "interface"
```

Identifies the serialized interface snapshot retained by a graph-node reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L185).

## `outputDefinitionId`

<a id="api-d787cb856ef84e92"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodes.outputDefinitionId d29bc362a85edfbc21aa112c8b73d6658749cb5696feb4f540fead448b3d2eba -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphNodes.outputDefinitionId = "inno.shader.node-outputs"
```

Identifies the optional multi-port node-output interface record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L177).

## `settingsKey`

<a id="api-66ab37bd5c6c96fb"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphNodes.settingsKey 365e03272201a40d155978b7f4af48efa721db2e517cafb1349463952cd2ff1b -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphNodes.settingsKey = "inno.shader.node-settings"
```

Identifies graph-level reusable-node metadata, independent of either interface direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L189).

## `Expand`

<a id="api-b6f691bc67e52fcd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.Expand(Inno.Core.Graphs.GraphDocument,System.Func{System.Guid,System.String,Inno.Core.Graphs.GraphDocument},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) f23a56f59c8563e13fd5bcc968493bae9f2b249683ea6f244627f189bebfd06d -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphNodes.Expand(Inno.Core.Graphs.GraphDocument graph, System.Func<System.Guid, string, Inno.Core.Graphs.GraphDocument> resolve, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Expands every inline graph-node reference and refreshes domain-output interfaces.

**Parameter `graph`:** Authored parent graph.

**Parameter `resolve`:** Resolves a referenced Shader graph by persistent identity and diagnostic path.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** A detached graph containing no inline graph-node references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L359).

## `IsNodeGraph`

<a id="api-0328fa0f127c5642"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.IsNodeGraph(Inno.Core.Graphs.GraphDocument) 3aac94e8d749711e0659490cbd177fbf1f7dc99e643b2218477a59c2c5c8d5b1 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderGraphNodes.IsNodeGraph(Inno.Core.Graphs.GraphDocument graph)
```

Determines whether a Shader graph declares a reusable node interface.

**Parameter `graph`:** Graph to inspect.

**Returns:** `true` when graph-level node settings are present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L200).

## `ReadCallInterface`

<a id="api-f8a044e955465981"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.ReadCallInterface(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) e3c2b61e236ab624ee45723cf67ee674fc3d040b818bcfaa825bab873ea9dda9 -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphNodeInterface Inno.Rendering.Shaders.ShaderGraphNodes.ReadCallInterface(Inno.Core.Graphs.GraphNodeRecord node, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads the current interface snapshot stored on a graph-node reference.

**Parameter `node`:** Graph-node reference.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** The detached stored interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L330).

## `ReadInterface`

<a id="api-fe237d304c2db917"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.ReadInterface(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 93f45bf9499a40f7537d3f4236ed4dd9026b48614b68357ed66bb22b3ac47229 -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphNodeInterface Inno.Rendering.Shaders.ShaderGraphNodes.ReadInterface(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads and validates the public node interface declared by a Shader graph.

**Parameter `graph`:** Detached graph asset source.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** The detached graph-node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L273).

## `ReadSettings`

<a id="api-03788cb8cdfacb87"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.ReadSettings(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 6c29d150af0ca163fa4d803e3b793cdf4e10a20dcd03835d524bcc289fbf621b -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphNodeSettings Inno.Rendering.Shaders.ShaderGraphNodes.ReadSettings(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads required graph-level reusable-node metadata.

**Parameter `graph`:** Graph declaring the reusable node.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** Detached node metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L247).

## `WriteSettings`

<a id="api-fbfba8888b88115c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodes.WriteSettings(Inno.Core.Graphs.GraphDocument,Inno.Rendering.Shaders.ShaderGraphNodeSettings,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 88c963313a3e3fe9b386b1fcadee6430f358209bf6de5d5e3b9cc7f9a6011f3f -->

```csharp
public static void Inno.Rendering.Shaders.ShaderGraphNodes.WriteSettings(Inno.Core.Graphs.GraphDocument graph, Inno.Rendering.Shaders.ShaderGraphNodeSettings settings, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Writes graph-level reusable-node metadata without coupling it to an input or output record.

**Parameter `graph`:** Graph whose node identity is being assigned.

**Parameter `settings`:** Detached node metadata.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L221).
