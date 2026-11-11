---
title: "ImGuiFont"
description: "Reference for ImGuiFont in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.6815fee41731ed11
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiFont`

This reference describes `ImGuiFont` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsAvailable`](#api-bc797b4f08609742) | Method |
| [`PushStyle`](#api-a0a2ca52b3b9fe4b) | Method |

## Type declaration

<a id="api-6815fee41731ed11"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiFont 8a21c6f805d505a5f5925d3ab341123cd3847a60204c3ca63fe25be77a982807 -->

```csharp
public static class Inno.Editor.ImGui.ImGuiFont
```

Uses the host's context-owned font catalog without exposing backend types to Editor features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L30).

## `IsAvailable`

<a id="api-bc797b4f08609742"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiFont.IsAvailable(Inno.Editor.ImGui.ImGuiFontStyle) 6347b1549cf23d3e5bf050d3821f4b92e528c9bf609fc22488be77b747a888cd -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiFont.IsAvailable(Inno.Editor.ImGui.ImGuiFontStyle style)
```

Checks whether the current host registered an exact face.

**Parameter `style`:** The requested emphasis.

**Returns:** True when the exact face is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L41).

## `PushStyle`

<a id="api-a0a2ca52b3b9fe4b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiFont.PushStyle(Inno.Editor.ImGui.ImGuiFontStyle) 16de4c3a7df0e5d75d67e855af3a729846774d7fb80127a6862b8728fae13390 -->

```csharp
public static Inno.Editor.ImGui.ImGuiFontScope Inno.Editor.ImGui.ImGuiFont.PushStyle(Inno.Editor.ImGui.ImGuiFontStyle style)
```

Pushes a host-owned font face for one synchronous control group.

**Parameter `style`:** The requested emphasis.

**Returns:** An owner-window/frame scope; the host may use a registered nearest face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L56).
