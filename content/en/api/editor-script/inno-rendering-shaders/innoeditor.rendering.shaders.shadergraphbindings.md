---
title: "ShaderGraphBindings"
description: "Reference for ShaderGraphBindings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.a956eef8ca291fa9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphBindings`

This reference describes `ShaderGraphBindings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ChangeInput`](#api-b7ff6dc39db48890) | Method |
| [`RemoveNodes`](#api-a52a06bb7798a11f) | Method |

## Type declaration

<a id="api-a956eef8ca291fa9"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphBindings a9c658326106bb39f28484dd988ef2378b1f1515c7d0455d70111e9fbe9b736e -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphBindings
```

Keeps graph input edits and the material-visible parameter contract in one neutral document change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L13).

## `ChangeInput`

<a id="api-b7ff6dc39db48890"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument,InnoEngine.Graphs.GraphNodeId,InnoEditor.Rendering.Shaders.ShaderGraphInputSettings,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 4ac17f57eda466d540a7db444aee068ccaedf6212d4964d40785ece99c43cec0 -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphBindings.ChangeInput(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Graphs.GraphNodeId nodeId, InnoEditor.Rendering.Shaders.ShaderGraphInputSettings settings, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Creates a detached candidate with the input and its material/resource declaration updated together.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeId`:** Stage input node identity.

**Parameter `settings`:** New input settings, including incomplete values while typing.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for texture defaults.

**Returns:** A serializable candidate. Invalid input remains visible for normal graph validation.

**Throws `System.ArgumentException`:** The identity does not name a stage input node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L135).

## `RemoveNodes`

<a id="api-a52a06bb7798a11f"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(InnoEngine.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) f746831e2b12cb1da404cef794d77bd3199b19c141c446c3c6bdb91f1b44338b -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(InnoEngine.Graphs.GraphDocument graph, System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodeIds, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Removes selected nodes, stage-owned nodes and declarations which lose their last graph owner.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIds`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

**Returns:** A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

**Throws `System.ArgumentException`:** A selected identity is not in the document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L36).
