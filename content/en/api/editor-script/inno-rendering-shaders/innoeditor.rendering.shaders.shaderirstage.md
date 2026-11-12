---
title: "ShaderIrStage"
description: "Reference for ShaderIrStage in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.cc39906e930a3372
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrStage`

This reference describes `ShaderIrStage` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e0752966372ef0d0) | Method |
| [`body`](#api-6e8cd9997dc1c3d5) | Property |
| [`contentHash`](#api-d0b629e1a3ccc627) | Property |
| [`inputs`](#api-857323b1047942b6) | Property |
| [`outputs`](#api-777565814e8acb26) | Property |
| [`stage`](#api-d25ce457744ddde4) | Property |
| [`threadsX`](#api-ab40476fdbd2b333) | Property |
| [`threadsY`](#api-a1b6c3d7df90c08e) | Property |
| [`threadsZ`](#api-7257c2eb6030b160) | Property |

## Type declaration

<a id="api-cc39906e930a3372"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrStage d8a40175577a9af13ca047918b1089b4738ece656d0f1661f009079a5ccf8766 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderIrStage
```

Freezes a typed GPU stage and its explicit interface. It contains no main function, varying declarations or source expressions.
Targets own stage/resource layout; adapters translate these semantics into their native language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L190).

## `#ctor`

<a id="api-e0752966372ef0d0"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderIrStage.#ctor(InnoEngine.Rendering.ShaderStage,InnoEditor.Rendering.Shaders.ShaderIrBlock,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageInput},System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderIrStageOutput},System.Int32,System.Int32,System.Int32) 093d029aeaaf0f922764d210e5200cb442f24c087835c55a8d197cbee3a959f8 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrStage.ShaderIrStage(InnoEngine.Rendering.ShaderStage stage, InnoEditor.Rendering.Shaders.ShaderIrBlock body, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.Shaders.ShaderIrStageInput> inputs, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.Shaders.ShaderIrStageOutput> outputs, int threadsX = 1, int threadsY = 1, int threadsZ = 1)
```

Validates and freezes a single stage's interface and ordered body.

**Parameter `stage`:** Exactly Vertex, Fragment or Compute.

**Parameter `body`:** Immutable typed instructions and named outputs.

**Parameter `inputs`:** Exactly the input bindings read by the body.

**Parameter `outputs`:** Exactly the GPU destinations written by the body.

**Parameter `threadsX`:** Compute workgroup X size; one for raster stages.

**Parameter `threadsY`:** Compute workgroup Y size; one for raster stages.

**Parameter `threadsZ`:** Compute workgroup Z size; one for raster stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L216).

## `body`

<a id="api-6e8cd9997dc1c3d5"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.body 9d90d7cb1758193450602ef4ac3b6526913e161e646c82a5ec79381c4d293b55 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderIrBlock InnoEditor.Rendering.Shaders.ShaderIrStage.body { get; }
```

Gets its immutable ordered instructions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L250).

## `contentHash`

<a id="api-d0b629e1a3ccc627"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.contentHash 19b80197b9afb217b863881ccee1ed70aa7d490b6e4247cf7c97f2dff92a4266 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderIrStage.contentHash { get; }
```

Gets a deterministic hash of stage semantics, ordered effects, nested regions, complete types, resource layout and frozen sources.
A compiled artifact cache must additionally include toolchain identity, target capabilities, optimization and variant configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L275).

## `inputs`

<a id="api-857323b1047942b6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.inputs 209f5b04f35d618c9b4d0f02fe68500fa703f8557a8c0335993b0bc9545a124d -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrStageInput> InnoEditor.Rendering.Shaders.ShaderIrStage.inputs { get; }
```

Gets all input bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L254).

## `outputs`

<a id="api-777565814e8acb26"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.outputs 247815000b6fbff300c2e5d78c754ab543f68cd0a1d0e0a3df6d1b75f0277b92 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderIrStageOutput> InnoEditor.Rendering.Shaders.ShaderIrStage.outputs { get; }
```

Gets all output destinations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L258).

## `stage`

<a id="api-d25ce457744ddde4"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.stage a0ab6c80a3167e74ffff20028e0283b7737375a6733fc56eb39dfd5f7a6a225d -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEditor.Rendering.Shaders.ShaderIrStage.stage { get; }
```

Gets the programmable stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L246).

## `threadsX`

<a id="api-ab40476fdbd2b333"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.threadsX b1a6cbc7fa9aeb0283c74c27fb70ec25f476b60a9f6568c659ee4441a9f2c5f8 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrStage.threadsX { get; }
```

Gets the compute workgroup X size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L262).

## `threadsY`

<a id="api-a1b6c3d7df90c08e"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.threadsY 410f398628fd6ed9aa6f8863b16217990491b19ad849f683bd598a2c353778f2 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrStage.threadsY { get; }
```

Gets the compute workgroup Y size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L266).

## `threadsZ`

<a id="api-7257c2eb6030b160"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderIrStage.threadsZ a0575511b3adb7f78b78e2eb4ab18776e2053e1a2661a10f84ee382c7df2241b -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderIrStage.threadsZ { get; }
```

Gets the compute workgroup Z size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrStage.cs#L270).
