---
title: "ShaderIrBlock"
description: "Reference for ShaderIrBlock in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.c3a93eb0e022af7b
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrBlock`

This reference describes `ShaderIrBlock` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-92c24cd3001d059c) | Method |
| [`instructions`](#api-9e5e00a7ed11d9a4) | Property |
| [`outputs`](#api-b4f77b15fc8e970d) | Property |

## Type declaration

<a id="api-c3a93eb0e022af7b"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrBlock 473f3bbad6aefa4e2a1e8aff2b97ba412b1045201410ef99e1f935f1ad209f0a -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrBlock
```

Contains immutable ordered instructions and nested structured regions without retaining builder callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L201).

## `#ctor`

<a id="api-92c24cd3001d059c"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrBlock.#ctor 84a3d00c409ce4a20d6aca34d1b7ed91282a74453b697c3dde94c51c8ed11bea -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrBlock.ShaderIrBlock()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L201).

## `instructions`

<a id="api-9e5e00a7ed11d9a4"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrBlock.instructions aaec893a487fc22efedb5e533282fd16ddaf7318dccfccccace54ca576f0514e -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrInstruction> InnoEditor.Rendering.Shaders.ShaderIrBlock.instructions { get; }
```

Gets instructions in evaluation order, including source calls whose outputs are unused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L214).

## `outputs`

<a id="api-b4f77b15fc8e970d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrBlock.outputs 4e950bb45b3f8e51aae74d34919c75681be6464e24ae9903da5fcd87f778b85c -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEditor.Rendering.Shaders.ShaderIrValue> InnoEditor.Rendering.Shaders.ShaderIrBlock.outputs { get; }
```

Gets named values returned to the enclosing stage or region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L218).
