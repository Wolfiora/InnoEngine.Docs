---
title: "ImGuiWidget.ImGuiWidget — Method: CollectionSectionHeader"
description: "Exact Method: CollectionSectionHeader contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.aabd56e2cb725824
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CollectionSectionHeader

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CollectionSectionHeader`

<a id="api-2796699c0e9f14e7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollectionSectionHeader(System.String) 149a821371981058ee754340e04bdb1a57f64964eaf6157520f22a5475186360 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollectionSectionHeader(string title)
```

Draws a square collection-section band whose background, separator, and padding are shared
with hierarchy and Inspector presentation.

**Parameter `title`:** Literal section title.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L75).
