---
title: "ImGuiWidget.ImGuiWidget — Method: GetIconCatalogWidth"
description: "Exact Method: GetIconCatalogWidth contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0d52a0fd28d3d2c4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: GetIconCatalogWidth

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetIconCatalogWidth`

<a id="api-4b4b9eada94ce251"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetIconCatalogWidth 974471ce8977d677980edec55473980bfc8d8250be607b159319ea22d154f47e -->

```csharp
public float Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetIconCatalogWidth()
```

Measures the standard glyph column once per native frame in this UI session.

**Returns:** The widest visible standard glyph at the current font size, at least one text-line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L21).
