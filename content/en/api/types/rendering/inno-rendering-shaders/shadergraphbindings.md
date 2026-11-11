---
title: "ShaderGraphBindings"
description: "Reference for ShaderGraphBindings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.442f820ba6ab6558
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphBindings`

This reference describes `ShaderGraphBindings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ChangeInput`](#api-d53802c0cb1058f7) | Method |
| [`RemoveNodes`](#api-c312d7bf83962f7e) | Method |

## Type declaration

<a id="api-442f820ba6ab6558"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphBindings 901f047b518977a8ac3cb472194b7a833d403ffd80678fa86a343ca1987bad5d -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphBindings
```

Keeps graph input edits and the material-visible parameter contract in one neutral document change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L13).

## `ChangeInput`

<a id="api-d53802c0cb1058f7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphBindings.ChangeInput(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderGraphInputSettings,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) b798b5f2e27b91e649bf41fbbfe5bdd44528d79e21ac8213009e7845be7f2690 -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphBindings.ChangeInput(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Graphs.GraphNodeId nodeId, Inno.Rendering.Shaders.ShaderGraphInputSettings settings, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates a detached candidate with the input and its material/resource declaration updated together.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeId`:** Stage input node identity.

**Parameter `settings`:** New input settings, including incomplete values while typing.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for texture defaults.

**Returns:** A serializable candidate. Invalid input remains visible for normal graph validation.

**Throws `System.ArgumentException`:** The identity does not name a stage input node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L135).

## `RemoveNodes`

<a id="api-c312d7bf83962f7e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) dcc38400a957efdb1afe176a57c7dc5e840ac359cccaed876ae75a37a50ca95a -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphBindings.RemoveNodes(Inno.Core.Graphs.GraphDocument graph, System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodeIds, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Removes selected nodes, stage-owned nodes and declarations which lose their last graph owner.

**Parameter `graph`:** Current shader graph, never mutated by this operation.

**Parameter `nodeIds`:** Explicitly selected node identities. Deleting an output also deletes its stage contents.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner reference context for material defaults.

**Returns:** A detached candidate suitable for one atomic history entry; unrelated incomplete content is retained.

**Throws `System.ArgumentException`:** A selected identity is not in the document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphBindings.cs#L36).
