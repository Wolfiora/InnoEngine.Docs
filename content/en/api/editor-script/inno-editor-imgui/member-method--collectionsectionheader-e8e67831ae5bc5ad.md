---
title: "ImGuiWidget — Method: CollectionSectionHeader"
description: "Exact Method: CollectionSectionHeader contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.e8e67831ae5bc5ad
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CollectionSectionHeader

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CollectionSectionHeader`

<a id="api-3add52dca6e9b996"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CollectionSectionHeader(System.String) 55816a0e9af48adb703727ac5d753399236334a34ea39d7704fb33d3b828ebb0 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CollectionSectionHeader(string title)
```

Draws a square collection-section band whose background, separator, and padding are shared
with hierarchy and Inspector presentation.

**Parameter `title`:** Literal section title.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L75).
