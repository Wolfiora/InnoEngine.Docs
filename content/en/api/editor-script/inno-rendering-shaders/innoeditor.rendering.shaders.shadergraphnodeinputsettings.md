---
title: "ShaderGraphNodeInputSettings"
description: "Reference for ShaderGraphNodeInputSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.fa44753aa6b04397
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeInputSettings`

This reference describes `ShaderGraphNodeInputSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8e254b26dfb44295) | Method |
| [`ports`](#api-3bc4554b3a71e63b) | Property |

## Type declaration

<a id="api-fa44753aa6b04397"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings 0b370203cd8e3cde1fbf56416a3a9af00bc7a6d071deebbd013bff60ae036279 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings : InnoEngine.Serialization.ISerializable
```

Stores values supplied by callers to a graph-authored node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L96).

## `#ctor`

<a id="api-8e254b26dfb44295"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings.#ctor d4d9e08cdef7b9af51301a8e88b968aa75c00ca14e83cb3edd27bc27ce6e5342 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings.ShaderGraphNodeInputSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L96).

## `ports`

<a id="api-3bc4554b3a71e63b"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings.ports c7fc39f1bd73e5d35a3a7e31e08ad6972151f1d2c2541ef342205cc91cb09bd3 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodePortDefinition[] InnoEditor.Rendering.Shaders.ShaderGraphNodeInputSettings.ports { get; set; }
```

Gets or sets values supplied by callers and exposed as outputs inside the node graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L101).
