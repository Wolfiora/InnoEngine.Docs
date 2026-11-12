---
title: "ImGuiFont"
description: "Reference for ImGuiFont in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a9c8c290dfbf9e9a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiFont`

This reference describes `ImGuiFont` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsAvailable`](#api-863c4137134c5add) | Method |
| [`PushStyle`](#api-63d88278edee7027) | Method |

## Type declaration

<a id="api-a9c8c290dfbf9e9a"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiFont aad7b3d517382ef58296971cf4673ea90a89a32ca52af0580df08f02abf58987 -->

```csharp
public static class InnoEditor.ImGui.ImGuiFont
```

Uses the host's context-owned font catalog without exposing backend types to Editor features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L30).

## `IsAvailable`

<a id="api-863c4137134c5add"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiFont.IsAvailable(InnoEditor.ImGui.ImGuiFontStyle) 7625523af647a4c66e263d36ec1d0d7bb87f664ab2ef36c852d45a5e2760800e -->

```csharp
public static bool InnoEditor.ImGui.ImGuiFont.IsAvailable(InnoEditor.ImGui.ImGuiFontStyle style)
```

Checks whether the current host registered an exact face.

**Parameter `style`:** The requested emphasis.

**Returns:** True when the exact face is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L41).

## `PushStyle`

<a id="api-63d88278edee7027"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiFont.PushStyle(InnoEditor.ImGui.ImGuiFontStyle) d3f79de1740775892033f263045353f4b4c4f361bb50a9ff27685da39483f18d -->

```csharp
public static InnoEditor.ImGui.ImGuiFontScope InnoEditor.ImGui.ImGuiFont.PushStyle(InnoEditor.ImGui.ImGuiFontStyle style)
```

Pushes a host-owned font face for one synchronous control group.

**Parameter `style`:** The requested emphasis.

**Returns:** An owner-window/frame scope; the host may use a registered nearest face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L56).
