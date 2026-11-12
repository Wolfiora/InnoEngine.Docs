---
title: "ShaderGraphOutput"
description: "Reference for ShaderGraphOutput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.762b37f2d677fbe2
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphOutput`

This reference describes `ShaderGraphOutput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`id`](#api-5b322c67b61f89b6) | Property |
| [`kind`](#api-995b05b7c34aab21) | Property |
| [`location`](#api-6f87cfdf172bc01d) | Property |
| [`semantic`](#api-84cedd894592a311) | Property |

## Type declaration

<a id="api-762b37f2d677fbe2"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphOutput 08f5e30a2e857ba8c5b17e77842dacd8920020beee74ff7515e36d8f3060940e -->

```csharp
public struct InnoEditor.Rendering.Shaders.ShaderGraphOutput
```

Stores one stable output port's destination, independent of adapter source syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L262).

## `id`

<a id="api-5b322c67b61f89b6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphOutput.id be5cec8d70b19159246bee96835c18be7fe192533ffb83a4dd92de9ffd65b607 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphOutput.id { get; set; }
```

Gets or sets the stable input port identity on the stage output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L267).

## `kind`

<a id="api-995b05b7c34aab21"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphOutput.kind 9f104225dd175c545bac99958537ad75ecff6379d3a601bd073f25cbf2f1d619 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrOutputKind InnoEditor.Rendering.Shaders.ShaderGraphOutput.kind { get; set; }
```

Gets or sets the GPU destination category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L271).

## `location`

<a id="api-6f87cfdf172bc01d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphOutput.location 2d69e3e2d944cbb6697080b602536589c9f84fd3ae2e3efdf26a99848868176f -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphOutput.location { get; set; }
```

Gets or sets the varying or attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L279).

## `semantic`

<a id="api-84cedd894592a311"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphOutput.semantic b71f6a6aafcee728290c9b97d2b1c4cb29d11247b28c3b4eea0d48fe18927fc6 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphOutput.semantic { get; set; }
```

Gets or sets the varying semantic; empty for fixed position, color or depth outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L275).
