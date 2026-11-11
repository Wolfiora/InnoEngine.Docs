---
title: "ShaderGraphProgramResult"
description: "Reference for ShaderGraphProgramResult in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.8c5026d097d9ab52
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphProgramResult`

This reference describes `ShaderGraphProgramResult` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`diagnostics`](#api-3cf753381a4cb954) | Property |
| [`passes`](#api-a538c46738c941d5) | Property |
| [`succeeded`](#api-e82a7e806efb6a99) | Property |

## Type declaration

<a id="api-8c5026d097d9ab52"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphProgramResult dd908c39a15b36641fa0f364640a2867671d70ee61a3de1a585adccb611d8a2d -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphProgramResult
```

Contains the result of lowering an entire shader graph, before target-native compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L44).

## `diagnostics`

<a id="api-3cf753381a4cb954"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphProgramResult.diagnostics c92897cac4241d37c2baf8fd023d24fb32a0d0b5a00dbbbc9f058299fb059948 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderGraphDiagnostic> Inno.Rendering.Shaders.ShaderGraphProgramResult.diagnostics { get; }
```

Gets stable graph/node diagnostics without provider references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L60).

## `passes`

<a id="api-a538c46738c941d5"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphProgramResult.passes f7a0aac0ea364e9d79f2cc1bf39fe9f01aa5f9d0ad5e00641000a1ceb9d655e3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderGraphPass> Inno.Rendering.Shaders.ShaderGraphProgramResult.passes { get; }
```

Gets the complete stage set; empty if any stage failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L56).

## `succeeded`

<a id="api-e82a7e806efb6a99"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphProgramResult.succeeded 1abdb46e1b81f2f14f03d7131bd6d458d84bd60cdb3772518adcbd729177997f -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphProgramResult.succeeded { get; }
```

Gets whether every declared pass was lowered without errors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L64).
