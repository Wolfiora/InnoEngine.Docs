---
title: "IRenderDevice"
description: "Reference for IRenderDevice in Inno.Rendering."
uid: api.inno.rendering.f1d42b5f7bc80e5f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `IRenderDevice`

This reference describes `IRenderDevice` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginFrame`](#api-ed0ae98b39966189) | Method |
| [`BeginTextureReadback`](#api-946e1e748eb3b284) | Method |
| [`CancelTextureReadback`](#api-6f496709199b3a6e) | Method |
| [`CreateBuffer`](#api-28dce4fac5bde174) | Method |
| [`CreateComputePipeline`](#api-4425812a716db4b6) | Method |
| [`CreateGraphicsPipeline`](#api-d99aebb151d943f9) | Method |
| [`CreateTexture`](#api-0d9794fd74dbf38b) | Method |
| [`CreateTexture`](#api-c93a63a06155305d) | Method |
| [`DestroyBuffer`](#api-c129364a3af89017) | Method |
| [`DestroyComputePipeline`](#api-c50a1bdde1e085e2) | Method |
| [`DestroyGraphicsPipeline`](#api-8db4bf0f2caa6471) | Method |
| [`DestroyTexture`](#api-406762cbb1f30ca3) | Method |
| [`EndFrame`](#api-912d150c3a751d0d) | Method |
| [`Execute`](#api-4a456cbafe75c605) | Method |
| [`SetPrimaryPresentationSize`](#api-10d79fa94b973db1) | Method |
| [`SetVerticalSync`](#api-e9c20c2aa3e763c9) | Method |
| [`TryGetTextureReadback`](#api-bc58d4df3b98f64f) | Method |
| [`UpdateBuffer`](#api-ddc9da1d27188f9f) | Method |
| [`UpdateTexture`](#api-d534cde82c836bba) | Method |
| [`UpdateTextureRegion`](#api-961326d8086a93f2) | Method |
| [`allocationCounters`](#api-cf19a383f6824b2e) | Property |
| [`capabilities`](#api-2ba1d182763756d7) | Property |
| [`frameCounters`](#api-8661b23bd7e7c393) | Property |
| [`generation`](#api-6295e17d00504ce2) | Property |
| [`primaryPresentationEncodesSrgb`](#api-8f9e6fcf04a1919c) | Property |
| [`primaryPresentationSize`](#api-eecc48cd8b09a895) | Property |

## Type declaration

<a id="api-f1d42b5f7bc80e5f"></a>
<!-- api: T:Inno.Rendering.IRenderDevice 2e232d27973c46fdfb5abf8a7042a7a261159cc459b385b38ff2d6b93355e287 -->

```csharp
public interface Inno.Rendering.IRenderDevice : System.IDisposable
```

Owns one graphics backend generation and its frame submission boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L54).

## `BeginFrame`

<a id="api-ed0ae98b39966189"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.BeginFrame 7222b89edf4b8f47f66dcb244e1593c0cf6ad513a62ca8f0f4eee88d24e7b924 -->

```csharp
void Inno.Rendering.IRenderDevice.BeginFrame()
```

Begins the sole API-thread frame scope and processes queued resource work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L91).

## `BeginTextureReadback`

<a id="api-946e1e748eb3b284"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32) 5c3d55f6cf5a458b68d290bfe010975261fc40a310203d811e0c757e72f47faf -->

```csharp
Inno.Rendering.RenderTextureReadbackHandle Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle texture, int mipLevel = 0)
```

Begins an asynchronous readback of one complete persistent texture mip.

**Parameter `texture`:** Texture created with `Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** An opaque device-generation readback handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L234).

## `CancelTextureReadback`

<a id="api-6f496709199b3a6e"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CancelTextureReadback(Inno.Rendering.RenderTextureReadbackHandle) fcdf39085b14edf4e8af9976f14ab055b3f254c70bf5e1ab842de51c5969aba7 -->

```csharp
void Inno.Rendering.IRenderDevice.CancelTextureReadback(Inno.Rendering.RenderTextureReadbackHandle readback)
```

Stops retaining a readback result that is no longer needed by its caller.

**Parameter `readback`:** Pending readback handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L262).

## `CreateBuffer`

<a id="api-28dce4fac5bde174"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlySpan{System.Byte},System.String) a786873d4ff0e160624dea9d5b9d249597eb84b3f475c13cccc55d3654ddc15e -->

```csharp
Inno.Rendering.PersistentBufferHandle Inno.Rendering.IRenderDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor descriptor, System.ReadOnlySpan<byte> initialData, string name)
```

Creates a persistent vertex, index or storage buffer at a frame safety point.

**Parameter `descriptor`:** Buffer capacity and interpretation.

**Parameter `initialData`:** Optional complete initial contents.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation buffer handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L287).

## `CreateComputePipeline`

<a id="api-4425812a716db4b6"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CreateComputePipeline(Inno.Rendering.ComputePipelineDescriptor,System.String) 6288c129bc7a302330d432990cec68460998584b3a7560504e44c97d1e568e08 -->

```csharp
Inno.Rendering.ComputePipelineHandle Inno.Rendering.IRenderDevice.CreateComputePipeline(Inno.Rendering.ComputePipelineDescriptor descriptor, string name)
```

Creates and reflection-validates a compute pipeline at a frame safety point.

**Parameter `descriptor`:** Compiled stage and interface contract.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation compute pipeline handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L356).

## `CreateGraphicsPipeline`

<a id="api-d99aebb151d943f9"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CreateGraphicsPipeline(Inno.Rendering.GraphicsPipelineDescriptor,System.String) 58f1ab2804084a700c63d3b6281ac0a82cea1dba6a94ac0bba1fdf9e579f6aaf -->

```csharp
Inno.Rendering.GraphicsPipelineHandle Inno.Rendering.IRenderDevice.CreateGraphicsPipeline(Inno.Rendering.GraphicsPipelineDescriptor descriptor, string name)
```

Creates and reflection-validates a graphics pipeline at a frame safety point.

**Parameter `descriptor`:** Compiled stages, interface, layout and raster state.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation graphics pipeline handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L331).

## `CreateTexture`

<a id="api-0d9794fd74dbf38b"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureContainer,System.ReadOnlySpan{System.Byte},System.Boolean,System.String) 319e0a5560c753763d153084d0788ce588e31affcb781ca924bac1f3530493e6 -->

```csharp
Inno.Rendering.PersistentTextureHandle Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureContainer container, System.ReadOnlySpan<byte> data, bool sRgb, string name)
```

Creates a persistent sampled texture from a validated portable container.

**Parameter `container`:** Portable texture container kind.

**Parameter `data`:** Complete encoded container bytes.

**Parameter `sRgb`:** Whether sampling decodes the stored color from sRGB.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation handle.

**Throws `System.NotSupportedException`:** Thrown when the device cannot consume encoded containers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L174).

## `CreateTexture`

<a id="api-c93a63a06155305d"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureDescriptor,System.String) ed0d8f2658988a52ef4ee9d1ddbd11ee27a9084e7a98d702d88bc3ddb502a1d0 -->

```csharp
Inno.Rendering.PersistentTextureHandle Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureDescriptor descriptor, string name)
```

Creates a persistent texture at a frame safety point.

**Parameter `descriptor`:** Texture requirements.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L148).

## `DestroyBuffer`

<a id="api-c129364a3af89017"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.DestroyBuffer(Inno.Rendering.PersistentBufferHandle) 1a8cc65dd61c0237b9e285c3e523965ddc149a1d6964ff3be5922c8ac7e1c286 -->

```csharp
void Inno.Rendering.IRenderDevice.DestroyBuffer(Inno.Rendering.PersistentBufferHandle buffer)
```

Queues a persistent buffer for delayed GPU-safe destruction.

**Parameter `buffer`:** Buffer owned by this device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L317).

## `DestroyComputePipeline`

<a id="api-c50a1bdde1e085e2"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.DestroyComputePipeline(Inno.Rendering.ComputePipelineHandle) 5da91fb68c849f8f775a61b84d98f0c1a20fa9acffb67ea7230288af92e12865 -->

```csharp
void Inno.Rendering.IRenderDevice.DestroyComputePipeline(Inno.Rendering.ComputePipelineHandle pipeline)
```

Queues a compute pipeline for delayed GPU-safe destruction.

**Parameter `pipeline`:** Pipeline owned by this device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L367).

## `DestroyGraphicsPipeline`

<a id="api-8db4bf0f2caa6471"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.DestroyGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle) a1917a2a112965ce44d96ded3b839e41c4493e4e42a8719287bf2659e85fa911 -->

```csharp
void Inno.Rendering.IRenderDevice.DestroyGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle pipeline)
```

Queues a graphics pipeline for delayed GPU-safe destruction.

**Parameter `pipeline`:** Pipeline owned by this device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L342).

## `DestroyTexture`

<a id="api-406762cbb1f30ca3"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.DestroyTexture(Inno.Rendering.PersistentTextureHandle) 5e589ea258990d2b471b0aa9f09cb795996f51f01ac43eeeb4d0765693dad9d5 -->

```csharp
void Inno.Rendering.IRenderDevice.DestroyTexture(Inno.Rendering.PersistentTextureHandle texture)
```

Queues a persistent texture for delayed GPU-safe destruction.

**Parameter `texture`:** Texture owned by this device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L270).

## `EndFrame`

<a id="api-912d150c3a751d0d"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.EndFrame 5034dabd25780165fbff3d1be616860fa6e93c3ca485c8d3c60325732384f079 -->

```csharp
uint Inno.Rendering.IRenderDevice.EndFrame()
```

Ends all encoders and advances the graphics backend exactly once.

**Returns:** The backend frame number after submission.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L113).

## `Execute`

<a id="api-4a456cbafe75c605"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.Execute(Inno.Rendering.CompiledRenderGraph,System.UInt64) c1c238f7326bdada142502ed4dc0e542f9d28ca09887d87b6b596cf91269b78e -->

```csharp
void Inno.Rendering.IRenderDevice.Execute(Inno.Rendering.CompiledRenderGraph graph, ulong frameIndex)
```

Executes one compiled graph without presenting or advancing another frame.

**Parameter `graph`:** Compiled graph to execute.

**Parameter `frameIndex`:** Monotonic engine render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L102).

## `SetPrimaryPresentationSize`

<a id="api-10d79fa94b973db1"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize}) 0fe64bb06b1dbdda1c8866ae862ac43cc4a377b1c880bd86c446f5f152d7c107 -->

```csharp
void Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(Inno.Rendering.RenderPresentationSize? size)
```

Queues primary output availability and its real pixel extent for the next frame safety point.

**Parameter `size`:** A valid drawable pixel extent, or null when the primary surface cannot currently present.

**Throws `System.ArgumentException`:** The assigned extent has zero or negative dimensions, including a default struct value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L124).

## `SetVerticalSync`

<a id="api-e9c20c2aa3e763c9"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.SetVerticalSync(System.Boolean) be33e7f255dd0cc92762919dd27d17fafe8b785b471495e3fc52e7fe4e7f1fa7 -->

```csharp
void Inno.Rendering.IRenderDevice.SetVerticalSync(bool enabled)
```

Queues display synchronization policy on the API thread for the next frame boundary.
Every backend must implement both policies. Repeated values are idempotent and must not reset
an active pass. Windowless devices retain the requested policy without performing presentation.

**Parameter `enabled`:** Whether presentation should wait for display refresh when a presentation surface is present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L134).

## `TryGetTextureReadback`

<a id="api-bc58d4df3b98f64f"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackResult@) 44c1b46237220f7fa09558269d9c5ea9efc8625bdfa9f1a619954c362001521a -->

```csharp
bool Inno.Rendering.IRenderDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle readback, out Inno.Rendering.RenderTextureReadbackResult? result)
```

Tries to complete one previously requested texture readback.

**Parameter `readback`:** Readback handle returned by `Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)`.

**Parameter `result`:** Receives immutable CPU-visible bytes when complete.

**Returns:** `true` when the result completed and was consumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L251).

## `UpdateBuffer`

<a id="api-ddc9da1d27188f9f"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.UpdateBuffer(Inno.Rendering.PersistentBufferHandle,System.ReadOnlySpan{System.Byte},System.Int32) bfdc0c3dc80108d17144359a408f377792fcc8d014a94b18ca295a314affc66b -->

```csharp
void Inno.Rendering.IRenderDevice.UpdateBuffer(Inno.Rendering.PersistentBufferHandle buffer, System.ReadOnlySpan<byte> data, int startElement = 0)
```

Replaces a contiguous range in a dynamic persistent buffer at a frame safety point.

**Parameter `buffer`:** Dynamic buffer owned by this device generation.

**Parameter `data`:** Complete replacement elements.

**Parameter `startElement`:** Zero-based destination element.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L305).

## `UpdateTexture`

<a id="api-d534cde82c836bba"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle,System.ReadOnlySpan{System.Byte},System.Int32,System.Int32) 2dfad47da27a276ca83e047e8db70e2ba1d8ef84b57a51f2c6cd1a101c237796 -->

```csharp
void Inno.Rendering.IRenderDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle texture, System.ReadOnlySpan<byte> data, int mipLevel = 0, int arrayLayer = 0)
```

Replaces one complete mip and addressable layer, slice, or cubemap face.

**Parameter `texture`:** Texture owned by this device generation.

**Parameter `data`:** Tightly packed complete subresource bytes.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer * 6 + face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L197).

## `UpdateTextureRegion`

<a id="api-961326d8086a93f2"></a>
<!-- api: M:Inno.Rendering.IRenderDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlySpan{System.Byte}) bfd104c950d9da4655d581433697f1a7f455255a468b9209d3d75880d67edf9c -->

```csharp
void Inno.Rendering.IRenderDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderTextureRegion region, System.ReadOnlySpan<byte> data)
```

Replaces a tightly packed rectangular region in one persistent texture subresource.

**Parameter `texture`:** Texture owned by this device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L216).

## `allocationCounters`

<a id="api-cf19a383f6824b2e"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.allocationCounters e71412544ddcced883aa9a6d7b374dc5b48ca5eb26af116e268ea6fa03c20807 -->

```csharp
Inno.Rendering.RenderDeviceAllocationCounters? Inno.Rendering.IRenderDevice.allocationCounters { get; }
```

Gets cumulative native transient allocations for this device generation on the API thread.
A null snapshot means allocation accounting is unavailable, not that no resources were allocated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L86).

## `capabilities`

<a id="api-2ba1d182763756d7"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.capabilities 04f2707b3dd4fc790d2fd08d64d684269f4349fa93f38e8b3d24b1e5c7cbf162 -->

```csharp
Inno.Rendering.GraphicsCapabilities Inno.Rendering.IRenderDevice.capabilities { get; }
```

Gets immutable capabilities for the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L59).

## `frameCounters`

<a id="api-8661b23bd7e7c393"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.frameCounters 31f40b05304c24a59a0a34c804af8627f69c61e540a8185c9b3e1b3787e2c1e2 -->

```csharp
Inno.Rendering.RenderDeviceFrameCounters Inno.Rendering.IRenderDevice.frameCounters { get; }
```

Gets command counts recorded since the latest `Inno.Rendering.IRenderDevice.BeginFrame` call.
Backends that cannot provide command accounting return zero counters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L80).

## `generation`

<a id="api-6295e17d00504ce2"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.generation 9da068b5df24a13b67585c5b6a5d85ebec83ec7ddb8359fc7dc9c8b667695917 -->

```csharp
uint Inno.Rendering.IRenderDevice.generation { get; }
```

Gets the non-zero device generation used to reject stale persistent handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L64).

## `primaryPresentationEncodesSrgb`

<a id="api-8f9e6fcf04a1919c"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.primaryPresentationEncodesSrgb 3179923e4a19aac9b4e9bc557bc972df97a97e773324f01af76da080b65e2b54 -->

```csharp
bool Inno.Rendering.IRenderDevice.primaryPresentationEncodesSrgb { get; }
```

Gets whether the primary presentation target encodes linear RGB to sRGB during writes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L74).

## `primaryPresentationSize`

<a id="api-eecc48cd8b09a895"></a>
<!-- api: P:Inno.Rendering.IRenderDevice.primaryPresentationSize 751a12fa832d819789cc35bb2f8f34357184308c4d395a4d82f774b24eee18ef -->

```csharp
Inno.Rendering.RenderPresentationSize? Inno.Rendering.IRenderDevice.primaryPresentationSize { get; }
```

Gets the real primary presentation extent in physical pixels, or null while no output is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderDevice.cs#L69).
