---
title: "ShaderGraphTemplate"
description: "Reference for ShaderGraphTemplate in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.283ac79540187948
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphTemplate`

This reference describes `ShaderGraphTemplate` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-332de975e4c7dd00) | Method |
| [`Create`](#api-aab4f0cff7bdc126) | Method |

## Type declaration

<a id="api-283ac79540187948"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphTemplate 01c388ea7d62dd7b43ec0828a3a0a50008f1ff5aad2503aa3f8f79991e0039fb -->

```csharp
public abstract class Inno.Rendering.Shaders.ShaderGraphTemplate
```

Contributes an ordinary shader graph to the shared asset creation workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L48).

## `#ctor`

<a id="api-332de975e4c7dd00"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplate.#ctor 7a65db4de87f918a1dedbae630e28de17024e771f35bebe7f1c1878474a03b79 -->

```csharp
protected Inno.Rendering.Shaders.ShaderGraphTemplate.ShaderGraphTemplate()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L48).

## `Create`

<a id="api-aab4f0cff7bdc126"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplate.Create(Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 923da8cd6c009aea0f8c9662c31179a701bc9c5c897b1c4e39862fae33f01398 -->

```csharp
public abstract Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphTemplate.Create(Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates a fresh detached graph with its target and parameter declarations.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A graph ready for native serialization and ordinary shader import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplate.cs#L62).
