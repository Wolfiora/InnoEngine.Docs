---
title: "ShaderGraphNodes"
description: "Reference for ShaderGraphNodes in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.e57e74148c91d900
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodes`

This reference describes `ShaderGraphNodes` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`callDefinitionId`](#api-277645d5f62a7e73) | Field |
| [`inputDefinitionId`](#api-76eb9707aa3616cf) | Field |
| [`interfaceKey`](#api-0c0f13c84a800a8d) | Field |
| [`outputDefinitionId`](#api-dea63a8f3a57f24a) | Field |
| [`settingsKey`](#api-a807e617722d70e1) | Field |
| [`Expand`](#api-b85e25c05ea80597) | Method |
| [`IsNodeGraph`](#api-c84bfbf911faccff) | Method |
| [`ReadCallInterface`](#api-de50781ae5d14bd8) | Method |
| [`ReadInterface`](#api-ffd43694122932a8) | Method |
| [`ReadSettings`](#api-1803f87a2c3d8221) | Method |
| [`WriteSettings`](#api-1f743a7a4d8eb368) | Method |

## Type declaration

<a id="api-e57e74148c91d900"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodes 832926a3b8a102b1877db2921751ae325d1f569eaa940e087ab19232b2a24f9a -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphNodes
```

Reads and expands reusable node graphs without retaining assets or provider instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L168).

## `callDefinitionId`

<a id="api-277645d5f62a7e73"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodes.callDefinitionId d0e1b3a722a8e63cf90b29415f0a890bba9274177dcd65883c38e6e937e6d555 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphNodes.callDefinitionId = "inno.shader.graph-node"
```

Identifies a reference to another Shader graph used as a node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L181).

## `inputDefinitionId`

<a id="api-76eb9707aa3616cf"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodes.inputDefinitionId f344993d76f8e943e67b7c308e26029f89adb0289c2ee9cc4995b4df99ed0f5e -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphNodes.inputDefinitionId = "inno.shader.node-inputs"
```

Identifies the single multi-port node-input interface record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L173).

## `interfaceKey`

<a id="api-0c0f13c84a800a8d"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodes.interfaceKey 0d52d0cafe71dbc0310d8e1a07766440e5f7a21ae30b967101b6a091f8ce34f4 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphNodes.interfaceKey = "interface"
```

Identifies the serialized interface snapshot retained by a graph-node reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L185).

## `outputDefinitionId`

<a id="api-dea63a8f3a57f24a"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodes.outputDefinitionId e7e4b4deee1a5ccd34fcd015c74f0edd531c8b4667ec69536fa29cd197c6a2cb -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphNodes.outputDefinitionId = "inno.shader.node-outputs"
```

Identifies the optional multi-port node-output interface record.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L177).

## `settingsKey`

<a id="api-a807e617722d70e1"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodes.settingsKey ceee8991ccc31333abc0730615d79848d8e7ee2f4afff5d56c41df73cc0bdbba -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphNodes.settingsKey = "inno.shader.node-settings"
```

Identifies graph-level reusable-node metadata, independent of either interface direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L189).

## `Expand`

<a id="api-b85e25c05ea80597"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.Expand(InnoEngine.Graphs.GraphDocument,System.Func{System.Guid,System.String,InnoEngine.Graphs.GraphDocument},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 1c1af22e2d1989d2625b387f71eeebb8f4bdc4a5ec5a57437b868a5192978e0f -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphNodes.Expand(InnoEngine.Graphs.GraphDocument graph, System.Func<System.Guid, string, InnoEngine.Graphs.GraphDocument> resolve, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Expands every inline graph-node reference and refreshes domain-output interfaces.

**Parameter `graph`:** Authored parent graph.

**Parameter `resolve`:** Resolves a referenced Shader graph by persistent identity and diagnostic path.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** A detached graph containing no inline graph-node references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L359).

## `IsNodeGraph`

<a id="api-c84bfbf911faccff"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.IsNodeGraph(InnoEngine.Graphs.GraphDocument) b3823acd539bb710c889d64e6e06d053b836e2a696bca118ad7880eb1ce1c1b6 -->

```csharp
public static bool InnoEditor.Rendering.Shaders.ShaderGraphNodes.IsNodeGraph(InnoEngine.Graphs.GraphDocument graph)
```

Determines whether a Shader graph declares a reusable node interface.

**Parameter `graph`:** Graph to inspect.

**Returns:** `true` when graph-level node settings are present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L200).

## `ReadCallInterface`

<a id="api-de50781ae5d14bd8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadCallInterface(InnoEngine.Graphs.GraphNodeRecord,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) c597f6bf182224336a50310d877c3adedec192f91b96630a480a211ac8417ca3 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadCallInterface(InnoEngine.Graphs.GraphNodeRecord node, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads the current interface snapshot stored on a graph-node reference.

**Parameter `node`:** Graph-node reference.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** The detached stored interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L330).

## `ReadInterface`

<a id="api-ffd43694122932a8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadInterface(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 2e8b5e3f84331d3b44ecd1619cf6a2dd6cf2a1563869acc95b016ef85925c809 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphNodeInterface InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadInterface(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads and validates the public node interface declared by a Shader graph.

**Parameter `graph`:** Detached graph asset source.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** The detached graph-node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L273).

## `ReadSettings`

<a id="api-1803f87a2c3d8221"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadSettings(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 7f18bee9dfaea10a120693402730ab42d7ff63e3eaa1e4c12e48b6f7e427ee17 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings InnoEditor.Rendering.Shaders.ShaderGraphNodes.ReadSettings(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads required graph-level reusable-node metadata.

**Parameter `graph`:** Graph declaring the reusable node.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Returns:** Detached node metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L247).

## `WriteSettings`

<a id="api-1f743a7a4d8eb368"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodes.WriteSettings(InnoEngine.Graphs.GraphDocument,InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) fdda9bbc4012264ddba58eee72b6558a1f4e9adcfe15cdea5fd1328d6638ba2c -->

```csharp
public static void InnoEditor.Rendering.Shaders.ShaderGraphNodes.WriteSettings(InnoEngine.Graphs.GraphDocument graph, InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings settings, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Writes graph-level reusable-node metadata without coupling it to an input or output record.

**Parameter `graph`:** Graph whose node identity is being assigned.

**Parameter `settings`:** Detached node metadata.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L221).
