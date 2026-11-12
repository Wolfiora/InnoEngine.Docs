---
title: "ImGuiWidget — Method: EnsureSection"
description: "Exact Method: EnsureSection contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.f94c871ed661ef2e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EnsureSection

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EnsureSection`

<a id="api-7420ca9fdf1cee26"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EnsureSection(System.String,System.String) 92077471ac75513013fa7d19665ddeef1001c731c385dd21e495a593e44b4ec0 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.EnsureSection(string title = "Properties", string? description = null)
```

Ensures that subsequently drawn default properties belong to a framed section.

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

**Returns:** `true` when the current section accepts content; otherwise,
            `false` when that section is collapsed.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L153).
