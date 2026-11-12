---
title: "ShaderTargetAttribute"
description: "Reference for ShaderTargetAttribute in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.b0315fa1ca1daf42
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderTargetAttribute`

This reference describes `ShaderTargetAttribute` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-689e0a666fe48cc1) | Method |
| [`id`](#api-df03dd5c6e145611) | Property |

## Type declaration

<a id="api-b0315fa1ca1daf42"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderTargetAttribute 2d06f549ba3daec09f9c0dd5a1fbe19698f0348ad6644d514e57e897314485cf -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderTargetAttribute : System.Attribute
```

Declares the immutable identity used to select a Shader Target from an authored graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L12).

## `#ctor`

<a id="api-689e0a666fe48cc1"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderTargetAttribute.#ctor(System.String) 42559bc553349faea54ac65ff4a488e0c40086731b73913ae067b767bee29f5f -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderTargetAttribute.ShaderTargetAttribute(string id)
```

Creates target discovery metadata.

**Parameter `id`:** Stable target identity persisted by Shader assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L20).

## `id`

<a id="api-df03dd5c6e145611"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderTargetAttribute.id ccb3f04ce46ae302c92bef46b0ef83a5deec6dbd8e8ab822ef4dc5f780243f84 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderTargetAttribute.id { get; }
```

Gets the stable target identity persisted by Shader assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTarget.cs#L28).
