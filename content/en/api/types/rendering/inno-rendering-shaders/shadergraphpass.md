---
title: "ShaderGraphPass"
description: "Reference for ShaderGraphPass in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.31b93a06cb4d678d
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphPass`

This reference describes `ShaderGraphPass` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-427a4d7a608e728d) | Method |
| [`name`](#api-5b89b538336683d3) | Property |
| [`stages`](#api-b8e928e26a71b908) | Property |

## Type declaration

<a id="api-31b93a06cb4d678d"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphPass bd0c7e062e3d41af71f62520c62c5b2aa349e7460f097d9e262156da4ce1cef4 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphPass
```

Freezes the graph-lowered stages of one material-selectable GPU pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L11).

## `#ctor`

<a id="api-427a4d7a608e728d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphPass.#ctor(System.String,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderIrStage}) b6081ef14717773b0ac42917631ceab877e5995dbec4be8eec5b7e21b6376dd7 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphPass.ShaderGraphPass(string name, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderIrStage> stages)
```

Captures a pass's ordered typed stages.

**Parameter `name`:** Exact pass identity in the program contract.

**Parameter `stages`:** Complete raster or compute stage set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L22).

## `name`

<a id="api-5b89b538336683d3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPass.name 058c6fcafe00109b7dc1d9ec92db041b57ac02642a74203b06b789f82470258c -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphPass.name { get; }
```

Gets the stable pass identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L34).

## `stages`

<a id="api-b8e928e26a71b908"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphPass.stages 2038710c3341544244827f0c972923a0946a7de953f7b0eea91a25798b355f3c -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrStage> Inno.Rendering.Shaders.ShaderGraphPass.stages { get; }
```

Gets immutable graph-lowered stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgram.cs#L38).
