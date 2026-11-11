---
title: "ImGuiWidget.ImGuiWidget — Method: Hint"
description: "Exact Method: Hint contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.e71b32a7f0d7636a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: Hint

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Hint`

<a id="api-3f954cdabdbc1d0e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Hint(System.String) d5b1c5dd5745271a99e198649e8413d9ae21ad618c8fe657640202bfe7ecca84 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Hint(string text)
```

Draws disabled hint text that wraps to the current content width.

**Parameter `text`:** Hint text.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L331).
