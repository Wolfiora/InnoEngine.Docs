---
title: "Inno.Adapter.Presentation.ImGui.ImGuiFontScope"
description: "Reference for Inno.Adapter.Presentation.ImGui.ImGuiFontScope in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.cf66d2fa755594d8
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.ImGuiFontScope`

This reference describes `Inno.Adapter.Presentation.ImGui.ImGuiFontScope` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-65b708e2b9e671e8) | Method |

## Type declaration

<a id="api-cf66d2fa755594d8"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.ImGuiFontScope e55876dfac68517fb79c2e78ecf3a342cccb5326df5a4fd2276dfad76eaf63e6 -->

```csharp
public ref struct Inno.Adapter.Presentation.ImGui.ImGuiFontScope
```

Restores the previous ImGui font when a scoped style ends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/ImGuiFont.cs#L157).

## `Dispose`

<a id="api-65b708e2b9e671e8"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiFontScope.Dispose a367a31f15436d101dfb3841c5cb11cd3b28c4fc2c320e005cf8fa856f189985 -->

```csharp
public void Inno.Adapter.Presentation.ImGui.ImGuiFontScope.Dispose()
```

Restores the font that was active before this scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/ImGuiFont.cs#L173).
