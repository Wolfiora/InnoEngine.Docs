---
title: "ShaderIrStageInput"
description: "Reference for ShaderIrStageInput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.e72b1aca01702f6d
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrStageInput`

This reference describes `ShaderIrStageInput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b1dd1a5808d785ab) | Method |
| [`id`](#api-afb3500d458fc4a6) | Property |
| [`kind`](#api-0649b19dfeb2169c) | Property |
| [`location`](#api-2ae529771335f1e8) | Property |
| [`semantic`](#api-df4bee17640bef47) | Property |
| [`type`](#api-2db5b8d87b8e7d94) | Property |

## Type declaration

<a id="api-e72b1aca01702f6d"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrStageInput 3e54ec1cefd47e1fda28b9da6dbe23f6f097a0d3dc5c6fd13ca5ce04c7337605 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrStageInput
```

Describes a stage input without embedding native declarations or expressions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L65).

## `#ctor`

<a id="api-b1dd1a5808d785ab"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrStageInput.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderIrInputKind,System.String,System.Int32) 174cb8446f4d91578f001c1f2b485fd34e48bd85adcacde5e3dde118dd1ab0bd -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStageInput.ShaderIrStageInput(string id, Inno.Rendering.Shaders.ShaderSourceType type, Inno.Rendering.Shaders.ShaderIrInputKind kind, string semantic = "", int location = 0)
```

Creates an immutable stage input binding.

**Parameter `id`:** Stable binding identity, also used by the block's named Input instruction.

**Parameter `type`:** Complete non-void type.

**Parameter `kind`:** Source of the GPU value.

**Parameter `semantic`:** Target semantic, such as position, texcoord, color, instance-data or fragment-coordinate.

**Parameter `location`:** Attribute/semantic index or assigned texture slot, never a native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L85).

## `id`

<a id="api-afb3500d458fc4a6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageInput.id 25af6b689c9029e3a4af50dabf3b2fe6b1594f2af323ec4cdee0f5cd869cb88d -->

```csharp
public string Inno.Rendering.Shaders.ShaderIrStageInput.id { get; }
```

Gets the logical binding identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L111).

## `kind`

<a id="api-0649b19dfeb2169c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageInput.kind d4a90fd014e35259eb18b7ae2f9602528eda0d06f2d3928bb76ca3a751a72370 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrInputKind Inno.Rendering.Shaders.ShaderIrStageInput.kind { get; }
```

Gets the GPU input category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L119).

## `location`

<a id="api-2ae529771335f1e8"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageInput.location 632dd2be59eda21c683a0cc6a0bb792d6847ae0291bfb1993d7667d849bff760 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrStageInput.location { get; }
```

Gets the target-assigned interface location or sampled-texture slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L127).

## `semantic`

<a id="api-df4bee17640bef47"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageInput.semantic af6904ee29280b2f3659186d4a060296b03bbcea787111f79c03f0bab02c371d -->

```csharp
public string Inno.Rendering.Shaders.ShaderIrStageInput.semantic { get; }
```

Gets the target semantic; an adapter must reject unsupported semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L123).

## `type`

<a id="api-2db5b8d87b8e7d94"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStageInput.type dc84e472b6fbe4741e697ae7b983debe3d7f175a00b3d5934e122044b112d633 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderIrStageInput.type { get; }
```

Gets the complete typed value received by the stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L115).
