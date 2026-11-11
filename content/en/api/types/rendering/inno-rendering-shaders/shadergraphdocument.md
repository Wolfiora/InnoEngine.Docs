---
title: "ShaderGraphDocument"
description: "Reference for ShaderGraphDocument in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.95e642b9eb575b9f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphDocument`

This reference describes `ShaderGraphDocument` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`definitionKey`](#api-b8636f71ba4978dc) | Field |
| [`inputDefaultPrefix`](#api-c38f2deb4e07325b) | Field |
| [`outputDefinitionId`](#api-56820e2c99c66a02) | Field |
| [`settingsKey`](#api-d1c1bfae6c0fa0fe) | Field |
| [`stageKey`](#api-2f9cc43987792423) | Field |
| [`targetKey`](#api-905f72a9e58b98aa) | Field |
| [`Create`](#api-3def7599919e771d) | Method |
| [```Decode``1```](#api-c7e65f69dfc89df1) | Method |
| [```Encode``1```](#api-0c72d9390e853513) | Method |
| [```Read``1```](#api-9f775a3499adf074) | Method |
| [`ReadDefinition`](#api-1ada87466990fa46) | Method |
| [`ReadTarget`](#api-bc30fcbad0a2b214) | Method |
| [`SetTarget`](#api-7c12fd008235c2f1) | Method |

## Type declaration

<a id="api-95e642b9eb575b9f"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphDocument 8fa91b9df6b70dd4376624131bee76a972379b4748e847eb698804203613d542 -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphDocument
```

Defines the native graph document protocol shared by shader import, templates and the editor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L11).

## `definitionKey`

<a id="api-b8636f71ba4978dc"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.definitionKey b0df78460d8c4260605c43fecbab1a372c691b7bd92ac63004556411296b131f -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.definitionKey = "inno.shader.definition"
```

Identifies the graph metadata containing the source-free material and pass contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L16).

## `inputDefaultPrefix`

<a id="api-c38f2deb4e07325b"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.inputDefaultPrefix 3bc7cdc3bad9c7239407df50bf4c51ec4b345c6a9a349844bc019d944e0d9615 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.inputDefaultPrefix = "input-default."
```

Prefixes stable port IDs storing explicit typed defaults for unconnected inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L86).

## `outputDefinitionId`

<a id="api-56820e2c99c66a02"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.outputDefinitionId 77cfa1432364ca6f01083e32b37c1a462bdb56d0d1b514404885fbd5fbf31937 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.outputDefinitionId = "inno.shader.stage-output"
```

Identifies a stage output node; its incoming edges name the stage's GPU outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L74).

## `settingsKey`

<a id="api-d1c1bfae6c0fa0fe"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.settingsKey d442c90dc0e8f0602336f06092e3b315aefcf4b628bc152cadc379ca46ef1895 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.settingsKey = "settings"
```

Identifies the structured settings stored on a stage output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L82).

## `stageKey`

<a id="api-2f9cc43987792423"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.stageKey bfdc587063263594055b621641182858ae937377778e08063e50bed860f2c340 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.stageKey = "stage"
```

Identifies a node property containing its owning stage output node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L78).

## `targetKey`

<a id="api-905f72a9e58b98aa"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphDocument.targetKey 9374fa3944e206a88baabfb371b9fec1d032934b11ca2ee0890f316535269d4e -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphDocument.targetKey = "inno.shader.target"
```

Identifies the optional domain target; absent means explicitly authored generic stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L20).

## `Create`

<a id="api-3def7599919e771d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.Create(Inno.Rendering.Assets.ShaderDefinition,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) a6e2a76bf7f91baa7a2c32bd3cb6a3b6539a1ced4e8b155724159781c12b686a -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphDocument.Create(Inno.Rendering.Assets.ShaderDefinition definition, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates an empty graph with a source-free shader contract; incomplete graphs remain serializable.

**Parameter `definition`:** Material parameters, techniques and pass state.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached graph ready for authoring.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L103).

## ```Decode``1```

<a id="api-c7e65f69dfc89df1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.Decode``1(Inno.Core.Graphs.GraphSerializedValue,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 4b3243ea60acf95a5758d88304ad58d2d035c9196fdc5048970f598936611e99 -->

```csharp
public static T Inno.Rendering.Shaders.ShaderGraphDocument.Decode<T>(Inno.Core.Graphs.GraphSerializedValue value, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Decodes a graph value against the current owner generation.

**Type parameter `T`:** Expected native serializable type.

**Parameter `value`:** Neutral graph value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached current-generation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L187).

## ```Encode``1```

<a id="api-0c72d9390e853513"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.Encode``1(``0,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) f923bf8ddc9c601be3441da5869a15b9039e33ed543c79ba2d2e60028929bdd8 -->

```csharp
public static Inno.Core.Graphs.GraphSerializedValue Inno.Rendering.Shaders.ShaderGraphDocument.Encode<T>(T value, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Encodes a node or document value through the common native serialization channel.

**Type parameter `T`:** Native serializable value type.

**Parameter `value`:** Detached authoring value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** Neutral bytes suitable for graph persistence and history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L159).

## ```Read``1```

<a id="api-9f775a3499adf074"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.Read``1(Inno.Core.Graphs.GraphNodeRecord,System.String,``0,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) b6357c0969acb569f00a72da30610973e1761a5d11d7d0d831cf53e0365f1305 -->

```csharp
public static T Inno.Rendering.Shaders.ShaderGraphDocument.Read<T>(Inno.Core.Graphs.GraphNodeRecord node, string key, T defaultValue, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads a named node value; absent values use the declared default, corrupt values never do.

**Type parameter `T`:** Expected native serializable type.

**Parameter `node`:** Neutral node record.

**Parameter `key`:** Stable property key.

**Parameter `defaultValue`:** Value used only when the property is absent.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** The decoded value or explicit absent-property default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L222).

## `ReadDefinition`

<a id="api-1ada87466990fa46"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) f300a0964c11fe3f1d25c85effbb0b05f9a4b079a0ebe44192d4d06875a6a3d1 -->

```csharp
public static Inno.Rendering.Assets.ShaderDefinition Inno.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads the material and pass contract without evaluating or altering the graph.

**Parameter `graph`:** Native shader graph.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached contract; missing or corrupt metadata is an explicit error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L130).

## `ReadTarget`

<a id="api-bc30fcbad0a2b214"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.ReadTarget(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) d6d506b113effab6f106e09de5a6e7e950d395e4a254cfc4db1145294c938e16 -->

```csharp
public static string Inno.Rendering.Shaders.ShaderGraphDocument.ReadTarget(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads the stable domain target assignment without resolving extension instances.

**Parameter `graph`:** Authored graph.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** The assigned stable ID, or an empty string for generic explicit stage authoring.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L37).

## `SetTarget`

<a id="api-7c12fd008235c2f1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphDocument.SetTarget(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 18c7569beaea4312902075f073ea43816b7a58a71e9099e6407682af93a21100 -->

```csharp
public static void Inno.Rendering.Shaders.ShaderGraphDocument.SetTarget(Inno.Core.Graphs.GraphDocument graph, string targetId, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Assigns a domain target by stable identity without retaining its current provider.

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L59).
