---
title: "ImGuiWidget — Method: SectionHeader"
description: "Exact Method: SectionHeader contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.d8fba56669ca6f7e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SectionHeader

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SectionHeader`

<a id="api-f34b82dbb0c9adf0"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action) 6ed2b4b5756504a5fb2d2f74c16f8c9f0783112b5db015efa524b26177c29a14 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.SectionHeader(string title, string? description = null, System.Action? drawLeadingControl = null)
```

Draws a section heading with hover-only description using the shared Inspector presentation.

**Parameter `title`:** Section title.

**Parameter `description`:** Optional hover explanation.

**Parameter `drawLeadingControl`:** Optional interactive control drawn before the section title.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.

**Returns:** `true` when the section content should be drawn; otherwise,
            `false` when the section is collapsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L184).
