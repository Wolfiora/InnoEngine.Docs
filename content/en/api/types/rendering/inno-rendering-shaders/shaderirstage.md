---
title: "ShaderIrStage"
description: "Reference for ShaderIrStage in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.743271efa4cbf897
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrStage`

This reference describes `ShaderIrStage` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1a133fe2d98a20a7) | Method |
| [`body`](#api-80db68cf1e129bde) | Property |
| [`contentHash`](#api-ffbcf55af3cf059b) | Property |
| [`inputs`](#api-c2ba77b8405f3e8d) | Property |
| [`outputs`](#api-9510bea69efa583d) | Property |
| [`stage`](#api-8c35c23a9658328e) | Property |
| [`threadsX`](#api-e9e795275a8da82a) | Property |
| [`threadsY`](#api-a3eabf2d83984493) | Property |
| [`threadsZ`](#api-031579c273060026) | Property |

## Type declaration

<a id="api-743271efa4cbf897"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrStage 88e4285730c89e3abf71801ada66ad2612da532cb32736956508b7151da2925d -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrStage
```

Freezes a typed GPU stage and its explicit interface. It contains no main function, varying declarations or source expressions.
Targets own stage/resource layout; adapters translate these semantics into their native language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L190).

## `#ctor`

<a id="api-1a133fe2d98a20a7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderIrStage.#ctor(Inno.Rendering.ShaderStage,Inno.Rendering.Shaders.ShaderIrBlock,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderIrStageInput},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderIrStageOutput},System.Int32,System.Int32,System.Int32) 9c7694f851cc81460b3f140723d8da2944580529751cea758285bfc6cdc191ae -->

```csharp
public Inno.Rendering.Shaders.ShaderIrStage.ShaderIrStage(Inno.Rendering.ShaderStage stage, Inno.Rendering.Shaders.ShaderIrBlock body, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderIrStageInput> inputs, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderIrStageOutput> outputs, int threadsX = 1, int threadsY = 1, int threadsZ = 1)
```

Validates and freezes a single stage's interface and ordered body.

**Parameter `stage`:** Exactly Vertex, Fragment or Compute.

**Parameter `body`:** Immutable typed instructions and named outputs.

**Parameter `inputs`:** Exactly the input bindings read by the body.

**Parameter `outputs`:** Exactly the GPU destinations written by the body.

**Parameter `threadsX`:** Compute workgroup X size; one for raster stages.

**Parameter `threadsY`:** Compute workgroup Y size; one for raster stages.

**Parameter `threadsZ`:** Compute workgroup Z size; one for raster stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L216).

## `body`

<a id="api-80db68cf1e129bde"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.body 02c5579555eac1d6d14738fbb7a0084e3d618b3e574b7f33918324186ddc3313 -->

```csharp
public Inno.Rendering.Shaders.ShaderIrBlock Inno.Rendering.Shaders.ShaderIrStage.body { get; }
```

Gets its immutable ordered instructions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L250).

## `contentHash`

<a id="api-ffbcf55af3cf059b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.contentHash 85ae0564ae03a4491c6ee69bce43363c61c940f998dada78442f36e95bd52f5e -->

```csharp
public string Inno.Rendering.Shaders.ShaderIrStage.contentHash { get; }
```

Gets a deterministic hash of stage semantics, ordered effects, nested regions, complete types, resource layout and frozen sources.
A compiled artifact cache must additionally include toolchain identity, target capabilities, optimization and variant configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L275).

## `inputs`

<a id="api-c2ba77b8405f3e8d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.inputs 01117716b9b77d87626ab77cb7b531a7aa8e72410bda174b72535a53c900d724 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrStageInput> Inno.Rendering.Shaders.ShaderIrStage.inputs { get; }
```

Gets all input bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L254).

## `outputs`

<a id="api-9510bea69efa583d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.outputs 18b054237f28c506cb3159ee489fd7edc0124d0729d0c0f4287ee0cc9d26b1ed -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderIrStageOutput> Inno.Rendering.Shaders.ShaderIrStage.outputs { get; }
```

Gets all output destinations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L258).

## `stage`

<a id="api-8c35c23a9658328e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.stage ce90adaca54d20a06f3634afaf35c709cb03ab9fd65685b9063332b663185703 -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Shaders.ShaderIrStage.stage { get; }
```

Gets the programmable stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L246).

## `threadsX`

<a id="api-e9e795275a8da82a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.threadsX 5fb475274d94a9cfefe648d4a287e9722322af0a3ac0fe66ce4797e777a01f68 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrStage.threadsX { get; }
```

Gets the compute workgroup X size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L262).

## `threadsY`

<a id="api-a3eabf2d83984493"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.threadsY 6da33451a1567586212b522147cb7811e7bba5e60162914a1fc35de800048a8b -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrStage.threadsY { get; }
```

Gets the compute workgroup Y size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L266).

## `threadsZ`

<a id="api-031579c273060026"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrStage.threadsZ 8854c9a54000143f44fb459ecbf05677072366cdae28d67acdc0d6e718b24fe9 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrStage.threadsZ { get; }
```

Gets the compute workgroup Z size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L270).
