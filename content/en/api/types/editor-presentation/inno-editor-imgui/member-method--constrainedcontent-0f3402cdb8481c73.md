---
title: "ImGuiWidget.ImGuiWidget — Method: ConstrainedContent"
description: "Exact Method: ConstrainedContent contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0f3402cdb8481c73
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: ConstrainedContent

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConstrainedContent`

<a id="api-34dd58541f82646f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean) 7589353f93b26ec9eb5b8d1a85ec06b9f943d5a29a0237070f3f39408f531626 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ConstrainedContent(string id, System.Action drawContent, bool useWindowPadding = true)
```

Draws a vertically auto-sized content region that is constrained to the current available
width and cannot create an independent scroll range.

**Parameter `id`:** Stable identifier used by ImGui to track the content region.

**Parameter `drawContent`:** Callback that draws the complete region contents.

**Parameter `useWindowPadding`:** Whether the region should apply the centralized standard window padding exactly once.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L112).
