---
title: "ShaderGraphClipboard"
description: "Reference for ShaderGraphClipboard in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.145c099c6f9035a1
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphClipboard`

This reference describes `ShaderGraphClipboard` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Copy`](#api-334f7365fd366a21) | Method |
| [`Paste`](#api-56864a7e46110bda) | Method |

## Type declaration

<a id="api-145c099c6f9035a1"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphClipboard 8a470ebe36ffb8b73efd118c77c0c22dda48094b18c083f48014f48274eb883b -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphClipboard
```

Copies and pastes shader structures as detached atomic candidates, including their parameter and Pass contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L13).

## `Copy`

<a id="api-334f7365fd366a21"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphClipboard.Copy(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) e2de3b765a2153b93ac31319bfc5e5c4032465bb82da3cfa833d2348c90ac50f -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphClipboard.Copy(Inno.Core.Graphs.GraphDocument graph, System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodes, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Captures selected nodes and the owned contents of selected stage outputs.

**Parameter `graph`:** Source document, never changed.

**Parameter `nodes`:** Selected stable identities.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** Detached fragment retaining source declarations for a later paste.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L33).

## `Paste`

<a id="api-56864a7e46110bda"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphClipboard.Paste(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphDocument,System.Boolean,System.Nullable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 42718c3209f70ec808a6107c8592f3a626ce70a2318eab0b68e4866fbb40affd -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphPasteResult Inno.Rendering.Shaders.ShaderGraphClipboard.Paste(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Graphs.GraphDocument fragment, bool preserveExternalStageReferences, Inno.Core.Graphs.GraphNodeId? activeStage, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates a detached paste candidate with new node identities and remapped program, Pass and Technique references.

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

**Returns:** A complete candidate suitable for one History transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L73).
