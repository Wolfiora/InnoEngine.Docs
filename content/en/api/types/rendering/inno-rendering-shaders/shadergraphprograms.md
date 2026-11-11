---
title: "ShaderGraphPrograms"
description: "Reference for ShaderGraphPrograms in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.ff0b8d46385927e3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphPrograms`

This reference describes `ShaderGraphPrograms` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`bindingsKey`](#api-c5eab437b9af8a2a) | Field |
| [`Bind`](#api-f7e1df7ced47f15c) | Method |
| [`Read`](#api-10a14f18bd7e2112) | Method |
| [`RemovePass`](#api-03f2610ad2637cb0) | Method |

## Type declaration

<a id="api-ff0b8d46385927e3"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphPrograms 1a716be71cb497c6a35cc4dd5b5a0958ba15e0e4828b7fc9edd5a0eeed85f4e9 -->

```csharp
public static class Inno.Rendering.Shaders.ShaderGraphPrograms
```

Edits pass-to-program references without copying computation or changing runtime render states.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L28).

## `bindingsKey`

<a id="api-c5eab437b9af8a2a"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderGraphPrograms.bindingsKey dfba735f3638c569ba570b73abe4b8bf569313ab77fb51328f84c24968c4f572 -->

```csharp
public const string Inno.Rendering.Shaders.ShaderGraphPrograms.bindingsKey = "inno.shader.programs"
```

Identifies native metadata holding pass references to shared stage programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L33).

## `Bind`

<a id="api-f7e1df7ced47f15c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphPrograms.Bind(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 6ff6ebece154f96328053a0868b86ab41ac1f1e43b2ee48940397e0a07f76668 -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphPrograms.Bind(Inno.Core.Graphs.GraphDocument graph, string pass, System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> stages, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Assigns existing shared stages to one pass in an atomic detached candidate.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate suitable for one shared History transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L80).

## `Read`

<a id="api-10a14f18bd7e2112"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphPrograms.Read(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 84b432ad38b368d1d4b3b0a522054804ff23f101e753fffa5f8bc67c9525a330 -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphPassProgram[] Inno.Rendering.Shaders.ShaderGraphPrograms.Read(Inno.Core.Graphs.GraphDocument graph, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads detached pass-to-stage references, including unresolved authored identities.

**Parameter `graph`:** Shader authoring document.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** Detached native references; corrupt or missing program metadata is an error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L50).

## `RemovePass`

<a id="api-03f2610ad2637cb0"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphPrograms.RemovePass(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) a82990b981a69ff4a5b2703bd09d8f4c19f9fe8c1188b7f4713294c931cd2f2a -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphPrograms.RemovePass(Inno.Core.Graphs.GraphDocument graph, string pass, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Removes a pass and only computations whose final referencing pass was removed.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate preserving programs shared by other passes and their parameter declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L127).
