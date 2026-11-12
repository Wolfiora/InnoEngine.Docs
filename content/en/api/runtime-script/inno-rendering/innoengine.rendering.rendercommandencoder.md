---
title: "RenderCommandEncoder"
description: "Reference for RenderCommandEncoder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.14525d81c81ff6be
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderCommandEncoder`

This reference describes `RenderCommandEncoder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-aa5c66308f522300) | Method |
| [`BindBuffer`](#api-c05d261f6b0bf407) | Method |
| [`BindBuffer`](#api-8d31b4efa56b69e4) | Method |
| [`BindBuffer`](#api-68ef4cc370e41b62) | Method |
| [`BindComputePipeline`](#api-fd32422330f61f79) | Method |
| [`BindGraphicsPipeline`](#api-351d4bd7b77ee8ee) | Method |
| [`BindIndexBuffer`](#api-1b41e96415077e17) | Method |
| [`BindIndexBuffer`](#api-4b896deef6cf7664) | Method |
| [`BindIndexBuffer`](#api-1be1acb77176fba4) | Method |
| [`BindInstanceBuffer`](#api-199e07a09d4ca4a0) | Method |
| [`BindInstanceBuffer`](#api-239eca66b6027a15) | Method |
| [`BindInstanceBuffer`](#api-89b710591cdc327c) | Method |
| [`BindStorageTexture`](#api-d9c9d450ced69c7f) | Method |
| [`BindStorageTexture`](#api-c675de16c728b33b) | Method |
| [`BindTexture`](#api-e7af68f70baaccb6) | Method |
| [`BindTexture`](#api-58200279994d680d) | Method |
| [`BindTexture`](#api-338c0ae47865f742) | Method |
| [`BindTexture`](#api-f26c7932a5779106) | Method |
| [`BindVertexBuffer`](#api-25626b778cb2462a) | Method |
| [`BindVertexBuffer`](#api-7840ba1bf4bbb983) | Method |
| [`BindVertexBuffer`](#api-d738062477096af8) | Method |
| [`BlitTexture`](#api-f821d58896a2cc29) | Method |
| [`CopyBuffer`](#api-245b1dd2a9d687cd) | Method |
| [`CopyTexture`](#api-cc1384c03ada386f) | Method |
| [`Dispatch`](#api-57d34b6b61978a4e) | Method |
| [`DispatchIndirect`](#api-0f0c8b7e3c7b56c1) | Method |
| [`DispatchIndirect`](#api-95ef9cd32ef7b8c2) | Method |
| [`Draw`](#api-41a1cdac3e4e82a8) | Method |
| [`DrawIndexed`](#api-3787a5a2f0dddd24) | Method |
| [`DrawIndirect`](#api-7d54b1f33253b319) | Method |
| [`DrawIndirect`](#api-e6606e8396ad38ad) | Method |
| [`DrawProcedural`](#api-93808f785864497e) | Method |
| [`SetRasterState`](#api-57c1e6ad73ab0507) | Method |
| [`SetScissor`](#api-cc9eaa617eb1461e) | Method |
| [`SetStencil`](#api-e24153dd319fb536) | Method |
| [`SetTransform`](#api-e23e8adc2ac1033c) | Method |
| [`SetUniform`](#api-b9571d2049617ec2) | Method |
| [`SetViewport`](#api-c19ff0cbbd74f2bb) | Method |

## Type declaration

<a id="api-14525d81c81ff6be"></a>
<!-- api: T:InnoEngine.Rendering.RenderCommandEncoder 3274ac8b656caf72b2ee8ae8d3a64c50ecfeb27ab9fb46d86f5cc4430ce3552c -->

```csharp
public abstract class InnoEngine.Rendering.RenderCommandEncoder
```

Provides backend-neutral draw, dispatch and copy commands for one compiled pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L170).

## `#ctor`

<a id="api-aa5c66308f522300"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.#ctor 990d163cc9b20da947fbc39b65f672ff4709b8e8da2062f4e5ebc8549d169123 -->

```csharp
protected InnoEngine.Rendering.RenderCommandEncoder.RenderCommandEncoder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L170).

## `BindBuffer`

<a id="api-c05d261f6b0bf407"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentBufferHandle) f6d1e56eeefa9cae7005e2c79e8ab958dbe5164415222a58976c1d6c9ee2901b -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.PersistentBufferHandle buffer)
```

Binds a storage buffer to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L316).

## `BindBuffer`

<a id="api-8d31b4efa56b69e4"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderBufferHandle) e15776f78c7b973e9d4603be213689dcaef6bf356ed616cff781bb49b46ec952 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderBufferHandle buffer)
```

Binds a storage buffer to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L302).

## `BindBuffer`

<a id="api-68ef4cc370e41b62"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderBufferSlice) b4664dd1cc08184de016945ebadab7d3c4da8df46c4decd7dd2aa8b9bf080f46 -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindBuffer(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded storage buffer to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `buffer`:** Current-frame storage slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L330).

## `BindComputePipeline`

<a id="api-fd32422330f61f79"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindComputePipeline(InnoEngine.Rendering.ComputePipelineHandle) 02b89df0f68da4742750264afb1edba64e7e90a9e2b90d569e54ba00a96e190d -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindComputePipeline(InnoEngine.Rendering.ComputePipelineHandle pipeline)
```

Selects the compute pipeline for subsequent dispatch commands.

**Parameter `pipeline`:** Compute pipeline owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L189).

## `BindGraphicsPipeline`

<a id="api-351d4bd7b77ee8ee"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindGraphicsPipeline(InnoEngine.Rendering.GraphicsPipelineHandle) 0ec39376c3cd009373a28bead909ecde6a8962a7ff61fdfcd4546fe70007d110 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindGraphicsPipeline(InnoEngine.Rendering.GraphicsPipelineHandle pipeline)
```

Selects the graphics pipeline for subsequent draw commands.

**Parameter `pipeline`:** Graphics pipeline owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L181).

## `BindIndexBuffer`

<a id="api-1b41e96415077e17"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.PersistentBufferHandle,System.Int32) 3a6831346e0efe806d7ffd65b3fe8975c9dce50a1ef9fde832538919365c93b4 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.PersistentBufferHandle buffer, int firstIndex = 0)
```

Selects an index buffer and its first index for subsequent indexed draws.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstIndex`:** Zero-based index offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L489).

## `BindIndexBuffer`

<a id="api-4b896deef6cf7664"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.RenderBufferHandle,System.Int32) ec249fb39ed09802b6248ff9f67e619059787adb094b2af7806406684c15c728 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.RenderBufferHandle buffer, int firstIndex = 0)
```

Selects an index buffer and its first index for subsequent indexed draws.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstIndex`:** Zero-based index offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L475).

## `BindIndexBuffer`

<a id="api-1be1acb77176fba4"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.RenderBufferSlice) 3b58bd1cf2b96772a0109b48d148009aae0966ff277ae1dd601456f87d111eaa -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindIndexBuffer(InnoEngine.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded index slice.

**Parameter `buffer`:** Current-frame index slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L500).

## `BindInstanceBuffer`

<a id="api-199e07a09d4ca4a0"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32) 6e02b118190a1896316847c556caa4759c6e07d5d857c1d59c742ef71e2e9fe3 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.PersistentBufferHandle buffer, int firstInstance, int instanceCount)
```

Selects the buffer range supplying per-instance attributes.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstInstance`:** Zero-based offset in the instance data.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L536).

## `BindInstanceBuffer`

<a id="api-239eca66b6027a15"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32) 7ff5975bb8873598ef4e37064e9b2bff337615012025b85db643cacdbca2ade4 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.RenderBufferHandle buffer, int firstInstance, int instanceCount)
```

Selects the buffer range supplying per-instance attributes.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstInstance`:** Zero-based offset in the instance data.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L518).

## `BindInstanceBuffer`

<a id="api-89b710591cdc327c"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.RenderBufferSlice) 4dddb823a00e6d601339d4cda4553facbd0b31548632034b83f97dfc5990d896 -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindInstanceBuffer(InnoEngine.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded vertex slice as per-instance input.

**Parameter `buffer`:** Current-frame instance records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L548).

## `BindStorageTexture`

<a id="api-d9c9d450ced69c7f"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle,System.Int32) 5c2d713921c97f00a8a04a094b761afe695d9f17d6a5f65c9f5b874015de0d7a -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.PersistentTextureHandle texture, int mipLevel = 0)
```

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L287).

## `BindStorageTexture`

<a id="api-c675de16c728b33b"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle,System.Int32) 94667db557b0a4a2f2bdc9166d0fc2d6cf3a67b6ce52aa44e56167b3c5f1684e -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindStorageTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderTextureHandle texture, int mipLevel = 0)
```

Binds a texture subresource for shader storage access.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `mipLevel`:** Zero-based mip level used for storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L269).

## `BindTexture`

<a id="api-e7af68f70baaccb6"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderSamplerState) 92dfe578ae0f6256d64a76f68f9a5e554df0e88e189f24fb2efe8459133ddeba -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.PersistentTextureHandle texture, InnoEngine.Rendering.RenderSamplerState sampler)
```

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Persistent texture owned by the current device generation.

**Parameter `sampler`:** Sampling state copied by value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L251).

## `BindTexture`

<a id="api-58200279994d680d"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.PersistentTextureHandle) f90bac417c04382f37a8928ba0b68eab2ec31432bf4dfeec308206fe9b36ffb4 -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.PersistentTextureHandle texture)
```

Binds a persistent texture to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `texture`:** Persistent texture owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L233).

## `BindTexture`

<a id="api-338c0ae47865f742"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderSamplerState) 78b9729d1af5bdbb62f2086224a345203f38bfdc5d9177d0af3ba7b823780ec4 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderTextureHandle texture, InnoEngine.Rendering.RenderSamplerState sampler)
```

Binds a sampled texture and its sampler to a shader binding.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `texture`:** Frame-scoped texture owned by the current graph generation.

**Parameter `sampler`:** Sampling state copied by value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L218).

## `BindTexture`

<a id="api-f26c7932a5779106"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderTextureHandle) 96c674720059041debbb11e66828294bae7c53a07acc57ef5553cb4e864159c3 -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindTexture(InnoEngine.Rendering.RenderBindingId binding, InnoEngine.Rendering.RenderTextureHandle texture)
```

Binds a graph texture to a shader interface slot.

**Parameter `binding`:** Stable shader binding identifier.

**Parameter `texture`:** Graph texture to bind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L200).

## `BindVertexBuffer`

<a id="api-25626b778cb2462a"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.PersistentBufferHandle,System.Int32) 70dd963e879e6911dc4be6b288777bd4a0ef2673e008e479c06541c31ead38c6 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.PersistentBufferHandle buffer, int firstVertex = 0)
```

Selects a vertex buffer and its first vertex for subsequent draws.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstVertex`:** Zero-based vertex offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L449).

## `BindVertexBuffer`

<a id="api-7840ba1bf4bbb983"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.RenderBufferHandle,System.Int32) 90d2344fa41bb17d9931622e86d482e84d010cbf01b794fac2c257db40538ddd -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.RenderBufferHandle buffer, int firstVertex = 0)
```

Selects a vertex buffer and its first vertex for subsequent draws.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstVertex`:** Zero-based vertex offset in the bound buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L435).

## `BindVertexBuffer`

<a id="api-d738062477096af8"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.RenderBufferSlice) f550bf28a955b17917d9b8fadb4c78b4914cfbfc55adcb608d77dcbe4c89a181 -->

```csharp
public void InnoEngine.Rendering.RenderCommandEncoder.BindVertexBuffer(InnoEngine.Rendering.RenderBufferSlice buffer)
```

Binds a frame-uploaded vertex slice.

**Parameter `buffer`:** Current-frame vertex slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L460).

## `BlitTexture`

<a id="api-f821d58896a2cc29"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.BlitTexture(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureRegion,InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureRegion) aa085d18014c13d55f7433e8ffbf4849adb5e02e3760b50a46e927620b8293c4 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.BlitTexture(InnoEngine.Rendering.RenderTextureHandle source, InnoEngine.Rendering.RenderTextureRegion sourceRegion, InnoEngine.Rendering.RenderTextureHandle destination, InnoEngine.Rendering.RenderTextureRegion destinationRegion)
```

Copies a source texture region into a destination texture region.

**Parameter `source`:** Frame-scoped source texture.

**Parameter `sourceRegion`:** Source texture subresource and texel box.

**Parameter `destination`:** Frame-scoped destination texture.

**Parameter `destinationRegion`:** Destination texture subresource and texel box.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L715).

## `CopyBuffer`

<a id="api-245b1dd2a9d687cd"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.CopyBuffer(InnoEngine.Rendering.RenderBufferHandle,InnoEngine.Rendering.RenderBufferHandle) 53e6b2d39563087e7f803139f312ea13214f858880ef7474c5fcd8d572f5c1f5 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.CopyBuffer(InnoEngine.Rendering.RenderBufferHandle source, InnoEngine.Rendering.RenderBufferHandle destination)
```

Copies buffer content without transferring resource ownership.

**Parameter `source`:** Frame-scoped source buffer.

**Parameter `destination`:** Frame-scoped destination buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L731).

## `CopyTexture`

<a id="api-cc1384c03ada386f"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.CopyTexture(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureHandle) bb4132ea3354040170f6ec52d530d33de6a0678bdaca3ca780df5497fd10bfc3 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.CopyTexture(InnoEngine.Rendering.RenderTextureHandle source, InnoEngine.Rendering.RenderTextureHandle destination)
```

Copies texture content without transferring resource ownership.

**Parameter `source`:** Frame-scoped source texture.

**Parameter `destination`:** Frame-scoped destination texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L695).

## `Dispatch`

<a id="api-57d34b6b61978a4e"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.Dispatch(System.Int32,System.Int32,System.Int32) ce17318202415fd9e5cb5d752eccd36b15aeb0792e70ee9c275d07f67f731965 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.Dispatch(int groupCountX, int groupCountY = 1, int groupCountZ = 1)
```

Submits compute work with the specified workgroup counts.

**Parameter `groupCountX`:** Number of workgroups along the X axis.

**Parameter `groupCountY`:** Number of workgroups along the Y axis.

**Parameter `groupCountZ`:** Number of workgroups along the Z axis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L644).

## `DispatchIndirect`

<a id="api-0f0c8b7e3c7b56c1"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32) e2bfa3c50c4cb2b17594536259b1401026bd6cfe67e3e626132de2dcc7341cc5 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.PersistentBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L680).

## `DispatchIndirect`

<a id="api-95ef9cd32ef7b8c2"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32) 7bbb760055b2bae2b5a8dfdebe0212bb8ca2b37cd9d2e14eeba202d9d4d8cad0 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DispatchIndirect(InnoEngine.Rendering.RenderBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits compute work described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L662).

## `Draw`

<a id="api-41a1cdac3e4e82a8"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.Draw(System.Int32,System.Int32) 7a3ab08fee0c5807881a9a69d0876c74bc0a08bf6e8db1c5584cc3dc3e1c2858 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.Draw(int vertexCount, int instanceCount = 1)
```

Submits a draw using the currently bound pipeline and resources.

**Parameter `vertexCount`:** Number of vertices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L563).

## `DrawIndexed`

<a id="api-3787a5a2f0dddd24"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndexed(System.Int32,System.Int32) ff2712ab3a69b50931ea65af9da7eec308b25f57195554eacd2ebe07bfcff6f1 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DrawIndexed(int indexCount, int instanceCount = 1)
```

Submits an indexed draw using the currently bound index buffer.

**Parameter `indexCount`:** Number of indices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L591).

## `DrawIndirect`

<a id="api-7d54b1f33253b319"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32) e1e4ae47f12a3e8e55ff1173a98cd8edc1d4089884392b59737f5c252e7461c7 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.PersistentBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L626).

## `DrawIndirect`

<a id="api-e6606e8396ad38ad"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.RenderBufferHandle,System.Int32,System.Int32) 6cdf7ce7264193efb17f6054450d3d89ed181541c4cfa33626b1097cbd523dd9 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.RenderBufferHandle buffer, int firstCommand = 0, int commandCount = 1)
```

Submits draws described by consecutive commands in an indirect buffer.

**Parameter `buffer`:** Frame-scoped buffer owned by the current graph generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L608).

## `DrawProcedural`

<a id="api-93808f785864497e"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.DrawProcedural(System.Int32,System.Int32) 0d641efe6b645e2ffebaea4f5ed2a444f7f25e97eeba8c529d9ebf5653689bc0 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.DrawProcedural(int vertexCount, int instanceCount = 1)
```

Submits a draw whose vertices are produced without a vertex buffer.

**Parameter `vertexCount`:** Number of vertices to submit.

**Parameter `instanceCount`:** Number of instances to submit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L577).

## `SetRasterState`

<a id="api-57c1e6ad73ab0507"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetRasterState(InnoEngine.Rendering.RenderRasterState) b96fc176afb5685a7d104c77c1aae0affabab1dd87f3ad30b2a9dbc32cb1f256 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetRasterState(InnoEngine.Rendering.RenderRasterState state)
```

Sets the raster configuration for subsequent draws.

**Parameter `state`:** Immutable raster configuration applied to subsequent draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L372).

## `SetScissor`

<a id="api-cc9eaa617eb1461e"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetScissor(System.Int32,System.Int32,System.Int32,System.Int32) ba792b1a82c1fbbd6685936b7a2ac568fb32f4579c950ec5e47d298d5352ad9f -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetScissor(int x, int y, int width, int height)
```

Sets the scissor rectangle in render-target pixels.

**Parameter `x`:** Left coordinate in render-target pixels.

**Parameter `y`:** Top coordinate in render-target pixels.

**Parameter `width`:** Rectangle width in render-target pixels.

**Parameter `height`:** Rectangle height in render-target pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L419).

## `SetStencil`

<a id="api-e24153dd319fb536"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetStencil(InnoEngine.Rendering.RenderStencilState) df7808f1343ab216157ad361ec7dd6b39a48f49514af96b7fab01a65dd1755f1 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetStencil(InnoEngine.Rendering.RenderStencilState state)
```

Sets the stencil configuration for subsequent draws.

**Parameter `state`:** Immutable stencil configuration applied to subsequent draws.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L380).

## `SetTransform`

<a id="api-e23e8adc2ac1033c"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan{System.Single}) 72270edd6846bee2df69782e99ce9bc54a2e64b237e9a63d62f4c0e7cbc4906f -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetTransform(System.ReadOnlySpan<float> columnMajorMatrix)
```

Sets the column-major object transform for subsequent draws.

**Parameter `columnMajorMatrix`:** Matrix values borrowed for this call. An encoder that defers execution must copy them before returning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L364).

## `SetUniform`

<a id="api-b9571d2049617ec2"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetUniform(InnoEngine.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte}) 9bb9f40c29968cc47fa096862f9f61ee3cabf4a02c449246cbbcfe9e6ceb42ff -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetUniform(InnoEngine.Rendering.RenderBindingId binding, System.ReadOnlySpan<byte> value)
```

Sets the byte value of a shader uniform.

**Parameter `binding`:** Stable shader binding declared by the selected pipeline.

**Parameter `value`:** Bytes borrowed for this call. An encoder that defers execution must copy them before returning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L353).

## `SetViewport`

<a id="api-c19ff0cbbd74f2bb"></a>
<!-- api: M:InnoEngine.Rendering.RenderCommandEncoder.SetViewport(System.Int32,System.Int32,System.Int32,System.Int32) 253b19c0cec445d4723bf7eca46516b54ac7723eb3b4e912844061554340e8a7 -->

```csharp
public abstract void InnoEngine.Rendering.RenderCommandEncoder.SetViewport(int x, int y, int width, int height)
```

Sets the viewport rectangle in render-target pixels.

**Parameter `x`:** Left coordinate in render-target pixels.

**Parameter `y`:** Top coordinate in render-target pixels.

**Parameter `width`:** Rectangle width in render-target pixels.

**Parameter `height`:** Rectangle height in render-target pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L397).
