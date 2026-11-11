---
title: "BgfxDevice"
description: "Reference for BgfxDevice in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.16095b01e921a908
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxDevice`

This reference describes `BgfxDevice` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Rendering.RenderDevice`.

**Direct interfaces:** `Inno.Rendering.IRenderDevice`, `Inno.Rendering.IRenderGraphBackend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-45b7390e2b0eae9b) | Method |
| [`BeginFrame`](#api-3523dcdb82bf259f) | Method |
| [`BeginGraph`](#api-c89b099e64fb688e) | Method |
| [`BeginPass`](#api-2a85e9f70c46cd2f) | Method |
| [`BeginTextureReadback`](#api-68fbfd8ae67b2fe8) | Method |
| [`CancelTextureReadback`](#api-b1316bdf5d906631) | Method |
| [`CreateBuffer`](#api-37bba9ec74d5f38e) | Method |
| [`CreateComputePipeline`](#api-3ba8954825e99a77) | Method |
| [`CreateGraphicsPipeline`](#api-4d6287219773d59f) | Method |
| [`CreateTexture`](#api-1a8204a37cbd5939) | Method |
| [`CreateTexture`](#api-9f6024a7112992e0) | Method |
| [`CreateWindowSurface`](#api-49dd7643995a2ceb) | Method |
| [`DestroyBuffer`](#api-f8e43c7b7493ab5d) | Method |
| [`DestroyComputePipeline`](#api-d9f24b4ce50fecc7) | Method |
| [`DestroyGraphicsPipeline`](#api-49c695fb8d472370) | Method |
| [`DestroyTexture`](#api-0d7c88ae18aef322) | Method |
| [`Dispose`](#api-8d53e98eea396824) | Method |
| [`DrainWindowSurfaceRetirements`](#api-7815c5ef8a4ae4d2) | Method |
| [`EndFrame`](#api-1aa5ddcbeb5718a2) | Method |
| [`EndGraph`](#api-9024adefac3078cf) | Method |
| [`EndPass`](#api-382d2c00628a8809) | Method |
| [`Execute`](#api-15d97833f8887d9e) | Method |
| [`ResizeWindowSurface`](#api-f7ede0cee68e9097) | Method |
| [`RetireWindowSurface`](#api-35f66b8e7b6ac111) | Method |
| [`SetPrimaryPresentationSize`](#api-65561b6c2ea0a11f) | Method |
| [`SetVerticalSync`](#api-76372bc9cfdd611f) | Method |
| [`TryGetTextureReadback`](#api-bf66db57aeb85707) | Method |
| [`UpdateBuffer`](#api-f8ef90e1eb88655d) | Method |
| [`UpdateTexture`](#api-fd133bdc402f5cb6) | Method |
| [`UpdateTextureRegion`](#api-ad130c59a3aae730) | Method |
| [`WindowSurfaceIsSrgb`](#api-a0583cb7165530d5) | Method |
| [`allocationCounters`](#api-55516e79850814d8) | Property |
| [`backbufferIsSrgb`](#api-dc8e0ae4b30a6a67) | Property |
| [`backendFrame`](#api-afcaba906ac0e1c0) | Property |
| [`capabilities`](#api-fe7cbdbd07426c1e) | Property |
| [`frameCounters`](#api-52121730468c7d6d) | Property |
| [`generation`](#api-6b0eb03265cc6c82) | Property |
| [`primaryPresentationEncodesSrgb`](#api-68a2dc70d4c1faae) | Property |
| [`primaryPresentationSize`](#api-1b9293dba41f905e) | Property |
| [`supportsAdditionalSurfaces`](#api-22e946b42ed2f5db) | Property |

## Type declaration

<a id="api-16095b01e921a908"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxDevice cb3c46ba198ac48d401fb5aef1ed647da6ad6597657df49b1b8d2fd9210c682b -->

```csharp
public sealed class Inno.Adapter.Rendering.Bgfx.BgfxDevice : Inno.Rendering.RenderDevice, Inno.Rendering.IRenderDevice, Inno.Rendering.IRenderGraphBackend
```

Implements the sole BGFX device generation, API-thread frame boundary and graph backend.

Implements the backend-neutral render device contract using generation-scoped BGFX resources.

Implements the backend-neutral render device contract using generation-scoped BGFX resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L16).

## `#ctor`

<a id="api-45b7390e2b0eae9b"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.#ctor(Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions) 12909cec468bc0129f1be577d7081756aefff5fef6f071672c3843a52b8cd29b -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxDevice.BgfxDevice(Inno.Adapter.Rendering.Bgfx.BgfxDeviceOptions options)
```

Initializes BGFX and captures immutable device capabilities.

**Parameter `options`:** Backend-neutral initialization options.

**Throws `System.InvalidOperationException`:** Thrown when another BGFX device is active or initialization fails.

**Throws `System.NotSupportedException`:** The selected window does not expose the native surface SPI required by BGFX.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L73).

## `BeginFrame`

<a id="api-3523dcdb82bf259f"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginFrame 34e7c3938cacd22469e737bdabb0d2b9dcd8cbea54aa430c4b2ee819cc86d2d1 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginFrame()
```

Begins a frame-scoped operation and makes queued work visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Frames.cs#L19).

## `BeginGraph`

<a id="api-c89b099e64fb688e"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginGraph(Inno.Rendering.CompiledRenderGraph) 0c0d4dfc45787dc7cf8f3e2526f354fb902e55f006e525826ec770fdb18009d5 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginGraph(Inno.Rendering.CompiledRenderGraph graph)
```

Begins recording commands for one validated compiled render graph.

**Parameter `graph`:** The graph consumed by begin graph; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Graphs.cs#L22).

## `BeginPass`

<a id="api-2a85e9f70c46cd2f"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginPass(Inno.Rendering.CompiledRenderPass) cbcac4ad4632b070bc96b9ec8e2b36ab07ebbc38333fb4a842dad632de3b9c3a -->

```csharp
public Inno.Rendering.RenderCommandEncoder Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginPass(Inno.Rendering.CompiledRenderPass pass)
```

Begins recording commands for one compiled render pass.

**Parameter `pass`:** The pass consumed by begin pass; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated render command encoder that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Graphs.cs#L120).

## `BeginTextureReadback`

<a id="api-68fbfd8ae67b2fe8"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32) 9614d9bb806ce4188bf26d447b24e00d50d1c76f0abc63e8bcd83066b4a2df49 -->

```csharp
public Inno.Rendering.RenderTextureReadbackHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle texture, int mipLevel = 0)
```

Schedules asynchronous texture readback into caller-provided destination storage.

**Parameter `texture`:** The texture consumed by begin texture readback; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `mipLevel`:** The mip level consumed by begin texture readback; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated render texture readback handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Readback.cs#L28).

## `CancelTextureReadback`

<a id="api-b1316bdf5d906631"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CancelTextureReadback(Inno.Rendering.RenderTextureReadbackHandle) 111ef28499c629874ed48fc372bef239df243f82a99427bc34a0226a5688d7fb -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.CancelTextureReadback(Inno.Rendering.RenderTextureReadbackHandle readback)
```

Cancels a pending texture readback and releases its retained state.

**Parameter `readback`:** The readback consumed by cancel texture readback; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Readback.cs#L124).

## `CreateBuffer`

<a id="api-37bba9ec74d5f38e"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlySpan{System.Byte},System.String) 296b3f86360796b16e1e40090332109f0e012accfe4bf1c2894108559aff32ec -->

```csharp
public Inno.Rendering.PersistentBufferHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor descriptor, System.ReadOnlySpan<byte> initialData, string name)
```

Creates a buffer using this implementation's validated inputs.

**Parameter `descriptor`:** The descriptor consumed by create buffer; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `initialData`:** The initial data consumed by create buffer; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Returns:** The validated persistent buffer handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L39).

## `CreateComputePipeline`

<a id="api-3ba8954825e99a77"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateComputePipeline(Inno.Rendering.ComputePipelineDescriptor,System.String) 888385fbb612f184ffd7cb96a6d79a96b1f4f119267f4e46040080f90c58e22c -->

```csharp
public Inno.Rendering.ComputePipelineHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateComputePipeline(Inno.Rendering.ComputePipelineDescriptor descriptor, string name)
```

Creates a compute pipeline using this implementation's validated inputs.

**Parameter `descriptor`:** The descriptor consumed by create compute pipeline; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Returns:** The validated compute pipeline handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L204).

## `CreateGraphicsPipeline`

<a id="api-4d6287219773d59f"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateGraphicsPipeline(Inno.Rendering.GraphicsPipelineDescriptor,System.String) 25775612df829b6222efb0dd2623cc9f3391ccd9edecf23c8782f15af934495d -->

```csharp
public Inno.Rendering.GraphicsPipelineHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateGraphicsPipeline(Inno.Rendering.GraphicsPipelineDescriptor descriptor, string name)
```

Creates a graphics pipeline using this implementation's validated inputs.

**Parameter `descriptor`:** The descriptor consumed by create graphics pipeline; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Returns:** The validated graphics pipeline handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L157).

## `CreateTexture`

<a id="api-1a8204a37cbd5939"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateTexture(Inno.Rendering.RenderTextureContainer,System.ReadOnlySpan{System.Byte},System.Boolean,System.String) d3ca5f1fc99764e3877a3c9744f5d7787e2f754e42261742c4b79089df0d111d -->

```csharp
public Inno.Rendering.PersistentTextureHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateTexture(Inno.Rendering.RenderTextureContainer container, System.ReadOnlySpan<byte> data, bool sRgb, string name)
```

Creates a texture using this implementation's validated inputs.

**Parameter `container`:** The container consumed by create texture; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `data`:** The complete immutable byte payload consumed by this operation.

**Parameter `sRgb`:** Whether s rgb behavior is enabled while create texture executes.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Returns:** The validated persistent texture handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Textures.cs#L74).

## `CreateTexture`

<a id="api-9f6024a7112992e0"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateTexture(Inno.Rendering.RenderTextureDescriptor,System.String) 5f885cdc846b013136447fbddfe09cd36636607d5f7f3bd6c840a1a7aeeda3b1 -->

```csharp
public Inno.Rendering.PersistentTextureHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateTexture(Inno.Rendering.RenderTextureDescriptor descriptor, string name)
```

Creates a texture using this implementation's validated inputs.

**Parameter `descriptor`:** The descriptor consumed by create texture; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Returns:** The validated persistent texture handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Textures.cs#L28).

## `CreateWindowSurface`

<a id="api-49dd7643995a2ceb"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateWindowSurface(Inno.Adapter.Platform.PlatformNativeHandles,System.Int32,System.Int32,System.String) a557533c9fca16cededabf1d9d577462ed3dc5de158afaf2c59a88ceabd4e691 -->

```csharp
public Inno.Rendering.RenderSurfaceHandle Inno.Adapter.Rendering.Bgfx.BgfxDevice.CreateWindowSurface(Inno.Adapter.Platform.PlatformNativeHandles nativeHandles, int width, int height, string name)
```

Creates a detached-window presentation surface at a frame safety point.

**Parameter `nativeHandles`:** Platform window handles supplied by the active window backend.

**Parameter `width`:** Drawable width in pixels.

**Parameter `height`:** Drawable height in pixels.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque surface handle consumable by `Inno.Rendering.RasterPassBuilder.UseSurface(Inno.Rendering.RenderSurfaceHandle)`.

**Throws `System.NotSupportedException`:** The selected integration or renderer cannot provide the requested surface.

**Throws `System.InvalidOperationException`:** Thrown when BGFX cannot create the window framebuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Surfaces.cs#L43).

## `DestroyBuffer`

<a id="api-f8e43c7b7493ab5d"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyBuffer(Inno.Rendering.PersistentBufferHandle) d7327da169e08e9d07aed1df038919c8ab7b18b4726a73af4f186317d98f6e7e -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyBuffer(Inno.Rendering.PersistentBufferHandle buffer)
```

Destroys the buffer after all in-flight references have retired.

**Parameter `buffer`:** The buffer consumed by destroy buffer; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L67).

## `DestroyComputePipeline`

<a id="api-d9f24b4ce50fecc7"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyComputePipeline(Inno.Rendering.ComputePipelineHandle) 10fde0b72cf7e769e9592a34aac1475118dc912d8ceb735bfdcc61601839caf9 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyComputePipeline(Inno.Rendering.ComputePipelineHandle pipeline)
```

Destroys the compute pipeline after all in-flight references have retired.

**Parameter `pipeline`:** The pipeline consumed by destroy compute pipeline; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L228).

## `DestroyGraphicsPipeline`

<a id="api-49c695fb8d472370"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle) cf9812e2be0474da97a295d38763960d209a202c70b54f5d3f9c6fb626b2839c -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyGraphicsPipeline(Inno.Rendering.GraphicsPipelineHandle pipeline)
```

Destroys the graphics pipeline after all in-flight references have retired.

**Parameter `pipeline`:** The pipeline consumed by destroy graphics pipeline; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L176).

## `DestroyTexture`

<a id="api-0d7c88ae18aef322"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyTexture(Inno.Rendering.PersistentTextureHandle) e575118ebd1f278a6bbacb5e0e3b0eef6184a5f9848f43b9f81ce8da1d2b104a -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.DestroyTexture(Inno.Rendering.PersistentTextureHandle texture)
```

Destroys the texture after all in-flight references have retired.

**Parameter `texture`:** The texture consumed by destroy texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Textures.cs#L323).

## `Dispose`

<a id="api-8d53e98eea396824"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.Dispose fa22e54cca64dab213aebf20a0d0ebb8bcf3bbc4194442189109411b8d147589 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.Dispose()
```

Shuts down BGFX after releasing all active and queued backend resources.

**Throws `System.InvalidOperationException`:** The caller is not on the owner thread, rendering is active, or retirement cannot complete.
A failed retirement retains the device and its dependencies for diagnosis and a safe retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Retirement.cs#L23).

## `DrainWindowSurfaceRetirements`

<a id="api-7815c5ef8a4ae4d2"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.DrainWindowSurfaceRetirements 5f87e93163630dbc84bdd87dddd95260d31176d6a372e7e4a605662c458f8a9b -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.DrainWindowSurfaceRetirements()
```

Advances complete discard frames until all requested window retirements have been acknowledged.

**Constraints:** Call only on the API thread with no open frame, graph, encoder or native UI callback.
A failed drain retains the device and the borrowed native windows.
Presentation may advance while the primary window remains borrowed by the device.

**Throws `System.InvalidOperationException`:** The caller is not at a closed-frame API-thread safety point.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** The bounded retirement deadline expired; dependent owners must remain alive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Surfaces.cs#L182).

## `EndFrame`

<a id="api-1aa5ddcbeb5718a2"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndFrame 45dae6c1e629a69570833680a0f060a5687ab87484ce5392255643478300351a -->

```csharp
public uint Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndFrame()
```

Commits the current frame-scoped operation and returns its completion identity.

**Returns:** The validated uint that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Frames.cs#L86).

## `EndGraph`

<a id="api-9024adefac3078cf"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndGraph(Inno.Rendering.CompiledRenderGraph) ba0ce533434fd93c5175698b5738aff1eac3b8822677ed6eb13eeef96223df39 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndGraph(Inno.Rendering.CompiledRenderGraph graph)
```

Finishes graph recording and submits its completed command stream.

**Parameter `graph`:** The graph consumed by end graph; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Graphs.cs#L175).

## `EndPass`

<a id="api-382d2c00628a8809"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndPass(Inno.Rendering.CompiledRenderPass) 430889614d5a23c7e1f4609bb57c77f9c9e581e23f5773a2baaef679813a0aa4 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.EndPass(Inno.Rendering.CompiledRenderPass pass)
```

Ends the active render pass and seals its recorded commands.

**Parameter `pass`:** The pass consumed by end pass; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Graphs.cs#L157).

## `Execute`

<a id="api-15d97833f8887d9e"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.Execute(Inno.Rendering.CompiledRenderGraph,System.UInt64) 80db0b0b3c5ea51852ad865c70c874288b2b41a92d3c0c05636cb65f7dbbecca -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.Execute(Inno.Rendering.CompiledRenderGraph graph, ulong frameIndex)
```

Executes the prepared operation and publishes only a completed result.

**Parameter `graph`:** The graph consumed by execute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `frameIndex`:** The monotonic frame identity associated with this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Frames.cs#L71).

## `ResizeWindowSurface`

<a id="api-f7ede0cee68e9097"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.ResizeWindowSurface(Inno.Rendering.RenderSurfaceHandle,System.Int32,System.Int32) 466db8ce339d1cfa2ec5c455236dbd8655fbe427c2ad34957a0ae31038bf667c -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.ResizeWindowSurface(Inno.Rendering.RenderSurfaceHandle surface, int width, int height)
```

Recreates a detached-window presentation surface for a new drawable extent.

**Parameter `surface`:** Surface owned by this device generation.

**Parameter `width`:** New drawable width in pixels.

**Parameter `height`:** New drawable height in pixels.

**Throws `System.ArgumentException`:** Thrown when the surface is stale or no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Surfaces.cs#L111).

## `RetireWindowSurface`

<a id="api-35f66b8e7b6ac111"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.RetireWindowSurface(Inno.Rendering.RenderSurfaceHandle) 2b00d1203bd601c192844217573197e11ed4267bd663cf84e2b5f7d4a12f1a08 -->

```csharp
public System.Threading.Tasks.Task Inno.Adapter.Rendering.Bgfx.BgfxDevice.RetireWindowSurface(Inno.Rendering.RenderSurfaceHandle surface)
```

Stops accepting work for a surface and queues all of its framebuffer generations for retirement.

**Parameter `surface`:** The active surface owned by this device generation.

**Returns:** A task completed after the render thread has processed every associated destruction command.
This confirms release of the borrowed window, not a general GPU fence.

**Throws `System.ArgumentException`:** The surface is stale or no longer active.

**Throws `System.InvalidOperationException`:** The caller is not the API thread or a graph or encoder is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Surfaces.cs#L156).

## `SetPrimaryPresentationSize`

<a id="api-65561b6c2ea0a11f"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize}) c4e42e32aabbd52c49804491e832dac65d2d8426889a63aef38dd8140b0027fe -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.SetPrimaryPresentationSize(Inno.Rendering.RenderPresentationSize? size)
```

Publishes drawable availability at the next BeginFrame without inventing a windowless output.

**Parameter `size`:** The real primary pixel extent, or null while the existing surface is unavailable.

**Throws `System.ArgumentException`:** The assigned extent is invalid.

**Throws `System.NotSupportedException`:** A windowless device is asked to advertise a primary output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Frames.cs#L122).

## `SetVerticalSync`

<a id="api-76372bc9cfdd611f"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.SetVerticalSync(System.Boolean) ab74712c2347f6dbcff4506c7dad4760eb2c3db3eca21e3f5a636f79decefaa5 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.SetVerticalSync(bool enabled)
```

Queues an idempotent presentation policy update for the next BeginFrame reset.
Noop devices retain the policy without issuing a native presentation reset.

**Parameter `enabled`:** Whether presentation should wait for display refresh.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Frames.cs#L141).

## `TryGetTextureReadback`

<a id="api-bf66db57aeb85707"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackResult@) a258beaac5b94401dc8892feabb873bcac6268e351ddb910ec0a3308f24c0712 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle readback, out Inno.Rendering.RenderTextureReadbackResult? result)
```

Attempts to get texture readback without changing state when the operation cannot complete.

**Parameter `readback`:** The readback consumed by try get texture readback; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `result`:** The result produced or completed by the preceding operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Readback.cs#L87).

## `UpdateBuffer`

<a id="api-f8ef90e1eb88655d"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateBuffer(Inno.Rendering.PersistentBufferHandle,System.ReadOnlySpan{System.Byte},System.Int32) be03ff14400a9bc08d0c6ed550e2906d6aa907a76cba8777bdd37e67682c4ae5 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateBuffer(Inno.Rendering.PersistentBufferHandle buffer, System.ReadOnlySpan<byte> data, int startElement = 0)
```

Updates buffer state from the current authoritative inputs.

**Parameter `buffer`:** The buffer consumed by update buffer; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `data`:** The complete immutable byte payload consumed by this operation.

**Parameter `startElement`:** The start element consumed by update buffer; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Resources.cs#L91).

## `UpdateTexture`

<a id="api-fd133bdc402f5cb6"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle,System.ReadOnlySpan{System.Byte},System.Int32,System.Int32) 82bde877a36cf9354e772d259a55ae4e70f7f49cad6d847d09ff5891ff307b96 -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle texture, System.ReadOnlySpan<byte> data, int mipLevel = 0, int arrayLayer = 0)
```

Updates texture state from the current authoritative inputs.

**Parameter `texture`:** The texture consumed by update texture; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `data`:** The complete immutable byte payload consumed by this operation.

**Parameter `mipLevel`:** The mip level consumed by update texture; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `arrayLayer`:** The array layer consumed by update texture; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Textures.cs#L138).

## `UpdateTextureRegion`

<a id="api-ad130c59a3aae730"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlySpan{System.Byte}) b5dcc4b8b9e6eea4c9a7ccdc00a48489e19d1526683b73b284629a60db59de6d -->

```csharp
public void Inno.Adapter.Rendering.Bgfx.BgfxDevice.UpdateTextureRegion(Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderTextureRegion region, System.ReadOnlySpan<byte> data)
```

Updates texture region state from the current authoritative inputs.

**Parameter `texture`:** The texture consumed by update texture region; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `region`:** The region consumed by update texture region; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `data`:** The complete immutable byte payload consumed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Textures.cs#L232).

## `WindowSurfaceIsSrgb`

<a id="api-a0583cb7165530d5"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxDevice.WindowSurfaceIsSrgb(Inno.Rendering.RenderSurfaceHandle) 0f366a7048ef912a5653f41224d8f71363c0737609872f34ea57b0cf0f27ddc1 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDevice.WindowSurfaceIsSrgb(Inno.Rendering.RenderSurfaceHandle surface)
```

Reports whether the native window surface encodes linear render-target writes as sRGB.

**Parameter `surface`:** Active detached-window surface owned by this device generation.

**Returns:** True for an sRGB presentation target; false when a final output transfer is required.

**Throws `System.ArgumentException`:** The surface is stale or not active on this device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.Surfaces.cs#L88).

## `allocationCounters`

<a id="api-55516e79850814d8"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.allocationCounters 93e1ea6bfba5afd71361b234d2a55645b0325645c39ee8f03573023bf3dd3366 -->

```csharp
public Inno.Rendering.RenderDeviceAllocationCounters? Inno.Adapter.Rendering.Bgfx.BgfxDevice.allocationCounters { get; }
```

Gets API-thread allocation diagnostics for the current device generation's native transient pools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L183).

## `backbufferIsSrgb`

<a id="api-dc8e0ae4b30a6a67"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.backbufferIsSrgb df795a6242c60ccd1c57387caca400d31f2261c09f1c13be78c866841395a2e6 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDevice.backbufferIsSrgb { get; }
```

Gets whether the primary presentation surface encodes linear color as sRGB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L152).

## `backendFrame`

<a id="api-afcaba906ac0e1c0"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.backendFrame 2ed817fb63ea205b05cd23a47c7e8a0b0ad8444d07fabf05df49f565b7631081 -->

```csharp
public uint Inno.Adapter.Rendering.Bgfx.BgfxDevice.backendFrame { get; }
```

Gets the last frame number returned by BGFX submission.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L197).

## `capabilities`

<a id="api-fe7cbdbd07426c1e"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.capabilities 41ca587bf7060c8ec884eeedea0a0a5fb02deb663dbf6e93e2dcafbcbfb53989 -->

```csharp
public Inno.Rendering.GraphicsCapabilities Inno.Adapter.Rendering.Bgfx.BgfxDevice.capabilities { get; }
```

Gets the immutable feature and limit set reported by the active graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L147).

## `frameCounters`

<a id="api-52121730468c7d6d"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.frameCounters 7043004c01507f5ce9f64c77ae5b0cb15c6c8c721b3767a96c98df203422b025 -->

```csharp
public Inno.Rendering.RenderDeviceFrameCounters Inno.Adapter.Rendering.Bgfx.BgfxDevice.frameCounters { get; }
```

Gets the submitted and completed frame counters used for deferred retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L178).

## `generation`

<a id="api-6b0eb03265cc6c82"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.generation a0a38924b9deb464febf2cd87c19e1e045506bcdcbb52d2bea5f4b24df207c1d -->

```csharp
public uint Inno.Adapter.Rendering.Bgfx.BgfxDevice.generation { get; private set; }
```

Gets the generation identity that owns this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L168).

## `primaryPresentationEncodesSrgb`

<a id="api-68a2dc70d4c1faae"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.primaryPresentationEncodesSrgb 1b67cd97f47e22a61b7776e3b53de9b5ae529b3589683ddc09b072963842a031 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDevice.primaryPresentationEncodesSrgb { get; }
```

Gets whether the primary BGFX surface automatically encodes linear RGB to sRGB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L157).

## `primaryPresentationSize`

<a id="api-1b9293dba41f905e"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.primaryPresentationSize 6df59745516c176852051265e963aefed7c2d086f3120271f144d8fd663b5261 -->

```csharp
public Inno.Rendering.RenderPresentationSize? Inno.Adapter.Rendering.Bgfx.BgfxDevice.primaryPresentationSize { get; private set; }
```

Gets the current drawable pixel size of the main presentation surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L173).

## `supportsAdditionalSurfaces`

<a id="api-22e946b42ed2f5db"></a>
<!-- api: P:Inno.Adapter.Rendering.Bgfx.BgfxDevice.supportsAdditionalSurfaces fd5e1488fc2dbd92e0034a49af2c3c16ba83f333a6f5a7b9f3ce4c2ec4ff4175 -->

```csharp
public bool Inno.Adapter.Rendering.Bgfx.BgfxDevice.supportsAdditionalSurfaces { get; }
```

Gets whether both the selected host and active renderer permit additional window surfaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxDevice.cs#L162).
