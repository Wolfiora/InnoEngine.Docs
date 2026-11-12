---
title: "ShaderIrStageOutput"
description: "Reference for ShaderIrStageOutput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.9d4ccb205f08ab70
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrStageOutput`

This reference describes `ShaderIrStageOutput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-19e9c946b19c2f7f) | Method |
| [`id`](#api-0753264cc0d75b7e) | Property |
| [`kind`](#api-86244ddb8a3b9985) | Property |
| [`location`](#api-714daece600275d6) | Property |
| [`semantic`](#api-f8e6469aaa699831) | Property |

## Type declaration

<a id="api-9d4ccb205f08ab70"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrStageOutput 6928e9ca1e289579ca089733b48dd6a967a09579cf4207642be38e55dff09c57 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrStageOutput
```

Describes a named block output's GPU destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L133).

## `#ctor`

<a id="api-19e9c946b19c2f7f"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrStageOutput.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderIrOutputKind,System.String,System.Int32) 890af05c86af9e3131d4b5ec7d3ea42897185756a31900ee4627ef08d5df7878 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrStageOutput.ShaderIrStageOutput(string id, InnoEditor.Rendering.Shaders.ShaderIrOutputKind kind, string semantic = "", int location = 0)
```

Creates an immutable stage output binding.

**Parameter `id`:** The exact name in the block's output map.

**Parameter `kind`:** GPU output category.

**Parameter `semantic`:** Varying semantic matched by the next stage; otherwise empty.

**Parameter `location`:** Varying index or color attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L150).

## `id`

<a id="api-0753264cc0d75b7e"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageOutput.id 7c58d4832140a4afaf2d4d15779e8399b415e26903647c2cf80530d79c861a72 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderIrStageOutput.id { get; }
```

Gets the exact block output identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L171).

## `kind`

<a id="api-86244ddb8a3b9985"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageOutput.kind aaa0bcf079461ba2f494c0613536a13d8ab30b6f1217bd12279e00559bfb40e3 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrOutputKind InnoEditor.Rendering.Shaders.ShaderIrStageOutput.kind { get; }
```

Gets the GPU output category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L175).

## `location`

<a id="api-714daece600275d6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageOutput.location 784072a42dd0c855136f47cb6ddaae2a6f8980b5909eae4f7ab3d0ae4f6e4a23 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrStageOutput.location { get; }
```

Gets the target-assigned varying or attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L183).

## `semantic`

<a id="api-f8e6469aaa699831"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageOutput.semantic 236b0748d21129bd5b25626b381bb8583a017e71eb7932c887eb4c50a144ce64 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderIrStageOutput.semantic { get; }
```

Gets the varying semantic, not native assignment syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L179).
