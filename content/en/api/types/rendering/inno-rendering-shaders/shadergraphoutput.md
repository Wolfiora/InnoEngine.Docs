---
title: "ShaderGraphOutput"
description: "Reference for ShaderGraphOutput in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.d3fd4c96ff589270
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphOutput`

This reference describes `ShaderGraphOutput` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`id`](#api-ff6da8764fe808b9) | Property |
| [`kind`](#api-57f1deee557994c0) | Property |
| [`location`](#api-dc7be1f66bfcc97d) | Property |
| [`semantic`](#api-31df57a5d2410652) | Property |

## Type declaration

<a id="api-d3fd4c96ff589270"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphOutput ba96366a0fa8eed7a1b264c1fa50758a81ae5bf504650834eac418e04e8cc01b -->

```csharp
public struct Inno.Rendering.Shaders.ShaderGraphOutput
```

Stores one stable output port's destination, independent of adapter source syntax.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L262).

## `id`

<a id="api-ff6da8764fe808b9"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphOutput.id 8ed846e03b2947d7cab9a436d6214bf89c72928d85f5e4891634e1f587b3022d -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphOutput.id { get; set; }
```

Gets or sets the stable input port identity on the stage output node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L267).

## `kind`

<a id="api-57f1deee557994c0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphOutput.kind d229f865c4bc677424a991fb57b7568f79a9ccb54aa65cf965a42d9353e53292 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrOutputKind Inno.Rendering.Shaders.ShaderGraphOutput.kind { get; set; }
```

Gets or sets the GPU destination category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L271).

## `location`

<a id="api-dc7be1f66bfcc97d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphOutput.location 4c04602ae2cfedc2da4cc44cecbb569f7945aed7082d5dfacbfab08cebdeadd9 -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphOutput.location { get; set; }
```

Gets or sets the varying or attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L279).

## `semantic`

<a id="api-31df57a5d2410652"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphOutput.semantic c76ad81afc343643c10e2b2058031becbddaa5abb7b7bbdecc59a3d68b4b6853 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphOutput.semantic { get; set; }
```

Gets or sets the varying semantic; empty for fixed position, color or depth outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphDocument.cs#L275).
