---
title: "ShaderGraphTemplates"
description: "Reference for ShaderGraphTemplates in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.3081568837462dc5
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphTemplates`

This reference describes `ShaderGraphTemplates` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateRaster`](#api-b8b1c5d23e2ad635) | Method |

## Type declaration

<a id="api-3081568837462dc5"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphTemplates 8356949b2f9bf4a9d93156d14acc5905a55cd0fb3f2425ca91fe3bc200ffc890 -->

```csharp
public static class InnoEditor.Rendering.Shaders.ShaderGraphTemplates
```

Provides small backend-neutral starting documents composed exclusively of ordinary graph nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphTemplates.cs#L12).

## `CreateRaster`

<a id="api-b8b1c5d23e2ad635"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext) ea2c0ecf1e1fe7846a08bf8a4d436a61c67733dbe09be294a6fe87aea3070020 -->

```csharp
public static InnoEngine.Graphs.GraphDocument InnoEditor.Rendering.Shaders.ShaderGraphTemplates.CreateRaster(InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context)
```

Creates a raster graph accepting clip-space XY positions and an exposed RGBA color.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context for material defaults.

**Returns:** A valid two-stage document; pipelines may replace its vertex transform or provide their own templates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphTemplates.cs#L26).
