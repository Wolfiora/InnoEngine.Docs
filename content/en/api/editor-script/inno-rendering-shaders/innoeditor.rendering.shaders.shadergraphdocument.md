---
title: "ShaderGraphDocument"
description: "Reference for ShaderGraphDocument in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.48164b14ea37765f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphDocument`

This reference describes `ShaderGraphDocument` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`definitionKey`](#api-db63c03a29aee504) | Field |
| [`inputDefaultPrefix`](#api-ecb15578c4ef46be) | Field |
| [`outputDefinitionId`](#api-4d5876f80ef13c73) | Field |
| [`settingsKey`](#api-dac6a0705b30c52e) | Field |
| [`stageKey`](#api-e760649473eb3426) | Field |
| [`targetKey`](#api-1bbe5c1e2289f7d8) | Field |
| [`Create`](#api-7db273a722f93019) | Method |
| [```Decode``1```](#api-b637f026868c678c) | Method |
| [```Encode``1```](#api-133b0a1a49a62769) | Method |
| [```Read``1```](#api-8ea760dfc8e1650b) | Method |
| [`ReadDefinition`](#api-08d5cb7aa47d3bee) | Method |
| [`ReadTarget`](#api-1e140086c04c74c2) | Method |
| [`SetTarget`](#api-38e8681ff3d3f506) | Method |

## Type declaration

<a id="api-48164b14ea37765f"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphDocument ce41ce1bde184cb3a9babf2a31a9a220a9e46e2c2e0c592e16151229c1391e11 -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphDocument
```

Defines the native graph document protocol shared by shader import, templates and the editor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L11).

## `definitionKey`

<a id="api-db63c03a29aee504"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.definitionKey 85341c737b45f1a735675fb2520555e53c796678eb336ceb05075eb7a44fc598 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.definitionKey = "inno.shader.definition"
```

Identifies the graph metadata containing the source-free material and pass contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L16).

## `inputDefaultPrefix`

<a id="api-ecb15578c4ef46be"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.inputDefaultPrefix 53b8f766a79ccf07f29f4f221b83cdab1217a295c7bebdc544091f2a479b02e6 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.inputDefaultPrefix = "input-default."
```

Prefixes stable port IDs storing explicit typed defaults for unconnected inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L86).

## `outputDefinitionId`

<a id="api-4d5876f80ef13c73"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.outputDefinitionId af2e5409732d3081f75e1fb9ec676c69957e58b35ee5498096768b739cc83826 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.outputDefinitionId = "inno.shader.stage-output"
```

Identifies a stage output node; its incoming edges name the stage's GPU outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L74).

## `settingsKey`

<a id="api-dac6a0705b30c52e"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.settingsKey 09024b8372f233a37a5b6b6247bb590d96521de8fd3b94e5437ca0d853ea5281 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.settingsKey = "settings"
```

Identifies the structured settings stored on a stage output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L82).

## `stageKey`

<a id="api-e760649473eb3426"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.stageKey 03d2f73e7f91823b9ff59fe8b1e3c1ee9d68a858bdc18f34f6944b009ea40ab7 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.stageKey = "stage"
```

Identifies a node property containing its owning stage output node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L78).

## `targetKey`

<a id="api-1bbe5c1e2289f7d8"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphDocument.targetKey 340c54a5e938ce63c4666cc9dc162cb5052d13f9781702e274996ea6cf348125 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphDocument.targetKey = "inno.shader.target"
```

Identifies the optional domain target; absent means explicitly authored generic stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L20).

## `Create`

<a id="api-7db273a722f93019"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Create(InnoEngine.Rendering.ShaderDefinition,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 5e9b9af0bae72576319beaacb45aa5070ba78fdcd468f2561da0da301d384f57 -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphDocument.Create(InnoEngine.Rendering.ShaderDefinition definition, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Creates an empty graph with a source-free shader contract; incomplete graphs remain serializable.

**Parameter `definition`:** Material parameters, techniques and pass state.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached graph ready for authoring.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L103).

## ```Decode``1```

<a id="api-b637f026868c678c"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Decode``1(InnoEngine.Graphs.GraphSerializedValue,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 32278027d8e203bb0480a1b83ce0c7b2f9db92a23f80ee2cc74f97168c8a0cf5 -->

```csharp
public static T InnoEditor.Rendering.Shaders.ShaderGraphDocument.Decode<T>(InnoEngine.Graphs.GraphSerializedValue value, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Decodes a graph value against the current owner generation.

**Type parameter `T`:** Expected native serializable type.

**Parameter `value`:** Neutral graph value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached current-generation value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L187).

## ```Encode``1```

<a id="api-133b0a1a49a62769"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Encode``1(``0,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 1430b9f352016f10e7e64183c01af00f2c754d57591bbff37ab7efefe345a70e -->

```csharp
public static InnoEngine.Graphs.GraphSerializedValue InnoEditor.Rendering.Shaders.ShaderGraphDocument.Encode<T>(T value, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Encodes a node or document value through the common native serialization channel.

**Type parameter `T`:** Native serializable value type.

**Parameter `value`:** Detached authoring value.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** Neutral bytes suitable for graph persistence and history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L159).

## ```Read``1```

<a id="api-8ea760dfc8e1650b"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Read``1(InnoEngine.Graphs.GraphNodeRecord,System.String,``0,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 495c0d079a0940822f1c71e1c9a68d9b2ec573bb92de412c61f32d2672327a9c -->

```csharp
public static T InnoEditor.Rendering.Shaders.ShaderGraphDocument.Read<T>(InnoEngine.Graphs.GraphNodeRecord node, string key, T defaultValue, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads a named node value; absent values use the declared default, corrupt values never do.

**Type parameter `T`:** Expected native serializable type.

**Parameter `node`:** Neutral node record.

**Parameter `key`:** Stable property key.

**Parameter `defaultValue`:** Value used only when the property is absent.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** The decoded value or explicit absent-property default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L222).

## `ReadDefinition`

<a id="api-08d5cb7aa47d3bee"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 56f82fc54e1d1ed151ffc11a91aca4c3bd73d322bcabe7925349e936bd4550fb -->

```csharp
public static InnoEngine.Rendering.ShaderDefinition InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads the material and pass contract without evaluating or altering the graph.

**Parameter `graph`:** Native shader graph.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached contract; missing or corrupt metadata is an explicit error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L130).

## `ReadTarget`

<a id="api-1e140086c04c74c2"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadTarget(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) cf58613d5f0e620c24c35e605c8475355c635dcfa7359efa9cddcaf2fcdaf275 -->

```csharp
public static string InnoEditor.Rendering.Shaders.ShaderGraphDocument.ReadTarget(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads the stable domain target assignment without resolving extension instances.

**Parameter `graph`:** Authored graph.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** The assigned stable ID, or an empty string for generic explicit stage authoring.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L37).

## `SetTarget`

<a id="api-38e8681ff3d3f506"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.SetTarget(InnoEngine.Graphs.GraphDocument,System.String,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 14667a895ee1246fcfcf7596b2dacaf8e1210abd89d8ae9ef71729bd45117913 -->

```csharp
public static void InnoEditor.Rendering.Shaders.ShaderGraphDocument.SetTarget(InnoEngine.Graphs.GraphDocument graph, string targetId, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Assigns a domain target by stable identity without retaining its current provider.

**Parameter `graph`:** Document being authored.

**Parameter `targetId`:** Stable target identity; empty selects explicit generic stage authoring.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L59).
