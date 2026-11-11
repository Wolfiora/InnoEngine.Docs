---
title: "ShaderIrBlock"
description: "Reference for ShaderIrBlock in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.120bf605f991d0a9
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrBlock`

This reference describes `ShaderIrBlock` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`instructions`](#api-c2ed19acbaed5763) | Property |
| [`outputs`](#api-db13ef35f9762af6) | Property |

## Type declaration

<a id="api-120bf605f991d0a9"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrBlock b833582742c220081999d644ba06f3075d3f589679f5cd5b9acae50cf5ddcfea -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrBlock
```

Contains immutable ordered instructions and nested structured regions without retaining builder callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L201).

## `instructions`

<a id="api-c2ed19acbaed5763"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrBlock.instructions e7fce129a192060f4b7003918facbec04f599f2c076eca434e57defb5391f390 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrInstruction> Inno.Rendering.Shaders.ShaderIrBlock.instructions { get; }
```

Gets instructions in evaluation order, including source calls whose outputs are unused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L214).

## `outputs`

<a id="api-db13ef35f9762af6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrBlock.outputs 45681c667af8678f47bad53adc226de5c3bb3e3cf567b6dbb1e7af8829dd5bc9 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderIrValue> Inno.Rendering.Shaders.ShaderIrBlock.outputs { get; }
```

Gets named values returned to the enclosing stage or region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L218).
