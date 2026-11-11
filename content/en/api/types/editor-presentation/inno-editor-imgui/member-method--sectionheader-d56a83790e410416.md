---
title: "ImGuiWidget.ImGuiWidget — Method: SectionHeader"
description: "Exact Method: SectionHeader contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.d56a83790e410416
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: SectionHeader

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SectionHeader`

<a id="api-4ad2480898ce9fd4"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(System.String,System.String,System.Action) a296228597421825a8bbd41d54aba31501dba5b4ffd78bbe85e14382fcc87f17 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(string title, string? description = null, System.Action? drawLeadingControl = null)
```

Draws a section heading with hover-only description using the shared Inspector presentation.

**Parameter `title`:** Section title.

**Parameter `description`:** Optional hover explanation.

**Parameter `drawLeadingControl`:** Optional interactive control drawn before the section title.

**Throws `System.ArgumentNullException`:** Thrown when `title` is `null`.

**Returns:** `true` when the section content should be drawn; otherwise,
    `false` when the section is collapsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L184).
