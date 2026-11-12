---
title: "ImGuiWidget — Method: GetLabelChipSize"
description: "Exact Method: GetLabelChipSize contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.14e2e09892556516
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetLabelChipSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetLabelChipSize`

<a id="api-695346283117b18e"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetLabelChipSize(System.String) 1c6690b091dc9293c013dfbf78a0b783b2c31b4b205e02564fd3c2369308c99f -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.ImGuiWidget.GetLabelChipSize(string label)
```

Gets the layout size of a compact colored label chip using the centralized editor style.

**Parameter `label`:** Visible label text.

**Returns:** The size reserved by `InnoEditor.ImGui.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4)` for the supplied text.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L24).
