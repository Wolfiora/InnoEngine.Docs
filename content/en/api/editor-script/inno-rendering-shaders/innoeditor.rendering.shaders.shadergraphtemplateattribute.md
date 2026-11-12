---
title: "ShaderGraphTemplateAttribute"
description: "Reference for ShaderGraphTemplateAttribute in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.fc3d7846884d640a
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphTemplateAttribute`

This reference describes `ShaderGraphTemplateAttribute` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d517800de53d933c) | Method |
| [`displayName`](#api-6772ab7dc348eb7b) | Property |
| [`id`](#api-5342e769e19ad885) | Property |

## Type declaration

<a id="api-fc3d7846884d640a"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute fd74138398bbf54d91586929ce8021d3a0b10d1006f32fbf679c6d85262e419e -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute : System.Attribute
```

Declares immutable creation metadata for a Shader graph template.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L11).

## `#ctor`

<a id="api-d517800de53d933c"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.#ctor(System.String,System.String) 3a85a609d98937ea621376bf0f900b6ceb9efde85a9275e68a650930d69717c5 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.ShaderGraphTemplateAttribute(string id, string displayName)
```

Creates Shader graph template discovery metadata.

**Parameter `id`:** Stable template identity used by creation commands.

**Parameter `displayName`:** User-facing creation menu label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L22).

## `displayName`

<a id="api-6772ab7dc348eb7b"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.displayName ec635f06c579d91a6178f8eaa5c8c2bf6c0a8fbb0196e49abca56e02ff783c63 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.displayName { get; }
```

Gets the user-facing creation menu label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L42).

## `id`

<a id="api-5342e769e19ad885"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.id 2c30eed3de7d0fe70c94294a036404fcb4d6bb908edeab29cd07954786342aba -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphTemplateAttribute.id { get; }
```

Gets the stable template identity used by creation commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L37).
