---
title: "EditorPalette — Method: GetHovered"
description: "Exact Method: GetHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.3245c4d654b6aa00
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Method: GetHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetHovered`

<a id="api-fb5db791586ff531"></a>
<!-- api: M:InnoEditor.ImGui.EditorPalette.GetHovered(System.Numerics.Vector4) a42bf1a8345f8b2b6a0593cf9f48b5ddca8ffd667439e7b152c697b0275d915d -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.GetHovered(System.Numerics.Vector4 color)
```

Gets a hover treatment derived from a base theme color.

**Returns:** The base color blended toward the palette text color using the standard hover amount.

**Parameter `color`:** The color consumed by get hovered; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L387).
