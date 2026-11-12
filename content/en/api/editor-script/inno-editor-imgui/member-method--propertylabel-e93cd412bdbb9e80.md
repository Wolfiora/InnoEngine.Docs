---
title: "ImGuiWidget — Method: PropertyLabel"
description: "Exact Method: PropertyLabel contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.e93cd412bdbb9e80
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: PropertyLabel

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PropertyLabel`

<a id="api-6b6047aed96848ba"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.PropertyLabel(System.String,System.String) 1a9cc1908f70ede6a296da60fb11a400dd6397327226441ee9230903bf270b85 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.PropertyLabel(string label, string? tooltip = null)
```

Draws a label within its current table cell, wrapping when the column is narrow.

**Parameter `label`:** Visible label text.

**Parameter `tooltip`:** Optional explanation shown while the label is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `label` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L119).
