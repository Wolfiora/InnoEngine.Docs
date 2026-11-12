---
title: "ImGuiWidget — Method: LabelChip"
description: "Exact Method: LabelChip contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.2a328e1f6c25ca38
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: LabelChip

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `LabelChip`

<a id="api-ba09b2d8923620d5"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4) 4b95f915e3313663acdaf47100002406fd42ab1de511a95b38b50643e2ef20a4 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.LabelChip(string label, System.Numerics.Vector4 background)
```

Draws non-interactive text centered on a compact, softly rounded colored background.

**Parameter `label`:** Visible label text.

**Parameter `background`:** Background color drawn behind the label.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L44).
