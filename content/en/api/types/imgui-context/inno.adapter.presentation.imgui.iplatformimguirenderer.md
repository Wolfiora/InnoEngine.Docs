---
title: "Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer"
description: "Reference for Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.3ef9a806a2b2a92d
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer`

This reference describes `Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateViewport`](#api-f0adaa2ca9ce92d3) | Method |
| [`DrainViewportRetirements`](#api-079401d2ea88162f) | Method |
| [`PresentViewport`](#api-9c9c1751f643eb6b) | Method |
| [`RenderMain`](#api-69f233ee5483f99e) | Method |
| [`RenderViewport`](#api-c7d3ce6c083839d8) | Method |
| [`ResizeViewport`](#api-5fd8a89a21d3cf5b) | Method |
| [`RetireViewport`](#api-2f6e3369f70c0554) | Method |
| [`SynchronizeMainOutput`](#api-76a4ca78b2bedfb6) | Method |
| [`supportsVertexOffsets`](#api-3411a6b3305836a1) | Property |
| [`supportsViewports`](#api-34fceaaf545ab15e) | Property |

## Type declaration

<a id="api-3ef9a806a2b2a92d"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer e86fb57e583e5233cc8bc428fe979377fe7c8add022cd47b72f6db450bb014fd -->

```csharp
public interface Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer : System.IDisposable
```

Presents ImGui draw data through a replaceable renderer while platform input and windows stay shared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L88).

## `CreateViewport`

<a id="api-f0adaa2ca9ce92d3"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.CreateViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) f332d992ebc8f7fdefc0da4bd9448304e76eb3f5cf5baef28b96825a67fc6e16 -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.CreateViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Creates backend presentation state for one detached viewport.

**Parameter `target`:** New viewport target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L128).

## `DrainViewportRetirements`

<a id="api-079401d2ea88162f"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.DrainViewportRetirements fc574c82b2ff20b466775ce433ed901aec548d638bebecb191f89cd411137441 -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.DrainViewportRetirements()
```

Drains requested retirements at a closed-frame owner-thread point outside native UI callbacks.

**Constraints:** Failure or timeout retains all unfinished viewport and renderer owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L180).

## `PresentViewport`

<a id="api-9c9c1751f643eb6b"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.PresentViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 3c162c8fe0e8b13e1dcb6cfb8fdc62b8e3f5318968e7bb1465d49055ae49ec94 -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.PresentViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Marks one detached viewport ready for presentation.

**Parameter `target`:** Viewport destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L158).

## `RenderMain`

<a id="api-69f233ee5483f99e"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RenderMain(System.IntPtr) 59407f9137e41315b72ecb1262d6972f62bc6c9fcca2f7c5ddfadd262adc6efd -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RenderMain(nint drawData)
```

Consumes current main-window draw data before the next ImGui frame begins.

**Parameter `drawData`:** Opaque native ImDrawData pointer valid for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L106).

## `RenderViewport`

<a id="api-c7d3ce6c083839d8"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RenderViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget,System.IntPtr) 0b06e6795c791f75ef93749450df1584e0744bb8fea3f80b8329f0518ee05e6d -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RenderViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target, nint drawData)
```

Consumes draw data for one detached viewport.

**Parameter `target`:** Viewport destination.

**Parameter `drawData`:** Opaque native ImDrawData pointer valid for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L147).

## `ResizeViewport`

<a id="api-5fd8a89a21d3cf5b"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.ResizeViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 85799ae7c36d662a77b3ce1d89593da102dc13b8c1e9d0704f0c855196239c2b -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.ResizeViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Resizes backend presentation state for one detached viewport.

**Parameter `target`:** Updated viewport target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L136).

## `RetireViewport`

<a id="api-2f6e3369f70c0554"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RetireViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget) 247af96cc94719f349fd36d330c905f7c73b3fa29c1896939fa0b7372121860a -->

```csharp
System.Threading.Tasks.Task Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.RetireViewport(Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget target)
```

Removes the viewport from future rendering and schedules release of its borrowed native window.

**Parameter `target`:** The viewport whose original owner keeps its native window alive during retirement.

**Returns:** A task completed only when the renderer no longer uses the native window. This is not a GPU fence.

**Constraints:** Native callbacks may request retirement but must not wait or advance rendering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L172).

## `SynchronizeMainOutput`

<a id="api-76a4ca78b2bedfb6"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.SynchronizeMainOutput(System.Int32,System.Int32) c37afa35d850997b8b1244e9d0ea52111313dca69b05bdd1c1537eb2b3da7f19 -->

```csharp
void Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.SynchronizeMainOutput(int pixelWidth, int pixelHeight)
```

Synchronizes the primary drawable after a platform resize.

**Parameter `pixelWidth`:** Current drawable width in physical pixels.

**Parameter `pixelHeight`:** Current drawable height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L117).

## `supportsVertexOffsets`

<a id="api-3411a6b3305836a1"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.supportsVertexOffsets b44548dbd5d47a974ba9fc8bd3a332dfc574f4274edfa34827052176295902ee -->

```csharp
bool Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.supportsVertexOffsets { get; }
```

Gets whether every draw-data consumer applies per-command vertex offsets to 16-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L93).

## `supportsViewports`

<a id="api-34fceaaf545ab15e"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.supportsViewports 45abd82f74bffe6a8e46c0bce4fd932871a0df79f556cc6a38a71a9215d307ba -->

```csharp
bool Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer.supportsViewports { get; }
```

Gets whether detached viewport windows are rendered by this backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L98).
