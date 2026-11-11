---
title: "Inno.Adapter.Presentation.ImGui.ImGuiFont"
description: "Reference for Inno.Adapter.Presentation.ImGui.ImGuiFont in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.d7080d2675a24a21
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.ImGuiFont`

This reference describes `Inno.Adapter.Presentation.ImGui.ImGuiFont` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsAvailable`](#api-f069ffe2fe747113) | Method |
| [`PushStyle`](#api-9013dbf620200c94) | Method |

## Type declaration

<a id="api-d7080d2675a24a21"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.ImGuiFont 115e345bafd60262fcc00ea69b6366465e38597243a31e7c7fb04a350b2fb1a8 -->

```csharp
public static class Inno.Adapter.Presentation.ImGui.ImGuiFont
```

Provides scoped access to font faces registered for the current ImGui context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/ImGuiFont.cs#L12).

## `IsAvailable`

<a id="api-f069ffe2fe747113"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiFont.IsAvailable(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle) 2f4eeccb870d56a9202203cff79049e8043496b004af2eac113ebc9f6be3b199 -->

```csharp
public static bool Inno.Adapter.Presentation.ImGui.ImGuiFont.IsAvailable(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle style)
```

Gets whether an exact font style is available in the current ImGui context.

**Parameter `style`:** The composable style to query.

**Returns:** `true` when the exact face is registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/ImGuiFont.cs#L26).

## `PushStyle`

<a id="api-9013dbf620200c94"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiFont.PushStyle(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle) 12f259c98c7bc1cdef62b7f5e06410c46defb2fb0473a82ad2673f451e980876 -->

```csharp
public static Inno.Adapter.Presentation.ImGui.ImGuiFontScope Inno.Adapter.Presentation.ImGui.ImGuiFont.PushStyle(Inno.Adapter.Presentation.ImGui.ImGuiFontStyle style)
```

Pushes a font style for the current ImGui context and returns a scope that restores it.

**Parameter `style`:** The composable style to use.

**Returns:** A disposable scope. Missing faces gracefully fall back to the nearest registered face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/ImGuiFont.cs#L49).
