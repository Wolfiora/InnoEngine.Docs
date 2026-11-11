---
title: "ImGuiWidget.ImGuiWidget — Method: HeaderSurface"
description: "Exact Method: HeaderSurface contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.54332259f21122fb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: HeaderSurface

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HeaderSurface`

<a id="api-df4f1e088e0124b1"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean) e3309719b13cb0b3c81618cefdbccad673ec4328ff0231a2bb865147b215f5ea -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HeaderSurface(string id, System.Action drawContent, bool spanWindowPadding = false)
```

Draws a square-cornered editor header surface using the shared target-header palette,
border, and padding.

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L159).
