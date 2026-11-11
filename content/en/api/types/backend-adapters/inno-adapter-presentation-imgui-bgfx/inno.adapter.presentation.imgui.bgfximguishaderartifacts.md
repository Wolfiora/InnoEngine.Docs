---
title: "Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts"
description: "Reference for Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts in Inno.Adapter.Presentation.ImGui.Bgfx."
uid: api.inno.adapter.presentation.imgui.bgfx.3b69f28625758ef3
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-bgfx
---
# `Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts`

This reference describes `Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts` in `Inno.Adapter.Presentation.ImGui.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-presentation-imgui-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Load`](#api-e5882e00a054cfe2) | Method |

## Type declaration

<a id="api-3b69f28625758ef3"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts 704ed9365c07072ab4ddd45ac78acc055c8549921b0e91f185fb97b112454aec -->

```csharp
public static class Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts
```

Loads the graph-built, source-free ImGui program distributed with this presentation adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiShaderArtifacts.cs#L11).

## `Load`

<a id="api-e5882e00a054cfe2"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts.Load(Inno.Rendering.GraphicsApi) c86d35a90b315623f5ae6c4a89ee16df5c089e284447d610704169129d96b669 -->

```csharp
public static Inno.Rendering.GraphicsPipelineDescriptor Inno.Adapter.Presentation.ImGui.BgfxImGuiShaderArtifacts.Load(Inno.Rendering.GraphicsApi api)
```

Reads the precompiled program for the declared product and requested graphics API without invoking a compiler.

**Parameter `api`:** The active device API.

**Returns:** The validated texture binding, stages and render state required by ImGui.

**Throws `System.IO.InvalidDataException`:** The installed adapter lacks a required artifact or its binding contract is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/BgfxImGuiShaderArtifacts.cs#L25).
