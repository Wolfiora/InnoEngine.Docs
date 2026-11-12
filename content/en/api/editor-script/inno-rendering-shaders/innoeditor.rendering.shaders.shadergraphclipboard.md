---
title: "ShaderGraphClipboard"
description: "Reference for ShaderGraphClipboard in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.7b337246ae228391
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphClipboard`

This reference describes `ShaderGraphClipboard` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Copy`](#api-bde91da81ee68970) | Method |
| [`Paste`](#api-c3c6cb61ad3b269e) | Method |

## Type declaration

<a id="api-7b337246ae228391"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphClipboard c1b0740765826439d7ab328cdef724321c51ab921d4b864a25936a95ff8964b3 -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphClipboard
```

Copies and pastes shader structures as detached atomic candidates, including their parameter and Pass contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L13).

## `Copy`

<a id="api-bde91da81ee68970"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Copy(InnoEngine.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 5e0584e07b74d961f44372e902b9358127ab6e453e0b321981f5ca50880371bc -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Copy(InnoEngine.Graphs.GraphDocument graph, System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodes, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Captures selected nodes and the owned contents of selected stage outputs.

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** Detached fragment retaining source declarations for a later paste.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L33).

## `Paste`

<a id="api-c3c6cb61ad3b269e"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Paste(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphDocument,System.Boolean,System.Nullable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) d67aa42d56b980e8b3ce500cec9f909ba05b4aeafc7c4415c682b89a1863c897 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphPasteResult InnoEditor.Rendering.Shaders.ShaderGraphClipboard.Paste(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Graphs.GraphDocument fragment, bool preserveExternalStageReferences, InnoEngine.Graphs.GraphNodeId? activeStage, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Creates a detached paste candidate with new node identities and remapped program, Pass and Technique references.

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** A complete candidate suitable for one History transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L73).
