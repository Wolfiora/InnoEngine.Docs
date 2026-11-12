---
title: "ShaderGraphNodeEffect"
description: "Reference for ShaderGraphNodeEffect in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.6286635025408ed9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeEffect`

This reference describes `ShaderGraphNodeEffect` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Pure`](#api-a35dfb5b8788a193) | Field |
| [`SideEffect`](#api-d491fe0f9a73014a) | Field |

## Type declaration

<a id="api-6286635025408ed9"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect 1a3ba87cfd35a77115751cc15801f1b2fb5df3fd3cd9f11af81d4715e68d23b3 -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect : int
```

Declares whether a graph-authored function is pure or intentionally emits ordered effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L28).

## `Pure`

<a id="api-a35dfb5b8788a193"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect.Pure 31bf48d5224a6bc9949ea9e8a73c438192a7618cd9f6e0d1f1d158e495a6cb29 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect.Pure = 0
```

The function only computes returned values and therefore requires at least one output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L33).

## `SideEffect`

<a id="api-d491fe0f9a73014a"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect.SideEffect 092757eab4a891be1f166cf704e7d83166b01d37c75d5d24a0078cb0036246b4 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect.SideEffect = 1
```

The function may contain ordered GPU effects and can intentionally expose no returned values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L37).
