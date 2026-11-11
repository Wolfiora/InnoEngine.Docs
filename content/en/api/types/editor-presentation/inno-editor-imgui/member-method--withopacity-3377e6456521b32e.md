---
title: "EditorPalette — Method: WithOpacity"
description: "Exact Method: WithOpacity contracts in EditorPalette."
uid: api.inno.editor.imgui.3377e6456521b32e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.7230ca01354096de#type-declaration
---
# `EditorPalette`: Method: WithOpacity

Read these exact member contracts together with the [containing type](editorpalette.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WithOpacity`

<a id="api-7736fd10f10f340f"></a>
<!-- api: M:Inno.Editor.ImGui.EditorPalette.WithOpacity(System.Numerics.Vector4,System.Single) 0b8618b5ce8822f959377ec7d2eddf039a12d93e45edf69fc419cddfec2eadf9 -->

```csharp
public static System.Numerics.Vector4 Inno.Editor.ImGui.EditorPalette.WithOpacity(System.Numerics.Vector4 color, float opacity)
```

Returns a theme color with a caller-selected opacity, normally one of the shared opacity levels.

**Parameter `color`:** Base RGB color.

**Parameter `opacity`:** Replacement alpha in the inclusive zero-to-one range.

**Returns:** The validated vector4 that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L523).
