---
title: "ShaderGraphPassProgram"
description: "Reference for ShaderGraphPassProgram in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.6ea21c734b654dda
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphPassProgram`

This reference describes `ShaderGraphPassProgram` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`pass`](#api-ed19b2c49e96739c) | Property |
| [`stages`](#api-6f9b6fc3aa57aec5) | Property |

## Type declaration

<a id="api-6ea21c734b654dda"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphPassProgram c0999b25b0a9a2d129646c2e43a2c996c75e1c0c1c09418339147ea1bc1fde82 -->

```csharp
public struct InnoEditor.Rendering.Shaders.ShaderGraphPassProgram
```

References shared stage output identities from a material-selectable pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L13).

## `pass`

<a id="api-ed19b2c49e96739c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphPassProgram.pass 6dd6778e9f07875a454f7a8d37fd39c8ea2b93e6df1740cff43f8a9ae7a57d19 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphPassProgram.pass { get; set; }
```

Gets or sets the exact pass identity in the runtime shader definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L18).

## `stages`

<a id="api-6f9b6fc3aa57aec5"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphPassProgram.stages 7ce2dcd02c6dac2918747ca767c76398c27907d0966e6b1eaaf0ea04788054c6 -->

```csharp
public string[] InnoEditor.Rendering.Shaders.ShaderGraphPassProgram.stages { get; set; }
```

Gets or sets stable stage output node identities; computation remains owned by those nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphPrograms.cs#L22).
