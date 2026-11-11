---
title: "Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget"
description: "Reference for Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.2ac9adfd730a8834
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget`

This reference describes `Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-30e718337aeab682) | Property |
| [`nativeHandles`](#api-f70f5c8400c14910) | Property |
| [`viewportId`](#api-88f7e3973dc70a48) | Property |
| [`width`](#api-6b2901e9763b1fc0) | Property |
| [`windowId`](#api-ff095bf6f493f350) | Property |

## Type declaration

<a id="api-2ac9adfd730a8834"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget f204f9e29fc4777070ca4d68d877c42ec8b4943b2b48292223c01506732fae6f -->

```csharp
public sealed class Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget
```

Describes one detached ImGui viewport without exposing SDL or graphics-backend handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L43).

## `height`

<a id="api-30e718337aeab682"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.height 405e44dc254265b4d903ee9508826e50b1451b6463b67f347cf554c26661d065 -->

```csharp
public int Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.height { get; internal set; }
```

Gets the current framebuffer height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L82).

## `nativeHandles`

<a id="api-f70f5c8400c14910"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.nativeHandles e355b351ed699725b9a2016dab2d10535df8b99caa9d8e516551abfb2190fd24 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.nativeHandles { get; }
```

Gets backend-neutral native-window integration handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L72).

## `viewportId`

<a id="api-88f7e3973dc70a48"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.viewportId 175af3927bde0f0b21bc441fc8799d1a8eece521999fd02dc4228d70a3f33c0e -->

```csharp
public uint Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.viewportId { get; }
```

Gets the stable Dear ImGui viewport identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L62).

## `width`

<a id="api-6b2901e9763b1fc0"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.width 517d495ddd8fb8c39211157849ae0e1bf8ee92e16692605410d869c02af47043 -->

```csharp
public int Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.width { get; internal set; }
```

Gets the current framebuffer width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L77).

## `windowId`

<a id="api-ff095bf6f493f350"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.windowId 016ec9d8ca2fcd45404905af26fbe3d56defa65986c9a23bb1bcd276d0b62909 -->

```csharp
public uint Inno.Adapter.Presentation.ImGui.PlatformImGuiViewportTarget.windowId { get; }
```

Gets the platform window identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/IPlatformImGuiRenderer.Api.cs#L67).
