---
title: "ShaderGraphPasteResult"
description: "Reference for ShaderGraphPasteResult in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.72e015917e4ad436
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphPasteResult`

This reference describes `ShaderGraphPasteResult` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`document`](#api-54f3517587663073) | Property |
| [`insertedNodes`](#api-c42d2afc25c7fb98) | Property |

## Type declaration

<a id="api-72e015917e4ad436"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphPasteResult a225ffab7ebdfc35df29f36f1dd04f9a90d0400594f0e30a8d74d1338fdc11e7 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphPasteResult
```

Contains a detached paste candidate and its newly allocated node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L170).

## `document`

<a id="api-54f3517587663073"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPasteResult.document 0f39b7bbedbebd7ef12773c2e2fe4f747ba08ebe3829c1c945cece3ddc27e0e7 -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphPasteResult.document { get; }
```

Gets the complete detached candidate; the caller owns its subsequent edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L182).

## `insertedNodes`

<a id="api-c42d2afc25c7fb98"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPasteResult.insertedNodes 7b9f1373bcb5e24d0c4550d6850c7cf6e00e7a17d8e4cfb940337c419d62e111 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphNodeId> Inno.Rendering.Shaders.ShaderGraphPasteResult.insertedNodes { get; }
```

Gets new identities suitable for selecting the pasted nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L186).
