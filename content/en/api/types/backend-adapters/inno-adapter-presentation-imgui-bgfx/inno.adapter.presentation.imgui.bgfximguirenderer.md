---
title: "Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer"
description: "Reference for Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer in Inno.Adapter.Presentation.ImGui.Bgfx."
uid: api.inno.adapter.presentation.imgui.bgfx.2a06981ed0c9b411
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-bgfx
---
# `Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer`

This reference describes `Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer` in `Inno.Adapter.Presentation.ImGui.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-presentation-imgui-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer`, `Inno.Rendering.IRenderFrameGraphContributor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30621fff76b34e0c) | Method |
| [`AddRenderPasses`](#api-96d37bf176384efc) | Method |
| [`CreateViewport`](#api-11adbc751273e280) | Method |
| [`Dispose`](#api-e0b09b5c652c83d2) | Method |
| [`DrainViewportRetirements`](#api-5ba5e5f644b251bf) | Method |
| [`PrepareFrame`](#api-b41e6e765a45f3a4) | Method |
| [`PresentViewport`](#api-fdc65709af4e37e4) | Method |
| [`RegisterTexture`](#api-2c051e64cdeef573) | Method |
| [`RenderMain`](#api-0ef12a1db90af66e) | Method |
| [`RenderViewport`](#api-b0c6b12372be99c4) | Method |
| [`ReplaceShaderArtifact`](#api-7528892b12ccbcb1) | Method |
| [`ResizeViewport`](#api-72a3b1e6a9aad52a) | Method |
| [`RetireViewport`](#api-a425acb0b1e82e8a) | Method |
| [`SynchronizeMainOutput`](#api-fc943f2a0d86aaf8) | Method |
| [`UnregisterTexture`](#api-32adb35b12efa6e6) | Method |
| [`lastShaderError`](#api-fbee6f0dc00bdbbf) | Property |
| [`supportsVertexOffsets`](#api-02541321f3d48a68) | Property |
| [`supportsViewports`](#api-e4101263d3d54599) | Property |
| [`vertexLayout`](#api-f8a21ab60178268b) | Property |

## Type declaration

<a id="api-2a06981ed0c9b411"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer 8615eacfa19cd3382b581dc5c6396208b5fcb4bf063634dcd57768acb8dc99e9 -->

```csharp
public sealed class Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer : Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer, Inno.Rendering.IRenderFrameGraphContributor
```

Copies Dear ImGui command lists into frame-owned data and composites them through BGFX RenderGraph passes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L18).

## `#ctor`

<a id="api-30621fff76b34e0c"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.#ctor(Inno.Rendering.IRenderDevice,Inno.Rendering.GraphicsPipelineDescriptor) eaea7cc6d67fe03ad662e77fdd264dc04d09aa39c22485c71549a82084354c41 -->

```csharp
public Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.BgfxImGuiRenderer(Inno.Rendering.IRenderDevice device, Inno.Rendering.GraphicsPipelineDescriptor pipelineDescriptor)
```

Creates a frame-contributing ImGui renderer around a backend-neutral shader artifact.

**Parameter `device`:** Active BGFX-backed neutral device.

**Parameter `pipelineDescriptor`:** Compiled ImGui shader stages and reflected interface.

**Throws `System.ArgumentException`:** Thrown when the shader artifact does not use the required ImGui layout.

**Throws `System.NotSupportedException`:** Thrown when `device` is not BGFX-backed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L79).

## `AddRenderPasses`

<a id="api-96d37bf176384efc"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.AddRenderPasses(Inno.Rendering.RenderGraphBuilder,System.UInt64) 0fa89887eff090a28e94ee272bb14007e581fdbd9e537a772679ca43efe27878 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.AddRenderPasses(Inno.Rendering.RenderGraphBuilder graph, ulong frameIndex)
```

Adds the renderer's frame passes and resource declarations to the render graph.

**Parameter `graph`:** The graph consumed by add render passes; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `frameIndex`:** The monotonic frame identity associated with this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L371).

## `CreateViewport`

<a id="api-11adbc751273e280"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.CreateViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) a93907afd59a9b2950adc9adf56c35d7e818a1b8477314beaf73f7363008b3cc -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.CreateViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Creates a viewport using this implementation's validated inputs.

**Parameter `target`:** The existing target that receives the validated result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L223).

## `Dispose`

<a id="api-e0b09b5c652c83d2"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.Dispose a9c9461aace6757edfb91d6f030945a2e0fded7e0cdf85c3506fd63102298c9c -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.Dispose()
```

Marks renderer-owned GPU resources for release at the next frame safety point or device teardown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L427).

## `DrainViewportRetirements`

<a id="api-5ba5e5f644b251bf"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.DrainViewportRetirements 0ef8a342d89a3c02065cc69980cedf0eaf06469976eb84f071a3e690d047b1d0 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.DrainViewportRetirements()
```

Drains requested retirements at a closed-frame owner-thread point outside native UI callbacks.

**Constraints:** Failure or timeout retains all unfinished viewport and renderer owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L319).

## `PrepareFrame`

<a id="api-b41e6e765a45f3a4"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.PrepareFrame(System.UInt64) 4b97d9597d2b6d91c73aae8436812d512e86325904dde5dd5448b33b5aac2494 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.PrepareFrame(ulong frameIndex)
```

Prepares frame-owned resources before render graph recording begins.

**Parameter `frameIndex`:** The monotonic frame identity associated with this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L327).

## `PresentViewport`

<a id="api-fdc65709af4e37e4"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.PresentViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 85aa04017d40bde4e981a18e5fe66cb81a46714ae88097e27e8db758aa5b73b8 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.PresentViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Presents the completed frame for the supplied auxiliary viewport.

**Parameter `target`:** The existing target that receives the validated result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L287).

## `RegisterTexture`

<a id="api-2c051e64cdeef573"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RegisterTexture(Inno.Rendering.PersistentTextureHandle) e4565f3d7e080457d1a04f84329722b07a8d066efc5ae82c386de2ddc6c002f0 -->

```csharp
public Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RegisterTexture(Inno.Rendering.PersistentTextureHandle texture)
```

Registers a persistent render texture as an opaque ImGui texture token.

**Parameter `texture`:** Texture owned by the active device generation.

**Returns:** An opaque token accepted by `Inno.Adapter.Presentation.ImGui.PlatformImGuiContext.DrawImage(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle,System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L136).

## `RenderMain`

<a id="api-0ef12a1db90af66e"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RenderMain(System.IntPtr) c9473bb7f38e2bb0c94c2e965321561b841db46862a6a0cfad92120febb5fdb7 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RenderMain(nint drawData)
```

Records ImGui draw data for the main application viewport.

**Parameter `drawData`:** The draw data consumed by render main; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L180).

## `RenderViewport`

<a id="api-b0c6b12372be99c4"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RenderViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget,System.IntPtr) c9b591f04cfcdfe1e89e4467e68d206c70ebf1c650dbbf03b572131decbf002a -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RenderViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target, nint drawData)
```

Records ImGui draw data for the supplied auxiliary viewport.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `drawData`:** The draw data consumed by render viewport; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L264).

## `ReplaceShaderArtifact`

<a id="api-7528892b12ccbcb1"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.ReplaceShaderArtifact(Inno.Rendering.GraphicsPipelineDescriptor) e4953a4382e9ea9e1becf5939e15e5199b67463f1563b7687f0c784089576169 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.ReplaceShaderArtifact(Inno.Rendering.GraphicsPipelineDescriptor pipelineDescriptor)
```

Queues a compiled shader replacement that commits atomically at a frame safety point.

**Parameter `pipelineDescriptor`:** Complete candidate artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L116).

## `ResizeViewport`

<a id="api-72a3b1e6a9aad52a"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.ResizeViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 7ea3f91e15aaf3aebfd4d0757622186223990a140c6cd2b4ffdd970d16101ae5 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.ResizeViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Resizes an auxiliary viewport surface to its current platform dimensions.

**Parameter `target`:** The existing target that receives the validated result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L242).

## `RetireViewport`

<a id="api-a425acb0b1e82e8a"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RetireViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 7ccc9d27f4ad6efc9668b26f06d3af04e73d493dbc4491d5cf9ad36206ffa512 -->

```csharp
public System.Threading.Tasks.Task Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.RetireViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Destroys the auxiliary viewport and releases its rendering resources.

**Parameter `target`:** The existing target that receives the validated result.

**Returns:** Completion of render-thread window release, or an already completed task for an unallocated viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L301).

## `SynchronizeMainOutput`

<a id="api-fc943f2a0d86aaf8"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.SynchronizeMainOutput(System.Int32,System.Int32) 7cc24fef910e1c14f8a05536aa38a7ec4ab3adea0a92de3492357ae495d649de -->

```csharp
public void Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.SynchronizeMainOutput(int pixelWidth, int pixelHeight)
```

Invalidates a captured main packet when its drawable extent changes.
The Shell owns device presentation availability and publishes it at frame boundaries.

**Parameter `pixelWidth`:** The pixel width consumed by synchronize main output; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `pixelHeight`:** The pixel height consumed by synchronize main output; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L203).

## `UnregisterTexture`

<a id="api-32adb35b12efa6e6"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.UnregisterTexture(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle) a0fbfe9ae81f8ecf3d66fa7ca23192196bc28461027d56df64287534effcdfa4 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.UnregisterTexture(Inno.Adapter.Presentation.ImGui.ImGuiTextureHandle texture)
```

Unregisters an opaque texture token without taking ownership of the source texture.

**Parameter `texture`:** Previously allocated token.

**Returns:** `true` when the token was an external registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L161).

## `lastShaderError`

<a id="api-fbee6f0dc00bdbbf"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.lastShaderError f7ed0e41b0d1561532f05108b3f7720e5b8bd6526288218a9112055d80bdbb49 -->

```csharp
public string? Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.lastShaderError { get; private set; }
```

Gets the last recoverable shader replacement error while the last-good pipeline remains active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L100).

## `supportsVertexOffsets`

<a id="api-02541321f3d48a68"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.supportsVertexOffsets 1eccaad08cb30a3eb1745f573fc09cf36d4efc4a031b45946da7d65aac6d83ff -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.supportsVertexOffsets { get; }
```

Gets whether every draw-data consumer applies per-command vertex offsets to 16-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L108).

## `supportsViewports`

<a id="api-e4101263d3d54599"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.supportsViewports 9a0fdae6fa90677963b813d73e59cb7d133cb80e14870c8f8c0a6d35bd48de40 -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.supportsViewports { get; }
```

Gets whether supports viewports is enabled for this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L105).

## `vertexLayout`

<a id="api-f8a21ab60178268b"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.vertexLayout 6cce2354f63a69b8dbd554d5f807cc001837ab8814816ea36e0594e7ab026d92 -->

```csharp
public static Inno.Rendering.RenderVertexLayout Inno.Adapter.Presentation.ImGui.BgfxImGuiRenderer.vertexLayout { get; }
```

Gets the exact interleaved vertex layout required by the built-in ImGui shaders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiRenderer.cs#L95).
