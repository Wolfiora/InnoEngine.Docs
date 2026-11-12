---
title: "EditorPalette — Method: WithOpacity"
description: "Exact Method: WithOpacity contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.56c61a83c807026b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Method: WithOpacity

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `WithOpacity`

<a id="api-9655b556e94609bc"></a>
<!-- api: M:InnoEditor.ImGui.EditorPalette.WithOpacity(System.Numerics.Vector4,System.Single) 8ed4cc04d4a9825ad68467f5b71f3286978812c3145f9d6e9d3704368d3caf11 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.WithOpacity(System.Numerics.Vector4 color, float opacity)
```

Returns a theme color with a caller-selected opacity, normally one of the shared opacity levels.

**Parameter `color`:** Base RGB color.

**Parameter `opacity`:** Replacement alpha in the inclusive zero-to-one range.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L523).
