---
title: "ShaderGraphPrograms"
description: "Reference for ShaderGraphPrograms in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.e67ca5b17114aafd
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphPrograms`

This reference describes `ShaderGraphPrograms` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`bindingsKey`](#api-de5e0dc6c9fb2026) | Field |
| [`Bind`](#api-211b021d06fce000) | Method |
| [`Read`](#api-026c212b2c82ed4a) | Method |
| [`RemovePass`](#api-83c1b5c2e14698e4) | Method |

## Type declaration

<a id="api-e67ca5b17114aafd"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphPrograms f5097dda1874d8d4b36998024598826132ad32bf3e11fd8427af96b741344b46 -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphPrograms
```

Edits pass-to-program references without copying computation or changing runtime render states.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L28).

## `bindingsKey`

<a id="api-de5e0dc6c9fb2026"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.bindingsKey ca74f678715b95973873b5f5f282237aa91831113ec58a0b5c56a1a184dd8075 -->

```csharp
public const string InnoEditor.Rendering.Shaders.ShaderGraphPrograms.bindingsKey = "inno.shader.programs"
```

Identifies native metadata holding pass references to shared stage programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L33).

## `Bind`

<a id="api-211b021d06fce000"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Bind(InnoEngine.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) d4265f19d64312e14320ef5df7c8cca124cdd06597bbbfd513577dccc430973a -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Bind(InnoEngine.Graphs.GraphDocument graph, string pass, System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> stages, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Assigns existing shared stages to one pass in an atomic detached candidate.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate suitable for one shared History transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L80).

## `Read`

<a id="api-026c212b2c82ed4a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Read(InnoEngine.Graphs.GraphDocument,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) 107c3d153bc04b5c890bfd88c3037729dc25077c941a55236609d67a405552ea -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphPassProgram[] InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Read(InnoEngine.Graphs.GraphDocument graph, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Reads detached pass-to-stage references, including unresolved authored identities.

**Parameter `graph`:** Shader authoring document.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** Detached native references; corrupt or missing program metadata is an error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L50).

## `RemovePass`

<a id="api-83c1b5c2e14698e4"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.RemovePass(InnoEngine.Graphs.GraphDocument,System.String,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) ab75ee4cb5ff74c81e353f8ccd2c1bae5eabd3748121f810b35885b129fa457e -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphPrograms.RemovePass(InnoEngine.Graphs.GraphDocument graph, string pass, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Removes a pass and only computations whose final referencing pass was removed.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate preserving programs shared by other passes and their parameter declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L127).
