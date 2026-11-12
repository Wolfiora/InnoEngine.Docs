---
title: "ShaderIrStageInput"
description: "Reference for ShaderIrStageInput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.024063c2ced99192
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrStageInput`

This reference describes `ShaderIrStageInput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-61d265912c7e0bc3) | Method |
| [`id`](#api-777399ea3ee2a5fe) | Property |
| [`kind`](#api-76d27e51233b0001) | Property |
| [`location`](#api-a97be33d780bd8a3) | Property |
| [`semantic`](#api-be6d7ed0544603f3) | Property |
| [`type`](#api-2a3f4c98f7096001) | Property |

## Type declaration

<a id="api-024063c2ced99192"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrStageInput 13021ed6208d09edb97e770860a3da0eaf620c2fabdb42a3611fd8ab1f3e7dd0 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrStageInput
```

Describes a stage input without embedding native declarations or expressions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L65).

## `#ctor`

<a id="api-61d265912c7e0bc3"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrStageInput.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEditor.Rendering.Shaders.ShaderIrInputKind,System.String,System.Int32) 41daf7df7ed16f565dd3c826f166895be94dbf63382a83b0f94ae346410a7b06 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrStageInput.ShaderIrStageInput(string id, InnoEditor.Rendering.Shaders.ShaderSourceType type, InnoEditor.Rendering.Shaders.ShaderIrInputKind kind, string semantic = "", int location = 0)
```

Creates an immutable stage input binding.

**Parameter `id`:** Stable binding identity, also used by the block's named Input instruction.

**Parameter `type`:** Complete non-void type.

**Parameter `kind`:** Source of the GPU value.

**Parameter `semantic`:** Target semantic, such as position, texcoord, color, instance-data or fragment-coordinate.

**Parameter `location`:** Attribute/semantic index or assigned texture slot, never a native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L85).

## `id`

<a id="api-777399ea3ee2a5fe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageInput.id f65bc29dbdd18ee777d1e73733517bd3183eedd20435bda938b460da1114c06a -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderIrStageInput.id { get; }
```

Gets the logical binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L111).

## `kind`

<a id="api-76d27e51233b0001"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageInput.kind 6623ba4a48e211befba47a060506ce4edfed59f94f33eb53bb7be18174c0c24c -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrInputKind InnoEditor.Rendering.Shaders.ShaderIrStageInput.kind { get; }
```

Gets the GPU input category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L119).

## `location`

<a id="api-a97be33d780bd8a3"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageInput.location 87d5d4b3c8341df443b5db70571d22ff64623946394af591f357f9aaa42ec601 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrStageInput.location { get; }
```

Gets the target-assigned interface location or sampled-texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L127).

## `semantic`

<a id="api-be6d7ed0544603f3"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageInput.semantic 5b30ce9321ee9ee73df655ddaeb128f613cdd73b7004090e75dd5e4abe1486ee -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderIrStageInput.semantic { get; }
```

Gets the target semantic; an adapter must reject unsupported semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L123).

## `type`

<a id="api-2a3f4c98f7096001"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStageInput.type 1809ef09804c38ec83ec763affd6e4ea2e1b0af6eb9bd755763adb1e6d720273 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderIrStageInput.type { get; }
```

Gets the complete typed value received by the stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L115).
