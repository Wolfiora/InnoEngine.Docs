---
title: "RenderMaterialPass"
description: "Reference for RenderMaterialPass in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.2901e18d9236794a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderMaterialPass`

This reference describes `RenderMaterialPass` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Bind`](#api-3d1efa2ced714ed6) | Method |
| [`UsesBinding`](#api-6619c34a8e870f54) | Method |
| [`computePipeline`](#api-d32d2e12de6915a5) | Property |
| [`definition`](#api-2d24b97f8b7db04b) | Property |
| [`graphicsPipeline`](#api-d205fac18fa1744f) | Property |
| [`isCompute`](#api-7ef17b7946d6606c) | Property |
| [`isGraphics`](#api-8cb78a8517bb5bc4) | Property |

## Type declaration

<a id="api-2901e18d9236794a"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderMaterialPass 006a40fab3f4be9517460d2e045d951e52389ce9856f7199e869354e2b80e2d7 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderMaterialPass
```

Represents one frame-resolved material pass and its material-owned bindings.

**Constraints:** The instance is scoped to the active render device generation. Pipeline-owned graph textures and
buffers remain explicit and are bound by the caller after this material state is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L36).

## `Bind`

<a id="api-3d1efa2ced714ed6"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderMaterialPass.Bind(Inno.Rendering.RenderCommandEncoder) 707281679ee6e01173f2563d527c105fbd7e474eda7fd031f0b57ee82192ce80 -->

```csharp
public void Inno.Rendering.Runtime.RenderMaterialPass.Bind(Inno.Rendering.RenderCommandEncoder commands)
```

Binds the program and all material-owned values and textures.

**Parameter `commands`:** Current pass command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L132).

## `UsesBinding`

<a id="api-6619c34a8e870f54"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind) 63e614d2c815ac4c3cc762979f04f0272ed6d9c0c3d9bccbf4bd88a907468f50 -->

```csharp
public bool Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderShaderBindingKind kind)
```

Gets whether the compiled program actively consumes one declared binding.

**Parameter `binding`:** Stable binding declared by the shader contract.

**Parameter `kind`:** Expected command-binding domain.

**Returns:** `true` when the final compiled pass reflects the binding; otherwise,
    `false` when the compiler proved the declared binding unused and removed it.

**Throws `System.ArgumentException`:** The binding is not declared by the shader, or its declared kind differs from `kind`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L109).

## `computePipeline`

<a id="api-d32d2e12de6915a5"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderMaterialPass.computePipeline e5120f0eee779cfd0b2c0d50a290d9a6f7738155a691140bb32dbe51d97b59f3 -->

```csharp
public Inno.Rendering.ComputePipelineHandle Inno.Rendering.Runtime.RenderMaterialPass.computePipeline { get; }
```

Gets the compute pipeline, or an invalid handle for a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L81).

## `definition`

<a id="api-2d24b97f8b7db04b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderMaterialPass.definition 3bf98f878195093ec54b3f767f858d9544c5aab421f7bdcd60a4965f23372f22 -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition Inno.Rendering.Runtime.RenderMaterialPass.definition { get; }
```

Gets the selected provider-defined shader pass with detached metadata storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L71).

## `graphicsPipeline`

<a id="api-d205fac18fa1744f"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderMaterialPass.graphicsPipeline e12e48af73e16ceff29e064ff8fce7521d4282922a83a6fd28b6274d7581bae7 -->

```csharp
public Inno.Rendering.GraphicsPipelineHandle Inno.Rendering.Runtime.RenderMaterialPass.graphicsPipeline { get; }
```

Gets the graphics pipeline, or an invalid handle for a compute pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L76).

## `isCompute`

<a id="api-7ef17b7946d6606c"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderMaterialPass.isCompute 9ca75bca0f1b89a9f7872a29efa88d6076959ca631c07cbf4fe0b5a8e00b707d -->

```csharp
public bool Inno.Rendering.Runtime.RenderMaterialPass.isCompute { get; }
```

Gets whether this is a compute material pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L91).

## `isGraphics`

<a id="api-8cb78a8517bb5bc4"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderMaterialPass.isGraphics 66b1452da6d09dadea1485e4ef3c62a9e053439e9b36aa656027099ee549517f -->

```csharp
public bool Inno.Rendering.Runtime.RenderMaterialPass.isGraphics { get; }
```

Gets whether this is a graphics material pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderMaterialPass.cs#L86).
