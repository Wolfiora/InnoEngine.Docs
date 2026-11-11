---
title: "ShaderGraphTemplateAttribute"
description: "Reference for ShaderGraphTemplateAttribute in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.3e627b19f9998376
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphTemplateAttribute`

This reference describes `ShaderGraphTemplateAttribute` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9e256b39d7ac4365) | Method |
| [`displayName`](#api-bc8e432dfe5bfc32) | Property |
| [`id`](#api-01b8b63c6c553245) | Property |

## Type declaration

<a id="api-3e627b19f9998376"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphTemplateAttribute dadc0146941316c8ea124f6f6fceab019bdc45d2d172f9820e23cd2656098338 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphTemplateAttribute : System.Attribute
```

Declares immutable creation metadata for a Shader graph template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L11).

## `#ctor`

<a id="api-9e256b39d7ac4365"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.#ctor(System.String,System.String) f945aba1da8c9f582a2672264545912c3b667632f8717f8fb69320db9bf4b05c -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.ShaderGraphTemplateAttribute(string id, string displayName)
```

Creates Shader graph template discovery metadata.

**Parameter `id`:** Stable template identity used by creation commands.

**Parameter `displayName`:** User-facing creation menu label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L22).

## `displayName`

<a id="api-bc8e432dfe5bfc32"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.displayName 671323fb7374bd24d8def1e9aa86c202068becf8ecd142544d1b0b7564902b18 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.displayName { get; }
```

Gets the user-facing creation menu label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L42).

## `id`

<a id="api-01b8b63c6c553245"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.id aa7ab151441d65f50c142a9794b16c07885a0643e19e03b0f00b58974d52caed -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphTemplateAttribute.id { get; }
```

Gets the stable template identity used by creation commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L37).
