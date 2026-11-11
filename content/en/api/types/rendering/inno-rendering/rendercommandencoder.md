---
title: "RenderCommandEncoder"
description: "Reference for RenderCommandEncoder in Inno.Rendering."
uid: api.inno.rendering.1a2eb7b0af88d2bd
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderCommandEncoder`

This reference describes `RenderCommandEncoder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-50c4b741ee8fe5cb) | Method |
| [`BindBuffer`](#api-732c0a78039c3e51) | Method |
| [`BindBuffer`](#api-8a2aa8fb67177cab) | Method |
| [`BindBuffer`](#api-8d1611438a1caa22) | Method |
| [`BindComputePipeline`](#api-ea6b947b80525f08) | Method |
| [`BindGraphicsPipeline`](#api-f94c42b588843123) | Method |
| [`BindIndexBuffer`](#api-7ed37ed01f78c639) | Method |
| [`BindIndexBuffer`](#api-59dbdd4beaca0329) | Method |
| [`BindIndexBuffer`](#api-ea5968a213226760) | Method |
| [`BindInstanceBuffer`](#api-fe0596e942e2b9ea) | Method |
| [`BindInstanceBuffer`](#api-eacb60013c5907fb) | Method |
| [`BindInstanceBuffer`](#api-0052b35debf8e22f) | Method |
| [`BindStorageTexture`](#api-c8043104e611c72e) | Method |
| [`BindStorageTexture`](#api-b16f116ae459804c) | Method |
| [`BindTexture`](#api-cd2b1db609e6ba8a) | Method |
| [`BindTexture`](#api-ba7282edd0908eda) | Method |
| [`BindTexture`](#api-15767745948f0388) | Method |
| [`BindTexture`](#api-cabad1f315d7a988) | Method |
| [`BindVertexBuffer`](#api-1292a25c6f273d30) | Method |
| [`BindVertexBuffer`](#api-9e05b7c7dbb72d1e) | Method |
| [`BindVertexBuffer`](#api-2befef7147ee945f) | Method |
| [`BlitTexture`](#api-0c8f86b32175f83b) | Method |
| [`CopyBuffer`](#api-3adcea8c4ecf45a3) | Method |
| [`CopyTexture`](#api-a971ba7322aac1fc) | Method |
| [`Dispatch`](#api-fc7aad8cb08a5c79) | Method |
| [`DispatchIndirect`](#api-92ec9fff05d7b106) | Method |
| [`DispatchIndirect`](#api-55fa5cc52bd5c0b2) | Method |
| [`Draw`](#api-7e4dd27ea732bb81) | Method |
| [`DrawIndexed`](#api-353f8d099b75932c) | Method |
| [`DrawIndirect`](#api-b3268bc5f7c095dd) | Method |
| [`DrawIndirect`](#api-7f225eec7e58970d) | Method |
| [`DrawProcedural`](#api-dbaa079d174be82c) | Method |
| [`SetRasterState`](#api-cfaf29a92c60f895) | Method |
| [`SetScissor`](#api-5dd6ad01029882c4) | Method |
| [`SetStencil`](#api-4880530fbcdec308) | Method |
| [`SetTransform`](#api-7dae61f9083aade3) | Method |
| [`SetUniform`](#api-662c485b5e5902cc) | Method |
| [`SetViewport`](#api-35bfabb6eed2568b) | Method |

## Type declaration

<a id="api-1a2eb7b0af88d2bd"></a>
<!-- api: T:Inno.Rendering.RenderCommandEncoder d186c23d5d957e49644d1603ff62210561dcd01d6265d864645be531885c7b2a -->

```csharp
public abstract class Inno.Rendering.RenderCommandEncoder
```

Provides backend-neutral draw, dispatch and copy commands for one compiled pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L170).

## `#ctor`

<a id="api-50c4b741ee8fe5cb"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.#ctor 412dedeef1db2aa788c7ed0f560dc8a7ac751f33df6b69507d64f55df1248d02 -->

```csharp
protected Inno.Rendering.RenderCommandEncoder.RenderCommandEncoder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L170).

## `BindBuffer`

<a id="api-732c0a78039c3e51"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentBufferHandle) 0a3e6893fcf2023d3e536c4f653567c951121b61bc588a6eef3071d6dbce357c -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId binding, Inno.Rendering.PersistentBufferHandle buffer)
```

Binds a storage buffer to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L316).

## `BindBuffer`

<a id="api-8a2aa8fb67177cab"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderBufferHandle) 3ebb6acbfc9cd6b23990e418a0147f74308d361c09d5a48067cdf120154ea66f -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderBufferHandle buffer)
```

Binds a storage buffer to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L302).

## `BindBuffer`

<a id="api-8d1611438a1caa22"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderBufferSlice) 6001007c040b4ea89bc46b2ec85596463576f64d234a9efc1ae973e68f7a9626 -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindBuffer(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded storage buffer to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `buffer`:** Current-frame storage slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L330).

## `BindComputePipeline`

<a id="api-ea6b947b80525f08"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindComputePipeline(Inno.Rendering.ComputePipelineHandle) d852c13f9d7b08ab8b77a53176627532f30411d83b485ba68ac010363f60e753 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindComputePipeline(Inno.Rendering.ComputePipelineHandle pipeline)
```

Selects the compute pipeline for subsequent dispatch commands.

**Parameter `pipeline`:** Compute pipeline owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L189).

## `BindGraphicsPipeline`

<a id="api-f94c42b588843123"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle) a67b30611ab50fd75ce80f710ebb8544b8fc7c21905859f9589080e144eb71ce -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle pipeline)
```

Selects the graphics pipeline for subsequent draw commands.

**Parameter `pipeline`:** Graphics pipeline owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L181).

## `BindIndexBuffer`

<a id="api-7ed37ed01f78c639"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.PersistentBufferHandle,System.Int32) 82f02a0d1d904f04f3175d7585743c17b15bf6293667f5f1a791ab7790d05bd9 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.PersistentBufferHandle buffer, int firstIndex = 0)
```

Selects an index buffer and its first index for subsequent indexed draws.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstIndex`:** Zero-based index offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L489).

## `BindIndexBuffer`

<a id="api-59dbdd4beaca0329"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.RenderBufferHandle,System.Int32) 7a0f22158295b5becdbe825660c17d99c486a1f6a190fa9e6cea4d511c463303 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.RenderBufferHandle buffer, int firstIndex = 0)
```

Selects an index buffer and its first index for subsequent indexed draws.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstIndex`:** Zero-based index offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L475).

## `BindIndexBuffer`

<a id="api-ea5968a213226760"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.RenderBufferSlice) f1b108e615d724aeb5b0aa5a722c0e4986e352079cc7a2e4e68f4645e0e20567 -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindIndexBuffer(Inno.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded index slice.

**Parameter `buffer`:** Current-frame index slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L500).

## `BindInstanceBuffer`

<a id="api-fe0596e942e2b9ea"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32) 9bc2a8356917e72aafaaf818b9af53567e080bbee2525abf3fa177504354d4da -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.PersistentBufferHandle buffer, int firstInstance, int instanceCount)
```

Selects the buffer range supplying per-instance attributes.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstInstance`:** Zero-based offset in the instance data.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L536).

## `BindInstanceBuffer`

<a id="api-eacb60013c5907fb"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32) d8b487c3acf98935c35d5cc6cfb1bd540c788a1d32744375a585d6bff42a7588 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.RenderBufferHandle buffer, int firstInstance, int instanceCount)
```

Selects the buffer range supplying per-instance attributes.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstInstance`:** Zero-based offset in the instance data.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L518).

## `BindInstanceBuffer`

<a id="api-0052b35debf8e22f"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.RenderBufferSlice) 9c70b1075fe01d575c33834bab42616fcd88187d9616b7c34cdb904f11d13745 -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindInstanceBuffer(Inno.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded vertex slice as per-instance input.

**Parameter `buffer`:** Current-frame instance records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L548).

## `BindStorageTexture`

<a id="api-c8043104e611c72e"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle,System.Int32) 3bcd3ef22271e23233e0f658ab900b7a02d81cf49c64fbe4cc430b54afe9e799 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.PersistentTextureHandle texture, int mipLevel = 0)
```

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L287).

## `BindStorageTexture`

<a id="api-b16f116ae459804c"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,System.Int32) 43f4c22488f70ac8c94009912870c5a517600271bf177c190a83be70457fc595 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindStorageTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderTextureHandle texture, int mipLevel = 0)
```

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L269).

## `BindTexture`

<a id="api-cd2b1db609e6ba8a"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderSamplerState) 9a1b3a3d2740cf33fb6049d50ecafdf9a3dbd0f53f97f05046b36e2b1b42c0b6 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderSamplerState sampler)
```

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `sampler`:** Sampling state copied by value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L251).

## `BindTexture`

<a id="api-ba7282edd0908eda"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle) 43f272d2c7552c6be1fb3c5cb3feb4487cb9693379837ad5cc73c933ba210558 -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.PersistentTextureHandle texture)
```

Binds a persistent texture to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `texture`:** Persistent texture owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L233).

## `BindTexture`

<a id="api-15767745948f0388"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderSamplerState) 5149741a6693943eae1e85614466f2f7a55a6d4185c701b38f2c70de3e46d72e -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderTextureHandle texture, Inno.Rendering.RenderSamplerState sampler)
```

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L218).

## `BindTexture`

<a id="api-cabad1f315d7a988"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderTextureHandle) 95af21abf9406ece4fc296d27ed1918e9b21d4641504fb039446e87022edbe1a -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindTexture(Inno.Rendering.RenderBindingId binding, Inno.Rendering.RenderTextureHandle texture)
```

Binds a graph texture to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `texture`:** Graph texture to bind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L200).

## `BindVertexBuffer`

<a id="api-1292a25c6f273d30"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.PersistentBufferHandle,System.Int32) f8854d09f6b2d64a618ca62ea37c34a47f92815721b16ad957025a6b01457a9b -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.PersistentBufferHandle buffer, int firstVertex = 0)
```

Selects a vertex buffer and its first vertex for subsequent draws.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstVertex`:** Zero-based vertex offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L449).

## `BindVertexBuffer`

<a id="api-9e05b7c7dbb72d1e"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.RenderBufferHandle,System.Int32) fc9d1f80e9f633b5f3c15545c7cc317e4c92178206f12008e2aa25971cd4e7de -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.RenderBufferHandle buffer, int firstVertex = 0)
```

Selects a vertex buffer and its first vertex for subsequent draws.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstVertex`:** Zero-based vertex offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L435).

## `BindVertexBuffer`

<a id="api-2befef7147ee945f"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.RenderBufferSlice) 17591fcd32e7867ca463723b6c26384ef1e213f6ef4ed116e28467b2386525f2 -->

```csharp
public void Inno.Rendering.RenderCommandEncoder.BindVertexBuffer(Inno.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded vertex slice.

**Parameter `buffer`:** Current-frame vertex slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L460).

## `BlitTexture`

<a id="api-0c8f86b32175f83b"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.BlitTexture(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureRegion,Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureRegion) bddb25abf28ef659bd3914046595e20481d82c551a50ecf10c2a1c99e0c8e6ca -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.BlitTexture(Inno.Rendering.RenderTextureHandle source, Inno.Rendering.RenderTextureRegion sourceRegion, Inno.Rendering.RenderTextureHandle destination, Inno.Rendering.RenderTextureRegion destinationRegion)
```

Copies a source texture region into a destination texture region.

**Parameter `source`:** Frame-scoped source texture.

**Parameter `sourceRegion`:** Source texture subresource and texel box.

**Parameter `destination`:** Frame-scoped destination texture.

**Parameter `destinationRegion`:** Destination texture subresource and texel box.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L715).

## `CopyBuffer`

<a id="api-3adcea8c4ecf45a3"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.CopyBuffer(Inno.Rendering.RenderBufferHandle,Inno.Rendering.RenderBufferHandle) 75a6563ce21c0fee2ea42cbf1458413e7ea93b4f488e6f8a9201e9c2ac8794de -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.CopyBuffer(Inno.Rendering.RenderBufferHandle source, Inno.Rendering.RenderBufferHandle destination)
```

Copies buffer content without transferring resource ownership.

**Parameter `source`:** Frame-scoped source buffer.

**Parameter `destination`:** Frame-scoped destination buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L731).

## `CopyTexture`

<a id="api-a971ba7322aac1fc"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.CopyTexture(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureHandle) 559a248214074ef587a6c77d48c68b68a11c6c2f47418c24abcfcfd017d5a66a -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.CopyTexture(Inno.Rendering.RenderTextureHandle source, Inno.Rendering.RenderTextureHandle destination)
```

Copies texture content without transferring resource ownership.

**Parameter `source`:** Frame-scoped source texture.

**Parameter `destination`:** Frame-scoped destination texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L695).

## `Dispatch`

<a id="api-fc7aad8cb08a5c79"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.Dispatch(System.Int32,System.Int32,System.Int32) 0c7f71c479e084e8fe9e996ffb00251a475a23daa0b14efc7e08815e23b2f6b5 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.Dispatch(int groupCountX, int groupCountY = 1, int groupCountZ = 1)
```

Submits compute work with the specified workgroup counts.

**Parameter `groupCountX`:** Number of workgroups along the X axis.

**Parameter `groupCountY`:** Number of workgroups along the Y axis.

**Parameter `groupCountZ`:** Number of workgroups along the Z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L644).

## `DispatchIndirect`

<a id="api-92ec9fff05d7b106"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32) 36c7e9fedcf85f39984cea07af262fc46c15ced59fbf997e18c579d86827b7cb -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.PersistentBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L680).

## `DispatchIndirect`

<a id="api-55fa5cc52bd5c0b2"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32) f3f320bc21922d42bf93737a3d61ae5ede5345996838756b1a646c5e4c18c1dc -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DispatchIndirect(Inno.Rendering.RenderBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L662).

## `Draw`

<a id="api-7e4dd27ea732bb81"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.Draw(System.Int32,System.Int32) eb91a9aa481ddda9c58876605ecf8015fadd897722600920cc6ea358fcf43931 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.Draw(int vertexCount, int instanceCount = 1)
```

Submits a draw using the currently bound pipeline and resources.

**Parameter `vertexCount`:** Number of vertices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L563).

## `DrawIndexed`

<a id="api-353f8d099b75932c"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DrawIndexed(System.Int32,System.Int32) aaf5ac67d8dd484fb56511aececac9cfd8e1b4cd166a98a50b946fafb6962c50 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DrawIndexed(int indexCount, int instanceCount = 1)
```

Submits an indexed draw using the currently bound index buffer.

**Parameter `indexCount`:** Number of indices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L591).

## `DrawIndirect`

<a id="api-b3268bc5f7c095dd"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32) 3b5a61f00adb59fee8ecafa129527edacf1302b3cc2a7b763f282cef898e2db1 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.PersistentBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L626).

## `DrawIndirect`

<a id="api-7f225eec7e58970d"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.RenderBufferHandle,System.Int32,System.Int32) d852c41031644fc1e303668bd2d4fcdf96d8233738ec72c1a72127f54b78bead -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DrawIndirect(Inno.Rendering.RenderBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L608).

## `DrawProcedural`

<a id="api-dbaa079d174be82c"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.DrawProcedural(System.Int32,System.Int32) cdf2aaf9ad8cc97e1db41d41402e3d71dd367a4bc2c866ac3780fd36fbc6bf6d -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.DrawProcedural(int vertexCount, int instanceCount = 1)
```

Submits a draw whose vertices are produced without a vertex buffer.

**Parameter `vertexCount`:** Number of vertices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L577).

## `SetRasterState`

<a id="api-cfaf29a92c60f895"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetRasterState(Inno.Rendering.RenderRasterState) f11b61ba3d33abe7a5a0a84ff54eb83a6f5a90969d4a587d4e1c42ee88004e72 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetRasterState(Inno.Rendering.RenderRasterState state)
```

Sets the raster configuration for subsequent draws.

**Parameter `state`:** Immutable raster configuration applied to subsequent draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L372).

## `SetScissor`

<a id="api-5dd6ad01029882c4"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetScissor(System.Int32,System.Int32,System.Int32,System.Int32) eb0a2e88010835d6a3f4de9f2bd9c7a325195437dd44d6c30cf71f8567666978 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetScissor(int x, int y, int width, int height)
```

Sets the scissor rectangle in render-target pixels.

**Parameter `x`:** Left coordinate in render-target pixels.

**Parameter `y`:** Top coordinate in render-target pixels.

**Parameter `width`:** Rectangle width in render-target pixels.

**Parameter `height`:** Rectangle height in render-target pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L419).

## `SetStencil`

<a id="api-4880530fbcdec308"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetStencil(Inno.Rendering.RenderStencilState) 0378718c9fda8b1b8aef0204aa1d9d892d153e243b60cdcdee7f3dae4e1e62dc -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetStencil(Inno.Rendering.RenderStencilState state)
```

Sets the stencil configuration for subsequent draws.

**Parameter `state`:** Immutable stencil configuration applied to subsequent draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L380).

## `SetTransform`

<a id="api-7dae61f9083aade3"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan{System.Single}) 31fcb4ef400c1e4c13bde36202fa483622474c8be4f17a123d630c225212791d -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan<float> columnMajorMatrix)
```

Sets the column-major object transform for subsequent draws.

**Parameter `columnMajorMatrix`:** Matrix values borrowed for this call. An encoder that defers execution must copy them before returning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L364).

## `SetUniform`

<a id="api-662c485b5e5902cc"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetUniform(Inno.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte}) d6327704a35a4e0eceb68299fafda2cae2ea12b6b521e24eb356d8a696ff2346 -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetUniform(Inno.Rendering.RenderBindingId binding, System.ReadOnlySpan<byte> value)
```

Sets the byte value of a shader uniform.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `value`:** Bytes borrowed for this call. An encoder that defers execution must copy them before returning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L353).

## `SetViewport`

<a id="api-35bfabb6eed2568b"></a>
<!-- api: M:Inno.Rendering.RenderCommandEncoder.SetViewport(System.Int32,System.Int32,System.Int32,System.Int32) 1007f23f2d4b91be93e1cc05cbb48018429d4f47c50740ef701f18c8763f9b2d -->

```csharp
public abstract void Inno.Rendering.RenderCommandEncoder.SetViewport(int x, int y, int width, int height)
```

Sets the viewport rectangle in render-target pixels.

**Parameter `x`:** Left coordinate in render-target pixels.

**Parameter `y`:** Top coordinate in render-target pixels.

**Parameter `width`:** Rectangle width in render-target pixels.

**Parameter `height`:** Rectangle height in render-target pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L397).
