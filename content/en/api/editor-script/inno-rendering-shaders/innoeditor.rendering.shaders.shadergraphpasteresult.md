---
title: "ShaderGraphPasteResult"
description: "Reference for ShaderGraphPasteResult in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.2c5af3088be83a62
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphPasteResult`

This reference describes `ShaderGraphPasteResult` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4612187a7234366a) | Method |
| [`document`](#api-3f944684eccb29dd) | Property |
| [`insertedNodes`](#api-8ca6b698962f860f) | Property |

## Type declaration

<a id="api-2c5af3088be83a62"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphPasteResult 7176378b849609b7e2a7b09423a607fe6e25172ac2cbc0354d35bcd40f264ba9 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphPasteResult
```

Contains a detached paste candidate and its newly allocated node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L170).

## `#ctor`

<a id="api-4612187a7234366a"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.#ctor 512972d85b81405a6c61757810b0449778287198cb9bb4d1e44f7d470b62790e -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.ShaderGraphPasteResult()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L170).

## `document`

<a id="api-3f944684eccb29dd"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.document 644ce6583cae46af16f7757869fec7e072716a444f40b7547dedc03522ed7eff -->

```csharp
public InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.document { get; }
```

Gets the complete detached candidate; the caller owns its subsequent edits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L182).

## `insertedNodes`

<a id="api-8ca6b698962f860f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.insertedNodes 511f677c48eedbc62179b6584a773b6992515ad898c6b35bf72534f6140a8446 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphNodeId> InnoEditor.Rendering.Shaders.ShaderGraphPasteResult.insertedNodes { get; }
```

Gets new identities suitable for selecting the pasted nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphClipboard.cs#L186).
