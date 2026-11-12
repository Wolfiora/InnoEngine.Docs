---
title: "ImGuiFontStyle"
description: "Reference for ImGuiFontStyle in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.cc4f4726c3dc56e3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiFontStyle`

This reference describes `ImGuiFontStyle` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Bold`](#api-5b7deeaa34aa67ff) | Field |
| [`Italic`](#api-40f6fda2bd35f183) | Field |
| [`Regular`](#api-6ab495cc36ef4031) | Field |

## Type declaration

<a id="api-cc4f4726c3dc56e3"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiFontStyle a522be449ad540f3fe18613a67f05ebd722c97dbaba1dc585fdda5ce76ac6449 -->

```csharp
public enum InnoEditor.ImGui.ImGuiFontStyle : int
```

Chooses composable font emphasis while leaving actual font ownership with the presentation host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L11).

## `Bold`

<a id="api-5b7deeaa34aa67ff"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFontStyle.Bold fada0cf8995f71e7cb7de0e10e0b101961193508afb8636b8d6bddadfafa2127 -->

```csharp
InnoEditor.ImGui.ImGuiFontStyle.Bold = 1
```

Emphasizes text with the bold face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L20).

## `Italic`

<a id="api-40f6fda2bd35f183"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFontStyle.Italic a5b9acd8791db3d2cb6b6a970f3d3adb8696b12fe34ee1e8b2df415dc8608338 -->

```csharp
InnoEditor.ImGui.ImGuiFontStyle.Italic = 2
```

Emphasizes text with the italic face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L24).

## `Regular`

<a id="api-6ab495cc36ef4031"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFontStyle.Regular f72927ff23b8b8810d0aa19d8a1e2867a1329b68ec7c219a469ce5159b416e2c -->

```csharp
InnoEditor.ImGui.ImGuiFontStyle.Regular = 0
```

Uses the ordinary face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L16).
