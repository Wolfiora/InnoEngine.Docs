---
title: "ImGuiWidget.ImGuiWidget — Method: EnsureSection"
description: "Exact Method: EnsureSection contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.19bda01a87a30881
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: EnsureSection

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnsureSection`

<a id="api-70d48ca60e5e8352"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.EnsureSection(System.String,System.String) 9688211c4fec002dfeb8758189878a4460c32b4157265e2f29e7db010a51fdb6 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.EnsureSection(string title = "Properties", string? description = null)
```

Ensures that subsequently drawn default properties belong to a framed section.

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

**Returns:** `true` when the current section accepts content; otherwise,
    `false` when that section is collapsed.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L153).
