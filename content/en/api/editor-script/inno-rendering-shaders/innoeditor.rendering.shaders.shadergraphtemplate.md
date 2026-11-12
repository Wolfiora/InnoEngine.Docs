---
title: "ShaderGraphTemplate"
description: "Reference for ShaderGraphTemplate in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.d89fe206a4a330b7
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphTemplate`

This reference describes `ShaderGraphTemplate` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-183d5d68d03f81f3) | Method |
| [`Create`](#api-569b72b5ada3e6bd) | Method |

## Type declaration

<a id="api-d89fe206a4a330b7"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphTemplate cf4e6d38920b3a567df75b8db5b680b643514c51400802400537ca208ae20a3d -->

```csharp
public abstract class InnoEditor.Rendering.Shaders.ShaderGraphTemplate
```

Contributes an ordinary shader graph to the shared asset creation workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L48).

## `#ctor`

<a id="api-183d5d68d03f81f3"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphTemplate.#ctor f9d685642c157ddffe07628edf1f840b86c45540a70f0b4ecf2b8e79500d136d -->

```csharp
protected InnoEditor.Rendering.Shaders.ShaderGraphTemplate.ShaderGraphTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L48).

## `Create`

<a id="api-569b72b5ada3e6bd"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphTemplate.Create(InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) fbba82f01c12737a907ac01b6cc35e46e2c13f649692fd239679611fe20d754e -->

```csharp
public abstract InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphTemplate.Create(InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Creates a fresh detached graph with its target and parameter declarations.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A graph ready for native serialization and ordinary shader import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L62).
